//Modal
let modal = document.getElementById('simplemodal');
//Button
let modalBtn = document.getElementById('modalBtn');
//Cancel button inside the modal
let closeBtn = document.querySelector('.closeBtn');

//On clicking the button, making modal's display: block from display:none
modalBtn.addEventListener('click', function () {
    modal.style.display = "Block";
});

//On clicking the 'X' making modal's display: none again
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});

//Click anywhere outside of modal container and the display of modal will be none again.
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})