let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

function handleInput(key) {
    switch (key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x:0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x:-1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x:1, y: 0}
            break
    }
}

window.addEventListener('keydown', e => {
    handleInput(e.key);
});

document.getElementById('up').addEventListener('click', () => {
    handleInput('ArrowUp');
});

document.getElementById('down').addEventListener('click', () => {
    handleInput('ArrowDown');
});

document.getElementById('left').addEventListener('click', () => {
    handleInput('ArrowLeft');
});

document.getElementById('right').addEventListener('click', () => {
    handleInput('ArrowRight');
});

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}