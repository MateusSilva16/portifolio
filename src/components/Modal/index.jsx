import { ButtonClose, Container, Content } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

export function Modal({ children, close }) {
  function closeModal() {
    close();
  }

  return (
    <Container>
      <ButtonClose onClick={closeModal}>
        <AiOutlineClose size={40} />
      </ButtonClose>

      <Content>{children}</Content>
    </Container>
  );
}
