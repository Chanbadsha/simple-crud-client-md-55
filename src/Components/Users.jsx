import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleRemove = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(id, data);
        const remainingUser = users.filter((user) => user._id !== id);

        setUsers(remainingUser);
      });
  };
  return (
    <div>
      <Link className="btn" to={"/"}>
        Add User
      </Link>{" "}
      <br />
      {users.length}
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} :{" "}
            <button
              onClick={() => {
                handleRemove(user._id);
              }}
              className="btn"
            >
              x
            </button>
            <button>
              {" "}
              <Link className="btn" to={`/user/${user._id}`}>
                Update User
              </Link>
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
