import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { useSelector } from "react-redux";
import BtnProfile from "./components/BtnProfile";

const ProfilePage = () => {
  const state = useSelector((state) => state);

  console.log(state.auth.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="container profile-container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="profile-h1">Mi Perfil</h1>
        </div>

        <div className="col-12 text-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 25.7143C55.7618 25.7143 51.6188 26.9711 48.0949 29.3257C44.571 31.6803 41.8245 35.0269 40.2026 38.9425C38.5807 42.8581 38.1563 47.1666 38.9832 51.3234C39.81 55.4801 41.8509 59.2983 44.8477 62.2951C47.8445 65.292 51.6628 67.3329 55.8195 68.1597C59.9762 68.9865 64.2848 68.5622 68.2004 66.9403C72.1159 65.3184 75.4626 62.5718 77.8172 59.0479C80.1718 55.524 81.4286 51.381 81.4286 47.1429C81.4286 41.4597 79.1709 36.0092 75.1523 31.9906C71.1336 27.9719 65.6832 25.7143 60 25.7143Z"
              fill="#313967"
            />
            <path
              d="M60 0C48.1331 0 36.5327 3.51894 26.6658 10.1118C16.7989 16.7047 9.10851 26.0754 4.56725 37.039C0.025997 48.0025 -1.1622 60.0665 1.15291 71.7054C3.46802 83.3443 9.18247 94.0352 17.5736 102.426C25.9648 110.818 36.6557 116.532 48.2946 118.847C59.9335 121.162 71.9975 119.974 82.961 115.433C93.9246 110.891 103.295 103.201 109.888 93.3342C116.481 83.4672 120 71.8669 120 60C119.982 44.0926 113.655 28.8419 102.406 17.5936C91.1581 6.34539 75.9074 0.0181488 60 0ZM94.2514 98.2543C94.166 92.6328 91.8757 87.2699 87.8739 83.3211C83.8721 79.3722 78.4792 77.1534 72.8571 77.1428H47.1429C41.5208 77.1534 36.1279 79.3722 32.1261 83.3211C28.1243 87.2699 25.834 92.6328 25.7486 98.2543C17.9767 91.3146 12.496 82.178 10.0322 72.0543C7.56833 61.9305 8.23759 51.2972 11.9513 41.5622C15.6651 31.8273 22.2481 23.45 30.8288 17.5396C39.4094 11.6291 49.5829 8.46439 60.0022 8.46439C70.4214 8.46439 80.5949 11.6291 89.1756 17.5396C97.7562 23.45 104.339 31.8273 108.053 41.5622C111.767 51.2972 112.436 61.9305 109.972 72.0543C107.508 82.178 102.028 91.3146 94.2557 98.2543H94.2514Z"
              fill="#313967"
            />
          </svg>
          <p>{state.auth.name}</p>
        </div>

        <div className="col-12 card-container">
          <BtnProfile title="Change password" iconClassNames="fas fa-user-lock icon-profile"
            linkTo="./" className="onHover" />
          <BtnProfile title="Purchases" iconClassNames="fas fa-shopping-bag icon-profile"
            linkTo="./" className="onHover" />
          <BtnProfile title="Entries" iconClassNames="fas fa-ticket-alt icon-profile"
            linkTo="./" className="onHover" />
          <BtnProfile title="Logout" iconClassNames="fas fa-sign-out-alt icon-profile"
            linkTo="/home" className="onHover" click={ handleLogout } />
          {/* start change password
          <Link className="onHover" to="./" className="link-change-password">
            <div className="div-change-password">
              <div className="container-change-password">
                <i className="fas fa-user-lock icon-profile"></i>
              </div>
              <div className="text-change-password">
                <p className="p-change-password">Cambiar contraseña</p>
              </div>
            </div>
          </Link>
          {/*End change password*/}
          {/*start change password */}
          {/* <Link
            className="onHover"
            className="link-change-password"
            to="/home"
            onClick={handleLogout}
          >
            <div className="div-change-password">
              <div className="container-change-password">
                <i className="fas fa-sign-out-alt icon-profile" ></i>
              </div>
              <div className="text-change-password">
                <p className="p-change-password">Cerrar sesión</p>
              </div>
            </div>
          </Link> */}
          {/*end change password */}
          {/* <Link className="onHover" to="./" className="link-change-password">
            <div className="div-change-password">
              <div className="container-change-password">
                <i className="fas fa-shopping-bag icon-profile" ></i>
              </div>
              <div className="text-change-password">
                <p className="p-change-password">Mis compras</p>
              </div>
            </div>
          </Link>
          <Link className="onHover" to="./" className="link-change-password">
            <div className="div-change-password">
              <div className="container-change-password">
                <i className="fas fa-ticket-alt icon-profile"></i>
              </div>
              <div className="text-change-password">
                <p className="p-change-password">Mis Entradas</p>
              </div>
            </div>
          </Link> */}


        </div>
      </div>
    </div>
  );
};

export default ProfilePage;