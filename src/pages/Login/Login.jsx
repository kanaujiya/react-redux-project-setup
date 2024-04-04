import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsFetching } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log("Privous Data::", user);
  const changeData = () => {
    dispatch(setIsFetching({ isAuthenticated: true }));
    navigate("/user/dashboard");
  };

  return (
    <div>
      <button onClick={changeData}>Click Login</button>
    </div>
  );
};

export default Login;
