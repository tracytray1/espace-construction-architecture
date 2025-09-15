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
          <h2>Description de l’agence</h2>
          <p><b>Lucas Devienne</b> est un jeune architecte diplômé d'état en 2020 par l'<b>ENSAPLV</b> qui obtient son <b>habilité à la maîtrise d'ouvrage</b> en 2025. Il fonde l'agence <b>ECA</b> (Espace Construction Architecture) en 2026 dans la continuité d'expériences professionnelles menées au sein d'agences basées en <b>région parisienne</b> et en <b>Guadeloupe</b>. Cette initiative a également été nourrie par le développement d'une pratique plus personnelle, travaillant sur des projets plus exigeants en terme de <b>conception architecturale</b>. L'agence ECA est aujourd'hui basée en région parisienne, entourée d'un réseau professionnel local compétant.</p>
        </div>
      </div>

      <div className='about-section about-concept'>
        <div className='about-concept-text'>
          <h2>Exigence conceptuelle et processus de projet</h2>
          <p>La démarche conceptuelle de l'agence implique de définir un <b>sens</b> donné au projet architectural. Ce sens se traduit par la formation d'un <b>schéma de conception</b>, une résolution formelle des problématiques esthétiques et fonctionnelles tout en apportant une direction lisible et claire au projet. À l'image d'une société de pièces, ce schéma définie la façon de transcrire le <b>programme</b> et les <b>intentions spatiales</b> du projet. Ces critères de conception suggèrent une application à toutes les échelles, celle du territoire en faisant participer le paysage à la composition du projet, celle de l'édifice en utilisant la structure comme marqueur des proportions principales de l'ouvrage, celle de la pièce en définissant les séquences spatiales et les perspectives engagées ou celle du détail transformant la complexité constructive en expression de l'architecture. </p><br />
          <p>La notion de schéma implique également de garder de la <b>flexibilité</b> au projet tout en préservant les critères de conceptions qui émergent pendant la phase esquisse. Cette flexibilité permet de rester à l'<b>écoute des demandes</b> de la maîtrise d'ouvrage, de la faire <b>participer</b> tout en communiquant sur une direction et des intentions spatiales claires. Le schéma est également à l'épreuve des transformations qui surviendront suite aux échanges avec les professionnels. Entre la phase esquisse, l'instruction du permis de construire, la consultation des entreprises et l'exécution des travaux, le projet architectural subit des évolutions qui, lorsqu'il est bien pensé, doivent toujours préserver les intentions formulées par le schéma de conception. </p>

          <h2>Le climat comme ressource dans l’architecture</h2>
          <p>Notre expérience aux <b>Antilles Françaises</b> nous a permis de développer un regard particulier sur les <b>composantes climatiques</b> d'un site. Utiliser le climat comme ressource lors de la conception d'un édifice nourrie des réflexions à tous les niveaux du projet, que ce soit en définissant le <b>comportement au vent</b> du bâtiment pour provoquer la ventilation naturelle, en utilisant les <b>protections solaires</b> et débords de toiture comme support d'usages projetés à l'extérieur, en travaillant sur la <b>gestion de la pluie et de l'humidité</b> pour caractériser les différentes peaux de l'enveloppe. Tous ces composantes climatiques fournissent des pistes de conception qui peuvent aller jusqu'à définir la matérialité d'un projet. L'étude du climat dans une région donnée va donc dans le sens d'une architecture qui s'<b>inscrit dans son contexte, agréable à vivre et durable</b>.</p>
        </div>
        <div className='about-concept-image'>
          <img src={PHOTOS_ABOUT[1].title}/>
        </div>
      </div>

      <div className='about-section about-construction'>
        <div className='about-construction-text'>
          <img src={PHOTOS_ABOUT[2].title}/>
        </div>
        <div>
          <h2>Gestion constructive du projet</h2>
          <p>Les compétences de l'agence se traduisent également par une <b>exigence technique</b> en anticipant les problématiques constructives tout au long du processus de projet. Le <b>travail du détail</b> prépare le passage du projet à l'<b>acte de bâtir</b>. On considère le détail comme un outil permettant à une discontinuité de la forme ( transition intérieure - extérieur, articulation façade – toiture, discontinuités de l'enveloppe, etc..) de trouver une résolution constructive et de devenir source d'expression dans l'architecture d'un bâtiment. Il a donc un rôle à jouer lors des phases de conception, en résolvant l'équilibre entre <b>forme idéalisée</b> de l'architecture et <b>réalité construite</b>. Cette démarche nous pousse à intégrer les entreprises dans les échanges bien avant de préparer la demande de permis de construire. Le détail devient alors un <b>outil de négociation</b> en anticipation du chantier. Il est garant de la  réalisation des ouvrages dans les délais et les budgets convenus. Cet apport à l'avantage de rassurer la maîtrise d'ouvrage sur l'économie de projet, toujours dans une recherche de <b>simplicité des réalisations</b>.</p>

          <h2>Vers des projets économiques</h2>
          <p>Le contexte actuel de l'économie pousse les maîtrises d'ouvrage à se tourner vers des entreprises et bureaux d'études pratiquants des prix toujours plus bas. C'est un point crucial vis-à-vis de la faisabilité du projet mais qui entraîne parfois des difficultés voir des conflits lors du chantier. Notre agence est aujourd'hui entourée d'un <b>réseau de professionnels compétents</b> proposant des <b>prix justes et attractifs</b>. Comme écrit plus haut la problématique économique nécessite également des résolutions constructives réfléchies et adaptées aux différentes contraintes du projet. Cette souplesse est garantie par des <b>études précises</b> et une <b>bonne communication</b> entre les intervenants, toujours dans une recherche d'économie en anticipation du chantier.</p>
        </div>
      </div>
    </div>
   )
}

export default AboutContent
