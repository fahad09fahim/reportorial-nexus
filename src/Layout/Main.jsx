
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from './../Pages/Shared/NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <div className='max-w-screen-xl mx-auto'>
           <Navbar/>
           </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;