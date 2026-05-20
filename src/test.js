import { toRebus, toPhonetic } from "./index.js";

function checkEquals(a, b) {
    if (a == b) {
        console.log(`✔️  ${a}`);
    } else {
        console.log(`✖️  "${a}"`);
        console.log(`!= "${b}"`);
        const index = a.split("").findIndex((char, i) => char !== b[i]);
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
    "lamuʁ viktɔʁijø u amuʁ vɛ̃køʁ ɛ yn twal pɛ̃t vɛʁ 1601 u 1602 paʁ laʁtist lɔ̃baʁ miʃəlɑ̃ʒəlo məʁizi, di « kaʁavaʒ », alɔʁ kil vi e tʁavaj a ʁɔm."
);
checkEquals(
    toPhonetic("Il s'agit d'une représentation mythologique de l'Amour, personnalisé par un Cupidon ailé qui prend les traits d'un adolescent souriant et entièrement nu."),
    "il saʒi dyn ʁəpʁezɑ̃tasjɔ̃ mitoloʒik də lamuʁ, pɛʁsɔnalize paʁ ɛ̃ kypidɔ̃ ɛle ki pʁɑ̃ le tʁɛ dɛ̃ adolesɑ̃ suʁijɑ̃ e ɑ̃tjɛʁəmɑ̃ ny."
);
checkEquals(
    toPhonetic("Le dieu tient des flèches à la main et il foule aux pieds différents symboles artistiques et scientifiques (instruments de musique abîmés, instruments de mesure, livres, cuirasse d'armure, etc.) signifiant ainsi la suprématie de l'Amour sur toutes choses — d'où le titre actuel, tiré du vers ovidien Omnia vincit amor, c'est-à-dire : « l'Amour triomphe de tout »."),
    "lə djø tjɛ̃ de flɛʃ a la mɛ̃ e il ful o pje difeʁɑ̃ sɛ̃bol aʁtistik e sjɑ̃tifik (ɛ̃stʁymɑ̃ də myzik abime, ɛ̃stʁymɑ̃ də məzyʁ, livʁ, kɥiʁas daʁmyʁ, ətk.) siɲifjɑ̃ ɛ̃si la sypʁemasi də lamuʁ syʁ tut ʃoz — du lə titʁ aktyɛl, tiʁe dy vɛʁ ovidjɛ̃ ɔmnja vɛ̃si amɔʁ, sɛ-a-diʁ : « lamuʁ tʁijɔ̃f də tu »."
);
checkEquals(
    toPhonetic("Composée au moment où Caravage commence déjà à connaître une grande renommée dans le milieu artistique romain, la toile est une commande du marquis Vincenzo Giustiniani, pour qui cette œuvre représente la pièce maîtresse de sa splendide collection."),
    "kɔ̃poze o mɔmɑ̃ u kaʁavaʒ kɔmɑ̃s deʒa a kɔnɛtʁ yn ɡʁɑ̃d ʁənɔme dɑ̃ lə miljø aʁtistik ʁɔmɛ̃, la twal ɛ yn kɔmɑ̃d dy maʁki vɛ̃sɑ̃zo ʒjystinjani, puʁ ki sɛt œvʁ ʁəpʁezɑ̃t la pjɛs mɛtʁɛs də sa splɑ̃did koləksjɔ̃."
);
checkEquals(
    toPhonetic("En hommage au commanditaire, plusieurs éléments présents dans le tableau mettent en lumière son identité et ses vertus, à travers une symbolique complexe dont les clés font encore débat."),
    "ɑ̃ ɔmaʒ o kɔmɑ̃ditɛʁ, plyzjøʁ elemɑ̃ pʁezɑ̃ dɑ̃ lə tablo mɛtɑ̃ ɑ̃ lymjɛʁ sɔ̃ idɑ̃tite e se vɛʁty, a tʁavɛʁ yn sɛ̃bolik kɔ̃plɛks dɔ̃ le kle fɔ̃ ɑ̃kɔʁ deba."
);
checkEquals(
    toPhonetic("La toile témoigne également de la forte rivalité entre peintres dans le milieu romain du début du XVIIe siècle, notamment entre Caravage et Giovanni Baglione, qui, relevant le défi, produit lui aussi un Amour divin pour le cardinal Benedetto Giustiniani, frère du marquis."),
    "la twal temwaɲ eɡaləmɑ̃ də la fɔʁt ʁivalite ɑ̃tʁ pɛ̃tʁ dɑ̃ lə miljø ʁɔmɛ̃ dy deby dy ksvij sjɛkl, notamɑ̃ ɑ̃tʁ kaʁavaʒ e ʒjovani baɡljɔn, ki, ʁələvɑ̃ lə defi, pʁodɥi lɥi osi ɛ̃ amuʁ divɛ̃ puʁ lə kaʁdinal bənədeto ʒjystinjani, fʁɛʁ dy maʁki."
);

checkEquals(
    toPhonetic("Un écureuil accéda à l'accueil des steppes, ennuyé par le reptile avec sa pelle efficacité dix."),
    "ɛ̃ ekyʁœj akseda a lakœj de stɛp, ɑ̃nɥije paʁ lə ʁɛptil avɛk sa pɛl efikasite dis." 
);
checkEquals(
    toPhonetic("Le camion-benne de Bèn traverse la terre derrière la serre pendant qu'un renne paresseux renverse une brouette pleine de fourchettes près de la messe, et que la mienne éclabousse sa fesse contre une pierre enterrée sous des passerelles anciennes."),
    "lə kamjɔ̃-bɛn də bɛn tʁavɛʁs la tɛʁ dɛʁijɛʁ la sɛʁ pɑ̃dɑ̃ kɛ̃ ʁɛn paʁesø ʁɑ̃vɛʁs yn bʁwɛt plɛn də fuʁʃɛt pʁɛ də la mɛs, e kə la mjɛn eklabus sa fɛs kɔ̃tʁ yn pjɛʁ ɑ̃teʁe su de pasəʁɛl ɑ̃sjɛn."
);


checkEquals(toRebus("Antoine a mangé tout le chocolat noir"), "📅🫵🪢 🅰️ m👼é tou l🇪‌ 🥵k💧l🅰️ ⚫");
checkEquals(toRebus("Mon chat a mangé un poisson"), "🗻 🐱 🅰️ m👼é 1️⃣ 🫛🔊");
checkEquals(toRebus("L'arnaqueur de paris vend son âme au démon"), "🥓n🅰️❤️ 2️⃣ 🍰ℹ️ 🌬️ 🔊 🅰️m 💧 🎲🗻");
checkEquals(toRebus("Antoine se rabote dans son lit joyeusement"), "📅🫵🪢 s🇪‌ 🐀👢 🦷 🔊 🛏️ 😀👀z🇪‌🤥");

checkEquals(
    toRebus("L'Amour victorieux ou Amour vainqueur est une toile peinte vers 1601 ou 1602 par l'artiste lombard Michelangelo Merisi, dit « Caravage », alors qu'il vit et travaille à Rome."),
    "🗡️our 🧬kt🥇ℹ️👀 ou 🅰️mour 🍷❤️ è 1️⃣ 🕸️ 🍺 🪱 1601 ou 1602 🍰 🥓tℹ️st lonb🎨 mℹ️ch🇪‌l👼🇪‌l💧 m🇪‌🍚zℹ️, dℹ️ « 🚌🅰️v🅰️🎮 », 🅰️l🥇 k🏝️ 🧬 é t🐀v🧄 🅰️ 🥃."
);

checkEquals(
    toRebus("Il s'agit d'une représentation mythologique de l'Amour, personnalisé par un Cupidon ailé qui prend les traits d'un adolescent souriant et entièrement nu."),
    "🏝️ s🅰️🇯‌ d1️⃣ r🇪‌préz📅☕️yon mℹ️t💧l💧🇯‌k 2️⃣ 🗡️our, p💨🛎️🅰️🛏️zé 🍰 1️⃣ 🇶‌pℹ️don 🪽é kℹ️ pr📅 lé ─ d1️⃣ 🅰️d💧lé🩸 🐭y📅 é 📅ty💨🇪‌🤥 n🇺‌."
);
