/* função para criar um novo elemento */
function novoElemento(tagName, className) {/*nome da tag que eu quero criar e o nome da classe que eu quero aplicar esse elemento   */
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

/* função que vai criar uma barreira  */
/* função construtora */
function Barreira(reversa = false) {/* se a barreira vai ser reversa ou não */
    /* elemento é um atributo da função barreira */
    this.elemento = novoElemento('div', 'barreira')

    /* criei as duas partes da minha barreira */
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    /* se for barreira reversa primeiro eu vou aplicar o corpo e depois a borda, caso não for irei aplicar a borda e depois o corpo */
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/*TESTES 
const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy').appendChild(b.elemento) */

function ParDeBarreiras(altura, abertura,x) {/*altura da barreira, abertura de uma barreira a outra, posição da linha aonde vc quer colocar as barreiras  */
    this.elemento = novoElemento('div','par-de-Barreiras')

    /* definindo que a barreira superior é uma 
    barreira reversa */
    /* DEFININDO O PAR DE BARREIRAS */
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    /* ADICIONANDO DENTRO DA DIV O PAR-DE-BARREIRAS */
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        /* sorteando a altura da barreira superior e depois calculando a diferença 
        da altura total - o tamanho da abertura - altura da barreira superior */
        const alturaSuperior = Math.random() * (altura - abertura)/* altura da barreira menos o tamanho da abertura da barreira */
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior) 
    } 
    /* vou usar para saber onde o par de barreiras esta */
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])

    /* função para setar o x */
    this.setX = x => this.elemento.style.left = `${x}px`
        
    /* para saber a largura do meu elemento */
    this.getLargura = ()=> this.elemento.clientWidth
        
    /*setando a altura superior e inferior das barreiras  */
    this.sortearAbertura()

    this.setX(x)
}

const b = new ParDeBarreiras(700,200,400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)