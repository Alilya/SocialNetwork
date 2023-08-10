import style from './FormsControls.module.css'

export const Textarea=({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
      <div   className={style.formControl + " " + (hasError? style.error :'')}>
        <div>
          <textarea {...input} {...props} contenteditable="true"/>
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
        <input {...input} {...props} contenteditable="true"/>
      </div>
      <div>
        { hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
}

