"use strict";
var text = document.getElementById("mainText");
var generateButton = document.getElementById("genBtn");
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why did the math book look sad? Because it had too many problems.",
    "How do you organize a space party? You planet!",
    "I used to play piano by ear, but now I use my hands.",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "I told my computer I needed a break, and now it won't stop sending me cookies.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "I'm reading a book on anti-gravity. It's impossible to put down.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "Why was the math book sad? It had too many problems.",
    "What do you call a fake noodle? An impasta!",
    "How do you organize a space party? You planet!",
    "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How do you make holy water? You boil the hell out of it.",
    "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
    "I'm on a whiskey diet. I've lost three days already.",
    "What's orange and sounds like a parrot? A carrot.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "I told my computer I needed a break, and now it won't stop sending me cookies.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why was the math book sad? It had too many problems.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What's orange and sounds like a parrot? A carrot.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space."
];
function generateJoke() {
    var randomIndex = Math.floor(Math.random() * jokes.length);
    var selectedIndex = jokes[randomIndex];
    if (text) {
        text.textContent = selectedIndex;
    }
}
;
if (generateButton) {
    generateButton.addEventListener('click', generateJoke);
}
;
