# NPK-UI

Simple UI library for my work projects.

## What this is

This is a simple UI library to quickly reuse some compnents that I use in my work projects.

## What this is NOT

This library will probably not be directly useful to anyone outside of my organization. However, feel free to borrow any ideas, patterns, or anti-patterns that you see fit.

## Installation

```
npm install --save npk-ui
```

or

```
yarn add npk-ui
```

> This package also depends on `react`, `prop-types`, `styled-components` and `react-router-dom`. Make sure those are all installed!

## Components

### Dashboard

#### props

##### user

> `object {admin: boolean, name: string}` | required

Used to display the user name in the sidebar and to determine if any routes should be hidden for non-admin users.

##### heading

> `string` | defaults to empty string

Used to give a heading to the dashboard sidebar.

##### logo

> `string` | defaults to null

Will be used as `src` attribute for a image in the sidebar. Omit if no image is wanted.

##### hideSidbar

> `boolean` | defaults to false

If true, will hide the sidebar.

##### routes

> `array` | required

An array of route objects that will be used to build up React Router `Route`s. Each route object can have the following properties:

> **path** | `string` | required

The path the route should point to.

> **icon** | `React.node`

An optional icon to render to the left of the route links on the sidebar.

> **linkText** | `string` | required

The text to render for the link to the route.

> **component** | `React.Component` | required

The component that the route should render.

> **link** | `boolean`

If true, the sidebar will render a link for this route. If false, only a route will be created. This is useful for routes with parameters. You probably don't want a direct link
to a parameterized route on your dashboard.

> **activeOnlyWhenExact** | `boolean`

This determines if the `exact` attribute on the React Route `Route` gets set or not.

> **badgeCount** | `number`

If given, a badge will be displayed to the right of the created link that shows a badge with the number provided.

> **anchor** | `boolean`

If given, a simple anchor tag will be created that does **NOT** use the router. Useful for if you need to have link outside of the app in the nav.

#### Simple Example

```jsx
import { Dashboard } from 'npk-ui'
import logo from './my-image.png'

const routes = [
  {
    path: '/',
    icon: <i className="fa fa-lg fa-home" />,
    linkText: 'Home',
    component: SomeComponent,
    link: true,
    activeOnlyWhenExact: true,
  },
]

function App() {
  return (
    <BrowserRouter>
      <Dashboard
        user={{ admin: false, name: 'Luke Skywalker' }}
        routes={routes}
        heading="Basic Dashboard"
        logo={logo}
      />
    </BrowserRouter>
  )
}
```

### Modal

A simple component using the new React 16 portal feature to display a modal over a transparent overlay.

#### Sample Usage

```jsx
import { Modal } from 'npk-ui'

class App extends React.Component {
  state = {
    showModal: false,
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  buttonClick = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div>
        <h1>Main Content</h1>
        <button type="button" onClick={this.buttonClick}>
          Show Modal
        </button>
        {this.state.showModal && (
          <Modal
            handleClose={this.handleClose}
            closeIcon={<span>X</span>}
            heading="Modal Heading Text"
          >
            <h2>The contents of the modal go here.</h2>
          </Modal>
        )}
      </div>
    )
  }
}
```

#### props

##### handleClose

> `function(void)` | required

A callback to notify when the close button has been clicked.

##### closeIcon

> `React.node`

What to render for the close icon in the top right of the modal.

##### heading

> `string` | defaults to empty string

The heading to render at the top of the modal.

##### children

> `React.node`

This content will be rendered inside of the modal.

## Examples

Examples can be found in the stories folder.

## LICENSE

MIT
