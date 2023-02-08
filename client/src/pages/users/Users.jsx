import * as React from "react";
import UserCard from "./components/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";
import { getAllUsers } from "../../services/user.service";
import TopMenu from "./components/TopMenu";

const Users = () => {
  const [users] = useRequest(getAllUsers);
  return (
    <>
      <section>
        <div className="flex justify-between mb-5">
          <div className="text-2xl">Users</div>
          <TopMenu />
        </div>
      </section>
      <section className="flex flex-wrap gap-5">
        {users.map((user, indexId) => {
          return <UserCard key={indexId} user={user} />;
        })}
      </section>
    </>
  );
};

export default Users;
