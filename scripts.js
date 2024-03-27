function getComputerChoice() {

    let choice = Math.floor(Math.random()*3);

    if (choice == 0) {
        return ("Rock");
    } else if (choice == 1) {
        return ("Paper");
    } else {
        return ("Scissors");
    }
}









// let getComputerChoice = Math.floor(Math.random()*3);

//     if (getComputerChoice == 0) {
//         alert("Rock");
//     } else if (getComputerChoice == 1) {
//         alert("Scissors");
//     } else if (getComputerChoice == 2) {
//         alert("Paper");
//     }
    