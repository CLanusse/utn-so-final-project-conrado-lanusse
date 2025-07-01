document.getElementById("loadButton").addEventListener("click", async () => {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
});

document.getElementById("greetingBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value;
  if (!name) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  const response = await fetch(`/api/greet?name=${encodeURIComponent(name)}`);
  if (!response.ok) {
    const error = await response.text();
    alert(`Error: ${error}`);
    return;
  }

  const data = await response.json();
  document.getElementById("greetingMessage").textContent = data.message;
});
