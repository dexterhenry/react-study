import ContactForm from "./components/contact_form/ContactForm";
import CrudApp from "./components/CrudApp";
import Modals from "./components/modal/Modals";
import SelectsAnidados from "./components/SelectsAnidados/SelectsAnidados";

function App() {
  return (
    <div className="App">
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <CrudApp />
      <hr />
    </div>
  );
}

export default App;
