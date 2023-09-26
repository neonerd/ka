import {clone} from 'rambda'

import { Action, ActionModifier, Concept, Objekt, State, Subject } from "./model"
import { shuffle, pick } from "./util"
import { capitalize } from "./strings"

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

//
// Generate an action that is a consequence of my manifesto concept choice
// 

export function generateAction (subject: Subject, actions: Action[], actionModifiers: ActionModifier[], objects: Objekt[]): string {
    const sentenceTokens = []

    // Select a subject variant
    const availableSubjectVariants = shuffle(clone(subject.displayVariants))
    const subjectVariant = availableSubjectVariants[0]

    // Select an object
    const availableObjects = shuffle(clone(objects))
    const object = availableObjects[0]

    // Select an action
    const availableActions = shuffle(clone(actions).filter(a => object.applicableActions.indexOf(a.verb) > -1))
    const action = availableActions[0]

    const availableActionModifiers = shuffle(clone(actionModifiers))
    const actionModifier = availableActionModifiers[0]    

    // Create the sentence
    // Subject
    sentenceTokens.push(capitalize(subjectVariant))
    
    // Action
    sentenceTokens.push(actionModifier.name)
    sentenceTokens.push(action.verb)
    if (action.suffix) {
        sentenceTokens.push(action.suffix)
    }
    
    // Object
    sentenceTokens.push(pick(object.displayVariants))

    return sentenceTokens.join(' ') + '.'
}