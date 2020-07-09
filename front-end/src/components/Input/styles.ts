import styled from 'styled-components';

export const Container = styled.div`
  background: #D8D2D2;
  border-radius: 10px;
  border: 2px solid #D8D2D2;
  padding: 16px;
  width: 100%;

  color: #333;
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
    color: #333;
    background: transparent;
    flex: 1;

    &::placeholder {
      color: #888;
    }
  }

  svg {
    margin-left: 10px;
    color: #888;
  }
`;
