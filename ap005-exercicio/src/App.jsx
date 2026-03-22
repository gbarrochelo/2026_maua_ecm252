import React, {useState} from 'react'


const App = () => {
  

  const [nome, setLatitude] = useState(null)
  const [classe, setLongitude] = useState(null)
  const [nivel, setEstacao] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensgemDeErro] = useState(null)

  const obterAtributos = (nome, classe, nivel) => {
    const classeAtual = classe
    const nomeAtual = nome
    const nivelAtual = nivel


}

  const icones = {
    'Guerreiro': 'leaf',
    'Mago': 'sun',
    'Arqueiro': 'leaf',
    'Curandeiro': 'snowflake'
  }

  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()  
        const estacao = obterEstacao(dataAtual, position.coords.latitude)
        const icone = icones[estacao]
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setEstacao(estacao)
        setData(dataAtual.toLocaleTimeString())
        setIcone(icone)
        icones[estacao]
      },
      (erro) => {
        setMensagemDeErro('É preciso liberar o acesso à localização para ver a sua estação.')
        console.log(`Erro: ${erro.toString()}`)
      })

  }
  return (
    
    <div className="container mt-2">
      <div classname="row justify-content-cente">
        <div className="col-12 text-center">
          Criador de Personagem RPG
          <div className="card">
            <div className="card-body">
              Nome do Personagem
              <input type="text" className="form-control" onChange={(e) => setNome(e.target.value)} />
              Classe
              <select className="form-control mt-2" onChange={(e) => setClasse(e.target.value)}>
                <option value="">Selecione a classe</option>
                <option value="Guerreiro">Guerreiro</option>
                <option value="Arqueiro">Arqueiro</option>
                <option value="Mago">Mago</option>
                <option value="Curandeiro">Curandeiro</option>
              </select>
              Nível
              <button className="btn btn-secondary mt-2" onClick={() => setNivel(nivel - 1)}>-</button>
                <span className="mx-2">{nivel}</span>
              <button className="btn btn-secondary mt-2" onClick={() => setNivel(nivel + 1)}>+</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App