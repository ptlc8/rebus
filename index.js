import emojisMapping from "./emojis.mapping.js";
import phoneticMapping from "./phonetic.mapping.js";


/**
 * @param {string} text Text
 * @param {[[string, string]]} mapping List of change to do
 * @returns {string} Text after applying mapping
 */
function applyMapping(text, mapping) {
    for (const [ pattern, replacement ] of mapping) {
        let regex = new RegExp(pattern, "m");
        while (text.match(regex)) {
            text = text.replace(regex, replacement);
        }
    }
    return text;
}

/**
 * @param {string} text Latin french text
 * @returns {string} Phonetic french text
 */
export function toPhonetic(text) {
    return applyMapping(text.toLowerCase(), phoneticMapping);
}

/**
 * @param {string} phonetic Phonetic french text
 * @returns {string} Rebus french text
 */
export function phoneticToRebus(phonetic) {
    return applyMapping(phonetic, emojisMapping);
}

/**
 * @param {string} text Latin french text
 * @returns {string} Rebus french text
 */
export function toRebus(text) {
    var phonetic = toPhonetic(text);
    return phoneticToRebus(phonetic);
}
