import Card from "./Components/Card"
import { filmes } from './mocks';
import {Container} from './App.styles';

export function App() {
  return (
    <Container>
      <header>
        <h2 >Featured Articles</h2>
        <span>VIEW ALL</span>
      </header>
      <div>
        {filmes.map((element) => (
          <Card key={element.title} {...element} />
        ))}
    </div>
    </Container>
  );
}