// Smooth scroll for all anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const skillData = {
    manual: {
        points: ['Test planning & strategy', 'Writing test cases', 'Bug reporting', 'Regression testing', 'Exploratory testing']
    },
    playwright: {
        points: ['End-to-end automation', 'Page Object Model', 'Cross-browser testing', 'CI/CD integration', 'Network interception']
    },
    selenium: {
        points: ['WebDriver automation', 'Grid & parallel testing', 'Java/Python bindings', 'Cross-browser support']
    },
    api: {
        points: ['REST & SOAP APIs', 'Request/response validation', 'Schema testing', 'Auth testing (JWT, OAuth)']
    },
    postman: {
        points: ['Collection building', 'Environment variables', 'Automated test scripts', 'Newman CLI runner']
    },
    performance: {
        points: ['Load & stress testing', 'k6 scripting', 'Metrics & thresholds', 'Bottleneck analysis']
    },
    cicd: {
        points: ['GitHub Actions', 'Pipeline configuration', 'Automated test runs', 'Reporting integration']
    }
};

let activeSkill = null;

function toggleSkill(el, key) {
    const panel = document.getElementById('skill-panel');

    if (activeSkill === key) {
        panel.classList.remove('open');
        el.classList.remove('active');
        activeSkill = null;
        return;
    }

    document.querySelectorAll('.skill').forEach(s => s.classList.remove('active'));
    el.classList.add('active');

    const data = skillData[key];
    document.getElementById('skill-panel-title').textContent = data.title;
    document.getElementById('skill-panel-list').innerHTML = data.points
        .map(p => `<li>${p}</li>`).join('');

    panel.classList.add('open');
    activeSkill = key;
}