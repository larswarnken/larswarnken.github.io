document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    // all squares
    const squareArray = Array.from(squares)

    // array for square click status
    var isClicked = new Array()

    // adds a click status for every square
    for (var i = 0; i < squareArray.length; i++) {
        isClicked[i] = false
    }

    // alle texte
    var texts = [
        'shut up chat', 
        'dude', 
        'top d only', 
        'von dono gefrontet', 
        'ich les alle subs', 
        'sorry leute heute leider kein', 
        'bullshit',  
        'i guess',  
        'ich war nur ... minuten zu spät', 
        'no way',  
        'den link skippen wir',  
        'lösch dich',  
        'was ist los babe',  
        '...ist trash',  
        'front gegen mods',  
        'ufo bester deutscher rapper',  
        'irgendwas mit basti',  
        'die weiber wa, alle gleich',  
        'i dont know',  
        'heute nur 3 songs',  
        'dickes papaL',  
        'milki wird getreten',  
        'realtalk chat',  
        'david dobrik',
        'melonen golem dono',
        'der reddit ist shit',
        'earrape',
        'über 100€ top d'
    ]


    // sets random text from texts array
    for (var i = 0; i < squareArray.length; i++) {
        var random = Math.floor(Math.random() * texts.length)
        squares[i].innerHTML = texts[random];
        texts.splice(random, 1);

    }
    squares[12].innerHTML = 'X';
    
    



    // when square is clicked
    function clickOutcome(e) {
        const index = squareArray.indexOf(e.target)
        console.log(index)

        // changes bg color
        if (index != 12) {
            if (isClicked[index] == false) {
                isClicked[index] = true;
                squares[index].style.backgroundColor = 'red';
            } else {
                isClicked[index] = false;
                squares[index].style.backgroundColor = '#536181';
            }
        }
    }
})