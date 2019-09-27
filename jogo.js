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

    $('.play').click(function () {
        var campo_clicado = this.id;
        play(campo_clicado);
    });

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

    }

    function winner(pontos) {
        //Verifica vencedor através dos pontos somados;
        if (pontos == 3) {
            alert('Player 1 venceu!');
        } else if (pontos == -3) {
            alert('Player 2 venceu!');
        }
    }
});