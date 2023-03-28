import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { FetchApp } from '../FetchApp';
import { TodoApp } from '../TodoApp';

const MainPage = () => {
  return (
    <>
      <h1>Esta es la Página Principal</h1>
      <p>Aqui podemos poner los contenidos de la pagina</p>
    </>
  )
}

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/*"        element={<MainPage/>} />
          <Route path="/home"     element={<MainPage/>} />
          <Route path="/todoapp"  element={<TodoApp/>} />
          <Route path="/fetchapp" element={<FetchApp/>} />
      </Routes>
    </>
  )
}