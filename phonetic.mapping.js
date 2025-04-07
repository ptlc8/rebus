module.exports = `
# exceptions
(\\S),:$1 ,
(\\S)\\.:$1 .
(^|\\s|')est?(\\s|$):$1è$2
(^|\\s)wagon(s?(\\s|$)):$1vagon$2

# remove phonetically useless accents
â:a
à:a
æ:é
ê:è
ë:è
î:i
û:u
ù:u

#
j'*:ʒ
g([eéèiïy]):ʒ$1
guill:ɡij
gu([^y\\s]):ɡ$1
ng(\\s|$):ŋ$1
g:ɡ
qu|q'*:k
([aeéèiïouüyœ])s([aeéèiïouüyœ]):$1z$2
c([eéèiïy]):s$1

# nasals
[iy]en([td]?s?(\\s|$)):jɛ̃$1
(a|e)n([^naeéèiïouüyœɑ]|$):ɑ̃$2
(a|e)m([bp]):ɑ̃$2
on([^naeéèiïouüyœɑɔ]|$):ɔ̃$1
om([bp]):ɔ̃$1
(ai|ei|i|u|y)n([^naeéèiïouüyœɑɔɛ]|$):ɛ̃$2
(ai|ei|i|u|y)m([bp]):ɛ̃$2

# voyelles combos
aill:aj
aï([aelu]|\\s|$):aj$1
ail(\\s|$):aj$1
eil(\\s|$):ɛj$1
cueill?:kœj
(eu|œ)ill?:œj
ouill?:ouj
(\\s|^)ill:$1il
(\\s|^)mill:$1mil
([wh])ill:$1il
vill([ae]):vil$1
ill(\\S):ij$1
ai|ei:è
[ae]y:èj
et(\\s|$):è$1
ez(\\s|$):é$1
oi:wa
oy:waj
eu:ø
œu:œ
oɛ̃:wɛ̃
ou([aèéiɛ]):w$1
ou:q
o([rnm]):ɔ$1
ô:o
e?au:o
(\\s|^)y:$1j
uy([aeéèiïouüyœɑɔv]):ɥij$1
y:i
ui:ɥi

# voyelles combotables non combotées
è:ɛ
e:ə
é:e
[ïÿ]:i
ü:u
u:y
q:u



# consonnes combos
[cs]h:ʃ
ɡn:ɲ
ff+|ph:f

# autre consonnes
z(\\s|$):$1
bb+:b
dd+|d'+:d
ll+|l'+:l
mm+|m'+:m
nn+|n'+:n
pp+:p
x(\\s|$):$1
x|cc+:ks
ss+|ç|c'+|s'+:s
c:k
kk+|k'+:k
([^st\\s])t(i[aœəeøoɔyuɑɔ]|iɛ̃):$1s$2
tt+|t'+:t
vv+:v
r+:ʁ

# remove letter without sounds
h:
əʁs(\\s|$):ɛʁ$1
((\\s|^)\\S)əs(\\s|$):$1e$3
s(\\s|$):$1
iəd(\\s|$):ie$1
əd(\\s|$):edə$1
d(\\s|$):$1
əʁ(\\s|$):e$1
ɡ?t(\\s|$):$1
ym(\\s|$):ɔm$1
(\\S\\S)ə(\\s|$):$1$2

 ,:,
 \\.:.
`
.split("\n")
.filter(line => !line.startsWith("#") && line.length != 0)
.map(line => {
    var pattern = line.split(":")[0];
    var phonem = line.split(":")[1];
    return [ pattern, phonem ];
});