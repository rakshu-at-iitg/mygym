const express=require("express");
const app=express();
const port=3000;
const fs=require("fs")

const pug = require('pug');
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

app.post('/',(req,res)=>{
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




app.listen(port,()=>{
    console.log(`this is working on port ${port}`)
    })





    //our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title:'hey rakshu',message:'helllo and thank you'})
// })