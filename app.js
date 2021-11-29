const express=require('express');
const app=express();
const axios=require('axios');


const http = require('http')

    
//GHOST
  
      app.get('/ghost',(req,res)=>{
      res.send('13');
      //  console.log(`statusCode: ${res.statusCode}`)
    // console.log(res);
    
  });
  

// adding x,y,z
  app.get('/add/:x/:y/:z',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    let result=parseInt(req.params.x)+parseInt(req.params.y)+parseInt(req.params.z)
    // console.log('ress:=>',result);
    res.send(result.toString());
})


// const ghostadd=()=>{
 app.get('/addghost/:x/:y/:z',(req,res)=>{

	let options = {
   	hostname: 'localhost',
    port: 5001,
    path: '/ghost',
    url: `http://localhost:5001/ghost`,
    method: 'GET'
  }

  let ghostResult=0;
callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
    ghostResult=str;
    result=parseInt(req.params.x)+parseInt(req.params.y)+parseInt(req.params.z)+parseInt(ghostResult);
    // console.log('result:=>',result);
    res.send(result.toString());
  });
}
// ghostadd();
http.request(options, callback).end();
})
// }
// ghostadd();
// module.exports={ghostadd};
// console.log(ghostadd);


 
//Assigning the port
app.listen('5001')
console.log('listening on port 5001!!!');

 module.exports=app;
    







