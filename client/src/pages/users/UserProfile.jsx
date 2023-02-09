import React from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../services/user.service";
import Button from "@mui/material/Button";
import useRequestByCallBack from "../../hooks/useRequestByCallBack";
import styles from "./user.module.css";

const UserProfile = (props) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const userId = query.get("id");
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const response = await getUser(userId);
      setUser(response);
    })();

    return () => {
      setUser({});
    };
  }, []);

  return (
    <>
      <div className="bg-[#0B0E2D]/80 p-8 rounded-md flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</div>
          <span>{user.email}</span>
        </div>
        <div className="flex gap-5">
          <Button variant="contained"> Tasks</Button>
          <Button variant="contained"> Projects</Button>
          <Button variant="contained"> Setting</Button>
        </div>
      </div>
      <div className="grid grid-col-4 grid-flow-col gap-4 text-center mt-10">
        <div
          className={`${styles.user_profile_card} ${styles.user_profile_welcome_card} col-span-1 text-left flex flex-col`}
        >
          <span className="text-4xl font-bold">Welcome back!</span> Nice to see
          you, {`${user.firstName} ${user.lastName}`}!
          <div className="mt-auto">Tap to record{' >'}</div>
        </div>
        <div className={`${styles.user_profile_card} col-span-6`}></div>
        <div className={`${styles.user_profile_card} col-span-3`}>03</div>
      </div>
    </>
  );
};

export default UserProfile;
