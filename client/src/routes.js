import Login from './components/Login.jsx'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

export const routes = {
  "/": "/login",
  "/login": Login,
  "/:roomId/post": Post,
  "/:roomId/dashboard": Dashboard
}
