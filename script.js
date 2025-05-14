let currentType = '';
let currentCategory = '';

function openSubcategories(category) {
  currentCategory = category;
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('subCategoryScreen').style.display = 'block';
  document.getElementById('subTitle').innerText = category + ' Climbing: Choose Type';
}

function goHome() {
  document.getElementById('subCategoryScreen').style.display = 'none';
  document.getElementById('logScreen').style.display = 'none';
  document.getElementById('homeScreen').style.display = 'block';
}

function goToSubcategories() {
  document.getElementById('logScreen').style.display = 'none';
  document.getElementById('subCategoryScreen').style.display = 'block';
}

function openLog(type) {
  currentType = type;
  document.getElementById('subCategoryScreen').style.display = 'none';
  document.getElementById('logScreen').style.display = 'block';
  document.getElementById('logTitle').innerText = `${currentCategory} - ${type} Log`;
  renderLogs();
}

function renderLogs() {
  const climbList = document.getElementById('climbList');
  climbList.innerHTML = '';
  const climbs = JSON.parse(localStorage.getItem('climbs')) || [];
  const filtered = climbs.filter(climb => climb.type === currentType && climb.category === currentCategory);

  filtered.forEach(climb => {
    const entry = document.createElement('div');
    entry.className = 'entry';
    entry.innerHTML = `
      <h3>${climb.name}</h3>
      <p><strong>Grade:</strong> ${climb.grade}</p>
      <p><strong>Date:</strong> ${climb.date}</p>
      <p><strong>Attempts:</strong> ${climb.attempts || '—'}</p>
      <p><strong>Notes:</strong> ${climb.notes || '—'}</p>
    `;
    climbList.appendChild(entry);
  });
}

const form = document.getElementById('climbForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newClimb = {
    name: form.climbName.value,
    grade: form.grade.value,
    date: form.date.value,
    attempts: form.attempts.value,
    notes: form.notes.value,
    type: currentType,
    category: currentCategory
  };

  const climbs = JSON.parse(localStorage.getItem('climbs')) || [];
  climbs.push(newClimb);
  localStorage.setItem('climbs', JSON.stringify(climbs));

  form.reset();
  renderLogs();
});
