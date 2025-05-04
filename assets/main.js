document.getElementById("birthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const dob = document.getElementById("dob").value;
  const time = document.getElementById("birthTime").value;
  const place = document.getElementById("birthPlace").value;

  document.getElementById("result").innerHTML = `
    <h3>Submitted Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Time of Birth:</strong> ${time}</p>
    <p><strong>Place of Birth:</strong> ${place}</p>
  `;
});
