import { NavLink } from 'react-router-dom';
import './Menu.css'
const Menu=() => {
    return (
      <div className="Menu backgroundColor borderRadius">
        <NavLink to='/profile' className='textFamily'>Профиль</NavLink>
        <NavLink to='/messages' className='textFamily'>Сообщения</NavLink>
        <NavLink to='/news' className='textFamily'>Новости</NavLink>
        <NavLink to='/settings' className='textFamily'>Настройки</NavLink>
      </div>
    );

}
export default Menu;