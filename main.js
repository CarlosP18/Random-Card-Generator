window.onload  = () =>{
    document.querySelector(".card").classList.add(randomSuit());
    document.querySelector(".number").innerHTML = randomNumber()
}


let randomNumber = () =>{
    let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let cardNumber = Math.floor(Math.random() * numbers.length);
    return numbers[cardNumber];
};

let randomSuit = () =>{
    let suit = ["diamond","spade","heart","club"]
    let cardSuit = Math.floor(Math.random() * suit.length);
    return suit[cardSuit];
};

