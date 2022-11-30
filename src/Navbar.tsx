import './App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
    const items=useSelector((state:any)=>state.cart)
    var itemlen=items.length
  
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div>
         
                <Link className="navLink" to="/">
                  < HomeIcon />
                </Link>
                <Link  className='css-i4bv87-MuiSvgIcon' to="/cart">
                    <AddShoppingCartIcon/>{itemlen}
                </Link>
                <Link className="navLink" to="/wish">
                   <FavoriteIcon/>
                </Link>
            </div>
        </div>
    );
};
export default Navbar;