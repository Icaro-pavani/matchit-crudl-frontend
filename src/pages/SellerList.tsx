import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

export default function SellerList() {
  const navigate = useNavigate();

  const products: { _id: number; name: string }[] = [];
  return (
    <Container>
      <Header />
      <AddButtonContainer>
        <button>Adiconar Empresa</button>
      </AddButtonContainer>
      <ListContainer>
        {products.length > 0 ? (
          products.map((food) => (
            <li key={food._id}>
              <InfoContainer>
                <h2>{food.name}</h2>
                <h3>
                  <span>Nome:</span> {food.name}
                </h3>
              </InfoContainer>
              <ButtonContainer>
                <button>Abrir</button>
                <button>Excluir</button>
              </ButtonContainer>
            </li>
          ))
        ) : (
          <h2>Não há nenhum registro de empresa!</h2>
        )}
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  align-items: center;
  margin: 50px auto;
  padding-bottom: 10px;
`;

const AddButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  padding-right: 20px;

  button {
    width: 90px;
    height: 40px;
    color: #f2f2f2;
    background-color: #2273ec;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;

    &:hover {
      background-color: #2233ec;
      cursor: pointer;
    }
  }
`;

const ListContainer = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 550px;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;

    img {
      height: 140px;
      width: 140px;
    }
  }
`;

const InfoContainer = styled.div`
  h2 {
    width: 200px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  h3 {
    width: 200px;
    margin-bottom: 3px;

    span {
      font-weight: bold;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 90px;
    height: 40px;
    color: #f2f2f2;
    background-color: #2273ec;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;

    &:hover {
      background-color: #2233ec;
      cursor: pointer;
    }
  }
`;
