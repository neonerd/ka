export function showElement (el: HTMLElement, display = 'flex') {
    el.style.opacity = '1'
    el.style.display = display
}

export function fadeInElement (el: HTMLElement, time = 4000, display = 'flex') {
    return new Promise((resolve) => {
        el.style.transition = `all ${time}ms`
        el.style.opacity = '0'

        requestAnimationFrame(() => {
            // el.classList.add("showhide-open-" + display);
            el.style.display = display;

            requestAnimationFrame(() => {
                // el.classList.add("showhide-open-active");
                el.style.opacity = '1'
                
                setTimeout(() => {
                    resolve(true)
                }, time)
            });
        });
    })    
}

export function fadeOutElement (el: HTMLElement, time = 4000, display = 'flex') {
    return new Promise((resolve) => {
        el.style.transition = `all ${time}ms`
        el.style.opacity = '1'

        requestAnimationFrame(() => {
            // el.classList.remove("showhide-open-active");
            el.style.opacity = '0'

            requestAnimationFrame(() => {
                setTimeout(() => {
                    // el.classList.remove("showhide-open-" + display);
                    el.style.display = 'none'
                    resolve(true)
                }, time)
            });
        });
    })
}