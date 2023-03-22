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


function playgame() {

    //generate bombs
    function generateNumbers() {
        //create array w/numbers
        const numbers = [];

        //cycle for create 5 randomnumbers
        while (numbers.length < 5) {
            //create randomnumber
            let randomNumber = Math.floor((Math.random() * 100) + 1);
            //check if is already exist
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            };
        };
        //console.log(numbers);
        return numbers;
    };

    function controlNumbers() {

        let inputNumbers = document.querySelectorAll('input');
        //array of userNumbers
        const userNumbers = [];

        /*
        inputNumbers.forEach(function (input) {
            userNumbers.push(input.value);
        });
        */

        //cycle for check the array of usernums
        for(let i = 0; i < inputNumbers.length; i++){
            if(!userNumbers.includes(inputNumbers[i].value)){
                userNumbers.push(parseInt(inputNumbers[i].value));
            };
        };

        //console.log(userNumbers);
        return userNumbers;
    }

    function responceNumbers(){

        //load user numbers
        let userNums = controlNumbers();
        console.log(userNums);
        
        //array num indovinati
        const indovinati = [];

        //check usernumbers vs pc numbers
        for (let i = 0; i < userNums.length; i++) {
            
            if(casualNumbers.includes(userNums[i])){
                indovinati.push(userNums[i]);
            }

        }

        console.log(indovinati);
        document.querySelector('.results').innerHTML=`
        <p class="text-white fs-4"> hai indovinato i seguenti numeri : ${indovinati} - il tuo punteggio è :${indovinati.length}</p>
        `;

    }    

    
    //console.log(casualNumbers);
    //read casualNumbers array
    const casualNumbers = generateNumbers();

    //display casualNumbers
    let display = document.createElement('div');
    display.innerText = `${casualNumbers}`;
    display.classList.add('text-warning', 'fs-3');
    document.querySelector('#numbers').appendChild(display);

    let input = document.querySelector('#userinput');

    //remove display after 30 seconds
    setTimeout(() => {
        display.remove();
        input.classList.remove('d-none');
    }, 3000);

    //check user numbers
    const check = document.getElementById('validate');
    check.addEventListener('click', responceNumbers);

};


//load start btn for start game
const play = document.getElementById('start');
play.addEventListener('click', playgame);







