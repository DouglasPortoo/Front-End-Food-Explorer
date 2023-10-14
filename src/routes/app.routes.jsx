import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { AdicionarPrato } from '../pages/AdicionarPrato'
import { EditarPrato } from '../pages/EditarPrato'
import { Prato } from '../pages/Prato'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AdicionarPrato" element={<AdicionarPrato />} />
      <Route path="/EditarPrato/:id" element={<EditarPrato />} />
      <Route path="/Prato/:id" element={<Prato />} />
  
    </Routes>
  )
}

