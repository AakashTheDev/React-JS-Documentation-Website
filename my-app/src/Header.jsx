import './App.css';
import logo1 from './logo192.png'
import { Link } from 'react-router-dom';

function Header() {
  
  return (
 <>

   <div className='Head'>
    <header className='Header'>
    <img src={logo1} className='Logo' alt='ReactLogo' />
    <a href="https://reactjs.org/"><h2 className='React'>Learn React</h2></a>

    <ul className='list'>
    <li><Link to='/'>Home</Link></li>
    

    <li><Link to='/About'>About</Link></li>
    

    <li><Link to='/Product'>Product</Link></li>
    

    <li><Link to='/Contactus'>Contacts</Link></li>
    </ul>
    <hr/>
    </header>
   </div>
   
   </>
  );
}

export default Header;