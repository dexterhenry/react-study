// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick(e) {
    let isVisible = this.state.visible;
    this.setState({ visible: !isVisible });
  }

  render() {
    return (
      <React.Fragment>
        <a href="#" onClick={() => this.handleClick()}>
          Want to buy a new car?
        </a>
        {this.state.visible && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

console.log("Before click: " + rootElement.innerHTML);
document.querySelector("a").click();
console.log("After click: " + rootElement.innerHTML);
