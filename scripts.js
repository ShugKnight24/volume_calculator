
function calcVolume(){
var volume;
var radius = document.getElementById("userRadius").value;
// If the user enters a positive number
  if (radius >= 0){
// volume of a sphere is V = (4/3) Math.PI r^3 or Math.pow (base, exponent)
  volume = (4/3)*Math.PI*Math.pow(radius, 3);
  volume = volume.toFixed(2);

    document.getElementById("volumeResult").value = volume;
// Can't have a negative radius
  } else if (radius < 0) {
    alert("Please enter a positive number for the value of the radius.")
// If the user doesn't enter a number at all
  } else {
    alert("You must enter a positive number in order for te volume calculator to run.")
  }
}
