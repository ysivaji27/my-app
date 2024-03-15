import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCards';

function App() {
   
  const mObjArr = [
    {
      id:1,
      title : 'Blog Title 1 ',
      description: 'svsdf sdf sdfsdf sdf sdfsdfsdf sdfs fdsf sdf '
    },
    {
      id:2,
      title : 'Blog Title 2 ',
      description: 'svsdf sdf sdfsdf sdf sdfsdfsdf sdfs fdsf sdf '
    },
    {
      id:3,
      title : 'Blog Title 3 ',
      description: 'svsdf sdf sdfsdf sdf sdfsdfsdf sdfs fdsf sdf '
    }
  ]

  const blogCards = mObjArr.map((item,prop)=>{ 
    return (
       <BlogCard key={prop} title={item.title} description={item.description} id={item.id}/>
    )
  })
 
  return (
    <div className="App">
      {blogCards}
    </div>
    
  );
}

export default App;
