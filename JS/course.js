const upDate = document.querySelector(".date");
const reset = document.querySelectorAll(".reset");
const home = document.querySelector(".homeNav");
const fullDetails = document.querySelectorAll(".fullDetails");
const body = document.querySelector("#body");




const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth()+1).padStart(2,'0');
const day = String(date.getDate()).padStart(2,'0');
const fullDate = year + "-" + month + "-" + day;


window.onload = () =>{
    upDate.value = fullDate;
}

reset.forEach(element =>{
    element.addEventListener("click",()=>{
        self.location = 'course.html';
    })
})

home.addEventListener("click",()=>{
    console.log("Done");
    self.location = '../index.html';
})

fullDetails.forEach(element =>{
    element.addEventListener("click",()=>{
        self.location = '/html/details.html';
    })
})

setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}