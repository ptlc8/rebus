module.exports = `
# exceptions
$1 ,:(\\S),
$1 .:(\\S)\\.
$1è$2:([\\s'^])est([\\s$])
$1vagon$2:([^\\s])wagon(s?[\\s$])

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
k:qu|q'*
$1z$2:(aeéèiïouüy)s(aeéèiïouüy)
s$1:c([eéèiïy])
v:w

# nasals
jɛ̃$1:[iy]en([td]?s?[\\s$])
ɑ̃$2:(a|e)n([^naeéèiïouüyɑ]|$)
ɑ̃$2:(a|e)m([bpf])
ɔ̃$1:on([^naeéèiïouüyɑɔ]|$)
ɔ̃$1:om([bpf])
ɛ̃$2:(ai|ei|i|u)n([^naeéèiïouüyɑɔɛ]|$)
ɛ̃$2:(ai|ei|i|u)m([bpf])

# voyelles combos
aj$2:ail(le)?([\\s$])
èj$2:eil(le)?([\\s$])
øj$2:euil(le)?([\\s$])
ouj$2:ouil(le)?([\\s$])
è:ai|ei
è$1:et([\\s$])
é$1:ez([\\s$])
wa:oi
ø:eu
œ:œu
wɛ̃:oɛ̃
w$1:ou([aèéiɛ])
q:ou
ɔ$1:o([rnm])
o:ô
o:e?au

# voyelles combotables non combotées
ɛ:è
ə:e
e:é
i:ii+
# TODO i ou j:y
u:ü
y:u
u:q



# consonnes combos
ʃ:[cs]h
ŋ:ng
ɲ:gn
f:ff+|ph

# autre consonnes
$1:z(\\s$)
ɡ:gu?
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
ɔm$1:um(\\s|$)
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