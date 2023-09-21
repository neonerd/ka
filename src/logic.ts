import { Concept, State } from "./model"

export function getConceptsForChoice (state: State) {
    const concept1 = state.conceptsDatabase.pop()
    const concept2 = state.conceptsDatabase.pop()

    if (concept1 && concept2) {
        state.currentConcepts = []
        state.currentConcepts.push(concept1)
        state.currentConcepts.push(concept2)
    }    
}

export function composeManifestoHeading (worldConcepts: Concept[]): string {
    return worldConcepts.map(c => c.name).join(' | ')
}