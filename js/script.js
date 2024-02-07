$(document).ready(function () {
    let spans = document.querySelectorAll('.login span');
    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx + 1))
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {

            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });


    $("#work").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });


});

//block interesting
//To Do List

function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  
  if (newTask != "") {
    
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
    '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' +
    newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
    input.value=("");
    input.placeholder=("enter next task …");
  }
}

function markDone (item) { 
    item.className = 'finished';
}

function remove (item) {
    if(item.className=="finished"){
     item.remove();
    }
      
   }  
function important(item) {
    item.className = 'important';
}
 
//Painting picture

var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 20;
var isPainting = false;

function setWidth(value) {
  var canvas = document.getElementById("canvas1");
  if (isNumeric(value)) {
    canvas.width = value;
  }
}

function setHeight(value) {
  var canvas = document.getElementById("canvas1");
  if (isNumeric(value)) {
    canvas.height = value;
  }
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function isNumeric(value) {
  return !isNaN(value);
}

function startPaint() {
  isPainting = true;
};

function endPaint() {
  isPainting = false;
};

function doPaint(event) {
  if (isPainting) {
    var x = event.clientX - paintcanvas.getBoundingClientRect().left;
    var y = event.clientY - paintcanvas.getBoundingClientRect().top;
    paintCircle(x, y);
  }
};

function setColor(newColor) {
  color = newColor;
}

function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}
