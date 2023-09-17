const sub = document.querySelector("#loginBtn");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const login = document.querySelector(".login");
const preloader = document.querySelector(".preloader");
const body = document.querySelector("#body");


setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}


sub.addEventListener("click",()=>{
    if((email.value == "2211081038" && pass.value == "1038") || (email.value == "2211081055" && pass.value == "1055") || (email.value == "2211081056" && pass.value == "1056") || (email.value == "2211081060" && pass.value == "1060")){
        localStorage.setItem("isLogin",true);
        login.action = "../index.html";
    }
});