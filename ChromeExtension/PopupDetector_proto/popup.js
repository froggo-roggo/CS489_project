/**
* ---------------------------------------------------------------------------------
* | 팝업 |
* ---------------------------------------------------------------------------------
**/

// doFind ID element 를 취득
let doFind = document.getElementById("doFind");


// Onclick Event
doFind.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageAddsomething,
  });
});

/**
 * @description 현재 웹 페이지의 Body 요소의 배경색을 변경해주는 함수
 **/
function setPageAddsomething() {
  document.body.prepend("This page have popup");
}
