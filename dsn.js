 const inputbox= document.getElementById("input-box" );
 const listconatiner = document.getElementById("list-container");
 function addtask() {
 	if (inputbox.value ==='') {
 		alert("You must write some thing here..");
 	}
 	else{
 		let li=document.createElement("li");
 		li.innerHTML=inputbox.value;
 		listconatiner.appendChild(li);
 		let span = document.createElement("span");
 		span.innerHTML="\u00d7";
 		li.appendChild(span);
 	}
 	inputbox.value="";
 	savefiles();
 } 
  listconatiner.addEventListener("click",function(e){
  	if (e.target.tagName === "LI") {
  		e.target.classList.toggle("checked");
  		savefiles();
  	}
  	else if(e.target.tagName==="SPAN"){
  		e.target.parentElement.remove();
  		savefiles();
  	}
  },false);
  function savefiles(){
  	localStorage.setItem("data",listconatiner.innerHTML);
  }
  function showlist(){
  	listconatiner.innerHTML=localStorage.getItem("data");
  }
  showlist();