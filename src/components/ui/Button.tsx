import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps{
children:ReactNode,
className?:string,
variant?:"primary"|"secondary",
disabled?:boolean,
to?:string,
onClick?:()=>void,
type?:string

}
function Button({ type ,children,className,variant="primary",disabled,to,onClick}:ButtonProps) {
  const styles={
primary:"text-black inline-flex justify-center items-center text-center",
secondary:""
  }
  const base =" text-black gap-2 justify-center items-center py-2 px-4"
  if(to){
  return(
    <Link className={`${base} ${className} ${styles[variant]}`}  to={to}>
      {children}
    </Link>
  )
  }

  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={`${base} ${className} ${styles[variant]}`}>{children}</button>
    </div>
  )
}

export default Button
