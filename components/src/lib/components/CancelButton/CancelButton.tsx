import styled from "@emotion/styled";

type CancelButtonProps = {
  cancelText: string;
  onClick: () => void;
};

const CancelButton = ({ cancelText, onClick }: CancelButtonProps) => {
  return <Button onClick={onClick}>{cancelText}</Button>;
};

export default CancelButton;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: #b5b5b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
