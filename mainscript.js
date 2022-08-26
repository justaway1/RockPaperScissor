//Const variables

const result = document.getElementById('results');
const humanWeapon = document.getElementById('human-weapon');
const cpuWeapon = document.getElementById('cpu-weapon');
const humanScore = document.getElementById('human-score');
const cpuScore = document.getElementById('cpu-score');



//Main Logic functions

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
rock.addEventListener('click', handleRock);
paper.addEventListener('click', handlePaper);
scissor.addEventListener('click', handleScissor);

function computerChoice() {
    return Math.floor(Math.random() * 3)
}

function handleRock(e, cpuChoice) {
    cpuChoice = computerChoice();
    if (e.target === rock) {
        humanWeapon.innerHTML = "<img src='./images/rock.png'>"
        humanWeapon.classList.add('selectedImage');
    }
    if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
    }
}

function handlePaper(e, cpuChoice) {
    cpuChoice = computerChoice();
    if (e.target === paper) {
        humanWeapon.innerHTML = "<img src='./images/paper.png'>"
        humanWeapon.classList.add('selectedImage')
    } if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
    }
}
function handleScissor(e) {
    cpuChoice = computerChoice();
    if (e.target === scissor) {
        humanWeapon.innerHTML = "<img src='./images/scissor.png'>"
        humanWeapon.classList.add('selectedImage')
    } if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
    } else if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
    }
}



