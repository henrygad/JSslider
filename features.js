/**
 * This js file is home to advance features that can be added to your slider such as animation for each slide image, animation for propertie of the slides,
 *  radio button background color, the display on and off of slider arrow navigatin, etc
 * */ 


export const Displayarrownav = (slidesEl, numberOfSlides, arrowNavNext, arrowNavPrevious) => {
    const displayOn = 'flex'
    const displayOff = 'none' 
    arrowNavNext.style.display = arrowNavPrevious.style.display = displayOn


    if(slidesEl.style.left === '-' + (numberOfSlides - 1) + '00%'){
            arrowNavNext.style.display = displayOff
    }else if(slidesEl.style.left === '0%' ||
            slidesEl.style.left === '-'+ numberOfSlides + '00%'
            ){
            arrowNavPrevious.style.display = displayOff
    }
}
//
//
//
export const Dotbackgrondcolor = (dotNavElArr, slidesEl, numberOfSlides) =>{
    dotNavElArr.forEach((el, index)=> {
            el.style.backgroundColor = 'white'
            el.style.transAnimation = 'all .5s ease'

            if(numberOfSlides === parseFloat(slidesEl.style.left) * -1 / 100 &&
             index === 0
             ){
                    el.style.backgroundColor = 'gray'
            }else if(index === parseFloat(slidesEl.style.left) * -1 / 100 ){
                    el.style.backgroundColor = 'gray'
           }                        
    }) 
}