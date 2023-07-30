 //Accessing element first here
 const inputbox= document.getElementById("input-box" );
 const listconatiner = document.getElementById("list-container");
 

 /* Adding text function "addtask" in this function , if inputbox is empty its gives message 
  You must write some thing here.." else if you add some text it will be added and show in listcontainer li,
  and a cross icon to delete input text*/
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
/* in this click function whenever we clic in the container where we have store all the task ,
   we can do checked/uncheked by click on task */
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
  /* in this function we save the task which will be added  */
  function savefiles(){
  	localStorage.setItem("data",listconatiner.innerHTML);
  }
  /* To display  the data which we have saved after refreshing the browsers*/
  function showlist(){
  	listconatiner.innerHTML=localStorage.getItem("data");
  }
  showlist();