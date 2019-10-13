function toggleMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("change");
}
var possibilities={
    day:"numeric",
    month:"numeric",
    year:"numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
};
document.getElementById('output').innerHTML = new Date().toLocaleDateString('en-US', possibilities);
document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();

