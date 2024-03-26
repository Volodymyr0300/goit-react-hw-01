import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.list}>
        {friends.map((friend) => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
