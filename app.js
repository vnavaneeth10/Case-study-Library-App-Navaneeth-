const express = require('express'); 
const path = require ('path'); 
const bodyParser = require('body-parser'); //Part #1 Point 2
const cors = require('cors');
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

const nav= [
    {
        link:"/books", title:"Books"},
    {
        link:"/authors",title:"Authors"},
    {
        link:"/addbook",title:"Add Book"},
    {
        link:"/addauthor",title:"Add Author"},
]; //Part #2 Point 6



// const nav = require('./src/data/nav'); //Part #2 Point 6

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); //Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 




app.set('views','./src/views'); 
app.set('view engine','ejs'); 
app.use(cors()); //Part #2 Point 7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname , '/public'))); 


app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter);
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});

});       
    

app.listen(port, host, function(){
    console.log("Server Ready on 5000");//Part #1 Point 5
});  













