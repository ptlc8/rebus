const { toRebus, toPhonetic } = require("./rebus.js");

function checkEquals(a, b) {
    if (a == b) {
        console.log(`✔️  ${a}`);
    } else {
        console.log(`✖️  "${a}"`);
        console.log(`!= "${b}"`);
        const index = [...a].findIndex((char, i) => char !== b[i]);
        const subA = a.substring(Math.max(0, index - 4), index + 4);
        const subB = b.substring(Math.max(0, index - 4), index + 4);
        console.log(`Difference at index ${index}: "${subA}" vs "${subB}"`);
        process.exit(1);
    }
}


checkEquals(toPhonetic("Antoine a mangé tout le chocolat noir"), "ɑ̃twan a mɑ̃ʒe tu lə ʃokola nwaʁ");
checkEquals(toPhonetic("Mon chat a mangé un poisson"), "mɔ̃ ʃa a mɑ̃ʒe ɛ̃ pwasɔ̃");
checkEquals(toPhonetic("L'imprimeur de paris vend son âme au démon"), "lɛ̃pʁimøʁ də paʁi vɑ̃ sɔ̃ am o demɔ̃");

checkEquals(
    toPhonetic("L'Amour victorieux ou Amour vainqueur est une toile peinte vers 1601 ou 1602 par l'artiste lombard Michelangelo Merisi, dit « Caravage », alors qu'il vit et travaille à Rome."),
    "lamuʁ viktɔʁiø u amuʁ vɛ̃køʁ ɛ yn twal pɛ̃t vɛʁ 1601 u 1602 paʁ laʁtist lɔ̃baʁ miʃəlɑ̃ʒəlo məʁisi, di « kaʁavaʒ », alɔʁ kil vi ɛ tʁavaj a ʁɔm."
);
checkEquals(
    toPhonetic("Il s'agit d'une représentation mythologique de l'Amour, personnalisé par un Cupidon ailé qui prend les traits d'un adolescent souriant et entièrement nu."),
    "il saʒi dyn ʁəpʁesɑ̃tasiɔ̃ mitoloʒik də lamuʁ, pəʁsɔnalise paʁ ɛ̃ kypidɔ̃ ɛle ki pʁɑ̃ lə tʁɛ dɛ̃ adoləsɑ̃ suʁiɑ̃ ɛ ɑ̃tiɛʁəmɑ̃ ny."
);
checkEquals(
    toPhonetic("Le dieu tient des flèches à la main et il foule aux pieds différents symboles artistiques et scientifiques (instruments de musique abîmés, instruments de mesure, livres, cuirasse d'armure, etc.) signifiant ainsi la suprématie de l'Amour sur toutes choses — d'où le titre actuel, tiré du vers ovidien Omnia vincit amor, c'est-à-dire : « l'Amour triomphe de tout »."),
    "lə diø tjɛ̃ də flɛʃ a la mɛ̃ ɛ il ful o pie difeʁɑ̃ sɛ̃bol aʁtistik ɛ siɑ̃tifik (ɛ̃stʁymɑ̃ də mysik abime, ɛ̃stʁymɑ̃ də məsyʁ, livʁ, kɥiʁas daʁmyʁ, ətk.) siɲifiɑ̃ ɛ̃si la sypʁemasi də lamuʁ syʁ tut ʃos — du lə titʁ aktyəl, tiʁe dy vɛʁ ovidjɛ̃ ɔmnia vɛ̃si amɔʁ, səst-a-diʁ : « lamuʁ tʁiɔ̃f də tu »."
);
checkEquals(
    toPhonetic("Composée au moment où Caravage commence déjà à connaître une grande renommée dans le milieu artistique romain, la toile est une commande du marquis Vincenzo Giustiniani, pour qui cette œuvre représente la pièce maîtresse de sa splendide collection."),
    "kɔ̃pose o mɔmɑ̃ u kaʁavaʒ kɔmɑ̃s deʒa a kɔnɛtʁ yn ɡʁɑ̃d ʁənɔme dɑ̃ lə miliø aʁtistik ʁɔmɛ̃, la twal ɛ yn kɔmɑ̃d dy maʁki vɛ̃sɑ̃zo ʒiystiniani, puʁ ki sət œvʁ ʁəpʁesɑ̃t la piɛs mɛtʁəs də sa splɑ̃did koləksiɔ̃."
);
checkEquals(
    toPhonetic("En hommage au commanditaire, plusieurs éléments présents dans le tableau mettent en lumière son identité et ses vertus, à travers une symbolique complexe dont les clés font encore débat."),
    "ɑ̃ ɔmaʒ o kɔmɑ̃ditɛʁ, plysiøʁ elemɑ̃ pʁesɑ̃ dɑ̃ lə tablo mətɑ̃ ɑ̃ lymiɛʁ sɔ̃ idɑ̃tite ɛ sə vəʁty, a tʁavɛʁ yn sɛ̃bolik kɔ̃pləks dɔ̃ lə kle fɔ̃ ɑ̃kɔʁ deba."
);
checkEquals(
    toPhonetic("La toile témoigne également de la forte rivalité entre peintres dans le milieu romain du début du XVIIe siècle, notamment entre Caravage et Giovanni Baglione, qui, relevant le défi, produit lui aussi un Amour divin pour le cardinal Benedetto Giustiniani, frère du marquis."),
    "la twal temwaɲ eɡaləmɑ̃ də la fɔʁt ʁivalite ɑ̃tʁ pɛ̃tʁ dɑ̃ lə miliø ʁɔmɛ̃ dy deby dy ksvii siɛkl, notamɑ̃ ɑ̃tʁ kaʁavaʒ ɛ ʒiovani baɡliɔn, ki, ʁələvɑ̃ lə defi, pʁodɥi lɥi osi ɛ̃ amuʁ divɛ̃ puʁ lə kaʁdinal bənədəto ʒiystiniani, fʁɛʁ dy maʁki."
);


checkEquals(toRebus("Antoine a mangé tout le chocolat noir"), "📅🫵🪢 🅰️ m👼é tou l🇪 ♨k💧l🅰️ ⚫");
checkEquals(toRebus("Mon chat a mangé un poisson"), "🗻 🐱 🅰️ m👼é 1️⃣ 🪴🅰️🔊");
checkEquals(toRebus("L'imprimeur de paris vend son âme au démon"), "l1️⃣p🍚m🥚r 2️⃣ 🍰i 🍃 🔊 🅰️m 💧 🎲🗻");
checkEquals(toRebus("Antoine se rabote dans son lit joyeusement"), "📅🫵🪢 s🇪 🐀👢 🦷 🔊 🛏️ 😀👀s🇪m📅");

checkEquals(
    toRebus("L'Amour victorieux ou Amour vainqueur est une toile peinte vers 1601 ou 1602 par l'artiste lombard Michelangelo Merisi, dit « Caravage », alors qu'il vit et travaille à Rome."),
    "🗡️our vikt🥇i🥚 ou 🅰️mour 🍷k🥚r è 1️⃣ 🕸 🍺 🟢 1601 ou 1602 🍰 🥓tist lonb🅰️r mich🇪l👼🇪l💧 m🇪🍚🪚, di « 🚌🅰️v🅰️j », 🅰️l🥇 kil vi è t🐀v🧄 🅰️ 🥃."
);