console.log("Welcome to Mahen's personal profile!");

// Event listener untuk masing-masing item pendidikan
document.getElementById("elementary").addEventListener("click", function() {
    displayImage("img/sd.jpeg", "Elementary School", "https://maps.app.goo.gl/Wdj9bGt8Sz4HRE7ZA");
});

document.getElementById("middle").addEventListener("click", function() {
    displayImage("img/smp.jpg", "Middle School", "https://www.instagram.com/smpn9.cimahi/");
});

document.getElementById("high").addEventListener("click", function() {
    displayImage("img/smk.png", "High School", "https://www.smkn1-cmi.sch.id/");
});

document.getElementById("polytechnic").addEventListener("click", function() {
    displayImage("img/polman.png", "Polytechnic", "https://polman-bandung.ac.id/");
});

function displayImage(imageSrc, altText, linkUrl) {
    const imgElement = document.getElementById("education-img");
    const imgContainer = document.getElementById("education-image");
    const linkElement = document.getElementById("education-link");

    imgElement.src = imageSrc;
    imgElement.alt = altText;
    linkElement.href = linkUrl;  // Mengatur tautan
    imgContainer.classList.remove("hidden");  // Menampilkan gambar
}
