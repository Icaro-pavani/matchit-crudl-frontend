import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;

  h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: bold;
  }

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
      background-color: #333333;
      border: none;
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background-color: #1cb092;
        cursor: pointer;
      }

      &:disabled {
        background-color: #7a7777;
      }
    }

    p {
      font-size: 18px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
      color: #e90505;
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
    font-size: 18px;
    margin-bottom: 3px;
  }

  input {
    height: 30px;
    font-size: 16px;
    padding-left: 5px;
  }
`;
