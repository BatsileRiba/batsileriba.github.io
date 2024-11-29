
function colorizeText(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return; 

  const words = element.innerHTML.split(" ");
  const colors = [
    "#FF5733", 
    "#28A745", 
    "#FFC107", 
    "#FF69B4", 
    "#17A2B8" 
    
    
  ];
  
  let currentColorIndex = 0;

  function updateColors() {
    element.innerHTML = words.map((word, index) => {
      const color = colors[(index + currentColorIndex) % colors.length];
      return `<span style="color: ${color};">${word}</span>`;
    }).join(" ");
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  updateColors();
  
  setInterval(updateColors, 3000);
}

window.onload = function() {
  colorizeText("toptext");  
  colorizeText("lefttext"); 
  colorizeText("righttext");
  colorizeText("bottomtext");
};

let slideIndex = 0;
    showSlide(slideIndex);

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n - 1);
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName("slide");
        

        if (n >= slides.length) { slideIndex = 0; } // Wraps around to the first slide
        if (n < 0) { slideIndex = slides.length - 1; } // Wraps around to the last slide

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hides all slides
        }

        

        slides[slideIndex].style.display = "block"; // Displays the current slide
        
    }

 