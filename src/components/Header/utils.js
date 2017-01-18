export const getMenuStyle = (appBarStyle, currentPathname, menuPathname) => {
  const activeStyle = {
    color: appBarStyle.color,
    backgroundColor: appBarStyle.textColor,
  }
  const normalStyle = {
    color: appBarStyle.textColor
  }

  if (menuPathname === currentPathname) {
    return activeStyle
  }
  return normalStyle
}