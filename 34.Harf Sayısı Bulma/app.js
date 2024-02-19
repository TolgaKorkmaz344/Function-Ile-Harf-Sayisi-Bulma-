let metin = "JavaScript, HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir. Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar ve kullanılan kodlar genellikle üçüncü taraf kitaplıkları içerir.";

let harf = prompt("Harf Giriniz");

function harfBul(harf) {

    let toplam=0;
    for(i=0; i<=metin.length; i++) {

        if(metin.charAt(i)===harf) {
            toplam+=1;
        }
    }
        return toplam;

}

let sonuc = harfBul(harf);

alert ("Harf Sayısı " + sonuc);









