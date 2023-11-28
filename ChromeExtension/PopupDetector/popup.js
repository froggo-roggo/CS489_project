/**
* ---------------------------------------------------------------------------------
* Popup detector
* ---------------------------------------------------------------------------------
**/

// get the button ID element
let doFind = document.getElementById("doFind");
var lst = [];

// Onclick Event
doFind.addEventListener("click", changeState);

/**
 * (1) Reads the html document of the page
 * (2) Parses styles of the html elements
 * (3) If there is an element which has abnormal z-index ((ex) z-index: 100;), 
 *     then add warning on the top of the page (document.body.prepend("This page has popup");)
 * (4) (If possible) set the border of every button of the popup element
 **/

function setPageAddSomething(lst) {
  //document.body.prepend("This page has popup");
  //window.alert("Hmm");
  console.log("Yahoo!");
  let a = document.querySelectorAll('div');
  for (var e of a){
	var zi = getComputedStyle(e).zIndex;
	if (zi > 500){
		console.log("Possibe Popup Content");
		e.style.border = "5px solid #ff00ff";
		var clst = e.childNodes;
		console.log("child contents: "+clst.length);
		for(var c of clst){
			if(((c.tagName) == "DIV")||((c.tagName) == "BUTTON")){
				c.style.border = "5px solid #ff00ff";
			}
		}
		lst.push(e);
	}
  }
}

function setPageRemoveSomething(lst) {
  //document.body.prepend("This page has popup");
  //window.alert("Hmm");
  console.log("Hmm");
  console.log("List length:"+(lst.length));
  for(var e of lst){
	console.log("Removing Border");
	e.style.border = "none";
	lst.pop(e);
  }
}

async function changeState(){
  if (doFind.classList.length == 0){
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageAddSomething,
		args: [lst],
	  });
	  await doFind.classList.add("selected");
	  doFind.innerText = "Back to original page";
  }
  else{
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageRemoveSomething,
		args: [lst],
	  });
	  await doFind.classList.remove("selected");
	  doFind.innerText = "Let's find popups";
  }
}