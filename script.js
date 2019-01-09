const inputs = document.querySelectorAll('input');
var clicked=false;

function updateImage(e){
	if (clicked === true){
	//	console.log(e);
		console.log(e);
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
	input.addEventListener('click',updateImage)
})