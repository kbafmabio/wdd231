const params = new URLSearchParams(window.location.search);

const firstName = params.get("first");
const lastName = params.get("last");
const organizationalTitle = params.get("title");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("business");
const membership = params.get("membership");
const timestamp = params.get("timestamp");

const formSummary = document.querySelector("#form-summary");

const nowdate = new Date(timestamp);
let formattedDate = "Not available";
if (timestamp) {
    const now = new Date(timestamp);
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
    <p><strong>Business / Organization:</strong> ${organization}</p>t
    <p><strong>Organizational Title:</strong> ${organizationalTitle}</p>
    <p><strong>Membership Level:</strong> ${membership}</p>
    <p><strong>Application Date:</strong> ${formattedDate}</p>
`;