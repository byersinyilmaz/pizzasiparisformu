//Tüm fonksiyonlarda kullanılmak üzere global nesne ve döngü değişkenleri
var liste,secenek;
var i;

liste=document.getElementById("listePizza");

//Listelerden seçim yapılması olayını yakalayarak ilgili fonksiyonu çağırır
document.addEventListener("change",pizzaHesapla);


function toogle()
{
    liste=document.getElementsByName("grupIndirim");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            if(liste[i].value=="Aktif"){
                document.getElementById("txtIndirimKodu").disabled=false;
            }
            else if(liste[i].value=="Pasif"){
                document.getElementById("txtIndirimKodu").disabled=true;
                document.getElementById("txtIndirimKodu").value="";
            }
        }
    }
}

function pizzaHesapla(){
    var pizzaFiyatı,girilenKod,odenecekTutar,malzeme;
    const indirimKodu="PROMO";
   

    liste=document.getElementById("listePizza");
    secenek=liste[liste.selectedIndex].value;
    pizzaFiyatı=Number(secenek);

    

    liste=document.getElementsByName("grupEkMalzeme");

    document.querySelectorAll('#listeEkSecimler option').forEach(option => option.remove());

    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            pizzaFiyatı=pizzaFiyatı+2;
            malzeme=liste[i].value

            secenek=document.createElement("option");
            document.getElementById("listeEkSecimler").options.add(secenek);
            secenek.text=malzeme;
        }
    }

    girilenKod=document.getElementById("txtIndirimKodu").value;

    if(document.getElementById("kodTrue").checked){

    girilenKod=document.getElementById("txtIndirimKodu").value;
    if(indirimKodu==girilenKod){

        pizzaFiyatı=pizzaFiyatı-5;
        document.getElementById("dogrulama").innerHTML="";
    }

    else{
        
        document.getElementById("dogrulama").innerHTML="Lütfen geçerli bir kod giriniz."
       
    }
    }

    document.getElementById("sonuc").innerHTML="Ödenecek Tutar: "+pizzaFiyatı + "₺";



}