function exportPDF() {
    const element = document.getElementById('resumePreview');
    if (!element) return;

    const opt = {
        margin:       0,
        filename:     'BioCraftPro_Document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Special handling for landscape certificates
    if (window.location.pathname.includes('certificate-generator')) {
        opt.jsPDF.orientation = 'landscape';
    }

    // Special handling for ID cards (smaller size)
    if (window.location.pathname.includes('id-card-generator')) {
        opt.jsPDF.format = [100, 150];
    }

    html2pdf().set(opt).from(element).save();
}
