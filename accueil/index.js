console.log(document.getElementsByTagName("a"))

document.getElementsByTagName("page")[0].addEventListener("click", function() {
    console.log("k")
    window.open("../carte.pdf");
});