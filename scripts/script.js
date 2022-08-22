const isOfficeOpen = () => {
    const localHour = new Date().getUTCHours() - 3;
    return localHour >= 9 && localHour < 18;    
}

const updateOfficeStatus = () => {
    const statusElement = document.querySelector('.keep-up-facebook-status')

    if (isOfficeOpen()) {
        statusElement.innerText = 'Aberto agora';
        statusElement.classList.add('keep-up-facebook-status-open');
    } else {
        statusElement.innerText = 'Fechado';
        statusElement.classList.remove('keep-up-facebook-status-open');
    }
}

updateOfficeStatus();

/* ========= Open/Close Acting Areas ========== */
const areasItems = document.querySelectorAll('.area-item');
const areasDescription = document.querySelectorAll('.area-description');
const areas = document.querySelectorAll('.area-name');
const areasArrows = document.querySelectorAll('.area-name-arrow');

const addArrowsEventListeners = () => {
    for (let i = 0; i < areasItems.length; i++) {
        areas[i].addEventListener('click', () => {
            areasItems[i].classList.toggle('shown-item');
            areasDescription[i].classList.toggle('shown-description');
            areasArrows[i].classList.toggle('shown-arrow');
            
        })
    }
    
}


addArrowsEventListeners();
/* for (let i = 0; i < areasItems.length; i++) {
    console.log(areasItems[i], areasDescription[i], arrows[i]);
} */

