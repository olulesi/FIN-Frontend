const container = document.getElementById("tablesContainer");
const buttons = document.querySelectorAll(".verb-btn");

function displayVerb(verbName) {
  const verbData = verbsData.find(v => v.verb === verbName);
  if (!verbData) return;

  container.innerHTML = `
    <table border="1">
      <tr>
        <th>Audio</th>
        <th>Pronoun</th>
        <th>Sentence</th>
      </tr>
      ${verbData.sentences.map((sentence, index) => `
        <tr>
          <td><button>🔊</button></td>
          <td>${["Mo","Iwo","O","A","Won"][index]}</td>
          <td>${sentence}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

// Default verb
displayVerb("Jeun");

// Event listeners
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const verb = btn.dataset.verb;
    displayVerb(verb);
  });
});

