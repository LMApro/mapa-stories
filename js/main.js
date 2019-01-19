const grid = document.getElementById('grid');
const clock = document.getElementById('clock');
const images = window.images;

const ONE_MINUTE_MS = 60 * 1e3;
const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
const ONE_DAY_MS = 24 * ONE_HOUR_MS;

function getImageMinHeight(image) {
    let containerWidth = grid.clientWidth;
    let nbCols = 1;
    if (containerWidth >= 481 && containerWidth <= 720) {
        nbCols = 2;
    }
    if (containerWidth >= 721 && containerWidth <= 1024) {
        nbCols = 3;
    }
    if (containerWidth >= 1025) {
        nbCols = 4;
    }

    let imageWidth = containerWidth / nbCols - 14;
    return imageWidth * image.ratio + 'px';
}

function getImages() {
    images.map(image => {
        let imgElem = document.createElement('img');
        imgElem.className = 'lozad';
        imgElem.dataset.src = `images/min/${image.filename}`;
        imgElem.style.minHeight = getImageMinHeight(image);
        let liElem = document.createElement('li');
        liElem.appendChild(imgElem);
        grid.appendChild(liElem);
    })
}

function calculateClock() {
    let now = new Date();
    let ceremony = new Date(2019, 2, 14, 18, 30, 0, 0);
    let diffDay = ceremony.getTime() - now.getTime();
    let nbDays = Math.floor(diffDay / ONE_DAY_MS);
    let diffHour = diffDay - nbDays * ONE_DAY_MS;
    let nbHours = Math.floor(diffHour / ONE_HOUR_MS);
    let diffMinute = diffHour - nbHours * ONE_HOUR_MS;
    let nbMinutes = Math.floor(diffMinute / ONE_MINUTE_MS);
    let diffSecond = diffMinute - nbMinutes * ONE_MINUTE_MS;
    let nbSeconds = Math.floor(diffSecond / 1e3);

    return {
        days: nbDays,
        hours: nbHours,
        minutes: nbMinutes,
        seconds: nbSeconds,
    }
}

function renderClock({days, hours, minutes, seconds}) {
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    clock.innerHTML = `${days} days ${hours} : ${minutes} : ${seconds}`
    
}

let {days, hours, minutes, seconds} = calculateClock();
renderClock({days, hours, minutes, seconds});
setInterval(() => {
    let {days, hours, minutes, seconds} = calculateClock();
    renderClock({days, hours, minutes, seconds});
}, 1e3) 

getImages();
const observer = lozad();
observer.observe();
new AnimOnScroll(document.getElementById('grid'), {
    minDuration: 0.4,
    maxDuration: 0.7,
    viewportFactor: 0.2
});

function initVNDA() {
    window.vnda =
        window.vnda ||
        function() {
            (window.vnda.q = window.vnda.q || []).push(arguments);
        };
    window.vnda.l = +new Date();
}
initVNDA();
function handleLoadVNDA() {
    window.vnda('create', 'Dolfin', 'auto', 'Dolfin-tracker');
    window.vnda('Dolfin-tracker.send', 'pageview');
    window.vnda(
        'Dolfin-tracker.send',
        'event',
        'Test',
        'mapa'
    );
};


