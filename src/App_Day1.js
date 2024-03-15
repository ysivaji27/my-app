import logo from './logo.svg';
import './App.css';

function App() {
  const firstname ='John';
  const lastName ='Smith';
  const age ='35';
  const job ='IT';
  const getFullName = (firstname,lastName) => { return `${firstname} ${lastName}` }
  const inputPlaceHolder ='Please enter your name ';
  const detailInputBox =  <input placeholder={inputPlaceHolder} />;
  const mArr = [1,2,3];
  const mObj = {
    job : 'Toto',
    age: 3
  }
  return (
    <div className="App">
      <h3>Full Name : { getFullName(firstname,lastName)}</h3>
      <p>Age : {mObj.age}</p>
      <p>Job : {mObj.job}</p>
     {detailInputBox}
     {mArr[0]}
     { mArr[0]>0 ? "TRUE" : "FALSE" }
    </div>
  );
}

export default App;
