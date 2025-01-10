let clear_btn = document.querySelector(".clear-btn");
let chartDiv = document.querySelector(".chart-shade");
let messageInput = document.querySelector(".user-message");
let user1=document.querySelector(".user-1");
let user2=document.querySelector(".user-2");


let currentUser="User1";

function user1Click(){
  currentUser=user1.innerText;
  user1.classList.add("toggle-btn");
  user2.classList.remove("toggle-btn");
}

function user2Click(){
  currentUser=user2.innerText;
  user2.classList.add("toggle-btn");
  user1.classList.remove("toggle-btn");
}


function handleClearChart() {
  clear_btn.classList.remove("clear-btn-hide");
}

function clearChartClick() {
  chartDiv.innerHTML = "";
  clear_btn.classList.add("clear-btn-hide");
}

function handleSendClick() {
  
  let currentMessage = messageInput.value;
  
  if(currentMessage!=""){
  let  currentDate = new Date();
  let hours = currentDate.getHours();    
  let minutes = currentDate.getMinutes();

  let eachChartDivShade=document.createElement("div");
  eachChartDivShade.classList.add("message-div-shade");

  let eachChartDiv=document.createElement("div");
  eachChartDiv.classList.add("message-div");


  let eachName=document.createElement("p");
  eachName.innerText=currentUser;
  eachName.classList.add("messager-name");
  
  let eachMessage=document.createElement("p");
  eachMessage.innerText=`${currentMessage}`;
  eachMessage.classList.add("message");
  
  let eachCurrentTime=document.createElement("p");
  eachCurrentTime.innerText=`${hours}:${minutes}`;
  eachCurrentTime.classList.add("time");

  eachChartDiv.appendChild(eachName);
  eachChartDiv.appendChild(eachMessage);
  eachChartDiv.appendChild(eachCurrentTime);

  eachChartDivShade.appendChild(eachChartDiv);
  chartDiv.appendChild(eachChartDivShade);
  messageInput.value="";
  }
}
