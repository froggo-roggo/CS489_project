/**
* ---------------------------------------------------------------------------------
* Popup detector
* ---------------------------------------------------------------------------------
**/

// get the button ID element
let doFind = document.getElementById("doFind");
let aud = new Audio("srcs/beep-06.mp3");
let lst = [];

// Onclick Event
doFind.addEventListener("click", changeState);

/**
 * (1) Reads the html document of the page
 * (2) Parses styles of the html elements
 * (3) If there is an element which has abnormal z-index ((ex) z-index: 100;), 
 *     then add warning on the top of the page (document.body.prepend("This page has popup");)
 * (4) (If possible) set the border of every button of the popup element
 **/

function setPageAddSomething() {
  var res = {};
  var list = [];
  var detected = false;
  let a = document.querySelectorAll('div');
  for (var e of a){
	var zi = getComputedStyle(e).zIndex;
	var ew = parseInt(getComputedStyle(e).width);
	var eh = parseInt(getComputedStyle(e).height);
	var ze = getComputedStyle(e).pointerEvents;
	var zv = getComputedStyle(e).visibility;
	var zd = getComputedStyle(e).display;
	//console.log(zi+" "+parseInt(ew)+" "+eh);
	if ((zi > 500) && ze && zv && zd){
		console.log(e);
		if((ew > 256)&&(eh > 256)){
			detected = true;
			e.style.border = "5px solid #ff00ff";
			list.push(e);
		}
		res = childIter(e, 10, detected, list);
		//console.log("res: "+res);
	}
  }
  return res;
}

/*
function setPageRemoveSomething(lst) {
  //document.body.prepend("This page has popup");
  //window.alert("Hmm");
  //console.log("Hmm");
  //console.log("List length:"+(lst.length));
  for(var e of lst){
	console.log("Removing Border");
	e.style.border = "none";
	lst.pop(e);
  }
}
*/

async function changeState(){
  if (doFind.classList.length == 0){
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['setpage.js'],
	  }).then(() => {
			console.log("script injected");
			chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: setPageAddSomething,
		  }).then(detectionResult => {
			/*for (const {frameId, result} of detectionResult) {
				console.log('Frame '+ frameId + ' result: ', result);
			}*/
			/*
				The strucrue of detectionResult Object
				Itself: Array(1)
				0: dictionary
					'documentId': '8EF0BF9AA5B95CFDD94EBE06BB132D0F']
					'frameId': 0
					'result': {detres: true, reslist: Array(2)}
			*/
			var detres = detectionResult[0]['result']['detres'];
			//lst =  detectionResult[0]['result']['reslist'];
			if (detres){
				console.log("detected");
				aud.play();
				doFind.innerText = "Maybe there's popup";
			}
		  });
	  });
	  
	  await doFind.classList.add("selected");
  }
  /*else{
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageRemoveSomething,
		args: [lst],
	  });
	  await doFind.classList.remove("selected");
	  doFind.innerText = "Let's find popups";
  }*/
}