

let coinIcon = document.querySelector("#coin-icon");
let heartIcon = document.querySelector("#heart-icon");
let history = document.querySelector("#history");
let heartIconnum = 0;
let coinIconnum = 100;

let heartButton = document.querySelectorAll("#heart-button");
let coinButton = document.querySelector("#heart-button");
heartButton.forEach(element => {
  element.addEventListener('click',function(){
    heartIconnum++;
    heartIcon.innerHTML=heartIconnum;
  });
});




// coinButton.addEventListener('click',copyTextToClipboard);


let btnCopy = document.querySelectorAll("#btn-copy");
let btnCall = document.querySelectorAll("#btn-call");

function callClick(serviceName,serviceNumber){
  let serviceNamevar = document.querySelector(`#${serviceName}`);
  let serviceNumbervar = document.querySelector(`#${serviceNumber}`);
  if(coinIconnum <20){
    alert("You do not have sufficient money to call, please recharge.");
  }
  else if(coinIconnum>=20){
    alert(`Dialing ${serviceNumbervar.innerHTML} means you are calling the ${serviceNamevar.innerHTML} number`);
    coinIconnum = coinIconnum-20;
    console.log(coinIconnum);
    coinIcon.innerHTML = coinIconnum;

    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h11 = document.createElement("h1");
    let div3 = document.createElement("div");
    
    h1.innerHTML = serviceNamevar.innerHTML;
    h2.innerHTML = serviceNumbervar.innerHTML;
    div2.appendChild(h1)
    div2.appendChild(h2)
    let time = new Date();
    let currentTime = time.toLocaleTimeString();
    
    h11.innerHTML = currentTime;
    div3.appendChild(h11);

    div.appendChild(div2);
    div.appendChild(div3);
    
  
    
    div.className = "2xl:flex 2xl:items-center 2xl:justify-between xl:flex xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between flex-col items-center justify-between";
    h1.className = "font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-[5px]";
    h11.className = "2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-[5px]";
    h2.className = "2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-[5px]";
    // h1.style.fontSize = '25px'
    history.appendChild(div);
    

    
    
  }
}


  

let deleteClear = document.querySelector("#delete-clear");
deleteClear.addEventListener('click',function(){
  console.log("delte");
  history.innerHTML = " ";
});

let copyTextA = document.querySelector("#copy-text");
let copyTextval = 0;

async function copyText(text){
  let textAll = document.querySelector(`#${text}`).innerHTML;
  try{
    
    await navigator.clipboard.writeText(textAll);
    alert(`Number = ${textAll} Copied`);
    copyTextval++;
    copyTextA.innerHTML = copyTextval;

  }catch(err){
    alert(err);
  }
  
  
}


