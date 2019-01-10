const inputs = document.querySelectorAll('input'); //obtaining all the inputs of the 
												//documents as a NodeList
var clicked=false; //declaration of 'clicked' variable which is flag of whether an input range 
					//is clicked (therefore the user is obviously dragging the range)
var image = document.querySelector("img"); //obtaining the img element

//START------------------------------------------------------------
//Function that updates the image by changing the variables in the :root elements of the page
//which are declared in the style.css file
function updateImage(e){
	if (clicked === true || (e.type==="change")){ //Checking if 'clicked' is true or if the
												//type of the event is 'change' (means that a change
												//happened). The second part of the OR is true
												//only when the user selects the input of color.
												//This is because for color input the button is pressed,
												//then a menu for color pops up and then the user selects
												//a color and presses OK. After that a change happens.

		var suffix = this.dataset.units || ''; //dataset object is the object which contains all the
												// 'data-[something]' attributes that were created by the
												// programmer into the HTML file. 
												//We created a 'data-units' attribute for each input element
												//which holds the units in which the input is measured.
												//Therefore, in the 'suffix' variable we store the suffix
												//which must be added in the end of every value which we take
												//from the input. (i.e a range input is set to 15 by the user.
												// We must add 'px' in the end so that the CSS 
												//compiler knows the units).
		document.documentElement.style.setProperty(`--${this.name}`,`${e.target.value}${suffix}`);
		//In the above, we change the style of the document element by changing the values of some
		//of its elements using setProperty() method. This is like:
		// <html style="--padding:50px">
		//		......
		//</html>
		//So it can change the value of the variable --padding to whatever value was specified by
		//the user in the input.
	}
}

//END--------------------------------------------------------------

//Below are all the eventListeners for each input element in the page
inputs.forEach(input=>{
	input.addEventListener('mousedown',function(){ //when the user clicks and holds on an input elements
													// the 'clicked' variable becomes true and when
													//the updateImage() is called, the if statement is true
	clicked=true;
	})
	input.addEventListener('mouseup',function(){ //When the user stops holding the click, the 'clicked' 
												//variable becomes false (so that it stops calling the
												//updateImage()).
	clicked=false;
	})
	input.addEventListener('change',updateImage);//When a change happens the updateImage() is called
												//and since the e.type === 'change', the if statement is true.
												//This happens only when the user changes the color input.

	input.addEventListener('mousemove',updateImage);//When the user in moving his mouse over the input element
													//the updateImage() is called. But the image gets updated
													//ONLY when the 'clicked' variable is true. That is only
													//when the user is clicking on the range bar and scrolling
													//back and forth.
													//So the image does not get updated only when the user scrolls
													//and lets the click, but it get updated real time whenever he
													//scrolls the range.
})