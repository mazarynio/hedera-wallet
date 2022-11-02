import OptionCard from "../../../common/base/OptionCard";
import { SoftwareOptions } from "../../../domain/SoftwareOptions";
import BtnBack from "../components/BtnBack";
import './Software.css'


const Software = () => {
  return (
    <div className='software'>
        <div>
         <BtnBack />
        </div>
        <h1 className='heading-1'>Software</h1>
        <div>
        {Array.from(SoftwareOptions.values()).filter((option) => option.supported).map((softwareoption1) => (
             <OptionCard 
              key={softwareoption1.id}
              title={softwareoption1.title}
              desc={softwareoption1.description}
              route={softwareoption1.route}
             />
          ))}
        
        </div>
    </div>
  )
}

export default Software