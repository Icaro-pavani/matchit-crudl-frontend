import Header from "../../components/Header";
import { EditContainer, InputContainer } from "./style";

export default function SellerFormPage() {
  return (
    <EditContainer>
      <Header />
      <form>
        <h2>Editar Empresa</h2>
        <InputContainer>
          <label htmlFor="name">Nome: </label>
          <input id="name" name="name" type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="cnpj">CNPJ: </label>
          <input id="cnpj" name="cnpj" type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="address">Endereço: </label>
          <input id="address" name="address" type="number" />
        </InputContainer>
        <button type="submit">Confirmar</button>
      </form>
    </EditContainer>
  );
}
