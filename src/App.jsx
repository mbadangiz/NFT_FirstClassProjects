import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ManageNfts from "./Components/ManageNfts/ManageNfts";
import NftsProvider from "./Components/Provider/NftsProvider";
function App() {
  return (
    <NftsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Managenft" element={<ManageNfts />} />
        </Routes>
      </BrowserRouter>
    </NftsProvider>
  );
}
export default App;
