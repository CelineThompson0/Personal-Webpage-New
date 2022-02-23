function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); // target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); // target the dark mode button

    // if the background is black, change background to purple?
    if (bodyElement.style.backgroundColor === "black") {
        bodyElement.style.backgroundColor = "#e8d7ec";
        darkModeButtonElement.innerHTML = "Switch to Dark Mode!";
    } 
    // if background is not purple, change background to black?

    else {
        bodyElement.style.backgroundColor = "black"; //set background to black
        darkModeButtonElement.innerHTML = "Switch to Light Mode!";
    }

}