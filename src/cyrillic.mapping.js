export default `
# combos normaux
ts:ц
tʃ:ч
ʃt:щ
ju:ю
ja:я
je:е

# combos palatalisés
ɲu:ню
ɲa:ня
ɲe:не

# sons étrangers
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
ɛ:э
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
œ:ъ

# sons étrangers
y:у
ɲ:нь
ŋ:нг
ɔ:о
w:у
ɥ:у
ə:ъ
ø:е
`
.split("\n")
.filter(line => !line.startsWith("#") && line.length != 0)
.map(line => {
    var pattern = line.split(":")[0];
    var phonem = line.split(":")[1];
    return [ pattern, phonem ];
});