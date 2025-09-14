import { LOGOS_PARTNERS } from '../../assets/images/partners-logos/logos-partners';
import './AboutFooter.scss'

const AboutFooter = () => {
   return (
    <div className="container">
      <h2>Partenaires de l'agence</h2>
      <div className="partners">
        {LOGOS_PARTNERS.map((logo) => (
          <img src={logo.imageURL} key={logo.id}/>
          )
        )}
      </div>
       <div className="divider"></div>
    </div>
 )
}

export default AboutFooter
