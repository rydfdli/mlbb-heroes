import Drawer from "./pages/Drawer"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Role from "./pages/roles/Role"
import Blank from "./pages/Blank"


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drawer />}>
            <Route index element={<Home />} />
            <Route path="roles/:role" element={<Role />} />
            <Route path="*" element={<Blank />} />
            {/* <Route path="kategori" element={<Kategori platform="Hello"/>} />
            <Route path="pages/:category" element={<Categories />} />
            <Route path="contact" element={<Contact />} />
             */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
