import * as React from "react";
import UserCard from "./components/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";
import { getAllUsers } from "../../services/user.service";
import styles from "./user.module.css";
import SnackBar from "../../components/common/SnackBar";
import { useSelector, useDispatch } from "react-redux";
import { clearErrorMessage } from "../../app/redux/slices/authSlice";

const Users = () => {
  const [users] = useRequest(getAllUsers);
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.user);

  React.useEffect(() => {
    console.log(isError, message);
    setTimeout(() => {
      dispatch(clearErrorMessage());
    }, 6000);
    return;
  }, [message, isError]);

  return (
    <div className="flex flex-wrap gap-5">
      {isError || <SnackBar message={"User Deleted!"} />}
      {users.map((user, indexId) => {
        return <UserCard key={indexId} user={user} />;
      })}
    </div>
  );
};

export default Users;
