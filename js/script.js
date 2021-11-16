/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
 ***/

// an array of objects that includes a quote, source, citation, and year
let quotes = [
    { quote: "I can find love, but I can\'t find money.", source: "Yuta Nakamoto", citation: "Buzzfeed Would You Rather Game", year: 2018 },
    { quote: "Remember, licking doorknobs on other planets is illegal!", source: "Spongebob", citation: "One Krabs Trash", year: 2002 },
    { quote: "I lived in America four years that\'s why I\'m here.", source: "SM Rookies Promo Video", citation: "Jae Jung", year: 2013 },
    { quote: "Meow means woof in cat.", source: "George Carlin", citation: "Good Reads", year: "Unknown" },
    { quote: "If I looked like that I wouldn\'t leave the house all day. Not for all the bells in the world", source: "Opal", citation: "Animal Crossing Population Growing", year: 2002 }
];


/***
 * `getRandomQuote` function
 ***/

/* this function uses math.random to cycle through
   the quotes in the above array at random. It takes a number from 0 to the length of the
   array to return a quote */

function getRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}


/***
 * `printQuote` function
 ***/

/* the printQuote function adds html and checks to see if the quote has a citation and year
   if it has a citation or year then it will add that html and if not it closes the p tag for source */

function printQuote() {

    const see = getRandomQuote();
    let show = `<p class="quote"> ${see.quote}</p> <p class="source"> ${see.source}`;

    if (see.citation !== '') {
        show += `<span class="citation"> ${see.citation}</span>`;
    } else if (see.year !== "Unknown") {
        show += `<span class="year> ${see.year}</span>"`;
    } else {
        show += `${see.source}</p>`;
    }
    document.getElementById('quote-box').innerHTML = show;
}

printQuote();





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);