import './App.css';
import headerImg from './img/ocean-8-critique.jpeg'
import logo from './logos/Spirit.png';
import './comps/SideBarStyle.css'
import './comps/HeaderStyle.css'

function App() {
  return (
    <div className="App">
      <div className='bodyFlex'>
            <div className='SideBar'>
                <img src={logo} className='logoImg'></img>

                <text className='CategoryTitle'>CATEGORY</text>

                <div className='CategoryComps'>
                    <text className='CategoryContent'>Comedy</text>
                    <text className='CategoryContentSelected'>Animation</text>
                    <text className='CategoryContentSelected'>Thriller</text>
                    <text className='CategoryContent'>Drame</text>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className='divHeaderImg'>
            <img src={headerImg} className='imageHeader'></img>
        </div>
    </div>
  );
}

export default App;