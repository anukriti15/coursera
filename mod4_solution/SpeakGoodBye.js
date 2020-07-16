(function (window){
	var byeSpeaker={};
	byeSpeaker.speak=function(name){}
	var speakWord = "goodbye";
	byeSpeaker.speak=function(name) {
  console.log(speakWord + " " +name);
}
window.byeSpeaker=byeSpeaker;

})(window);












