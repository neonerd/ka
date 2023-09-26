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
    {
        name: 'studentstvo', 
        displayVariants: [
            'studentstvo', 
            'moje studentstvo', 
            'moje studentka Marie',
            'můj student Petr', 
            'moje studentstvo Ilja'
        ]
    },
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
    {verb: 'hledá'},
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

    // SPOLEČENSKÁ ROVINA
    {name: 'spravedlnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['spravedlnost']},
    {name: 'rovnoprávnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['rovnoprávnost']},
    {name: 'svobodu', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['svobodu']},
    {name: 'bezpečí', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['bezpečí']},
    {name: 'úctu', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['úctu']},
    {name: 'ekonomickou soběstačnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['ekonomickou soběstačnost']},
    {name: 'nepodmíněný příjem', applicableActions: ['stávkuje', 'bojuje'], displayVariants: ['nepodmíněný příjem']},
    {name: 'budovy', applicableActions: ['obsazuje'], displayVariants: ['budovy']},
    {name: 'věřejný prostor', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje'], displayVariants: ['věřejný prostor']},

    // UMĚNÍ
    {name: 'knihy', applicableActions: ['čte', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['knihy']},
    {name: 'filmy', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['filmy']},
    {name: 'hudbu', applicableActions: ['poslouchá', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['hudbu']},
    {name: 'architekturu', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['architekturu']},
    {name: 'videohry', applicableActions: ['hraje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videohry']},
    {name: 'performance', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['performance']},
    {name: 'malby', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['malby', 'obrazy', 'výtvarné umění']},
    {name: 'videoart', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videoart', 'umění pohyblivého obrazu']},

    // PŘÍRODA
    {name: 'přírodu', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje'], displayVariants: ['přírodu']},
    {name: 'kopce', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['kopce']},
    {name: 'doliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['doliny']},
    {name: 'stromy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['stromy']},
    {name: 'rostliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['rostliny']},
    {name: 'řeky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['řeky']},
    {name: 'hory', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hory']},
    {name: 'louky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['louky']},
    {name: 'lesy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['lesy']},
    {name: 'oblaka', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['oblaka']},
    {name: 'kamínky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['kamínky']},
    {name: 'hvězdy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hvězdy']},
    {name: 'zvířata', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['zvířata']},
    {name: 'ryby', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['ryby']},
    {name: 'hmyz', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hmyz']},
    {name: 'ptáky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['ptáky', 'ptáčky']},
    {name: 'mech', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['mech']},

    // EVENTY
    {name: 'stávky', applicableActions: ['organizuje'], displayVariants: ['stávky']},
    {name: 'výstavy', applicableActions: ['organizuje'], displayVariants: ['výstavy']},
    {name: 'konference', applicableActions: ['organizuje'], displayVariants: ['konference']},
    {name: 'koncerty', applicableActions: ['organizuje'], displayVariants: ['koncerty']},
    {name: 'festivaly', applicableActions: ['organizuje'], displayVariants: ['festivaly']},
    {name: 'diskuze', applicableActions: ['organizuje'], displayVariants: ['diskuze']},
    {name: 'protesty', applicableActions: ['organizuje'], displayVariants: ['protesty']},
    {name: 'demonstrace', applicableActions: ['organizuje'], displayVariants: ['demonstrace']},

    // vidí jinak tvary
    // slyší jinak tóny
    // hledá nové příběhy
    // víc poslouchá lidi
    // vykračuje ze své bubliny
    // víc vnímá své okolí
    // přístupuje jinak k informacím
    // 

    // ABSTRAKTNĚJŠÍ KONCEPTY
    {name: 'barvu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['modrou barvu', 'žlutou barvu', 'červenou barvu', 'zelenou barvu', 'fialovou barvu', 'černou barvu', 'bílou barvu', 'šedou barvu', 'hnědou barvu', 'růžovou barvu', 'oranžovou barvu']},
    {name: 'tvary', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tvary']},
    {name: 'barvy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['barvy']},
    {name: 'tóny', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tóny']},
    {name: 'příběhy', applicableActions: ['vnímá', 'tvoří', 'sleduje', 'reflektuje'], displayVariants: ['příběhy']},
    {name: 'slova', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['slova']},
    {name: 'své činy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['své činy', 'své konání']},
    {name: 'pocity', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pocity', 'své pocity', 'pocity jiných']},
    {name: 'myšlenky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['myšlenky', 'své myšlenky', 'myšlenky jiných']},

    // == LIDSKÉ VĚCI

    // TĚLESNO
    {name: 'doteky', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['doteky']},
    {name: 'blízkost', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['blízkost']},
    {name: 'vůně', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vůně']},
    {name: 'hlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hlasy']},
    {name: 'vlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vlasy']},
    {name: 'oči', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['oči']},
    {name: 'pokožku', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pokožku']},
    {name: 'tělo', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tělo']},
    {name: 'chůzi', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['chůzi']},
    {name: 'dech', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['dech']},
    {name: 'pohyb', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pohyb']},

    // VZTAHY
    {name: 'jiné lidi', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['jiné lidi']},
    {name: 'své přátelstvo', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['své přátelstvo']},
    {name: 'svou rodinu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['svou rodinu']},
    {name: 'komunitu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['komunitu']},
    {name: 'vztahy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vztahy', 'mezilidské vztahy', 'partnerské vztahy', 'romantické vztahy']},
    {name: 'lásku', applicableActions: ['stávkuje', 'bojuje', 'pečuje'], displayVariants: ['lásku']},

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