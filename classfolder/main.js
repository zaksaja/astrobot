document.addEventListener('DOMContentLoaded', function(){
	
	let el = document.querySelector("#bg-change");

	el.addEventListener('click', function(){
		/*code written here will be to change the background once u click it lol*/

		let r = Math.floor(Math.random()*255+50);
		let g = Math.floor(Math.random()*255+50);
		let b = Math.floor(Math.random()*255+50);
		let a = Math.floor(Math.random()*255+50);
		let c = 'rgb(' + r + ',' + g +',' + b+')';

		document.body.style.background = c;


	})
	console.log(el);

	let ar = ["mischevious", "soft", "sultry", "fierce", "loyal", "enthusiastic" , "realistic", "silly", "unique", "childlike", "energetic", "dedicated" , "clever",
	"tenatious", "resilient", "callous", "determined" , "devious", "rejuvinating", "refreshing", "popular"]; 

	/*filling out the form and handling it below*/

	let btn = document.querySelector("button");
	btn.addEventListener ("click", function(){
		/*read the shit you put into each of the elements*/
		
		let n = ar [Math.floor(Math.random()*ar.length -1)];
		let v = ar [Math.floor(Math.random()*ar.length -1)];
		let a = ar [Math.floor(Math.random()*ar.length -1)];
		let s = document.querySelector("#desc1").value;
		let m = document.querySelector("#desc2").value;
		let r = document.querySelector("#desc3").value;

		let blank1 = document.querySelector("#blank1");
		let blank2 = document.querySelector("#blank2");
		let blank3 = document.querySelector("#blank3");

		let sun = document.querySelector("#sun");
		let moon = document.querySelector("#moon");
		let rising = document.querySelector("#rising");

		blank1.innerHTML = n;
		blank2.innerHTML = v;
		blank3.innerHTML = a;

		sun.innerHTML = s;
		moon.innerHTML = m;
		rising.innerHTML = r;

		

		console.log(n,v,a);
		console.log(s,m,r);
	})
})