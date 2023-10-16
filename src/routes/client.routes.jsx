import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Prato } from '../pages/Prato'
import { NotFound} from '../pages/NotFound'

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Prato/:id" element={<Prato />} />

      <Route path="*" exact={true} element={<NotFound/>} />
  
    </Routes>
  )
}

