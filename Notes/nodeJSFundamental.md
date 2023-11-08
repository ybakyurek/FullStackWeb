# NodeJS

### FileSystem

##### Write, read, append

```js
const fs = require("fs");

//WRITE
fs.writeFile("m.txt","hello", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

//APPEND
fs.appendFile("message.txt","\nHello from YBA",(err, data2) => { 
    if(err) { 
    throw err; 
    } 
    console.log('The file has been saved!'); 
    }); 

//READ .toString();
  fs.readFile('message.txt', (err, data) => { 
  if(err) { 
  throw err; 
  } 
  console.log(data.toString()); 
  }); 

//READ, extra parameter
  fs.readFile('message.txt', "utf-8", (err, data) => { 
    if(err) { 
    throw err; 
    } 
    console.log(data); 
    }); 
```



### NPM

##### Initialization

* Initialization : `nmp init`

  * ```json
    {
      "name": "npmstart",
      "version": "1.0.0",
      "description": "learning",
      "main": "index.js",
      "type": "module", //add this for using import
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "yba",
      "license": "ISC",
      "dependencies": {
        "sillyname": "^0.1.0"
      }
    }
    ```

    a

  * `nmp init -y `-> bu sayede tek tek configration yerine tum seti doldurabilirz. 

* package install : `npn install <something>` or (`npm i package`) . you can find a packages in npmjs.com 

  * `npm i sillyname`

    

##### Import Library

```js
// var generateName = require ("sillyname");
import generateName from "sillyname";
var sillyName = generateName ();
console. log ('My name is ${sillyName}.');

```





### Small Project

##### Text to QR in Terminal

```js
/* 
1. Use the inquirer npm package to get user input.
2. Use the npm i qr-image to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

const questions = [
    {
      type: 'String',
      name: 'siteName',
      message: 'Please write your internet site url: ',
    },
  ];

inquirer.prompt(questions).then((answers) => {
    fs.appendFile("log.txt","\n" + answers.siteName, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    var qr_svg = qr.image(answers.siteName, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(answers.siteName+'.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```









# Express.JS

### Initialization

`npm i express`

`sudo lsof -i -P -n | grep LISTEN` which ports are running?



### Basic Server

```js
import express from 'express';

const port = 3000;
const app = express();
app.listen(port , ()=> {
    console.log(`Server is running on ${port}`);
});
```

#### Kill Server

```bash
sudo lsof -i :<PortNumber>
//after that
kill -9 <PID>
```

#### Install global node framework

```bash
sudo npm install -g nodemon
//sudo access permission
//-g global, you can use every project
```



###### [HTTP Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

ted. Responses are grouped in five classes:

1. [Informational responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses) (`100` – `199`)
2. [Successful responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses) (`200` – `299`)
3. [Redirection messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages) (`300` – `399`)
4. [Client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) (`400` – `499`)
5. [Server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) (`500` – `599`)



#### Warehouses

1. [Body-parser](https://www.npmjs.com/package/body-parser) : for reach req.body

2. [Morgan](https://www.npmjs.com/package/morgan) : for log

   1. ```js
      import express from "express";
      import morgan from "morgan";
      
      const app = express();
      const port = 3000;
      app.use(morgan("combined"));
      ```

      



## NodeJS & ExpressJS Basic Project

```javascript
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let authorization = false;
app.use(bodyParser.urlencoded({ extended: true }));

// // it's like a constructor but I used it for only logging. second way is below
// function logger(req, res, next) {
//   console.log("Request Method: ", req.method);
//   console.log("Request URL: ", req.url);
//   console.log(req.body);
//   next();
// }
// app.use(logger);

function ILoveProgramming(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  if(req.body.password === 'ILoveProgramming'){
    authorization = true;
  }
next();
}
app.use(ILoveProgramming);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// // users have to fill password everytime 
// app.post("/check", (req, res) => {
//   const password = req.body.password;
//   if(password === 'ILoveProgramming'){
//     res.sendFile(__dirname + "/public/secret.html");
//   }
//   else{
//     res.sendFile(__dirname + "/public/index.html");
//   }
// });


app.post("/check", (req, res) => {
  // const password = req.body.password;
  // if(password === 'ILoveProgramming'){
  //   authorization=true;
  // }

  if(authorization ===true){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

```



# EJS

### Basic Example

 ` <h1>Hey, it's <%= dayType %>, <%= advice %>!</h1>` => This is the <span style="color:red">important</span> part in HTML.

`HTML`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weekday Warrior</title>
</head>

<body>
  <h1>Hey, it's <%= dayType %>, <%= advice %>!</h1>
</body>

</html>
```

`js`

```js
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

```

### EJS tags

```js
<%= variable %>										JS Output
<% console.log("hello") %>				JS Execute
<% - <h1>Hello</h1> %>						Render HTML
<%% %%>														Show <% or %>
<%# This is a comment %>					Stop Execution
<%- include("header.ejs") %>			Insert another EJS file
```

EJS (Embedded JavaScript) şablon motoru, HTML belgelerine dinamik içerik eklemek ve sunucu tarafında HTML üretmek için kullanılır. EJS, HTML içine gömülmiş JavaScript kodunu kullanmanıza olanak tanır. İşte bazı temel EJS etiketleri ve örnekleri:

1. `<% JavaScript Kodu %>`: Bu etiketler arasına yazılan JavaScript kodu sunucu tarafında çalıştırılır ve sonucu HTML'e dönüştürülmez. Örneğin:

```html
<p>Şu an saat: <% var date = new Date(); %> <%= date.getHours() %>:<%= date.getMinutes() %></p>
```

2. `<%= Değişken veya İfade %>`: Bu etiket, bir JavaScript değişkeninin veya ifadesinin değerini HTML'e ekler. Örneğin:

```html
<p>Merhaba, <%= kullaniciAdi %>!</p>
```

3. `<%- Değişken veya İfade %>`: Bu etiket, HTML'e eklenen değeri otomatik olarak kaçırmaz. Bu, kullanıcı tarafından sağlanan verileri güvenli bir şekilde görüntülemek için kullanılabilir. Örneğin:

```html
<p>İçerik: <%- kullaniciIcerigi %></p>
```

4. `<%# Yorumlar %>`: Bu etiketler arasına yazılan metin sadece bir yorum olarak işlenir ve görüntülenmez. Örneğin:

```html
<%# Bu bir yorumdur ve görüntülenmez. %>
```

5. `<% if (Koşul) { %> ... <% } %>`: Bu etiketler arasına yazılan if bloğu, verilen koşula göre çalışır ve sonucu HTML olarak döndürülür. Örneğin:

```html
<% if (kullaniciYas < 18) { %>
  <p>Yaşınıza uygun içeriği görüntüleyemezsiniz.</p>
<% } else { %>
  <p>Hoş geldiniz!</p>
<% } %>
```

6. `<% for (var i = 0; i < dizi.length; i++) { %> ... <% } %>`: Bu etiketler arasına yazılan döngü, belirli bir dizi üzerinde çalışır ve sonucu HTML olarak döndürülür. Örneğin:

```html
<ul>
  <% for (var i = 0; i < ulkeListesi.length; i++) { %>
    <li><%= ulkeListesi[i] %></li>
  <% } %>
</ul>
```

### Another Example

```markdown
# 4.1 EJS Tags
* [views/](./4.1 EJS Tags/views)
  * [footer.ejs](./4.1 EJS Tags/views/footer.ejs)
  * [index.ejs](./4.1 EJS Tags/views/index.ejs)
  * [solution.ejs](./4.1 EJS Tags/views/solution.ejs)
* [index.js](./4.1 EJS Tags/index.js)
* [package-lock.json](./4.1 EJS Tags/package-lock.json)
* [package.json](./4.1 EJS Tags/package.json)
* [solution.js](./4.1 EJS Tags/solution.js)
```

```html

<!-- index.ejs -->
<!DOCTYPE html> 
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS Tags</title>
</head>

<body>
  <h1>
    <!-- Tite goes here -->
    <%= title %>
  </h1>
  <p>Current second:
    <!-- Current second goes here -->
    <%= seconds %>
  </p>

      <!-- for loop and if condition -->
  <%   if (seconds % 2===0) { %>
    <ul>
      <% for (var i = 0; i < items.length; i++) { %>
        <li><%= items[i] %></li>
      <% } %>
    </ul>
  <% } else { %>
    <p>No items to display</p>
  <% } %>

  <p>
    <!-- HTML content goes here -->
    <%- htmlContent %>
  </p>

  <!-- Footer goes here -->
    <%- include("footer.ejs") %>	
</body>

</html>
```



```js
//indexjs
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some strong text</em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```

