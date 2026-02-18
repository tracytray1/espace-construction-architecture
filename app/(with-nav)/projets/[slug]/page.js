import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/lib/projects-data';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader';
import ProjectInfo from '@/components/ProjectInfo/ProjectInfo';
import ProjectDetailPhotos from '@/components/ProjectDetailPhotos/ProjectDetailPhotos';
import InternalLinks from '@/components/InternalLinks/InternalLinks';
import ProjectFooter from '@/components/ProjectFooter/ProjectFooter';
import './Projet.scss';

// ✅ Génération des metadatas dynamiques (SEO crucial!)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const foundProject = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!foundProject) {
    return {
      title: 'Projet non trouvé',
    };
  }

  return {
    title: `${foundProject.metaTitle}`,
    description: `${foundProject.metaDescription}`,
    openGraph: {
      title: `${foundProject.projet} — ${foundProject.ville}`,
      description: foundProject.description,
      images: [
        {
          url: foundProject.imageUrlHero || foundProject.imageUrl,
          width: 1200,
          height: 630,
          alt: `${foundProject.projet} - ${foundProject.ville}`,
        },
      ],
      type: 'article',
    },
  };
}

// ✅ Génération statique des routes (SSG - crucial pour SEO)
export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjetPage({ params }) {
  const { slug } = await params;
  const foundProject = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!foundProject) {
    notFound();
  }

  // ✅ Données structurées Schema.org (crucial pour SEO)
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalProject',
    name: foundProject.projet,
    description: foundProject.description,
    image: foundProject.imageUrlHero || foundProject.imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: foundProject.ville,
      addressCountry: 'FR',
    },
    architect: {
      '@type': 'Organization',
      name: 'Atelier ECA',
      url: 'https://www.atelier-eca.com',
    },
  };

  return (
    <>
      {/* Données structurées pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="project-detail_wrapper">
        <ProjectHero
          imageUrl={foundProject.imageUrl}
          title={foundProject.title}
          imageUrlHero={foundProject.imageUrlHero}
        />
        <ProjectHeader
          project={foundProject.projet}
          city={foundProject.ville}
          description={foundProject.description}
        />

        <div className="project-detail_body">
          <p className="project">{foundProject.texte}</p>
        </div>

        <ProjectDetailPhotos
          photos={foundProject.imagesProjet}
          project={foundProject.projet}
          id={foundProject.id}
        />
        <ProjectInfo foundProject={foundProject} />
        <InternalLinks allProjects={PROJECTS_DATA} foundProject={foundProject} />
        <ProjectFooter />
      </div>
    </>
  );
}
