// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Ensure this path is correct
    catImage.alt = 'Cat';
    catImage.style.width = '300px'; // Optional: Set image width
    catImage.style.height = 'auto'; // Maintain aspect ratio
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
    catImage.onerror = function() {
        console.error('Failed to load cat.gif');
    };
}

// Function to display the yipeecat.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content

    var catHeartImage = new Image();
    catHeartImage.src = 'yipeecat.gif'; // Ensure this path is correct
    catHeartImage.alt = 'Yipee Cat';
    catHeartImage.style.width = '300px'; // Optional: Set image width
    catHeartImage.style.height = 'auto'; // Maintain aspect ratio
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
    catHeartImage.onerror = function() {
        console.error('Failed to load yipeecat.gif');
    };
}

// Initialize the page by displaying the cat image
window.onload = function() {
    displayCat();
};