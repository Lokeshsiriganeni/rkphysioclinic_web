function UserDetails(props) {
  const { changeName } = props;

  return (
    <>
      <h1>Name :{props.name}</h1>
      <button onClick={changeName}>changeName</button>
    </>
  );
}

export default UserDetails;
