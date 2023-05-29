function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById("h1");
    if (x.className === "test") {
        x.className += "responsive";
        y.className += "responsive";
    } else {
        x.className = "test";
        y.className = "h1";
    }
}