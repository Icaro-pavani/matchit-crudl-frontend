import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getSellersFetch } from "../../store/reducers/sellers";
import { SellerType } from "../../store/types/sellers";
import { useEffect } from "react";
import { deleteSeller } from "../../store/actions/seller.actions.types";
import {
  Container,
  AddButtonContainer,
  ListContainer,
  InfoContainer,
  ButtonContainer,
} from "./style";

export default function SellerList() {
  const sellers = useSelector(
    (state: {
      sellers: {
        sellers: SellerType[];
        isLoading: boolean;
        isFailure: boolean;
      };
    }) => state.sellers
  );

  const deleteSellerInfo = useSelector(
    (state: {
      deleteOneSeller: {
        reloadPage: boolean;
        isLoading: boolean;
        isFailure: boolean;
      };
    }) => state.deleteOneSeller
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSellersFetch());
  }, [dispatch, deleteSellerInfo.reloadPage]);

  console.log(deleteSellerInfo);

  return (
    <Container>
      <Header />
      <AddButtonContainer>
        <button onClick={() => navigate("/seller-form")}>
          Adicionar Empresa
        </button>
      </AddButtonContainer>
      <ListContainer>
        {sellers.isFailure ? (
          "serviço indisponível ou conexão não possível"
        ) : sellers.sellers.length > 0 ? (
          sellers.sellers.map((sellers) => (
            <li key={sellers.id}>
              <InfoContainer>
                <h2>{sellers.name}</h2>
                <h3>
                  <span>Nome:</span> {sellers.name}
                </h3>
                <h3>
                  <span>CNPJ:</span> {sellers.cnpj}
                </h3>
                <h3>
                  <span>Endreço:</span> {sellers.address}
                </h3>
              </InfoContainer>
              <ButtonContainer>
                <button>Editar</button>
                <button
                  onClick={() =>
                    dispatch(deleteSeller({ sellerId: sellers.id }))
                  }
                >
                  Excluir
                </button>
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