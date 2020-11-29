let hasChildren = document.querySelectorAll('.has-children')
let drop
hasChildren.forEach((e)=>{
    e.addEventListener('click', ()=>{
    e.querySelector('.drop-down').classList.toggle('open-drop')
    })
})

let closeResMenu = document.querySelector('.burger.closer')
closeResMenu.addEventListener('click', ()=>{
    document.querySelector('.wrapper-bottom__content').style.right = '-100%'
    document.querySelector('body').style.overflow = ''
})
let openeResMenu = document.querySelector('.burger.opener')
openeResMenu.addEventListener('click', ()=>{
    document.querySelector('.wrapper-bottom__content').style.right = '0'
    document.querySelector('body').style.overflow = 'hidden'

})
let dimmer = document.querySelector('.dimmer')
let modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', ()=>{
    let modalBoxContact = document.querySelector('.modal-box-contact')
    modalBoxContact.style.opacity = '0';
    dimmer.style.opacity = '0';
    setTimeout(()=>{
        modal.style.display = 'none'
    },300);

})

const openModal = document.querySelector('.open-modal')
openModal.addEventListener('click', ()=>{
    let modalBoxContact = document.querySelector('.modal-box-contact')
    var opacity = 0; 
    modal.style.display = 'flex'
    var intervalID = setInterval(function() { 
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            modalBoxContact.style.opacity = opacity; 
            dimmer.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 20); 
})
