$(document).ready(function() {
    $(".juegosB").hide();
    $(".apuestaB").hide();


    // Apuesta
    $('.count').prop('disabled', true);
                $(document).on('click','.plus',function(){
                    $('.count').val(parseInt($('.count').val()) + 1 );
                });
                $(document).on('click','.minus',function(){
                    $('.count').val(parseInt($('.count').val()) - 1 );
                        if ($('.count').val() == 0) {
                            $('.count').val(1);
                        }
                    });
});


$(".ocultoLoginB").click(function(){
  $(".loginB").hide();
  $(".juegosB").show();
});

$(".juegosB").click(function(){
  $(".juegosB").hide();
  $(".apuestaB").show();
});