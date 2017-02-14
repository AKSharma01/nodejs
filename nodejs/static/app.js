var app =  new Vue({
	el : "#demo",

	data : {

		name : ["foobar","goobar","hoobar","Ioobar"]
		// newname : ''		
	},
	
	


	// mounted() {
	// 	console.log("Hello");

	// 	var self = this;
	// 	var i = 0;
	// 	setInterval(function () {
	// 		if (i %2==0)
	// 			self.name = 'hello there !!!!!';
	// 		else
	// 			self.name = "Back to foobar :)"
	// 		i++;
	// 		console.log("Hello");
	// 	},5000);
	// }
});

document.querySelector("#button").addEventListener('click',()=>{
	var nname = document.getElementById('newname').value;
	console.log(nname)
	app.name.push(nname);
});