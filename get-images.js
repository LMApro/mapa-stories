const fs = require('fs');
const imageFolder = './images/min';

let files = fs.readdirSync(imageFolder);
function getImages() {
    return `
window.images = ${JSON.stringify(files, null, 4)}
`
}
fs.writeFileSync('js/images.js', getImages());