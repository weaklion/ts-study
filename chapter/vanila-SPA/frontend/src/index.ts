


const router = async () => {
  const routes = [
    { path : "/", view : "Dashboard" },
    { path : "/:id", view : "Detail" },
  ]

  const routeMatches = routes.map((route) => {
    return {
      route : route,
      isMatch : location.pathname === route.path
    }
  })

  let match = routeMatches.find(
    (matches) => matches.isMatch !== null
  )

  if(!match) {
    match = {
      route : routes[0],
      isMatch : false
    }
  }
}

