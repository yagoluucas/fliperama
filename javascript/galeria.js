export function galeria() {
    const proximo = document.querySelector('.js-proximo')
    const anterior = document.querySelector('.js-anterior')

    // automaticamente quando ele entra no loop ele remove o block de todas as imagens
    // arrumar depois assim como os estilos das setas
    
    proximo.addEventListener('click', () => {
            const imagemAparecendo = document.querySelector('.image-galery')
            if(imagemAparecendo.getAttribute('data-galeria') != 'last-image') {
                imagemAparecendo.classList.remove('image-galery')
                imagemAparecendo.classList.add('none')
                imagemAparecendo.nextElementSibling.classList.add('image-galery')
                imagemAparecendo.nextElementSibling.classList.remove('none')
            }
})

    anterior.addEventListener('click', () => {
        const imagemAparecendo = document.querySelector('.image-galery')
        if(imagemAparecendo.getAttribute('data-galeria') != 'first-image') {
            imagemAparecendo.previousElementSibling.classList.add('image-galery')
            imagemAparecendo.previousElementSibling.classList.remove('none')
            imagemAparecendo.classList.add('none')
            imagemAparecendo.classList.remove('image-galery')
        }
    })
}