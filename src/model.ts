export interface ConceptCategory {
    name: string
}

export interface Concept {
    name: string
    category: ConceptCategory
    description: string
}

export interface Manifesto {
    concepts: Concept[]
}

export type AttributeType = 'students' | 'art' | 'society' | 'you'

export interface Attribute {
    type: AttributeType
    name: string
}

export interface World {
    concepts: Concept[]
    attributes: Attribute[]
    manifesto: Manifesto
}

export interface State {
    scene: 'intro' | 'choice' | 'manifesto' | 'outro'
    currentConcepts: Concept[]

    conceptsDatabase: Concept[]
    attributesDatabase: Attribute[]

    world: World
}