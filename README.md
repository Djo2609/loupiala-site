# Site vitrine — Micro-crèches Loupiala

Site statique multipage (HTML/CSS, sans framework ni dépendance externe) pour les trois micro-crèches Loupiala : **Benon**, **Mauzé-sur-le-Mignon** et **Le Thou**.
Domaine prévu : `https://www.loupiala.fr` (actuellement hébergé chez Jimdo).

---

## 1. Contenu du dossier

```
/
├── index.html                              Accueil
├── micro-creches.html                      Vue d'ensemble : projet pédagogique, ateliers, locaux, prestations
├── micro-creche-benon.html                 Page crèche — SEO local Benon (17)
├── micro-creche-mauze-sur-le-mignon.html   Page crèche — SEO local Mauzé-sur-le-Mignon (79)
├── micro-creche-le-thou.html               Page crèche — SEO local Le Thou (17)
├── inscription.html                        Démarche + liens vers les formulaires Kidola
├── tarifs-aides-caf.html                   Tarifs, CMG CAF, crédit d'impôt, place employeur (#employeur)
├── actualites.html                         Journal des actualités (reprise de l'ancien site)
├── qui-sommes-nous.html                    Histoire, équipe, valeurs, partenaires
├── faq.html                                11 questions fréquentes (balisage FAQPage)
├── contact.html                            Coordonnées des 3 crèches, horaires, formulaire, carte
├── mentions-legales.html                   Mentions légales + confidentialité + cookies
├── 404.html                                Page d'erreur
├── sitemap.xml                             Plan du site pour Google
├── robots.txt                              Indique le sitemap aux moteurs
├── llms.txt                                Résumé structuré pour les moteurs IA (ChatGPT, Perplexity…)
├── .htaccess                               Apache : HTTPS, 404, cache, redirections 301 depuis Jimdo
├── _redirects                              Même chose pour Netlify / Cloudflare Pages
└── assets/
    ├── css/style.css                       Feuille de styles unique (tokens en haut du fichier)
    ├── js/main.js                          ~60 lignes : menu mobile, ombre d'en-tête, apparitions
    ├── fonts/                              Grandstander + Figtree auto-hébergées (woff2)
    └── img/                                Photos .webp (1200 px + variante 640 px), logo, favicon, image de partage
```

> Pas de page « Avis » : aucun avis client n'était disponible et nous ne publions pas de faux témoignages. Voir la liste « À fournir ».

---

## 2. Direction artistique — « La colline aux trois cocons »

Tout part du logo existant : un arbre aux feuilles roses et bleues, deux renards sur une colline.

- **Élément signature** : sous le héros de l'accueil, la colline du logo devient **trois collines**, une par crèche (Le Thou, Benon, Mauzé, dans l'ordre géographique ouest → est), chacune avec son arbre et son étiquette cliquable. Des feuilles tombent doucement dans le héros (animation désactivée si l'utilisateur a demandé de réduire les animations). La colline revient en haut du pied de page.
- **Motif « feuille »** (`border-radius: 0 46% 0 46%`) : sur les photos principales, les puces et les numéros.
- **Couleurs** (issues du logo, définies en haut de `style.css`) :

| Token | Hex | Usage |
|---|---|---|
| `--ardoise` | `#2e3a4a` | Texte, titres |
| `--colline` | `#3e4b5b` | Collines, bandeau chiffres, pied de page |
| `--rose` | `#e4a3c0` | Feuille rose : surfaces, puces |
| `--framboise` | `#a8446f` | Boutons, accents de texte (contraste AA) |
| `--lagon` | `#8fc3d3` | Feuille bleue : surfaces, puces |
| `--lagon-fonce` | `#256a7e` | Liens (contraste AA) |
| `--mimosa` | `#f4c95d` | Touches de soleil (badge, soulignement du H1) |
| `--rose-pale` / `--lagon-pale` | `#fcf0f5` / `#ecf5f8` | Fonds de sections alternés |

- **Typographie** : *Grandstander* (titres — ronde et joyeuse, conçue pour la lecture des enfants, rarement vue sur le web) + *Figtree* (texte — très lisible). Les deux sont servies depuis le site lui-même : aucun appel à Google, conforme RGPD.

---

## 3. Mise en ligne

### Option A — Hébergeur classique (OVH, o2switch, Hostinger, IONOS…) — recommandé
1. Commander un hébergement web mutualisé (offre d'entrée de gamme suffisante).
2. Se connecter en FTP/SFTP (FileZilla) avec les identifiants fournis par l'hébergeur.
3. Envoyer **tout le contenu du dossier** (y compris `.htaccess`, fichier caché) dans le dossier `www/` ou `public_html/`.
4. Activer le certificat SSL gratuit (Let's Encrypt) dans le panneau de l'hébergeur.

### Option B — Netlify (gratuit)
1. Créer un compte sur netlify.com → *Add new site* → *Deploy manually*.
2. Glisser-déposer le dossier complet. Le fichier `_redirects` est pris en compte automatiquement.

### Brancher le domaine loupiala.fr
Le domaine est aujourd'hui relié à Jimdo. Chez le **registrar** du domaine (Jimdo ou autre) :
1. Modifier les enregistrements DNS `A` (et `AAAA`) de `loupiala.fr` et le `CNAME` de `www` vers le nouvel hébergeur (valeurs fournies par celui-ci).
2. Ou transférer le domaine chez le nouvel hébergeur (code de transfert à demander à Jimdo).
3. **Ne résilier l'abonnement Jimdo qu'une fois le nouveau site en ligne et vérifié.**
4. ⚠️ L'adresse e-mail `gestionloupiala@outlook.fr` n'est pas liée au domaine : elle continue de fonctionner quoi qu'il arrive.

### Redirections de l'ancien site
Les anciennes URL Jimdo (`/les-micro-crèches/`, `/inscription/`, `/foire-aux-questions/coût/`…) sont redirigées en 301 vers les nouvelles pages (`.htaccess` et `_redirects`). Le référencement acquis est ainsi conservé.

### Formulaire de contact
Le site est statique : le formulaire a besoin d'un service d'envoi.
1. Créer un compte gratuit sur **formspree.io** avec l'adresse `gestionloupiala@outlook.fr`.
2. Créer un formulaire et copier son identifiant.
3. Dans `contact.html`, remplacer `https://formspree.io/f/A-REMPLACER` par l'URL fournie.
(Alternative : Netlify Forms, en ajoutant l'attribut `data-netlify="true"` à la balise `<form>`.)

### Après la mise en ligne (30 minutes)
1. **Google Search Console** : ajouter la propriété `https://www.loupiala.fr`, puis *Sitemaps* → soumettre `sitemap.xml`.
2. **Google Business Profile** : créer/mettre à jour **une fiche par crèche** (3 fiches) avec le lien vers la page de la crèche correspondante (`micro-creche-benon.html`, etc.) et les horaires. C'est le levier n°1 du référencement local.
3. **Facebook** : mettre à jour le lien du site dans la page.
4. Tester : `https://pagespeed.web.dev` (objectif ≥ 90) et `https://search.google.com/test/rich-results` (données structurées).
5. Mettre à jour la date `<lastmod>` de `sitemap.xml` à chaque modification importante.

---

## 4. Modifier le site

- **Textes** : directement dans les fichiers `.html` (chaque section est commentée). Garder un seul `<h1>` par page.
- **Photos** : format `.webp`, 1200 px de large (+ une copie 640 px nommée `…-640.webp`). Outil gratuit : squoosh.app. Mettre à jour `width`/`height` et le texte `alt`.
- **Nouvelle actualité** : dans `actualites.html`, dupliquer un bloc `<li class="billet" id="…">` en haut de la liste ; sur l'accueil, mettre à jour les 3 cartes de la section « Actualités ».
- **Couleurs** : uniquement via les tokens en haut de `assets/css/style.css`.
- **Horaires / téléphones** : présents dans le HTML visible **et** dans les blocs JSON-LD (`<script type="application/ld+json">`) de l'accueil, du contact et des pages crèches — modifier les deux.

---

## 5. À FOURNIR / À VALIDER

### Visuels
- [ ] **Logo en haute définition** (SVG ou PNG transparent ≥ 1000 px) : le logo actuel a été extrait de la bannière Jimdo (210 px) ; il est net en en-tête mais un fichier source améliorerait le rendu et le favicon.
- [ ] **Photos de Loupiala Le Thou terminée** (façade, salle de vie, dortoirs, jardin) : la page Le Thou n'affiche que des photos de chantier. Emplacements : visuel du haut de `micro-creche-le-thou.html` + galerie + carte « Le Thou » sur l'accueil et `micro-creches.html`.
- [ ] **Photos récentes d'ateliers** (2024-2026) : celles du site datent de 2021. Rappel : le site affiche uniquement des photos où les enfants ne sont pas identifiables (choix de la crèche) — à confirmer.
- [ ] **Photo d'équipe** (facultatif, avec accord écrit des salariées) pour `qui-sommes-nous.html`.
- [ ] **Autorisation d'utiliser les logos partenaires** (Crèche Entreprendre, Réseau Entreprendre, REMI) — repris de l'ancien site.
- [ ] Image de partage réseaux sociaux (`assets/img/og-loupiala.jpg`, 1200×630) : actuellement une photo de la salle de vie de Benon ; une version avec le logo serait idéale.

### Informations à confirmer
- [ ] **Horaires 7h45–18h30** : fournis pour Benon, appliqués aux **trois** crèches. À confirmer pour Mauzé et Le Thou.
- [ ] **Le Thou** : ouverture effective le 31 août 2026 ? Numéro de téléphone fixe ? (le site affiche pour l'instant le portable de la gestion 06 68 63 02 76). Adresse « 7 rue Saint-Exupéry, 17290 Le Thou » à confirmer.
- [ ] **Coordonnées GPS** (JSON-LD) : Mauzé et Le Thou géocodés sur l'adresse, **Benon au centre du bourg** (rue non trouvée dans OpenStreetMap). Vérifier sur Google Maps et corriger `latitude`/`longitude` si besoin.
- [ ] **Communes voisines** citées sur chaque page crèche (SEO local) : liste à valider par la gestionnaire (familles réellement accueillies).
- [ ] **Crédit d'impôt « jusqu'à 1 750 € par an »** et **« minimum 15 % à la charge de la famille »** (CMG) : montants 2025-2026, à revérifier chaque année (loi de finances). L'ancien site mentionnait aussi « jusqu'à 857 €/mois » de CMG : non repris car ce montant évolue.
- [ ] **Agrément PMI** : seul celui de Benon (04/01/2021) est connu. Ajouter ceux de Mauzé (PMI des Deux-Sèvres) et du Thou dans `mentions-legales.html`.
- [ ] **Directrice de la publication** : Virginie Dupire indiquée par défaut — à confirmer.
- [ ] **Hébergeur** : à compléter dans `mentions-legales.html` (section « Hébergement ») une fois choisi.
- [ ] **Étape « adaptation en douceur »** du parcours d'inscription : pratique courante, non décrite sur l'ancien site — à confirmer ou préciser (durée, déroulé).
- [ ] **Médiation animale / intervenants** : listés « selon les années » comme sur l'ancien site — confirmer ceux de l'année en cours.
- [ ] Date précise de l'article « Une crèche construite en conteneurs maritimes » (affiché « 2026 »).

### Éléments en attente (placeholders)
- [ ] `contact.html` : action du formulaire `https://formspree.io/f/A-REMPLACER` (voir §3).
- [ ] `mentions-legales.html` : `[À COMPLÉTER : hébergeur]`.

### Pistes non réalisées (à proposer au client)
- [ ] Page **Avis** : récolter 5-10 avis Google par crèche (lien d'avis à partager aux familles), puis les afficher.
- [ ] Menu de la semaine / planning des ateliers, si la crèche souhaite le publier.
