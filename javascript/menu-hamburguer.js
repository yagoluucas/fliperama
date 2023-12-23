export default function menuHamburguer() { 
    const imgMenu = document.querySelector('.js-menu-logo')
    const imgMenuFechar = document.querySelector('.js-menu-logo-fechar')
    const barraLateral = document.querySelector('aside')

    imgMenu.addEventListener('click', () => {
        imgMenu.classList.remove('block')
        barraLateral.classList.remove('none')
        barraLateral.classList.add('fundo-menu-hamburguer')
        barraLateral.classList.remove('remove-menu')    
    })

    imgMenuFechar.addEventListener('click', () => {
        barraLateral.classList.remove('fundo-menu-hamburguer')
        barraLateral.classList.add('remove-menu')
        imgMenu.classList.add('block')
        
    })
}