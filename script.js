console.log ("hello") ;
const btnAbout1 = document.getElementById ("btnAbout1") ;
const btnAbout2 = document.getElementById ("btnAbout2") ;
const btnAbout3 = document.getElementById ("btnAbout3") ;
const subtitle = document.getElementById ("subtitle") ;
const textInfo = document.getElementById ("textInfo") ;

function funHistory () {
    subtitle.innerText = "History" ;
    textInfo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque sequi impedit nam, modi, vero, praesentium sit eius quae natus omnis dignissimos accusamus quo distinctio accusantium possimus delectus sunt blanditiis." ;
    btnAbout1.style.background = "transparent" ;
    btnAbout2.style.background = "#d5d8dc" ;
    btnAbout3.style.background = "#d5d8dc" ;
};

function funChampions () {
    subtitle.innerText = "Champions" ;
    textInfo.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a excepturi fugiat. Commodi ex nisi quis vel quod, ratione rem necessitatibus consectetur excepturi expedita tempora fugit ipsam aliquid! Officiis, facere." ;
    btnAbout1.style.background = "#d5d8dc" ;
    btnAbout2.style.background = "transparent" ;
    btnAbout3.style.background = "#d5d8dc" ;
};

function funGoals () {
    subtitle.innerText = "Goals" ;
    textInfo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus temporibus perspiciatis perferendis natus, fugit odit veritatis assumenda quia repellendus dolore illo vel distinctio minima voluptas doloribus molestiae corporis dolorum?" ;
    btnAbout1.style.background = "#d5d8dc" ;
    btnAbout2.style.background = "#d5d8dc" ;
    btnAbout3.style.background = "transparent" ;
};

btnAbout1.addEventListener ("click", () => {
    console.log ("Click History") ;
    funHistory () ;
});

btnAbout2.addEventListener ("click", () => {
    console.log ("Click Champions") ;
    funChampions () ;
});

btnAbout3.addEventListener ("click", () => {
    console.log ("Click Goals") ;
    funGoals () ;
}) ;
