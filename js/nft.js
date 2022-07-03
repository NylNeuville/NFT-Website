const light = document.querySelector('.light');
const grid = document.querySelector('.hex-grid');
const container = document.querySelector('.container');

container.addEventListener('mousemove', moveLight);

function moveLight(e) {

    // Get the value by which the page has been scolled
    const scrollY = document.documentElement.scrollTop;

    //Position the light on its Xaxis
    light.style.left = `${e.clientX}px`;

    //Position the light on its Y axis
    light.style.top = `${e.clientY + scrollY}px`;
    
}