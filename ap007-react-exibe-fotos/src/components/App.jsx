import React from 'react'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Busca from './Busca'
import { createClient } from 'pexels'

state = {
    photos: []
}
pexelsClient = null

export default class App extends React.Component {

    onBuscaRealizada = (termoDeBusca) => {
        this.pexelsClient.photos.search({query: termoDeBusca})
        .then((result => this.setState({photos: result})))
    }
    componentDidMount(){
        this.pexelsClient = createClient('c2CIynQRK3c9nPxhaoZ1VtnRPCFomoFvIexzioAatRnS2rKxACz9x1lO')
    }

    render() {
        return (
            <div className='grid justify-content-center m-auto w-9 border-round border-1'>
                <div className="col-12">
                    <PexelsLogo/>
                </div>

                <i className='pi pi-apple'></i>
                <div className='col-12'>
                    <h1>Exibir uma lista de ...</h1>
                </div>
                <div className='col-12'>
                    <Busca dica='Digite algo que deseja ver...' 
                    onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
                <div className='col-12'>
                    {
                        this.state.photos.map((photo, key) =>(
                            <div key={key}>
                                <img src={photo.src.small} alt={photo.alt} />
                            </div>
                        ))
                
                    }
                </div>
            </div>
        )
    }

}

