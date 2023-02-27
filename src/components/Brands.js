import '../style/style.scss'

import { BsChevronRight } from 'react-icons/bs';

function Brands() {
    return(
        <div className="brands-container">
            <h1>Jotform Enterprise is trusted by leading companies around the world.</h1>
            <div className='brand-logo-container'>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/adobe.svg" alt="Adobe Logo" />
                </div>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/redbull.svg" alt="redbull Logo" />
                </div>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/armani.svg" alt="armani Logo" />
                </div>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/opera-house.svg" alt="opera Logo" />
                </div>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/williams.svg" alt="williams Logo" />
                </div>
                <div className="brand-item">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/redfin.svg" alt="redfin Logo" />
                </div> 
                <div className="brand-item mobile">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/ford.svg" alt="ford Logo" />
                </div> 
                <div className="brand-item mobile">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/dominos.svg" alt="dominos Logo" />
                </div> 
                <div className="brand-item mobile">
                    <img className="brand-logo" src="https://cdn.jotfor.ms/p/enterprise/assets/img-min/svg/logos/netflix.svg" alt="redfin Logo" />
                </div> 
                <BsChevronRight className='right-icon' />
            </div>
            <div className='circle-container'>
                <div className="circle"><div className="circle-filled"></div></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle desktop"></div>
                <div className="circle desktop"></div>
            </div>
            
        </div>
    )
}

export default Brands;