var fs = require("fs");
const emojisMapping = require("./emojis.mapping");
const phoneticMapping = require("./phonetic.mapping");

function createRebus(text, { file } = {}) {

	var data = fs.readFileSync(file || "emojis.txt", "utf8");
    var emojis = data.split("\n").map(line => {
        var syllables = line.split(":")[1] ? line.split(":")[1].split(",") : [];
        var emoji = line.split(":")[0];
        return [emoji, syllables];
    });
    
    var rebus = text.toLowerCase();
    for (const [emoji, syllables] of emojis) {
        for (let syllable of syllables) {
            while (rebus.includes(syllable)) {
                rebus = rebus.replace(syllable, emoji);
            }
        }
    }
    return rebus;
}

/**
 * @param {string} text 
 * @returns {string}
 */
function toPhonetic(text) {
    var phonetic = text.toLowerCase();
    for (const [ pattern, phonem ] of phoneticMapping) {
        let regex = new RegExp(pattern, "m");
        while (phonetic.match(regex)) {
            phonetic = phonetic.replace(regex, phonem);
        }
        //console.log(phonetic, pattern);
    }
    return phonetic;
}

module.exports = {
    createRebus,
    toPhonetic
};
