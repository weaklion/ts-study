import Dashboard from "./Dashboard";
import Detail from "./Detail";

const navigateTo = (url : string) => {
  history.pushState(null, null, url);
}

const router = async () => {

  const routes = [
    { path : "/", view : Dashboard },
    { path : "/:id", view : Detail },
  ]
}