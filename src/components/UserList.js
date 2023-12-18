const UserList = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.fName} {user.lName} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
