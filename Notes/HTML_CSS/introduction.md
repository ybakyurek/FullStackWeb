INTRODUCTION

```html
<!-- 
bs5-$ kodlarin otomatik gelmesini saglar. bootstrap ekler.
-->
```

### doctype

```
<html lang="en-US"> : bu kisim dil hakkinda
```

```
headings: h1-h6 taglar
paragraf: p ve pre. pre html icerisindeki gorunumu koruyor alt satira gectiysen o da geciyor. 
resim :<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
title : <p title="DENEME">Bu alana geldiginde deneme bilgisi goreceksin</p> :ilgili alana mouse gelince DENEME gorunecektir.
style : sekil bilgileri buradadir. 
font-size: 
<h1 style="font-size: 3rem;">h1 etiketi 5rem</h1>
<h1>Standart h1</h1>
```



## CSS

3 type CSS

* Inline(one block or line)

  ```html
  <p style="color: blue;">This is blue</p>
  ```

* Internal(Single Page)

  ```html
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>  
          p{
              color: red;
          }
          </style>  
  </head>
  ```

* External(MultiplePage)

  ```html
  <head>
      <link href="style.css" rel="stylesheet" >  
  </head>
  ```

#### Css Selector

* Class: class = " " ==> applied many element

* id : #...  ==> applied one element

* Draggable : if it is true, applied if it is false, isn't applied

  * ```html
    <p draggable> Text </p> #html
    ```

  * ```css
    p[draggable]{color:red;}
    ```

* '*' universal selector: select all

* h1, body || #id_name || .classname in style.css

* Group

  * ```css
    h1,h2{
    color:blue;
    }
    ```

  * ```css
    selector>selector{
    color: blue;
    } //is used for child (div in div etc)
    ```

  * ```css
    selector selector{
    color:blue;
    } //is used for many level
    ```

  * ```css
    li.done{
        color: green;
    }//example of list. We have 3 list element, we change only 2 elements has "done" class name.
    ```

    ```css
    .list > p.done{
        font-size: xx-small;
    }//child of .list and onyl p elements.
    ```

    


#### CSS Color

* color
* Background-color or bg

#### Font Properties

* font-Size
  * 1px: 1/96 inch
  * 1pt: 1/72 inch
  * 1em :100% of parent(for example <p> tag in <body> tag)
  * 1rem: 100% of root
* Font-weight: 
  * normal-bold(keyword)
  * Lighter-bolder(relative to parent)
  * Number 
* Font-family:
* Text-align
* Height: 70vh viewport height, yani aktif pencerenin yuksekligine gore belirlenen bir deger. yuzde olarak. 

#### Margin, Padding and Border

* 

#### Position

![](/Users/yba/Documents/GitHub/Note/Notes/HTML_CSS/img/position.png)

* Relative: change default position information
* Absolute : It will position with anchestor(nearest) if there is no anchestor It will position top left 
* Fix : top left corner of browser window
* Static: default
* Z-index: front or back(3th axis)



#### CSS Display

This is used for how to display blocks(side by side or bottom by bottom)

* Inline
* Block
* Inline-block
* None: disappear
* Flex



#### Float

```css
img{float:left;}//"text will wrap the image"
footer{clear:left;} //"footer won't wrap the image, its position will be left above the image" 
```

#### Responsive

1. Bootstrap

2. Flexbox

3. Grid

4. Media Query: Below example shows us how to use media query(max-min width)

   1. ```css
          @media (max-width: 600px) {
      
            /* CSS for screens below or equal to 600px wide */
            div {
              height: 200px;
              width: 200px;
            }
          }
      ```



#### Flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

<img src="/Users/yba/Documents/GitHub/Note/Notes/HTML_CSS/img/float-flexbox.png" style="zoom:50%;" /> 

gap: It add a gap between two elements

Flex: fill all line=> ...........

inline flex: fill part of line(only used) ..../....(another elements)

Mesela bir div icinde li'ler olsun. eger li'leri flex yap.

Bu arada display'i **flex** yaptigimizda **flex basis** ile onun altindaki elementlerin boyutunu ayarlayabiliriz. display ve flex box css'de farkli elementleri degistirir. display container'da ise onun alt elemanlarini kullanmak istersek direk o elemanlari secerek basis ile boyutlandiririz.

**Order** ile bu alt elemanlari siralayabiliriz.

```css
   .red {background-color: #eb4d4b; order: 1;} /* Kırmızı rengi sıralama 1 */
    .orange {background-color: #f0932b; order: 2;} /* Turuncu rengi sıralama 2 */
    .yellow {background-color: #f6e58d; order: 3;} /* Sarı rengi sıralama 3 */
    .green {background-color: #6ab04c; order: 4;} /* Yeşil rengi sıralama 4 */
    .blue {background-color: #4834d4; order: 5;} /* Mavi rengi sıralama 5 */
    .indigo {background-color: #30336b; order: 6;} /* İndigo rengi sıralama 6 */
    .purple {background-color: #be2edd; order: 7;} /* Mor rengi sıralama 7 */
  
```



#### Flexible Layout

https://appbrewery.github.io/flex-layout/

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com

Flex-wrap: wrap or nowrap

Justify content: set on parent, set on main-axis(row)=> start end etc

align items: set on parent end cross action(column)(if nowrap)

align content 

```css
   .container {
      color: white;
      border: 5px solid gold;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
			justify-content:end;
      align-items:center;
      
    }

    .container > div{
      flex-basis: 100px;
      flex-shrink:1;
      flex-grow:1
      
    }
```



#### Flex-sizing

![](/Users/yba/Documents/GitHub/Note/Notes/HTML_CSS/img/size.png)

Yukaridaki siralamayi takip edecektir. En sag en onceliklidir. Digerleri yoksa content width gerceklesir.

**Flex-grow** ve flex shrink ile item uzerinde ekranin kaplayip kaplamamasi ile ilgili islem yapabiliriz. 1-0 valse

```css
flex-basis:0;
flex-grow:1;
flex-shrink:1;
/*alternative*/
flex: 1 1 0 /*grow shrink basis == flex:1*/

```

https://appbrewery.github.io/flexbox-sizing-exercise/



#### GRID

flex 1D ise grid 2D olarak düşünebiliriz.

https://gridbyexample.com/examples/

```css
.container{
display: grid;
grid-template-columns:1fr 2fr;
grid-template-rows: 1fr 1fr;
gap:10px;
}
```



```css
/*cheesboard*/  
.container{
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: 1fr 1fr;  
      width: 800px;
    }
    .container > *{      
      height: 100px;
      width: 100px;
    }
    .black{
      background-color: #f0d9b5;
    }
    .white{
      background-color: #b58863;
    }
```

###### Grid Sizing

```css
.container{
      display: grid;
      grid-template-columns: 100px 200px;
      grid-template-rows: 400px 800px;
      width: 800px;
    }
```

```css
.container{
      display: grid;
      grid-template:100px 200px / 400px 800px;
      width: 800px;
    }
```

asagidaki kodda oldugu gibi auto kullanımı

```css
grid-template-columns: 100px auto; /*dedigimizde ilk sutun 100 ikincisi ise maks boyutta yer kaplar. yani devamindaki kismi doldurur*/
grid-template-rows: 400px auto;/*satirda ise icerigin doldurmasina calisir yani FIT CONTENT*/
```

```css
grid-template-columns: 100px minmax(400px,800px); /*duruma gore min max degerleri atayabiliyoruz */
```

repeat

```css
grid-template-columns: repeat(2,200px);
```

az grid belirleyip fazladan grid eklenirse yapilacak olan alan belirleme islemi

```css
grid-auto-rows: 300px;
```

another example

```
.grid-container {
 display:grid;
 grid-template-columns: auto 400px minmax(200px,500px);
 grid-template-rows: 1fr 1fr 2fr;
 grid-auto-rows:50px;
}
```

Grid lines, grid tracks ve grid cell seklinde isimlendiriyoruz.

Bunlar container icinde olabilir. cell icinde de itemlar olabilir ayni zamanda cell ile item ayni da olabilir. 

bunlarin hepsine ise layout deriz

```css
grid-column: span 2; /*2 column'u bu kaplasin anlamina geliyor asagida alternatifi var*/
grid-column-start: 2; /*2. column'dan baslasin*/
grid-column-end: 4; /*4'te bitsin. yani 2 column kaplasin -4 gibi degerlerde verebiliriz geriden gelerek sayariz */ 
```

```css
grid-row-start:2;
grid-column-start:1;
grid-row-end:3;
grid-column-end:3;

/* yukaridakinin ozet hali*/
grid-area:2/1/3/3;

```



#### BOOTSTRAP

1. CDN: https://getbootstrap.com/docs/4.4/getting-started/introduction/

   ```css
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
   ...
   ```

2. Simple Card

```css
/*https://getbootstrap.com/docs/4.3/components/card/*/
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

###### Column System

![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla-90ec077c-402c-460b-bb40-ceb4aaf5e44e.jpg)

![](https://files.codingninjas.in/article_images/bootstrap-grid-basics-1-1675398372.jpg)

* None(col-10 mesela): en kucuk oldugunda
* sm: mobile
* md: ipad
* lg: laptop
* xl: desktop
* Xxl: tv

Example

https://appbrewery.github.io/bootstrap-layout/

```css
 <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-6 col-sm-12 col-1" >Column 1</div>
```

###### ICON SVG

* https://icons.getbootstrap.com



bosluklari belirleme

https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding

## Colors

<img src="/Users/yba/Documents/GitHub/Note/Notes/HTML_CSS/img/image-20231025142647227.png" alt="image-20231025142647227" style="zoom:40%;" />



## JAVASCRIPT

#### Data Types

* String
* Boolean
* Number

#### Function

* alert: popup message
* Typeof(): find type of var
* Prompt():popup input
* var:variable
  * Let: changeable
  * Const: constant, not changeable
* Length:
* Slice: name.slice(start,end);
* toUpperCase();
* toLowerCase();

```js

```

<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Operators_In_javascript/Operators_In_JavaScript_10.png" style="zoom:40%;" />

```js
var arr = [1,2,3,4,5];
arr.includes(1); => true 
arr.push(6) => add 6 to the arr
arr.pop() => remove 6 from the arr
```



### How To Use In HTML

1. in body tag

   ```html
   <body onload="alert('Hello')">
   ```

2. in body with script tag

   ```html
   <body>
     <script type="text/javascript">
   	alert ("Hello");
   	</script>
   </body>
   ```

3. external

   1. html file

   ```html
   <script src="index.js" charset="utf-8"></script>
   
   ```

   2. js file

   ```js
   document.querySelector("h1").innerHTML = "Good Bye";
   ```

4. console

   ```
   document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Yildirim";
   document.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.nextinnerHTML = "Akyurek";
   third.style.color = "red";
   ```

   

### Properties and methods

BUTTON

1. Properties
   1. innerhTML
   2. ﻿﻿style
   3. ﻿﻿firstChild
2. Methods
   1. ﻿click ()
   2. ﻿﻿appendChild ()
   3. ﻿﻿setAttribute ()



### JS vs CSS

Normalde tum sekillendirmeler css'de ama js ile de degisiklik yapabiliriz. ideal olan yontem css ozelliklerini css dosyasina yazarken js ile sadece class ekleyerek ya da kaldirarak bu ozellikleri degistirmektir.  Asagida hidden ozelligi var ama js bunu aktif ve inaktif yapiyor. 

```js
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
// or you can use toggle
document.querySelector("button").classList.toggle("invisible");
```

css

```css
.invisible{
  visibility:hidden;
}
```



some example

```
document.querySelector("h1").textContent="<em>hello<em>"; ==> '<em>hello<em>
document.querySelector("h1").innerHTML="<em>hello<em>"; ==> hello(italik sekilde yaziyor)
yani innerHTML css degisikliklerini de kabul ediyor. sadece content'i degil css ozeliklerine de erisebiliyor.
```



setAttribute

```jss
document.querySelector("a").setAttribute("href","https://www.bing.com");
```



#### DOM

Elbette, aşağıda verilen JavaScript kod örneklerini daha derli toplu ve açıklayıcı bir şekilde Markdown formatında not olarak ekledim:

```markdown
### DOM İşlemleri ve JavaScript Örnekleri

Aşağıda, JavaScript kullanarak Document Object Model (DOM) üzerinde bazı işlemler gerçekleştirmek için kullanılabilecek örnek kodlar bulunmaktadır:

1. İçerik Değiştirme:
   - İlk çocuğun son çocuğunun son çocuğunun içeriğini değiştirme:
     ```javascript
     document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Yıldırım";
```

   - Son çocuğun son çocuğunun ilk kardeşinin üç sonraki kardeşinin içeriğini değiştirme:
     ```javascript
     document.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.innerHTML = "Akyürek";
     ```

2. Renk Değiştirme:
   - Bir öğenin rengini değiştirme:
     ```javascript
     third.style.color = "red";
     ```

   - Bir etiket türüne göre seçilen ikinci öğenin rengini değiştirme:
     ```javascript
     document.getElementsByTagName("li")[1].style.color = "red";
     ```

   - Belirli bir sınıfa sahip ikinci öğenin rengini değiştirme:
     ```javascript
     document.getElementsByClassName("list")[1].style.color = "purple";
     ```

3. Element Seçimi:
   - İlk input elementini seçme:
     ```javascript
     document.querySelector("input");
     ```

   - İlk button elementini seçme:
     ```javascript
     document.querySelector("button");
     ```

   - İlk h1 elementini seçme:
     ```javascript
     document.querySelector("h1");
     ```

   - `list` sınıfına sahip ilk li elementini seçme:
     ```javascript
     document.querySelector("li.list");
     ```

   - `list` ID'sine sahip a etiketlerinden ilkini seçme:
     ```javascript
     document.querySelector("#list a");
     ```

   - `list` sınıfına sahip li elementlerinin içindeki a etiketlerinin rengini değiştirme:
     ```javascript
     document.querySelector(".list a").style.color = "red";
     ```

   - `list` ID'sine sahip a etiketlerini liste olarak seçme:
     ```javascript
     document.querySelectorAll("#list a");
     ```

4. CSS Sınıf İşlemleri:
   - Bir butona "invisible" sınıfını eklemek:
     ```javascript
     document.querySelector("button").classList.add("invisible");
     ```

   - Bir butondan "invisible" sınıfını kaldırmak:
     ```javascript
     document.querySelector("button").classList.remove("invisible");
     ```

   - Bir butonun "invisible" sınıfını değiştirmek (ekler veya kaldırır):
     ```javascript
     document.querySelector("button").classList.toggle("invisible");
     ```

5. Attribüt Ekleme:
   - Bir a etiketine `href` özelliğini eklemek:
     ```javascript
     document.querySelector("a").setAttribute("href", "https://www.bing.com");
     ```
```

Bu notlar, JavaScript ile DOM üzerinde çeşitli işlemler gerçekleştirmek istediğinizde başvurabileceğiniz bir kaynak olabilir.
```



#### Functions

1. **Fonksiyon Deklarasyonları:**
   Bu tür fonksiyonlar bir isim verilerek tanımlanır ve daha sonra bu isimle çağrılabilirler.

   ```javascript
   function topla(a, b) {
       return a + b;
   }
   
   // Fonksiyonu çağırma
   var sonuc = topla(5, 3);
   console.log(sonuc); // Çıktı: 8
   ```

2. **Anonim Fonksiyonlar:**
   İsim verilmeden tanımlanan fonksiyonlardır ve genellikle başka bir fonksiyon içinde veya bir değişken olarak kullanılır.

   ```javascript
   var carp = function(a, b) {
       return a * b;
   }
   
   var sonuc = carp(4, 7);
   console.log(sonuc); // Çıktı: 28
   ```

3. **Okunur (Arrow) Fonksiyonlar:**
   Arrow fonksiyonlar, daha kısa ve okunaklı bir şekilde fonksiyon tanımlamak için kullanılır.

   ```javascript
   var bol = (a, b) => a / b;
   
   var sonuc = bol(10, 2);
   console.log(sonuc); // Çıktı: 5
   ```

4. **IIFE (Immediately Invoked Function Expression):**
   Bu tür fonksiyonlar tanımlandığı anda otomatik olarak çağrılır.

   ```javascript
   (function() {
       var mesaj = "Merhaba, dünya!";
       console.log(mesaj);
   })(); // Çıktı: Merhaba, dünya!
   ```

5. **Yüksek Siparişli Fonksiyonlar (Higher-Order Functions):**
   Bu tür fonksiyonlar diğer fonksiyonları parametre olarak alabilir veya fonksiyon döndürebilir.

   ```javascript
   function islemYap(a, b, fonksiyon) {
       return fonksiyon(a, b);
   }
   
   function topla(x, y) {
       return x + y;
   }
   
   function carp(x, y) {
       return x * y;
   }
   
   var sonuc1 = islemYap(5, 3, topla);
   var sonuc2 = islemYap(5, 3, carp);
   
   console.log(sonuc1); // Çıktı: 8
   console.log(sonuc2); // Çıktı: 15
   ```

Bu örnekler, JavaScript'te fonksiyonların nasıl tanımlanabileceğini ve nasıl kullanılabileceğini anlamanıza yardımcı olabilir. Fonksiyonlar, JavaScript'in güçlü ve esnek bir özelliğidir ve birçok farklı senaryoda kullanılabilirler.





#### DOM & For Loop

```js
var buttons = document.querySelectorAll(".set button");//sadece .drum'da diyebilirdik
buttons.forEach(element => {
    element.addEventListener("click",function(){
        alert("Click");
    })
});
```



###### Function

```html
    <script>
        // Ayrı bir fonksiyon tanımlama
        function tiklandi() {
            alert("Tıklandı!");
        }

        // button elementini seçme
        var button = document.getElementById("btn1");

        // click olayına ayrı fonksiyonu ekleme
        button.addEventListener("click", tiklandi);
    </script>
```

###### Anon Func

```html
    <script>
        // button elementini seçme
        var button = document.getElementById("btn2");

        // click olayına anonim bir fonksiyon ekleme
        button.addEventListener("click", function() {
            alert("Tıklandı!");
        });
    </script>
```

High order function: bask fonksiyonlari parametre olarak alan fonksiyonlardir. 





### JQUERY

```js
$("h1") == document.querySelector("h1")
$("h1") == document.querySelectorAll("h1")
```



deger atama

```js
$("h1").css ("font-size","5rem");
```

deger ogrenme

```js
console.log($("h1").css("font-size"));
```

add css class

```
$("h1")."addClass("big-title");
(removeClass)
(hasClass) = $("h1").hasclass("big-title");
```

text manipulating

```js
$("h1"').text("Bye");
$("button").html("<em>Hey</em>");
```



Attribute

```
<img src="drum.png" alt="">
<a href="https://www.googLe.com"></a>
```



```js
$("img").attr("src"); => drum.png bilgisini verecektir.
$("a").attr("href", "https://www.yahoo. com"); => set islemi yapacaktir. 
```

jquery addevent

```js
$("h1").click(function () {
    $("h1").css("color","yellow");
})
```

jQuery vs pure

(5 tane button var tiklayinca h1'in rengi değişecek )

```js
for (var i = 0; i<5; 1++) {
document. querySelectorAlI("button") [il .addEventListener("click", function () {
document.querySelector ("h1") .style.color = "purple"
});
}

$("button"). click(function() {
   $("h1").css("color", "purple");
});
```

add keyboard event

```HTML
<input type="text" name="" value="">
```

input alanina bir seyler yazildiginda bunu consol'a kaydediyor. 

```js
$("input").keypress(function (event) {
console.log (event.key);
```

herhangi bir yere basildiginda h1 texti bununla degisecek.

```
a
```

mouse h1 uzerine gelince rengi degissin

```js
$("h1").on ("mouseover", function() {
$("h1").css ("color", "purple");
});
```

```js
$("h1").on ("click", function() {
$("h1").css ("color", "purple");
});
```



add and remove element

* before (): h1'den once
* after () : h1'den sonra
* prepend ( ): h1'in hemen önüne yani h1 etiketi icine 
* append (): h1 etiketi icine h1 text'inin sonuna

```js
§("h1").before("<button>New</button>");
```

```js
$("h1").remove(); tum h1'leri kaldirir. 
```



hide=> mesela button'a tiklayinca h1 hide oluyor.

```js
$("button").on("click", function () {
  
$("h1").hide();
$("h1").toggle();=> hide toggle'i
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").slideToggle();

});
```

```js
$("button"). on ("click", function() {
$("h1").animate(opacity: 0.57) ;
```

```js
$("button").on ("click", function () {
$("h1") .slideUp() .slideDown() .animate(opacity: 0.5)
```

