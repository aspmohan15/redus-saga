import { useDispatch, useSelector } from "react-redux";
import Child from "./components/Child";
import { getUser, setUser } from "./reduxSaga/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user);
  const getData = () => {
    // dispatch(setUser({ name: "Instagram" }));
    dispatch(getUser());
  };

  const childToParent = (dataFromChild) => {
    console.log(dataFromChild);
  };
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <div>
          <button onClick={getData}>Show Me the user Data</button>
        </div>
        <div>
          {user?.name && (
            <div>
              <h1>{user.name}</h1>
              How are u
            </div>
          )}
        </div>
        <Child childToParent={childToParent} />
      </div>
    </div>
  );
}

export default App;
