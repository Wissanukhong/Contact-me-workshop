function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass ===
        "dark-mode" ?
        "light-mode" :
        "dark-mode";
}

/**
 * Explain the code
 * create function 
 * create variable body to storage the value from documnt.getElementById("body");
 * create variable currentClass to storage (varibable previous ) body.className [current class is dark-mode]
 * creck value with ternary condition 
 */