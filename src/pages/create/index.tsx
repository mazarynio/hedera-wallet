import OptionCard, { OptionCardProps } from "../../common/base/OptionCard";
import { CreateOptionType, CreateOptions } from "../../domain/CreateOptions";

import './Create.css';

const index = () => {

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
          {Array.from(CreateOptions.values()).filter((option) => option.supported).map((option1) => (
             <OptionCard 
              key={option1.id}
              title={option1.title}
              desc={option1.description}
             />
          ))}
            
        </div>
    </div>
  )
}

export default index