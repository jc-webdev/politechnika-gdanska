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
})
let openeResMenu = document.querySelector('.burger.opener')
openeResMenu.addEventListener('click', ()=>{
    document.querySelector('.wrapper-bottom__content').style.right = '0'
})
