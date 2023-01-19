import styled from "styled-components";
import { InputNumber } from "primereact/inputnumber";

export const DashboardContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 45rem;
  position: relative;
  border: 2px solid var(--gray-2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 30px 10px 20px;

  @media (min-width: 550px) {
    padding: 30px;
    width: 60%;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--black-1);
    font-weight: bold;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px;
  }

  input {
    border: 1px solid black;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--gray-3);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .span-info {
    color: var(--black-2);
    font-size: 0.8rem;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--gray-1);
  padding: 20px 10px;
  align-items: center;

  @media (min-width: 550px) {
    padding: 60px 30px 30px;
    width: 40%;
  }

  h2 {
    font-size: 1rem;
    color: var(--blue-1);
    font-weight: 700;
    border-bottom: 1px solid var(--blue-1);
    width: 100%;
    max-width: 300px;
    padding-bottom: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 550px) {
      width: 100%;
      gap: 30px;
      padding-top: 15px;
    }
  }
`;

export const ButtonLeave = styled.button`
  display: flex;
  position: absolute;
  right: 5px;
  top: 5px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;
`;

export const InputMoney = styled(InputNumber)`
  border: 1px solid black;
`;