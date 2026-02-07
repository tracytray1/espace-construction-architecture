'use client';

import Image from 'next/image';
import { LOGOS_PARTNERS } from '@/public/images/partners-logos/logos-partners';
import './AboutFooter.scss'

const AboutFooter = () => {
   return (
    <div className="container">
      <h2>Partenaires de l'agence</h2>
      <div className="partners">
        {LOGOS_PARTNERS.map((logo) => (
          <Image
            src={logo.imageURL}
            key={logo.id}
            alt = {`Partenaire ${logo.id}`}
            width={194}
            height={100}
            style={{ width: 'auto', height: 'auto', maxWidth: '194px' }}
            />
          ))}
      </div>
       <div className="divider"></div>
    </div>
 )
}

export default AboutFooter
