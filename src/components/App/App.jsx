import Profile from "../App/Profile/Profile";
import FriendList from "../App/FriendList/FriendList";
import TransactionHistory from "../App/TransactionHistory/TransactionHistory";
import userData from "../App/Profile/userData.json";
import friends from "../App/FriendList/friends.json";
import transactions from "../App/TransactionHistory/transactions.json";
import css from "./App.module.css";
import clsx from "clsx";

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
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
