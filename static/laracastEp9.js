Vue.component('message',{
	props : ['title','body'],
	data (){
		return {
			isVisible : true
		};
	},
	template : `<div v-show="isVisible"><div id="title">{{title}}<button @click="hid">x</button></div><div id="body">
		{{body}}
	</div><div>
				`,
	methods:{
		hid(){
			this.isVisible=false;		
		}
	}
});



var app = new Vue({
	el : "#root"

});