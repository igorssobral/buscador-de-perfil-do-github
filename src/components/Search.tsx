import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUseName] = useState("");

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUseName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
