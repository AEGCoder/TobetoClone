import AdminLayout from './AdminLayout'

const isAdmin = window.location.pathname.startsWith('/admin');
 export const Layout = isAdmin ? AdminLayout : ({ children }) => children