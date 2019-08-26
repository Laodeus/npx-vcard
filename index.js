const fs = require("fs");
const boxen = require('boxen');
var figlet = require('figlet');

console.clear(); 

if(  process.argv[2] == "hisGreatVoice"){
    fs.readFile('cthulu.json', 'utf8', function(err, contents) {
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

if(  process.argv[2] == "joke"){
    console.log(boxen(`
   
    Q: How many Lovecraftian protagonists does it take to screw in a light bulb?
    A: Just one - but are you sure he should turn it on?
    
    `,
    {padding: 1, margin: 1, borderStyle: 'double',borderColor:'yellow'}
    ))
}

if(  process.argv[2] == "theLittleGreatOne"){
    fs.readFile('littleCthulu', 'utf8', function(err, contents) {
        console.log(contents);
    });
}

if(  process.argv[2] == "theGreatOne"){
    fs.readFile('cthulu', 'utf8', function(err, contents) {
        console.log(contents);
    });
}



