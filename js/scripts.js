$(document).ready(function() {

  $(".btn").click(function(event) {
    var personInput = $("#person1").val();
    var animalInput = $("#animal").val();
    var verbInput = $("#verb").val();

    $(".animal").text(animalInput);
    $(".person1").text(personInput);
    $(".verb").text(verbInput);

    event.preventDefault();

    $("#story").show();  

  })


});
