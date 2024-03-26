import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.profileContainer}>
          <img className={css.profileImg} src={image} alt="User avatar" />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.followersText}>Followers</span>
            <span className={css.followersData}>{stats.followers}</span>
          </li>
          <li className={clsx(css.item, css.secondLi)}>
            <span className={css.viewsText}>Views</span>
            <span className={css.viewsData}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.likesText}>Likes</span>
            <span className={css.likesData}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
