var invincibleLoremIpsum = {
    sentences : [
        "It's time, Mark.",
        "What will you have after 500 years?!",
        "You dad, I'd still have you.",
        "Think Mark, think!",
        "I made some chicken, but I also heated up some authenitc German bratwurst, flown in special today.",
        "I had a pretty interesting day.",
        "Mark got his powers.",
        "You're Atom Eve.",
        "Sorry I'm late, honest to god a dragon was attacking Hong Kong, I stopped it.",
        "Guess whos finally getting this powers?!",
        "Pretty sure, threw a thrash bag into space at work.",
        "If you're up for it I'll make some time for training.",
        "I'm gonna be able to fly.",
        "This is gonna be a little awkard for both of us.",
        "You may have noticed I'm not like normal dads.",
        "You're mother and I think it's time I told you the truth.",
        "Millions of miles from here, in deep space, is the planet Viltrum.",
        "I volunteered to relocate to Earth to be it's sole protector.",
        "I know this is a lot to take in at one time.",
        "You're half Viltrumite son.",
        "Mark Grayson, Invincible.",
        "Put some pants on and let's get in the sky my boy.",
        "You don't want to fall so you're gonna have trouble relaxing.", 
        "It's kind of like peeing your pants on purpose.",
        "You can wear yourself out flying.",
        "Land over there.",
        "Slow down.....land...I said land, why arent't you slowing down?",
        "I guess that still counts as a landing.",
        "I'm Art Rosenbaum kid, pleasure to finally meet you.",
        "Prom dresses by day, indestructable super suits by night.",
        "Am I getting a costume?!",
        "Do you make dad's costumes?",
        "I dont know about the orange and yellow, it's a little loud.",
        "Our children reminds of the joys in life, it brings us back, shows us what life is all about. This is humanity.",
        "Go Mark go Mark!",
        "Why did you make me do this?",
        "You're fighting so you could watch everyone around you die.",
        "You'll outlast every fragile, insignificant being on this planet.",
        "You'll live to see this world crumble to dust and blow away.",
        "Everyone and everything you know will be gone.",
        "This is the scene in downtown Chicago, the worlds changed.",
        "Omni-Man and Invincible touched down here during their battle.",
        "The damage, you can see behind me, was done in a matter of minutes before they carried their fight elsewhere.",
        "And we're all asking the same question. How could someone who promised to keep us safe - to protect us against any threat - become that threat.",
        "Thankfully, the Guardians of the Globe and Atom Eve are on the scene.",
        "There has been no sign of Omni-Man or Invincible since yesterday.",
        "Hello son, it's been a while.",
        "I think.....I think I miss my wife.",
        "This is Earth, not Urath?",
        "Thraxans told me that they needed my help.",
        "You called Mom a pet.",
        "There's the great Nolan.",
        "Lukan found you first I see, glad you haven't gone too soft.",
        "Lukan was weak, now he's dead.",
        "I'll kill you for what you did to these people.",
        "Because you're Nolan's son, I'll make this quick.",
        "Why so worries Nolan? If your son dies he never deserved to live.",
        "Mark what are you doing? She's tearing you apart.",
        "Stop holding back or you're gonna get us both killed",
        "Dont think, act. You need to fight like a Viltrumite.",
        "If you don't do this, we're all dead, you, me, your brother, and every single Thraxan on this planet.",
        "Do you regret attacking my family now, do you?!",
        "Mark, are you okay?",
        "I thought you were stronger. You told me you were stronger!",
        "My name is Anissa, and I am an agent of the Viltrum Empire.",
        "Killing you is not my task.",
        "I can't live in your world, I tried, but I cant.",
        "Hello Mark, when are you coming home?",
        "Kregg, you came all the way out here for me?",
        "It seems you've passed inspection, finally fit for your execution.",
        "Is the Mark Grayson of this dimension a risk taker?",
        "Did you know your identity is public in almost half of the realities you exist in?",
        "Oh god, you're that guy.",
        "I am Angstrom Levy and you made me into a monster!",
        "I thought sapiens were extinct. I was but a hatchling when I last tasted their succulent flesh.",
        "You know I havent encountered him in any other dimension yet.",
        "Look, I saw the portal, I know you're from another dimension.",
        "You're okay Oliver, it's going to be okay.",
        "I've got a dimension all picked out, where the ground is eight stories lower than it is here.",
    ],

    words : [
        "Mark",
        "Grayson",
        "Invincible",
        "Omni",
        "Cecil",
        "fly",
        "laser",
        "clone",
        "dead",
        "Atom",
        "Allan",
        "Viltrum",
        "Thraxan",
        "Conquest",
        "Anissa",
        "Eve",
        "Amber",
        "William",
        "Angstrom",
        "dimensions",
        "Martians",
        "Sequids",
        "Urath",
        "civlians",
        "global",
        "defense",
        "agency",
        "invulnerable",
        "Red-Rush",
        "Immortal",
        "Rexsplode",
        "of",
        "the",
        "it",
        "they",
        "were",
        "there",
        "are",
        "problems",
        "feeling",
        "weak",
        "strong",
        "legion",
        "domination",
        "Robert",
        "Kirkman",
    ]
}

document.addEventListener ("DOMContentLoaded", function (){
    const sentenceOption = document.getElementById("sentenceOption");
    const wordOption = document.getElementById("wordOption");
    const generateButton = document.querySelector('button[name="generateText"]');
    const outputBox = document.querySelector('.output-box');

    sentenceOption.addEventListener("click", function() {
        if (!sentenceOption.classList.contains("selected")) {
            sentenceOption.classList.add("selected");
            wordOption.classList.remove("selected");
        }
    });

    wordOption.addEventListener("click", function() {
        if (!wordOption.classList.contains("selected")) {
            wordOption.classList.add("selected");
            sentenceOption.classList.remove("selected");
        }
    });

    generateButton.addEventListener("click", function() {
        let numberOfItems = parseInt(document.querySelector('input[type="number"]').value);
    
        let selectedOption = sentenceOption.classList.contains("selected") ? "sentences" : "words";
        let generatedText = "";
    
        for (let i = 0; i < numberOfItems; i++) {
            let randomIndex = Math.floor(Math.random() * invincibleLoremIpsum[selectedOption].length);
            generatedText += invincibleLoremIpsum[selectedOption][randomIndex];
    
            if (selectedOption === "words" && i !== numberOfItems - 1) {
                generatedText += " ";
            }
        }
    
        // Add a period at the end if generating words
        if (selectedOption === "words") {
            generatedText += ".";
        }
    
        outputBox.textContent = generatedText;
    });
});
