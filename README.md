# CS489_project

## 1> Popup Detector

### 1. Abstract Design
(1) User clicks a button
(2) The program reads the html document of the page
(3) The program parses styles of the html elements
(4) If there is an element which has abnormal z-index ((ex) z-index: 100;), then add warning on the top of the page
(5) (If possible) set the border of every button of the popup element

### 2. How to Use it?
(1) Click the button (square)
(2) Popup element is highlighted

### 3. How to implement it
(1) let a = document.querySelectorAll('div');
(2) https://developer.mozilla.org/ko/docs/Web/API/NodeList
(3) iterate every elements in the list
(4) getComputedStyle(Element).zIndex
(5) Abnormal zIndex = popup
(6) Detected: Set border

## 2> PleaseDoNotAccess.io

### 1. url of the website
https://froggo-roggo.github.io

### 2. How to use it?
(1) When accessed to the website, you can choose the filter among original intend, color blind, and low vision.
(2) After reading the passage given, solve each quiz problems given.
(3) Choose the worst web accessibility element you've experienced.

### 3. Outline of the problems
(1) Bad keyboard access
(2) Bad color contrast
(3) Screen reader reading in shuffled order
(4) Inappropriate alternative text




