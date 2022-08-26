//Const variables

const result = document.getElementById('results');
const humanWeapon = document.getElementById('human-weapon');
const cpuWeapon = document.getElementById('cpu-weapon');
const humanScore = document.getElementById('human-score');
const cpuScore = document.getElementById('cpu-score');



//Main Logic functions

const rock = document.getElementById('rock');
rock.addEventListener('click', handleRock);

function handleRock(e) {
    if (e.target === rock) {
        humanWeapon.innerHTML = "<img src='./images/rock.png'>"
        humanWeapon.classList.add('rockImage');
    }
}

