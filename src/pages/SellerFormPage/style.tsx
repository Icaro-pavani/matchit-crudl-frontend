import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 20%;

    button {
      width: 90px;
      height: 40px;
      color: #f2f2f2;
      background-color: #2273ec;
      border: none;
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background-color: #2233ec;
        cursor: pointer;
      }
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-weight: bold;
  }

  select,
  input {
    height: 30px;
    font-size: 16px;
    padding-left: 5px;
  }

  textarea {
    height: 80px;
    font-size: 16px;
    padding-left: 5px;
  }
`;
