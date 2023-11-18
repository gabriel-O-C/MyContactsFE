import emptyBox from '../../../../assets/images/empty-box.svg';
import { Container } from './styles';

export function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <span> ”Novo contato” </span>
        à cima para cadastrar o seu
        primeiro!
      </p>
    </Container>
  );
}
