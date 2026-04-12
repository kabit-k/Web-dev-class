window.addEventListener('DOMContentLoaded', () => {
    const boss = document.getElementById('boss');
    boss.innerText = 'Rajesh Hamal';
    console.log(boss);
});

const boxes = document.getElementsByClassName('box');
console.log(boxes);
for (let i = 0; i < boxes.length; i++) {
    if(i==1){
        boxes[i].innerText = "This is Box 1";
    }
}