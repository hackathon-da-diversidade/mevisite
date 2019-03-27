import React from 'react'
import { Link } from "@reach/router"

const Card = ({ img, name, age, bio, place }) => (
  <div class="md:w-1/5 m-4 max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={img} alt={name} />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <span>{name}, {age}</span>
        <Link to={`lar/${place.id}`} class="no-underline float-right inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
         {place.name}
        </Link>
      </div>
      <p class="text-grey-darker text-base">
        {bio}
      </p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
        Me conheça
      </button>
    </div>
  </div>
)

export default Card
