import Profile from "../App/Profile/Profile";
import FriendList from "../App/FriendList/FriendList";
import userData from "../App/Profile/userData.json";
import friends from "../App/FriendList/friends.json";
import css from "./App.module.css";

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
      <FriendList friends={friends} />
    </>
  );
}

export default App;
