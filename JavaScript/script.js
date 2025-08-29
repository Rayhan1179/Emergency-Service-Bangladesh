

let coinIcon = document.querySelector("#coin-icon");
let heartIcon = document.querySelector("#heart-icon");
let history = document.querySelector("#history");
let heartIconnum = 0;
let coinIconnum = 100;

let heartButton = document.querySelector("#heart-button");
let coinButton = document.querySelector("#heart-button");
navigator.clipboard.writeText()
heartButton.addEventListener('click',()=>{
    heartIconnum++;
    heartIcon.innerHTML=heartIconnum;
});



// coinButton.addEventListener('click',copyTextToClipboard);


let btnCopy = document.querySelector("#btn-copy");
let btnCall = document.querySelector("#btn-call");

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
    div.style.display = 'flex';
    div.style.alignItems ='center';
    div.style.justifyContent = 'space-between';
    h1.className = " text-xl font-bold";
    h11.className = " text-xl ";
    h2.className = " text-xl ";
    // h1.style.fontSize = '25px'
    history.appendChild(div);
    

    
    
  }
}

let deleteClear = document.querySelector("#delete-clear");
deleteClear.addEventListener('click',function(){
  console.log("delte");
  history.innerHTML = " ";
});

async function copyText(text){
  let textAll = document.querySelector(`#${text}`).innerHTML;
  try{
    
    await navigator.clipboard.writeText(textAll);
    alert(`Number = ${textAll} Copied`);

  }catch(err){
    alert(err);
  }
  
  
}


// btnCall.addEventListener('click',()=>{
//   if(coinIconnum <20){
//     alert("You do not have sufficient money to call, please recharge.");
//   }
//   else if(coinIconnum>=20){
//     alert("Dialing 999 means you are calling the national emergency number");
//     coinIconnum = coinIconnum-20;
//     console.log(coinIconnum);
//     coinIcon.innerHTML = coinIconnum;
    
//   }
// });