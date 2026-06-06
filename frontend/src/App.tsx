import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/pages/Dashboard"
import Notes from "./components/pages/Notes"
import Collections from "./components/pages/Collections"
import Tags from "./components/pages/Tags"
import Settings from "./components/pages/Settings"
import Search from "./components/pages/Search"



function App() {
  return (
    <>
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/collections" element={<Collections />}/>
          <Route path="/tags" element={<Tags />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
