(function (window){
	var byeSpeaker={};
	byeSpeaker.speak=function(name){}
	var speakWord = "Good Bye";
	byeSpeaker.speak=function() {
  console.log(speakWord + " " +name);
}
window.byeSpeaker=byeSpeaker;
})(window);












