export default `
# exceptions
(\\S),:$1 ,
(\\S)\\.:$1 .
(^|\\s|')est?(\\s|-|$):$1è$2
(^|\\s)et(\\s|$):$1é$2
(^|\\s)wagon(s?(\\s|$)):$1vagon$2
((\\W|^)[ds]i)x(\\s|$):$1sse$3
femm:famm

# remove phonetically useless accents
â:a
à:a
æ:é
ê:è
ë:è
î:i
ô:o
û:u
ù:u

#
j'*:ʒ
g([eéèiïy]):ʒ$1
guill:ɡij
gu([eéèi]):ɡ$1
ɡeill?:ɡœj
ng(\\s|$):ŋ$1
g:ɡ
qu|q'*:k
([aeéèiïouüyœ])s([aeéèiïouüyœ]):$1z$2
cc([eéèiïy]):ks$1
c([eéèiïy]):s$1

# nasals
[iy]en([td]?s?(\\s|$)):jɛ̃$1
éen([^naeéèiïouüyœɑ]|$):éɛ̃$1
(a|e)n([^naeéèiïouüyœɑ]|$):ɑ̃$2
(a|e)m([bp]):ɑ̃$2
on([^naeéèiïouüyœɑɔ]|$):ɔ̃$1
om([bp]):ɔ̃$1
(ai|ei|i|u|y)n([^naeéèiïouüyœɑɔɛ]|$):ɛ̃$2
(ai|ei|i|u|y)m([bp]):ɛ̃$2

# vowel combos
aill:aj
aï([aelu]|\\s|$):aj$1
ail(\\s|$):aj$1
ueill?:œj
eil(\\s|$):ɛj$1
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
etto:éto
ett:èt
ecc:ék
(\\s|^)enn([aéèiïouüyœɑɔɛ]):$1ɑ̃n$2
enn(e?(s|nt)?(\\s|$)):èn$1
enn:én
err(e?(s|nt)?(\\s|$)):èr$1
derr:dèr
err:ér
er(\\s|$):é$1
er([^aeéèiïouüyœɑɔɛ]):èr$1
ess(e?s?(\\s|$)):ès$1
ess:és
(\\s|^)es:$1és
es([ktb]):ès$1
es(\\w):és$1
ell(e?s?(\\s|$)):èl$1
ell:él
el(s?(\\s|$)):èl$1
eff(e?s?(\\s|$)):èf$1
eff:éf
ef(s?(\\s|$)):èf$1
epp(e?s?(\\s|$)):èp$1
epp:ép
ep(t?)(\\s|$):èp$1e$2
ept:èpt
emmɑ̃t(\\s|$):amɑ̃t$1
(\\s|^)emm([aeéèiïouüyœɑɔɛ]):$1ɑ̃m$2
emm:ém
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
ri([aeèouüyœøɑɔɛ]):rij$1
i([aeèouüyœøɑɔɛ]):j$1
uy([aeéèiïouüyœɑɔ]):ɥij$1
y:i
ui:ɥi

# non-combined vowels
è:ɛ
e:ə
é:e
[ïÿ]:i
ü:u
u:y
q:u



# consonant combos
[cs]h:ʃ
ɡn:ɲ
ff+|ph:f
(\\s|^)əx([aœəeøoɔyuɑɔɛi]):$1egz$2
əx(\\s|$):ɛksə$1
(\\s|^)əx:$1eks
əx:ɛks
əz(\\s|$):e$1

# other consonants
bb+:b
dd+|d'+:d
ll+|l'+:l
mm+|m'+:m
nn+|n'+:n
pp+:p
ix(\\s|$):iksə$1
(\\S)x(\\s|$):$1$2
x:ks
cc+:k
ss+|ç|c'+|s'+:s
c:k
kk+|k'+:k
([^st\\s])t(j[aœəeøoɔyuɑɔ]|jɛ̃):$1s$2
tt+|t'+:t
vv+:v
r+:ʁ

# remove letters without sound
h:
(\\S)z(\\s|$):$1$2
((\\s|^)\\S)əs(\\s|$):$1e$3
(\\S)s(\\s|$):$1$2
jəd(\\s|$):je$1
əd(\\s|$):edə$1
(\\S)d(\\s|$):$1$2
(\\S)ɡ?t(\\s|$):$1$2
ym(\\s|$):ɔm$1
(\\S\\S)ə(\\s|$):$1$2
sj(\\s|$):si$1
ək(\\s|$):ɛk$1

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