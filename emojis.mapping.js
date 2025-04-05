module.exports = `
kɔk:🐔
ʁɡl:🦅
lu:🐺
twal:🕸
dino:🦖
cʁab:🦀
ʁino:🦏
ʃɛvʁ:🐐
`
.split("\n")
.filter(line => !line.startsWith("#") && line.length != 0)
.map(line => {
    var pattern = line.split(":")[0];
    var phonem = line.split(":")[1];
    return [ pattern, phonem ];
});