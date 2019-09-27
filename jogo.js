

$(document).ready( function(){

    $('#user-area').show();
    $('#board-area').hide();

    $('#btn-start').click( function(){
        if($('#in-name-p1').val() == ''){
            alert('Digite um nome para o player 1.');
            return false;
        }
        if($('#in-name-p2').val() == ''){
            alert('Digite um nome para o player 2.');
            return false;
        }

        $('#out-name-p1').html($('#in-name-p1').val());
        $('#out-name-p2').html($('#in-name-p2').val());

        $('#user-area').hide();
        $('#board-area').show();

    });
});