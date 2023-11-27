/**
* ---------------------------------------------------------------------------------
* Popup detector
* ---------------------------------------------------------------------------------
**/

// get the button ID element
let doFind = document.getElementById("doFind");


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
  //document.body.prepend("This page has popup");
  //window.alert("Hmm");
  console.log("Yahoo!");
}

function setPageRemoveSomething() {
  //document.body.prepend("This page has popup");
  //window.alert("Hmm");
  console.log("Hmm");
}

async function changeState(){
  if (doFind.classList.length == 0){
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageAddSomething,
	  });
	  await doFind.classList.add("selected");
	  doFind.innerText = "Back to original page";
  }
  else{
	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageRemoveSomething,
	  });
	  await doFind.classList.remove("selected");
	  doFind.innerText = "Let's find popups";
  }
  
}