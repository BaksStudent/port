const descriptions = {
    game:
    {
        text:`This is, and will forever be, my first love. I've been obsessed with game development since I was 15 and have been developing in Unity ever since. While I know game development isn't as prominent in South Africa, I would definitely love to be at a company where I get to do this.`,
        img:"game.png"
    },
    software:
    {
        text:`Just like making games, building applications is a process I have always been interested in—the challenges make it all the more rewarding when the application serves its intended purpose.`,
        img:"software.en.png"
    },
    dev:
    {
        text:`I am a person who likes fixing things that don't function as intended or need troubleshooting, as I enjoy solving problems step by step. This is why DevOps resonates with me, as it thrives on collaborative troubleshooting and iterative refinement`,
        img:"DevOps.png"
    },
    front_end:
    {
        text:`Nothing is more satisfying than being given a canvas and being told to draw—whether I am given free control or working within guidelines, it gives me the platform to deliver exceptional quality.`,
        img:"ui dev.png"
    },
    back_end:
    {
        text:`There is just something so fun and enticing about connecting databases to the front end and transforming information into different, purposeful results. From encryption and hashing to SQL—just give it all to me.`,
        img:"Back-end.png"
    },
    Network:
    {
        text:`This is definitely my secret desire. I just love the process of configuring all the network devices and getting that feeling of satisfaction when everything is working in harmony. Even the troubleshooting parts—I just love the process of finding out what's wrong with a system and fixing it.`,
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
    window.location.href = "Bakang Ramadie CV.pdf";

}
