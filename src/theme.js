const theme = {
  primary: '#cdcdcd',
  secondary: '#ffb700',
  tertiary: '#525349',
  heading: '#ffb700',
}

export const themeFunction = outerTheme => {
  if (outerTheme) {
    const t = { ...outerTheme }
    if (!t.primary) t.primary = theme.primary
    if (!t.secondary) t.secondary = theme.secondary
    if (!t.tertiary) t.tertiary = theme.tertiary
    if (!t.heading) t.heading = theme.heading
    return t
  } else {
    return theme
  }
}
