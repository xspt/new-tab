function chooseQuote(){
    const quote = document.querySelector('#quote');
    const quotes = [
       "Os professores abrem a porta, mas você deve entrar por você mesmo.",
       "Não tenha medo de tentar, tenha medo de não tentar e ver que a vida passou e você não se arriscou como deveria.",
       "E se não dar certo hoje, não era para ser. Aí tu levanta a cabeça e vai pra guerra vencer.",
       "Se tiver milhares de motivos para desistir, arranje milhões para seguir em frente!"
    ];

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
        greetings.textContent = "Boa madrugada";
    }else if(hrs <= 12){
        greetings.textContent = "Bom dia";
    }else if(hrs <= 18){
        greetings.textContent = "Boa tarde";
    }else if(hrs <= 23){
        greetings.textContent = "Boa noite";
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
