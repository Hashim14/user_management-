import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { loadUsers, deleteUser } from "../Redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.user);

  // React.useEffect(() => {
  //   dispatch(loadUser());
  // }, []);

  const handleDelete = (id) => {
    //   console.log
    dispatch(deleteUser(id));
  };

  return (
    <div>
      LiST
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">E- mail</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, key) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
