var breedteRechthoek = "Wat is de breedte van je rechthoek?"
var lengteRechthoek = "wat is de lengte van je rechthoek?"


function surfaceRectangle(){
alert(prompt(breedteRechthoek) * prompt(lengteRechthoek));
}

function perimeterRectangle(){
alert( (parseInt(prompt(breedteRechthoek)) + parseInt(prompt(lengteRechthoek))) *2);
}
