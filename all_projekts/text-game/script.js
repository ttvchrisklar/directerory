const textArea = document.getElementById("text-Area"),
    textChoise = document.getElementById("text-Choise");
var storyText = {
        1: `your name is Derik you were a normal high-school student average grades, single, loner and a shut in, you never leave home except for school or if you need something.`,
    },
    storyChoise = {
        1: {
            1: `button 1`,
            2: `button 2`,
        },
    },
    storyPart = 1;

// textArea.innerText = `${storyText[1]}`;

function displayText(storyPart) {
    textArea.innerHTML = `${storyText[storyPart]}`;
    textChoise.innerHTML = `<p class ="choise-text">${storyChoise[storyPart][1]}</p><br> <p class ="choise-text">${storyChoise[storyPart][2]}</p>`;
}

//TODO: make base system for the text game.
//TODO: an easy way to expand text.
//TODO: an easy way to expand on choises.
