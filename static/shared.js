//box 1
const textbox1 = document.getElementById('textBox1');
if (textbox1) {
    textbox1.addEventListener('input', () => {
       localStorage.setItem('teacherName', textbox1.value);
    })
}
const teacher = document.getElementById('teacher');
const teacherName = localStorage.getItem('teacherName');
if (teacher && teacherName) {
    teacher.textContent = teacherName;
}
//box 2
const textbox2 = document.getElementById('textBox2');
if (textbox2) {
    textbox2.addEventListener('input', () => {
        localStorage.setItem('dayListed', textbox2.value);
    })
}
const dayUsed = document.getElementById('today');
const dayListed = localStorage.getItem('dayListed');
if (dayUsed && dayListed) {
    dayUsed.textContent = dayListed;
}
//box 3
const textbox3 = document.getElementById('textBox3');
if (textbox3) {
    textbox3.addEventListener('input', () => {
        localStorage.setItem('weekListed', textbox3.value);
    })
}
const weekUsed = document.getElementById('week');
const weekListed = localStorage.getItem('weekListed');
if (weekUsed && weekListed) {
    weekUsed.textContent = weekListed;
}
//box 4
const textbox4 = document.getElementById('textBox4');
if (textbox4) {
    textbox4.addEventListener('input', () => {
        localStorage.setItem('monthListed', textbox4.value);
    })
}
const monthUsed = document.getElementById('month');
const monthListed = localStorage.getItem('monthListed');
if (monthUsed && monthListed) {
    monthUsed.textContent = monthListed;
}