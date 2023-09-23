export interface ConceptCategory {
    name: string
}

export interface Concept {
    name: string
    description: string
    manifestoSentence: string
}

export interface Manifesto {
    concepts: Concept[]
}

export type AttributeType = 'students' | 'art' | 'society' | 'you'

export interface Attribute {
    type: AttributeType
    name: string
}

export interface WorldAttributes {
    students: Attribute[]
    art: Attribute[]
    society: Attribute[]
    you: Attribute[]
}

export interface World {
    concepts: Concept[]
    attributes: WorldAttributes
    manifesto: Manifesto
}

export interface State {
    scene: 'intro' | 'choice' | 'manifesto' | 'outro'
    currentConcepts: Concept[]

    conceptsDatabase: Concept[]
    attributesDatabase: Attribute[]

    world: World
}

export interface Subject {
    name: string

    displayVariants: string[]
}

export interface Action {
    verb: string
    suffix?: string
    modifiers?: string[]
}

export interface ActionModifier {
    name: string
}

export interface Objekt {
    name: string
    applicableActions: string[]
}