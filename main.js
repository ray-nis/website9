let url = window.location.href;
let lastPart = url.substr(url.lastIndexOf('/') + 1);

if (lastPart === "" || lastPart === "index.html") {
    document.querySelector("#m1").style.color = "#e00966";
} else if (lastPart === "works.html") {
    document.querySelector("#m2").style.color = "#e00966";
} else if (lastPart === "contact.html") {
    document.querySelector("#m3").style.color = "#e00966";
}