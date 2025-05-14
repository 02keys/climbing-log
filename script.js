const form = document.getElementById('climbForm');
const list = document.getElementById('climbList');

let climbs = JSON.parse(localStorage.getItem('climbs')) || [];

function renderClimbs() {
  list.innerHTML = '';
  climbs.forEach((climb, index) => {
    const entry = document.createElement('div');
    entry.className = 'climb-entry';

    entry.innerHTML = `
      <button class="delete-btn" onclick="deleteClimb(${index})">×</button>
      <h3>${climb.name} <span class="type">(${climb.type})</span></h3>
      <p><strong>Grade:</strong> ${climb.grade}</p>
      <p><strong>Location:</strong> ${climb.location}</p>
      <p><strong>Date:</strong> ${climb.date} | <strong>Attempts:</strong> ${climb.attempts || '—'}</p>
      <p><strong>Notes:</strong> ${climb.notes || '—'}</p>
    `;
    list.appendChild(entry);
  });
}

function deleteClimb(index) {
  climbs.splice(index, 1);
  localStorage.setItem('climbs', JSON.stringify(climbs));
  renderClimbs();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newClimb = {
    name: form.climbName.value,
    location: form.location.value,
    grade: form.grade.value,
    type: form.type.value,
    date: form.date.value,
    attempts: form.attempts.value,
    notes: form.notes.value
  };
  climbs.push(newClimb);
  localStorage.setItem('climbs', JSON.stringify(climbs));
  form.reset();
  renderClimbs();
});

renderClimbs();
