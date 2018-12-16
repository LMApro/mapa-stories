const fs = require('fs');
const sizeOf = require('image-size');

let supportExtensions = ['jpg', 'png', 'jpeg'];
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];
 
fs.readdir(path, function(err, files) {
    let images = files.filter(file => {
        return supportExtensions.some(extension => file.toLowerCase().endsWith(extension));
    }).map(file => {
        let dimensions = sizeOf(`src/images/${file}`);
        return {
            filename: file,
            width: dimensions.width,
            height: dimensions.height
        }
    });

    let jsonString = JSON.stringify({
        images
    }, null, 4);

    fs.writeFileSync('src/images/images.json', jsonString);
});