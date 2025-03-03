import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layout/Layout'
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistraitonPage';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import ListedBooksPage from './pages/ListedBooksPage';
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "bookDetails/:bookId",
        element: <BookDetailsPage></BookDetailsPage>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: "listedBooks",
        element: <ListedBooksPage></ListedBooksPage>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: 'login',
        element: <LoginPage></LoginPage>
      },
      {
        path: 'registration',
        element: <RegistrationPage></RegistrationPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
