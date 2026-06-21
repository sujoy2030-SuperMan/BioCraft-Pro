// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}

// Load Saved Theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Dynamic Preview Logic
function updatePreview() {
    const fields = {
        'fullName': 'prevName',
        'jobTitle': 'prevTitle',
        'email': 'prevEmail',
        'phone': 'prevPhone',
        'summary': 'prevSummaryText',
        'fatherName': 'prevFather',
        'dob': 'prevDob',
        'gender': 'prevGender',
        'address': 'prevAddress',
        'religion': 'prevReligion',
        'height': 'prevHeight',
        'fatherOcc': 'prevFatherOcc',
        'siblings': 'prevSiblings',
        'orgName': 'prevOrg',
        'idNumber': 'prevId',
        'purpose': 'prevPurpose',
        'certDate': 'prevDate'
    };

    for (let id in fields) {
        const input = document.getElementById(id);
        const preview = document.getElementById(fields[id]);
        if (input && preview) {
            preview.innerText = input.value || input.placeholder || '';
        }
    }
}

// Experience & Education Management
let experienceCount = 0;
function addExperience() {
    experienceCount++;
    const list = document.getElementById('experienceList');
    const item = document.createElement('div');
    item.className = 'form-group feature-card';
    item.style.marginBottom = '1rem';
    item.innerHTML = `
        <input type="text" class="form-control" placeholder="Company Name" oninput="updateExpPreview()">
        <input type="text" class="form-control" placeholder="Role" style="margin-top:0.5rem" oninput="updateExpPreview()">
        <textarea class="form-control" placeholder="Description" style="margin-top:0.5rem" oninput="updateExpPreview()"></textarea>
    `;
    list.appendChild(item);
}

function updateExpPreview() {
    const expList = document.getElementById('experienceList');
    const prevExpList = document.getElementById('prevExpList');
    if (!prevExpList) return;
    
    prevExpList.innerHTML = '';
    const items = expList.querySelectorAll('.feature-card');
    items.forEach(item => {
        const inputs = item.querySelectorAll('input, textarea');
        const div = document.createElement('div');
        div.style.marginBottom = '1rem';
        div.innerHTML = `<strong>${inputs[0].value}</strong> - ${inputs[1].value}<p>${inputs[2].value}</p>`;
        prevExpList.appendChild(div);
    });
}

// AI Feature Simulation
async function generateAISummary() {
    const title = document.getElementById('jobTitle').value || 'Professional';
    const summaries = [
        `Experienced ${title} with a proven track record of delivering high-quality results. Skilled in strategic planning and team leadership.`,
        `Dedicated ${title} passionate about innovation and continuous improvement. Strong analytical and problem-solving abilities.`,
        `Results-oriented ${title} with expertise in driving growth and efficiency. Excellent communicator and collaborator.`
    ];
    const randomSummary = summaries[Math.floor(Math.random() * summaries.length)];
    document.getElementById('summary').value = randomSummary;
    updatePreview();
}
