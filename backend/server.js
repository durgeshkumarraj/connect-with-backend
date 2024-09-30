import express from 'express';
 const app=express();
//  app.get('/',(req,res)=>{
//     res.send('server is ready');

//  });

 //get a list of 5 jokes
 app.get('/api/jokes',(req,res)=>{

    const jokes=[
        {
        id: 1,
        title:'A joke',
        content:'this is a joke'
        },
        
        {
        id:2,
        title:'another joke',
        content:'this is another joke'
        },
        {
            id:3,
            title:'third joke',
            content:'this is the third joke'
        },
        {
            id:4,
            title:'fourth joke',
            content:'this is fourth joke'
        },
         {
        id:5,
        title:'fifth joke',
        content:'this is the fifth joke'
         }

    ];
    res.send(jokes);
 })


 const port=process.env.PORT||3000
 app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
 })