var button = document.getElementById("submit-button");
const hiddenText = document.getElementsByClassName("getback")[0];

button.addEventListener("click", function() {
    if(hiddenText.classList.contains("fade-out")) {
        hiddenText.classList.add("transparent");
        hiddenText.classList.remove("fade-out");
        
    }
    else if(hiddenText.classList.contains("transparent")){
        hiddenText.classList.remove("transparent");
        hiddenText.classList.add("fade-out");
    }

    
});