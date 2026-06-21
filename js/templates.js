const resumeTemplates = [
    {
        id: 'modern',
        name: 'Modern Executive',
        style: `
            #resumePreview { font-family: 'Inter', sans-serif; color: #333; }
            #previewHeader { background: #4f46e5; color: white; padding: 2rem; }
        `
    },
    {
        id: 'minimal',
        name: 'Minimalist',
        style: `
            #resumePreview { font-family: 'Serif', serif; color: #000; }
            #previewHeader { border-bottom: 2px solid #000; padding-bottom: 1rem; }
        `
    }
];

function applyTemplate(id) {
    const template = resumeTemplates.find(t => t.id === id);
    if (!template) return;
    
    let styleTag = document.getElementById('templateStyle');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'templateStyle';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = template.style;
}
