
import OptionCard, { OptionCardProps } from "../../common/base/OptionCard";
import { CreateOptionType, CreateOptions } from "../../domain/CreateOptions";

import './Create.css';

const index = ({title, desc}: OptionCardProps) => {

  const handleClick = () => {
    const options = Array.from(CreateOptions.values()).filter(
      (option) => option?.supported
    );
    return {
      options,
      CreateOptionType
    }
  }


  return (
    <div className='createpage'>
        <h1 className='heading-1'>Create a New Wallet</h1>
        <div>
            <OptionCard 
              title={title} 
              desc={desc}      

            />
        </div>
    </div>
  )
}

export default index