
// Get the video
var video = document.getElementById("myvideo");
//

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [

    "I imagine the objective truth to be an ocean. Within this ocean the amount of liquid always remains the same. Knowing the objective truth means to have knowledge of everything from every possible perspective. I imagine a fluid multidimensional universal grid mapping the entire ocean and quantifying each perspective. My place within this ocean is in the middle of my own personal grid. One that corresponds with the universal one. Both are constellations of universal knowledge. The difference between my constellation and the universal constellation is in the visibility of the dots and the lines connecting the dots. In my own constellation I barely see any dots. I am also barely aware of the potential of connecting the dots. This is my Memory Theatre...",
    // "I'm being taught coding for the first time. They show me how to draw a 200x200 pixels square. If I just copy paste I will only draw a 200x200 pixels square. Understanding this 200x200 pixels square, I realise I am not just drawing a 200x200 square. I am actually drawing the potential of a rectangle. I watch the 200x200 rectangle in the browser and realise I'm not just drawing the potential of a rectangle. I am also drawing the potential of space. Additionally I am drawing the potential interaction of the potential of a rectangle and the potential of the space. Seeing this interaction I understand that object and space are interacting with each other. I understand that the object and the space are mirroring each other. I also understand that the object and the space are interchangeable. This is my Memory Theatre..."

  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
