import styled from 'styled-components';

export const Container = styled.div`
  background: #b3b3b3;
  border-radius: 10px;
  border: 2px solid #b3b3b3;
  padding: 16px;
  width: 100%;

  color: #666360;
  display: flex;
  align-items: center;
  transition: 0.5s;
  &:hover {
    border: 2px solid #666360;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    margin-left: 16px;
    border: 0;
    color: #474750;
    background: transparent;
    flex: 1;

    &::placeholder {
      color: #656580;
    }
  }

  svg {
    margin-left: 16px;
  }
`;
