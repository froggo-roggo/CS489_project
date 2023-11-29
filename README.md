# KAIST_CS489.project

## 0> Purpose

### The purpose of this project is to emphasize the importance of "Web Accessibility".
This project consists with a Chrome extension and a website. (the pop-up detector and the PleaseDoNotAccess.io)
In addition, this project gives the chance to learn the contents about web accessibility, experience some of them, or get it better.

## 1> Popup Detector

### 1. Abstract Design
(1) User clicks a button </br>
(2) The program reads the html document of the page</br>
(3) The program parses styles of the html elements</br>
(4) If there is an element which has abnormal z-index ((ex) z-index: 100;), then add warning on the top of the page</br>
(5) (If possible) set the border of every button of the popup element

### 2. How to Use it?
(1) Click the button (square)</br>
(2) Popup element is highlighted

### 3. How to implement it
(1) let a = document.querySelectorAll('div');</br>
(2) https://developer.mozilla.org/ko/docs/Web/API/NodeList</br>
(3) iterate every elements in the list</br>
(4) getComputedStyle(Element).zIndex</br>
(5) Abnormal zIndex = popup</br>
(6) Detected: Set border</br>

## 2> PleaseDoNotAccess.io

### 1. url of the website
https://froggo-roggo.github.io

### 2. How to use it?
(1) When accessed to the website, you can choose the filter among original intend, color blind, and low vision.</br>
(2) After reading the passage given, solve each quiz problems given.</br>
(3) Choose the worst web accessibility element you've experienced.</br>

### 3. Outline of the problems
(1) Bad keyboard access</br>
(2) Bad color contrast</br>
(3) Screen reader reading in shuffled order</br>
(4) Inappropriate alternative text</br>




