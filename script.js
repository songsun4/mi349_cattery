console.log("test");


const headerbar = document.getElementsByClassName("header-bar")[0];

window.addEventListener("scroll", () => {
    var scrollY = window.pageYOffset;
    if(scrollY >= 850) {
        headerbar.classList.remove("transparent");
        console.log("past 850");
    }
    else {
        headerbar.classList.add("transparent")
    }

});

