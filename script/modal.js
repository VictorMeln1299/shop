const menu = document.getElementsByClassName('menu')[0];
const modalWindow = document.getElementsByClassName('modal-window')[0];
const modalContent = document.getElementsByClassName('modal-content')[0];

document.addEventListener('click', function(e) {
    if(e.target == menu) {
        modalWindow.style.display = 'flex';
        modalWindow.style.justifyContent = 'center';
        modalWindow.style.alignItems = 'center';
    }
    if(e.target == modalWindow) {
        modalWindow.style.display = 'none';
    }
})