import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './TodoApp'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { AppRouter } from './Router/AppRouter';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <TodoApp /> */}
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
