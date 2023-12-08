import { Search } from "../components/Search";
import { useState } from "react";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    
    const data = await res.json();
    console.log("🚀 ~ file: Home.tsx:13 ~ loadUser ~ data:", data)
 
  };
  return (
    <div>
      <Search loadUser={loadUser}/>
    </div>
  );
};

export default Home;
