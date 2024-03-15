import logo from './logo.svg';
import './App.css';

function App() {
   
  const mObj = {
    title : 'Blog Title 1 ',
    description: 'svsdf sdf sdfsdf sdf sdfsdfsdf sdfs fdsf sdf '
  }
 
  return (
    <div className="App">
      <div className='BlogCard'>
        <h3>{mObj.title}</h3>
        <p>{mObj.description}</p>
      </div>
 
      <div className='BlogCard'> 
        <h3>{mObj.title}</h3>
        <p>{mObj.description}</p>
      </div>

      <div className='BlogCard'>
        <h3>{mObj.title}</h3>
        <p>{mObj.description}</p>
      </div>
    </div>
    
  );
}

export default App;
