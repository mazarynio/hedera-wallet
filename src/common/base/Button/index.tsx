import './Button.css'

type ButtonProps = {
    handleClick: () => void
    disabled?: boolean
    children: string
    // title: String
    // desc: String
    // route?: string
}


export const Button = (props: ButtonProps) => {

  return <button 
  className='btn-action'
  onClick={props.handleClick}
  type="button"
  disabled={props.disabled ? props.disabled : false}
  >
    {props.children}
  </button>;
}


export default Button
