import 'package:ap003_dart_colecoes/ap003_dart_colecoes.dart' as ap003_dart_colecoes;
import 'dart:io';


void main(List<String> arguments) {
Map<String, String> contato =Map ();
  contato["Gabriel"] = "96784-2229";
  contato["Roberto"] = "95514-2494";
  contato["Maria"] = "98484-2439";

  int op = 0;
  do {
    print("Escolha uma opção: \n1 - Create\n2 - Remove\n3 - Update\n4 - Read\n5 - Sair");
    op = int.tryParse(stdin.readLineSync()!) ?? 0;
    switch (op){
      case 1:
        print("Digite o nome do contato: ");
        String nome = stdin.readLineSync() ?? "";
        print("Digite o número de telefone: ");
        String telefone = stdin.readLineSync() ?? "";
        contato[nome] = telefone;
        print("Contato " + nome + " adicionado com telefone " + telefone + " com sucesso.");
        break;
      case 2:
        print("Digite o nome do contato a ser deletado: ");
        String nome = stdin.readLineSync() ?? "";
        contato.remove(nome);
        print("Contato " + nome + " removido com sucesso.");
        break;
      case 3:
        print("Digite o atual do contato a ser atualizado: ");
        String nomeAtual = stdin.readLineSync() ?? "";
        print("Digite o novo nome do contato: ");
        String? novoNome = stdin.readLineSync() ?? "";
        print("Digite o novo número de telefone: ");
        String novoTelefone = stdin.readLineSync() ?? "";
        if (novoNome == nomeAtual){
          contato.update(nomeAtual, (value) => novoTelefone,);
          print("Contato " + nomeAtual + " atualizado com sucesso com telefone " + novoTelefone + ".");
        } else{
          contato.remove(nomeAtual);
          contato[novoNome] = novoTelefone;
          print("Contato " + nomeAtual + " atualizado com sucesso para " + novoNome + " com telefone " + novoTelefone + ".");
        }
        break;
      case 4:
        print("Contatos cadastrados: ");
        contato.forEach((nome,telefone){
          print("Nome: " + nome + "| Telefone: "+ telefone);
        });
        break;
      default:
      print("Digite uma opção válida.");
      break;
    }

  } while(op != 5);
  print("Sistema encerrado.");
}
