import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const AppComponent = ()=>{
    let a=10;
    return (
      <div>
        <p>First React Component{a}</p>
      </div>
    );
};
const AppComponent1=()=>{
  return(
    <React.Fragment>
      <header>
     <h3>This is header </h3>
      </header>
     </React.Fragment>

  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppComponent/>
    <AppComponent/>
    <AppComponent1/>
  </React.StrictMode>
);

