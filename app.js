const textBox = document.querySelector('.textbox');
const textEl = document.querySelector('p');

document.addEventListener('keydown', function(event){
    textBox.style.display = "block"
    if (!event.ctrlKey && !event.altKey && !event.metaKey) {
        if (event.key === "Backspace") {
            event.preventDefault();
            let text = textBox.textContent;
            textBox.textContent = text.slice(0, -1);
        } else if (event.key.length === 1) {
            let char = event.shiftKey ? event.key.toUpperCase() : event.key;
            textBox.textContent += char;
        }
    }
});
