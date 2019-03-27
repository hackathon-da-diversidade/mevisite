import React from 'react'
import './home.css'
import Banner from './banner-home.png'
import Card from '../../components/card/card'

const residentes = [{
  name: 'Ilse',
  img: 'https://mevisite.herokuapp.com/assets/img/ilseMaria.png',
  age: 83,
  bio: 'Eu tenho um sonho: de viajar para um lugar bem bonito!',
  place: { id: 1, name: 'São V. de Paula' }
}, {
  name: 'Almira',
  img: 'https://mevisite.herokuapp.com/assets/img/almira.png',
  age: 78,
  bio: 'Eu tenho um sonho: de viajar para um lugar bem bonito!',
  place: { id: 1, name: 'São V. de Paula' }
}, {
  name: 'Antônio',
  img: 'https://mevisite.herokuapp.com/assets/img/antonio.png',
  age: 79,
  bio: 'Eu tenho um sonho: de viajar para um lugar bem bonito!',
  place: { id: 1, name: 'São V. de Paula' }
}, {
  name: 'Eduardo',
  img: 'https://mevisite.herokuapp.com/assets/img/perfil.jpeg',
  age: 77,
  bio: 'Eu tenho um sonho: de viajar para um lugar bem bonito!',
  place: { id: 1, name: 'São V. de Paula' }
}]

const PaginaHome = () => (
  <>
    <img class="w-full" src={Banner} />
    <section>
      <div class="flex justify-center p-6">
        <h1>Conheça nossas residentes</h1>
      </div>

      <div class="px-2">
        <div class="flex content-center justify-center flex-wrap -mx-2">
          {residentes.map(props => <Card {...props} />)}
        </div>
      </div>
    </section>
  </>
)

export default PaginaHome