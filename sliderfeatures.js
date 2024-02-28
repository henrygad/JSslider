export const Displayarrownav = ({slidescurrentPositionIndex = 0, 
                                 numberOfSlides = 'none',
                                 arrowslidernav_Class = 'none'}) => {
    const displayOn = 'flex'
    const displayOff = 'none' 
    setTimeout(Fetch, 100)
    function Fetch(){
        const arrownavs = document.querySelectorAll('.'+ arrowslidernav_Class)
        const arrownavLeft = arrownavs[0]
        const arrownavRight = arrownavs[1]
        arrownavLeft.style.display = arrownavRight.style.display = displayOn

        if(arrownavs === null ||
            arrownavs === undefined){
                return;
            }


        if(slidescurrentPositionIndex === (numberOfSlides - 1)){

            arrownavLeft.style.display = displayOff
        }else if(slidescurrentPositionIndex === 0){    
            arrownavRight.style.display = displayOff
        }
            
    }
}

export const Dislaydotbackgrondcolor = ({slidescurrentPositionIndex = 0, 
                                        dotslidernav_Class = 'none', 
                                        backgroundColor = 'none',
                                        transition = 'none'}) =>{
    setTimeout(Fetch,100)
    function Fetch(){
       const dotslidernavs = document.querySelectorAll('.'+ dotslidernav_Class)

       if(dotslidernavs === null ||
          dotslidernavs === undefined){
            return;
        }

        dotslidernavs.forEach((dot, index)=> {
            dot.style.backgroundColor = 'rgba(0, 0, 0, .25)'
            dot.style.transition = transition


            if(index === slidescurrentPositionIndex){
                dot.style.backgroundColor = backgroundColor
            }             
        }) 

    }
    
}

export const Animateslide = (ele, eles) => {

    eles.forEach(ele=>{
        ele[0].style.backgroundColor = Remove()
        ele[0].style.transform = Remove()
        
    })

    function Remove(){
        return null
    }

    function Add(){
        ele.style.backgroundColor = 'red'
        ele.style.transform = 'rotatey(360deg)'
    }
    Add()
}