import { ButtonCuston } from './styles';

const Button = ({ text, action, icon }) => {
  return (
    <ButtonCuston onClick={action}>
      <div>{icon || null} </div>
      <div>{text || null}</div>
    </ButtonCuston>
  );
};

export default Button;
