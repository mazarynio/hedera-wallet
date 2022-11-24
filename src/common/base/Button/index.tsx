import './Button.css'

type ButtonProps = {
    handleClick: () => void
    disabled?: boolean
    children: string
    secondary?: boolean
    // title: String
    // desc: String
    // route?: string
}


export const Button = (props: ButtonProps) => {

  return <button 
  className={props.secondary ? 'btn-action --secondary' : 'btn-action'}
  onClick={props.handleClick}
  type="button"
  disabled={props.disabled}
  >
    {props.children}
  </button>;
}


export default Button
