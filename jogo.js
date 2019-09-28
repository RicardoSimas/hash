var rodada = 0;

var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function () {

    //Ocultando area do tabuleiro e deixando somente a do usuário;
    $('#user-area').show();
    $('#board-area').hide();
    $('#restart').hide();

    $('#btn-start').click(function () {

        //Validação dos campos nome;
        if ($('#in-name-p1').val() == '') {
            alert('Digite um nome para o player 1.');
            return false;
        }
        if ($('#in-name-p2').val() == '') {
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
    
    //Capturando id do elemento que possui a classe .play;
    $('.play').click(function () {
        var campo_clicado = this.id;
        $('#' + campo_clicado).off();
        play(campo_clicado);
    });

    //Lógica de jogada para cada jogador;
    function play(id) {
        var ponto = 0;
        var icone = '';

        if ((rodada % 2) == 0) {
            ponto = 1;
            icone = 'url("imagens/marcacao_1.png")';
        } else if ((rodada % 2) == 1) {
            ponto = -1;
            icone = 'url("imagens/marcacao_2.png")';
        }

        $('#' + id).css('background-image', icone);
        rodada++;

        var linha_coluna = id.split('-');

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        combinations();
    }

    //Verifica combinações de vitórias
    function combinations() {

        //Verifica vitoria na horizontal;
        var pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos += matriz_jogo['a'][i];
        }
        winner(pontos);

        var pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos += matriz_jogo['b'][i];
        }
        winner(pontos);

        var pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['c'][i];
        }
        winner(pontos);

        //Verifica se houve vitória na vertical
        for (var j = 1; j <= 3; j++) {
            var pontos = 0;
            pontos += matriz_jogo['a'][j];
            pontos += matriz_jogo['b'][j];
            pontos += matriz_jogo['c'][j];
            winner(pontos);
        }

        //Verifica se houve vitória na diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        winner(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        winner(pontos);

    }
    //Verifica vencedor através dos pontos somados;
    function winner(pontos) {
        
        if (pontos == 3) {
            var name_winner1 = $('#in-name-p1').val();
            alert(name_winner1 + ' venceu!');
            $('.play').off();
            $('#restart').show();
        } else if (pontos == -3) {
            var name_winner2 = $('#in-name-p2').val();
            alert(name_winner2 + ' venceu!');
            $('.play').off();
            $('#restart').show();
        }
    
    }
    //Botão restart;
    $('#btn-restart').click( function(){
        window.location.href = 'index.html';
    });

    $('#btn-start').mouseover( function(){
        $('#btn-start').attr("src","imagens/play1.png");
    });
    $('#btn-start').mouseout( function(){
        $('#btn-start').attr("src","imagens/play.png");
    });
});