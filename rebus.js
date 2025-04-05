const emojisMapping = require("./emojis.mapping");
const phoneticMapping = require("./phonetic.mapping");


/**
 * @param {string} text Latin french text
 * @returns {string} Phonetic french text
 */
function toPhonetic(text) {
    var phonetic = text.toLowerCase();
    for (const [ pattern, phonem ] of phoneticMapping) {
        let regex = new RegExp(pattern, "m");
        while (phonetic.match(regex)) {
            phonetic = phonetic.replace(regex, phonem);
        }
    }
    return phonetic;
}

/**
 * @param {string} phonetic Phonetic french text
 * @returns {string} Rebus french text
 */
function phoneticToRebus(phonetic) {
    var rebus = phonetic;
    for (const [ pattern, emoji ] of emojisMapping) {
        let regex = new RegExp(pattern, "m");
        while (rebus.match(regex)) {
            rebus = rebus.replace(regex, emoji);
        }
    }
    return rebus;
}

/**
 * @param {string} text Latin french text
 * @returns {string} Rebus french text
 */
function toRebus(text) {
    var phonetic = toPhonetic(text);
    return phoneticToRebus(phonetic);
}

module.exports = {
    toPhonetic,
    phoneticToRebus,
    toRebus,
};
