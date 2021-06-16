// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const userRef = React.useRef();
  const inputRef = React.useRef();

  function clickHandler() {
    userRef.current.changeValue(inputRef.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputRef} />
      <Username ref={userRef} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

document.querySelector("input").value = "John Doe";
document.querySelector("button").click();
setTimeout(() => console.log(document.getElementById("root").innerHTML));
