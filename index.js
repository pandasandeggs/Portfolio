///////////////// INDEX PAGE /////////////////////

// Buttons
let aboutButton = document.createElement("button");
aboutButton.innerHTML = "About";
let portfolioButton = document.createElement("button");
portfolioButton.innerHTML = "Portfolio";
let contactButton = document.createElement("button");
contactButton.innerHTML = "Contact";

// Append buttons
var about = document.getElementById("menu");
about.appendChild(aboutButton);
var portfolio = document.getElementById("menu");
portfolio.appendChild(portfolioButton);
var contact = document.getElementById("menu");
contact.appendChild(contactButton);

// Button Event Handlers
aboutButton.addEventListener ("click", function() {
    alert("Clicked about!");
});
portfolioButton.addEventListener ("click", function() {
    alert("Clicked portfolio!");
});
contactButton.addEventListener ("click", function() {
    alert("Clicked contact!");
});