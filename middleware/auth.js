export default ({ store, route, redirect }) => {
  if (!store.state.auth.auth) {
    redirect('/login')
  } else if (route.fullPath.indexOf('/login') !== -1) {
    redirect('/')
  }
}
