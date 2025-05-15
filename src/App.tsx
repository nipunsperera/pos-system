import { Route, Routes} from "react-router";

import LandPage from "./Pages/LandPage.tsx";
import TopBar from "./Components/TopBar.tsx";

function App(){

  return (
    <div className="absolute h-full w-full bg-gradient-to-br from-thisara-start to-thisara-end">
        <TopBar/>
        <Routes>
            <Route path="/" element={<LandPage />}/>
        </Routes>
    </div>
  )
}

export default App
