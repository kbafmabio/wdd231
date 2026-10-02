const openNp = document.querySelector("#openNp");
const openBronze = document.querySelector("#openBronze");
const openSilver = document.querySelector("#openSilver");
const openGold = document.querySelector("#openGold");


const dialogBoxNp = document.querySelector("#dialogBoxNp");
const dialogBoxBronze = document.querySelector("#dialogBoxBronze");
const dialogBoxSilver = document.querySelector("#dialogBoxSilver");
const dialogBoxGold = document.querySelector("#dialogBoxGold");
const closeNp = document.querySelector("#closeNp");
const closeBronze = document.querySelector("#closeBronze");
const closeSilver = document.querySelector("#closeSilver");
const closeGold = document.querySelector("#closeGold");
// add the even listener for np

openNp.addEventListener("click", () => {
    dialogBoxNp.showModal();
});
closeNp.addEventListener("click", () => {
    dialogBoxNp.close();
});

// add the even listener for bronze
openBronze.addEventListener("click", () => {
    dialogBoxBronze.showModal();
});
closeBronze.addEventListener("click", () => {
    dialogBoxBronze.close();
});

openSilver.addEventListener("click", () => {
    dialogBoxSilver.showModal();
});
closeSilver.addEventListener("click", () => {
    dialogBoxSilver.close();
});

openGold.addEventListener("click", () => {
    dialogBoxGold.showModal();
});
closeGold.addEventListener("click", () => {
    dialogBoxGold.close();
});

const params = new URLSearchParams(window.location.search);

document.getElementById("first_name").textContent = params.get("first_name") || "";
document.getElementById("last_name").textContent = params.get("last_name") || "";
document.getElementById("organisation_title").textContent = params.get("organisation_title") || "";
document.getElementById("email").textContent = params.get("email") || "";
document.getElementById("phone").textContent = params.get("phone") || "";
document.getElementById("business").textContent = params.get("business") || "";
document.getElementById("membership_level").textContent = params.get("membership_level") || "";

document.getElementById("timestamp").textContent = params.get("timestamp") || "";

document.getElementById("description").textContent = params.get("description") || "";

document.getElementById("timestamp").value = new Date().toLocaleString();