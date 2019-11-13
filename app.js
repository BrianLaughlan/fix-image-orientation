const jo = require('jpeg-autorotate');
const fs = require('fs');

jo.rotate('./image.jpg', {quality: 85}, (error, buffer) => {
    if (error && error.code === 'correct_orientation') {
        console.log('No change required: Orientation already correct');
        return;

    } else if (error) {
        console.log('An error occurred when rotating the file: ' + error.message);
        return
    }

    fs.writeFileSync('./fixed.jpg', buffer);
});