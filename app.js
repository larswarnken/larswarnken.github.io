document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');

    const resetButton = document.querySelector('.reset');

    // all squares can detect clicks
    squares.forEach(square => {
        square.addEventListener('click', fieldClicked);
    })

    // detects clicks on reset button
    resetButton.addEventListener('click', resetFields);

    // all squares
    const squareArray = Array.from(squares);

    // counter for center field clicked
    var centerClicked = 0;

    // array for square click status
    var isClicked = new Array();

    // array for clicked squares
    var clicked = new Array();

    // adds a click status for every square
    for (var i = 0; i < squareArray.length; i++) {
        isClicked[i] = false;
    }

    // all texts
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
        'über 100€ top d',
        'lost',
        'digga',
        'holy shit',
        'yo bro',
        'buddy',
        'bühni',
        'ich bin verwirrt',
        'dorfrapper dono',
        'cringy youtube intro',
        'aight chat',
        'irgendein akku leer'
    ];

    // sets random text from texts array
    for (var i = 0; i < squareArray.length; i++) {
        var random = Math.floor(Math.random() * texts.length);
        squares[i].innerHTML = texts[random];
        texts.splice(random, 1);

    }

    // sets center field
    squares[12].innerHTML = 'X';
    
    // when square is clicked
    function fieldClicked(e) {
        const index = squareArray.indexOf(e.target);

        // changes bg color
        if (index != 12) {
            if (isClicked[index] == false) {
                isClicked[index] = true;
                squares[index].style.backgroundColor = 'red';
                clicked.push(index);
                if (checkBingo() == true) {
                    alert('POGGERS')
                }
            } else {
                isClicked[index] = false;
                
                // mobile
                if(screen.width <= 1000) {
                    squares[index].style.backgroundColor = '#3c455c';
                }
                // pc
                else {
                    squares[index].style.backgroundColor = '#536181';
                }

                deleteDoubleClick(index);
            }
        } else {
            centerClicked++;
            if (centerClicked == 5) {
                alert('stop clicking me WeirdChamp');
                centerClicked = 0;
            }
        }
        console.log(clicked);
    }

    // checks for bingo (in a bad way)
    function checkBingo() {
        // vertical lines
        if(clicked.includes(0) && clicked.includes(1) && clicked.includes(2) && clicked.includes(3) && clicked.includes(4)) {
            return true;
        } else if(clicked.includes(5) && clicked.includes(6) && clicked.includes(7) && clicked.includes(8) && clicked.includes(9)){
            return true;
        } else if(clicked.includes(10) && clicked.includes(11) && clicked.includes(13) && clicked.includes(14)){
            return true;
        } else if(clicked.includes(15) && clicked.includes(16) && clicked.includes(17) && clicked.includes(18) && clicked.includes(19)){
            return true;
        } else if(clicked.includes(20) && clicked.includes(21) && clicked.includes(22) && clicked.includes(23) && clicked.includes(24)){
            return true;
        } 
        // horizontal lines
        else if(clicked.includes(0) && clicked.includes(5) && clicked.includes(10) && clicked.includes(15) && clicked.includes(20)){
            return true;
        } else if(clicked.includes(1) && clicked.includes(6) && clicked.includes(11) && clicked.includes(16) && clicked.includes(21)){
            return true;
        } else if(clicked.includes(2) && clicked.includes(7) && clicked.includes(17) && clicked.includes(22)){
            return true;
        } else if(clicked.includes(3) && clicked.includes(8) && clicked.includes(13) && clicked.includes(18) && clicked.includes(23)){
            return true;
        } else if(clicked.includes(4) && clicked.includes(9) && clicked.includes(14) && clicked.includes(19) && clicked.includes(24)){
            return true;
        } 
        // diagonal lines
        else if(clicked.includes(0) && clicked.includes(6) && clicked.includes(18) && clicked.includes(24)){
            return true;
        }

        return false;
    }

    // cheks whether a square has been already clicked
    function deleteDoubleClick(number) {
        for(var i = 0; i<clicked.length; i++) {
            if(clicked[i] == number){
                clicked.splice(i, 1);
            }
        }
    }

    // reloads page
    function resetFields() {
        location.reload();
    }
})