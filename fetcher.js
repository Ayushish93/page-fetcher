const request = require('request');
const fs = require('fs');
const userInput = process.argv;


let file = userInput[3];
let url = userInput[2];


const getdata = (url) => {
if(file === "" || url === "" || (!file) || (!url) )
{
  console.log("Check you file path!!");
  process.exit();
}

request(url, (error, response, body) => {
    
   
  if(error) {
    console.error(error.code);
    process.exit();
  }
  if(response.statusCode !== 200) {
    console.log("This error occured ->" , response.statusCode);
    process.exit();
  }


  fs.writeFile(file,body, (err)=>{
      if(err) throw err;
        
      console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
        
        
  });
  
  
 

});

}

console.log(getdata(url));

