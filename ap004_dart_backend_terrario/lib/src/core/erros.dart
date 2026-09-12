sealed class ErrorApp implements Exception{
  final String mensagem;
  const ErrorApp(this.mensagem);

  @override
  String toString() => '$runtimeType: $mensagem';
}
class  NaoEncontrado extends ErrorApp{
  const NaoEncontrado(super.mensagem);
}

//422
class ErroValidacao extends ErrorApp{
  const ErroValidacao(super.mensagem, [this.campos = const {}]);
  final Map<String, String> campos;
}

class Conflito extends ErrorApp{
  const Conflito(super.mensagem);
}

//400
class RequisicaoInvalida extends ErrorApp{
  const Requisicaoinvalida(super.mensagem);
}


