function queryEmojiSounds(emoji) {
    return emoji+":"+prompt(emoji+" peut se prononcer")
}
function queryEmojisSounds(emojis){
	return emojis.map(e=>queryEmojiSounds(e)).join("\n");
}
function querySounds() {
	console.log(queryEmojisSounds(prompt("emojis ?").split(" ")))
}