const Button = ({ toggleLogIn }) => {
  const handleClick = () => {
    // run the toggleLogIn Prop function that hs been passed down from App.jsx
    toggleLogIn();
  };

  return <button onClick={handleClick}>Toggle Log In</button>;
};

export default Button;
