/**
 * RESPONSIVE NAV JS
 * http://jsfiddle.net/csswizardry/ev598/
 * http://jsfiddle.net/shanomurphy/zp376/
 * =================
*/

/* The target nav */
var responsiveNav = document.getElementById('js-responsive-nav');

/* Insert <a> element for toggle button inside the <nav> element */
var toggleBtn = document.createElement('a');
toggleBtn.setAttribute('href', '#');
toggleBtn.setAttribute('class', 'responsive-nav__toggle');
responsiveNav.insertBefore(toggleBtn, responsiveNav.firstChild);

/* Has Class Function */
function hasClass(e,t){return(new RegExp(' '+t+' ')).test(' '+e.className+' ')}

/* Toggle Class Function */
function toggleClass(e,t){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';if(hasClass(e,t)){while(n.indexOf(' '+t+' ')>=0){n=n.replace(' '+t+' ',' ')}e.className=n.replace(/^\s+|\s+$/g,'')}else{e.className+=' '+t}}

/* Toggle 'responsive-nav--open' when button is clicked */
toggleBtn.onclick = function() {
    toggleClass(this.parentNode, 'responsive-nav--open');
}

/* Add a class of 'js' to the HTML element */
var root = document.documentElement;
root.className = root.className + ' js';
//---------------------------------------------

$(document).ready(function(){
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });
});
