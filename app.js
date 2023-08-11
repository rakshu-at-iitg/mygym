const express=require("express");
const app=express();
const port=3000;
const fs=require("fs")
const https=require("https");


const pug = require('pug');
const { stringify } = require("querystring");
//express specific

 app.use(express.urlencoded());


//pug specific
app.set('view engine', 'pug')//set krna hai pug ko
// app.set('views',path.join(__dirname,'views'))


//end points
app.get("/",(req,res)=>{
    const con="this is the best content"
    const params={'title':'pubg is the best game',"content":con}
    res.status(200 ).render('index.pug',params);
})

app.post('/a',(req,res)=>{
    form=req.body;
     name=form.name;
     age=form.age;
     address=form.address;
     gender=form.gender;
     bio=form.bio;
     console.log(form)
     let outputtowrite=`the name of client is ${name},${age} years old ${gender} and lives in${address} .${bio}`
     fs.writeFileSync('output.txt',outputtowrite)


    const params={'message':'your form has been submitted'};
    res.status(200).render('index.pug',params)
})


app.get("/contact",(req,res)=>{
    const con="this is the best content"
    const params={'title':'pubg is the best game',"content":con}
    res.status(200 ).render('contact.pug',params);
})


var k=0;

//excercise ke liye
// app.post('/excercise',(req,res)=>{
//     form=req.body;
//      muscle=form.name;
//      res.status(200).render('index.pug');
//      k=1;
     
//      })


   
function exx(mus)
{
let muscle=mus;
const request=require("request");
// var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'xQwfWz5Rz4epEcqU5UqNyg==6YumilugIhs2ggQN'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else 
  {

    
    const obj= JSON.parse(body);
    console.log(obj);
    response.statusCode(200).render('excercise.pug');

    
  }
   
});

}

//excercise ke liye


app.post('/exe',(reqt,rest)=>{
    form=reqt.body.name;
     
    let str=String(form);
    console.log(str);
   ob=  exx(str)
   console.log (ob)


   
    rest.status(200).render('index.pug')
})











app.listen(port,()=>{
    console.log(`this is working on port ${port}`)
    })





    //our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title:'hey rakshu',message:'helllo and thank you'})
// })