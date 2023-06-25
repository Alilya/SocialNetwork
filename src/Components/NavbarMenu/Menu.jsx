import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

const Menu=() => {
    return (
      <div className={style.Menu}>

        <NavLink to='/profile'  className = { navData => navData.isActive ? style.active : style.defaultMenu } >Профиль</NavLink>
        <NavLink to='/messages' className = { navData => navData.isActive ? style.active : style.defaultMenu }>Сообщения</NavLink>
        <NavLink to='/news' className = { navData => navData.isActive ? style.active : style.defaultMenu }>Новости</NavLink>
        <NavLink to='/settings' className = { navData => navData.isActive ? style.active : style.defaultMenu }>Настройки</NavLink>
      
      </div>
    );

}
export default Menu;