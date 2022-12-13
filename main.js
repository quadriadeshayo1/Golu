//fixed header
function scrollheader(){
    if(window.scrollY > 100){
        document.querySelector('.header').classList.add('fixed');//.header.fixed
    }else{
        document.querySelector('.header').classList.remove('fixed');
    }
}
window.addEventListener("scroll",scrollheader);

//menu show
const showmenu=(toggleId,navId)=>{
    const toggle= document.getElementById(toggleId)
    const nav= document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show'); //javascript css to display nav menu
        });
    }
};
showmenu('nav-toggle','nav-menu');

//Remove nav menu on mobile view
const navlink=document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //when we click on each nav__link we remove the show class section
}
navlink.forEach((n)=>n.addEventListener('click',linkAction));
