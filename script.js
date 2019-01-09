const inputs = document.querySelectorAll('input');
var clicked=false;
var image = document.querySelector("img");
function updateImage(e){
	if (clicked === true || (e.type==="change")){
		var suffix = this.dataset.units || '';
		document.documentElement.style.setProperty(`--${this.name}`,`${e.target.value}${suffix}`);
		//console.log(`--${this.name}, ${e.target.value}${suffix}`);
	}
}
inputs.forEach(input=>{
	input.addEventListener('mousedown',function(){
	clicked=true;
	})
	input.addEventListener('mouseup',function(){
	clicked=false;
	})
	input.addEventListener('change',updateImage);
	input.addEventListener('mousemove',updateImage);
})