// Test activity generator

import { subjects, actions, objects, actionModifiers } from '../src/data'
import { generateAction } from '../src/logic'
import { World } from '../src/model'

const ATTEMPTS = 100
let i = 0

while (i < ATTEMPTS) {
    const world: World = {
        attributes: {
            students: [],
            art: [],
            society: [],
            you: []
        },
        concepts: [],
        manifesto: {
            concepts: [],
            sentences: [],
        },
        usedVerbs: [],
        usedActions: [],
        usedActionModifiers: [],
        usedObjects: []
    }

    console.log(generateAction(subjects[0], actions, actionModifiers, objects, world))
    console.log(generateAction(subjects[1], actions, actionModifiers, objects, world))
    console.log(generateAction(subjects[2], actions, actionModifiers, objects, world))
    console.log(generateAction(subjects[3], actions, actionModifiers, objects, world))
    
    i++
}