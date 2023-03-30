var fs = require("fs");
var readline = require("readline").createInterface(process.stdin, process.stdout);

function createRebus(emojis, text) {
    var rebus = text.toLowerCase();
    for (const [emoji,syllables] of emojis) {
        for (let syllable of syllables) {
            while (rebus.includes(syllable)) {
                rebus = rebus.replace(syllable,emoji);
            }
        }
    }
    return rebus;
}

fs.readFile("emojis.txt", "utf8", function(err,data) {
    var emojis = data.split("\n").map(function(line){
        var syllables = line.split(":")[1] ? line.split(":")[1].split(",") : [];
        var emoji = line.split(":")[0];
        return [emoji,syllables];
    });
    //var sentence = "L'Amour victorieux ou Amour vainqueur est une toile peinte vers 1601 ou 1602 par l'artiste lombard Michelangelo Merisi, dit « Caravage », alors qu'il vit et travaille à Rome. Il s'agit d'une représentation mythologique de l'Amour, personnalisé par un Cupidon ailé qui prend les traits d'un adolescent souriant et entièrement nu. Le dieu tient des flèches à la main et il foule aux pieds différents symboles artistiques et scientifiques (instruments de musique abîmés, instruments de mesure, livres, cuirasse d'armure, etc.) signifiant ainsi la suprématie de l'Amour sur toutes choses — d'où le titre actuel, tiré du vers ovidien Omnia vincit amor, c'est-à-dire : « l'Amour triomphe de tout ».\nComposée au moment où Caravage commence déjà à connaître une grande renommée dans le milieu artistique romain, la toile est une commande du marquis Vincenzo Giustiniani, pour qui cette œuvre représente la pièce maîtresse de sa splendide collection. En hommage au commanditaire, plusieurs éléments présents dans le tableau mettent en lumière son identité et ses vertus, à travers une symbolique complexe dont les clés font encore débat. La toile témoigne également de la forte rivalité entre peintres dans le milieu romain du début du XVIIe siècle, notamment entre Caravage et Giovanni Baglione, qui, relevant le défi, produit lui aussi un Amour divin pour le cardinal Benedetto Giustiniani, frère du marquis.";
    //var sentence = "Balarace sincèrement";
    //console.log(createRebus(emojis, sentence));
    readline.on("line", function(line) {
        console.log(createRebus(emojis, line));
    });
});