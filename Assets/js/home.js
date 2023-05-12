
var scrollableElement = document;

scrollableElement.addEventListener('wheel', checkScrollDirection);

var scale = 1;
var opacityIntroduction = 1;

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        //up
        
        if (scale > 1) {
            scale = scale - 0.5;
            var scaleText = "scale(" + scale + ")";
          
            $(".introduction__img").css({ "-moz-transform": scaleText, "-webkit-transform": scaleText });
            if (scale < 5 && opacityIntroduction > -1 && opacityIntroduction < 1) {
                opacityIntroduction = opacityIntroduction + 0.2;
                $(".introduction").css("opacity", opacityIntroduction)
            }
        }
        


    } else { 
        if (scale <= 5) {
            scale = scale + 0.5;
            var scaleText = "scale(" + scale + ")";
          
            $(".introduction__img").css({ "-moz-transform": scaleText, "-webkit-transform": scaleText });
            if (scale > 2 && opacityIntroduction < 2) {
                opacityIntroduction = opacityIntroduction - 0.2;
                $(".introduction").css("opacity", opacityIntroduction)
               
            }
            console.log(scale)
        }

    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

