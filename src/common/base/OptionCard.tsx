import { Routes, Route, Link } from "react-router-dom";

export type OptionCardProps = {
    title: String
    desc: String
}

const OptionCard = ({title, desc}: OptionCardProps) => {
  return (
    <div>
        <div>
            <span>{title}</span>
        </div>
        <div>
            {desc}
        </div>
    </div>
  )
}

export default OptionCard