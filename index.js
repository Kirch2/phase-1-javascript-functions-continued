
function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`;
}

function mondayWork(building = "go to the office") {
    return `This Monday, I will ${building}.`
}


function wrapAdjective(visualflair = "*") {
    return function (special = "special") {
        return `You are ${visualflair}${special}${visualflair}!`
    }
}