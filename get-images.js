const fs = require('fs');
const sizeOf = require('image-size');
const imageFolder = './images/min';

let files = fs.readdirSync(imageFolder);
let images = files.map(file => {
    let dimensions = sizeOf(`${imageFolder}/${file}`);
    return {
        filename: file,
        width: dimensions.width,
        height: dimensions.height,
        ratio: dimensions.height / dimensions.width
    }
})
function getImages() {
    return `
window.images = ${JSON.stringify(images, null, 4)}
`
}
fs.writeFileSync('js/images.js', getImages());