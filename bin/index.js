#!/usr/bin/env node

const fs = require("fs");
const boxen = require('boxen');
var figlet = require('figlet');

console.clear(); 
const vcardownerInfo = {
    firstName:"Jonathan",
    secondName:"Atta",
    completeName:"Jonathan Atta",
    email:"atta.jon.t@gmail.com",
    pseudo:"laodeus",
    github:"https://github.com/Laodeus/",
    linkedin:"https://www.linkedin.com/in/laodeus",
    npx:"@laodeus/vcard"
}


if(process.argv[2] == "hisGreatVoice"){
    fs.readFile(`${__dirname}/../cthulu.json`, 'utf8', function(err, contents) {
        const quote = JSON.parse(contents);

        let randQuote = Math.floor(Math.random() * (quote.text.length - 1 + 1) ) + 1; 
        const txtFormatedQuote=`
${quote.text[randQuote]}
${quote.author}`;

        figlet.text("His great quotes!",{
            font: 'Bloody',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
        console.log(boxen(txtFormatedQuote, {margin: 1, borderStyle: 'double',borderColor:'green'}))
    });
}

if(process.argv[2] == "joke"){
    console.log(boxen(`
   
    Q: How many Lovecraftian protagonists does it take to screw in a light bulb?
    A: Just one - but are you sure he should turn it on?
    
    `,
    {padding: 1, margin: 1, borderStyle: 'double',borderColor:'yellow'}
    ))
}

if(  process.argv[2] == "theLittleGreatOne"){
    fs.readFile(`${__dirname}/../littleCthulu`, 'utf8', function(err, contents) {
            console.log(contents);
        });
    
}

if(  process.argv[2] == "theGreatOne"){
    fs.readFile(`${__dirname}/../cthulu`, 'utf8', function(err, contents) {
        console.log(contents);
    });
}


console.log(boxen(`
name    :${vcardownerInfo.completeName}
pseudo  :${vcardownerInfo.completeName}
email   :${vcardownerInfo.email}

github  :${vcardownerInfo.github}
linkedin:${vcardownerInfo.linkedin}

npx card:${vcardownerInfo.npx}

`));