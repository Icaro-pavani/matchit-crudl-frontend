import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getSellersFetch } from "../../store/reducers/sellers";
import { SellerType } from "../../store/types/sellers";
import { useEffect } from "react";
import {
  Container,
  AddButtonContainer,
  ListContainer,
  InfoContainer,
  ButtonContainer,
} from "./style";
import { deleteSellerRequest } from "../../store/reducers/deleteSeller";
import { resetMessage } from "../../store/reducers/createSeller";

export default function SellerList() {
  const sellers = useSelector(
    (state: {
      sellers: {
        sellersData: SellerType[];
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

  function editSeller(id: number) {
    dispatch(resetMessage());
    navigate(`/seller-form/${id}`);
  }

  return (
    <Container>
      <Header />
      <AddButtonContainer>
        <button
          onClick={() => {
            dispatch(resetMessage());
            navigate("/seller-form");
          }}
          disabled={sellers.isLoading || deleteSellerInfo.isLoading}
        >
          Adicionar Empresa
        </button>
      </AddButtonContainer>
      <ListContainer>
        {sellers.isFailure ? (
          <h2>
            Serviço indisponível ou conexão não possível, atualize a página em
            alguns instantes.
          </h2>
        ) : sellers.sellersData.length > 0 ? (
          sellers.sellersData.map((seller) => (
            <li key={seller.id}>
              <InfoContainer>
                <h2>
                  <span>Nome:</span> {seller.name}
                </h2>
                <h3>
                  <span>CNPJ:</span> {seller.cnpj}
                </h3>
                <h3>
                  <span>Endreço:</span> {seller.address}
                </h3>
              </InfoContainer>
              <ButtonContainer>
                <button
                  onClick={() => editSeller(seller.id)}
                  disabled={sellers.isLoading || deleteSellerInfo.isLoading}
                >
                  Editar
                </button>
                <button
                  onClick={() =>
                    dispatch(deleteSellerRequest({ sellerId: seller.id }))
                  }
                  disabled={sellers.isLoading || deleteSellerInfo.isLoading}
                >
                  Excluir
                </button>
              </ButtonContainer>
            </li>
          ))
        ) : sellers.isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          <h2>Não há nenhum registro de empresa!</h2>
        )}
      </ListContainer>
    </Container>
  );
}
