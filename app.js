document.addEventListener('DOMContentLoaded', () => {

    // hör auf den code anzugucken

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
        'duuude',
        'top D only',
        '*von Dono gefrontet*',
        'ich les alle Subs',
        'sorry Leute heute leider kein...',
        'bullshit',
        'I guess',
        'ich war nur ... Minuten zu spät',
        'no way',
        'den Link skippen wir',
        'lösch dich',
        'was ist los babe',
        '...ist trash',
        '*front gegen Mods*',
        'Ufo bester deutscher Rapper',
        'die Weiber wa, alle gleich',
        'I dont know',
        'heute nur 3 Songs',
        'dickes papaL',
        '*Milki wird getreten*',
        'realtalk chat',
        'David Dobrik',
        'VLog',
        '*Melonen Golem Dono*',
        'der Reddit ist shit',
        '*Earrape*',
        '*über 100€ top D*',
        'holy shit',
        'yo bro',
        'buddy',
        'Bühni',
        'ich bin verwirrt',
        '*Dorfrapper Dono*',
        '*cringy Youtube Intro*',
        'aight chat',
        '*irgendein Akku leer*',
        '*billige Monte Stimme*',
        'You fimi?',
        'obvious',
        'Pokemon',
        'actually',
        '*zu spät*',

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

                    setTimeout(function() {
                        alert('POGGERS')
                    }, 100)

                    
                }
            } else {
                isClicked[index] = false;

                // mobile
                if (screen.width <= 1000) {
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
        if (clicked.includes(0) && clicked.includes(1) && clicked.includes(2) && clicked.includes(3) && clicked.includes(4)) {
            return true;
        } else if (clicked.includes(5) && clicked.includes(6) && clicked.includes(7) && clicked.includes(8) && clicked.includes(9)) {
            return true;
        } else if (clicked.includes(10) && clicked.includes(11) && clicked.includes(13) && clicked.includes(14)) {
            return true;
        } else if (clicked.includes(15) && clicked.includes(16) && clicked.includes(17) && clicked.includes(18) && clicked.includes(19)) {
            return true;
        } else if (clicked.includes(20) && clicked.includes(21) && clicked.includes(22) && clicked.includes(23) && clicked.includes(24)) {
            return true;
        }
        // horizontal lines
        else if (clicked.includes(0) && clicked.includes(5) && clicked.includes(10) && clicked.includes(15) && clicked.includes(20)) {
            return true;
        } else if (clicked.includes(1) && clicked.includes(6) && clicked.includes(11) && clicked.includes(16) && clicked.includes(21)) {
            return true;
        } else if (clicked.includes(2) && clicked.includes(7) && clicked.includes(17) && clicked.includes(22)) {
            return true;
        } else if (clicked.includes(3) && clicked.includes(8) && clicked.includes(13) && clicked.includes(18) && clicked.includes(23)) {
            return true;
        } else if (clicked.includes(4) && clicked.includes(9) && clicked.includes(14) && clicked.includes(19) && clicked.includes(24)) {
            return true;
        }
        // diagonal lines
        else if (clicked.includes(0) && clicked.includes(6) && clicked.includes(18) && clicked.includes(24)) {
            return true;
        }

        return false;
    }

    // cheks whether a square has been already clicked
    function deleteDoubleClick(number) {
        for (var i = 0; i < clicked.length; i++) {
            if (clicked[i] == number) {
                clicked.splice(i, 1);
            }
        }
    }

    // reloads page
    function resetFields() {
        location.reload();
    }


})