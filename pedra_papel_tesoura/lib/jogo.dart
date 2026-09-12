// Exibir o menu
// Capturar opção do usuario, validando
// se o susuario digitou 4, sair
// senão
// mapear a opção do usuario de int para enum
// mapear a opção do computador de int para enum
//exibir as opções de cada um
// decidir quem venceu se houve empate
//exibir o resultado
// ajustar para que o jogo tenha 5 rodadas e indique o vencedor no final

import 'dart:io';
import 'dart:math';

enum OPCAO { pedra, papel, tesoura, sair }

OPCAO converterOpcao(int opcao) {
  switch (opcao) {
    case 1:
      return OPCAO.pedra;
    case 2:
      return OPCAO.papel;
    case 3:
      return OPCAO.tesoura;
    case 4:
      return OPCAO.sair;
    default:
      throw ArgumentError("Opção inválida");
  }
}

void jogo() {
  int rodada = 1;
  int vitoriasUsuario = 0;
  int vitoriasComputador = 0;
  OPCAO opcaoUsuario;

  do {
    // Menu
    stdout.write(
      "\nSelecione uma opção:\n"
      "1 - Pedra\n"
      "2 - Papel\n"
      "3 - Tesoura\n"
      "> ",
    );

    // Input do usuario
    int entrada = int.parse(stdin.readLineSync()!);
    opcaoUsuario = converterOpcao(entrada);

    // "Input" do computador
    int numeroComputador = Random().nextInt(3) + 1;
    OPCAO opcaoComputador = converterOpcao(numeroComputador);

    // Exibição das escolhas do usuario e do computador
    stdout.write("Você escolheu: ${opcaoUsuario.name}\n");
    stdout.write("Computador escolheu: ${opcaoComputador.name}\n");

    // Decide vencedor da rodada
    if (opcaoUsuario == opcaoComputador) {
      stdout.write("Empate!");
    } else if ((opcaoUsuario == OPCAO.pedra &&
            opcaoComputador == OPCAO.tesoura) ||
        (opcaoUsuario == OPCAO.papel && opcaoComputador == OPCAO.pedra) ||
        (opcaoUsuario == OPCAO.tesoura && opcaoComputador == OPCAO.papel)) {
      vitoriasUsuario += 1;
    } else {
      vitoriasComputador += 1;
    }

    //Increnta a rodada
    rodada += 1;
  } while (rodada <= 5);

  // Decide que venceu as 5 rodadas e exibe
  if (vitoriasUsuario < vitoriasComputador) {
    stdout.write(
      "O computador venceu com $vitoriasComputador vitórias contra $vitoriasUsuario do usuário.",
    );
  } else if (vitoriasComputador < vitoriasUsuario) {
    stdout.write(
      "O usuario venceu com $vitoriasUsuario vitórias contra $vitoriasComputador do computador.",
    );
  } else {
    stdout.write("Empate");
  }
}

void main() {
  jogo();
}
