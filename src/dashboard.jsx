import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { Link, Switch, Route } from 'react-router-dom'

import { themeFunction } from './theme'

// const theme = {
//   primary: '#cdcdcd',
//   secondary: '#ffb700',
//   tertiary: '#525349',
//   heading: '#ffb700',
// }

// const themeFunction = outerTheme => {
//   if (outerTheme) {
//     const t = { ...outerTheme }
//     if (!t.primary) t.primary = theme.primary
//     if (!t.secondary) t.secondary = theme.secondary
//     if (!t.tertiary) t.tertiary = theme.tertiary
//     if (!t.heading) t.heading = theme.heading
//     return t
//   } else {
//     return theme
//   }
// }

const UserInfo = ({ user, heading, logo }) => (
  <Container>
    {logo && <img src={logo} alt="City of Goodyear" />}
    <Heading>{heading}</Heading>
    <Name>Hi, {user.name}!</Name>
  </Container>
)

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  logo: PropTypes.string,
}

export class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
    heading: PropTypes.string,
    logo: PropTypes.string,
    hideSidebar: PropTypes.bool,
  }

  static deafultProps = {
    heading: '',
    hideSidebar: false,
  }

  render() {
    const { user, routes, heading, logo, hideSidebar } = this.props

    return (
      <ThemeProvider theme={themeFunction}>
        <Wrapper>
          {!hideSidebar && (
            <Sidebar>
              <UserInfo user={user} heading={heading} logo={logo} />
              {routes.map(r => {
                return r.link ? buildLink(r, user) : null
              })}
            </Sidebar>
          )}
          <Inner>
            <Content>
              <Switch>
                {routes.map(r => {
                  return buildRoute(r, user)
                })}
              </Switch>
            </Content>
          </Inner>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

function buildLink(route, user) {
  if (route.admin) {
    if (user.admin) {
      return (
        <SidebarLink
          key={route.path}
          to={route.path}
          activeOnlyWhenExact={route.activeOnlyWhenExact}
        >
          {route.icon} {route.linkText}{' '}
          {route.badgeCount > 0 && <Badge>{route.badgeCount}</Badge>}
        </SidebarLink>
      )
    }
    return null
  }

  if (route.anchor) {
    return (
      <Anchor key={`${route.path}-${route.linkText}`} href={route.path}>
        {route.icon} {route.linkText}
      </Anchor>
    )
  }
  return (
    <SidebarLink
      key={route.path}
      to={route.path}
      activeOnlyWhenExact={route.activeOnlyWhenExact}
    >
      {route.icon} {route.linkText}{' '}
      {route.badgeCount > 0 && <Badge>{route.badgeCount}</Badge>}
    </SidebarLink>
  )
}

function buildRoute(route, user) {
  if (route.anchor) return null
  if (route.admin) {
    if (user.admin) {
      return (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      )
    }
    return null
  }

  return (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      render={props => <route.component {...props} />}
    />
  )
}

const SidebarLink = ({ to, activeOnlyWhenExact, children }) => (
  <Route path={to} exact={activeOnlyWhenExact}>
    {({ match }) => (
      <StyledLink to={to} active={!!match}>
        {children}
      </StyledLink>
    )}
  </Route>
)

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool,
  children: PropTypes.node,
}

//STYLED-COMPONENTS

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: Lato, Roboto, sans-serif;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.theme.tertiary};
  min-width: 250px;
`

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Content = styled.div`
  flex: 1;
  overflow: hidden;
`

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
`

const Heading = styled.h4`
  margin: 0 0 0.25rem 0;
  color: ${props => props.theme.heading};
`

const Name = styled.span`
  font-size: 0.85rem;
  color: white;
`

// npk - switching the eslint config here because active was always
// gettings flagged as unused, we just need to omit it from the
// Link props

/* eslint no-unused-vars: ["error", {"ignoreRestSiblings": true}] */
const StyledLink = styled(({ active, children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))`
  text-decoration: none;
  color: ${props =>
    props.active ? props.theme.secondary : props.theme.primary};
  padding: 0.5rem 0.5rem;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.primary};
  padding: 0.5rem; 0.5rem;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`

const Badge = styled.span`
  color: white;
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  padding: 2px 7px;
  min-width: 10px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.8rem;
  dipslay: inline-block;
  font-weight: bold;
`
