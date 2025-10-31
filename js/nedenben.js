// Neden Ben Sayfası JavaScript

let currentReason = 0;
const reasons = ['reason1', 'reason2', 'reason3'];
const mainQuestion = document.getElementById('mainQuestion');
const continueBtn = document.getElementById('continueBtn');

mainQuestion.addEventListener('click', function() {
    if (currentReason < reasons.length) {
        document.getElementById(reasons[currentReason]).classList.add('visible');
        currentReason++;

        if (currentReason === reasons.length) {
            setTimeout(() => {
                continueBtn.classList.add('visible');
            }, 300);
        }
    }
});
