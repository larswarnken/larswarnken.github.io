document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    
    const squareArray = Array.from(squares)

    var isClicked = new Array()

    for (var i = 0; i < squareArray.length; i++) {
        isClicked[i] = false
    }


    function clickOutcome(e) {
        const index = squareArray.indexOf(e.target)
        console.log(index)

        if (isClicked[index] == false) {
            isClicked[index] = true;
            squares[index].style.backgroundColor = 'red';
        } else {
            isClicked[index] = false;
            squares[index].style.backgroundColor = '#536181';
        }
    }
})