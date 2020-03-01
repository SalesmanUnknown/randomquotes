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
        "Dok god ima mraka, ima i svanuća!"
    ];
    //funkcija za klik dugma
    button.addEventListener('click', ()=>{
        let num = Math.floor(Math.random() * citati.length-1); //funkcija za random broj izmedju 0 i arraya

        if(num > citati.length-1)
            num = Math.floor(Math.random() * citati.length-1);
            
        quotes.textContent = citati[num];
    });

});