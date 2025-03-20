document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('หั่นแน่สิเบี่ง code 555555');
});

// ป้องกันกด F12 และ Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', (e) => {
    // กด F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        alert('หั่นแน่สิเบี่ง code 555555');
    }

    // กด Ctrl+Shift+I หรือ Ctrl+Shift+J
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('หั่นแน่สิเบี่ง code 555555');
    }
});
