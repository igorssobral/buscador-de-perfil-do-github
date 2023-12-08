import { Search } from "../components/Search";
import { Error } from "../components/Error";
import { useState } from "react";

import { UserProps } from "../types/user";
import { User } from "../components/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (res.status === 404) {
      setError(!error);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      following,
      followers,
    };

    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
