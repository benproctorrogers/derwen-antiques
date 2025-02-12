function logHello() {
    console.log("Hello world!");
}

function replaceAlertDiv() {
    var alertBox = document.getElementById("alert-box");

    if(alertBox){
        var nonFocusDiv = document.createElement("div");

        nonFocusDiv.setAttribute("tabindex", "-1");

        nonFocusDiv.setAttribute("aria-label", "Alert dismissed successfully");

        nonFocusDiv.setAttribute("role", "presentation");

        nonFocusDiv.addEventListener('blur', function() {
            nonFocusDiv.parentNode.removeChild(nonFocusDiv);
        });

        alertBox.parentNode.replaceChild(nonFocusDiv, alertBox);

        nonFocusDiv.focus();
    }
}


function replaceAlertSpan() {
    var alertBox = document.getElementById("alert-again-box");

    if(alertBox){
        var nonFocusSpan = document.createElement("span");

        nonFocusSpan.setAttribute("tabindex", "-1");

        nonFocusSpan.className = "sr-only";

        nonFocusSpan.textContent = "Alert dismissed successfully";

        nonFocusSpan.setAttribute("role", "presentation");

        nonFocusSpan.addEventListener('blur', function() {
            nonFocusSpan.parentNode.removeChild(nonFocusSpan);
        });

        alertBox.parentNode.replaceChild(nonFocusSpan, alertBox);

        nonFocusSpan.focus();
    }
}

function multiFunction() {
    logHello();
    replaceAlert();
}