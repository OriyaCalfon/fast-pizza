import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import "../styles/ui.css";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="home-container sm-margin">
      <h1 className="home-heading md-text">
        The best pizza.
        <br />
        <span className="home-highlight">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

