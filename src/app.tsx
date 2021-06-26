import './styles.css';
import { Counter } from './Counter';

export default function App() {
  return (
    <>
      <h1>
        welcome <p>{process.env.NODE_ENV}</p> <span>{process.env.name}</span>
      </h1>
      <Counter />
    </>
  );
}
