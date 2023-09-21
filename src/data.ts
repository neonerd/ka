import { Attribute, Concept, ConceptCategory } from "./model";

const categories: ConceptCategory[] = [
    {name: 'other'},
]

const concepts: Concept[] = [
    {name: 'kontinuita', category: categories[0], description: 'Kontinuita udržuje plynulý průběh vzdělávacího procesu bez přerušení. Pedagogický sbor ji využívá pro lepší sledování a podporu studentů, což zvyšuje efektivitu učení a umožňuje lépe plánovat výuku a přizpůsobit ji potřebám jednotlivých žáků.'},
    {name: 'struktura', category: categories[0], description: 'Struktura se týká organizace a uspořádání vzdělávacího procesu, včetně obsahu, cílů a metody. Pomáhá pedagogům lépe plánovat výuku, udržet ji systematickou a efektivní, což zvyšuje studentstvu jasnost a porozumění. Také usnadňuje hodnocení výkonů a poskytuje jasný rámec pro výukový proces.'},
    {name: 'kritéria', category: categories[0], description: 'Kritéria jsou stanovené normy nebo měřítka, která pomáhají hodnotit studentské výkony a dosažení cílů. Pedagogický sbor jej využívá pro objektivní hodnocení a poskytování zpětné vazby. Kritéria zvyšují spravedlnost v hodnocení, usnadňují plánování výuky a směřují studenty k jasným cílům.'},
    {name: 'interpersonální strategie', category: categories[0], description: 'Interpersonální strategie zahrnují způsoby, jak pedagogický sbor komunikuje a buduje vztahy se studentstvem. To zahrnuje empatii, porozumění a efektivní komunikaci. Tato strategie vede ke zlepšenému učení a podpoře studentstva, což vytváří pozitivní učební prostředí a zvyšuje motivaci k učení.'},
    {name: 'časová dotace', category: categories[0], description: 'Časová dotace označuje alokaci času na konkrétní vzdělávací aktivity, témata nebo úkoly v rámci výuky. Pomáhá pedagogickému sboru plánovat výuku efektivněji, zajistit spravedlivé rozdělení času mezi různé učební aktivity a zvyšuje organizaci a produktivitu vzdělávacího procesu.'},
    {name: 'formální kurikulum', category: categories[0], description: 'Formální kurikulum je oficiálně stanovený plán výuky a obsah, který pedagogický sbor musí následovat ve školách a vzdělávacích institucích. Výhodou pro pedagogy je, že poskytuje jasný rámec pro výuku, usnadňuje hodnocení, a zajišťuje konzistenci ve vzdělávání.'},
    {name: 'reflexe', category: categories[0], description: 'Reflexe je procesem, kdy pedagogický sbor zkoumá a hodnotí svou vlastní výuku a pedagogické metody. To umožňuje zlepšit výuku, identifikovat silné stránky a oblasti ke zlepšení, což vede k efektivnějšímu vzdělávání a osobnímu růstu pedagogického sboru.'},
    {name: 'všestranný rozvoj osobnosti', category: categories[0], description: 'Všestranný rozvoj osobnosti zahrnuje rozvíjení fyzických, intelektuálních, sociálních a emocionálních aspektů studentstva. Pedagogický sbor podporuje komplexní růst, což vede k lepšímu přizpůsobení, kreativitě a sociální dovednosti, což zvyšuje kvalitu vzdělávání a osobního života studentů.'},
    {name: 'spolupráce pedagogického sboru', category: categories[0], description: 'Spolupráce pedagogického sboru zahrnuje týmovou práci pedagogického pracovnictva ve škole. To umožňuje sdílet nápady, zkušenosti a zlepšit výukové postupy. Výhody zahrnují větší efektivitu výuky, podporu při řešení problémů a zvyšení profesního rozvoje pedagogického sboru.'},
    {name: 'sebehodnocení', category: categories[0], description: 'Sebehodnocení zahrnuje schopnost studentstva zhodnotit vlastní dovednosti, pokrok a výkon. Tím podněcuje sebeuvědomění, samostatnost a zodpovědnost za vlastní učení. Studentstvo potřebuje prostor k naučení se sebehodnocovat. Pro pedagogický sbor usnadňuje individuální podporu a personalizovanou výuku. '},
    {name: 'objektivita a spravedlnost', category: categories[0], description: 'Objektivita znamená, že hodnocení je založeno na měřitelných a nestranných kritériích, což zajišťuje spravedlnost. To pomáhá pedagogickému sboru poskytovat spravedlivou zpětnou vazbu a hodnocení studentstvu bez diskriminace nebo předsudků, což vytváří důvěru a zlepšuje výsledky.'},
    {name: 'aktuální prychický stav hodnotitelstva', category: categories[0], description: 'Aktuální psychický stav hodnotitelstva odkazuje na momentální emocionální a mentální stav při hodnocení studentstva. Hodnotitelstvo by mělx být ve stabilním a vyváženém stavu, aby poskytlx spravedlivé a nestranné hodnocení. Výhodou pro pedagogický sbor je, že to zvyšuje objektivitu hodnocení a eliminuje vliv emocí a náhodných faktorů.'},
    {name: 'akulturace', category: categories[0], description: 'Akulturace v pedagogice označuje proces, kdy jedinec přijímá a přizpůsobuje se nové kultuře nebo prostředí. Pro pedagogický sbor znamená, že musí porozumět různým kulturním kontextům studentstva, což podporuje inkluzivní výuku a respekt k různorodosti, což může zvýšit efektivitu výuky.'},
    {name: 'cíl vzdělání', category: categories[0], description: 'Cíl vzdělání je zaměřen na to, co studentstvo má znát a dovedět se po absolvování vzdělávacího programu. Pro pedagogický sbor slouží k jasně definovaným směrnicím pro výuku a hodnocení, což usnadňuje plánování a poskytuje studentstvu jasný směr pro jejich učební cestu.'},
    {name: 'nácvik', category: categories[0], description: 'Nácvik zahrnuje opakování a procvičování dovedností nebo znalostí. Pedagogický sbor jej využívá k utvrzení učebního obsahu a zlepšení dovedností studentstva i své vlastní práce. Výhodou je lepší zapamatování a pochopení, což zvyšuje úspěch ve vzdělávání.'},
    {name: 'pansofie', category: categories[0], description: 'Pansofie je filozofický koncept, který zdůrazňuje komplexní a univerzální poznání a moudrost. Pro pedagogický sbor znamená rozvoj holistického pohledu na vzdělání, což podporuje široký a hluboký vývoj studentstva a učitelstva jako průvodce ve vzdělávání.'},
    {name: 'personalizace', category: categories[0], description: 'Personalizace znamená přizpůsobení výuky potřebám a preferencím každého studentstva. Pedagogický sbor může lépe podporovat individuální učební styly a tempo, což vede k většímu zapojení, motivaci a úspěšnosti studentstva.'},
    {name: 'profesní etika', category: categories[0], description: 'Profesní etika zahrnuje morální a etické normy, které pedagogický sbor dodržuje při výuce. Zajišťuje spravedlnost, důvěru a bezpečí ve vzdělávání. Pomáhá pedagogickému sboru vytvářet pozitivní vztahy se studentstvem a kolegy a udržovat kvalitu výuky.'},
]

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

export {
    categories,
    concepts,
    attributes
}