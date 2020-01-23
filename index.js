// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}
  
  // Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// Index Buttons
// let aboutButton = document.createElement("button");
// aboutButton.innerHTML = "About";
// let portfolioButton = document.createElement("button");
// portfolioButton.innerHTML = "Portfolio";
// let contactButton = document.createElement("button");
// contactButton.innerHTML = "Contact";

// About Buttons
// let resumeButton = document.createElement("button");
// resumeButton.innerHTML = "View Resume";

// Append buttons
// var about = document.getElementById("menu");
// about.appendChild(aboutButton);
// var portfolio = document.getElementById("menu");
// portfolio.appendChild(portfolioButton);
// var contact = document.getElementById("menu");
// contact.appendChild(contactButton);

// var resume = document.getElementById("about-options");
// resume.appendChild(resumeButton);
// var contactAbout = document.getElementById("about-options");
// contactAbout.appendChild(contactButton);

// Button Event Handlers
// aboutButton.addEventListener ("click", function() {
//     window.location.href = "about.html";
// });
// portfolioButton.addEventListener ("click", function() {
//     alert("Clicked portfolio!");
// });
// contactButton.addEventListener ("click", function() {
//     alert("Clicked contact!");
// });

// resumeButton.addEventListener ("click", function() {
//     window.location.href = "resume.pdf";
// });