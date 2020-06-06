import styled from 'styled-components';

export const ColumnTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: black;
  text-align: center;
  padding: 1rem 0;
`;

export const SearchInput = styled.input`
  padding: 1rem 2rem;
  border: 0;
  background: ${props => (props.bg ? `${props.bg}` : '#F0F2FF')};
  border-radius: 5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  width: 100%;
  :focus {
    outline: 0;
  }
  ::placeholder {
    color: #b4b4b4;
    font-weight: 600;
  }
`;

export const WrapFlex = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const WrapColumn = styled.div`
  width: 380px;
  height: 550px;
  padding: 1rem;
  ${props => props.bg === 'alt' && 'background: #F0F2FF;'};
`;

export const WrapFlexBetween = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  padding: 1rem;
  width: fit-content;
  color: #fff;
  background: #4272f2;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 5px;
`;

export const AltButton = styled.button`
  color: #4272f2;
  padding: 1rem;
  width: fit-content;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.4rem;
  background: #fff;
  cursor: pointer;
`;
