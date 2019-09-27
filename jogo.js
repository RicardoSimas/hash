
$(document).ready( function(){

    //Ocultando area do tabuleiro e deixando somente a do usuário;
    $('#user-area').show();
    $('#board-area').hide();

    $('#btn-start').click( function(){
        
        //Validação dos campos nome;
        if($('#in-name-p1').val() == ''){
            alert('Digite um nome para o player 1.');
            return false;
        }
        if($('#in-name-p2').val() == ''){
            alert('Digite um nome para o player 2.');
            return false;
        }

        //Atribuindo conteúdo capturado em Input para o elemento Span;
        $('#out-name-p1').html($('#in-name-p1').val());
        $('#out-name-p2').html($('#in-name-p2').val());

        //Ocultando area do usuário e deixando somente tabuleiro;
        $('#user-area').hide();
        $('#board-area').show();



    });

    $('.play').click( function(){
        var campo_clicado = this.id;
        play(campo_clicado);
    });

    function play(){
        
    }
});