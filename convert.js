function convert() {
  var  output = "";
  var input = "";  
  
    output.value = "";
    for (i=0; i < input.length; i++) {
     	output.value +=input[i].charCodeAt(0).toString(2) + " ";
    }
	console.log(output);
}
