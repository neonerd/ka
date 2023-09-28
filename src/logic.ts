import {clone} from 'rambda'

import { Action, ActionModifier, Concept, DisplayVariant, Objekt, State, Subject } from "./model"
import { shuffle, pick } from "./util"
import { capitalize } from "./strings"
import { replacementTokens } from './data'

export function getConceptsForChoice (state: State) {
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
// Generate an action that is a consequence of my manifesto concept choice
// 
export function generateAction (subject: Subject, actions: Action[], actionModifiers: ActionModifier[], objects: Objekt[]): string {
    const sentenceTokens = []

    // Select a subject variant
    const availableSubjectVariants = shuffle(getWeightedDisplayVariants(subject.displayVariants))
    const subjectVariant = availableSubjectVariants[0]

    // Select an object
    const availableObjects = shuffle(clone(objects).filter(o => o.applicableSubjects.indexOf(subject.name) > -1))
    const object = availableObjects[0]

    // Select an action
    const availableActions = shuffle(clone(actions).filter(a => object.applicableActions.indexOf(a.verb) > -1))
    const action = availableActions[0]

    const availableActionModifiers = shuffle(clone(actionModifiers))
    const actionModifier = availableActionModifiers[0]    

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