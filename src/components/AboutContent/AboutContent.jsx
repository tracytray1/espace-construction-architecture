import './AboutContent.scss'
import { PHOTOS_ABOUT } from "../../assets/images/a-propos/photos-about";

const AboutContent = () => {
  return (
    <div className='about-content'>
      <div className='about-section about-intro'>
        <div className='about-intro-image'>
          <img src={PHOTOS_ABOUT[0].title} />
        </div>
        <div className='about-intro-text'>
          <h2>L'agence ECA</h2>
          <p>Lucas Devienne, architecte diplômé d'État par l'<b>ENSAPLV</b> en 2020, fonde l'agence <b>ECA</b> (Espace Construction Architecture) dans la continuité d’expériences professionnelles menées au sein d'agences basées en <b>région parisienne</b> et en <b>Guadeloupe</b>. Cette initiative a également été nourrie par la volonté de développer une pratique personnelle exigeante en termes de <b>conception architecturale</b>. L'agence ECA est aujourd'hui basée en région parisienne, entourée d'un réseau professionnel local et compétent. Nous travaillons principalement sur des projets de logements individuels et collectifs.</p>
        </div>
      </div>

      <div className='about-section about-concept'>
        <div className='about-concept-text'>
          <h2>Le climat comme ressource dans l’architecture</h2>
          <p>Notre expérience aux <b>Antilles françaises</b> nous a permis de développer un regard particulier sur les <b>composantes climatiques</b> d'un site. Utiliser le climat comme ressource lors de la conception d'un édifice nourrit des réflexions à tous les niveaux du projet : que ce soit en définissant la volumétrie du bâtiment et son <b>comportement au vent</b> pour provoquer la ventilation naturelle, en utilisant les <b>protections solaires</b> et les débords de toiture comme supports d'espaces projetés à l'extérieur, ou encore en travaillant sur la <b>gestion de la pluie et de l'humidité</b> pour caractériser les différentes peaux de l'enveloppe. Les composantes climatiques d'un site fournissent des pistes de conception qui peuvent aller jusqu'à l'étude de la <b>matérialité d'un projet</b>. Cette démarche tend à développer une architecture <b>inscrite dans son contexte</b>, agréable à vivre et durable. </p>

          <h2>Exigence conceptuelle et processus de projet</h2>
          <p>La méthode de conception de l'agence implique de procurer au projet une direction claire qui puisse être partagée avec la maîtrise d'ouvrage. Les premières esquisses font émerger un schéma de conception, une forme donnée à la résolution des problématiques esthétiques et fonctionnelles supposées par le programme, la nature et la situation de l'ouvrage. À l'image d'une société de pièces, ce schéma définit la façon de transcrire les intentions spatiales du projet architectural tout en leurs donnant une cohérence et un sens. Le schéma suggère une application à toutes les échelles : celle du site, en faisant participer le paysage à la composition du projet ; celle de l'édifice, en utilisant la structure et ses portées comme marqueur du rythme de l'ouvrage ; celle de la pièce, en définissant les espaces et leurs transitions ; ou celle du détail, en procurant à la complexité constructive une expression dans l'architecture.</p>
          <p>La notion de schéma implique également de garder de la flexibilité lors de la conception du projet. Bien que les intentions soient clairement définies, elles n'excluent pas de rester à l'écoute de la maîtrise d'ouvrage et de la faire participer. La maquette numérique devient alors un outil de communication primordial en facilitant la projection. Le schéma est également à l'épreuve des transformations qui surviendront suite aux échanges avec les professionnels lors des différentes phases du processus de projet. Que ce soit pour des questions urbanistiques, constructives ou économiques, il est souvent nécessaire d'adapter certains éléments tout en préservant les principes de conception.</p>
        </div>
        <div className='about-concept-image'>
          <img src={PHOTOS_ABOUT[1].title}/>
        </div>
      </div>

      <div className='about-section about-construction'>
        <div className='about-construction-image'>
          <img src={PHOTOS_ABOUT[2].title}/>
        </div>
        <div className='about-construction-text'>
          <div className='main-text'>
            <h2>Gestion constructive et économique par le détail</h2>
            <p>Le travail du détail en architecture permet de mettre en évidence les points de complexité du projet, de les résoudre et de déterminer leur rôle dans l’expression de l'architecture. Dans l'agence, ce travail intervient dès les premières phases de conception, pour éviter que des problématiques constructives et économiques n'affectent le projet. Il est toujours question de préserver la qualité architecturale lors du chantier tout en proposant des solutions constructives simples et adaptées. En intégrant les entreprises dans les discussions dès les premières phases de conception, le détail devient un outil de négociation qui confronte le projet et ses enjeux architecturaux aux méthodes et aux ressources des entreprises. Cette exigence de communication est pour nous la meilleure garantie d'une réalisation des ouvrages dans la forme, les délais et les budgets convenus.</p>
          </div>
          <div className='bottom-text'>
            <p><b>Notre agence propose des missions adaptées au profil de la maîtrise d'ouvrage (particuliers ou professionnels) et aux budgets alloués aux travaux. Ces offres de services sont principalement forfaitaires. Nous collaborons aujourd'hui avec un réseau de professionnels compétents proposant des prix justes et attractifs.</b></p>
          </div>

        </div>
      </div>
    </div>
   )
}

export default AboutContent
