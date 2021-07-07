function badtime() {
    console.log("%c ha...", "color: darkred;");
    console.log("%c ha...", "color: darkred;");
    console.log("%c You do know what filthy people like you should be doing... ?", "color: #010101; font-size: 0.5em;");
    console.log("%c Y O U S H O U L D B E B U R N I N G I N", "font-size: 2em; color: darkred;");
    console.log("%c H E L L", "font-size: 5em; color: red;");
};

function getaquote() {
	var messages = ["\"Goodbyes aren't allowed in my town. Just see-you-laters.\"", "\"WHY IS THIS PERSON TRYING TO SELL ME SOMETHING THIS IS A HAMBURGER RESTAURANT I'M JUST TRYING TO SURVIVE\"", "\"Dispite everything, it's still you.\"", "\"I can't go to hell, I'm all out of vacation days.\""];
// made from an old r/Undertale post: https://www.reddit.com/r/Undertale/comments/6siigr/what_are_your_favorite_quotes_from_undertale/

var message = messages[Math.floor(Math.random()*messages.length)];
console.log(message);
return message;
};

// now to run!
var message = getaquote();
badtime();
