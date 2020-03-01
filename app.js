window.addEventListener('load', ()=>{

    const button = document.querySelector('.quotes');
    const quotes = document.querySelector('.quotegen');

    const citati = [
        "Početna tačka svakog uspeha je želja.",
        "Uspeh je loš učitelj. Zavede pametne ljude da misle da ne mogu da izgube.",
        "Uspeh je u suštini kulminacija neuspeha.",
        "Dođu, tako, vremena, kada pamet zašuti, budala progovori, a fukara se obogati!",
        "Čovjeka ćete najbolje upoznati ako ga promatrate kako se ponaša kad se nešto dijeli besplatno.",
        "Svi pravi životi su lepi i teški.",
        "Što ne boli – to nije život, što ne prolazi – to nije sreća.",
        "Ljubav, kad je iskrena i duboka, lako prašta i zaboravlja.",
        "Svi smo mi mrtvi, samo se redom sahranjujemo.",
        "Život nam vraća samo ono što mi drugima dajemo.",
        "Dok god ima mraka, ima i svanuća!",
        "Teško mogu da zamislim lepotu u kojoj nema ni malo melanholije.",
        "Muškarci se najbolje snalaze pored žena koje se najbolje snalaze bez njih.",
        "Treba biti pijan! I to je jedino važno... A čime? Vinom, poezijom, vrlinom - čime ti drago. Ali budi pijan!",
        "Ako svet i ne postoji, izmisli ga. Ali se prethodno uveri da ne postoji!",
        "Volim te jer si mi dala ljubav. Volim ljubav jer si mi je ti dala.",
        "Zaljubiš se jer je to tebi potrebno, a voliš jer je to potrebno nekom drugom.",
        "Postoji milion gradova u koje možeš da odeš, ali samo jedan u koji možeš da se vraćaš.",
        "Neke se pobede dobijaju na juriš! ",
        "Kad bi ona bila pahuljica, ja bih sigurno bio januar. I ne bi nas mogli zamisliti jedno bez drugoga.",
        "Uspeh je ono što čoveku vrat lomi.",
        "Nije najveća budala onaj koji ne umije da čita, nego onaj koji misli da je sve ono što pročita istina.",
        "Ljubavnicima je vreme uvek kratko i nijedna staza nije dovoljno dugačka.",
        "Ljudi male pameti rijetko se boje da ne budu dosadni.",
        "Životna snaga jednog čovjeka mjeri se, pored ostalog, i njegovom sposobnošću zaboravljanja.",
        "Kada nisam očajan, ja ne valjam ništa."
    ];
    //funkcija za klik dugma
    button.addEventListener('click', ()=>{
        let num = Math.floor(Math.random() * citati.length-1); //funkcija za random broj izmedju 0 i arraya

        if(num > citati.length-1)
            num = Math.floor(Math.random() * citati.length-1);
            
        quotes.textContent = citati[num];
    });

});