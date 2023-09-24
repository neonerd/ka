//
// STYLES
//

import './scss/base.scss'

// 
// INTERFACES
//

import { State, World } from './model'

// ===
// === DATA
// ===

import {
    categories,
    attributes,
    concepts
} from './data'

// ===
// === IMPORTED FUNCTIONS AND TEMPLATES
// ===

import { clone } from 'rambda'
import { createButtonsElement, createDomElementWithIdAndClass, shuffle } from './util'
import { introTextTemplate, outroTextTemplate, questionTextTemplate, startTextTemplate } from './templates'
import { fadeInElement, fadeOutElement } from './animations'
import { composeManifestoHeading, getConceptsForChoice } from './logic'
import { INTRO_TIMING, MANIFESTO_TIMING, OUTRO_TIMING } from './constants'

// ===
// === DOM
// ===

// Main Elements

const rootEl = document.createElement('div')
rootEl.id='root'
window.document.body.appendChild(rootEl)

const wrapperEl = createDomElementWithIdAndClass('wrapper', 'wrapper')
rootEl.appendChild(wrapperEl)

// Sections

// === Start
const startEl = createDomElementWithIdAndClass('start', 'start', wrapperEl)
const startTextEl = createDomElementWithIdAndClass('start-text', 'start-text', startEl)
startTextEl.innerHTML = startTextTemplate
const startButtonsGroup = createButtonsElement('start')
startEl.appendChild(startButtonsGroup.buttonsEl)

// === Intro
const introEl = createDomElementWithIdAndClass('intro', 'intro', wrapperEl)
const introTextEl = createDomElementWithIdAndClass('intro-text', 'intro-text', introEl)
introTextEl.innerHTML = introTextTemplate

// const introButtonsGroup = createButtonsElement('intro')
// introEl.appendChild(introButtonsGroup.buttonsEl)

// === Questions
const questionsEl = createDomElementWithIdAndClass('questions', 'questions', wrapperEl)
const questionsHolderEl = createDomElementWithIdAndClass('questions-holder', 'questions-holder', questionsEl)
const question1El = createDomElementWithIdAndClass('question-1', 'question-text', questionsHolderEl)
const question2El = createDomElementWithIdAndClass('question-2', 'question-text', questionsHolderEl)
const questionsButtonsGroup = createButtonsElement('questions')
questionsEl.appendChild(questionsButtonsGroup.buttonsEl)

question1El.innerHTML = questionTextTemplate('kontinuita', 'Kontinuita udržuje plynulý průběh vzdělávacího procesu bez přerušení. Budeš ji využívat pro lepší sledování a podporu studentů, což zvyšuje efektivitu učení a umožňuje lépe plánovat výuku a přizpůsobit ji potřebám jednotlivých žáků.')
question2El.innerHTML = questionTextTemplate('struktura', 'Struktura se týká organizace a uspořádání vzdělávacího procesu, včetně obsahu, cílů a metody. Pomáhá pedagogům lépe plánovat výuku, udržet ji systematickou a efektivní, což zvyšuje studentstvu jasnost a porozumění. Také usnadňuje hodnocení výkonů a poskytuje jasný rámec pro výukový proces.')

// === Manifesto
const manifestoEl = createDomElementWithIdAndClass('manifesto', 'manifesto', wrapperEl)

const manifestoTextEl = createDomElementWithIdAndClass('manifesto-text', 'manifesto-text', manifestoEl)

const manifestoHeadingEl = createDomElementWithIdAndClass('manifesto-heading', 'manifesto-heading', manifestoTextEl)
const manifestoFirstParagraphEl = createDomElementWithIdAndClass('manifesto-1-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoSecondParagraphEl = createDomElementWithIdAndClass('manifesto-2-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoThirdParagraphEl = createDomElementWithIdAndClass('manifesto-3-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoFourthParagraphEl = createDomElementWithIdAndClass('manifesto-4-p', 'manifesto-paragraph', manifestoTextEl)

manifestoHeadingEl.innerHTML = 'kontinuita | supervize | konference | sebareflexe'
manifestoFirstParagraphEl.innerHTML = `Učím efektivněji a lépe si plánuju výuku.<br>Studentstvo je sebevědomejší.`
manifestoSecondParagraphEl.innerHTML = `Dostal jsem supervizi.<br>Studentské umění je jedinečnejší.`
manifestoThirdParagraphEl.innerHTML = `Zorganizovali jsme studentskou konferenci.<br>Lidé víc vnímajú modrou barvu.`
manifestoFourthParagraphEl.innerHTML = `Reflektuji své pedagogické metody.<br>Jsem klidnější.`

// === Outro
const outroEl = createDomElementWithIdAndClass('outro', 'outro', wrapperEl)

const outroTextEl = createDomElementWithIdAndClass('outro-text', 'outro-text', outroEl)
outroTextEl.innerHTML = outroTextTemplate

const outroButtonsGroup = createButtonsElement('outro')
outroEl.appendChild(outroButtonsGroup.buttonsEl)

// ===
// === END OF DOM
// ===

// ===
// === FUNCTIONS
// ===

const startCurrentState = (s: State) => {
    //START
    if (s.scene == 'start') {
        console.log('StartCurrentState: Start')
        fadeInElement(startEl)
    }

    // INTRO
    if (s.scene == 'intro') {
        console.log('StartCurrentState: Intro')
        fadeInElement(introEl).then(() => {
            setTimeout(() => {
                finishCurrentState('', s)
            }, INTRO_TIMING)
        })
    }

    // CHOICE
    if (s.scene == 'choice') {
        console.log('StartCurrentState: Choice')
        
        // Choose concepts and assign them to questions
        getConceptsForChoice(s)
        question1El.innerHTML = questionTextTemplate(s.currentConcepts[0].name, s.currentConcepts[0].description)
        question2El.innerHTML = questionTextTemplate(s.currentConcepts[1].name, s.currentConcepts[1].description)

        // Fade in UI
        fadeInElement(questionsEl)
    }
    // MANIFESTO
    if (s.scene == 'manifesto') {
        console.log('StartCurrentState: Manifesto')

        // Compose the manifesto

        // TODO: Are we going to use concept names in heading?
        // manifestoHeadingEl.innerHTML = composeManifestoHeading(s.world.concepts)
        manifestoHeadingEl.innerHTML = ''

        if (s.world.concepts[0]) {
            manifestoFirstParagraphEl.innerHTML = `${s.world.concepts[0].manifestoSentence}<br>Větička o tom, jak to vplývá na studentstvo.`
        }

        if (s.world.concepts[1]) {
            manifestoSecondParagraphEl.innerHTML = `${s.world.concepts[1].manifestoSentence}<br>Větička o tom, jak to vplývá na umčo.`
        } else {
            manifestoSecondParagraphEl.innerHTML = ``
        }

        if (s.world.concepts[2]) {
            manifestoThirdParagraphEl.innerHTML = `${s.world.concepts[2].manifestoSentence}<br>Větička o tom, jak to vplývá na společnost.`
        } else {
            manifestoThirdParagraphEl.innerHTML = ``
        }

        if (s.world.concepts[3]) {
            manifestoFourthParagraphEl.innerHTML = `${s.world.concepts[3].manifestoSentence}<br>Větička o tom, jak to vplývá na mně.`
        } else {
            manifestoFourthParagraphEl.innerHTML = ``
        }

        // Fade in UI
        fadeInElement(manifestoEl).then(() => {
            setTimeout(() => {
                finishCurrentState('', s)
            }, MANIFESTO_TIMING)
        })
    }

    // OUTRO
    if (s.scene == 'outro') {
        console.log('StartCurrentState: Outro')

        fadeInElement(outroEl).then(() => {
            setTimeout(() => {
                finishCurrentState('', s)
            }, OUTRO_TIMING)
        })
    }
}

const finishCurrentState = (choice: string, s: State) => {
    console.log('FinishtCurrentState')

    if (s.scene == 'start') {
        fadeOutElement(startEl).then(() => {
            s.scene = 'intro'
            startCurrentState(s)
        })
    }

    // INTRO
    if (s.scene == 'intro') {
        console.log('FinishtCurrentState: Intro')
        fadeOutElement(introEl).then(() => {
            s.scene = 'choice'
            startCurrentState(s)
        })
    }
    // CHOICE
    if (s.scene == 'choice') {
        console.log('FinishtCurrentState: Choice')

        if (choice == 'A') {
            s.world.concepts.push(s.currentConcepts[0])
        } else {
            s.world.concepts.push(s.currentConcepts[1])
        }

        fadeOutElement(questionsEl).then(() => {
            s.scene = 'manifesto'
            startCurrentState(s)
        })
    }
    // MANIFESTO
    if (s.scene == 'manifesto') {
        console.log('FinishtCurrentState: Manifesto')

        fadeOutElement(manifestoEl).then(() => {
            if (s.world.concepts.length < 4) {
                s.scene = 'choice'
                startCurrentState(s)
            } else {
                s.scene = 'outro'
                startCurrentState(s)
            }
        })        
    }

    // OUTRO
    if (s.scene == 'outro') {
        console.log('FinishtCurrentState: Outro')

        fadeOutElement(outroEl)
    }
}

const handleInput = (e: KeyboardEvent, s: State) => {
    console.log(e.code)

    // We only allow input on selected scenes
    if (s.scene == 'choice' || s.scene == 'start') {
        // A
        if (e.code == 'KeyA') {
            finishCurrentState('A', s)
        }

        // B
        if (e.code == 'KeyB') {
            finishCurrentState('B', s)
        }
    }    
}

// ===
// === EVENTS
// ===



// ===
// === BOOTSTRAP
// ===

const init = () => {
    const world: World = {
        attributes: {
            students: [],
            art: [],
            society: [],
            you: []
        },
        concepts: [],
        manifesto: {
            concepts: []
        }
    }
    
    console.log(concepts)

    const state: State = {
        scene: 'start',
        currentConcepts: [],
    
        conceptsDatabase: shuffle(clone(concepts)),
        attributesDatabase: shuffle(clone(attributes)),

        world: world
    }

    window.addEventListener('keyup', (e) => {
        handleInput(e, state)
    })

    startCurrentState(state)
}
init()