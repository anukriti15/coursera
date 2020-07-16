(function (window){
	var helloSpeaker={};
	helloSpeaker.speak=function(name){}
	var speakWord = "Hello";
	function speak(name) {
  console.log(speakWord + " " + helloSpeaker.name);
}
window.helloSpeaker=helloSpeaker;
})(window);





