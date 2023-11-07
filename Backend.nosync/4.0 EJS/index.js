import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import * as path from "path"; 

const app = express();
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function logged(req,res,next) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);//we have to import body-parser
    next();
}

app.use(logged);

let day = new Date().getDay(); 
console.log(day);


app.get('/', (req, res) =>{
    let tempDayType="";
    let tempAdvice="";
    if(day===6 || day ===0){
        tempDayType = 'weekend';
        tempAdvice = 'time to have fun'
    }
    else{
        tempDayType = 'weekday';
        tempAdvice = 'time to work hard'
    }

    res.render('index.ejs',
    { dayType:tempDayType, advice: tempAdvice}
    );

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
