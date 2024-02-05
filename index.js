/*** 
 * Plese not that this file, slider js and function is a has the basic functionality of a  slider but dynamic.
 * Users of this js slider libary has the permision to add, adjust, reset, recode the file to suit thier slider.
 * Feature js file homes advance designs you can addd to our slides (note that this file can be edited to add more slide features)
 * Movesslide js file homes the movement of the slides in the value of percent to the left peoperty of the slide (note this file can be edited to suit the number of slide in your slider and per it distance coverd)
 * Navigation js file homes the basic slider navigation (note that this file can be edited to suit your slider navigations)
 * 
 * 
 * //NOTE
 * 
 * slidesEL = the slides element
 * numberOfSlides =  the number of slides avialiable
 * moves = the number of move you want you slides to move at each point (this must be in % value)
 * transAnimation = css transAnimation animation values 
 * arrowNavPosition = the position of each arrrow navigation elements (e.g previous , next)
 * slideRight = specify the way the slider should slide (e.g slide left:, slide right)
 * arrowNavPrevious = the previous navigation element
 * arrowNavNext =  the next arrow navigation element
 * dotNavsposition = the position of each navigation elements corresponiding to it assigned slides (e.g first, second, third)
 * dotNavArr = the arrays elements of dots naviagtion
 * 
 * // Arrow navigation api function for sliders
 * Arrownavigation(slidesEl, numberOfSlides, moves, transAnimation, arrowNavPosition, arrowNavPrevious, arrowNavNext, dotNavElArr)
 * 
 * // Dots navigation api function for sliders
 * Dotnavavigation(slidesEl, dotNavsPosition, moves, transAnimation, dotNavElArr, numberOfSlides, arrowNavPrevious, arrowNavNext)
 * 
 * // Automation navigation api function slider, to be call inside a setinterval function
 * Autoplayslider(slidesEl, numberOfSlides, moves, transAnimation, slideRight, arrowNavPrevious, arrowNavNext, dotNavElArr)
 * 
*/