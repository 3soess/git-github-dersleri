function cikar() {
    if(parseInt(sayi1.value) < parseInt(sayi2.value))
    alert("Cikarma islemi icin birinci sayinin ikinci sayidan buyuk olmasi gerekiyor!");
    else
    sonuc.innerHTML = parseInt (sayi1.value) - parseInt (sayi2.value);
}
