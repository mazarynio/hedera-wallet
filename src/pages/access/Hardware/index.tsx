import OptionCard from "../../../common/base/OptionCard";
import { HardwareOptions } from '../../../domain/HardwareOptions';
import BtnBack from '../../create/components/BtnBack';
import './Hardware.css';


const Hardware = () => {

  return (
    <div className='hardware'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>Hardware</h1>
      <div>
      {Array.from(HardwareOptions.values()).filter((option) => option.supported).map((hardwareoption1) => (
          <OptionCard 
          key={hardwareoption1.id}
          title={hardwareoption1.title}
          desc={hardwareoption1.description}
          route={hardwareoption1.route}
          />
        ))}
      </div>
    </div>
  )
}

export default Hardware