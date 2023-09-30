import { shuffle as shuffleRandomJs, pick as pickRandomJs, nativeMath } from 'random-js'

export function createDomElementWithIdAndClass(id: string, className: string, appendTo?: HTMLElement) {
    const element = document.createElement('div');
    element.id = id;
    element.className = className;

    if (appendTo) {
        appendTo.appendChild(element);
    }

    return element;
}

export function createButtonsElement (id: string) {
    const buttonsEl = createDomElementWithIdAndClass(id + '-buttons', 'buttons')

    const circleButtonWrapperEl = createDomElementWithIdAndClass(id + '-circle-button-wrapper', 'circle-button-wrapper', buttonsEl)
    const circleButtonEl = createDomElementWithIdAndClass(id + '-circle-button', 'circle-button', circleButtonWrapperEl);

    const rectangleButtonWrapperEl = createDomElementWithIdAndClass(id + '-rectangle-button-wrapper', 'rectangle-button-wrapper', buttonsEl)
    const rectangleButtonEl = createDomElementWithIdAndClass(id + '-rectangle-button', 'rectangle-button', rectangleButtonWrapperEl);

    return {
        buttonsEl,
        circleButtonWrapperEl,
        rectangleButtonWrapperEl,
        circleButtonEl,
        rectangleButtonEl
    }
}

export function sleepPromise (t: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, t)
    })
}

export function shuffle<T>(array: T[]): T[] {
    return shuffleRandomJs(nativeMath, array)
}

export function pick<T>(array: T[]): T {
    return pickRandomJs(nativeMath, array)
}