


const navigateTo = (url : string) => {
  history.pushState(null, null, url);
}

const router = async () => {

  const routes = [
    { path : "/", view : "Dashboard" },
    { path : "/:id", view : "Detail" },
  ]

  const routeMatches = routes.map((route)  => {
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

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e : MouseEvent) => {
    if((<HTMLElement> e.target).matches("[data-link]")) {
      e.preventDefault();
      navigateTo((<HTMLLIElement> e.target).getAttribute('href'));
    }
  });
  router();
})