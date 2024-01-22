
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

    /*
    Here's what the assignKeyEvents function does, in simple terms:

    Function Name - assignKeyEvents:
    Think of this as the note you're writing to each friend (each piano key).
    
    Parameter - note:
    This represents a single friend (a single piano key). When you use this function, you're talking to one friend at a time.

    note.addEventListener('mousedown', keyPlay);:
    This is like telling your friend, "When someone taps you on the shoulder, turn blue."

    addEventListener is a way to tell your friend to listen for a specific action (like a shoulder tap, which is mousedown in computer terms).

    'mousedown' is the action of pressing the mouse button down over an element. It's like the shoulder tap.

    keyPlay is what you want your friend to do when they get tapped on the shoulder. In our earlier code, we said keyPlay changes the color to blue.

    note.addEventListener('mouseup', keyReturn);:
    This is like telling your friend, "When they stop tapping your shoulder, go back to your normal color."

    Again, addEventListener is used to tell your friend to listen for another action - this time when the shoulder tap stops (mouseup).

    keyReturn is the instruction for what to do when the tapping stops. In our earlier code, keyReturn changes the color back to normal.

    So, assignKeyEvents is basically a set of instructions you're giving to each of your friends (each piano key) on how to react to being tapped on the shoulder and when the tapping stops.
    */

}

/*
6.  
  At the beginning of the code, we have variable name assignments for the keys array and the empty notes array. There is also a function looping through the keys array and pushing the keys elements to the notes array to be assigned a variable name.

  Now, you must create a .forEach loop that will pass the elements in the notes array through your event assignment function.
*/

// Write a loop that runs the array elements through the function
notes.forEach(assignKeyEvents);

    /*
    notes.forEach(...):
    Think of notes as your list of friends.

    forEach is like going through each name on your list one by one. It's a way to make sure every friend gets your message.

    assignKeyEvents:
    This is the note you wrote earlier with the instructions on what to do when they are tapped on the shoulder (mousedown) and when the tapping stops (mouseup).

    When you write notes.forEach(assignKeyEvents);, you're essentially saying, "For each of my friends in this list, I want to give them the instructions I wrote in assignKeyEvents."
    */

/*
7.
Now, the program knows what to do when each piano key has a mousedown or mouseup event fired on it. Run your code and see how it works! 
*/


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

/*
8.
  Next, there are variables that represent the progress buttons in the song box that allow students to progress the piano.

  The nextOne, nextTwo, nextThree, and startOver change the lyrics and musical notes of the song to help the student play along. In the beginning of the song the only button the student needs is nextOne. Because of this the .hidden properties of the other buttons are assigned the value of true.

  Now you must create events on all the progress buttons. 
  
  First, create an event handler property with a click event on the nextOne element.

9.
  To begin modifying the song box, you must switch the progress buttons first.

  Using an anonymous event handler function, make the following changes to the button that appears after nextOne is clicked:

  Reveal the nextTwo button by changing the .hidden property to make the nextTwo button appear.
  Hide the nextOne button by changing the .hidden property to hide the nextOne button.

  10.
    Next, a click event firing on the nextOne must change the music notes that guide the piano student through the song.

    Add the following changes to the nextOne event handler function so the musical notes change when the button is clicked.

    Change the content of the element with an ID of letter-note-five to D.
    Change the content of the element with an ID of letter-note-six to C.

*/

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function() {
  
  // .hidden property is a direct property of an HTML element and is not part of the style object
  nextTwo.hidden = false;
  nextOne.hidden = true;

   // Changing the musical notes
  document.getElementById('letter-note-five').innerHTML= 'D';
  document.getElementById('letter-note-six').innerHTML= 'C';
});

/*
11.
  Create another event handler property with a click event on the button element called nextTwo. Then assign the property to the value of an anonymous event handler function.

12.
  Make the following changes to the button that appears when nextTwo is clicked:

  Reveal the nextThree button by changing the .hidden property to make the nextThree button appear.
  Hide the nextTwo button by changing the .hidden property to hide the nextTwo button.

13.
  Once the student has reached this point of the Happy Birthday song the lyrics changes from HAP-PY BIRTH-DAY TO YOU to HAP-PY BIRTH-DAY DEAR FRI-END.

  Make the following changes to the lyrics in the function when the button is clicked:

  Change the content of the element with an ID of word-five to DEAR.
  Change the content of the element with an ID of word-six to FRI-.

14.
  Now you have the lyrics HAP-PY BIRTH-DAY DEAR FRI-. To finish the line, you must add the -END to the song box under the piano.

  The -END element is stored in the lastLyric variable.

  Add a statement to the event handler function for nextTwo that changes the display property of lastLyric to 'inline-block'.

15.
  A click event firing on the second button must also change the music notes to guide the piano student through the song.

  Add the following changes to the nextTwo event handler function so the musical notes change when the button is clicked:

  Change the content of the element with an ID of letter-note-three to G.
  Change the content of the element with an ID of letter-note-four to E.
  Change the content of the element with an ID of letter-note-five to C.
  Change the content of the element with an ID of letter-note-six to B.

*/

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

   // Changing the lyrics
  document.getElementById('word-five').innerHTML= 'DEAR';
  document.getElementById('word-six').innerHTML= 'FRI-';

   // Display the '-END' lyric
lastLyric.style.display = 'inline-block';

//Changing Musical Notes

document.getElementById('letter-note-three').innerHTML = 'G';
document.getElementById('letter-note-four').innerHTML = 'E';
document.getElementById('letter-note-five').innerHTML = 'C';
document.getElementById('letter-note-six').innerHTML = 'B';

});

/*
16.
  Create an event handler property with a click event on the nextThree element.

17.
  Using an anonymous event handler function, make the following changes to the button that appears when nextThree is clicked:

  Reveal the startOver button by changing the .hidden property to make the startOver button appear.
  Hide the nextThree button by changing the .hidden property to hide the nextThree button.

18.
  Add the following changes to the nextThree event handler function so the lyrics change when this button is clicked.

  Change the content of the element with an ID of word-one to HAP-.
  Change the content of the element with an ID of word-two to PY.
  Change the content of the element with an ID of word-three to BIRTH.
  Change the content of the element with an ID of word-four to DAY
  Change the content of the element with an ID of word-five to TO.
  Change the content of the element with an ID of word-six to YOU!.
19.
Add the following changes to the nextThree event handler function so the musical notes change when the button is clicked.

Change the content of the element with an ID of letter-note-one to F.
Change the content of the element with an ID of letter-note-two to F.
Change the content of the element with an ID of letter-note-three to E.
Change the content of the element with an ID of letter-note-four to C.
Change the content of the element with an ID of letter-note-five to D.
Change the content of the element with an ID of letter-note-six to C.

20.
Now you have the lyricsHAP-PY BIRTH-DAY TO YOU! -END — that couldn’t be right! To finish the line you must get rid of the “-end” in the song box.

Add a statement to the event handler function for nextThree that changes the display property of lastLyric back to 'none'.

*/
// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function() {
  startOver.hidden = false;
  nextThree.hidden = true;

   // Changing the lyrics
  document.getElementById('word-one').innerHTML= 'HAP-';
  document.getElementById('word-two').innerHTML= 'PY';
  document.getElementById('word-three').innerHTML= 'BIRTH';
  document.getElementById('word-four').innerHTML= 'DAY';
  document.getElementById('word-five').innerHTML= 'TO';
  document.getElementById('word-six').innerHTML= 'YOU!';

//Changing Musical Notes

document.getElementById('letter-note-one').innerHTML = 'F';
document.getElementById('letter-note-two').innerHTML = 'F';
document.getElementById('letter-note-three').innerHTML = 'E';
document.getElementById('letter-note-four').innerHTML = 'C';
document.getElementById('letter-note-five').innerHTML = 'D';
document.getElementById('letter-note-six').innerHTML = 'C';

   // Hide the '-END' lyric
lastLyric.style.display = 'none';
});

/*
Congrats, you’ve completed the Piano Player! Play around with the piano and the song box to fire all the events.
*/

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