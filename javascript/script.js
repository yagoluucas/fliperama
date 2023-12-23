import menuHamburguer from './menu-hamburguer.js'
import animacaoScroll from './animacao-scroll.js'
import {toolTip, eventos}  from './tooltip.js'
import {galeria} from './galeria.js'
galeria()
toolTip()
menuHamburguer()
animacaoScroll()

function animacaoBotao() {
    const botao = document.querySelectorAll('[data-btn]')

    botao.forEach((botao) => {
        botao.addEventListener('mouseover', botaoOn)
        botao.addEventListener('mouseleave', botaoOff)
    })

    function botaoOn(event) {
        this.classList.remove('nothover')
        this.classList.add('hover')
    }

    function botaoOff(event) {
        this.classList.add('nothover')
    }

}

animacaoBotao()

function animacaoNave() {
    const botao_nave = document.querySelector('.botao_nave')
    const nave_movel = document.querySelector('.animacao_nave_movel')

    function animationNave(event){
        nave_movel.classList.add('animacao_botao')
    }

    function naveOn(event){
        nave_movel.classList.add('animacao_nave')
    }

    function naveOff(event){
        nave_movel.classList.remove('animacao_nave')
    }

    botao_nave.addEventListener('mouseout', naveOff)

    //eventos é uma variavel do arquivo tooltip.js
    eventos.forEach(evento => botao_nave.addEventListener(evento, animationNave))

    botao_nave.addEventListener('mouseover', naveOn)
}

animacaoNave()
