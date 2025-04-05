module.exports = `
# exceptions
$1 ,:(\\S),
$1 .:(\\S)\\.
$1è$2:([\\s'^])est(\\s|$)
$1vagon$2:([^\\s])wagon(s?(\\s|$))

# remove phonetically useless accents
a:â
a:à
é:æ
è:ê
è:ë
i:î
u:û
u:ù

#
ʒ:j'*
ʒ$1:g([eéèiïy])
ɡij:guill
ɡ$1:gu([^y\\s])
ŋ$1:ng(\\s|$)
ɡ:g
k:qu|q'*
$1z$2:(aeéèiïouüyœ)s(aeéèiïouüyœ)
s$1:c([eéèiïy])
v:w

# nasals
jɛ̃$1:[iy]en([td]?s?(\\s|$))
ɑ̃$2:(a|e)n([^naeéèiïouüyœɑ]|$)
ɑ̃$2:(a|e)m([bp])
ɔ̃$1:on([^naeéèiïouüyœɑɔ]|$)
ɔ̃$1:om([bp])
ɛ̃$2:(ai|ei|i|u|y)n([^naeéèiïouüyœɑɔɛ]|$)
ɛ̃$2:(ai|ei|i|u|y)m([bp])

# voyelles combos
aj$2:ail(le)?(\\s|$)
èj$2:eil(le)?(\\s|$)
œj$2:euil(le)?(\\s|$)
ouj$2:ouil(le)?(\\s|$)
è:ai|ei
èj:[ae]y
è$1:et(\\s|$)
é$1:ez(\\s|$)
wa:oi
waj:oy
ø:eu
œ:œu
wɛ̃:oɛ̃
w$1:ou([aèéiɛ])
q:ou
ɔ$1:o([rnm])
o:ô
o:e?au
$1j:(\\s|^)y
ɥij$1:uy([aeéèiïouüyœɑɔv])
i:y
ɥi:ui

# voyelles combotables non combotées
ɛ:è
ə:e
e:é
i:[ïÿ]
u:ü
y:u
u:q



# consonnes combos
ʃ:[cs]h
ɲ:ɡn
f:ff+|ph

# autre consonnes
$1:z(\\s|$)
b:bb+
d:dd+|d'+
l:ll+|l'+
m:mm+|m'+
n:nn+|n'+
p:pp+
$1:x(\\s|$)
ks:x|cc+
s:ss+|ç|c'+|s'+
k:c
k:kk+|k'+
$1s$2:([^st\\s])t(i[aœəeøoɔyuɑɔ]|iɛ̃)
t:tt+|t'+
v:vv+
ʁ:r+

# remove letter without sounds
:h
$1:s(\\s|$)
ie$1:iəd(\\s|$)
edə$1:əd(\\s|$)
$1:d(\\s|$)
e$1:ər(\\s|$)
$1:t(\\s|$)
ɔm$1:ym(\\s|$)
$1$2:(\\S\\S)ə(\\s|$)

,: ,
.: \\.
`
.split("\n")
.filter(line => !line.startsWith("#") && line.length != 0)
.map(line => {
    var pattern = line.split(":")[1];
    var phonem = line.split(":")[0];
    return [ pattern, phonem ];
});