import UserName from "./UserName.jsx";
import UserDetails from "./UserDetails.jsx";

function UserInfo({username,position,country}) {
  return (
    <div className="user-info">
      <UserName  username={username}/>
      <UserDetails  position={position} country={country} />
    </div>
  );
}

export default UserInfo;