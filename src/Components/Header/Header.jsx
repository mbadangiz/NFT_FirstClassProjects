import { Link } from "react-router-dom";
import Button from "../Common/Button/Button";

const Header = () => {
  return (
    <div className="w-full  h-16 flex flex-row justify-between items-center content-center overflow-visible">
      <h3
        className="Manage-titles relative z-40 after:block after:w-[60px] after:h-[60px] after:bg-pink-600 after:absolute 
      after:-z-10 after:-top-1 after:-left-0  after:rounded-full overflow-visible"
      >
        Best Nfts in Last Week
      </h3>
      <div className="w-60">
        <Link to="/Managenft">
          <Button innerText="Manage Your Nfts" type="button" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
