import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'font-awesome/css/font-awesome.css'

import { Dashboard } from '../src'
import logo from './cog_logo.png'

export function Basic() {
  return (
    <BrowserRouter>
      <Dashboard
        user={{ admin: false, name: 'Nick Klepinger' }}
        routes={[]}
        heading="Basic Dashboard"
        logo={logo}
      />
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/other">Other</Link>
    </div>
  )
}

function Other() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

const simpleRoutes = [
  {
    path: '/',
    icon: <i className="fa fa-lg fa-home" />,
    linkText: 'Home',
    component: Home,
    link: true,
    activeOnlyWhenExact: true,
  },
  {
    path: '/other',
    icon: <i className="fa fa-lg fa-cog" />,
    linkText: 'Other',
    component: Other,
    link: true,
  },
]

export function Simple() {
  return (
    <BrowserRouter>
      <Dashboard
        user={{ admin: false, name: 'Nick Klepinger' }}
        routes={simpleRoutes}
        heading="Simple Routes Example"
        logo={logo}
      />
    </BrowserRouter>
  )
}

export function Themed() {
  return (
    <BrowserRouter>
      <ThemeProvider
        theme={{
          primary: 'green',
          secondary: 'red',
          tertiary: 'darkblue',
          heading: 'pink',
        }}
      >
        <Dashboard
          user={{ admin: false, name: 'Nick Klepinger' }}
          routes={simpleRoutes}
          heading="Simple Routes Example"
          logo={logo}
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export function FullScreen() {
  return (
    <BrowserRouter>
      <Dashboard
        user={{ admin: false, name: 'Nick Klepinger' }}
        routes={simpleRoutes}
        heading="Simple Routes Example"
        logo={logo}
        hideSidebar={true}
      />
    </BrowserRouter>
  )
}
