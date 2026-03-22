import React, {useState} from 'react'


const App = () => {
  

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensgemDeErro] = useState(null)

  const obterEstacao = (dataAtual, latitude) => {
    const d1 = new Date(dataAtual.getFullYear(), 5, 21)
    const d2 = new Date(dataAtual.getFullYear(), 8, 24)
    const d3 = new Date(dataAtual.getFullYear(), 11, 22)
    const d4 = new Date(dataAtual.getFullYear(), 2, 21)
    const estaNoSul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2) 
      return estaNoSul ? 'Inverno' : 'Verão'
    if(dataAtual >= d2 && dataAtual < d3) 
      return estaNoSul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4) 
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
}

  const icones = {
    'Primavera': 'leaf',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
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
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div 
              style={{height: '6rem'}}
              className="d-flex align-itens-center border rounded mb-2">
                <i className={`fa-solid fa-5x fa-${icone}`}></i>
                <p className="w-75 ms-3 text-center fs-1">
                  {estacao}
                </p>
              </div>
              <div>
                <p className="text-center">
                  {
                    latitude ?
                    `Coordenadas: ${latitude}, ${longitude}. Data: ${data}` :
                    mensagemDeErro ? 
                    mensagemDeErro
                    :
                    'Clique no botão para saber a sua estação climática'
                  }
                </p>
              </div>
              <button
                onClick={obterLocalizacao}
                className='btn btn-outline-primary w-100 mt-2'>
                Qual a minha estação?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App