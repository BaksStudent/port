const descriptions = {
    game:
    {
        text:`This is and will forever be my first love, i've been obsesed with game development since i was 15 and i started developing on unity ever since, now i know game development is not as popular in souht africa but i would definieted like be at a company wherby i do this`,
        img:"game.png"
    },
    software:
    {
        text:`Just like making games, making apps is always a process that i have always been interested it, as such challenges make the more worth it when the application does it intended purpose`,
        img:"software.en.png"
    },
    dev:
    {
        text:`I am a person that likes fixing things that don't fucntion as intended or need troubleshooting as i like solving problems step by step so this is why DevOps reasonates with me as it thrives on collaborative troubleshooting and iterative refinement`,
        img:"DevOps.png"
    },
    front_end:
    {
        text:`Nothing is more satisfy then being given a canvas and being told to draw,whether i am given free control or under guidlines. This gives me the platform to give exceptional quality`,
        img:"ui dev.png"
    },
    back_end:
    {
        text:`There is just something so fun about connecting databases and front-end and using information to create different yet needed results so enticing, from encryption and hashing to sql,Just give it all to me`,
        img:"Back-end.png"
    },
    Network:
    {
        text:`This is definitely my secret desire. I just love the process of configiruing all network devices and then that feeling of satisfaction when everything is working in harmony, even the troubleshooting parts: i just love the process of find out whats wrong eith a process then fixing it`,
        img: "Network-en.png"
    }
    
};


const items = document.querySelectorAll('.feature-item');
const descbox = document.getElementById('featureDescription');
const displayArea = document.getElementById('displayArea');

let currentIndex = 0;
let cycleTime = 15000;

function selectItem(index) {
    items.forEach(i => i.classList.remove('active'));

    const item = items[index];
    const key = item.getAttribute('data-key');

    // Skip if missing key
    if (!key || !descriptions[key]) return;

    item.classList.add('active');

    descbox.textContent = descriptions[key].text;
    descbox.style.fontSize = "large";

    displayArea.style.backgroundImage =
        `url('${descriptions[key].img}')`;
}

function autoCycle() {
    selectItem(currentIndex);
    currentIndex = (currentIndex + 1) % items.length;
}

let cycleInterval = setInterval(autoCycle, cycleTime);

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        clearInterval(cycleInterval);
        currentIndex = index;
        selectItem(index);
        cycleInterval = setInterval(autoCycle, cycleTime);
    });
});

selectItem(0);


const buttons = document.querySelectorAll(".faq-btn");
const answers = document.querySelectorAll(".faq-answer");

function showFAQ(id) {
    buttons.forEach(btn => btn.classList.remove("active"));
    answers.forEach(ans => ans.classList.remove("active"));

    document.querySelector(`.faq-btn[data-answer="${id}"]`).classList.add("active");
    document.getElementById(id).classList.add("active");
}

// CLICK HANDLER
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        showFAQ(btn.getAttribute("data-answer"));
        currentfIndex = [...buttons].indexOf(btn);  // update auto-rotate position
    });
});

// AUTO SELECT EVERY 4 SECONDS
let currentfIndex = 0;
setInterval(() => {
    currentfIndex = (currentfIndex + 1) % buttons.length;
    const nextAnswer = buttons[currentfIndex].getAttribute("data-answer");
    showFAQ(nextAnswer);
}, 15000);

function LoadPDF()
{
    window.location.href = "https://www.google.com";
}