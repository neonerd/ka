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
    attributes,
    concepts,
    subjects,
    actions,
    actionModifiers,
    objects
} from './data'

// ===
// === IMPORTED FUNCTIONS AND TEMPLATES
// ===

import { clone } from 'rambda'
import { createButtonsElement, createDomElementWithIdAndClass, shuffle, sleepPromise } from './util'
import { introTextTemplate, outroTextTemplate, questionTextTemplate, startTextTemplate } from './templates'
import { fadeInElement, fadeOutElement, hideElement, hideElementOnlyWithOpacity, showElement } from './animations'
import { composeManifestoHeading, generateAction, generateManifestoTextForPrinting, getConceptsForChoice, getManifestoNumber, postManifesto } from './logic'
import { CHOICE_RESET_TIME, INTRO_TIMING, MANIFESTO_TIMING, OUTRO_TIMING } from './constants'

// ===
// === DOM
// ===

// Main Elements

const rootEl = document.createElement('div')
rootEl.id='root'
window.document.body.appendChild(rootEl)

const wrapperEl = createDomElementWithIdAndClass('wrapper', 'wrapper')
wrapperEl.classList.add('color-1')
rootEl.appendChild(wrapperEl)
let currentColorTheme = 1

// Sections

// === Start
const startEl = createDomElementWithIdAndClass('start', 'start', wrapperEl)
const startTextEl = createDomElementWithIdAndClass('start-text', 'start-text', startEl)
startTextEl.innerHTML = startTextTemplate
const startButtonsGroup = createButtonsElement('start')
startEl.appendChild(startButtonsGroup.buttonsEl)

// === Intro
const introEl = createDomElementWithIdAndClass('intro', 'intro', wrapperEl)

const introText1El = createDomElementWithIdAndClass('intro-text', 'intro-text', introEl)
const introText2El = createDomElementWithIdAndClass('intro-text-2', 'intro-text', introEl)
const introText3El = createDomElementWithIdAndClass('intro-text-3', 'intro-text', introEl)

introText1El.innerHTML = 'Jste pedagožstvo / pedagožka / pedagog.'
introText2El.innerHTML = 'Jste součástí pedagogického sboru.'
introText3El.innerHTML = 'Vyberte si čtyři pojmy, které se stanou jádrem vašeho manifesta vzdělávání.'

// const introButtonsGroup = createButtonsElement('intro')
// introEl.appendChild(introButtonsGroup.buttonsEl)

// === Questions
const questionsEl = createDomElementWithIdAndClass('questions', 'questions', wrapperEl)

const questionsHolderEl = createDomElementWithIdAndClass('questions-holder', 'questions-holder', questionsEl)

const question1WrapperEl = createDomElementWithIdAndClass('question-1', 'question-text-wrapper', questionsHolderEl)
const question2WrapperEl = createDomElementWithIdAndClass('question-2', 'question-text-wrapper', questionsHolderEl)

const question1El = createDomElementWithIdAndClass('question-1', 'question-text', question1WrapperEl)
const question2El = createDomElementWithIdAndClass('question-2', 'question-text', question2WrapperEl)

const questionsButtonsGroup = createButtonsElement('questions')
questionsEl.appendChild(questionsButtonsGroup.buttonsEl)

question1El.innerHTML = questionTextTemplate('kontinuita', 'Kontinuita udržuje plynulý průběh vzdělávacího procesu bez přerušení. Budeš ji využívat pro lepší sledování a podporu studentů, což zvyšuje efektivitu učení a umožňuje lépe plánovat výuku a přizpůsobit ji potřebám jednotlivých žáků.')
question2El.innerHTML = questionTextTemplate('struktura', 'Struktura se týká organizace a uspořádání vzdělávacího procesu, včetně obsahu, cílů a metody. Pomáhá pedagogům lépe plánovat výuku, udržet ji systematickou a efektivní, což zvyšuje studentstvu jasnost a porozumění. Také usnadňuje hodnocení výkonů a poskytuje jasný rámec pro výukový proces.')

// === Manifesto
const manifestoEl = createDomElementWithIdAndClass('manifesto', 'manifesto', wrapperEl)

const manifestoTextEl = createDomElementWithIdAndClass('manifesto-text', 'manifesto-text', manifestoEl)

const manifestoHeadingEl = createDomElementWithIdAndClass('manifesto-heading', 'manifesto-heading', manifestoTextEl)
const manifestoFirstParagraphEl = createDomElementWithIdAndClass('manifesto-1-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoFirst2ParagraphEl = createDomElementWithIdAndClass('manifesto-1-p-2', 'manifesto-paragraph-2', manifestoTextEl)

const manifestoSecondParagraphEl = createDomElementWithIdAndClass('manifesto-2-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoSecond2ParagraphEl = createDomElementWithIdAndClass('manifesto-2-p-2', 'manifesto-paragraph-2', manifestoTextEl)

const manifestoThirdParagraphEl = createDomElementWithIdAndClass('manifesto-3-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoThird2ParagraphEl = createDomElementWithIdAndClass('manifesto-3-p-2', 'manifesto-paragraph-2', manifestoTextEl)

const manifestoFourthParagraphEl = createDomElementWithIdAndClass('manifesto-4-p', 'manifesto-paragraph', manifestoTextEl)
const manifestoFourth2ParagraphEl = createDomElementWithIdAndClass('manifesto-4-p-2', 'manifesto-paragraph-2', manifestoTextEl)

manifestoHeadingEl.innerHTML = 'kontinuita | supervize | konference | sebareflexe'
manifestoFirstParagraphEl.innerHTML = `Učím efektivněji a lépe si plánuju výuku.`
manifestoSecondParagraphEl.innerHTML = `Dostal jsem supervizi.`
manifestoThirdParagraphEl.innerHTML = `Zorganizovali jsme studentskou konferenci.`
manifestoFourthParagraphEl.innerHTML = `Reflektuji své pedagogické metody.`
manifestoFirst2ParagraphEl.innerHTML = `Studentstvo je sebevědomejší.`
manifestoSecond2ParagraphEl.innerHTML = `Studentské umění je jedinečnejší.`
manifestoThird2ParagraphEl.innerHTML = `Lidé víc vnímajú modrou barvu.`
manifestoFourth2ParagraphEl.innerHTML = `Jsem klidnější.`

// === Outro
const outroEl = createDomElementWithIdAndClass('outro', 'outro', wrapperEl)

const outroManifestConceptEl1 = createDomElementWithIdAndClass('outro-manifest-concept-1', 'outro-manifest-concept', outroEl)
const outroManifestConceptEl2 = createDomElementWithIdAndClass('outro-manifest-concept-2', 'outro-manifest-concept', outroEl)
const outroManifestConceptEl3 = createDomElementWithIdAndClass('outro-manifest-concept-3', 'outro-manifest-concept', outroEl)
const outroManifestConceptEl4 = createDomElementWithIdAndClass('outro-manifest-concept-4', 'outro-manifest-concept', outroEl)

outroManifestConceptEl1.innerHTML = 'kontinuita'
outroManifestConceptEl2.innerHTML = 'supervize'
outroManifestConceptEl3.innerHTML = 'struktura'
outroManifestConceptEl4.innerHTML = 'stáže'

const outroTextEl = createDomElementWithIdAndClass('outro-text', 'outro-text', outroEl)
outroTextEl.innerHTML = outroTextTemplate

const outroButtonsGroup = createButtonsElement('outro')
outroEl.appendChild(outroButtonsGroup.buttonsEl)

// ===
// === END OF DOM
// ===

// ===
// === SOUND
// ===
import { Howl } from 'howler'
import { fadeOutAndStopSound } from './audio'

const soundBank: Record<string, Howl> = {
    'MANIFEST_INTRO': new Howl({
        src: ['/sounds/MANIFEST_INTRO.wav'],
        autoplay: false
    }),
    'MANIFEST_MANIFEST_1': new Howl({
        src: ['/sounds/MANIFEST_MANIFEST_1.wav'],
        autoplay: false
    }),
    'MANIFEST_MANIFEST_2': new Howl({
        src: ['/sounds/MANIFEST_MANIFEST_2.wav'],
        autoplay: false
    }),
    'MANIFEST_MANIFEST_3': new Howl({
        src: ['/sounds/MANIFEST_MANIFEST_3.wav'],
        autoplay: false
    }),
    'MANIFEST_MANIFEST_4': new Howl({
        src: ['/sounds/MANIFEST_MANIFEST_4.wav'],
        autoplay: false
    }),
    'MANIFEST_POJMY_1': new Howl({
        src: ['/sounds/MANIFEST_POJMY_1.wav'],
        autoplay: false
    }),
    'MANIFEST_POJMY_2': new Howl({
        src: ['/sounds/MANIFEST_POJMY_2.wav'],
        autoplay: false
    }),
    'MANIFEST_POJMY_3': new Howl({
        src: ['/sounds/MANIFEST_POJMY_3.wav'],
        autoplay: false
    }),
    'MANIFEST_POJMY_4': new Howl({
        src: ['/sounds/MANIFEST_POJMY_4.wav'],
        autoplay: false
    })
}

// ===
// === FUNCTIONS
// ===

/*
    This function changes the color scheme to the next one
*/
const changeColorPalette = () => {
    const nextColor = currentColorTheme == 10 ? 'color-1' : `color-${currentColorTheme+1}`
    
    wrapperEl.classList.add(nextColor)
    wrapperEl.classList.remove(`color-${currentColorTheme}`)

    if (currentColorTheme == 10) {
        currentColorTheme = 1;
    } else {
        currentColorTheme++
    }
}

/*
    This function resets CSS of our elements to fix their positions and stuff after animations and before starting any state transition.
*/
const resetGlobalElementsState = () => {
    showElement(question1El, 'block')
    showElement(question2El, 'block')
    showElement(startButtonsGroup.rectangleButtonEl, 'block')
    showElement(startButtonsGroup.circleButtonEl, 'block')
    showElement(questionsButtonsGroup.rectangleButtonEl, 'block')
    showElement(questionsButtonsGroup.circleButtonEl, 'block')

    hideElementOnlyWithOpacity(introText1El)
    hideElementOnlyWithOpacity(introText2El)
    hideElementOnlyWithOpacity(introText3El)

    hideElement(outroEl)
    hideElementOnlyWithOpacity(outroManifestConceptEl1)
    hideElementOnlyWithOpacity(outroManifestConceptEl2)
    hideElementOnlyWithOpacity(outroManifestConceptEl3)
    hideElementOnlyWithOpacity(outroManifestConceptEl4)
    hideElementOnlyWithOpacity(outroTextEl)
}

const startCurrentState = async (s: State) => {
    resetGlobalElementsState()

    //START
    if (s.scene == 'start') {
        console.log('StartCurrentState: Start')
        fadeInElement(startEl)
    }

    // INTRO
    if (s.scene == 'intro') {
        console.log('StartCurrentState: Intro')

        // Sound
        soundBank.MANIFEST_INTRO.play()

        // Small pause here
        await sleepPromise(1000)

        showElement(introEl)
        await fadeInElement(introText1El)
        await fadeInElement(introText2El)
        await fadeInElement(introText3El)
        await sleepPromise(3000)

        finishCurrentState('', s)
    }

    // CHOICE
    if (s.scene == 'choice') {
        console.log('StartCurrentState: Choice')

        // Sound
        soundBank[`MANIFEST_POJMY_${s.world.concepts.length+1}`].volume(1)
        soundBank[`MANIFEST_POJMY_${s.world.concepts.length+1}`].play()

        // Set up timer to go back to beginning
        s.timers['choice_reset'] = setTimeout(() => {
            s.scene = 'reset'

            fadeOutElement(questionsEl).then(() => {
                fadeOutAndStopSound(soundBank[`MANIFEST_POJMY_${s.world.concepts.length+1}`])
                resetState(s)
                startCurrentState(s)
            })
        }, CHOICE_RESET_TIME)
        
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

        // Play the sound
        soundBank[`MANIFEST_MANIFEST_${s.world.concepts.length}`].play()

        // Compose the manifesto

        // TODO: Are we going to use concept names in heading?
        // manifestoHeadingEl.innerHTML = composeManifestoHeading(s.world.concepts)
        manifestoHeadingEl.innerHTML = ''

        if (s.world.concepts.length == 1) {
            const consequenceSentence = generateAction(subjects[0], actions, actionModifiers, objects, s.world)

            s.world.manifesto.sentences.push(s.world.concepts[0].manifestoSentence)
            s.world.manifesto.sentences.push(consequenceSentence)

            manifestoFirstParagraphEl.innerHTML = `${s.world.concepts[0].manifestoSentence}`
            manifestoFirst2ParagraphEl.innerHTML = consequenceSentence
        }

        if (s.world.concepts.length == 2) {
            const consequenceSentence = generateAction(subjects[1], actions, actionModifiers, objects, s.world)

            s.world.manifesto.sentences.push(s.world.concepts[1].manifestoSentence)
            s.world.manifesto.sentences.push(consequenceSentence)

            manifestoSecondParagraphEl.innerHTML = `${s.world.concepts[1].manifestoSentence}`
            manifestoSecond2ParagraphEl.innerHTML = consequenceSentence
        }

        if (s.world.concepts.length == 3) {
            const consequenceSentence = generateAction(subjects[2], actions, actionModifiers, objects, s.world)

            s.world.manifesto.sentences.push(s.world.concepts[2].manifestoSentence)
            s.world.manifesto.sentences.push(consequenceSentence)

            manifestoThirdParagraphEl.innerHTML = `${s.world.concepts[2].manifestoSentence}`
            manifestoThird2ParagraphEl.innerHTML = consequenceSentence
        }

        if (s.world.concepts.length == 4) {
            const consequenceSentence = generateAction(subjects[3], actions, actionModifiers, objects, s.world)

            s.world.manifesto.sentences.push(s.world.concepts[3].manifestoSentence)
            s.world.manifesto.sentences.push(consequenceSentence)

            manifestoFourthParagraphEl.innerHTML = `${s.world.concepts[3].manifestoSentence}`
            manifestoFourth2ParagraphEl.innerHTML = consequenceSentence
        }

        // Animations
        if (s.world.concepts.length == 1) {
            // Fade in UI
            showElement(manifestoEl)
            await fadeInElement(manifestoFirstParagraphEl)
            await fadeInElement(manifestoFirst2ParagraphEl)
        }
        if (s.world.concepts.length == 2) {
            showElement(manifestoFirstParagraphEl)
            showElement(manifestoFirst2ParagraphEl)
            // Fade in UI
            await fadeInElement(manifestoEl)
            await fadeInElement(manifestoSecondParagraphEl)
            await fadeInElement(manifestoSecond2ParagraphEl)
        }
        if (s.world.concepts.length == 3) {
            showElement(manifestoFirstParagraphEl)
            showElement(manifestoFirst2ParagraphEl)
            showElement(manifestoSecondParagraphEl)
            showElement(manifestoSecond2ParagraphEl)
            // Fade in UI
            await fadeInElement(manifestoEl)
            await fadeInElement(manifestoThirdParagraphEl)
            await fadeInElement(manifestoThird2ParagraphEl)
        }
        if (s.world.concepts.length == 4) {
            showElement(manifestoFirstParagraphEl)
            showElement(manifestoFirst2ParagraphEl)
            showElement(manifestoSecondParagraphEl)
            showElement(manifestoSecond2ParagraphEl)
            showElement(manifestoThirdParagraphEl)
            showElement(manifestoThird2ParagraphEl)
            // Fade in UI
            await fadeInElement(manifestoEl)
            await fadeInElement(manifestoFourthParagraphEl)
            await fadeInElement(manifestoFourth2ParagraphEl)
        }

        // Timing is custom for each step
        let timingForNow = MANIFESTO_TIMING
        if (s.world.concepts.length != 1) {
            timingForNow = timingForNow - 4000
        }

        setTimeout(() => {
            finishCurrentState('', s)
        }, timingForNow)
    }

    // OUTRO
    if (s.scene == 'outro') {
        console.log('StartCurrentState: Outro')

        if (s.world.concepts[0]) {
            outroManifestConceptEl1.innerHTML = `${s.world.concepts[0].name}`
        }
        if (s.world.concepts[1]) {
            outroManifestConceptEl2.innerHTML = `${s.world.concepts[1].name}`
        }
        if (s.world.concepts[2]) {
            outroManifestConceptEl3.innerHTML = `${s.world.concepts[2].name}`
        }
        if (s.world.concepts[3]) {
            outroManifestConceptEl4.innerHTML = `${s.world.concepts[3].name}`
        }

        // Get manifesto number
        // PRODUCTION
        // const manifestoNumber = await getManifestoNumber()
        // TEST
        const manifestoNumber = 1
        
        outroTextEl.innerHTML = `<p>Vaše manifesto #${manifestoNumber} se tiskne.</p>`

        // Show the element
        showElement(outroEl)

        // Start fading
        fadeInElement(outroManifestConceptEl1).then(() => {
            return fadeInElement(outroManifestConceptEl2)
        }).then(() => {
            return fadeInElement(outroManifestConceptEl3)
        }).then(() => {
            return fadeInElement(outroManifestConceptEl4)
        }).then(() => {
            return fadeInElement(outroTextEl)
        }).then(() => {
            // Print
            // We don't fail if printing doesn't work
            const text = generateManifestoTextForPrinting(manifestoNumber, s.world.concepts, s.world.manifesto.sentences)
            try {
                postManifesto(text)
            } catch (e) {
                console.warn('MANIFESTO PRINTING FAILED')
                console.log(e)
            }

            // Finish after timing
            setTimeout(() => {
                fadeOutElement(outroEl).then(() => {
                    setTimeout(() => {
                        finishCurrentState('', s)
                    }, 5000)
                })
            }, 20000)
        })
    }
}

const finishCurrentState = async (choice: string, s: State) => {
    console.log('FinishCurrentState')

    if (s.scene == 'start') {
        if (choice == 'A') {
            await fadeOutElement(startButtonsGroup.rectangleButtonEl, 2000)
        } else {
            await fadeOutElement(startButtonsGroup.circleButtonEl, 2000)
        }

        fadeOutElement(startEl).then(() => {
            s.scene = 'intro'
            startCurrentState(s)
        })
    }

    // INTRO
    if (s.scene == 'intro') {
        console.log('FinishCurrentState: Intro')
        fadeOutElement(introEl).then(() => {
            s.scene = 'choice'
            startCurrentState(s)
        })
    }
    // CHOICE
    if (s.scene == 'choice') {
        console.log('FinishCurrentState: Choice')

        // Clears the timeout that pushes us back to beginning
        clearTimeout(s.timers['choice_reset'])

        if (choice == 'A') {
            s.world.concepts.push(s.currentConcepts[0])
            fadeOutElement(question2El)
            await fadeOutElement(questionsButtonsGroup.rectangleButtonEl)
        } else {
            s.world.concepts.push(s.currentConcepts[1])
            fadeOutElement(question1El)
            await fadeOutElement(questionsButtonsGroup.circleButtonEl)
        }

        // Stop sound as we are crossing over to the next sound?
        setTimeout(() => {
            fadeOutAndStopSound(soundBank[`MANIFEST_POJMY_${s.world.concepts.length}`], 4000)
        }, 2000)

        fadeOutElement(questionsEl).then(() => {
            s.scene = 'manifesto'
            startCurrentState(s)
        })
    }
    // MANIFESTO
    if (s.scene == 'manifesto') {
        console.log('FinishtCurrentState: Manifesto')

        fadeOutElement(manifestoEl).then(() => {
            hideElement(manifestoFirstParagraphEl)
            hideElement(manifestoFirst2ParagraphEl)
            hideElement(manifestoSecondParagraphEl)
            hideElement(manifestoSecond2ParagraphEl)
            hideElement(manifestoThirdParagraphEl)
            hideElement(manifestoThird2ParagraphEl)
            hideElement(manifestoFourthParagraphEl)
            hideElement(manifestoFourth2ParagraphEl)

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
        console.log('FinishCurrentState: Outro')

        await fadeOutElement(wrapperEl, 4000, 'block')

        changeColorPalette()
        resetState(s)
        startCurrentState(s)
    
        await fadeInElement(wrapperEl)
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
// === RESET
// ===
const resetState = (s: State) => {
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

    s.scene = 'start'
    s.currentConcepts = []
    s.world = world
}

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
            concepts: [
            ],
            sentences: [],
        },
        usedVerbs: [],
        usedActions: [],
        usedActionModifiers: [],
        usedObjects: []
    }    

    const state: State = {
        scene: 'start',
        currentConcepts: [],
    
        conceptsDatabase: shuffle(clone(concepts)),
        attributesDatabase: shuffle(clone(attributes)),

        world: world,

        timers: {}
    }

    window.addEventListener('keypress', (e) => {
        handleInput(e, state)
    })

    startCurrentState(state)
}
init()