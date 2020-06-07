var myHeading = document.querySelector('h1');
myHeading.textContent = 'TextContent';
 document.querySelector('html').onclick = function(){
	alert('ALERT');
} 
var myImage = document.querySelector('img');
myImage.onclick=function() {
	var mySrc=myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src','images/firefox2.png');
	} else {
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}
var myButton = document.querySelector('button');
/* function setUserName = () {
var myName = prompt('You name : ');
localStorage.setItem('name',myName);
myHeading.textContent = 'Mozillla is cool, '+ myName;
} */
document.querySelector('span').onmouseover = function() {
	alert('TEST');
}