import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from 'react-icons/bs';
import { Wrapper, Content } from "./SearchBar.styles";

// Types
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  const handleChange = (e: any) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <BsSearch />
          <input
            type="text"
            placeholder="Pesquisar Filmes"
            onChange={handleChange}
            value={state}
          />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default SearchBar;
