const startBtn = document.getElementById('startBtn');
const startPage = document.getElementById('startPage');
const progressPage = document.getElementById('progressPage');
const progressBar = document.getElementById('progressBar');
const congratsOverlay = document.getElementById('congratsOverlay');
const closeBtn = document.getElementById('closeBtn');

let isRunning = false; // حالة الشريط

startBtn.addEventListener('click', () => {
    if(isRunning) return; // يمنع إعادة التشغيل
    isRunning = true;

    // إظهار صفحة شريط التقدم فوق صفحة البداية
    progressPage.style.display = 'flex';

    let width = 0;
    const duration = 60; // ثانية
    const intervalTime = 1000; // تحديث كل ثانية
    const increment = 100/duration;

    const interval = setInterval(() => {
        width += increment;
        if(width >= 100) width = 100;
        progressBar.style.width = width + '%';

        if(width >= 100){
            clearInterval(interval);
            progressPage.style.display = 'none';
            congratsOverlay.style.display = 'flex';
            isRunning = false;
        }
    }, intervalTime);
});

closeBtn.addEventListener('click', () => {
    congratsOverlay.style.display = 'none';
    progressBar.style.width = '0%';
});