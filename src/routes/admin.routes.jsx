import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Prato } from '../pages/Prato'
import { AdicionarPrato } from '../pages/AdicionarPrato'
import { EditarPrato } from '../pages/EditarPrato'
import { NotFound} from '../pages/NotFound'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Prato/:id" element={<Prato />} />
      <Route path="/AdicionarPrato" element={<AdicionarPrato />} />
      <Route path="/EditarPrato/:id" element={<EditarPrato />} />

      <Route path="*" exact={true} element={<NotFound/>} />
  
    </Routes>
  )
}

