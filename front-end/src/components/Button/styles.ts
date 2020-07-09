import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fa3a3a;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #eee;
  width: 100%;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.5s;
  font-size: 20px;

  &:hover {
    background: ${shade(0.2, '#FA3A3A')};
  }

  &:focus {
    border: 2px solid ${shade(0.2, shade(0.2, '#FA3A3A'))};
  }
`;
