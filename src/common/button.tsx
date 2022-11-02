import { ReactNode } from 'react';
import { Link, Route, To } from 'react-router-dom';


export interface Props {
  children?: ReactNode
  link?: string
  // any props that come into the component
}

export default function Button({children, link}: Props){
  return <Link to={link ? link : ''}>{children}</Link>;
}

