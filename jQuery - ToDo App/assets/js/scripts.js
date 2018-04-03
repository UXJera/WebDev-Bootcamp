// Click listeners only fire on existing elements.
// new elements created wont abide by the function
// so we refactor our jquery
// $('li').on('click', function(){

// when a li is clicked inside of a ul
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // Stops li click event from happening
  event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
  if(event.which === 13){ // If enter is pressed
    var toDoText = $(this).val(); // Grab text
    $(this).val(""); // reset input field
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span>' + toDoText + "</li>"); // append this to the element
  }
});

$('#toggleInput').on('click', function(){
  $('input[type="text"]').fadeToggle();
});
