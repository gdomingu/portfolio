$(document).ready(function(){
  var peg1 = $('#peg1')
  var peg2 = $('#peg2')
  var peg3 = $('#peg3')

  function play(){
    var discnum = prompt("How many discs?")
    var counter = 0
    var moves = 0
    function setup(){
      if (counter < discnum){
        counter++
        peg1.append('<div class="disc" id='+counter+'>'+counter+'</div>');
        setup()
      }
    }
    setup()

    $(function movedisc() {
        $( ".peg div:first-child" ).draggable();
        $( ".peg" ).droppable({
          drop: function( event, ui ) {
            var currentdisc = $('.ui-draggable-dragging')
            if ($(this).find("div:first-child").length === 0 || $(this).find("div:first-child").attr('id')  > currentdisc.attr('id')){
              $(this).prepend(currentdisc.removeAttr('style'))
              $(this).children().draggable().draggable('destroy');
              $( ".peg div:first-child" ).draggable();
              moves++
              $('#movescounter').empty().html('<p>Number of moves: '+moves+'</p>')
              if ($('#peg3').find('div').length == discnum){
                alert('You win in ' +moves+ ' moves!');
              }
            } else {
              alert("you can't move there!")
              currentdisc.removeAttr('style')
              movedisc()
            }
          }
        });
      });
  }

  $('#playbutton').on('click', function(){
    peg3.empty();
    play();
  });
});