// function to add spacing between the letters in the header
document.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;
  var headerTitle = document.querySelector('.header-title');
  var maxLetterSpacing;
  var sensibility;
  
  if(window.innerWidth>480 && window.innerWidth<=768){
    maxLetterSpacing = 0.5;
    sensibility = 9000;
  }else if(window.innerWidth>768){
    maxLetterSpacing = 0.7;
    sensibility = 4000;
  }

  var spacing = Math.min(maxLetterSpacing, scrollPos / sensibility); 
  headerTitle.style.letterSpacing = spacing + 'em';
});


// function to update the clock in header for every second
function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}


// function to display the details of project when clicked
function toggleDetails(tile) {
  tile.classList.toggle('expanded');
}


function showSkills(element) {
    const skillsContent = element.querySelector('.skills-content');
    skillsContent.style.display = 'flex';
}


function hideSkills(element) {
    const skillsContent = element.querySelector('.skills-content');
    skillsContent.style.display = 'none';
}


// calling the functions
setInterval(updateClock, 1000);
updateClock();


// function placeSVGS() {
//   fetch('assets/svgs.json')
//   .then(response => response.json())
//   .then(svgs => {
//       const container = document.body;

//       svgs.forEach(svgObj => {
//           const svgElement = document.createElement('div');
//           svgElement.innerHTML = svgObj.svg;
//           svgElement.classList.add('svg-container');
//           svgElement.style.left = `${svgObj.x}px`;
//           svgElement.style.top = `${svgObj.y}px`;
//           container.appendChild(svgElement);
//       });
//   })
//   .catch(error => console.error('Error loading SVGs:', error));
// }
