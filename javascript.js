function logHello() {
    console.log("Hello world!");
}

function replaceAlert() {
    var alertBox = document.getElementById("alert-box");

    if(alertBox){
        var nonFocusDiv = document.createElement("div");

        nonFocusDiv.setAttribute("tabindex", "-1");

        nonFocusDiv.addEventListener('blur', function() {
            nonFocusDiv.parentNode.removeChild(nonFocusDiv);
        });

        alertBox.parentNode.replaceChild(nonFocusDiv, alertBox);
    }
}