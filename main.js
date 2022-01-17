
const popup = document.getElementById('popup');
const close = document.getElementById('close');
let open  = document.getElementById('open1');
let open2  = document.getElementById('open2');
let open3  = document.getElementById('open3');
let open4  = document.getElementById('open4');



open.addEventListener('click', () => {
    popup.classList.add('show')
    
})

close.addEventListener('click', () => {
    popup.classList.remove('show')

    // body.style.overflow = "hidden";
})

open2.addEventListener('click', () => {
    popup.classList.add('show')
    
})
open3.addEventListener('click', () => {
    popup.classList.add('show')
    
})
open4.addEventListener('click', () => {
    popup.classList.add('show')
    
})


window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == popup){
        popup.classList.remove('show')
    }
    
}

// ENABLE AND DISABLE BODY SCROLL WHEN MODAL ACTIVE

