//
// STYLES
//

import './scss/base.scss';

// 
// INTERFACES
//

type ConceptCategory = 'teaching' | 'structure'

interface Concept {
    name: string
    emoji: string
    category: ConceptCategory
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
            emoji: '🔥',
            category: 'teaching'
        },
        conceptB: {
            name: 'love',
            emoji: '❤️',
            category: 'teaching'
        }
    },
    {
        text: 'S osnovami nebo bez osnov?',
        conceptA: {
            name: 'structure',
            emoji: '📝',
            category: 'structure'
        },
        conceptB: {
            name: 'no_structure',
            emoji: '🗑️',
            category: 'structure'
        }
    },
    {
        text: 'Přednášky nebo semináře?',
        conceptA: {
            name: 'presentations',
            emoji: '👩‍🏫',
            category: 'structure'
        },
        conceptB: {
            name: 'workshops',
            emoji: '🧑🏽‍🤝‍🧑🏻',
            category: 'structure'
        }
    },
    {
        text: 'Rychle nebo pomalu?',
        conceptA: {
            name: 'slow',
            emoji: '🐌',
            category: 'teaching'
        },
        conceptB: {
            name: 'fast',
            emoji: '💨',
            category: 'teaching'
        }
    }
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
        textEl.innerText = composeManifesto(manifestoConcepts)
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
    const categoryMap: Record<string, string[]> = {
        'teaching': [],
        'structure': []
    }

    let txt: string[] = []

    for (const c of concepts) {
        categoryMap[c.category].push(c.name)
    }

    // Teaching
    const teachingTokens = []
    for (const name of categoryMap['teaching']) {
        if (name == 'fire') {
            teachingTokens.push('se zápalem')
        }
        if (name == 'love') {
            teachingTokens.push('s láskou')
        }
        if (name == 'slow') {
            teachingTokens.push('pomalu')
        }
        if (name == 'fast') {
            teachingTokens.push('rychle')
        }
    }
    txt.push(`Učíš ${teachingTokens.join(' a ')}.`)

    // Structure
    const structureTokens = []
    for (const name of categoryMap['structure']) {
        if (name == 'structure') {
            structureTokens.push('s osnovami')
        }
        if (name == 'no_structure') {
            structureTokens.push('bez osnov')
        }
        if (name == 'presentations') {
            structureTokens.push('s přednáškami')
        }
        if (name == 'workshops') {
            structureTokens.push('se semináři')
        }
    }
    if (structureTokens.length) {
        txt.push(`Učíš ${structureTokens.join(' a ')}.`)
    }

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