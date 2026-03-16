import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Components from './pages/Components'
import About from './pages/About'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/components" element={<Components />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
