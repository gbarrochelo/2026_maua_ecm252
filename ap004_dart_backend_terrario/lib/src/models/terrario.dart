enum Bioma{
  tropical,
  desertico,
  temperado,
  musgo;

  static Bioma? porNome(String? nome){
    if(nome == null) return null;
    final alvo = nome.trim().toLowerCase();
    for(final bioma in Bioma.values){
      if(bioma.name == alvo) return bioma;
    }
    return null;
  }
}

class Terrario{
  final int? id;
  final String apelido;
  final Bioma bioma;
  final int umidadeAlvo;
  final double volumeLitros;
  final DateTime dataMontagem;
  final DateTime? criadoEm;
  final DateTime? atualizadoEm;

  const Terrario({
    this.id,
    required this.apelido,
    required this.bioma,
    required this.umidadeAlvo,
    required this.volumeLitros,
    required this.dataMontagem,
    this.criadoEm,
    this.atualizadoEm
  });

  Terrario copyWith({
    int? id,
    String? apelido,
    Bioma? bioma,
    int? umidadeAlvo,
    double? volumeLitros,
    DateTime? dataMontagem,
    DateTime? criadoEm,
    DateTime? atualizadoEm
  }) {
    return Terrario(
      id: id ?? this.id,
      apelido: apelido ?? this.apelido,
      bioma: bioma ?? this.bioma,
      umidadeAlvo: umidadeAlvo ?? this.umidadeAlvo,
      volumeLitros: volumeLitros ?? this.volumeLitros,
      dataMontagem: dataMontagem ?? this.dataMontagem,
      criadoEm: criadoEm,
      atualizadoEm: atualizadoEm
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'apelido': 'apelido',
    'bioma': bioma.name,
    'umidadeAlvo': umidadeAlvo,
    'volumeLitros': volumeLitros,
    'dataMontagem': '',
    'criadoEm': criadoEm?.toIso8601String(),
    'atualizadoEm': atualizadoEm
  };
}