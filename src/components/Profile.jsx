// Profile.jsx
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.profile_container}>
          <img className={css.profile_img} src={image} alt="User avatar" />
          <p className={css}>{name}</p>
          <p className={css}>@{tag}</p>
          <p className={css}>{location}</p>
        </div>

        <ul className={css}>
          <li className={css}>
            <span className={css}>Followers</span>
            <span className={css}>{stats.followers}</span>
          </li>
          <li className={css}>
            <span className={css}>Views</span>
            <span className={css}>{stats.views}</span>
          </li>
          <li className={css}>
            <span className={css}>Likes</span>
            <span className={css}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
