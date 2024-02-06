import './App.css';
import CompCall from "./components/LikeImage"
import ComponentCall from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <CompCall/>
        <ComponentCall/>
      </div>
    </div>
  );
}

export default App;
