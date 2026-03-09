import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
