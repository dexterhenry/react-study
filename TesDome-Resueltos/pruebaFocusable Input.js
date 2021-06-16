// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const FocusableInput = ({ shouldFocus }) => {
  let textInput = React.useRef(null);

  React.useEffect(() => {
    textInput.current.focus();
  }, []);

  React.useEffect(() => {
    if (shouldFocus) {
      textInput.current.focus();
    }
  }, [shouldFocus]);
  return <input ref={textInput} />;
};

document.body.innerHTML = "<div id='root' />";
ReactDOM.render(
  <FocusableInput shouldFocus={true} />,
  document.getElementById("root")
);
setTimeout(() => console.log(document.getElementById("root").innerHTML));
