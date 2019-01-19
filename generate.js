const hummus = require('hummus');
const pdfWriter = hummus.createWriterToModify('./file.pdf', {
    modifiedFilePath: __dirname + '/online-wedding-card/out.pdf'
});
const writeOptions = {
    font: pdfWriter.getFontForFile(__dirname + '/UVNBenXuan.ttf'),
    size: 16,
    colorspace: 'rgb',
    color: 0x08b195,
};
const name = 'Bạn & Người thương ahiiiiiii';
function getNameOffset(placeholderOffset, placeholderLength, name) {
    return placeholderOffset;
    // return placeholderOffset + (placeholderLength - name.length*8.35)/2;
}

let page1Modifier = new hummus.PDFPageModifier(pdfWriter,1);
page1Modifier.startContext().getContext().writeText(
    name,
    getNameOffset(446, 170, name), 491,
    writeOptions
);
page1Modifier.endContext().writePage();

pdfWriter.end();