openPanel = () => {
    document.getElementById('mysidepanel').style.width = '300px';
}
closePanel = () => {
    document.getElementById('mysidepanel').style.width = '0px';
}

let accordion = document.getElementsByClassName("accordion");

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener (
        "click", function () {
            this.classList.toggle("active");

            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    );
}