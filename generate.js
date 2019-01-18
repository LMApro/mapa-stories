const pdf = require('pdf-write-page');
pdf({
    in: 'file.pdf',
    out: 'out.pdf',
    pageNumber: 2
}).write(10, 0, 'A')
.write(10, 14, 'B')
.cfg({
    size:60,
    fontPath: 'font01.ttf',
    color: 0x392123
})
.end()