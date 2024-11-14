//your JS code here. If required.
const ageInput = document.querySelector("#age");
const nameInput = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener('click', promiseResolve);

function promiseResolve() {
	let name = nameInput.value
	let age = ageInput.value;
let resolved = new Promise((resolve, reject)=>{
	setTimeout(()=>{
      if(age>=18){
		  resolve(`Welcome, ${name}. You can vote.`);
	  }else{
		  reject(`Oh sorry ${name}. You aren't old enough.`);
	  }
	}, 4000)
})	

	resolved.then((message)=>{
		alert(message);
	}).catch((message)=>{
		alert(message);
	})
}