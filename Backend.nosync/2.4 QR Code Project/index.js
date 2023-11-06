/* 
1. Use the inquirer npm package to get user input.
2. Use the npm i qr-image to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

const questions = [
    {
      type: 'String',
      name: 'siteName',
      message: 'Please write your internet site url: ',
    },
  ];

inquirer.prompt(questions).then((answers) => {
    fs.appendFile("log.txt","\n" + answers.siteName, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    var qr_svg = qr.image(answers.siteName, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(answers.siteName+'.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });