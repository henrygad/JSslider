
/**
 * This js file home some of the basic slider navigation(e.g arrow nav, radio nav, auto nav )
 * The file should only be edited when there's a need for an additional slider navigation which is not list here ( or provided) 
 * among the rest slider nvigation in this file
*/

import {Currectposition, Moveslideleft, Moveslideright} from './moveslide'



export const Arrownavigation = (slidesEl, numberOfSlides, moves, transAnimation, arrowNavPosition, arrowNavPrevious, arrowNavNext, dotNavElArr) => {
        const getCurrentPosition = Currectposition(slidesEl)
        const interval = .25


        if(arrowNavPosition.toLowerCase() === 'next'){
                Moveslideleft(getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval)
        }else if(arrowNavPosition.toLowerCase() === 'previous'){ 
                Moveslideright(getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval)
        }else{
                alert('Add arrow values promptly')
        }
}
//
//
//
export const Dotnavavigation = (slidesEl, dotNavsPosition, moves, transAnimation, dotNavElArr, numberOfSlides, arrowNavPrevious, arrowNavNext) => {
        let getCurrentPosition;


        if(slidesEl &&
           moves &&
           dotNavsPosition &&
           transAnimation
           ){
                if(dotNavsPosition === 'first'){
                        getCurrentPosition = 200   /* first radio button should get the last repeated slide */              
                }else if(dotNavsPosition === 'second'){
                        getCurrentPosition = 0               
                }else if(dotNavsPosition === 'third'){
                        getCurrentPosition = 100              
                }else{
                        alert('Dot nav not avaliable')
                }
        }else{
        alert('Add values promptly')
        }
        
        Moveslideleft(getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr)
}
//
//
//
export const Autoplayslider = (slidesEl, numberOfSlides, moves, transAnimation, slideRight, arrowNavPrevious, arrowNavNext, dotNavElArr) => {
        const interval = 500


        if(slidesEl && 
           numberOfSlides &&
           moves &&
           transAnimation
           ){
                const getCurrentPosition = Currectposition(slidesEl)
                if(slideRight === 'right'){
                       Moveslideright(getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval)
                }else {
                        Moveslideleft(getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval)
                }
        }else{
                alert('Add values promptly')
        }
}