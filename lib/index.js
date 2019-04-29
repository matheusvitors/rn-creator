var fs = require("fs");
var color = require('./colors.js');
var template = require('./templates.js');

var args = process.argv.splice(2, process.argv.length -1)
// var args = process.argv.splice(2, process.argv.length -1).join(' ')

var command;

if(args[0]){
    command = args[0].toLowerCase(); 
}else{ 
    help();
}

try{

    switch (command){
        case 'component': 
            if(args[1]){
    
                let dir = args[1];
    
                if(!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
    
                if(!fs.existsSync(dir+"index.js")){
                    let createStream = fs.createWriteStream(args[1] + "/index.js");
                    createStream.write(template.index);
                    createStream.end();
                    console.log(color.CONF,"CREATED",dir+"/index.js");
                }
                if(!fs.existsSync(dir+"styles.js")){
                    let createStream = fs.createWriteStream(args[1] + "/styles.js");
                    createStream.write(template.styles);
                    createStream.end();
                    console.log(color.CONF,"CREATED",dir+"/styles.js");
                }
    
                // console.log("The component is created!");    
            }else{
                console.log(color.WARN,"Usage:"," rn-creator component <ComponentName>");
            }
            
            break;
        
        case 'help': 
            help();
            break;
    
        default: 
            error();
            break;
    }
    
}catch(e){
    console.log("Error!", e.message);
}




function help(){
    console.log("Command: rn-creator component <ComponentName>");
}

function error(){
    console.log("Command '" + args[0] +"' unrecognized.");
}
