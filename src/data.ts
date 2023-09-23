import { Attribute, Concept, ConceptCategory, Subject, Action, Objekt, ActionModifier } from "./model";
import conceptsJson from '../data/concepts.json'

const categories: ConceptCategory[] = [
    {name: 'other'},
]

const concepts: Concept[] = conceptsJson

//
//  Of human actions, Arendt identifies two that she considers essential. 
//  These are forgiving past wrong (or unfixing the fixed past) and promising future benefit (or fixing the unfixed future)
//

const subjects: Subject[] = [
    {name: 'studentstvo', displayVariants: ['studentstvo', 'moje studentstvo', 'moje studentka Marie', 'můj student Petr']},
]

const actions: Action[] = [
    {verb: 'stávkuje', suffix: 'za'},
    {verb: 'bojuje', suffix: 'o'},
    {verb: 'pečuje', suffix: 'o'},

    {verb: 'čte'},
    {verb: 'sleduje'},
    {verb: 'vnímá'},
    {verb: 'tvoří'},
    {verb: 'reflektuje'},

    {verb: 'obsazuje'}
]

const actionModifiers: ActionModifier[] = [
    {name: 'více'},
    {name: 'intenzivněji'},
    {name: 'vášnivěji'},
    {name: 'častěji'},
    {name: 'zapáleněji'},
    {name: 'zapáleněji'},
    {name: 'radostněji'},
]

const objects: Objekt[] = [
    {name: 'spravedlnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje']},
    {name: 'rovnoprávnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje']},
    {name: 'svobodu', applicableActions: ['stávkuje', 'bojuje', 'pečuje']},
    {name: 'nepodmíněný příjem', applicableActions: ['stávkuje', 'bojuje']},
    
    {name: 'knihy', applicableActions: ['čte', 'vnímá', 'tvoří', 'reflektuje']},
    {name: 'filmy', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje']},

    {name: 'budovy', applicableActions: ['obsazuje']},
    {name: 'přírodu', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje']},
]

export {
    categories,
    concepts,
    attributes,

    subjects,
    actions,
    actionModifiers,
    objects
}


















































//
// ARCHIVE
//

const attributes: Attribute[] = [
    // Studentstvo
    {type: 'students', name: 'zručnost'},
    {type: 'students', name: 'umělecký projev'},
    {type: 'students', name: 'fyzický stav'},
    {type: 'students', name: 'duševní stav'},
    {type: 'students', name: 'komunikace'},
    {type: 'students', name: 'sebevědomí'},
    // Umění
    {type: 'art', name: 'kvalita'},
    {type: 'art', name: 'reflektivnost'},
    {type: 'art', name: 'hodnoty'},
    {type: 'art', name: 'jedinečnost'},
    {type: 'art', name: 'autenticita'},
    {type: 'art', name: 'krása'},
    // Společnost
    {type: 'society', name: 'kvalita'},
    {type: 'society', name: 'reflektivnost'},
    {type: 'society', name: 'hodnoty'},
    {type: 'society', name: 'jedinečnost'},
    {type: 'society', name: 'autenticita'},
    {type: 'society', name: 'krása'},
    // Ty
    {type: 'you', name: 'kvalita'},
    {type: 'you', name: 'reflektivnost'},
    {type: 'you', name: 'hodnoty'},
    {type: 'you', name: 'jedinečnost'},
    {type: 'you', name: 'autenticita'},
    {type: 'you', name: 'krása'},
]