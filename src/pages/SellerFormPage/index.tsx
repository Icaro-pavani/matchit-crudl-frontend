import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { SellerData } from "../../services/api";
import {
  createSellerRequest,
  createSellerUpdateInfo,
  getOneSellerRequest,
  updateSellerRequest,
} from "../../store/reducers/createSeller";
import { EditContainer, InputContainer } from "./style";

export default function SellerFormPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sellerInfo = useSelector(
    (state: {
      createSeller: {
        sellerInfoData: SellerData;
        isLoading: boolean;
        message: string;
      };
    }) => state.createSeller
  );

  useEffect(() => {
    if (sellerInfo.message === "created" || sellerInfo.message === "updated") {
      navigate("/");
    }

    if (!!id) {
      const sellerId = Number(id);
      console.log(sellerId);
      dispatch(getOneSellerRequest({ sellerId }));
    }
  }, [navigate, sellerInfo.message, dispatch, id]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const payload = {
      sellerInfo: { ...sellerInfo.sellerInfoData, [name]: value },
    };
    dispatch(createSellerUpdateInfo(payload));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { sellerInfoData } = sellerInfo;

    if (!id) {
      dispatch(createSellerRequest({ sellerInfo: sellerInfoData }));
    } else {
      const sellerId = Number(id);
      dispatch(updateSellerRequest({ sellerData: sellerInfoData, sellerId }));
    }
  }

  console.log(sellerInfo);
  return (
    <EditContainer>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Editar Empresa</h2>
        <InputContainer>
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={sellerInfo.sellerInfoData.name}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="cnpj">CNPJ: </label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            onChange={handleChange}
            value={sellerInfo.sellerInfoData.cnpj}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="address">Endereço: </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            value={sellerInfo.sellerInfoData.address}
          />
        </InputContainer>
        <p>{!sellerInfo.message ? "" : sellerInfo.message}</p>
        <button type="submit">{id ? "Atualizar" : "Confirmar"}</button>
      </form>
    </EditContainer>
  );
}
