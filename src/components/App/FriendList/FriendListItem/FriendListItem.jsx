import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <>
      <li className={css.item}>
        <img className={css.img} src={friend.avatar} alt="Avatar" width="48" />
        <p>{friend.name}</p>
        <p className={friend.isOnline ? css.online : css.offline}>
          {friend.isOnline ? "Online" : "Offline"}
        </p>
      </li>
    </>
  );
};

export default FriendListItem;
