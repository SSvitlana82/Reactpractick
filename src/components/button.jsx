export const Button = props => {
  console.log(props);
  return (
    <button className="btn" type="button">
      {props.children}
    </button>
  );
};
