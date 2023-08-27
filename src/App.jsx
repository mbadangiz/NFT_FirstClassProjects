import HomePage from "./Components/HomePage/HomePage";
import ManageNfts from "./Components/ManageNfts/ManageNfts";
import NftsProvider from "./Components/Provider/NftsProvider";
function App() {
  return (
    <NftsProvider>
      {/* <ManageNfts /> */}
      <HomePage />
    </NftsProvider>
  );
}
export default App;
