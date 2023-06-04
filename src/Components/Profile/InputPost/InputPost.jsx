import './InputPost.css'
const InputPost=() => {
    return (
        <div className="InputPost backgroundColor borderRadius">
          <textarea
            type="text"
            placeholder="Поделитесь котиком"
            className="textInputLabel textFamily borderRadius"
            
          ></textarea>
          <button className="buttonCatPaw backgroundColorItem borderRadius">
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw"/>
          </button>
        </div>
        
  
    );

}
export default InputPost;