// Display the current date and time
function scriptTest() {
    alert("Hey my script is running");
}

function displayDateTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];
    const formattedDate = `Today is ${now.getHours()}:${now.getMinutes()}pm on ${dayName}, ${now.getDate()} ${now.toLocaleString('default', { month: 'long' })}, ${now.getFullYear()}`;
    document.getElementById("dateTimeDisplay").textContent = formattedDate;
}

// Greet the user
function greetUser(event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const greetingMessage = `The Stark Tern welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
    document.getElementById("greetingDisplay").textContent = greetingMessage;
}

// Display the name of the polygon based on the number of sides
function displayPolygonName() {
    let number = Math.round(Math.abs(document.getElementById("favNumber").value));
    const polygons = ["", "monogon", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    if (number <= 10) {
        alert(`The polygon with ${number} sides is called a ${polygons[number]}.`);
    } else {
        alert("Sorry, I don't know the name of the polygon with that many sides.");
    }
}

// Sample Animal Brand Functions
function starkTernFact() {
    alert("Did you know? The Stark Tern can fly for days without resting!");
}

function starkTernSound() {
    alert("Stark Tern says: Kreee!");
}

function starkTernDance() {
    alert("The Stark Tern is doing its majestic dance!");
}

function starkTernAdvice() {
    alert("Stark Tern's advice: Always soar high, but don't forget to touch the ground once in a while.");
}


// Event Listener for the user form
document.getElementById("userForm").addEventListener("submit", greetUser);

// Call the displayDateTime function on page load
displayDateTime();
