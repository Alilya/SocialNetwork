import './ProfileAvaMainText.css'
const ProfileAvaMainText=() => {
    return (
      <div className="ProfileAvaMainText">
        <div className='profileAva'>
          <img src="https://cdnn11.img.sputnik.by/img/102768/82/1027688237_175:0:904:801_1920x0_80_0_0_ec162d86740126d12cfa9750eb48cbca.jpg" />
        </div>
        <div className="profileAbout">
          <ul>
            <li>Котик Вася</li>
            <li>3 года</li>
            <li> Живу за счет женщины</li>
          </ul>
        </div>
        <div className="textInput">
          <input
            type="text"
            placeholder="Поделитесь котиком"
            className="textInputLabel">
            </input>
        </div>
      </div>
    );

}
export default ProfileAvaMainText;