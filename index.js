// Code your solution in this file!
function distanceFromHqInBlocks(num){
    let blocks = Math.abs(num-42); 
    return(blocks);
}
function distanceFromHqInFeet(blocks){
    let feet =Math.abs((blocks-42))*264
    return feet
}
function distanceTravelledInFeet(start,destination){
   let feet= Math.abs((destination-start)*264)
   return feet
}
function calculatesFarePrice(start, destination){
    let feet= Math.abs((destination-start)*264)
    if (feet<=400){
        return 0;
    }
    else if (feet>400 && feet<=2000){
        return(2.56)
    }
    else if(feet>=2000 && feet<2500){
        return(25);
    }
    else if(feet>=2500){
        return("cannot travel that far")
    }
}