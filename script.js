/* =========================================================
   Note Collection — script.js
   Single source of truth: noteData drives the subject grid,
   the filter tabs and the note cards, so course names, icons
   and counts can never drift out of sync with each other.
   ========================================================= */

const noteData = [
 {
  code: 'ACT 301',
  course: 'Accounting and Management',
  icon: '📊',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Accounting and Management.',
  size: '150 KB',
  file: 'pdf/act301.pdf'
},

{
  code: 'BAN 101',
  course: 'Functional Bengali',
  icon: '🇧🇩',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Functional Bengali.',
  size: '150 KB',
  file: 'pdf/ban101.pdf'
},

{
  code: 'BHC 101',
  course: 'History of the Emergence of Independent Bangladesh',
  icon: '🇧🇩',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for History of the Emergence of Independent Bangladesh.',
  size: '150 KB',
  file: 'pdf/bhc101.pdf'
},

{
  code: 'CSE 100',
  course: 'Software Development Project-I',
  icon: '💻',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Software Development Project-I.',
  size: '150 KB',
  file: 'pdf/cse100.pdf'
},

{
  code: 'CSE 101',
  course: 'Structured Programming Language',
  icon: '💻',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Structured Programming Language.',
  size: '150 KB',
  file: 'pdf/cse101.pdf'
},

{
  code: 'CSE 102',
  course: 'Structured Programming Language Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Structured Programming Language.',
  size: '150 KB',
  file: 'pdf/cse102.pdf'
},

{
  code: 'CSE 103',
  course: 'Discrete Mathematics',
  icon: '🔢',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Discrete Mathematics.',
  size: '150 KB',
  file: 'pdf/cse103.pdf'
},

{
  code: 'CSE 111',
  course: 'Object-Oriented Programming',
  icon: '💻',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Object-Oriented Programming.',
  size: '150 KB',
  file: 'pdf/cse111.pdf'
},

{
  code: 'CSE 112',
  course: 'Object-Oriented Programming Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Object-Oriented Programming.',
  size: '150 KB',
  file: 'pdf/cse112.pdf'
},

{
  code: 'CSE 200',
  course: 'Software Development II',
  icon: '💻',
  type: 'Theory',
  credit: '0.75',
  desc: 'Lecture notes and study materials for Software Development II.',
  size: '150 KB',
  file: 'pdf/cse200.pdf'
},

{
  code: 'CSE 205',
  course: 'Digital Logic Design',
  icon: '⚡',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Digital Logic Design.',
  size: '150 KB',
  file: 'pdf/cse205.pdf'
},

{
  code: 'CSE 206',
  course: 'Digital Logic Design Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Digital Logic Design.',
  size: '150 KB',
  file: 'pdf/cse206.pdf'
},

{
  code: 'CSE 207',
  course: 'Database Systems',
  icon: '🗄️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Database Systems.',
  size: '150 KB',
  file: 'pdf/cse207.pdf'
},

{
  code: 'CSE 208',
  course: 'Database Systems Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Database Systems.',
  size: '150 KB',
  file: 'pdf/cse208.pdf'
},

{
  code: 'CSE 209',
  course: 'Operating Systems',
  icon: '⚙️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Operating Systems.',
  size: '150 KB',
  file: 'pdf/cse209.pdf'
},

{
  code: 'CSE 210',
  course: 'Operating Systems Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Operating Systems.',
  size: '150 KB',
  file: 'pdf/cse210.pdf'
},

{
  code: 'CSE 215',
  course: 'Computer Architecture',
  icon: '🖥️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Computer Architecture.',
  size: '150 KB',
  file: 'pdf/cse215.pdf'
},

{
  code: 'CSE 221',
  course: 'Data Structures',
  icon: '🌳',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Data Structures.',
  size: '150 KB',
  file: 'pdf/cse221.pdf'
},

{
  code: 'CSE 222',
  course: 'Data Structures Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Data Structures.',
  size: '150 KB',
  file: 'pdf/cse222.pdf'
},

{
  code: 'CSE 231',
  course: 'Algorithms',
  icon: '🧠',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Algorithms.',
  size: '150 KB',
  file: 'pdf/cse231.pdf'
},

{
  code: 'CSE 232',
  course: 'Algorithms Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Algorithms.',
  size: '150 KB',
  file: 'pdf/cse232.pdf'
},

{
  code: 'CSE 300',
  course: 'Software Development III',
  icon: '💻',
  type: 'Theory',
  credit: '0.75',
  desc: 'Lecture notes and study materials for Software Development III.',
  size: '150 KB',
  file: 'pdf/cse300.pdf'
},

{
  code: 'CSE 301',
  course: 'Technical Writing and Presentation',
  icon: '📝',
  type: 'Theory',
  credit: '1.5',
  desc: 'Lecture notes and study materials for Technical Writing and Presentation.',
  size: '150 KB',
  file: 'pdf/cse301.pdf'
},

{
  code: 'CSE 302',
  course: 'Technical Writing and Presentation',
  icon: '📝',
  type: 'Theory',
  credit: '1.5',
  desc: 'Lecture notes and study materials for Technical Writing and Presentation.',
  size: '150 KB',
  file: 'pdf/cse302.pdf'
},

{
  code: 'CSE 317',
  course: 'System Analysis and Design',
  icon: '📐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for System Analysis and Design.',
  size: '150 KB',
  file: 'pdf/cse317.pdf'
},

{
  code: 'CSE 318',
  course: 'System Analysis and Design Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for System Analysis and Design.',
  size: '150 KB',
  file: 'pdf/cse318.pdf'
},

{
  code: 'CSE 319',
  course: 'Computer Networks',
  icon: '🌐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Computer Networks.',
  size: '150 KB',
  file: 'pdf/cse319.pdf'
},

{
  code: 'CSE 320',
  course: 'Computer Networks Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Computer Networks.',
  size: '150 KB',
  file: 'pdf/cse320.pdf'
},

{
  code: 'CSE 321',
  course: 'Artificial Intelligence and Expert System',
  icon: '🤖',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Artificial Intelligence and Expert System.',
  size: '150 KB',
  file: 'pdf/cse321.pdf'
},

{
  code: 'CSE 322',
  course: 'Artificial Intelligence and Expert System Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Artificial Intelligence and Expert System.',
  size: '150 KB',
  file: 'pdf/cse322.pdf'
},

{
  code: 'CSE 323',
  course: 'Compiler Design',
  icon: '⚙️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Compiler Design.',
  size: '150 KB',
  file: 'pdf/cse323.pdf'
},

{
  code: 'CSE 324',
  course: 'Compiler Design Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '0.75',
  desc: 'Laboratory notes and practical materials for Compiler Design.',
  size: '150 KB',
  file: 'pdf/cse324.pdf'
},

{
  code: 'CSE 325',
  course: 'Microprocessor and Microcontroller',
  icon: '🔌',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Microprocessor and Microcontroller.',
  size: '150 KB',
  file: 'pdf/cse325.pdf'
},

{
  code: 'CSE 326',
  course: 'Microprocessor and Microcontroller Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Microprocessor and Microcontroller.',
  size: '150 KB',
  file: 'pdf/cse326.pdf'
},

{
  code: 'CSE 327',
  course: 'Software Engineering',
  icon: '💻',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Software Engineering.',
  size: '150 KB',
  file: 'pdf/cse327.pdf'
},

{
  code: 'CSE 328',
  course: 'Software Engineering Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '0.75',
  desc: 'Laboratory notes and practical materials for Software Engineering.',
  size: '150 KB',
  file: 'pdf/cse328.pdf'
},

{
  code: 'CSE 341',
  course: 'Advanced Programming',
  icon: '💻',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Advanced Programming.',
  size: '150 KB',
  file: 'pdf/cse341.pdf'
},

{
  code: 'CSE 342',
  course: 'Advanced Programming Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Advanced Programming.',
  size: '150 KB',
  file: 'pdf/cse342.pdf'
},

{
  code: 'CSE 400',
  course: 'Software Development IV',
  icon: '💻',
  type: 'Theory',
  credit: '0.75',
  desc: 'Lecture notes and study materials for Software Development IV.',
  size: '150 KB',
  file: 'pdf/cse400.pdf'
},

{
  code: 'CSE 403',
  course: 'Machine Learning',
  icon: '🤖',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Machine Learning.',
  size: '150 KB',
  file: 'pdf/cse403.pdf'
},

{
  code: 'CSE 404',
  course: 'Machine Learning Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Machine Learning.',
  size: '150 KB',
  file: 'pdf/cse404.pdf'
},

{
  code: 'CSE 413',
  course: 'Cyber Security and Digital Forensic',
  icon: '🔐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Cyber Security and Digital Forensic.',
  size: '150 KB',
  file: 'pdf/cse413.pdf'
},

{
  code: 'CSE 414',
  course: 'Cyber Security and Digital Forensic Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Cyber Security and Digital Forensic.',
  size: '150 KB',
  file: 'pdf/cse414.pdf'
},

{
  code: 'CSE 435',
  course: 'Network Security',
  icon: '🔐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Network Security.',
  size: '150 KB',
  file: 'pdf/cse435.pdf'
},

{
  code: 'CSE 441',
  course: 'Internet of Things (IOT)',
  icon: '📡',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Internet of Things (IOT).',
  size: '150 KB',
  file: 'pdf/cse441.pdf'
},

{
  code: 'CSE 442',
  course: 'Internet of Things (IOT) Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Internet of Things (IOT).',
  size: '150 KB',
  file: 'pdf/cse442.pdf'
},

{
  code: 'CSE 443',
  course: 'Pattern Recognition',
  icon: '📊',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Pattern Recognition.',
  size: '150 KB',
  file: 'pdf/cse443.pdf'
},

{
  code: 'CSE 449',
  course: 'Data Mining',
  icon: '📊',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Data Mining.',
  size: '150 KB',
  file: 'pdf/cse449.pdf'
},

{
  code: 'CSE 450',
  course: 'Data Mining Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Data Mining.',
  size: '150 KB',
  file: 'pdf/cse450.pdf'
},

{
  code: 'CSE 469',
  course: 'Software Testing and Quality Assurance',
  icon: '🧪',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Software Testing and Quality Assurance.',
  size: '150 KB',
  file: 'pdf/cse469.pdf'
},

{
  code: 'CSE 483',
  course: 'Introduction to Blockchain',
  icon: '⛓️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Introduction to Blockchain.',
  size: '150 KB',
  file: 'pdf/cse483.pdf'
},

{
  code: 'CSE 484',
  course: 'Introduction to Blockchain Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Introduction to Blockchain.',
  size: '150 KB',
  file: 'pdf/cse484.pdf'
},

{
  code: 'CSE 490',
  course: 'Information Technology Engineers',
  icon: '💼',
  type: 'Theory',
  credit: '0',
  desc: 'Lecture notes and study materials for Information Technology Engineers.',
  size: '150 KB',
  file: 'pdf/cse490.pdf'
},

{
  code: 'CSE 498A',
  course: 'Capstone Project (1 of 2)',
  icon: '🎓',
  type: 'Project',
  credit: '3',
  desc: 'Project materials and study resources for Capstone Project (1 of 2).',
  size: '150 KB',
  file: 'pdf/cse498a.pdf'
},

{
  code: 'CSE 498B',
  course: 'Capstone Project (2 of 2)',
  icon: '🎓',
  type: 'Project',
  credit: '3',
  desc: 'Project materials and study resources for Capstone Project (2 of 2).',
  size: '150 KB',
  file: 'pdf/cse498b.pdf'
},

{
  code: 'ECO 201',
  course: 'Principles of Economics',
  icon: '📈',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Principles of Economics.',
  size: '150 KB',
  file: 'pdf/eco201.pdf'
},

{
  code: 'EEE 101',
  course: 'Electrical Technology',
  icon: '🔌',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Electrical Technology.',
  size: '150 KB',
  file: 'pdf/eee101.pdf'
},

{
  code: 'EEE 102',
  course: 'Electrical Technology Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Electrical Technology.',
  size: '150 KB',
  file: 'pdf/eee102.pdf'
},

{
  code: 'EEE 211',
  course: 'Electrical Circuits',
  icon: '🔌',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Electrical Circuits.',
  size: '150 KB',
  file: 'pdf/eee211.pdf'
},

{
  code: 'EEE 212',
  course: 'Electrical Circuits Lab',
  icon: '🧪',
  type: 'Lab',
  credit: '1.5',
  desc: 'Laboratory notes and practical materials for Electrical Circuits.',
  size: '150 KB',
  file: 'pdf/eee212.pdf'
},

{
  code: 'ENG 101',
  course: 'English Language',
  icon: '📖',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for English Language.',
  size: '150 KB',
  file: 'pdf/eng101.pdf'
},

{
  code: 'ENG 202',
  course: 'English Language II',
  icon: '📖',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for English Language II.',
  size: '150 KB',
  file: 'pdf/eng202.pdf'
},

{
  code: 'MAT 101',
  course: 'Differential and Integral Calculus',
  icon: '📐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Differential and Integral Calculus.',
  size: '150 KB',
  file: 'pdf/mat101.pdf'
},

{
  code: 'MAT 111',
  course: 'Coordinate Geometry and Vector Calculus',
  icon: '📐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Coordinate Geometry and Vector Calculus.',
  size: '150 KB',
  file: 'pdf/mat111.pdf'
},

{
  code: 'MAT 221',
  course: 'Linear Algebras, Differential Equations and Furrier Analysis',
  icon: '📐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Linear Algebras, Differential Equations and Furrier Analysis.',
  size: '150 KB',
  file: 'pdf/mat221.pdf'
},

{
  code: 'MAT 231',
  course: 'Complex Variable and Statistics',
  icon: '📐',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Complex Variable and Statistics.',
  size: '150 KB',
  file: 'pdf/mat231.pdf'
},

{
  code: 'MGT 401',
  course: 'Project Management and Professional Ethics',
  icon: '📋',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Project Management and Professional Ethics.',
  size: '150 KB',
  file: 'pdf/mgt401.pdf'
},

{
  code: 'MKT 301',
  course: 'Digital Marketing',
  icon: '📢',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Digital Marketing.',
  size: '150 KB',
  file: 'pdf/mkt301.pdf'
},

{
  code: 'PHY 101',
  course: 'Physics',
  icon: '⚛️',
  type: 'Theory',
  credit: '3',
  desc: 'Lecture notes and study materials for Physics.',
  size: '150 KB',
  file: 'pdf/phy101.pdf'
},

{
  code: 'PHY 102',
  course: 'Physics Lab',
  icon: '⚛️',
  type: 'Practical',
  credit: '1',
  desc: 'Lecture notes and study materials for Physics Lab.',
  size: '150 KB',
  file: 'pdf/phy102.pdf'
},

{
  code: 'QUA 1101',
  course: 'Fundamentals of Mathematics',
  icon: '🔢',
  type: 'Theory',
  credit: '',
  desc: 'Lecture notes and study materials for Fundamentals of Mathematics.',
  size: '150 KB',
  file: 'pdf/qua1101.pdf'
},
]

// =========================================================
// ELEMENTS
// =========================================================

const noteGrid = document.getElementById('noteGrid');
const noResults = document.getElementById('noResults');

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const filterTabs = document.getElementById('filterTabs');
const subjectGrid = document.getElementById('subjectGrid');

let activeFilter = 'all';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =========================================================
// BUILD SUBJECT GRID + FILTER TABS FROM noteData
// (keeps course names, icons and counts always in sync)
// =========================================================

function renderSubjectGrid() {
  subjectGrid.innerHTML = noteData.map(note => `
    <button class="subject-card" data-filter="${escapeHtml(note.code)}" type="button">
      <span class="subject-icon" aria-hidden="true">${note.icon}</span>
      <span class="subject-code">${escapeHtml(note.code)}</span>
      <span class="subject-name">${escapeHtml(note.course)}</span>
      <span class="subject-count">1 note</span>
    </button>
  `).join('');
}

function renderFilterTabs() {
  const tabs = ['<button class="tab active" data-filter="all" type="button">All</button>']
    .concat(noteData.map(note =>
      `<button class="tab" data-filter="${escapeHtml(note.code)}" type="button">${escapeHtml(note.code)}</button>`
    ));
  filterTabs.innerHTML = tabs.join('');
}

// =========================================================
// RENDER NOTE CARDS
// =========================================================

function renderNotes(list) {
  noteGrid.innerHTML = '';

  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  const cards = list.map(note => {
    const meta = note.credit
      ? `${note.type} · ${note.credit} Credit${note.credit === '1' ? '' : 's'}`
      : note.type;

    return `
      <article class="note-card">
        <div class="note-top">
          <div class="note-icon" aria-hidden="true">${note.icon}</div>
          <div>
            <div class="note-code">${escapeHtml(note.code)}</div>
            <div class="note-course">${escapeHtml(note.course)}</div>
          </div>
        </div>

        <p class="note-meta">${escapeHtml(meta)}</p>
        <p class="note-desc">${escapeHtml(note.desc)}</p>
        <p class="note-size">PDF · ${escapeHtml(note.size)}</p>

        <div class="note-actions">
          <a class="btn btn-view" href="${encodeURI(note.file)}" target="_blank" rel="noopener">View PDF</a>
          <a class="btn btn-download" href="${encodeURI(note.file)}" download>Download</a>
        </div>
      </article>
    `;
  });

  noteGrid.innerHTML = cards.join('');
}

// =========================================================
// SEARCH + FILTER
// =========================================================

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = noteData.filter(note => {
    const matchesFilter = activeFilter === 'all' || note.code === activeFilter;

    const matchesSearch =
      query === '' ||
      note.code.toLowerCase().includes(query) ||
      note.course.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  renderNotes(filtered);
}

function setActiveFilter(filter) {
  activeFilter = filter;

  filterTabs.querySelectorAll('.tab').forEach(t => {
    const isActive = t.dataset.filter === filter;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-pressed', String(isActive));
  });

  applyFilters();
}

searchInput.addEventListener('input', applyFilters);
searchBtn.addEventListener('click', applyFilters);

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') applyFilters();
});

filterTabs.addEventListener('click', function (event) {
  const tab = event.target.closest('.tab');
  if (!tab) return;
  setActiveFilter(tab.dataset.filter);
});

subjectGrid.addEventListener('click', function (event) {
  const card = event.target.closest('.subject-card');
  if (!card) return;

  setActiveFilter(card.dataset.filter);

  document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
});

// =========================================================
// MOBILE MENU
// =========================================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// STATISTICS (counts are computed from noteData, never hardcoded)
// =========================================================

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(tick);
}

function setStatTargets() {
  const subjectCount = new Set(noteData.map(n => n.code)).size;
  const pdfCount = noteData.filter(n => n.file.toLowerCase().endsWith('.pdf')).length;

  const totalNotesEl = document.getElementById('statTotalNotes');
  const totalSubjectsEl = document.getElementById('statTotalSubjects');
  const totalPdfEl = document.getElementById('statTotalPdf');

  if (totalNotesEl) totalNotesEl.dataset.target = String(noteData.length);
  if (totalSubjectsEl) totalSubjectsEl.dataset.target = String(subjectCount);
  if (totalPdfEl) totalPdfEl.dataset.target = String(pdfCount);
}

setStatTargets();

const statNumbers = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.forEach(animateCount);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// =========================================================
// INITIAL RENDER
// =========================================================

renderSubjectGrid();
renderFilterTabs();
renderNotes(noteData);

// re-fetch tab/subject references now that they've been rendered
// (filterTabs / subjectGrid containers themselves don't change,
// only their children, so the listeners above already work)

// =========================================================
// PASSWORD PROTECTION
// =========================================================

const correctPassword = 'BUBT2026';

const passwordScreen = document.getElementById('passwordScreen');
const websiteContent = document.getElementById('websiteContent');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');

function unlockSite() {
  passwordScreen.style.display = 'none';
  websiteContent.style.display = 'block';
}

// Restore access within the same browser tab/session
if (sessionStorage.getItem('noteCollectionAccess') === 'granted') {
  unlockSite();
}

function checkPassword() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    sessionStorage.setItem('noteCollectionAccess', 'granted');
    unlockSite();
    passwordError.textContent = '';
  } else {
    passwordError.textContent = '❌ Incorrect password!';
    passwordInput.value = '';
    passwordInput.focus();
  }
}

passwordSubmit.addEventListener('click', checkPassword);

passwordInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') checkPassword();
});

togglePassword.addEventListener('click', function () {
  const showing = passwordInput.type === 'text';

  passwordInput.type = showing ? 'password' : 'text';
  togglePassword.textContent = showing ? '👁️' : '🙈';
  togglePassword.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});
