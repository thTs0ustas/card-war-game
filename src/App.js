import "./App.css";
import { DeckComponent } from "./compopnents/Deck";
import { Score } from "./compopnents/Score/Score";
// @ts-ignore
import { ContextCard } from "./compopnents/Deck/useCard";

const App = () => (
  <ContextCard>
    <DeckComponent />
    <Score />
  </ContextCard>
);

export default App;
