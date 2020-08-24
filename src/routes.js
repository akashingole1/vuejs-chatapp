import Login from './components/Login'
import Signup from './components/Signup'
import Chat from './components/Chat'
import Profile from './components/Profile'


export default [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/chat', component: Chat },
    { path: '/profile', component: Profile }
]