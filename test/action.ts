// Test activity generator

import { subjects, actions, objects, actionModifiers } from '../src/data'
import { generateAction } from '../src/logic'

const ATTEMPTS = 30
let i = 0

while (i < ATTEMPTS) {
    console.log(generateAction(subjects[0], actions, actionModifiers, objects))
    console.log(generateAction(subjects[1], actions, actionModifiers, objects))
    console.log(generateAction(subjects[2], actions, actionModifiers, objects))
    console.log(generateAction(subjects[3], actions, actionModifiers, objects))
    
    i++
}