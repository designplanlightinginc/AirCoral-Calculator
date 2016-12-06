function calculateArea(fixtureVolume) {
  var height, result, str, quantity;

  //Superscript for display purposes
  str = "2";
  str = str.sup();

  //Get input values
  height = document.getElementById("height").value;
  quantity = document.getElementById("quantity").value;

  if(height > 0 && quantity > 0) {
	//Convert ft input to cm
	height = height*30.48; 

	//Calculate volume
  	result = (fixtureVolume/height)*quantity;

	//Convert result into square feet
  	result = result*3.28084;

	//Format result
	result = result.toFixed(2) + " ft"+ str +"";
  }
  else {
  	result = "Invalid height";
  }
 
  document.getElementById("demo").innerHTML = "Result: " + result;
}

function changeImage() {
    var image = document.getElementById('button');
    if (image.src.match("calculate_on")) {
        image.src = "http://i1232.photobucket.com/albums/ff373/designplan/calculate_off.png";
    } else {
        image.src = "http://i1232.photobucket.com/albums/ff373/designplan/calculate_on.png";
    }
}