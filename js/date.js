var possibilities={
        weekday: "long",
        day:"numeric",
        month:"long",
        year:"numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
};
document.getElementById('output').innerHTML = new Date().toLocaleDateString('en-US', possibilities);
document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();
