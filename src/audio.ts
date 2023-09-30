import { Howl } from 'howler'

export function fadeOutAndStopSound (s: Howl, t: number = 4000) {
    s.fade(1, 0, t)
    setTimeout(() => {
        s.stop()
    }, t)
}