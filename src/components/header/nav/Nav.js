import styles from "./Nav.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogIn, FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { removeUser } from "../../../store/user/user.slice";
import { removeUserId } from "../../../store/cart/cart.slice";
import axios from "axios";
import NavCartBlock from "./nav-cart-block/NavCartBlock";

export function Nav() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cartSlice);

  const navigate = useNavigate();
  const { fetchLogin, login, isAuthenticated, isAdmin } =
    useContext(LoginContext);
  const location = useLocation();

  useEffect(() => {
    fetchLogin();
  }, [location]);

  function handleLogout() {
    axios
      .post("/api/member/logout")
      .then(() => {
        // dispatch(removeUser());
        // dispatch(removeUserId())
        alert("로그아웃 되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // const handleSignOut = () => {
  //     signOut(auth).then(()=>{
  //
  //       dispatch(removeUser());
  //       dispatch(removeUserId())
  //     })
  //       .catch((error)=>{
  //         console.error(error)
  //       })
  // }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"cart"}>
              {" "}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>{products.length}</b>}
            {products.length > 0 && (
              <div className={styles.nav_hover_cart}>
                <NavCartBlock />
              </div>
            )}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={"/order"}>
              {" "}
              <FiUser title="주문" />
            </Link>
          </div>
        </li>
        <li>
          {isAuthenticated() && (
            <GoSignOut
              className={styles.nav_sign_out}
              title="로그아웃"
              onClick={handleLogout}
            />
          )}
          {isAuthenticated() || (
            <Link to={"/login"}>
              <FiLogIn title="로그인" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
