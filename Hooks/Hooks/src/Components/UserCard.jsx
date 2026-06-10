import ProfileHeader from "./ProfileHeader.jsx";
import UserInfo from "./UserInfo.jsx";
import SocialLinks from "./SocialLinks.jsx";

function UserCard({username,position,country}) {
  return (
    <div className="card">
      <ProfileHeader />
    <UserInfo  position={position} country={country}/>
      <SocialLinks />
    </div>
  );
}

export default UserCard;