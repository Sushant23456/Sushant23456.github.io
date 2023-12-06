document.getElementById("introForm").addEventListener("submit", function (event) {
    event.preventDefault();
    createIntroPage();
});

  

document.getElementById("addCourse").addEventListener("click", function() {
    alert("Button clicked");
    const courseContainer = document.getElementById("courseContainer");

    const courseDiv = document.createElement("div");
  
    // Create the course input
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "courses";
    courseDiv.appendChild(newCourseInput);
  
    // Create a delete button for the course
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      // Remove the course div when delete is clicked
      courseContainer.removeChild(courseDiv);
    };
    courseDiv.appendChild(deleteButton);
  
    // Add the new div to the course container
    courseContainer.appendChild(courseDiv);
  });
  

  function createIntroPage() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevBackground = document.getElementById("webDevBackground").value;
    const primaryPlatform = document.getElementById("primaryPlatform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;
  
    const courseInputs = document.querySelectorAll('#courseContainer input[type="text"]');
    let courses = "";
    courseInputs.forEach((input, index) => {
      courses += `<li>${input.value}</li>`;
    });
  
    const introContent = `
      <h3>Introduction</h3>
      <p>Name: ${name}</p>
      <p>Mascot: ${mascot}</p>
      <p>Image Caption: ${imageCaption}</p>
      <p>Personal Background: ${personalBackground}</p>
      <p>Professional Background: ${professionalBackground}</p>
      <p>Academic Background: ${academicBackground}</p>
      <p>Background in Web Development: ${webDevBackground}</p>
      <p>Primary Computer Platform: ${primaryPlatform}</p>
      <p>Funny Thing: ${funnyThing}</p>
      <p>Anything Else: ${anythingElse}</p>
      ${courses ? `<h4>Courses:</h4><ul>${courses}</ul>` : ''}
    `;
  
    document.getElementById("result").innerHTML = introContent;
  }
  