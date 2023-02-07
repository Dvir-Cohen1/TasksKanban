import * as React from "react";
import UserCard from "./components/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";
import { getAllUsers } from "../../services/user.service";

const Users = () => {
  const [users, isLoading, error] = useRequest(getAllUsers);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex w-full gap-5">
      {users.map((user, indexId) => {
        return <UserCard key={indexId} user={user} />;
      })}
    </div>
  );
};

export default Users;
