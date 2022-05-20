/** @format */
import { Route, Routes } from "react-router-dom";

import Admin from "./Components/Administrator/Admin";

import AppUser from "./AppUser";


function App() {

  return (
     <Routes>
        <Route path='/*' element={<AppUser />} />
        <Route path='/Admin/*' element={<Admin />} />
      </Routes>
  );
}
export default App;
