let stars =document.getElementById('Stars')
let moon2 =document.getElementById('moon2')
let mountains3 =document.getElementById('mountains3')
let mountains4 =document.getElementById('mountains4')
let land5 =document.getElementById('land5')
let horse6 =document.getElementById('horse6')
let falcon7 =document.getElementById('falcon7')


window.onscroll = function(){
    let value = window.scrollY;

    // "إذا كان المستخدم لا يزال يرى أول شاشة، حرك الصور بالسرعة العالية"
    if (value <= window.innerHeight) {
        stars.style.left = value + 'px';
        moon2.style.top = value * 4 + 'px';
        mountains3.style.top = value * 2 + 'px';
        mountains4.style.top = value * 1.5 + 'px';
        land5.style.top = value + 'px';

        
    }
}



