'use client';

import './AboutContent.scss'

const AboutContent = () => {
  return (
    <div className='about-content'>
      <div className='about-section about-intro'>
        <div className='about-intro-image'>
          <img
            src="/images/a-propos/portrait-lucas-devienne.jpg"
            alt='portrait Lucas Devienne'
            width={300}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='about-intro-text'>
          <h2>L'agence ECA</h2>
          <p>Lucas Devienne, architecte diplômé d'État par l'<b>ENSAPLV</b> en 2020, fonde l'agence <b>ECA</b> (Espace Construction Architecture) dans la continuité d’expériences professionnelles acquises au sein d'agences établies en <b>Ile-de-France</b> et en <b>Guadeloupe</b>. L'agence ECA est aujourd'hui basée en région parisienne, entourée d'un réseau professionnel local et compétent. Nous travaillons principalement sur des projets de <b>logements individuels et collectifs</b>.</p>
        </div>
      </div>

      <div className='about-section about-concept'>
        <div className='about-concept-text'>
          <h2>Le climat comme ressource dans l’architecture</h2>
          <p>Notre expérience aux <b>Antilles françaises</b> nous a permis de développer un regard particulier sur les <b>composantes climatiques</b> d'un site. Utiliser le climat comme ressource lors de la conception d'un édifice nourrit des réflexions à tous les niveaux du projet : que ce soit en définissant la volumétrie du bâtiment et son <b>comportement au vent</b> pour provoquer la ventilation naturelle, en utilisant les <b>protections solaires</b> et les débords de toiture comme supports d'espaces projetés à l'extérieur, ou encore en travaillant sur la <b>gestion de la pluie et de l'humidité</b> pour caractériser les différentes peaux de l'enveloppe. Les composantes climatiques d'un site fournissent des pistes de conception qui peuvent aller jusqu'à l'étude de la <b>matérialité d'un projet</b>. Cette démarche tend à développer une architecture <b>inscrite dans son contexte, agréable à vivre et durable</b>. </p>

          <h2>Exigence conceptuelle et processus de projet</h2>
          <p>La <b>méthode de conception</b> de l'agence implique de procurer au projet une direction claire qui puisse être partagée avec la maîtrise d'ouvrage. Les premières esquisses font émerger un <b>schéma de conception</b>, une forme donnée à la résolution des problématiques <b>esthétiques et fonctionnelles</b> supposées par le programme, ainsi que la nature et la situation de l'ouvrage. À l'image d'une société de pièces, ce schéma définit la façon de transcrire les <b>intentions spatiales</b> du projet architectural tout en leurs donnant une cohérence et un <b>sens</b>. Le schéma suggère une application à toutes les échelles : le <b>site</b>, en faisant participer le paysage à la composition du projet ; l'<b>édifice</b>, en utilisant la structure et ses portées comme marqueur du rythme de l'ouvrage ; la <b>pièce</b>, en définissant les espaces et leurs transitions ; le <b>détail</b>, en procurant à la complexité constructive une expression dans l'architecture.</p>
          <p>La notion de schéma implique également de garder de la <b>flexibilité</b> lors de la conception du projet. Bien que les intentions soient clairement définies, elles n'excluent pas de rester à <b>l'écoute de la maîtrise d'ouvrage</b> et d'intégrer sa <b>participation</b>. La <b>maquette</b> numérique devient alors un outil de communication primordial en facilitant la projection. Le schéma est également à l'épreuve des <b>transformations</b> qui surviendront suite aux échanges avec les professionnels lors des différentes phases du processus de projet. Que ce soit pour des questions urbanistiques, constructives ou économiques, il est souvent nécessaire <b>d'adapter</b> certains éléments tout en <b>respectant les principes de conception</b>.</p>
        </div>
        <div className='about-concept-image'>
          <img
            src="/images/a-propos/plans-andelu.jpg"
            alt="plan projet Andelu"
            width={600}
            height={800}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <div className='about-section about-construction'>
        <div className='about-construction-image'>
          <img
            src="/images/a-propos/plan.jpg"
            alt="plan Saint Anne"
            width={500}
            height={700}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='about-construction-text'>
          <div className='main-text'>
            <h2>Gestion constructive et économique par le détail</h2>
            <p>Le <b>travail du détail</b> en architecture permet de mettre en évidence les points de complexité du projet, de les résoudre et de déterminer leur rôle dans <b>l’expression de l'architecture</b>. Dans l'agence, ce travail intervient dès les premières phases de conception, pour éviter que des problématiques constructives et économiques n'affectent le projet. Il est toujours question de <b>préserver la qualité architecturale</b> lors du chantier tout en proposant des solutions constructives <b>simples et adaptées.</b> En intégrant les entreprises dans les discussions dès les premières phases de conception, le détail devient un <b>outil de négociation</b> qui confronte le projet et ses enjeux architecturaux aux méthodes et aux ressources des entreprises. Cette exigence de communication est pour nous la meilleure garantie d'une réalisation des ouvrages <b>dans la forme, les délais et les budgets convenus.</b></p>
          </div>
          <div className='bottom-text'>
            <p><b><i>Notre agence propose des missions adaptées au profil de la maîtrise d'ouvrage (particuliers ou professionnels) et aux budgets alloués aux travaux. Elles sont forfaitaires lors des phases conception (Esquisse, Autorisation d'urbanisme, etc...) puis soumises à un pourcentage lors des phases travaux (Visa, Direction de l’exécution des travaux, etc...). Nous collaborons aujourd'hui avec un réseau de professionnels compétents proposant des prix justes et attractifs.</i></b></p>
          </div>
        </div>
      </div>
    </div>
   )
}

export default AboutContent
