function Hello() {
  let myname = "Praveen";
  let fullName = () => {
    return "Praveen Kushwaha";
  };
  return (
    <h1>
      Hello my name is {myname} and i am sprinboot developer and my full name{" "}
      {fullName()}
    </h1>
  );
}

export default Hello;
