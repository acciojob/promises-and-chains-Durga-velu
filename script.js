//your JS code here. If required.
let Fname = document.getElementById("name");
let age = document.getElementById("age");
let btn = document.getElementById("btn");


btn.addEventListener("click", function(event) {
    event.preventDefault(); 
	
let promise =new Promise((resolve,reject)=>{

	setTimeout(()=>{
		if( Fname.value !== "" && age.value !== ""){
			 if(parseInt(age.value)>=18){
				 resolve(`Welcome ${Fname.value}, You can vote`);
			 }
			else{
				reject(`Oh sorry ${Fname.value}. You aren't old enough`)
			}
		}
		else{
			reject(`Please enter valid details.`)
		}
	},4000);
});

promise.then((message)=>{

	alert(message);
}).catch((error)=>{
	alert (error);
});

});