let seznam_znamek = []

function sectiPrvky(list) {
    let soucet = 0;
    for(let i = 0; i < list.length; i++) {
        soucet += list[i];
    }

    return soucet;
}

function vyberNahodnyPrvek(list, vahy = [1, 1, 1, 1, 1]){
    let celkovaVaha = sectiPrvky(vahy)
    let vahyVProcentech = vahy;
    for(let i = 0; i < vahy.length; i++) {
        vahyVProcentech[i] = vahy[i] / celkovaVaha;
    }

    let cdf = []
    let cumul = 0
    for(let i = 0; i < vahyVProcentech.length; i++){
        cumul += vahyVProcentech[i];
        cdf.push(cumul);
    }

    let r = Math.random()
    for(let i = 0; i < list.length; i++){
        if(cdf[i] >= r) return list[i]
    }
}

function prumer(list) {
    return sectiPrvky(list) / list.length;
}

function znamkuj() {
    let jmeno = document.getElementById("name").value;
    jmeno = jmeno.trim().toLowerCase();
    let cisla = [1, 2, 3, 4, 5];
    let znamka;

    if(jmeno === "katka"){
        znamka = vyberNahodnyPrvek(cisla, [2, 1, 1, 1, 0])
    } else {
        znamka = vyberNahodnyPrvek(cisla);
    }

    seznam_znamek.push(znamka)


    document.getElementById("znamka").innerText = "Známka " + Number(znamka)
    document.getElementById("prumer").innerText = "Průměr: " + prumer(seznam_znamek).toFixed(2);
}

document.getElementById("klikniBtn").addEventListener("click", znamkuj);
