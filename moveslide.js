/**
 * This code file can be editable to suit the number of move your slider need in percentage
*/

import {Displayarrownav, Dotbackgrondcolor} from './features'



export const Currectposition = slidesEl =>{
    let getCurrentPosition;
   
    getCurrentPosition = slidesEl.style.left
    return parseFloat(getCurrentPosition) * -100 / 100;
}
//
//
//
export const Moveslideleft = (getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval) => {
    let movesPosition;
    const transAnimationOn = transAnimation
    const transAnimationOff = 'none'
    slidesEl.style.transition = transAnimationOn


    if(getCurrentPosition === numberOfSlides * moves){
            slidesEl.style.transition = transAnimationOff
            movesPosition = 0
            //
            setTimeout(() => {
            slidesEl.style.transition = transAnimationOn
            movesPosition = moves
            slidesEl.style.left = '-'+movesPosition+'%'

            if(arrowNavPrevious && arrowNavNext){
                    Displayarrownav(slidesEl, numberOfSlides, arrowNavNext, arrowNavPrevious)
            };
    
            if(dotNavElArr){
                    Dotbackgrondcolor(dotNavElArr, slidesEl, numberOfSlides)
            };
          }, interval)
  
    }else if(getCurrentPosition === 0){
            movesPosition = moves * 1
    }else if(getCurrentPosition === moves){
            movesPosition = moves * 2
    }else if(getCurrentPosition === moves * 2){
            movesPosition = moves * 3
    }else if(getCurrentPosition === moves * 3){
            movesPosition = moves * 4
    }else if(getCurrentPosition === moves * 4){
            movesPosition = moves * 5
    }else if(getCurrentPosition === moves * 5){
            movesPosition = moves * 6
    }else if(getCurrentPosition ===  moves * 6){
            movesPosition = moves * 7
    }else if(getCurrentPosition === moves * 7){
            movesPosition = moves * 8
    }else if(getCurrentPosition ===  moves * 8){
            movesPosition = moves * 9
    }else if(getCurrentPosition ===  moves * 9){
            movesPosition = moves * 10
    }else if(getCurrentPosition ===   moves * 10){
            movesPosition = moves * 11
    }else if(getCurrentPosition ===   moves * 11){
            movesPosition = moves * 12
    }else if(getCurrentPosition ===   moves * 12){
            movesPosition = moves * 13
    }else{
            alert('wrong entries from sliderleft')
    }
    slidesEl.style.left = '-'+movesPosition+'%'; 



    if(arrowNavPrevious && arrowNavNext){
            Displayarrownav(slidesEl, numberOfSlides, arrowNavNext, arrowNavPrevious)
    };

    if(dotNavElArr){
            Dotbackgrondcolor(dotNavElArr, slidesEl, numberOfSlides)
    };
}
//
//
//
export const Moveslideright = (getCurrentPosition, slidesEl, numberOfSlides, moves, transAnimation, arrowNavPrevious, arrowNavNext, dotNavElArr, interval) => {
    let movesPosition;
    const moveslideright = numberOfSlides * moves 
    const transAnimationOn = transAnimation
    const transAnimationOff = 'none'
    slidesEl.style.transition = transAnimationOn


    if(getCurrentPosition === 0){
            slidesEl.style.transition = transAnimationOff
            movesPosition =  moveslideright 
            //
            setTimeout(() => {
                    slidesEl.style.transition = transAnimationOn
                    movesPosition = moveslideright - moves * 1
                    slidesEl.style.left = '-'+movesPosition+'%'

                    if(arrowNavPrevious && arrowNavNext){
                            Displayarrownav(slidesEl, numberOfSlides, arrowNavNext, arrowNavPrevious)
                    };
            
                    if(dotNavElArr){
                            Dotbackgrondcolor(dotNavElArr, slidesEl, numberOfSlides)
                    };
                  }, interval)
    }else if(getCurrentPosition === moveslideright){
            movesPosition = moveslideright - moves * 1
    }else if(getCurrentPosition ===  moveslideright - moves * 1){
            movesPosition = moveslideright - moves * 2
    }else if(getCurrentPosition === moveslideright - moves * 2){
            movesPosition= moveslideright - moves * 3
    }else if(getCurrentPosition === moveslideright - moves * 3){
            movesPosition= moveslideright - moves * 4
    }else if(getCurrentPosition === moveslideright - moves * 4){
            movesPosition= moveslideright - moves * 5
    }else if(getCurrentPosition === moveslideright - moves * 5){
            movesPosition= moveslideright - moves * 6
    }else if(getCurrentPosition === moveslideright - moves * 6){
            movesPosition= moveslideright - moves * 7
    }else if(getCurrentPosition === moveslideright - moves * 7){
            movesPosition= moveslideright - moves * 8
    }else if(getCurrentPosition === moveslideright - moves * 8){
            movesPosition= moveslideright - moves * 9
    }else if(getCurrentPosition === moveslideright - moves * 9){
            movesPosition= moveslideright - moves * 10
    }else if(getCurrentPosition === moveslideright - moves * 10){
            movesPosition= moveslideright - moves * 11
    }else if(getCurrentPosition === moveslideright - moves * 11){
            movesPosition= moveslideright - moves * 12
    }else if(getCurrentPosition === moveslideright - moves * 12){
            movesPosition= moveslideright - moves * 13
    }else{
            alert('wrong entries from slideright')
    }
    slidesEl.style.left = '-'+movesPosition+'%'



    if(arrowNavPrevious && arrowNavNext){
            Displayarrownav(slidesEl, numberOfSlides, arrowNavNext, arrowNavPrevious)
    };

    if(dotNavElArr){
            Dotbackgrondcolor(dotNavElArr, slidesEl, numberOfSlides)
    };
}