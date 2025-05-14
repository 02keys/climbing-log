const form = document.getElementById('climbForm');
const list = document.getElementById('climbList');

let climbs = JSON.parse(localStorage.getItem('climbs')) || [];

function renderClimbs() {
  list.innerHTML = '';
  climbs.forEach((climb, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${climb.name}</strong> (${climb.grade}) - ${climb.location}<br/>
      <small>Date: ${climb.date} | Attempts: ${climb.attempts || '—'}</small><br/>
      <em>Notes:</em> ${climb.notes || 'None'}
      <button onclick="deleteClimb(${index})">❌</button>
    `;
    list.appendChild(li);
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
