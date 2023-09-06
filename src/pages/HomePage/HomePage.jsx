import { Container, NavigateLink } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <h1>Car</h1>
      <p>Hello</p>
      <NavigateLink to="/catalog">Book</NavigateLink>
    </Container>
  );
}
