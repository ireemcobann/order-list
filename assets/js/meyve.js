const meyveler = ["erik 💚 ", "ananas 🍍", "muz 🍌", "çilek 🍓", "karpuz 🍉", "kavun 🍈"];
const siparisler = [];

const urunListe = document.querySelector("#urunListe");
const siparisListe = document.querySelector("#siparisListe");

function urunListele() {
    urunListe.innerHTML = "";
    for (const meyve of meyveler) {
        urunListe.innerHTML += `
            <li><button class="meyveBtns">${meyve}</button></li>
        `;
    }
    butonatikla();
}

function butonatikla() {
    const meyveBtn = document.querySelectorAll('.meyveBtns');
    for (const btn of meyveBtn) {
        btn.addEventListener('click', sepeteEkle);
    }
}

function sepeteEkle() {
    const meyveAdi = this.innerText; 
    const mevcutSiparis = siparisler.find(siparis => siparis.meyveAdi === meyveAdi);
    
    if (mevcutSiparis) {
        mevcutSiparis.adet += 1; 
    } else {
        siparisler.push({
            meyveAdi: meyveAdi,
            adet: 1
        });
    }
    
    siparisEkle(); 
}

function siparisEkle() {
    siparisListe.innerHTML = ""; 
    for (const siparis of siparisler) {
        siparisListe.innerHTML += `<li>${siparis.meyveAdi} x ${siparis.adet}</li>`;
    }
}


urunListele();


const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', siparisTemizle);
console.log(clearBtn)

function siparisTemizle() {
siparisListe.innerHTML = '';
}

