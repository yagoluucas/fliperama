export const eventos = ['click', 'touchstart']
export function toolTip(){
    const tagTooltip = document.querySelectorAll('[data-tooltip]')
    const imgFliperama = document.querySelector('[data-tooltip="fliperama"]')

    function createToolTip(div){
        const createDiv = document.createElement('div')
        const textoToolTip = div.getAttribute('aria-label')
        createDiv.classList.add('tooltip')
        createDiv.innerText = textoToolTip
        return createDiv
    }

    function startToolTip(event){
        event.stopPropagation()
        const tooltip = createToolTip(this)
        document.body.appendChild(tooltip)
        tooltip.style.top = event.pageY + 'px'
        tooltip.style.left = event.pageX + 'px'
        removeToolTip.element = tooltip
        tollTipMove.element = tooltip
        eventos.forEach(evento => imgFliperama.addEventListener(evento, initGame)) //eventos para iniciar o jogo

    }

    //função para iniciar o jogo
    function initGame() {       
        removeToolTip.element.remove()
    }

    //objeto que remove a tooltip (deixado do lado de fora )
    const removeToolTip = {
        handleEvent() {
            this.element.remove()
        }
    }

    //objeto para tooltip seguir o cursor
    const tollTipMove = {
        handleEvent(event) {
            this.element.style.top = event.pageY + 15 + 'px'
            this.element.style.left = event.pageX + 15 + 'px'
        }
    }

    //eventos
    tagTooltip.forEach((item) => {
        item.addEventListener('mouseover', startToolTip)
        item.addEventListener('mouseleave', removeToolTip)
        item.addEventListener('mousemove', tollTipMove)
    })

}

