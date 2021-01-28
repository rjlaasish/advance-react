import './App.css';
// import Rahul from './hoc/hoc1/Rahul';
// import Priti from './hoc/hoc1/Priti';
import Button from './hoc/hoc2/Button';
import Hovering from './hoc/hoc2/Hovering';
import InputCount from './hoc/hoc2/InputCount';
import ButtonOne from './hoc/hoc3/components/ButtonOne';

function App() {
  return (
    <div className="App">
      
      {/* hoc1 */}
      {/* <Rahul camp="BaseCamp"/>
      <Priti camp="UpperCamp"/> */}
      {/* hoc1 */}

      {/* hoc2 */}
      {/* <br/>
      <Button/>
      <Hovering/>
      <InputCount/> */}
      {/* hoc2 */}

      
      {/* hoc3 */}
      <br/>
      <ButtonOne disable/>
      {/* hoc3 */}

    </div>
  );
}

export default App;
