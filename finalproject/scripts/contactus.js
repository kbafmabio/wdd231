const openNut = document.querySelector("#openNut");
const openStone = document.querySelector("#openStone");
const openPorous = document.querySelector("#openPorous");
const openCitrus = document.querySelector("#openCitrus");


const dialogBoxNut = document.querySelector("#dialogBoxNut");
const dialogBoxStone = document.querySelector("#dialogBoxStone");
const dialogBoxPorous = document.querySelector("#dialogBoxPorous");
const dialogBoxCitrus = document.querySelector("#dialogBoxCitrus");
const closeNut = document.querySelector("#closeNut");
const closeStone = document.querySelector("#closeStone");
const closePorous = document.querySelector("#closePorous");
const closeCitrus = document.querySelector("#closeCitrus");
// add the even listener for np

openNut.addEventListener("click", () => {
    dialogBoxNut.showModal();
});
closeNut.addEventListener("click", () => {
    dialogBoxNut.close();
});

// add the even listener for bronze
openStone.addEventListener("click", () => {
    dialogBoxStone.showModal();
});
closeStone.addEventListener("click", () => {
    dialogBoxStone.close();
});

openPorous.addEventListener("click", () => {
    dialogBoxPorous.showModal();
});
closePorous.addEventListener("click", () => {
    dialogBoxPorous.close();
});

openCitrus.addEventListener("click", () => {
    dialogBoxCitrus.showModal();
});
closeCitrus.addEventListener("click", () => {
    dialogBoxCitrus.close();
});

const timeStampInput = document.querySelector("#timeStamp");

if (timeStampInput) {
    timeStampInput.value = new Date().toISOString();
}