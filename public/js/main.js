$(document).ready(function(){
  $('#jpn').on('click', function(){
    $('body').empty().html('<%= j render partial "jpn" %>')
  })
});












