import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <h1 onClick={() => navigate("/")}>Visualizador de Empresas</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  background: linear-gradient(267.08deg, #5e5e5e 0%, #ff6127 100%);
  padding: 15px;
  margin-bottom: 20px;

  h1 {
    color: #fff;
    width: 100%;
    font-size: 36px;
    font-weight: bold;
    font-style: oblique;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
