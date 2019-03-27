import React, { useState } from 'react'
import { Link } from "@reach/router";
import './header.css'

const Header = () => {
  const [tab, setTab] = useState(false)

  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <Link to="lares" class="text-white none-text-decoration font-semibold text-xl tracking-tight">
          Me Visite
        </Link>
      </div>
      <div onClick={() => setTab(true)} class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div class={`w-full ${tab? 'block' : 'hidden' } flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div class="text-sm lg:flex-grow">
          <Link to="lares" class="none-text-decoration block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Lares
          </Link>
          <Link to="quemsomos" class="none-text-decoration block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
            Sobre nós
          </Link>
        </div>
        <div>
          <Link to="indique" class="none-text-decoration Einline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Indique um lar</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header