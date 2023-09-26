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
    const circleButtonEl = createDomElementWithIdAndClass(id + '-circle-button', 'circle-button', buttonsEl);
    const rectangleButtonEl = createDomElementWithIdAndClass(id + '-rectangle-button', 'rectangle-button', buttonsEl);

    return {
        buttonsEl,
        circleButtonEl,
        rectangleButtonEl
    }
}

export function shuffle<T>(array: T[]): T[] {
    return shuffleRandomJs(nativeMath, array)
}

export function pick<T>(array: T[]): T {
    return pickRandomJs(nativeMath, array)
}