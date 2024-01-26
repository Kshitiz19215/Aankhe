var images = [
    "Images/Plate1.jpg","Images/Plate2.jpg","Images/Plate3.jpg","Images/Plate4.jpg","Images/Plate5.jpg","Images/Plate6.jpg","Images/Plate7.jpg","Images/Plate8.jpg","Images/Plate9.jpg","Images/Plate10.jpg","Images/Plate11.jpg","Images/Plate12.jpg","Images/Plate13.jpg","Images/Plate14.jpg","Images/Plate15.jpg",
];

var correctAnswers = {
    "Images/Plate1.jpg": "12",
    "Images/Plate2.jpg": "8",
    "Images/Plate3.jpg": "29",
    "Images/Plate4.jpg": "5",
    "Images/Plate5.jpg": "3",
    "Images/Plate6.jpg": "15",
    "Images/Plate7.jpg": "74",
    "Images/Plate8.jpg": "6",
    "Images/Plate9.jpg": "45",
    "Images/Plate10.jpg": "5",
    "Images/Plate11.jpg": "7",
    "Images/Plate12.jpg": "16",
    "Images/Plate13.jpg": "73",
    "Images/Plate14.jpg": "26",
    "Images/Plate15.jpg": "42",
};

var shuffledImages = shuffleArray(images);
var currentImageIndex = 0;
var correctCount = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomImage() {
    if (currentImageIndex < shuffledImages.length) {
        return shuffledImages[currentImageIndex];
    } else {
        return null;
    }
}

document.getElementById("result").style.display = "none";

function validateAnswer() {
    var userAnswer = document.getElementById("userAnswer").value;
    var currentImage = shuffledImages[currentImageIndex];

    console.log("Current Image: ", currentImage);
    console.log("Correct Answer: ", correctAnswers[currentImage]);
    console.log("User Answer: ", userAnswer);

    if (correctAnswers[currentImage] === userAnswer.toString()) {
        correctCount++;
        console.log("Correct Count: ", correctCount);
    }

    currentImageIndex++;

    if (currentImageIndex >= shuffledImages.length) {
        displayResult();
    } else {
        var newImage = getRandomImage();
        document.getElementById("imageContainer").innerHTML = '<img src="' + newImage + '" alt="Ishihara Test Image">';
        document.getElementById("userAnswer").value = "";
    }
}

function restartTest() {
    shuffledImages = shuffleArray(images);
    currentImageIndex = 0;
    correctCount = 0;

    document.getElementById("result").style.display = "none";

    var initialImage = getRandomImage();
    document.getElementById("imageContainer").innerHTML = '<img src="' + initialImage + '" alt="Ishihara Test Image">';
}


function displayResult() {
    var resultContainer = document.getElementById("result");
    var resultText = document.getElementById("resultText");
    var resultMessage = "";

    console.log("Final Correct Count: ", correctCount);

    if (correctCount >= 9) {
        resultMessage = "Congratulations! You have normal color vision.";
    } else if (correctCount >= 6) {
        resultMessage = "You may have mild to moderate color deficiency.";
    } else if (correctCount >= 3) {
        resultMessage = "You may have moderate to severe color deficiency.";
    } else {
        resultMessage = "You may have severe color deficiency.";
    }

    resultText.innerHTML = resultMessage;

    var againBtn = document.getElementById("againBtn");
    againBtn.style.display = "block";

    resultContainer.style.display = "block";
}

var initialImage = getRandomImage();
document.getElementById("imageContainer").innerHTML = '<img src="' + initialImage + '" alt="Ishihara Test Image">';
