

function setGreeting() {
  const now = new Date();
  const hours = now.getHours();
  
  let greetingText = "";

  if (hours >= 00 && hours < 12) {
    greetingText = "Good Morning";
  } else if (hours >= 12 && hours < 24) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  
  const demoElement = document.getElementById("demo");
  if (demoElement) {
    demoElement.textContent = greetingText + "!";
  }
}


document.addEventListener("DOMContentLoaded", setGreeting);