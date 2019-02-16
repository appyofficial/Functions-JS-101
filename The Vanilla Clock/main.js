/*Clock hands*/
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/* Selecting Body*/
const clockContainer = document.querySelector('body');

/*For user input variable */
let visitorName = prompt("What's your name");
let greeting = document.getElementById("greeting")
let warningNote = document.getElementById("warning");
let footNote = document.getElementById("footGreet");



/*Moving the hands*/
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();


/* Perosonalizing the webpage*/
function personalMessage() {
    //If user didn't enter his or her name
    if (visitorName === null || visitorName === "") {
        visitorName = "Stranger";
        warningNote.textContent = "You might want to refresh the page to enter your name. I dont store it. Enjoy 'The Vanilla Clock'. You might also want to visit my webpage to check out more projects, blogs or tutorials. links are below";
        footNote.textContent = `Dear ${visitorName}! Below are the links, feel free to get in touch with me.`;
    } else {
        //If user enters his or her name
        warningNote.textContent = `Hey ${visitorName}! I hope you are doing great. Enjoy 'The Vanilla Clock'. You might also want to visit my webpage to check out more projects, blogs or tutorials. links are below`;
        footNote.textContent = `Dear ${visitorName}! Below are the links, feel free to get in touch with me.`;
    }
}
personalMessage();



/* Changing the background according to the time */
function changeBackground() {
    const n = new Date();
    const hours = n.getHours();
    //Between 6 am to 12 noon
    if (hours > 6 && hours < 12) {
        clockContainer.className = 'goodMorning';
        greeting.textContent = `Good morning ${visitorName}!`;
        //Between 12 noon to 4 pm
    } else if (hours > 12 && hours < 16) {
        clockContainer.className = 'goodAfternoon';
        greeting.textContent = `Good afternoon ${visitorName}!`;
        //Between 4 pm to 9 pm
    } else if (hours > 16 && hours < 21) {
        clockContainer.className = 'goodEvening';
        greeting.textContent = `Good evening ${visitorName}!`;
        greeting.style.color = 'white';
        warningNote.style.color = 'white';
        footNote.style.color = 'white';
        //Rest of the night
    } else {
        clockContainer.className = 'goodNight';
        greeting.textContent = `Good night ${visitorName}!`;
        greeting.style.color = 'white';
        warningNote.style.color = 'white';
        footNote.style.color = 'white';
    }
}
changeBackground();