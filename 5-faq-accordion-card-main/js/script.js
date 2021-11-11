let accordion = document.getElementsByClassName("accordion");
let currentActive = document.getElementsByClassName("active");
let currentBold = document.getElementsByClassName("bold");


for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {

        // Prevent having more than collasped section
        if (currentActive !== undefined && currentActive.length > 0) {
            if (currentActive[0].previousElementSibling !== this) {
                currentActive[0].classList.toggle("active");
                currentBold[0].classList.toggle("bold");
                this.firstElementChild.classList.toggle('rotation');
            }
        }

        let panel = this.nextElementSibling;
        panel.classList.toggle('active');
        this.classList.toggle('bold');
        this.firstElementChild.classList.toggle('rotation');
        // console.log(window.getComputedStyle(this, "::after").setProperty("text-align", ));
        // window.getComputedStyle(this, "::after").transform;
    });
}