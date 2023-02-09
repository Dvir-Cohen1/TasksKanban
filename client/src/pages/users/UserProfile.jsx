import React from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../services/user.service";
import Button from "@mui/material/Button";
import useRequestByCallBack from "../../hooks/useRequestByCallBack";

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
    <div className="bg-[#0B0E2D]/80 p-8 rounded-md flex justify-between">
      <div>
        <div className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</div>
        <span>{user.email}</span>
      </div>
      <Button> Tasks</Button>
    </div>
  );
};

export default UserProfile;
