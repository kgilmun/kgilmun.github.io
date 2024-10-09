// KEEPING HTML ELEMENTS

const images = document.getElementsByClassName("image");

const character = document.getElementsByClassName("character");

const deadAlive = document.getElementsByClassName("dead-alive");

const goDown = document.getElementById("button");

const body = document.getElementsByTagName("body");

const pages = document.getElementById("pages");

const desplegable = document.getElementById("desplegable");

const input = document.getElementById("num-pages");




// URL TO CONNECT THE API
const rickMorty = "https://rickandmortyapi.com/api/character/?page=17";



// ACCESSING THE API
fetch(rickMorty)
.then(((response) => response.json()))
.then((data) => {

    console.log(data);

    // CARD 1
    
    character[0].innerHTML = data.results[0].name;
    
    images[0].style.backgroundImage = `url(${data.results[0].image})`;

    deadAlive[0].innerHTML = data.results[0].status;

    deadAliveUnkn(deadAlive[0]);





    // CARD 2

    images[1].style.backgroundImage = `url(${data.results[1].image})`;

    character[1].innerHTML = data.results[1].name;

    deadAlive[1].innerHTML = data.results[1].status;

    deadAliveUnkn(deadAlive[1]);





    //CARD 3

    images[2].style.backgroundImage = `url(${data.results[2].image})`;

    character[2].innerHTML = data.results[2].name;

    deadAlive[2].innerHTML = data.results[2].status;

    deadAliveUnkn(deadAlive[2]);





    //CARD 4

    images[3].style.backgroundImage = `url(${data.results[3].image})`;

    character[3].innerHTML = data.results[3].name;

    deadAlive[3].innerHTML = data.results[3].status;

    deadAliveUnkn(deadAlive[3]);





    //CARD 5

    images[4].style.backgroundImage = `url(${data.results[4].image})`;

    character[4].innerHTML = data.results[4].name;

    deadAlive[4].innerHTML = data.results[4].status;

    deadAliveUnkn(deadAlive[4]);





    //CARD 6

    images[5].style.backgroundImage = `url(${data.results[5].image})`;

    character[5].innerHTML = data.results[5].name;

    deadAlive[5].innerHTML = data.results[5].status;

    deadAliveUnkn(deadAlive[5]);





    //CARD 7

    images[6].style.backgroundImage = `url(${data.results[6].image})`;

    character[6].innerHTML = data.results[6].name;

    deadAlive[6].innerHTML = data.results[6].status;

    deadAliveUnkn(deadAlive[6]);





    //CARD 8

    images[7].style.backgroundImage = `url(${data.results[7].image})`;

    character[7].innerHTML = data.results[7].name;

    deadAlive[7].innerHTML = data.results[7].status;

    deadAliveUnkn(deadAlive[7]);





    //CARD 9

    images[8].style.backgroundImage = `url(${data.results[8].image})`;

    character[8].innerHTML = data.results[8].name;

    deadAlive[8].innerHTML = data.results[8].status;

    deadAliveUnkn(deadAlive[8]);





    //CARD 10

    images[9].style.backgroundImage = `url(${data.results[9].image})`;

    character[9].innerHTML = data.results[9].name;

    deadAlive[9].innerHTML = data.results[9].status;

    deadAliveUnkn(deadAlive[9]);




    //CARD 11

    images[10].style.backgroundImage = `url(${data.results[10].image})`;

    character[10].innerHTML = data.results[10].name;

    deadAlive[10].innerHTML = data.results[10].status;

    deadAliveUnkn(deadAlive[10]);




    //CARD 12

    images[11].style.backgroundImage = `url(${data.results[11].image})`;

    character[11].innerHTML = data.results[11].name;

    deadAlive[11].innerHTML = data.results[11].status;

    deadAliveUnkn(deadAlive[11]);




    //CARD 13

    images[12].style.backgroundImage = `url(${data.results[12].image})`;

    character[12].innerHTML = data.results[12].name;

    deadAlive[12].innerHTML = data.results[12].status;

    deadAliveUnkn(deadAlive[12]);




    //CARD 14

    images[13].style.backgroundImage = `url(${data.results[13].image})`;

    character[13].innerHTML = data.results[13].name;

    deadAlive[13].innerHTML = data.results[13].status;

    deadAliveUnkn(deadAlive[13]);

    


    //CARD 15

    images[14].style.backgroundImage = `url(${data.results[14].image})`;

    character[14].innerHTML = data.results[14].name;

    deadAlive[14].innerHTML = data.results[14].status;

    deadAliveUnkn(deadAlive[14]);




    //CARD 16

    images[15].style.backgroundImage = `url(${data.results[15].image})`;

    character[15].innerHTML = data.results[15].name;

    deadAlive[15].innerHTML = data.results[15].status;

    deadAliveUnkn(deadAlive[15]);




    //CARD 17

    images[16].style.backgroundImage = `url(${data.results[16].image})`;

    character[16].innerHTML = data.results[16].name;

    deadAlive[16].innerHTML = data.results[16].status;

    deadAliveUnkn(deadAlive[16]);




    //CARD 18

    images[17].style.backgroundImage = `url(${data.results[17].image})`;

    character[17].innerHTML = data.results[17].name;

    deadAlive[17].innerHTML = data.results[17].status;

    deadAliveUnkn(deadAlive[17]);




    //CARD 19

    images[18].style.backgroundImage = `url(${data.results[18].image})`;

    character[18].innerHTML = data.results[18].name;

    deadAlive[18].innerHTML = data.results[18].status;

    deadAliveUnkn(deadAlive[18]);




    //CARD 20

    images[19].style.backgroundImage = `url(${data.results[19].image})`;

    character[19].innerHTML = data.results[19].name;

    deadAlive[19].innerHTML = data.results[19].status;

    deadAliveUnkn(deadAlive[19]);


});



function deadAliveUnkn (character) {
    
    switch (character.innerHTML) {
        
        case "Alive":

            character.style.backgroundColor = "green";
            break;


        case "Dead":

            character.style.backgroundColor = "red";
            break;


        case "unknown":

            character.style.backgroundColor = "rgb(154, 154, 17)";
            break;

        default: 
            character.style.backgroundColor = "white"
    }
}