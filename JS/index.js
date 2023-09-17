window.onload = ()=>{
    if(document.referrer == '' && localStorage.getItem("isLogin") != "true"){
        self.location = '../html/login.html';
    }
}




const body = document.querySelector("#body");
const acc = document.querySelector(".account");
const logout = document.querySelector(".logout");
const main = document.querySelector(".main");
const backImg = ['../images/background1.jpg','../images/background2.jpg','../images/background3.jpg','../images/background4.jpg','../images/background5.jpg','../images/background6.jpg','../images/background7.jpg','../images/background8.jpg','../images/background9.jpg','../images/background10.jpg'];
const batches = document.querySelectorAll(".batch");
const addBatch = document.querySelector(".addBatch");
const addBatchPage = document.querySelector("#addBatches");
const cancelAddB = document.querySelector(".addBatchCancel");
const createBatch = document.querySelector("#addBatchBtn");
const batchNo = document.querySelector("#number");
const section = document.querySelector("#addBatchSec");
const batchBox = document.querySelector(".batchCon");
const delTitleBot = document.querySelector(".delTitleBot");
const delBtn = document.querySelector("#delCon");
const batchDel = document.querySelectorAll(".batchOpt");
const delCancel = document.querySelector(".delCancel");
const ConfirmDel = document.querySelector(".delConf");
const batchInf = document.querySelectorAll(".batInf");

acc.addEventListener("click",()=>{
    logout.classList.toggle("active");
})
main.addEventListener("click",()=>{
    logout.classList.remove("active");
})
logout.addEventListener("click",()=>{
    self.location = '../html/login.html';
    localStorage.removeItem("isLogin");
})

addBatch.addEventListener("click",()=>{
    addBatchPage.classList.toggle("active");
})
cancelAddB.addEventListener("click",()=>{
    addBatchPage.classList.remove("active");
})

let batchCount = 1;

createBatch.addEventListener("click",()=>{
    if(batchNo.value != '' && section.value != ''){
        batchCount++;
        let batN = document.createElement("div");
        batN.classList.add("batchNo");
        batN.innerText = batchNo.value;
        let batS = document.createElement("div");
        batS.classList.add("section");
        batS.innerText = "Section - "+section.value;
        let del = document.createElement("div");
        del.classList.add("batchOpt");
        let icon = document.createElement("i");
        icon.classList.add("fa-solid","fa-trash");
        del.appendChild(icon);
        let mainbatch = document.createElement("div");
        mainbatch.classList.add("batch","batch2");
        mainbatch.appendChild(batN);
        mainbatch.appendChild(batS);
        mainbatch.appendChild(del);
        batchBox.insertBefore(mainbatch,batchBox.firstChild);
        addBatchPage.classList.remove("active");
        let x = Math.round(Math.random()*9);
        mainbatch.style.backgroundImage = 'url('+backImg[x]+')';
        batchNo.value = "";
        section.value = "";
    }else{
        // console.log("ok0");
    }
})

let delEle;

batchDel.forEach(element => {
    element.addEventListener("click",()=>{
        delBtn.classList.add("active");
        delEle = element.parentElement;
    })
});

delCancel.addEventListener("click",()=>{
    delBtn.classList.remove("active");
})

ConfirmDel.addEventListener("click",()=>{
    delEle.remove();
    delBtn.classList.remove("active");
})


document.addEventListener("DOMContentLoaded",()=>{
    batches.forEach(element =>{
        let x = Math.round(Math.random()*9);
        element.style.backgroundImage = 'url('+backImg[x]+')';
    })
})

batchInf.forEach(element =>{
    element.addEventListener("click",()=>{
        self.location = '/html/batch.html';
        localStorage.setItem("batch",element.children[0].innerText);
        localStorage.setItem("section",element.children[1].children[0].innerText);
    })
})

setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}