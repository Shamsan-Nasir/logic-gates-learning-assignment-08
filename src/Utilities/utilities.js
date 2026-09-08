
export function handleButtonToggle(index) {
    let toggleArray = [false,false,false]
    toggleArray.forEach(element => {element = false});
    toggleArray[index] = true
    return toggleArray

}



