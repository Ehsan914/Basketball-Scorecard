const home = document.querySelector("#home");
const away = document.querySelector("#away");
const hs1 = document.querySelector(".score1H");
const hs2 = document.querySelector(".score2H");
const hs3 = document.querySelector(".score3H");
const as1 = document.querySelector(".score1A");
const as2 = document.querySelector(".score2A");
const as3 = document.querySelector(".score3A");
const rsH = document.querySelector(".resetH");
const rsA = document.querySelector(".resetA");
const sec = document.querySelector(".sec");
const min = document.querySelector(".mint");


let homeScore = 0, awayScore = 0;

function add1H() {
    homeScore += 1;
    if (homeScore > 60) {
        homeScore = 0;
        awayScore = 0;
        away.innerHTML = `<h1>${awayScore}</h1>`;
    }
    home.innerHTML = `<h1>${homeScore}</h1>`;
    hs1.classList.add("playing");
    setTimeout(function() {
        hs1.classList.remove("playing");
    }, 100)
}

function add2H() {
    homeScore += 2;
    if (homeScore > 60) {
        homeScore = 0;
        awayScore = 0;
        away.innerHTML = `<h1>${awayScore}</h1>`;
    }
    home.innerHTML = `<h1>${homeScore}</h1>`;
    hs2.classList.add("playing");
    setTimeout(function() {
        hs2.classList.remove("playing");
    }, 100)
}

function add3H() {
    homeScore += 3;
    if (homeScore > 60) {
        homeScore = 0;
        awayScore = 0;
        away.innerHTML = `<h1>${awayScore}</h1>`;
    }
    home.innerHTML = `<h1>${homeScore}</h1>`;
    hs3.classList.add("playing");
    setTimeout(function() {
        hs3.classList.remove("playing");
    }, 100)
}

function add1A() {
    awayScore += 1;
    if (awayScore > 60) {
        homeScore = 0;
        awayScore = 0;
        home.innerHTML = `<h1>${homeScore}</h1>`;
    }
    away.innerHTML = `<h1>${awayScore}</h1>`;
    as1.classList.add("playing");
    setTimeout(function() {
        as1.classList.remove("playing");
    }, 100)
}

function add2A() {
    awayScore += 2;
    if (awayScore > 60) {
        homeScore = 0;
        awayScore = 0;
        home.innerHTML = `<h1>${homeScore}</h1>`;
    }
    away.innerHTML = `<h1>${awayScore}</h1>`;
    as2.classList.add("playing");
    setTimeout(function() {
        as2.classList.remove("playing");
    }, 100)
}

function add3A() {
    awayScore += 3;
    if (awayScore > 60) {
        homeScore = 0;
        awayScore = 0;
        home.innerHTML = `<h1>${homeScore}</h1>`;
    }
    away.innerHTML = `<h1>${awayScore}</h1>`;
    as3.classList.add("playing");
    setTimeout(function() {
        as3.classList.remove("playing");
    }, 100)
}

function resetH() {
    homeScore = 0;
    home.innerHTML = `<h1>${homeScore}</h1>`;
    rsH.classList.add("playing");
    setTimeout(function() {
        rsH.classList.remove("playing");
    }, 100)
}

function resetA() {
    awayScore = 0;
    away.innerHTML = `<h1>${awayScore}</h1>`;
    rsA.classList.add('playing');
    setTimeout(function() {
        rsA.classList.remove("playing");
    }, 100)
}

function timer() {

    let second = 0, minute = 0;
    
    const clock = setInterval(function() {
        second++;
        if (second == 60) {
            second %= 60;
            minute++; 
            min.innerHTML = `<h1>${minute}</h1>`;
        }
        if (minute == 12) {
            min.innerHTML = `<h1>0</h1>`;    
            sec.innerHTML = `<h1>0</h1>`;
            clearInterval(clock);
        }
        sec.innerHTML = `<h1>${second}</h1>`;
    }, 1000)
}

timer();