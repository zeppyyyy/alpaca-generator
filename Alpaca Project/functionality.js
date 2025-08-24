const alpacaBackground = document.getElementById("alpaca-background");
const backgroundBtn = document.getElementById("background-btn");
const styleButtons = document.getElementById("style-buttons");
const randomBtn = document.getElementById("random-btn");
const downloadBtn = document.getElementById("download-btn");
const current = document.getElementsByClassName("active");
const activeStyle = document.getElementsByClassName("active-style");

const backgroundColors = [
    {
        name: "Cornflower Blue",
        value: "#5596F6"
    },
    {
        name: "Clear Blue",
        value: "#2A7BF4"
    },
    {
        name: "Fun Blue",
        value: "#2A5CA7",
    },
    {
        name: "Wild Blue Yonder",
        value: "#7A8FAF"
    },
    {
        name: "Marine",
        value: "#002966"
    },
    {
        name: "Navy Blue",
        value: "#00193D"
    },
    {
        name: "Pale Olive Green",
        value: "#9FD966"
    },
    {
        name: "Green Snake",
        value: "#74BD29"
    },
    {
        name: "Moss Green",
        value: "#6A9440"
    },
    {
        name: "Pastel Gray",
        value: "#CCCCCC"
    },
    {
        name: "Ironside Grey",
        value: "#666666"
    },
    {
        name: "Dune",
        value: "#333333"
    },
    {
        name: "Flame",
        value: "#E85E23"
    },
    {
        name: "Red Fox",
        value: "#CB4C15"
    },
    {
        name: "Russet",
        value: "#9F370A"
    },
    {
        name: "Bright Sun",
        value: "#FCD33F"
    },
    {
        name: "Gold Tips",
        value: "#E6B60D"
    },
    {
        name: "Ochre",
        value: "#CF8E10"
    }
];

const alpacasParts = [
    {
        type: "hair",
        parts : [
            "Default", "Bang", "Curls", "Elegant", "Fancy", "Quiff", "Short"
        
        ]
    },
    {
        type: "ears",
        parts : [
            "Default", "Tilt Backward", "Tilt Forward"
        ]
    },
    {
        type: "eyes",
        parts : [
            "Default", "Angry", "Naughty", "Panda", "Smart", "Star"
        ]
    },
    {
        type: "mouth",
        parts : [
            "Default", "Astonished", "Eating", "Laugh", "Tongue"
        ]
    },
    {
        type: "neck",
        parts : [
            "Default", "Bend Backward", "Bend Forward", "Thick"
        ]
    },
    {
        type: "leg",
        parts : [

            "Default", "Bubble Tea", "Cookie", "Game Console", "Tilt Backward", "Tilt Forward"
            
        ]
    },
    {
        type: "accessories",
        parts : [
            "Earings", "Flower", "Glasses", "Headphone"
        ]
    }
];


//  Adding EventListener and functions to each buttons.
alpacasParts.forEach((el) => {
    document.getElementById(`${el.type}-btn`).addEventListener("click", () => {
        styleButtons.innerHTML = "";
        showBtn(el.parts, el.type);
        alpacaElementsChanger(el.parts, el.type);
        activeButton(document.getElementById(`${el.type}-btn`));
    });
}); 


// Adding EventListener and functions to the background button.
backgroundBtn.addEventListener("click", () => {
    styleButtons.innerHTML = "";
    backgroundColors.forEach((el, index) => {
        styleButtons.innerHTML += `
            <button id="background-${index}" class="btn">${el.name}</button>
        `;
    });
    backgroundColorChanger(backgroundColors);

    activeButton(backgroundBtn);
});

// Adding EventListener and functions to the random button.
randomBtn.addEventListener("click", () => {
    styleButtons.innerHTML = "";
    alpacaBackground.style.backgroundColor = backgroundColors[getRandomIndex(backgroundColors)].value;
    alpacasParts.forEach((el) => {
        const randomParts = el.parts[getRandomIndex(el.parts)];
        document.getElementById(`alpaca-${el.type}`).src = `alpaca-assets/${el.type}/${randomParts.replaceAll(' ', '-').toLowerCase()}.png`;
    });

    current[0].className = current[0].className.replace(" active", "");  
    activeStyle[0].className = activeStyle[0].className.replace(" active-style", "");  
});

// Adding EventListener and fucntions to the download button.
downloadBtn.addEventListener("click", () => {

});

// This function serves as randomizer to randomize alpaca's parts.
const getRandomIndex = (arr) => {
    const randomIndex = Math.floor(arr.length * Math.random());
    return randomIndex;
};


// This function is for showing buttons. 
const showBtn = (arr, part) => {
    arr.forEach((el, index) => {
        styleButtons.innerHTML += `
            <button id="${part}-${index}" class="btn">${el}</button>
        `;
    });

};

// This function is for changing the background color of the alpaca.
const backgroundColorChanger = (arr) => {
    arr.forEach((el, index) => {
        document.getElementById(`background-${index}`).addEventListener("click", () => {
            alpacaBackground.style.backgroundColor = el.value;
            styleButtonActive(document.getElementById(`background-${index}`));
        });
    });
};

// This function is for changing the alpaca's parts.
const alpacaElementsChanger = (arr, part) => {
    arr.forEach((el, index) => {
        document.getElementById(`${part}-${index}`).addEventListener("click", () => {
            document.getElementById(`alpaca-${part}`).src = `alpaca-assets/${part}/${el.replaceAll(' ', '-').toLowerCase()}.png`;
            styleButtonActive(document.getElementById(`${part}-${index}`));
        });
    });
}

const activeButton = (id) => {
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    id.className += " active";
};

const styleButtonActive = (id) => {
    // If there's no active-style class
    if (activeStyle.length > 0) {
        activeStyle[0].className = activeStyle[0].className.replace(" active-style", "");
    }

    // Add the active-style class to the current/clicked button
    id.className += " active-style";
}