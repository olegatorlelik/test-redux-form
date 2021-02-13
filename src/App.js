import { connect } from "react-redux";
import "./App.css";
import FormWrapper from "./Form";
import { setUser } from "./ReducerUser";
function App(props) {
  return (
    <div className="App">
      <FormWrapper user={props.user} setUser={props.setUser} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { setUser })(App);
