import Profile from "../Profile/Profile";
import userData from "../userData.json";
import css from "./App.module.css";

console.log(css);

function App() {
  return (
    <>
      <Profile
        name={userData[0].username}
        tag={userData[0].tag}
        location={userData[0].location}
        image={userData[0].avatar}
        stats={userData[0].stats}
      />
    </>
  );
}

export default App;
