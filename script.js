function chooseQuote(){
    const quote = document.querySelector('#quote');
    const quotes = ["Em briga de saci cada chute é voadora.", "Em reino de cegos, quem enxerga é rei.", "Quem cedo madruga passa o dia com sono.", "Se o curupira fizer um moonwalk para que lado ele vai?"];

    selected = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = selected;
}

function displayClock(){
    const time = document.querySelector('#time');
    const date = document.querySelector('#date');
    const greetings = document.querySelector('#greetings');
    let dateObj = new Date();

    let hrs = dateObj.getHours();
    let min = dateObj.getMinutes();
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    if(hrs <= 4){
        greetings.textContent = "Boa madrugada, xspt!";
    }else if(hrs <= 12){
        greetings.textContent = "Bom dia, xspt!";
    }else if(hrs <= 18){
        greetings.textContent = "Boa tarde, xspt!";
    }else if(hrs <= 23){
        greetings.textContent = "Boa noite, xspt!";
    }else{
        //ta;
    }

    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(min < 10){
        min = "0" + min;
    }
    
    if(day < 10){
        day = "0" + day;
    }
    if(month < 10){
        month = "0" + month;
    }

    time.textContent = hrs + ':' + min;
    date.textContent = day + '/' + month + '/' + year;
}

if(window.addEventListener){
    window.addEventListener('load', displayClock, false);
    window.addEventListener('load', chooseQuote, false);
}

setInterval(displayClock, 1000);