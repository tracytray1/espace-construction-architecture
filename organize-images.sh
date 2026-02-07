#!/bin/bash
# organize-images.sh
# Script pour copier et organiser les images dans public/images/

echo "🚀 Organisation des images pour Next.js"
echo "========================================"

# Créer la structure dans public/images
echo "📁 Création de la structure..."
mkdir -p public/images/homepage
mkdir -p public/images/projets/Abomey
mkdir -p public/images/projets/Thorigny-Lutiis
mkdir -p public/images/projets/Douy-La-Ramee
mkdir -p public/images/projets/BoisLeRoi
mkdir -p public/images/projets/Andelu
mkdir -p public/images/projets/Dampmart
mkdir -p public/images/projets/Gosier
mkdir -p public/images/projets/Saint-Francois
mkdir -p public/images/projets/Marie-Galante
mkdir -p public/images/projets/Saint-Maur
mkdir -p public/images/projets/Chatillon
mkdir -p public/images/projets/DammarieCF-1
mkdir -p public/images/projets/DammarieCF-2
mkdir -p public/images/projets/SGLA
mkdir -p public/images/projets/DammarieMF
mkdir -p public/images/projets/Alfortville
mkdir -p public/images/projets/Bourget
mkdir -p public/images/projets/Thorigny-Cerisiers
mkdir -p public/images/splash
mkdir -p public/images/favicons

echo "✅ Structure créée"

# Copier les images depuis src/assets/images
if [ -d "src/assets/images" ]; then
  echo "📦 Copie des images..."

  # Copier toutes les images
  cp -r src/assets/images/homepage/* public/images/homepage/ 2>/dev/null
  cp -r src/assets/images/projets/* public/images/projets/ 2>/dev/null
  cp -r src/assets/images/splash/* public/images/splash/ 2>/dev/null
  cp -r src/assets/images/favicons/* public/images/favicons/ 2>/dev/null

  echo "✅ Images copiées"
else
  echo "❌ Le dossier src/assets/images n'existe pas"
  echo "   Vérifiez le chemin de vos images"
fi

# Copier les SVG
echo "📦 Copie des fichiers SVG..."
if [ -f "src/assets/logo-espace-construction.svg" ]; then
  cp src/assets/logo-espace-construction.svg public/
  echo "✅ logo-espace-construction.svg copié"
fi

if [ -f "src/assets/logo-espace-construction-blanc.svg" ]; then
  cp src/assets/logo-espace-construction-blanc.svg public/
  echo "✅ logo-espace-construction-blanc.svg copié"
fi

echo ""
echo "✅ Organisation terminée !"
echo ""
echo "📊 Résumé:"
find public/images -type f | wc -l | xargs echo "   Images copiées:"
echo ""
echo "📝 Structure créée:"
echo "public/"
echo "├── images/"
echo "│   ├── homepage/          (images miniatures)"
echo "│   ├── projets/           (18 dossiers de projets)"
echo "│   ├── splash/"
echo "│   └── favicons/"
echo "├── logo-espace-construction.svg"
echo "└── logo-espace-construction-blanc.svg"
