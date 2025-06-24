export default `
# combos normaux
ts:ц
tʃ:ч
ʃt:щ
ju:ю
ja:я

# combos de sons étrangers au monde cyrillique
wa:уа
ɛ̃:ен
ɑ̃:ан
ɔ̃:он
œ̃:ен

# sons normaux
a:а
b:б
v:в
ɡ:г
d:д
e:е
ɛ:є
ʒ:ж
z:з
i:и
j:й
k:к
l:л
m:м
n:н
o:о
p:п
ʁ:р
s:с
t:т
u:у
f:ф
x:х
ʃ:ш
#œ:ъ

# sons étrangers au monde cyrillique
y:ю
ɲ:н
ŋ:нг
ɔ:о
w:в
ɥ:у
ə(\\s|$):$1
ə:е
ø:е
œ:е
`
.split("\n")
.filter(line => !line.startsWith("#") && line.length != 0)
.map(line => {
    var pattern = line.split(":")[0];
    var phonem = line.split(":")[1];
    return [ pattern, phonem ];
});