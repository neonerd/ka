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
    '#personMName#': ['Petr', 'Jakub', 'Jan', 'Vít', 'Tomáš', 'Martin', 'Matěj'],
    '#personFName#': ['Anna', 'Marie', 'Nora', 'Eva', 'Helena', 'Nela', 'Kateřina', 'Zuzana', 'Petra'],
    '#personNBName#': ['Ilja', 'Alex', 'Nikola', 'Jindra', 'Robin']
}

const subjects: Subject[] = [
    {
        name: 'studentstvo', 
        useActionModifiers: true,
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
        useActionModifiers: true,
        displayVariants: [
            {text: 'studentská tvorba', weight: 10},
            {text: 'studentské umění', weight: 10}
        ]
    },
    {
        name: 'společnost',
        useActionModifiers: true,
        displayVariants: [
            {text: 'lidstvo', weight: 5},
            {text: 'lidi', isPlural: true, weight: 20},
            {text: 'lidé', isPlural: true, weight: 20},
            {text: 'společnost', weight: 5},
        ]
    },
    {
        name: 'já',
        useActionModifiers: false,
        displayVariants: [
            {text: 'já', weight: 1}
        ]
    }
]

const actions: Action[] = [
    
    {verb: 'je', pluralVerb: 'jsou'},
    {verb: 'stávkuje', pluralVerb: 'stávkují', suffix: 'za', disableModifiers: true},
    {verb: 'bojuje', pluralVerb: 'bojují', suffix: 'o'},
    {verb: 'pečuje', pluralVerb: 'pečují', suffix: 'o'},
    {verb: 'organizuje', pluralVerb: 'organizují'},
    {verb: 'pomáhá', pluralVerb: 'pomáhají',},
    {verb: 'buduje', pluralVerb: 'budují',},
    {verb: 'čte', pluralVerb: 'čtou'},
    {verb: 'vidí', pluralVerb: 'vidí'},
    {verb: 'slyší', pluralVerb: 'slyší'},
    {verb: 'hledá', pluralVerb: 'hledají'},
    {verb: 'sleduje', pluralVerb: 'sledují'},
    {verb: 'poslouchá', pluralVerb: 'poslouchají'},
    {verb: 'vnímá', pluralVerb: 'vnímají'},
    {verb: 'tvoří', pluralVerb: 'tvoří'},
    {verb: 'reflektuje', pluralVerb: 'reflektují'},
    {verb: 'přemýšlí', pluralVerb: 'přemýšlí', suffix: 'o'},
    {verb: 'píše', pluralVerb: 'píšou'},
    {verb: 'kreslí', pluralVerb: 'kreslí'},
    {verb: 'točí', pluralVerb: 'točí'},
    {verb: 'maluje', pluralVerb: 'malují'},
    {verb: 'hraje', pluralVerb: 'hrají'},
    {verb: 'obsazuje', pluralVerb: 'obsazují'},
    {verb: 'demonstruje', pluralVerb: 'demonstrují'},
    {verb: 'nabádá', pluralVerb: 'nabádají'},
    {verb: 'formuje', pluralVerb: 'formují'},
    {verb: 'posiluje', pluralVerb: 'posilují'},
    {verb: 'zlepšuje', pluralVerb: 'zlepšují'},
    {verb: 'generuje', pluralVerb: 'generují'},
    {verb: 'dekonstruuje', pluralVerb: 'dekonstruují'},
    {verb: 'provokuje', pluralVerb: 'provokují'},
    {verb: 'chodí', pluralVerb: 'chodí', suffix: 'na'},

    // ===
    // === UMĚNÍ
    // ===

    {verb: 'zobrazuje', pluralVerb: 'zobrazují'},
    {verb: 'znázorňuje', pluralVerb: 'znázorňují'},
    {verb: 'předpovídá', pluralVerb: 'předpovídají'},

    // ===
    // === JÁ
    // ===

    {verb: 'jsem', pluralVerb: 'jsme'},
    {verb: 'cítím', pluralVerb: 'cítíme'},
    {verb: 'cítím se', pluralVerb: 'cítíme se'},
    {verb: 'přemýšlím', pluralVerb: 'přemyšlíme', suffix: 'o'},
    {verb: 'chápu', pluralVerb: 'chápeme'},
    {verb: 'vím', pluralVerb: 'víme'},

]

const actionModifiers: ActionModifier[] = [
    // Classic prislovce
    {name: 'více'},
    {name: 'intenzivněji'},
    {name: 'vášnivěji'},
    {name: 'častěji'},
    {name: 'zapáleněji'},
    {name: 'radostněji'},
    {name: 'explicitněji'},
    {name: 'pozorněji'},
    {name: 'pečlivěji'},
    {name: 'precizněji'},
    {name: 'jasněji'},
    {name: 'zřetelněji'},
    {name: 'odvážněji'},
    {name: 'důkladněji'},
    {name: 'snáze'},
    {name: 'lépe'},
    {name: 'energičtěji'},
    {name: 'citlivěji'},
    {name: 'jemněji'},
    
    // S vetsi ...
    {name: 's větší vervou'},
    {name: 's větší láskou'},
    {name: 's větším nasazením'},
    {name: 's větším odhodláním'},
    {name: 's větší vášní'},
    {name: 's větší pozorností'},
    {name: 's větším zápalem'},
    {name: 's větší trpělivostí'},
    {name: 's větším zaujetím'},
    {name: 's větší odvahou'},
    {name: 's větším nadšením'},
    {name: 's větší upřímností'},
    {name: 's větším elánem'},
    {name: 's větší svobodomyslností'},
    {name: 's větší otevřeností'},
    {name: 's větší tvořivostí'},
    {name: 's větším zájmem'},
    {name: 's větším nadhledem'},
    {name: 's větší přesvědčením'},
    {name: 's větším pochopením'},
    {name: 's větší zvídavostí'},
]

const objects: Objekt[] = [

    // ===
    // STUDENTSTVO A LIDI
    // ===

    // SPOLEČENSKÁ ROVINA
    {name: 'spravedlnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje', 'buduje', 'vnímá'], displayVariants: ['spravedlnost'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'rovnoprávnost', applicableActions: ['stávkuje', 'bojuje', 'pečuje', 'buduje', 'vnímá'], displayVariants: ['rovnoprávnost'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'svobodu', applicableActions: ['stávkuje', 'bojuje', 'pečuje', 'buduje', 'vímá'], displayVariants: ['svobodu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'bezpečí', applicableActions: ['stávkuje', 'bojuje', 'pečuje', 'buduje', 'vnímá'], displayVariants: ['bezpečí'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'budovy', applicableActions: ['obsazuje', 'vnímá', 'pečuje'], displayVariants: ['budovy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'věřejný prostor', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje', 'bojuje', 'pečuje'], displayVariants: ['věřejný prostor'], applicableSubjects: ['studentstvo', 'společnost']},

    // {name: 'ekonomickou soběstačnost', applicableActions: ['stávkuje', 'bojuje'], displayVariants: ['ekonomickou soběstačnost'], applicableSubjects: ['studentstvo', 'společnost']},
    // {name: 'nepodmíněný příjem', applicableActions: ['stávkuje', 'bojuje'], displayVariants: ['nepodmíněný příjem'], applicableSubjects: ['studentstvo', 'společnost']},
    
    // UMĚNÍ
    {name: 'knihy', applicableActions: ['čte', 'vnímá', 'tvoří', 'reflektuje', 'píše'], displayVariants: ['knihy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'filmy', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje', 'točí'], displayVariants: ['filmy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hudbu', applicableActions: ['poslouchá', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['hudbu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'architekturu', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['architekturu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hry', applicableActions: ['hraje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videohry', 'deskovky', 'hry'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'performance', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['performance'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'malby', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['malby', 'obrazy', 'výtvarné umění'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'videoart', applicableActions: ['sleduje', 'vnímá', 'tvoří', 'reflektuje'], displayVariants: ['videoart', 'umění pohyblivého obrazu'], applicableSubjects: ['studentstvo', 'společnost']},

    // PŘÍRODA
    {name: 'přírodu', applicableActions: ['obsazuje', 'vnímá', 'sleduje', 'reflektuje'], displayVariants: ['přírodu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'kopce', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['kopce'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'doliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['doliny'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'stromy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['stromy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'rostliny', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['rostliny'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'řeky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['řeky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hory', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['hory'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'louky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['louky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'lesy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['lesy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'oblaka', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['oblaka'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'kamínky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['kamínky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hvězdy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['hvězdy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'zvířata', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['zvířata'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'ryby', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['ryby'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hmyz', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['hmyz'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'ptáky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['ptáky', 'ptáčky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'mech', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'maluje', 'kreslí', 'točí'], displayVariants: ['mech'], applicableSubjects: ['studentstvo', 'společnost']},

    // EVENTY
    {name: 'stávky', applicableActions: ['organizuje', 'chodí'], displayVariants: ['stávky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'výstavy', applicableActions: ['organizuje', 'chodí'], displayVariants: ['výstavy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'konference', applicableActions: ['organizuje', 'chodí'], displayVariants: ['konference'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'koncerty', applicableActions: ['organizuje', 'chodí'], displayVariants: ['koncerty'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'festivaly', applicableActions: ['organizuje', 'chodí'], displayVariants: ['festivaly'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'diskuze', applicableActions: ['organizuje', 'chodí'], displayVariants: ['diskuze'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'protesty', applicableActions: ['organizuje', 'chodí'], displayVariants: ['protesty'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'demonstrace', applicableActions: ['organizuje', 'chodí'], displayVariants: ['demonstrace'], applicableSubjects: ['studentstvo', 'společnost']},

    // ABSTRAKTNĚJŠÍ KONCEPTY
    {name: 'barvu', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['modrou barvu', 'žlutou barvu', 'červenou barvu', 'zelenou barvu', 'fialovou barvu', 'černou barvu', 'bílou barvu', 'šedou barvu', 'hnědou barvu', 'růžovou barvu', 'oranžovou barvu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'tvary', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tvary'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'barvy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'vidí'], displayVariants: ['barvy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'tóny', applicableActions: ['slyší', 'vnímá'], displayVariants: ['tóny'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'příběhy', applicableActions: ['vnímá', 'tvoří', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['příběhy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'slova', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'slyší'], displayVariants: ['slova'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'své činy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['své činy', 'své konání'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'pocity', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['pocity', 'své pocity', 'pocity jiných'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'myšlenky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['myšlenky', 'své myšlenky', 'myšlenky jiných'], applicableSubjects: ['studentstvo', 'společnost']},

    // == LIDSKÉ VĚCI

    // TĚLESNO
    {name: 'doteky', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['doteky'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'blízkost', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['blízkost'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'vůně', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['vůně'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'hlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['hlasy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'vlasy', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['vlasy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'oči', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['oči'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'pokožku', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pokožku'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'tělo', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['tělo'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'chůzi', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['chůzi'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'dech', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['dech'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'pohyb', applicableActions: ['vnímá', 'sleduje', 'reflektuje'], displayVariants: ['pohyb'], applicableSubjects: ['studentstvo', 'společnost']},

    // VZTAHY
    {name: 'jiné lidi', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'pečuje'], displayVariants: ['jiné lidi'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'své přátelstvo', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'pečuje'], displayVariants: ['své přátelstvo'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'svou rodinu', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'pečuje'], displayVariants: ['svou rodinu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'komunitu', applicableActions: ['vnímá', 'reflektuje', 'organizuje', 'buduje', 'pečuje'], displayVariants: ['komunitu'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'vztahy', applicableActions: ['vnímá', 'sleduje', 'reflektuje', 'buduje', 'pečuje'], displayVariants: ['vztahy', 'mezilidské vztahy', 'partnerské vztahy', 'romantické vztahy'], applicableSubjects: ['studentstvo', 'společnost']},
    {name: 'lásku', applicableActions: ['stávkuje', 'bojuje', 'pečuje', 'vnímá', 'sleduje', 'reflektuje', 'hledá'], displayVariants: ['lásku'], applicableSubjects: ['studentstvo', 'společnost']},

    // ===
    // === UMĚNÍ
    // ===
    // je
    // dekonstruuje
    // ovlivňuje
    // reflektuje
    // hledá
    // zlepšuje
    // formuje
    // posiluje
    // zobrazuje
    // znázorňuje
    // předpovídá

    {name: 'lásku', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['lásku'], applicableSubjects: ['umění']},
    {name: 'hodnoty', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['hodnoty'], applicableSubjects: ['umění']},
    {name: 'spravedlnost', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['spravedlnost'], applicableSubjects: ['umění']},
    {name: 'krásu', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['krásu'], applicableSubjects: ['umění']},
    {name: 'empatii', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['empatii'], applicableSubjects: ['umění']},
    {name: 'smysly', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['smysly'], applicableSubjects: ['umění']},
    {name: 'pravdu', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['pravdu'], applicableSubjects: ['umění']},
    {name: 'doteky', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['doteky'], applicableSubjects: ['umění']},
    {name: 'blízkost', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['blízkost'], applicableSubjects: ['umění']},
    {name: 'vůně', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['vůně'], applicableSubjects: ['umění']},
    {name: 'zvuky', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['zvuky'], applicableSubjects: ['umění']},
    {name: 'barvy', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['barvy'], applicableSubjects: ['umění']},
    {name: 'tvary', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['tvary'], applicableSubjects: ['umění']},
    {name: 'příběhy', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['příběhy'], applicableSubjects: ['umění']},
    {name: 'slova', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['slova'], applicableSubjects: ['umění']},
    {name: 'pocity', applicableActions: ['zobrazuje', 'reflektuje', 'dekonstruuje', 'hledá', 'znázorňuje'], displayVariants: ['pocity'], applicableSubjects: ['umění']},

    // ===
    // === JÁ
    // ===

    // jsem
    {name: 'klidnější', applicableActions: ['jsem'], displayVariants: ['klidnější'], applicableSubjects: ['já']},
    {name: 'spokojenější', applicableActions: ['jsem'], displayVariants: ['spokojenější'], applicableSubjects: ['já']},
    {name: 'citlivější', applicableActions: ['jsem'], displayVariants: ['citlivější'], applicableSubjects: ['já']},
    {name: 'otevřenější', applicableActions: ['jsem'], displayVariants: ['otevřenější'], applicableSubjects: ['já']},
    {name: 'sebevědomejší', applicableActions: ['jsem'], displayVariants: ['sebvědomejší'], applicableSubjects: ['já']},
    {name: 'smířlivější', applicableActions: ['jsem'], displayVariants: ['smířlivější'], applicableSubjects: ['já']},
    {name: 'hodnější', applicableActions: ['jsem'], displayVariants: ['hodnější'], applicableSubjects: ['já']},
    {name: 'chápavější', applicableActions: ['jsem'], displayVariants: ['chápavější'], applicableSubjects: ['já']},
    {name: 'vnímavější', applicableActions: ['jsem'], displayVariants: ['vnímavější'], applicableSubjects: ['já']},
    {name: 'křehčí', applicableActions: ['jsem'], displayVariants: ['křehčí'], applicableSubjects: ['já']},

    // cítím
    {name: 'víc lásky', applicableActions: ['cítím'], displayVariants: ['víc lásky'], applicableSubjects: ['já']},
    {name: 'víc smíru', applicableActions: ['cítím'], displayVariants: ['víc smíru'], applicableSubjects: ['já']},
    {name: 'víc něhy', applicableActions: ['cítím'], displayVariants: ['víc něhy'], applicableSubjects: ['já']},
    {name: 'víc sounáležitost', applicableActions: ['cítím'], displayVariants: ['víc sounáležitost'], applicableSubjects: ['já']},
    {name: 'víc', applicableActions: ['cítím', 'vím'], displayVariants: ['víc'], applicableSubjects: ['já']},
    {name: 'lépe', applicableActions: ['cítím se'], displayVariants: ['lépe'], applicableSubjects: ['já']},
    {name: 'krásu', applicableActions: ['cítím'], displayVariants: ['krásu'], applicableSubjects: ['já']}, 

    {name: 'respektovanější', applicableActions: ['cítím se'], displayVariants: ['respektovanější'], applicableSubjects: ['já']},
    {name: 'být víc součástí', applicableActions: ['cítím se'], displayVariants: ['být víc součástí'], applicableSubjects: ['já']}, 

    // přemýšlím o
    {name: 'hezčím světě', applicableActions: ['přemýšlím'], displayVariants: ['hezčím světě'], applicableSubjects: ['já']},
    {name: 'sobě', applicableActions: ['přemýšlím'], displayVariants: ['sobě'], applicableSubjects: ['já']},
    {name: 'jiných', applicableActions: ['přemýšlím'], displayVariants: ['jiných'], applicableSubjects: ['já']},
    {name: 'lásce', applicableActions: ['přemýšlím'], displayVariants: ['lásce'], applicableSubjects: ['já']},
    {name: 'smyslech', applicableActions: ['přemýšlím'], displayVariants: ['smyslech'], applicableSubjects: ['já']},
    {name: 'přírodě', applicableActions: ['přemýšlím'], displayVariants: ['přírodě'], applicableSubjects: ['já']},

    // chápu
    {name: 'podstatu', applicableActions: ['chápu'], displayVariants: ['podstatu'], applicableSubjects: ['já']},
    {name: 'vztahovost', applicableActions: ['chápu'], displayVariants: ['vztahovost'], applicableSubjects: ['já']},

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