// Function to change text content dynamically
function changeText() {
    document.getElementById("dynamicText").textContent = "Text has been updated!";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    document.getElementById("heading").style.color = "red";
    document.getElementById("heading").style.fontSize = "30px";
}

// Function to add/remove an element when a button is clicked
function toggleBox() {
    let box = document.getElementById("box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
