import {clone} from 'rambda'

import { Action, ActionModifier, Concept, DisplayVariant, Objekt, State, Subject, World } from "./model"
import { shuffle, pick } from "./util"
import { capitalize } from "./strings"
import { concepts, replacementTokens } from './data'

export function getConceptsForChoice (state: State) {
    // If we run out of concepts, we reset them
    if (state.conceptsDatabase.length < 2) {
        state.conceptsDatabase = shuffle(clone(concepts))
    }

    // Select the concepts
    const concept1 = state.conceptsDatabase.pop()
    const concept2 = state.conceptsDatabase.pop()

    if (concept1 && concept2) {
        state.currentConcepts = []
        state.currentConcepts.push(concept1)
        state.currentConcepts.push(concept2)
    }    
}

export function getAttributeForChoice (state: State) {
}

export function composeManifestoHeading (worldConcepts: Concept[]): string {
    return worldConcepts.map(c => c.name).join(' | ')
}

/*
    Replace tokens in string with our premade token variations
*/
export function replaceToken (str: string): string {
    for(const k of Object.keys(replacementTokens)) {
        str = str.replace(k, pick(replacementTokens[k]))
    }

    return str
}

/*
    Get a clone of the displayVariant array with weighted options added
*/
export function getWeightedDisplayVariants (arr: DisplayVariant[]): DisplayVariant[] {
    const ret: DisplayVariant[] = []
    
    for (const d of arr) {
        for (let i = 0; i < d.weight; i++) {
            ret.push(clone(d))
        }
    }

    return ret
}

//
// Functions that allow us to select a word based on already used words
//
export function getAvailableObject (world: World, objects: Objekt[]): Objekt {
    for (const o of objects) {
        if (world.usedObjects.indexOf(o.name) < 0) {
            return o
        }
    }

    throw new Error('Could not find another object')
}

export function getAvailableAction (world: World, actions: Action[]): Action {
    for (const a of actions) {
        if (world.usedActions.indexOf(a.verb) < 0) {
            return a
        }
    }

    throw new Error('Could not find another action')
}

export function getAvailableActionModifiers (world: World, actionModifiers: ActionModifier[]): ActionModifier {
    for (const a of actionModifiers) {
        if (world.usedActionModifiers.indexOf(a.name) < 0) {
            return a
        }
    }

    throw new Error('Could not find another actionModifier')
}

//
// Generate an action that is a consequence of my manifesto concept choice
// 
export function generateAction (subject: Subject, actions: Action[], actionModifiers: ActionModifier[], objects: Objekt[], world: World): string {
    const sentenceTokens = []

    // Select a subject variant
    const availableSubjectVariants = shuffle(getWeightedDisplayVariants(subject.displayVariants))
    const subjectVariant = availableSubjectVariants[0]

    // Select an object
    const availableObjects = shuffle(clone(objects).filter(o => o.applicableSubjects.indexOf(subject.name) > -1))
    const object = getAvailableObject(world, availableObjects)
    world.usedObjects.push(object.name)

    // Select an action
    const availableActions = shuffle(clone(actions).filter(a => object.applicableActions.indexOf(a.verb) > -1))
    const action = getAvailableAction(world, availableActions)
    world.usedActions.push(action.verb)

    // Select an action modifier
    const availableActionModifiers = shuffle(clone(actionModifiers))
    const actionModifier = getAvailableActionModifiers(world, availableActionModifiers)
    world.usedActionModifiers.push(actionModifier.name)

    // Create the sentence
    // Subject
    sentenceTokens.push(
        capitalize(
            replaceToken(subjectVariant.text)
        )
    )
    
    // Action
    if (subject.useActionModifiers) {
        sentenceTokens.push(actionModifier.name)
    }
    
    // Plural
    if (subjectVariant.isPlural) {
        sentenceTokens.push(action.pluralVerb)
    } else {
        sentenceTokens.push(action.verb)
    }
    
    if (action.suffix) {
        sentenceTokens.push(action.suffix)
    }
    
    // Object
    sentenceTokens.push(pick(object.displayVariants))

    return sentenceTokens.join(' ') + '.'
}

// ===
// === Generate manifesto text
// ===
export function generateManifestoTextForPrinting (number: number, concepts: Concept[], sentences: string[]) {
return `~~~


manifest #${number}


${concepts[0].name}
${concepts[1].name}
${concepts[2].name}
${concepts[3].name}


${sentences[0]}
${sentences[1]}

${sentences[2]}
${sentences[3]}

${sentences[4]}
${sentences[5]}

${sentences[6]}
${sentences[7]}


~~~






_______________`
}

// ===
// === Get manifesto number from the server
// ===
export function getManifestoNumber () {
    return fetch('http://localhost:3000')
        .then(res => res.json())
        .then(res => {
            return res.manifestoNumber
        })
}

// ===
// === Post the manifesto to the server and print it
// ===
export function postManifesto (manifestoText: string) {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({manifesto:manifestoText})
    })
}