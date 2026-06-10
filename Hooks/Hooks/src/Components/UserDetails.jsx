function UserDetails({position,country}) {
    console.log("porps",position,country);
  return (
    <div>
      <p>{position}</p>
      <p>{country}</p>
    </div>
  );
}

export default UserDetails;