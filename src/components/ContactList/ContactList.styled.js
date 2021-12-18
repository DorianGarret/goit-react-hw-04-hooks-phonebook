import styled from '@emotion/styled/macro';
import { MdDeleteForever } from 'react-icons/md';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
  width: 500px;
`;

export const Icon = styled(MdDeleteForever)`
  font-size: 20px;
  margin-right: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin-left: 20px;

  background-color: var(--bs-cyan);
  color: var(--bs-light);

  box-shadow: 0 3px var(--bs-info);
  border-radius: 5px;

  &:hover {
    background-color: var(--bs-info);
    box-shadow: 0 3px var(--bs-cyan);
  }

  &:active {
    margin-top: 2px;
    margin-bottom: -2px;
    background-color: var(--bs-cyan);
    box-shadow: 0 -2px 0 0 var(--bs-info);
  }
`;
