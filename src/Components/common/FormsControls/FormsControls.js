import style from './FormsControls.module.css'

export const Textarea=({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
      <div   className={style.formControl + " " + (hasError? style.error :'')}>
        <div className={style.form}>
         <textarea {...input} {...props}/>  {/* contentEditable="true"*/}  
        </div>
        <div>
          { hasError && <span>{meta.error}</span>}
        </div>
      </div>
    );
}


export const Input=({input, meta, ...props})=>{
  const hasError = meta.touched && meta.error;
  return (
    <div   className={style.formControl + " " + (hasError? style.error :'')}>
      <div>
        <input {...input} {...props} /> {/* contentEditable="true"*/}
      </div>
      <div>
        { hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
}

