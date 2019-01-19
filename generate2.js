const pdf = require('pdf-write-page');
const writeOptions = {
    size: 16,
    colorspace: 'rgb',
    color: 0x08b195,
    fontPath: './UVNBenXuan.ttf'
};
const name = 'Chị Huyền';
const guests = [
    {
        name: 'Chị Huyền',
        role: 'Chị'
    },
    {
        name: 'Chị Huyền Hồ',
        role: 'Bạn & Người Thương'
    },
]

function getNameOffset(placeholderOffset, placeholderLength, name, scaleFactor) {
    return placeholderOffset + (placeholderLength - name.length * scaleFactor) / 2;
}

function generateSinglePdf(guest) {
    pdf({ in: 'file.pdf', out: `online-wedding-card/${guest.name}.pdf`, pageNumber: 0 })
        .cfg(writeOptions)
        .write(getNameOffset(457, 150, guest.name, 8.33), 52, guest.name)
        .page(1)
        .write(getNameOffset(446, 170, guest.role, 7.4), 491, guest.role)
        .page(2)
        .write(getNameOffset(446, 170, guest.role, 7.4), 491, guest.role)
        .end()
}

function generateMultiplePdf(guests) {
    for (let i = 0; i < guests.length; i++) {
        generateSinglePdf(guests[i]);
    }
}

generateMultiplePdf(guests);