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