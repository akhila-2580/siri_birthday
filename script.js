const correctPassword = "25-08-2005";

const pages = [
    "page1",
    "page2",
    "page3",
    "page4",
    "page5",
    "page6",
    "page7"
];

let musicPlaying = false;

const music = document.getElementById("birthdayMusic");


/* PASSWORD */

function checkPassword() {

    const input = document
        .getElementById("password")
        .value
        .trim();

    const error = document.getElementById("error");

    if (input === correctPassword) {

        document
            .getElementById("page1")
            .classList.add("hidden");

        document
            .getElementById("page2")
            .classList.remove("hidden");

        error.textContent = "";

        startConfetti();

        music.play()
            .then(() => {

                musicPlaying = true;

                document
                    .getElementById("musicBtn")
                    .textContent = "🔊";

            })
            .catch(() => {

                musicPlaying = false;

            });

    } else {

        error.textContent =
            "Oops Siri! That's not it 😜 Try again!";

        const card =
            document.querySelector(".password-card");

        card.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(10px)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 400
            }
        );

    }
}


/* ENTER KEY */

document
    .getElementById("password")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {
                checkPassword();
            }

        }
    );


/* PAGE NAVIGATION */

function nextPage(pageNumber) {

    pages.forEach(page => {

        document
            .getElementById(page)
            .classList.add("hidden");

    });

    document
        .getElementById("page" + pageNumber)
        .classList.remove("hidden");

    window.scrollTo(0, 0);


    if (pageNumber === 3) {
        startTyping();
    }


    if (pageNumber === 6) {
        resetGift();
    }


    if (pageNumber === 7) {

        startFireworks();

        startConfetti();

    }
}


/* CONFETTI */

function startConfetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 120; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.background =
            randomColor();

        piece.style.width =
            Math.random() * 8 + 5 + "px";

        piece.style.height =
            Math.random() * 15 + 8 + "px";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);
    }
}


function randomColor() {

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#c77dff",
        "#ffffff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}


/* LETTER */

const letter = `
Dear Siri ❤️,

Today is your special day, and I just wanted to remind you
how wonderful you are.

Some people come into our lives unexpectedly and slowly
become an important part of our story. You are one of those people.

Thank you for all the laughter, crazy conversations,
random moments, support, and beautiful memories.

I hope this birthday begins a chapter filled with happiness,
success, peace, exciting opportunities and dreams coming true.

I hope you always have reasons to smile, people who genuinely
care about you, and the courage to chase everything you dream of.

And most importantly...

Never forget how special you are.

Happy Birthday, Siri! 🎂❤️

Keep smiling, keep dreaming and keep being the amazing person
you are.

Here's to many more memories, laughs and crazy moments together. 🫶
`;

let typingStarted = false;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");

    const button =
        document.getElementById("letterButton");

    let index = 0;

    function type() {

        if (index < letter.length) {

            textElement.textContent +=
                letter.charAt(index);

            index++;

            setTimeout(type, 20);

        } else {

            button.classList.remove("hidden");

        }
    }

    type();
}


/* FLIP CARDS */

function flipCard(card) {

    card.classList.toggle("flipped");

}


/* GIFT */

function openGift() {

    const gift =
        document.getElementById("giftBox");

    const hint =
        document.getElementById("giftHint");

    const button =
        document.getElementById("finalButton");

    if (gift.classList.contains("open")) {
        return;
    }

    gift.classList.add("open");

    hint.textContent =
        "You found your surprise! ❤️";

    startConfetti();

    setTimeout(() => {

        button.classList.remove("hidden");

    }, 800);
}


function resetGift() {

    const gift =
        document.getElementById("giftBox");

    const button =
        document.getElementById("finalButton");

    gift.classList.remove("open");

    button.classList.add("hidden");

    document
        .getElementById("giftHint")
        .textContent = "Tap me 🎁";
}


/* MUSIC */

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        document
            .getElementById("musicBtn")
            .textContent = "🔇";

    } else {

        music.play();

        musicPlaying = true;

        document
            .getElementById("musicBtn")
            .textContent = "🔊";

    }
}


/* FIREWORKS */

function startFireworks() {

    const container =
        document.getElementById("fireworks");

    container.innerHTML = "";

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createFirework();

        }, i * 250);

    }
}


function createFirework() {

    const container =
        document.getElementById("fireworks");

    const centerX =
        Math.random() * window.innerWidth;

    const centerY =
        Math.random() *
        (window.innerHeight * 0.65);

    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("div");

        particle.style.position = "fixed";

        particle.style.left =
            centerX + "px";

        particle.style.top =
            centerY + "px";

        particle.style.width = "5px";

        particle.style.height = "5px";

        particle.style.borderRadius = "50%";

        particle.style.background =
            randomColor();

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 150 + 50;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1200 + Math.random() * 800,

                easing: "ease-out"
            }
        );

        container.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 2000);

    }
}