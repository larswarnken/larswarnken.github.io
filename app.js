document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        console.log(index)
    }
})