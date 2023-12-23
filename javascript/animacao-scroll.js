export default function animacaoScroll() {
    const animacaoEsquerda = document.querySelectorAll('[data-animation-left]')
    const animacaoDireita = document.querySelectorAll('[data-animation-right]')
    const animacaoTopo = document.querySelectorAll('[data-animation-top]')
    const topo = window.innerHeight * 0.8

    window.addEventListener('scroll', function(){    
        
        function animacaoLeft() {
            animacaoEsquerda.forEach((div) => {
                const topoDiv = div.getBoundingClientRect().top - topo
                
                if(topoDiv < 0) {
                    div.classList.remove('opacidade-zero')
                    div.classList.add('animation-left')
                }
            });
        }

        animacaoLeft()

        function animacaoRight() {
            animacaoDireita.forEach(function(div) {
                const topoDiv = div.getBoundingClientRect().top - topo

                if(topoDiv < 0) {
                    div.classList.remove('opacidade-zero')
                    div.classList.add('animation-right')
                }
            })
        }

        animacaoRight()

        function animacaoTop() {
            animacaoTopo.forEach(function(div){
                const topoDiv = div.getBoundingClientRect().top - topo
                if(topoDiv < 0) {
                    div.classList.remove('opacidade-zero')
                    div.classList.add('animation-topo')
                }
            })
        }

        animacaoTop()
    
    })
}