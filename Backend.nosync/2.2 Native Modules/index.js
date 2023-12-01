const fs = require("fs");

fs.writeFile("m.txt","hello", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

fs.appendFile("message.txt","\nHello from YBA",(err, data2) => { 
    if(err) { 
    throw err; 
    } 
    console.log('The file has been saved!'); 
    }); 

  fs.readFile('message.txt', (err, data) => { 
  if(err) { 
  throw err; 
  } 
  console.log(data.toString()); 
  }); 

  fs.readFile('message.txt', "utf-8", (err, data) => { 
    if(err) { 
    throw err; 
    } 
    console.log(data); 
    }); 

