//
// STYLES
//

import './scss/base.scss';

// 
// INTERFACES
//

interface Concept {
    name: string
    emoji: string
}

interface Question {
    text: string
    conceptA: Concept
    conceptB: Concept
}

const questions: Question[] = [
    {
        text: 'Jaký je tvůj vztah k učení?',
        conceptA: {
            name: 'fire',
            emoji: '🔥'
        },
        conceptB: {
            name: 'love',
            emoji: '❤️'
        }
    },
    {
        text: 'S osnovami nebo bez osnov?',
        conceptA: {
            name: 'structure',
            emoji: '📝'
        },
        conceptB: {
            name: 'no_structure',
            emoji: '🗑️'
        }
    },
    {
        text: 'Přednášky nebo semináře?',
        conceptA: {
            name: 'presentations',
            emoji: '👩‍🏫'
        },
        conceptB: {
            name: 'workshops',
            emoji: '🧑🏽‍🤝‍🧑🏻'
        }
    },
]

const manifestoConcepts: Concept[] = []

//
// BOOTSTRAP
//

// DOM

const rootEl = document.createElement('div')
rootEl.id='root'
window.document.body.appendChild(rootEl)

const wrapperEl = document.createElement('div')
wrapperEl.id='wrapper'

const textEl = document.createElement('div')
textEl.id = 'text'
textEl.innerText = 'Učíš.'

wrapperEl.appendChild(textEl)
rootEl.appendChild(wrapperEl)

const buttonsEl = document.createElement('div')
buttonsEl.id = 'buttons'

// Question
const questionEl = document.createElement('div')
questionEl.id = 'question'
questionEl.innerText = 'Otázka.'
wrapperEl.appendChild(questionEl)

// Buttons

const aButtonEl = document.createElement('button')
aButtonEl.className = 'btn'
aButtonEl.innerText = '🔥'

const bButtonEl = document.createElement('button')
bButtonEl.className = 'btn'
bButtonEl.innerText = '❤️'

buttonsEl.appendChild(aButtonEl)
buttonsEl.appendChild(bButtonEl)

wrapperEl.appendChild(buttonsEl)

// ===
// === STATE
// ===
let currentQuestion: Question | undefined = undefined

// ===
// === FUNCTIONS
// ===

const rerender = () => {
    if (manifestoConcepts.length === 0) {
        textEl.innerText = 'Učíš.'
    } else {
        for (const c of manifestoConcepts) {

        }
    }

    currentQuestion = questions.shift()

    if (currentQuestion) {
        questionEl.innerText = currentQuestion.text
        aButtonEl.innerText = currentQuestion.conceptA.emoji
        bButtonEl.innerText = currentQuestion.conceptB.emoji
    } else {
        questionEl.style.display = 'none'
        buttonsEl.style.display = 'none'
    }
}

const composeManifesto = (concepts: Concept[]): string => {
    let txt: string[] = []

    return txt.join(' ')
}

const choseConcept = (c: Concept) => {
    manifestoConcepts.push(c)
    rerender()
}

// ===
// === EVENTS
// ===

aButtonEl.onclick = () => {
    if (currentQuestion) {
        choseConcept(currentQuestion.conceptA)
    }
}

bButtonEl.onclick = () => {
    if (currentQuestion) {
        choseConcept(currentQuestion.conceptB)
    }
}

// ===
// === Fire it up
// ===

const init = () => {
    rerender()
}
init()