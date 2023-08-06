import "./Card.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/async/cart";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
      const userId = user._id;
  const handleCart = (id) => {
        dispatch(add({ userId: userId, productId: id }));
  };

  return (
    <div className="card">
      <img src={process.env.REACT_APP_SERVER_URL + "/" + item.image} alt="" />

      <AddShoppingCartIcon
        sx={{ position: "absolute", right: "5%" }}
        onClick={handleCart(item._id)}
      />

      <FavoriteBorderIcon sx={{ position: "absolute", left: "5%" }} />
      <div className="PrIcon">
        <p>Name:{item.name}</p>
        <p>Rs.{item.prise}</p>
      </div>
      <button className="byBtn">By Now</button>
    </div>
  );
};

export default Card;
