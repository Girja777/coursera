(function (window) {

/*
Hello Yara
Good Bye Johnysin
Good Bye Jacky
Good Bye Jocker
Hello Pallavi
Hello Fraud
Hello Luca
Hello Police
Hello Laura
Good Bye Jimmy



*/


var names = ["Yara", "Johnysin", "Jacky", "Jocker", "Pallavi", "Fraud", "Larry", "Police", "Laura", "Jimmy"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);