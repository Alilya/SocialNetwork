import './ProfileAvaMainText.css'
const ProfileAvaMainText=() => {
    return (
      <div className="ProfileAvaMainText">
        <div className="profileAva">
          <img src="https://flomaster.club/uploads/posts/2023-01/1674276511_flomaster-club-p-kot-v-ochkakh-risunok-vkontakte-1.jpg" />
        </div>
        <div className="profileAbout">
          <ul>
            <li>Котик Вася</li>
            <li>3 года</li>
            <li> Живу за счет женщины</li>
          </ul>
        </div>

          <input
            type="text"
            placeholder="Поделитесь котиком"
            className="textInputLabel"
          ></input>
          <button className="buttonCatPaw">
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw"
            ></img>
          </button>
        </div>

    );

}
export default ProfileAvaMainText;