import styled from "styled-components";
import OkIcon from "../assets/ok_icon.svg";
import { theme } from "../styles/theme";

export const Checkbox = ({
  children,
  onChange,
  value,
}: {
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: boolean;
}) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" onChange={onChange} checked={value} />
      <span className="checkmark">
        <img src={OkIcon} />
      </span>
      {children}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.label`
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  gap: 1em;
  align-items: center;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    height: 24px;
    width: 24px;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${theme.primary.grey};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* On mouse-over, add a grey background color */
  &:hover {
    opacity: 0.8;
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ .checkmark {
    background-color: ${theme.primary.bgColor};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  & .checkmark img {
    display: none;
    width: 14px;
    height: 10px;
  }

  /* Show the checkmark when checked */
  & input:checked ~ .checkmark img {
    display: block;
  }
`;
