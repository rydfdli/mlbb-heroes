import Drawer from "./pages/Drawer"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fighter from "./pages/roles/Fighter"
import Assassin from "./pages/roles/Assassin"
import Marksman from "./pages/roles/Marksman"
import Mage from "./pages/roles/Mage"
import Tank from "./pages/roles/Tank"
import Support from "./pages/roles/Support"


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drawer />}>
            <Route index element={<Home />} />
            <Route path="roles/1/:role" element={<Fighter />} />
            <Route path="roles/2/:role" element={<Assassin />} />
            <Route path="roles/3/:role" element={<Marksman />} />
            <Route path="roles/4/:role" element={<Mage />} />
            <Route path="roles/5/:role" element={<Tank />} />
            <Route path="roles/6/:role" element={<Support />} />
            {/* <Route path="kategori" element={<Kategori platform="Hello"/>} />
            <Route path="pages/:category" element={<Categories />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Blank />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
