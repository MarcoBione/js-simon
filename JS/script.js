/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

//PATH
//generare 5 numeri casuali e caricarli in un array
//controllare che i numeri caricati siano tutti differenti
//mostrare i 5 numeri per 30 secondi
//nascondere i 5 numeri creati
//mostrare i 5 campi di input
//confrontare i numeri scritti con quelli creati
//generare un resoconto di quali indovinati e quali no


function playgame(){

    //generate bombs
    function generateNumbers (){
        //create array w/numbers
        const numbers = [];

        //cycle for create 5 randomnumbers
        while(numbers.length < 5){
            //create randomnumber
            let randomNumber = Math.floor((Math.random() * 100) + 1);
            //check if is already exist
            if(!numbers.includes(randomNumber)){
                numbers.push(randomNumber);
            };
        };
        return numbers;
    };

    function controlNumbers(){
       
        let numbers = document.querySelectorAll('input');
         //array of userNumbers
         const userNumbers = [];

         numbers.forEach(function(input) {
            userNumbers.push(input.value);
         });

         //check array of userNumber
         console.log(userNumbers);
    }

    //read casualNumbers array
    const casualNumbers = generateNumbers();
    console.log(casualNumbers);

    //display casualNumbers
    let display = document.createElement('div');
    display.innerText =`${casualNumbers}`;
    display.classList.add('text-warning','fs-3');
    console.log(display);
    document.querySelector('#numbers').appendChild(display);

    let input = document.querySelector('#userinput');

    //remove display after 30 seconds
    setTimeout(() => {
        display.remove();
        input.classList.remove('d-none');
    }, 3000);

    //check user numbers
    const check = document.getElementById('validate');
    check.addEventListener('click', controlNumbers);
    
};


//load start btn for start game
const play = document.getElementById('start');
play.addEventListener('click', playgame);







