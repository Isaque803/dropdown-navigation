function dropdown(i){
    let element = document.getElementsByClassName("dropdown")[i]
    element.classList.toggle("active")
}

function menuInteractive(){
    let element = document.getElementsByTagName("header")[0]
    element.classList.toggle("active")
}