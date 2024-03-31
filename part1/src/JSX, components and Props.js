import './App.css';

function App() {
  return (
  <div className ="App">
      <User name="Arya" age={22} email="aryasamant@gmail.com"/>  
      <User name="Adi" age={20} email="adi.tambe@gmail.com"/>  
      <User name="Atty" age={24} email="atty@gmail.com"/>  
      
      <JobInfo salary={80000} position="SDE1" company = "Apple"/>
      <JobInfo salary={90000} position="SDE2" company = "Amazon"/>
      <JobInfo salary={100000} position="SDE1" company = "Google"/>
      </div>
  );
}



const User = (props) => {
  return (
  <div>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  <h1>{props.email}</h1>    
</div>
);
};

const JobInfo = (props) =>
{
  return (
    <div>
      <h2>{props.salary}</h2>
      <h2>{props.position}</h2>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
