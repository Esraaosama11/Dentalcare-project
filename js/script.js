let navbar = document.querySelector('.nav');
let header = document.querySelector('.header');
menubar.onclick = () =>{
    navbar.classList.toggle('active')
}
window.onclick = () =>{
    navbar.classList.remove('active');
    
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active'); 
    }
}
let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active')
}
