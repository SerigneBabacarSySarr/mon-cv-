document.addEventListener('DOMContentLoaded', () => {
  console.log('CV chargé — bienvenue !');

  // Données du CV (exemple). Remplacez / dynamisez si nécessaire.
  const cvData = {
    name: 'Serigne Babacar Sy Sarr',
    role: 'Étudiant en Licence 2 — Développement Web',
    summary: "Étudiant en informatique motivé, spécialisé en développement front-end et administration système. Axé sur l'accessibilité et la qualité du code.",
    contact: {
      email: 'sbabacar986@gmail.com',
      phone: '+221778547883',
      location: 'Tivaouane, Thiès, Sénégal',
      whatsapp: 'https://wa.me/221778547883'
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Responsive Design'],
    languages: ['Français', 'Wolof', 'Anglais (lecture)'],
    experience: [
      {role: 'Maintenance & Réglage', company: 'Atelier local', dates: '2022', desc: 'Réglage et maintenance de machines; diagnostics et réparations.'},
      {role: 'Initiation Systèmes', company: 'Projet universitaire', dates: '2023', desc: 'Support et introduction aux systèmes informatiques pour étudiants.'}
    ],
    education: [
      {degree: 'Licence 2 Informatique', school: 'Université', dates: '2024 — en cours'},
      {degree: 'Baccalauréat S2', school: 'Lycée', dates: '2023'}
    ],
    projects: [
      {name: 'Portfolio Web', desc: 'Site personnel responsive et accessible.'}
    ]
  };

  // Rendu des sections
  const $ = sel => document.querySelector(sel);
  $('#name').textContent = cvData.name;
  $('#role').textContent = cvData.role;
  $('#summaryText').textContent = cvData.summary;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact
  const contactEl = $('#contact');
  if (contactEl) {
    contactEl.querySelector('a[href^="mailto:"]').textContent = cvData.contact.email;
    contactEl.querySelector('a[href^="mailto:"]').href = `mailto:${cvData.contact.email}`;
    contactEl.querySelector('a[href^="tel:"]').textContent = cvData.contact.phone;
    contactEl.querySelector('a[href^="tel:"]').href = `tel:${cvData.contact.phone}`;
    const wa = contactEl.querySelector('a[href*="wa.me"]');
    if (wa) wa.href = cvData.contact.whatsapp;
  }

  // Skills
  const skillsEl = $('#skills');
  if (skillsEl) {
    const ul = skillsEl.querySelector('ul');
    if (ul) {
      ul.innerHTML = cvData.skills.map(s => `<li>${s}</li>`).join('');
    }
  }

  // Languages
  const languagesEl = $('#languages');
  if (languagesEl) {
    const ul = languagesEl.querySelector('ul');
    if (ul) ul.innerHTML = cvData.languages.map(l => `<li>${l}</li>`).join('');
  }

  // Experience
  const expList = $('#experienceList');
  if (expList) {
    expList.innerHTML = cvData.experience.map(e =>
      `<div class="experience-item"><strong>${e.role}</strong> — <span class="meta">${e.company} · ${e.dates}</span><div>${e.desc}</div></div>`
    ).join('');
  }

  // Education
  const eduList = $('#educationList');
  if (eduList) {
    eduList.innerHTML = cvData.education.map(e =>
      `<div class="edu-item"><strong>${e.degree}</strong> — <span class="meta">${e.school} · ${e.dates}</span></div>`
    ).join('');
  }

  // Projects
  const projectsList = $('#projectsList');
  if (projectsList) {
    projectsList.innerHTML = cvData.projects.map(p =>
      `<div class="project-item"><strong>${p.name}</strong><div class="meta">${p.desc}</div></div>`
    ).join('');
  }

  // Theme toggle
  const themeBtn = document.getElementById('themeBtn');
  const printBtn = document.getElementById('printBtn');

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
  };

  themeBtn && themeBtn.addEventListener('click', toggleTheme);

  // Impression / export PDF (simple)
  printBtn && printBtn.addEventListener('click', () => {
    window.print();
  });

  // Petit suivi des interactions utiles
  document.querySelectorAll('.contact a').forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Lien cliqué : ${link.href}`);
    });
  });
});
