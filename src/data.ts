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

const replacementTokens: Record<string, string[]> = {
    '#personMName#': ['Petr', 'Jakub', 'Jan', 'Vít'],
    '#personFName#': ['Anna', 'Marie', 'Nora', 'Eva'],
    '#personNBName#': ['Ilja', 'Alex', 'Nikola', 'Jindra', 'Robin']
}

const subjects: Subject[] = [
    {
        name: 'studentstvo', 
        displayVariants: [
            {text: 'studentstvo', weight: 30}, 
            {text: 'moje studentstvo', weight: 30}, 
            {text: 'moje studentka #personFName#', weight: 5},
            {text: 'můj student #personMName#', weight: 5}, 
            {text: 'moje studentstvo #personNBName#', weight: 5}
        ]
    },
    {
        name: 'umění',
        displayVariants: [
            {text: 'studentská tvorba', weight: 10},
            {text: 'studentské umění', weight: 10}
        ]
    },
    {
        name: 'společnost',
        displayVariants: [
            {text: 'lidstvo', weight: 1},
            {text: 'společnost', weight: 1},
        ]
    },
    {
        name: 'já',
        displayVariants: [
            {text: 'já', weight: 1}
        ]
    }
]

const actions: Action[] = [
    {verb: 'je'},

    {verb: 'stávkuje', suffix: 'za'},
    {verb: 'bojuje', suffix: 'o'},
    {verb: 'pečuje', suffix: 'o'},

    {verb: 'organizuje'},
    {verb: 'pomáhá'},
    {verb: 'buduje'},

    {verb: 'čte'},
    {verb: 'vidí'},
    {verb: 'slyší'},
    {verb: 'hledá', suffix: 'nové'},
    {verb: 'sleduje'},
    {verb: 'poslouchá'},
    {verb: 'vnímá'},
    {verb: 'tvoří'},
    {verb: 'reflektuje'},

    {verb: 'přemýšlí', suffix: 'o'},
    {verb: 'kreslí'},
    {verb: 'točí'},
    {verb: 'maluje'},

    {verb: 'obsazuje'},
    {verb: 'demonstruje'},
    {verb: 'nabádá'},
    {verb: 'ovlyvňuje'},
    {verb: 'formuje'},
    {verb: 'posiluje'},
    {verb: 'zlepšuje'},
    {verb: 'generuje'},
    {verb: 'dekonstruuje'},
    {verb: 'provokuje'},

    // ===
    // === UMĚNÍ
    // ==

    // ===
    // === JÁ
    // ===

    {verb: 'jsem'},
    {verb: 'cítím'},
    {verb: 'přemýšlím', suffix: 'o'},
    {verb: 'hledám', suffix: 'nové'}

]

const actionModifiers: ActionModifier[] = [
    {name: 'více'},
    {name: 'intenzivněji'},
    {name: 'vášnivěji'},
    {name: 'častěji'},
    {name: 'zapáleněji'},
    {name: 'radostněji'},
    {name: 's větší vervou'},
    {name: 's větší láskou'},
    {name: 's větším nasazením'}
]

const objects: Objekt[] = [

    // ===
    // STUDENTSTVO A LIDI
    // ===

    // SPOLEČENSKÁ ROVINA
    {name: 'spravedlnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['spravedlnost'], applicableSubjects: ['studentstvo']},
    {name: 'rovnoprávnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['rovnoprávnost'], applicableSubjects: ['studentstvo']},
    {name: 'svobodu', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['svobodu'], applicableSubjects: ['studentstvo']},
    {name: 'bezpečí', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['bezpečí'], applicableSubjects: ['studentstvo']},
    {name: 'úctu', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['úctu'], applicableSubjects: ['studentstvo']},
    {name: 'ekonomickou soběstačnost', applicableActions: ['stávkuje', 'bojuje'], displayVariants: ['ekonomickou soběstačnost'], applicableSubjects: ['studentstvo']},
    {name: 'nepodmíněný příjem', applicableActions: ['stávkuje', 'bojuje'], displayVariants: ['nepodmíněný příjem'], applicableSubjects: ['studentstvo']},
    {name: 'budovy', applicableActions: ['obsazuje'], displayVariants: ['budovy'], applicableSubjects: ['studentstvo']},
    {name: 'věřejný prostor', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje'], displayVariants: ['věřejný prostor'], applicableSubjects: ['studentstvo']},

    // UMĚNÍ
    {name: 'knihy', applicableActions: ['čte', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['knihy'], applicableSubjects: ['studentstvo']},
    {name: 'filmy', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['filmy'], applicableSubjects: ['studentstvo']},
    {name: 'hudbu', applicableActions: ['poslouchá', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['hudbu'], applicableSubjects: ['studentstvo']},
    {name: 'architekturu', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['architekturu'], applicableSubjects: ['studentstvo']},
    {name: 'videohry', applicableActions: ['hraje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videohry'], applicableSubjects: ['studentstvo']},
    {name: 'performance', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['performance'], applicableSubjects: ['studentstvo']},
    {name: 'malby', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['malby', 'obrazy', 'výtvarné umění'], applicableSubjects: ['studentstvo']},
    {name: 'videoart', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videoart', 'umění pohyblivého obrazu'], applicableSubjects: ['studentstvo']},

    // PŘÍRODA
    {name: 'přírodu', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje'], displayVariants: ['přírodu'], applicableSubjects: ['studentstvo']},
    {name: 'kopce', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['kopce'], applicableSubjects: ['studentstvo']},
    {name: 'doliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['doliny'], applicableSubjects: ['studentstvo']},
    {name: 'stromy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['stromy'], applicableSubjects: ['studentstvo']},
    {name: 'rostliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['rostliny'], applicableSubjects: ['studentstvo']},
    {name: 'řeky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['řeky'], applicableSubjects: ['studentstvo']},
    {name: 'hory', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hory'], applicableSubjects: ['studentstvo']},
    {name: 'louky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['louky'], applicableSubjects: ['studentstvo']},
    {name: 'lesy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['lesy'], applicableSubjects: ['studentstvo']},
    {name: 'oblaka', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['oblaka'], applicableSubjects: ['studentstvo']},
    {name: 'kamínky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['kamínky'], applicableSubjects: ['studentstvo']},
    {name: 'hvězdy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hvězdy'], applicableSubjects: ['studentstvo']},
    {name: 'zvířata', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['zvířata'], applicableSubjects: ['studentstvo']},
    {name: 'ryby', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['ryby'], applicableSubjects: ['studentstvo']},
    {name: 'hmyz', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hmyz'], applicableSubjects: ['studentstvo']},
    {name: 'ptáky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['ptáky', 'ptáčky'], applicableSubjects: ['studentstvo']},
    {name: 'mech', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['mech'], applicableSubjects: ['studentstvo']},

    // EVENTY
    {name: 'stávky', applicableActions: ['organizuje'], displayVariants: ['stávky'], applicableSubjects: ['studentstvo']},
    {name: 'výstavy', applicableActions: ['organizuje'], displayVariants: ['výstavy'], applicableSubjects: ['studentstvo']},
    {name: 'konference', applicableActions: ['organizuje'], displayVariants: ['konference'], applicableSubjects: ['studentstvo']},
    {name: 'koncerty', applicableActions: ['organizuje'], displayVariants: ['koncerty'], applicableSubjects: ['studentstvo']},
    {name: 'festivaly', applicableActions: ['organizuje'], displayVariants: ['festivaly'], applicableSubjects: ['studentstvo']},
    {name: 'diskuze', applicableActions: ['organizuje'], displayVariants: ['diskuze'], applicableSubjects: ['studentstvo']},
    {name: 'protesty', applicableActions: ['organizuje'], displayVariants: ['protesty'], applicableSubjects: ['studentstvo']},
    {name: 'demonstrace', applicableActions: ['organizuje'], displayVariants: ['demonstrace'], applicableSubjects: ['studentstvo']},

    //
    // vidí jinak tvary
    // slyší jinak tóny
    // hledá nové příběhy
    // víc poslouchá lidi
    // vykračuje ze své bubliny
    // víc vnímá své okolí
    // přístupuje jinak k informacím
    // 

    // ABSTRAKTNĚJŠÍ KONCEPTY
    {name: 'barvu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['modrou barvu', 'žlutou barvu', 'červenou barvu', 'zelenou barvu', 'fialovou barvu', 'černou barvu', 'bílou barvu', 'šedou barvu', 'hnědou barvu', 'růžovou barvu', 'oranžovou barvu'], applicableSubjects: ['studentstvo']},
    {name: 'tvary', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tvary'], applicableSubjects: ['studentstvo']},
    {name: 'barvy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'vidí'], displayVariants: ['barvy'], applicableSubjects: ['studentstvo']},
    {name: 'tóny', applicableActions: ['slyší', 'vnímá'], displayVariants: ['tóny'], applicableSubjects: ['studentstvo']},
    {name: 'příběhy', applicableActions: ['vnímá', 'tvoří', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['příběhy'], applicableSubjects: ['studentstvo']},
    {name: 'slova', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'slyší'], displayVariants: ['slova'], applicableSubjects: ['studentstvo']},
    {name: 'své činy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['své činy', 'své konání'], applicableSubjects: ['studentstvo']},
    {name: 'pocity', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['pocity', 'své pocity', 'pocity jiných'], applicableSubjects: ['studentstvo']},
    {name: 'myšlenky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['myšlenky', 'své myšlenky', 'myšlenky jiných'], applicableSubjects: ['studentstvo']},

    // == LIDSKÉ VĚCI

    // TĚLESNO
    {name: 'doteky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['doteky'], applicableSubjects: ['studentstvo']},
    {name: 'blízkost', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['blízkost'], applicableSubjects: ['studentstvo']},
    {name: 'vůně', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['vůně'], applicableSubjects: ['studentstvo']},
    {name: 'hlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hlasy'], applicableSubjects: ['studentstvo']},
    {name: 'vlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vlasy'], applicableSubjects: ['studentstvo']},
    {name: 'oči', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['oči'], applicableSubjects: ['studentstvo']},
    {name: 'pokožku', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pokožku'], applicableSubjects: ['studentstvo']},
    {name: 'tělo', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tělo'], applicableSubjects: ['studentstvo']},
    {name: 'chůzi', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['chůzi'], applicableSubjects: ['studentstvo']},
    {name: 'dech', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['dech'], applicableSubjects: ['studentstvo']},
    {name: 'pohyb', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pohyb'], applicableSubjects: ['studentstvo']},

    // VZTAHY
    {name: 'jiné lidi', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['jiné lidi'], applicableSubjects: ['studentstvo']},
    {name: 'své přátelstvo', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['své přátelstvo'], applicableSubjects: ['studentstvo']},
    {name: 'svou rodinu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['svou rodinu'], applicableSubjects: ['studentstvo']},
    {name: 'komunitu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['komunitu'], applicableSubjects: ['studentstvo']},
    {name: 'vztahy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vztahy', 'mezilidské vztahy', 'partnerské vztahy', 'romantické vztahy'], applicableSubjects: ['studentstvo']},
    {name: 'lásku', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['lásku'], applicableSubjects: ['studentstvo']},

    // ===
    // === UMĚNÍ
    // ===

    // ===
    // === JÁ
    // ===
    {name: 'klidnější', applicableActions: ['jsem'], displayVariants: ['klidnější'], applicableSubjects: ['já']},
    {name: 'spokojenější', applicableActions: ['jsem'], displayVariants: ['spokojenější'], applicableSubjects: ['já']},

]

export {
    replacementTokens,

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