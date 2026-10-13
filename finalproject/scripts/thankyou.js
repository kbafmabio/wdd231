const params = new URLSearchParams(window.location.search);

const firstName = params.get("first");
const lastName = params.get("last");
const email = params.get("email");
const phone = params.get("phone");
const object = params.get("object");
const description = params.get("description");
const timeStamp = params.get("timeStamp");

const formSummary = document.querySelector("#formSummary");


let formattedDate = "Not available";

if (timeStamp) {
    const now = new Date(timeStamp);
    formattedDate = now.toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short"
    })

};

formSummary.innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Number:</strong> ${phone}</p>
    <p><strong>Description</strong> ${description}</p>
    <p><strong>Application Date:</strong> ${formattedDate}</p>
`;