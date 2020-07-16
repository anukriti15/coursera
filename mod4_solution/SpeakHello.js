(function (window){
	var helloSpeaker={};
	helloSpeaker.speak=function(name){}
	var speakWord = "Hello";
	helloSpeaker.speak=function() {
       console.log(speakWord + " " +helloSpeaker.name);
}
window.helloSpeaker=helloSpeaker;
})(window);





