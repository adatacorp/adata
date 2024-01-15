
const headerText = "A DATA TECH";
const headerElement = document.getElementById("home-company-name");
let currentIndex = 0;
let isDeleting = false;

function typeText() {
    if (isDeleting) {
        headerElement.textContent = headerText.substring(0, currentIndex - 1);
        currentIndex--;
    } else {
        headerElement.textContent = headerText.substring(0, currentIndex + 1);
        currentIndex++;
    }

    if (currentIndex > headerText.length) {
        isDeleting = true;
    }

    if (currentIndex === 0) {
        isDeleting = false;
    }
}

const typingInterval = setInterval(typeText, 500);

document.addEventListener("DOMContentLoaded", function() {
const elementsToAnimate = document.querySelectorAll(".animate__animated");
elementsToAnimate.forEach(function(element) {
    element.classList.add("animate__animated", "animate__fadeIn");
});


const containerBanner = document.querySelector(".container-banner");
setTimeout(() => {
    containerBanner.style.top = "0";
}, 1000); 
});

const contentArray = [
    {
      id: 1,
      title: "Android Development",
      description: "Content for Android Development...",
    },
    {
      id: 2,
      title: "Software Development",
      description: "Content for Software Development...",
    },
    {
      id: 3,
      title: "Data Analysis",
      description: "Content for Data Analysis...",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Content for Digital Marketing...",
    },
    {
      id: 5,
      title: "Event Planner & Management",
      description: "Content for Event Planner & Management...",
    },
];


function showCards(id){
  const workCard = getElementById('work-card');
  const content = contentArray;
  const card = document.createElement('div');
  
  card =  content.map((contnt) => (
    <div class="card-header">
     <h1>{contnt.title}</h1>
    </div>
  ))
  console.log(card);
}

showCards(id);



