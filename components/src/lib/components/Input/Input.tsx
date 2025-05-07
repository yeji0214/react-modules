import styled from "@emotion/styled";

type InputProps = {
  title: string;
};

const Input = ({ title }: InputProps) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <StyledInput />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.p`
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 3px;
  font-size: 14px;
  box-sizing: border-box;
`;
