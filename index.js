import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
        {
            "message": "Please enter the url",
            "name": "url"
        }
    ])
    .then((answers) => {

        const url = answers.url;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('myQr.png'));

        fs.writeFile("fileName" , url , err => {
            if (err) throw err ;
            console.log("File has been saved successfully");
        })
        
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });