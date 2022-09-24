var timeDisplay = $('#currentDay');
var textBox = $(".description");
var saveBut = $(".saveBtn");
var todo = localStorage.getItem("todo");

// Display current date and day
timeDisplay.text(moment().format('dddd MMMM Do YYYY'));

console.log(textBox);

// Applies different classes to time-blocks to indicate pass, present, and future based on current time
for (let i = 0; i < textBox.length; i++) {
    console.log(textBox[i].id);
    console.log(moment().format('HH'));
    if (textBox[i].id < moment().format('HH')) {
        textBox[i].classList.add("past");
    } else if (textBox[i].id == moment().format('HH')) {
        textBox[i].classList.add("present");
    } else {
        textBox[i].classList.add("future");
    }
};


// Renders previously saved list in local storage
function renderList() {
    console.log(todo);
    if (todo == null) {
        todo = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        console.log(todo);
    } else {
        todo = JSON.parse(localStorage.getItem("todo"));
        for (let i = 0; i < todo.length; i++) {
            if (i == 0){
                $("#09").append(todo[0]);
            }
            else{
                var id = "#" + (i + 9);
                console.log(id);
                $(id).append(todo[i]);
            }
        }
    }
}

// Listens to clicks on "Save" buttons and saves the events to local storage accordingly
saveBut.on('click', function (event) {
    var butClicked = $(event.target);
    console.log(butClicked.parent().children("textArea"));
    var butID = butClicked.parent().children("textArea").attr('id') - 9;
    console.log(butID);
    console.log(butClicked.parent().children("textArea").val());
    todo[butID] = butClicked.parent().children("textArea").val();
    localStorage.setItem("todo", JSON.stringify(todo));
});

renderList();