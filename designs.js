// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    createGrid(height, width);
    pickColor();
});

function pickColor() {
    $('td').click( event => {
        let color = $colorPicker.val();

  $(event.currentTarget).css("background-color", color)
    });
};

function createGrid(height, width) {
    for(let i = 0; i < height; ++i) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; ++i) {
        $('tr').append('<td></td>');
    };
};
