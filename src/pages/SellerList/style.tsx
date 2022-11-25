import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  align-items: center;
  margin: 50px auto;
  padding-bottom: 10px;

  h2 {
    font-size: 20px;
    text-align: center;
    padding: 0 15%;
    margin: 10px 0 30px 0;
  }
`;

export const AddButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-right: 20px;

  button {
    width: 250px;
    height: 40px;
    color: #f2f2f2;
    background-color: #333333;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;

    &:hover {
      background-color: #1cb092;
      cursor: pointer;
    }

    &:disabled {
      background-color: #7a7777;
    }
  }
`;

export const ListContainer = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 550px;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;

  h2 {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  h3 {
    width: 100%;
    margin-bottom: 10px;

    span {
      font-weight: bold;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;

  button {
    width: 90px;
    height: 40px;
    color: #f2f2f2;
    background-color: #333333;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 0px;

    &:hover {
      background-color: #1cb092;
      cursor: pointer;
    }

    &:disabled {
      background-color: #7a7777;
    }
  }
`;
