//your JS code here. If required.
let Fname=document.getElementById("name")
let age=document.getElementById("age")

let promise =new promise((resolve,reject)=>{

	setTimeout(()=>{
		resolve(if( Fname.value !== "" && age.value !== ""){
			 if(age>=18){
				 `Welcome ${Fname.vale}, You can vote`
			 }
			else{
				`Oh sorry ${Fname.value}. You aren't old enough`
			}
		}
		else{
			`Please enter valid details.`
		})
	})
},4000)

promise.then((resolve)=>{

	alert(resolve)
}).catch((reject)=>{
	alert reject
})