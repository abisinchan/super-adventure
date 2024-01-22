
// The keys and notes variables store the piano keys

//array contains strings, each representing an ID of an HTML element (look at index.html)
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

//empty to store objects later
const notes = [];

// looping through the elements of the keys array and pushing each key to the notes array
keys.forEach(function(key){
    notes.push(document.getElementById(key));

    /*
    -Think of keys as a list of names.
    -forEach is like saying, "For each name in the list, do something."
    -The function(key){ ... } part is the "something" you do for each name. Here, key is a  placeholder for each name as you go through the list.

    Inside the forEach: notes.push(document.getElementById(key));:
    -document.getElementById(key) is like asking, "Hey, on my webpage, can you find the part that has this specific name?"
    -Each key in your list of names is used to find a specific part of your webpage.
    When it finds that part of the webpage, notes.push(...) is like adding that part to a new list called notes.

    -This is like going through a shopping list (keys), finding each item in the store, and then putting them in your cart (notes).
    */
   
  })

/*
1.
  After the second comment, create a function named keyPlay that changes the background color of the keys when they are pressed down.

  Be sure to use the .target property in the function because the target is being modified in this case. 
*/

// Write named functions that change the color of the keys below
function keyPlay(event) {
    event.target.style.backgroundColor = "blue";
    
    /*
    The keyPlay function is designed to be a general-purpose function that can handle events from any of the piano keys. You don't know in advance which key will be pressed, so you need a way to determine this at the time the event occurs.
    By using event.target, the function automatically adapts to whichever key is pressed, applying the style change to that specific key.
    */

}

/*
2.  
  Next, create a function named keyReturn that returns the background color of the keys to their default with an empty string '' when the mouse is released on the element. Be sure to use the .target property.
*/

function keyReturn(event){
    event.target.style.backgroundColor = '';
        }


/*
3.  
  Now that you have created two functions that change the color of the key elements, you must assign them as the values of event handler properties.

Create a named function and leave the code block blank for now. This function will be used later on to assign events to the keys, so it should take one parameter — you can call it note.

4.  
  Inside the function, create an event handler that runs the keyPlay as an event handler when a mousedown event fires on any note.

5. 
  Inside the function, create a second event handler property that runs the keyReturn when a mouseup event fires on any note.
*/

// Write a named function with event handler properties
function assignKeyEvents(note) {
    note.addEventListener('mousedown', keyPlay); 
    note.addEventListener('mouseup', keyReturn);
}

/*
6.  
  At the beginning of the code, we have variable name assignments for the keys array and the empty notes array. There is also a function looping through the keys array and pushing the keys elements to the notes array to be assigned a variable name.

  Now, you must create a .forEach loop that will pass the elements in the notes array through your event assignment function.
*/

// Write a loop that runs the array elements through the function
notes.forEach(assignKeyEvents);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}