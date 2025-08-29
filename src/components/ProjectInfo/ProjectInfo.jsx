import './ProjectInfo.scss'


const ProjectInfo = ({foundProject}) => {
  return (
    <div className='projet-detail_info'>
      <dl className='projet-detail_info-item'>
        <dt>Programme</dt>
        <dd>{foundProject.programme}</dd>
      </dl>
      <dl className='projet-detail_info-item'>
        <dt>Surface habitable</dt>
        <dd>{foundProject.surfaceHabitable}</dd>
      </dl>
      <dl className='projet-detail_info-item'>
        <dt>Site</dt>
        <dd>{foundProject.ville}</dd>
      </dl>

      {foundProject.montantTravaux &&
        <dl className='projet-detail_info-item'>
          <dt>Montant travaux</dt>
          <dd>{foundProject.montantTravaux}</dd>
        </dl>
      }

      {foundProject.maitriseOuvrage &&
        <dl className='projet-detail_info-item'>
          <dt>Maîtrise d'ouvrage</dt>
          <dd>{foundProject.maitriseOuvrage}</dd>
        </dl>
      }

      {foundProject.client &&
        <dl className='projet-detail_info-item'>
          <dt>Client</dt>
          <dd>{foundProject.client}</dd>
        </dl>
      }

      <dl className='projet-detail_info-item'>
        <dt>Mission</dt>
        <dd>{foundProject.mission}</dd>
      </dl>
      <dl className='projet-detail_info-item'>
        <dt>Livraison</dt>
        <dd>{foundProject.livraison}</dd>
      </dl>
    </div>
  )
}

export default ProjectInfo;
