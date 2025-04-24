import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  padding: 8px 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &:focus {
    outline: none;
  }
`;

export default StyledInput;
