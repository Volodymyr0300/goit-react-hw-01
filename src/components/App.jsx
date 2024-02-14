import userData from "./userData.json";
import { Profile } from "./Profile";

export const App = () => {
  return (
    <>
      <Profile
        name={userData[0].username}
        tag={userData[0].tag}
        location={userData[0].location}
        image={userData[0].avatar}
        stats={userData[0].stats}
      />

      <>{console.log(userData[0].stats)}</>
    </>
  );
};
