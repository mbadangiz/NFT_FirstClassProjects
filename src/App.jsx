import ManageNfts from "./Components/ManageNfts/ManageNfts";
import NftsProvider from "./Components/Provider/NftsProvider";
function App() {
  return (
    <NftsProvider>
      <ManageNfts />
    </NftsProvider>
  );
}
export default App;
