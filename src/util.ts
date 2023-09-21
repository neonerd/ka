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

export function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }