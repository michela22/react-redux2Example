import './App.css';
//come accedo ai dati nello store? attraverso un Hook -->lo useSelector
import {useSelector, useDispatch} from 'react-redux';
//per associare le actions e assegnargli la dispatch di invio uso bindActionCreators
import {bindActionCreators} from'redux';
import { actionCreators } from './state';

//Credit: https://www.youtube.com/watch?v=9jULHSe41ls

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)


  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositMoney(100)}>Deposit Money</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw Money</button>
     
    </div>
  );
}

export default App;
