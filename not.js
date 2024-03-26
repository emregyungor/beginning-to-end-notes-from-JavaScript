////1. VAR LET CONST ARASINDAKİ EN ÖNEMLİ FARK VAR VE LET DEĞİŞKENİ DEĞİŞTİRİLEBİLİRKEN , CONST DEĞİŞKENİ DEĞİŞTIRILEMEZDIR. 
//////JAVASCRİPT DOSAYAYSI AYRI BİR DOSYA OLARAK .JS İLE DE AÇILABİLİR VEYA HTML İÇİNDE <SCRİPT> DOSYASI İÇİNDE DE YAZILABİLİR.

//VAR  LET  CONST

//let isim  = "Mehmet";
//var isim2  = 'Ahmet';
//const isim3  = "Hatice";
//const isim3= 'Osman'; hatalı kullanım
//console.log(isim);
//console.log(isim2)
//console.log(isim3);

//VERİ TİPLERİ

//let isim = "Mehmet"; //string
//let age =  25; // int 
//let cinsiyet = true; //boolean
//let firstChar = "a"; // charset
//let celcius = 10.75; //  float ondalıklı

//DİZİLER

// KÖŞELİ PARANTEZ DİZİLERİ SEMBOLİZE EDER
// DİZİLERDE FARKLI TİP DEĞİŞKENLER BİR ARADA TUTULABİLİR ÖR(İSİM YAŞ CİNSİYET VS.)
//let person1 = ["ahmet" , 26 , true]; // diziler
//console.log(person1[0]) = ahmet
// dizilerde push eleman eklemek için kullanılr.

//OBJELER

//obje tipleri ise süslü parantezi içiçe yazılır ve console bastırılmak istendiğinde . ile .çağrılır
//let address ={
//   city : "Istanbul",
// country: "Türkiye",
//};
//console.log(address.city); // istanbul çağrılır

//TYPE OF

// DİZİ VEYA OBJE İÇİNE YAZILAN YAZILARIN VERİ TİPLERİNİ GÖSTERMEYE YARAYAN SİSTEMDİR
//console.log(typeof isim); // string olarak gösterir

//TYPE CASTİNG

//VERİ TİPLERİNİ DEĞİŞTİRMEYE YARAYAN SİSTEMDİR
//console.log(typeof string(10));

//DOCUMENT 

//JAVASCRİPT CONSOL İÇİNDE HTML ÇAĞIRMAYA YARAYAN SİSTEM
//GetElementById = ıd üzerinden tekil etiket çağırabilirsiniz.
//GetElementsByClass = class üzerinden çoğul etiket çağırmaya yarar.
//GetelementbyTagName = tagName ile herhangi bir tag  çağırabilirsiniz. <p> gibi
//QuerySelector = . ile class  veya # ile id çağırabilirsiniz.
//QuerySelectorAll = birden fazla  class veya id çağırabilirsiniz.
// let alltitles = document.querySelectorAll("title");
// console.log(alltitles);

//<script src dosyası her zaman body kapanmadan bir önce kullanılması sağlıklıdır.

//ınnerHTML VE innerTEXT

//innerHTML etiket içerisndeki textleri html biçimi ile alırken
//innerTEXT ise sadece text kısmını yazdırır
//console.log(maintitle.innerHTML) = <span main Title ></span>
//console.log(maintitle.innerTEXT) =  Main Title

//console.log(maintitle.innerTEXT)
//maintitle.innerTEXT ="New Main Title";
//BU DURUMDA KONSOLDA HALA MAİNTİTLE YAZARKEN WEB SAYFADA NEW  MAINTITLE YAZACAKTIR

//FONKSİYONLAR

//function yazaılır ardına fonksiyon adı ile tanımlaması yapılır. () ardından {}açılır ve kodlar yazılır
//function emreg(){
// console.log("Merhaba Ben Emre!");
//}
//fonksiyonun konsola basması için  emreg(); diye yazılı olması gerekir
//function listmytitleelement(){
// console.log(maintitle);
// console.log(maintitle.innerText); //konolsa bastırır
//  maintitle.innerText = "react dersleri"; //js derslerini react dersleri yapar
// maintitle.style.color="red"; // renk değşitirmeyi sağlar
//}

//HAFTA 2 ÖZETİ

//let number1 =10;
//let number2 = 20;
//ARİTMETİK OPERATÖRLER
//console.log(number1 + number2);  //sayiları ekleyerek toplama
//console.log(number1 - number2);  // sayıları farklayarak çıkarma
//console.log(number1 / number2);   // sayıları bölerek karşılaştırma
//console.log(number1 * number2);   // sayıları çarpıp ürün oluşturma
//console.log(number1 % number2);     //mod alma işlemi
//console.log(number1 ** number2);     //power of işlemi üs alma
//console.log("++", ++number1); number1 =number1 +1 11
//console.log("--", --number1); number1 =number1 -1 9

//MANTIKSAL OPERATÖRLER

// && VE operatörü
// || VEYA operatörü
// !  DEĞİL operatörü
//let condition1 =true;
//let condition2= false;
//console.log("&&",condition1  && condition2 ); //false
//console.log("||",condition1 || condition2)  ; //true
//console.log("!"  ,!condition1 ) ;  //false            ;

//KARŞILAŞTIRMA OPERATÖRLERİ

// == eşittir operatörü
// ===  tam eşittir operatörü
/// !=  eşit değil operatörü
// !==  tam eşit değil operatör
// >   Büyükse
// <     Küçükse
// >=     Büyük veya Eşit
// <=       Küçük veya Eşit

//let number1 = 10;
//let number2 ="10";
//console.log("==", number1 == number2); true sadece içerik açısından kontrol eder  10 ==10
//console.log("===", number1 === number2);  false hem içerik hem ver tipi açısından kontol eder 10 ===10 ancak string değil int
//console.log("!=", number1 != number2); false
//console.log("!==", number1 !== number2);  true
//console.log(">", number1 > number2);  false
//console.log("<" , number1 <  number2); false
//console.log(">=", number1 >= number2);  false
//console.log("<=", number1 <= number2);   true 

//ATAMA OPERATÖRLERİ

//= atama operatörü
//+= artışlama atama operatörü
//-= azaltma atama operatörü
//*= çarpma atama operatörü
///= bölme atama operatörü
// %= mod alma operatörü

//let number3 = 10;
//number3 += 5;
//console.log(number3);    //15
//number3 -= 5;
//console.log(number3);    //10
//number3 *= 5;
//console.log(number3);    //50
//number3 /= 5;
//console.log(number3);    //10

//IF ELSE ELSE IF OPERATÖRÜ

//if else operatörleri soru cevap operatörleridir
//let isim = "ali";
//if(true){ değru ise bunu 
// console.log(isim + " merhaba");
//}else{ yanlış ise bunu yazdır
// console.log(isim + " ben ali");
//}
// if bloğunun içi false olursa direk yanlış olur konsola basmaz

// else if değil ise anlamına gelir tekrar tekrar kontrolü sağlar

//SWİTCH CASE OPERATÖRLERİ

//içerisinde koşul durumu aramadan karşılaştırma yapar
//switch(number){
// case 1:
//    console.log("Pazar");
// case 2:
//   console.log("Pazartesi");
//   default:
//     console.log("Haftai");
//break;
//}
{/* <h1>7-Fonksiyonlar</h1>
Fonksiyonlar belirli işleri yapan kod parçacıklarıdır. Belirli bir işi yapan kod için tekrar tekrar aynı kodu yazmak yerine bu kodları bir fonksiyon içinde yazabilir ve daha sonra bu fonksiyonunu ihtiyacımız olduğunda çağırarak gereksiz kod yazımından kurtulabiliriz. Ayrıca böylece kodlar üzerinde daha rahat değişiklik yapabilir, daha düzenli kod yazabiliriz.

    //fonksiyon tanımlama
    function merhaba()
    {
        alert("Hoşgeldiniz!");
    }
    //fonksiyonu çağırma
    merhaba();
JS'de fonksiyonlara parametre gönderirken dikkat edilmesi gereken bir nokta vardır. Fonksiyonun kabul ettiği parametre sayısından daha az sayıda değer gönderebiliriz. Bu durumda JS hata vermez ama program çalışırken hataya sebep olabilir.

     function topla(a,b,c)
     {
         return a+b+c;
     }
     //fonksiyonu çağırıyoruz
     topla(3,5);

Fonksiyonları kullanmadan önce tanımlamaya özen göstermeliyiz.


----------


<h1>8-for Döngüsü</h1>
Döngüler, belirtilen koşul sağlandığı sürece tekrar tekrar kodlarımızı çalıştırmaya yarar. 

    //for yapısı
    for(başlangıç değeri ; koşul ; artış miktarı)
    {
        //kodlar
    }
`for` döngüsü kodlarımızı döngüye sokmadan önce koşulu kontrol eder. Eğer koşulumuz doğru ise belirttiğimiz sayıda kodlar tekrar edilir.

    for (var i=0; i<5; i++)
    {
        console.log(i);
    }

 

 - Döngümüz çalışmaya başladığı zaman `i` değişkenine 0 değeri atanıyor.
 - Daha sonra koşul kontrol ediliyor. Yani `i`(0), 5ten küçük mü?
 - Koşul sağlandığı için döngü içine giriliyor ve kodlar çalışıyor.
 - Kodlarımızın çalışması bittiğinde yani ilk döngü sonunda, `i++` ile `i` değişkeninin değeri 1 artıyor.
 - Tekrar koşulumuz kontrol ediliyor Yani `i`(1), 5 ten küçük mü?
 - Koşulumuz sağlandığı müddetçe döngümüz devam ediyor.
 - `i = 5` değerine ulaştığı zaman, `i(5) <` 5 koşulu artık doğru olmadığı için döngümüz sona eriyor. 


----------
<h1>9-while Döngüsü</h1>

`while` döngüsü, `for` döngüsünü gibi başlangıçta koşul kontrolünü yapar ve doğru ise döngüye başlar. Fakat `for` gibi ilk değer ataması ya da artış miktarını bizim belirtmemiz gerekir.

    var i=0;
    while(i<5)
    {
        console.log(i);
        i++;
    }

 Eğer döngü içerisinde artış miktarını ayarlamazsak ya da koşulumuzu sürekli doğru olacak şekilde yazarsak sonsuz döngüye girmiş oluruz ve kodlarımız arafta sıkışır.


----------
<h1>10-do while döngüsü</h1>
`do while` döngüsü `for` ve `while` döngüsü gibi girişte koşulu kontrol etmez. Döngü sonunda koşul kontrol edilir. Yani koşulumuz doğru ya da yanlış olsa da en azından bir kez döngümüz çalışacak demektir.

    var i=1;
    do
    {
	    //kodlar
        i++;
    }while(i>1);
Yukarıda kodda koşulumuz `i`'nin 1 den büyük olduğu müddetçe döngünün çalışmasıdır. `i`'nin ilk değeri 1 olmasına rağmen öncelikle `do {}` arasındaki kodlar çalışacak daha sonra `i`'nin değeri 1 arttırılacaktır. Döngü sonunda ise koşulumuz kontrol edilecektir. Yani koşulumuz en başından yanlış olmasına rağmen döngümüz 1 kere çalışmış oldu.


----------
<h1>10-break ve continue</h1>
`break` ve `continue` ile kodlarımızın belirli parçalarını atlayabilir ya da tamamen kod bloğundan çıkabiliriz. `break`,  kod bloğundan çıkmamızı sağlarken, `continue` alt satırda kalan kod parçalarını atlayıp tekrar kod bloğunun başına dönmemizi sağlar.

    for (var i=0; i<=5; i++)
    {
        if (i==3)
        {
            continue;
        }
        console.log(i);
    }
Yukarıdaki kodda `i` değeri 3 olduğu zaman `continue` ifadesi çalışacak yani döngünün başına gidilecektir. Yani konsola 0,1,2,4,5 yazılacaktır.

    for (var i=0; i<=5; i++)
        {
            if (i==3)
            {
                break;
            }
            console.log(i);
        }
Yukarıdaki örnekte ise `i` değeri 3 olduğu zaman döngü tamamen sona erecektir. Yani konsola 0,1,2 yazılacaktır.


----------
<h1>11-for in</h1>
`for in` ile nesne içindeki özellikler kadar döngüye girilir.

    var film = {isim:"Matrix", tur:"Bilim Kurgu", yil:2500};
    var x;
    for (x in film) {
        console.log(film[x]);
    }
Yukarıdaki örnekte `film` nesnesi içindeki her bir özellik için döngü çalışacak ve konsola `Matrix, Bilim Kurgu, 2500` yazılacaktır.


----------
<h1>12-try-catch-finally</h1>
`try-catch` ile kodlarımızın çalışması sırasında oluşan hatalara karşı önlemler alabiliriz. 

 - Çalışacak kodlarımızı `try` bloğu içine yazarız. Eğer kodlarımız hata olmadan çalışırsa `catch` bloğu atlanır ve program devam eder. 
 - Eğer bir hata olursa `catch` bloğu bu hataları yakalar ve biz de hata durumunda yapılması gerekenleri belirtebiliriz.
 - `finally` bloğu ise hata olsun ya da olmasın çalışacak kodları içeren bloktur.

**try-catch**

    try
    {
        //kodlar
    }
    catch(err)
    {
        //hata olursa buradaki kodlar
        //hata mesajını yazdır
        console.log(err.message)
    }
**try-catch-finally**

    try {
        //kodlar
    }
    catch(err) {
        //hata durumunda yapılacaklar
    } 
    finally {
       //buradaki kodlar try ya da catch den sonra çalışacak
    }

----------
<h1>13-throw</h1>
`throw` ile kendimiz özel hata mesajları oluşturabilir ve bunları gösterebiliriz.

    try
    {
        if(x < 0)
        {
            throw "HataMesaji1";
        }
        else if(x > 100)
        {
            throw "HataMesaji2";
        }
    }
    catch(err)
    {
        if(err=="HataMesaji1")
        {
            console.log("Değer 0 dan küçük");
        }
        if(err=="HataMesaji2")
        {
            console.log("Değer 100 den büyük");
        }
    }
İstersek bir yeni bir `Error` nesneni oluşturarak hata mesajlarımızı daha da geliştirebiliriz.

    var HataMesaji1 = new Error();
    
    HataMesaji1.name    = 'Negatif Değer';
    HataMesaji1.message = 'Değer 0 dan büyük olmalı';
    
    throw "HataMesaji1";


----------
<h1>14-Diziler</h1>

Diziler ile bir değişken üzerinde birden çok ve farklı tipte veriyi saklayabiliriz.

    var diziAdi = ["Asya", 48, "yeni"];
Dizi elemanlarına ulaşmak istersek, index numarısını kullanabiliriz. Index numarası 0dan başlamaktadır.
`diziAdi[0]` , **Asya** değerini taşımaktadır. `diziAdi[2]` ise **yeni** değerini taşımaktadır.
Diziler aslında birer nesnedir. Aralarında fark ise dizi elemanlarına ulaşmak için index numalarını kullanırız. Nesnelerde elemanlara ulaşmak için index isimlerini kullanırız.

    var personel = {isim:"Asya", soyisim:"Yeni", yas:48};
    personel.isim; //personel nesnesinin isim özelliğine erişir

Dizileri farklı şekillerde de tanımlamak mümkündür. 

    var personel = [];
    personel["isim"] = "Asya";
    personel["soyisim"] = "Yeni";
    personel["yas"] = 48;
Yukarıdaki örnekte gibi dizi tanımlaması yapılırsa dizi elemanlarına ulaşmak için index numarası değil belirtilen anahtar kelimler kullanılmalıdır. `personel["isim"]` gibi. `personel[0]` tanımsızdır.
<h2>Diziye Yeni Eleman Eklemek</h2>
Bir diziye yeni eleman eklemenin en basit yolu `push()` fonksiyonunu kullanmaktır.

    var icecekler = ["Su", "Kola", "Ayran", "Limonata"];
    icecekler.push("Kahve"); 
<h2>Dizi Uzunluğunu Bulmak</h2>
`length` özelliği ile dizinin uzunluğunu bulabilir ve buna göre işlemler yapabiliriz. Mesela bir dizinin tüm elemanlarını yazdırmak istersek:

    var icecekler = ["Su", "Kola", "Ayran", "Limonata"];
    for	(index = 0; index < icecekler.length; index++) {
        console.log(icecekler[index]);
    }


----------
<h1>15-Nesneler (Object)</h1>
Programlama dillerinde nesneleri gerçek hayattaki gibi nesneleri oluşturmak için kullanırız. Örneğin hayvanlar, arabalar, bilgisayarlar vs... birer nesnedir. Bu nesnelerin kendine has özellikleri ve davranışları vardır.
JS'de nesneler ile dizilerde olduğu gibi birden fazla veriyi tutabiliriz. Nesneler dizilere nazaran daha komplex yapılar oluşturmamıza izin verir ve tüm programlama dillerinde önemli bir yere sahiptir.

Örnek olarak telefon nesnesini ele alalım. Bu telefonun bazı özellikleri olacaktır. Markası, modeli, işletim sistemi, rengi vb... Şimdi bu nesneyi JS'de tanımlayalım:

    var telefon = {marka:"LG", model:'G4', renk:"beyaz"}; 
Bu örnekte `marka`, `model`, `renk` nesnenin özellikleri, `LG`, `G4`, `beyaz` ise özelliklerin değeridir.
Bu özelliklere ulaşmak için `.` ya da özelliğin adını kullanabiliriz. `telefon.marka` ya da `telefon["marka"]` gibi.

Ayrıca nesnelere özellik olarak fonksiyonlarda ekleyebiliriz:

    var telefon = {
        marka:"LG",
        model:'G4',
        renk:"beyaz",
        bilgileriGetir: function(){
            return this.marka + ' ' + this.model;
        }
    };
Nesneye ait fonksiyonu şu şekilde çağırmamız gerekir: `telefon.bilgileriGetir()`. Eğer `telefon.bilgileriGetir` şeklinde çağırırsak fonksiyonu ve kodları getirir.


----------
<h1>16-DOM ve Sayfadaki Nesnelere Erişmek</h1>
DOM yani Document Object Model, bir web sayfasında bulunan tüm ögeleri bir nesne olarak kabul eder. Yani bir sayfadaki başlıklar, paragraflar, resimler vs... birer nesnedir. Böylece bu nesnelere erişebilir ve müdahele edebiliriz. HTML sayfamız içindeki nesnelere erişmek için `document` objesini kullanarak başlamamız gerek.
<h2>Sayfadaki Nesnelere Erişmek</h2>
JS ile web sayfasındaki nesnelere erişmek için birden fazla yöntem vardır. Nesnenin ID'si, etiketi ya da class (sınıf) adıyla erişebiliriz.
**getElementById**
Sayfadaki nesnenin ID'sini belirterek bu nesneye erişebiliriz.

    <html>
    <head></head>
    <body>
    <h1>Lorem</h1>
    <p id="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet...</p>
    
    <script>
        var paragraf = document.getElementById('par');
    </script>
   
    </body>
    </html>
**getElementByTagName**
 Sayfamızdaki nesnelerin etiketlerini kullanarak bu nesnelere erişebiliriz. Eğer birden fazla ise bir dizi olarak sonuç döner. Eğer hiçbir nesne bulunamazsa elimizde boş bir nesne olacaktır.

    <html>
        <head></head>
        <body>
        <h1>Lorem</h1>
        <p id="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet...</p>
        
        <script>
            var paragraf = document.getElementByTagName('p');
        </script>
       
        </body>
        </html>

<h2>Erişilen Nesnelere Müdahele Etmek</h2>
JS ile erişilen nesnelere müdahele ederek özelliklerini değiştirebiliriz. Bir nesnenin sahip olduğu özelliklerin değerini elde etmek için `getAttribute()`, bu özellikleri değiştirmek için `setAttribute()` kullanabiliriz.

    <html>
            <head></head>
            <body>
            <h1>Lorem</h1>
            <p id="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet...</p>
            
            <script>
                var paragraf = document.getElementByTagName('p');
                paragraf.setAttribute('align', 'right');
                 var baslik = document.getElementsByTagName('h1');
    baslik[0].innerHTML = 'Yeni Baslik';
            </script>
           
            </body>
            </html>
<h2>Yeni Nesne Üretmek </h2>
`createElement()` ile yeni nesnelere oluşturup sayfamıza dahil edebiliriz.

    <html>
    <head></head>
    <body>
    
    <h1>Lorem</h1>
    
    <p id="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet beatae delectus doloremque dolores eius explicabo.</p>
    
    <script>
        var yeniParagraf = document.createElement('p');
        yeniParagraf.innerHTML = 'Bu yeni bir paragraf';
    
        document.body.appendChild(yeniParagraf);
    
    </script>
    
    </body>
    </html>
JS'de yeni bir element oluşturup sayfaya dahil etmk için farklı yöntemlerde mevcuttur.


----------
<h1>17-Olaylar ve Olay Dinleyicileri (Events & Events Listener)</h1>
HTML sayfamızda gerçekleştirdiğimiz herşey aslında bir olaydır(event). Bir butona ya da resme tıklamak, imleci hareket ettirmek, bir tuşa basmak vs... hepsi bir olaydır ve JS ile bunları takip edebilir, gerçekleştiği zaman müdahele edebiliriz.

    document.onclick = function(){
            alert('sayfada bir yere tıklandı')
        } 
Yukarıdaki basit örnekte olduğu gibi sayfamızda herhangi bir yere tıklandığı zaman bunu yakalayabilir ve istediğimiz kodları çalıştırabiliriz. Burada fonksiyonumuza bir isim vermedik çünkü dokümana tıklandığı an zaten bu fonksiyon çağrılacaktır. Bu fonksiyonu başka bir yerde kullanmayacağız.
 

    var par = document.getElementById('par');
        par.onclick = function(){
            alert('paragrafa tıklandı')
        }
Belirlediğimiz nesnelere erişip bunlar üzerindeki olayları da takip edebiliriz. 
Yukarıdaki örneklerde olduğu gibi sadece özel bir fonksiyon çağırmak yerine, farklı olaylar gerçekleştiği zaman belirlediğimiz bir fonksiyonu çağırabiliriz. Bu örnekte `addEventListener()` kullanacağız.

    document.addEventListener("click", mesajYaz);
    
        function mesajYaz() {
            document.getElementById("mesajAlani").innerHTML = "Merhaba";
        }
JS de kullanabildiğimiz olaylar sadece `click` değil tabii ki. Sayfadaki her hareketimiz bir event olduğu için JS de de birçok event bulumaktadır. 

 - [HTML üzerindeki eventlerin listesi](http://www.w3schools.com/tags/ref_eventattributes.asp)


----------
<h1>18-Arayüz Özelliklerine Müdahele</h1>
JS ile syfamızdaki nesnelere ve özelliklerine müdahele ettiğimiz gibi görünümlerine yani CSS özelliklerine de erişebilir ve müdahele edebiliriz. bunun için nesnenin `style` özelliğini kullanacağız.
CSS de özellikleri yazarken birden fazla olan kelimeleri `-` ile birleştirip yazıyoruz. JS ise `camelCase` kuralına göre bu özellikleri yazmamız gerek.

    document.getElementById("menu").style.width = "350px";
    document.getElementById("menu").style.left = "0px";
    document.getElementById("menu").style.backgroundColor = "#CCC";
Ayrıca nesnemize bir class ataması da yapabiliriz.

    document.getElementById("menu").className = "yanMenu"


----------
<h1>19-JQuery</h1>
[JQuery](https://jquery.com/) en popüler JS kütüphanesidir. JS yazmamızı daha basit ve eğlenceli hale getirir. JQuery ile daha az kod yazarak JS ile yaptığımız işlemleri gerçekleştirebiliriz. DOM'a daha rahat erişim sağlayabilir ve manipüle edebilir, uyumluluk sorunları ve cross-platform gibi detayların birçoğunu JQuery bizim için çözebilir. 

> Jquery kütüphanesi kullanılarak geliştirilen jqueryui gibi daha
> gelişmiş arayüzleri ve araçları daha kolay kullanabilmemize imkan
> veren ek kütüphanelerde mevcuttur. -[wikipedia](http://tr.wikipedia.org/wiki/JQuery)

Tek yapmamız gereken JQuery dosyasını [sayfamıza dahil etmektir](https://jquery.com/download/). 

    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
Örnek olarak sayfamızda **menu** id'li nesneye **yanMenu** isimli yeni bir class ataması yapalım:

    $('#menu').addClass('yanMenu');
Nesnemize tıklandığı zaman başka bir nesneyi gizleyelim ve sonrasında mesaj gösterelim:

    $( "#tikla" ).click(function() {
      $( "#liste" ).hide( "slow", function() {
        alert( "Liste gizlendi" );
      });
    // }); */
// 