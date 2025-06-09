const $stock = document.getElementById('stock')
const $sucursales = document.getElementById('sucursales')
const $clientes = document.getElementById('clientes')
const $ventas = document.getElementById('ventas')
const $stats = document.getElementById('estadisticas')

const slider = document.getElementById('slider')
const $prev = document.getElementById('slider-prev')
const $next = document.getElementById('slider-next')
const sliderElements = document.querySelectorAll('.tarjeta');
let slideCounter = 0;
let isInTransition = false;
let cont = 0;
let timer;

const $minInput = document.getElementById("minInput");
const $maxInput = document.getElementById("maxInput");
const $displayMin = document.getElementById("displayMin");
const $displayMax = document.getElementById("displayMax");
let minGap = 0;
let rangeMaxValue = $maxInput.max;

const rootStyles = document.documentElement.style;


const removerSeleccionado = () => {
    const seleccionado = document.querySelector('.opcion--seleccionada')
    seleccionado.classList.remove('opcion--seleccionada')
}

const incrementarNumero=()=>{
    cont++;
    if(Number($stock.getAttribute("data-value")>=cont))
        $stock.innerHTML=`${cont}`
    if(Number($sucursales.getAttribute("data-value")>=cont))
        $sucursales.innerHTML=`${cont}+`
    if(Number($clientes.getAttribute("data-value")>=cont))
        $clientes.innerHTML=`${cont}`
    if(Number($ventas.getAttribute("data-value")>=cont))
        $ventas.innerHTML=`${cont}+`
    if(Number($stock.getAttribute("data-value")<cont) && Number($sucursales.getAttribute("data-value")<cont) && Number($clientes.getAttribute("data-value")<cont) && Number($ventas.getAttribute("data-value")<cont)){
        clearInterval(timer)
    }
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.30
};

const observadorCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target==$stats)
                timer = setInterval(incrementarNumero,10)
            observer.unobserve(entry.target)
        }
    });
};

const observador = new IntersectionObserver(observadorCallback, options);
observador.observe($stats);


const DIRECCION = { RIGHT: 'RIGHT', LEFT: 'LEFT'};

const getTransformValue = () => Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reordenarSlide = () => {
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'none');
    let gapValue = parseFloat(getComputedStyle(slider).getPropertyValue('gap'))
    if (slideCounter === sliderElements.length - 5) {
        slider.appendChild(slider.firstElementChild);
        rootStyles.setProperty('--slide-transform', `${transformValue + sliderElements[slideCounter].scrollWidth + gapValue}px`);
        slideCounter--;
    } else if (slideCounter === 0) {
        slider.prepend(slider.lastElementChild);
        rootStyles.setProperty('--slide-transform', `${transformValue - sliderElements[slideCounter].scrollWidth - gapValue}px`);
        slideCounter++;
    }
    isInTransition = false;
};

const moverSlide = direction => {
    if (isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform .3s');
    let gapValue = parseFloat(getComputedStyle(slider).getPropertyValue('gap'))
    isInTransition = true;
    if (direction === DIRECCION.LEFT) {
        rootStyles.setProperty('--slide-transform', `${transformValue + sliderElements[slideCounter].scrollWidth + gapValue}px`);
        slideCounter--;
    } else if (direction === DIRECCION.RIGHT) {
        rootStyles.setProperty('--slide-transform',`${transformValue - sliderElements[slideCounter].scrollWidth - gapValue}px`);
        slideCounter++;
    }
};


const actualizarMinimo = () => {
    if(parseInt($maxInput.value) - parseInt($minInput.value) <= minGap)
        $minInput.value = parseInt($maxInput.value) - minGap;
    $displayMin.textContent = "$" + $minInput.value;
    actualizarBarra();
}

const actualizarMaximo = () => {
    if(parseInt($maxInput.value) - parseInt($minInput.value) <= minGap)
        $maxInput.value = parseInt($minInput.value) + minGap;
    $displayMax.textContent = "$" + $maxInput.value;
    actualizarBarra();
}

const actualizarBarra = () => {
    const min = ($minInput.value / rangeMaxValue) * 100;
    const max = ($maxInput.value / rangeMaxValue) * 100;
    rootStyles.setProperty('--minRange',  min + '%');
    rootStyles.setProperty('--maxRange',  max + '%');
}



document.addEventListener('click', (e) => {
    if(e.target.classList.contains('opcion')) {
        if(e.target.classList.contains('opcion--seleccionada')) return
        removerSeleccionado()
        e.target.classList.add('opcion--seleccionada')
    }
    if(e.target == $prev){
        moverSlide(DIRECCION.LEFT)
    }
    if(e.target == $next){
        moverSlide(DIRECCION.RIGHT)
    }
})

document.addEventListener("input", (e)=>{
    if(e.target == $minInput)
        actualizarMinimo();
    else if(e.target == $maxInput)
        actualizarMaximo();
})

window.addEventListener('resize', () => {
    let gapValue = parseFloat(getComputedStyle(slider).getPropertyValue('gap'))
    rootStyles.setProperty('--slide-transform', `${0 - sliderElements[slideCounter].scrollWidth - gapValue}px`);
    reordenarSlide();
});

slider.addEventListener('transitionend', reordenarSlide);

reordenarSlide();
actualizarMinimo();
actualizarMaximo();
