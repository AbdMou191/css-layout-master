window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS['fr'] = {
  // ============ Textes Communs ============
  app_title: 'Référence Flexbox & Grid — Leçons et Exercices',
  mode_theory: 'Leçons Théoriques',
  mode_practice: 'Leçons Pratiques',
  mode_flex: 'Simulateur Flexbox',
  mode_grid: 'Simulateur Grid',
  mode_compare: 'Comparer',
  mode_quiz: 'Testez-vous',
  toggle_lessons: 'Afficher/Masquer la Liste des Leçons',
  welcome_title: '🎯 Objectif de l\'Application',
  welcome_desc: 'Cette application est conçue pour vous guider pas à pas pour maîtriser les systèmes de mise en page CSS (<strong>Flexbox</strong> et <strong>CSS Grid</strong>).',
  welcome_hint: 'Choisissez n\'importe quelle leçon dans la barre latérale pour la masquer avec une animation fluide et commencer la leçon immédiatement!',
  goal_title: 'Objectif Cible',
  your_try: 'Votre Essai',
  btn_check: 'Vérifier la Solution',
  btn_hint: 'Indice',
  btn_next: 'Suivant',
  msg_success: 'Bravo! Solution correcte. Passez à l\'exercice suivant.',
  msg_error: 'Pas encore la bonne réponse — essayez d\'autres options ou demandez un indice.',
  msg_hint: 'Indice: ',
  live_demo: 'Démo en Direct: Essayez les valeurs vous-même',
  flex_container: 'Flexbox',
  grid_container: 'Grid',
  container_label: 'Conteneur',
  items_count: 'Nombre d\'éléments: ',
  gap_label: 'gap: ',
  flex_props: 'Propriétés Flexbox',
  grid_props: 'Propriétés Grid',
  question: 'Question ',
  of: ' sur ',
  correct_answers: 'Réponses correctes: ',
  show_result: 'Afficher le Résultat',
  restart_quiz: 'Recommencer le Quiz',
  excellent: 'Excellent! Vous avez maîtrisé les bases de Flexbox et Grid.',
  good: 'Bien — révisez les leçons théoriques et vous vous améliorerez.',
  need_practice: 'Pas de souci — commencez par les leçons théoriques puis essayez les exercices.',
  
  // ============ Noms des Propriétés ============
  prop_direction: 'flex-direction',
  prop_justify: 'justify-content',
  prop_align: 'align-items',
  prop_wrap: 'flex-wrap',
  prop_cols: 'grid-template-columns',
  prop_justify_items: 'justify-items',
  prop_align_items: 'align-items',
  prop_flow: 'grid-auto-flow',
  prop_grow: 'flex-grow',
  prop_shrink: 'flex-shrink',
  prop_basis: 'flex-basis',
  prop_order: 'order',
  prop_align_self: 'align-self',
  prop_align_content: 'align-content',
  prop_areas: 'grid-template-areas',
  prop_column: 'grid-column',
  prop_row: 'grid-row',
  
  // ============ Valeurs des Propriétés ============
  val_row: 'row',
  val_row_reverse: 'row-reverse',
  val_column: 'column',
  val_column_reverse: 'column-reverse',
  val_flex_start: 'flex-start',
  val_flex_end: 'flex-end',
  val_center: 'center',
  val_space_between: 'space-between',
  val_space_around: 'space-around',
  val_space_evenly: 'space-evenly',
  val_stretch: 'stretch',
  val_baseline: 'baseline',
  val_nowrap: 'nowrap',
  val_wrap: 'wrap',
  val_wrap_reverse: 'wrap-reverse',
  val_start: 'start',
  val_end: 'end',
  val_dense: 'dense',
  
  // ============ Leçons Théoriques ============
  lessons: [
    // Flexbox
    {
      grp: 'Flexbox',
      id: 'f0',
      t: 'Qu\'est-ce que Flexbox?',
      b: '<p>Flexbox est un modèle de mise en page CSS basé sur <b>un axe</b> (horizontal ou vertical) pour distribuer les éléments à l\'intérieur d\'un conteneur, avec la capacité des éléments à grandir et rétrécir automatiquement selon l\'espace disponible.</p><p>L\'idée de base: le conteneur devient <code>display: flex</code>, et tout son contenu direct devient des "éléments flex" distribués sur l\'<b>axe principal</b> et alignés sur l\'<b>axe transversal</b>.</p><div class="note">Quand l\'utiliser? Barre de navigation, groupe de boutons, centrer un seul élément, distribuer des éléments dans une ligne ou colonne.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f1',
      t: 'flex-direction — Direction',
      b: '<p>Détermine la direction de l\'axe principal, c\'est-à-dire où la distribution "commence" et "finit":</p><table class="vals"><tr><th>Valeur</th><th>Signification</th></tr><tr><td><code>row</code></td><td>Horizontal de gauche à droite (par défaut)</td></tr><tr><td><code>row-reverse</code></td><td>Horizontal inversé, commence de la droite</td></tr><tr><td><code>column</code></td><td>Vertical de haut en bas</td></tr><tr><td><code>column-reverse</code></td><td>Vertical inversé, commence du bas</td></tr></table><p>Essayez les valeurs dans la démo en direct ci-dessous et remarquez comment l\'alignement par défaut des éléments change.</p><div class="note">Attention: en mode row, justify-content est horizontal et align-items est vertical, et c\'est complètement inversé en mode column.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f2',
      t: 'justify-content — Axe Principal',
      b: '<p>Distribue les éléments et l\'espace vide <b>le long de l\'axe principal</b>:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>flex-start</code></td><td>Regroupe les éléments au début de l\'axe (par défaut)</td></tr><tr><td><code>center</code></td><td>Centre les éléments</td></tr><tr><td><code>flex-end</code></td><td>Regroupe les éléments à la fin de l\'axe</td></tr><tr><td><code>space-between</code></td><td>Espace égal <b>entre</b> les éléments seulement, pas d\'espace aux bords</td></tr><tr><td><code>space-around</code></td><td>Demi-espace aux bords et espace complet entre les éléments</td></tr><tr><td><code>space-evenly</code></td><td>Tous les espaces sont exactement égaux: bords et entre les éléments</td></tr></table><div class="note">Comparez vous-même: space-between ne laisse pas d\'espace aux bords, tandis que space-evenly laisse un espace égal partout.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f3',
      t: 'align-items — Axe Transversal',
      b: '<p>Aligne les éléments <b>sur l\'axe transversal</b> (vertical en mode row). Notez la différence: justify-content distribue sur l\'axe principal, et celui-ci sur l\'axe opposé:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>stretch</code></td><td>Étire les éléments pour remplir toute la hauteur (par défaut)</td></tr><tr><td><code>flex-start</code></td><td>Haut du conteneur</td></tr><tr><td><code>center</code></td><td>Centrage vertical</td></tr><tr><td><code>flex-end</code></td><td>Bas du conteneur</td></tr><tr><td><code>baseline</code></td><td>Aligne la ligne de base du texte entre les éléments</td></tr></table><div class="note">Centrage parfait au milieu du conteneur = justify-content: center + align-items: center.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f4',
      t: 'flex-wrap — Enveloppement',
      b: '<p>Que se passe-t-il quand les éléments ne tiennent pas dans une ligne? <code>flex-wrap</code> détermine cela:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>nowrap</code></td><td>Reste dans une ligne et rétrécit même s\'ils ne tiennent pas (par défaut)</td></tr><tr><td><code>wrap</code></td><td>Les éléments supplémentaires passent à une nouvelle ligne</td></tr><tr><td><code>wrap-reverse</code></td><td>S\'enveloppe avec direction de lignes inversée</td></tr></table><p>Essayez wrap dans la démo avec 6 éléments — rappelez-vous d\'augmenter le nombre d\'éléments ou de les agrandir pour remarquer la différence.</p>'
    },
    {
      grp: 'Flexbox',
      id: 'f5',
      t: 'flex-grow, flex-shrink, et flex-basis',
      b: '<p>Ces propriétés contrôlent comment les éléments flex grandissent ou rétrécissent:</p><table class="vals"><tr><th>Propriété</th><th>Fonction</th><th>Valeur par Défaut</th></tr><tr><td><code>flex-grow</code></td><td>Ratio de croissance de l\'élément pour remplir l\'espace vide</td><td>0</td></tr><tr><td><code>flex-shrink</code></td><td>Ratio de rétrécissement de l\'élément quand l\'espace est limité</td><td>1</td></tr><tr><td><code>flex-basis</code></td><td>Taille initiale de l\'élément avant croissance/rétrécissement</td><td>auto</td></tr></table><p>Le raccourci <code>flex: 1</code> signifie <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.</p><div class="note">flex-basis est comme width/height mais fonctionne seulement sur l\'axe principal.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f6',
      t: 'order — Ordre des Éléments',
      b: '<p>Permet de changer l\'ordre visuel des éléments sans changer le HTML:</p><pre>.item {\n  order: 2;   /* Valeur plus grande = apparaît plus tard */\n}</pre><p>La valeur par défaut est <code>0</code>. Les éléments avec des valeurs négatives apparaissent en premier, et les valeurs positives apparaissent en dernier.</p><div class="note">Utilisez order avec prudence — ne changez pas l\'ordre de lecture logique du contenu.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f7',
      t: 'align-self — Alignement Individuel',
      b: '<p>Permet d\'aligner un seul élément différemment des autres:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>auto</code></td><td>Suit align-items du conteneur (par défaut)</td></tr><tr><td><code>flex-start</code></td><td>Haut du conteneur</td></tr><tr><td><code>center</code></td><td>Centrage vertical</td></tr><tr><td><code>flex-end</code></td><td>Bas du conteneur</td></tr><tr><td><code>stretch</code></td><td>Étire l\'élément pour remplir la hauteur</td></tr></table><p>Exemple: un élément en bas tandis que les autres sont en haut:</p><pre>.last-item {\n  align-self: flex-end;\n}</pre>'
    },
    {
      grp: 'Flexbox',
      id: 'f8',
      t: 'align-content — Alignement Multi-lignes',
      b: '<p>Contrôle l\'alignement des <b>lignes elles-mêmes</b> (pas les éléments) quand il y a enveloppement:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>stretch</code></td><td>Étire les lignes pour remplir l\'espace (par défaut)</td></tr><tr><td><code>flex-start</code></td><td>Regroupe les lignes en haut</td></tr><tr><td><code>center</code></td><td>Centre les lignes verticalement</td></tr><tr><td><code>flex-end</code></td><td>Regroupe les lignes en bas</td></tr><tr><td><code>space-between</code></td><td>Espace égal entre les lignes</td></tr></table><div class="note">align-content ne fonctionne qu\'avec flex-wrap: wrap et plus d\'une ligne.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f9',
      t: 'gap — Espacement Entre les Éléments',
      b: '<p><code>gap</code> définit l\'espacement entre les éléments <b>sans marges externes</b> — la manière la plus propre d\'ajouter de l\'espacement dans Flexbox et Grid:</p><pre>.container {\n  gap: 16px;           /* Lignes et colonnes ensemble */\n  row-gap: 8px;        /* Lignes seulement */\n  column-gap: 16px;    /* Colonnes seulement */\n}</pre><div class="note">Dans les navigateurs modernes, gap fonctionne avec Flexbox et Grid.</div>'
    },
    
    // Grid
    {
      grp: 'Grid',
      id: 'g0',
      t: 'Qu\'est-ce que Grid?',
      b: '<p>Grid est un modèle de mise en page <b>bidimensionnel</b>: lignes et colonnes ensemble en même temps, contrairement à Flexbox qui traite un axe.</p><p>Le conteneur est défini avec <b><code>display: grid</code></b>, puis divisé en une grille de cellules via <code>grid-template-columns</code> et <code>grid-template-rows</code>, et les éléments sont placés dans les cellules automatiquement ou manuellement.</p><div class="note">Quand l\'utiliser? Mise en page complète, galerie d\'images, cartes de produits — tout ce qui a une structure lignes × colonnes.</div>'
    },
    {
      grp: 'Grid',
      id: 'g1',
      t: 'grid-template-columns — Colonnes',
      b: '<p>Détermine le nombre et la taille des colonnes. Les unités les plus importantes:</p><table class="vals"><tr><th>Unité</th><th>Signification</th></tr><tr><td><code>px</code></td><td>Taille fixe qui ne change pas</td></tr><tr><td><code>%</code></td><td>Pourcentage de la largeur du conteneur</td></tr><tr><td><code>fr</code></td><td>"Fraction" de l\'espace restant — divise l\'espace proportionnellement</td></tr><tr><td><code>auto</code></td><td>Calculé à partir du contenu de l\'élément</td></tr></table><p>Exemples courants:</p><pre>grid-template-columns: 1fr 1fr 1fr;        /* 3 colonnes égales */\ngrid-template-columns: repeat(3, 1fr);     /* Même chose raccourci */\ngrid-template-columns: 200px 1fr;          /* Colonne fixe + flexible */\ngrid-template-columns: 1fr 2fr 1fr;        /* Milieu double des côtés */</pre>'
    },
    {
      grp: 'Grid',
      id: 'g2',
      t: 'grid-template-rows et minmax',
      b: '<p>Détermine les hauteurs des lignes avec la même logique que les colonnes. Exemple: <code>grid-template-rows: 80px auto 1fr</code> signifie une ligne fixe, une suivant son contenu, et une troisième remplissant le reste.</p><p>La fonction très utile <code>minmax(min, max)</code>:</p><pre>grid-template-rows: repeat(3, minmax(44px, auto));</pre><p>Cela fait que chaque ligne <b>ne fait pas moins de 44px</b> mais grandit si le contenu a besoin de plus d\'espace.</p>'
    },
    {
      grp: 'Grid',
      id: 'g3',
      t: 'gap — Espacement',
      b: '<p>Comme dans Flexbox, <code>gap</code> définit l\'espacement entre les lignes et colonnes sans marges:</p><pre>gap: 12px;                 /* Lignes et colonnes ensemble */\nrow-gap: 8px;              /* Lignes seulement */\ncolumn-gap: 16px;          /* Colonnes seulement */</pre><div class="note">Avant que gap existe, les développeurs utilisaient des marges et padding avec des astuces complexes — plus nécessaire maintenant.</div>'
    },
    {
      grp: 'Grid',
      id: 'g4',
      t: 'justify-items et align-items',
      b: '<p>Ces deux propriétés alignent <b>chaque élément à l\'intérieur de sa cellule</b> (pas toute la grille):</p><table class="vals"><tr><th>Propriété</th><th>Axe</th></tr><tr><td><code>justify-items</code></td><td>Horizontal à l\'intérieur de la cellule: start / center / end / stretch</td></tr><tr><td><code>align-items</code></td><td>Vertical à l\'intérieur de la cellule: start / center / end / stretch</td></tr></table><p>Le raccourci <code>place-items: center center;</code> ajuste les deux ensemble — la manière la plus courte de centrer un élément dans sa cellule.</p><div class="note">Comparez: dans Flexbox il n\'y a pas de justify-items, car les éléments bougent comme un groupe sur l\'axe principal via justify-content.</div>'
    },
    {
      grp: 'Grid',
      id: 'g5',
      t: 'grid-auto-flow — Ordre de Remplissage',
      b: '<p>Détermine comment les éléments remplissent les cellules disponibles:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>row</code></td><td>Remplit ligne par ligne de gauche à droite (par défaut)</td></tr><tr><td><code>column</code></td><td>Remplit colonne par colonne — l\'élément suivant descend pas à côté</td></tr><tr><td><code>dense</code></td><td>Remplit les espaces vides d\'abord avant les nouvelles cellules</td></tr></table><p>Essayez column dans la démo: remarquez comment l\'ordre devient vertical même si le nombre de colonnes reste le même.</p>'
    },
    {
      grp: 'Grid',
      id: 'g6',
      t: 'grid-template-areas — Mise en Page avec Zones',
      b: '<p>Permet de nommer les zones de la grille et distribuer les éléments dessus avec des noms clairs:</p><pre>.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }</pre><p>Le point <code>.</code> signifie une zone vide.</p><div class="note">Cette méthode est excellente pour les mises en page complètes car elle rend le code lisible comme une carte.</div>'
    },
    {
      grp: 'Grid',
      id: 'g7',
      t: 'grid-column et grid-row — Fusion de Cellules',
      b: '<p>Permet de fusionner plusieurs cellules en un seul élément:</p><pre>.item {\n  grid-column: 1 / 3;    /* De la colonne 1 à 3 (fusionne deux colonnes) */\n  grid-row: 2 / 4;       /* De la ligne 2 à 4 (fusionne deux lignes) */\n}</pre><p>On peut utiliser le mot-clé <code>span</code>:</p><pre>.item {\n  grid-column: span 2;   /* S\'étend sur 2 colonnes */\n  grid-row: span 3;      /* S\'étend sur 3 lignes */\n}</pre>'
    },
    {
      grp: 'Grid',
      id: 'g8',
      t: 'auto-fit et auto-fill — Colonnes Dynamiques',
      b: '<p>Permet de créer des colonnes qui s\'adaptent automatiquement à la largeur du conteneur:</p><pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre><p>La différence entre auto-fit et auto-fill:</p><table class="vals"><tr><th>Valeur</th><th>Comportement</th></tr><tr><td><code>auto-fill</code></td><td>Crée des colonnes vides si les éléments ne suffisent pas à les remplir</td></tr><tr><td><code>auto-fit</code></td><td>Replie les colonnes vides et élargit celles existantes</td></tr></table><div class="note">auto-fit est le meilleur choix pour les galeries d\'images et cartes responsives.</div>'
    },
    {
      grp: 'Grid',
      id: 'g9',
      t: 'Flexbox ou Grid? Quand Utiliser Chacun',
      b: '<p><b>Utilisez Flexbox</b> quand la mise en page est <b>unidimensionnelle</b>: éléments dans une ligne ou colonne, et peuvent s\'envelopper selon l\'espace. Exemples: barre de navigation, tags, groupe de boutons, centrer un élément.</p><p><b>Utilisez Grid</b> quand la mise en page est <b>deux dimensions ensemble</b> prédéfinies: page complète avec zones, galerie d\'images, tableau de cartes. Exemple classique pour la mise en page:</p><pre>.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  gap: 12px;\n}</pre><p>Et souvent ils travaillent ensemble: Grid pour le cadre de toute la page, et Flexbox à l\'intérieur de chaque zone pour distribuer son contenu.</p>'
    }
  ],
  
  // ============ Exercices Pratiques ============
  challenges: [
    {
      type: 'flex',
      t: 'Exercice 1',
      title: 'Centrage Parfait',
      items: 3,
      desc: 'Faites que les trois éléments soient <b>exactement au milieu du conteneur</b> — horizontalement et verticalement.',
      hint: 'Vous avez besoin de deux propriétés ensemble: une pour l\'axe principal et une pour l\'axe transversal, toutes deux avec la valeur center.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'flex',
      t: 'Exercice 2',
      title: 'Distribution Espacée',
      items: 5,
      desc: 'Distribuez les cinq éléments pour que les <b>espaces soient égaux partout</b> — entre les éléments et entre eux et les bords du conteneur.',
      hint: 'Une valeur de justify-content rend tous les espaces exactement égaux.',
      init: {direction:'row',justify:'flex-start',align:'center',wrap:'nowrap',gap:8},
      target: {justify:'space-evenly'}
    },
    {
      type: 'flex',
      t: 'Exercice 3',
      title: 'Colonne Inversée',
      items: 4,
      desc: 'Faites que les éléments soient arrangés dans une <b>colonne commençant du bas</b> (premier élément en bas, dernier en haut).',
      hint: 'La propriété direction a une valeur signifiant "colonne inversée".',
      init: {direction:'row',justify:'center',align:'center',wrap:'nowrap',gap:8},
      target: {direction:'column-reverse'}
    },
    {
      type: 'flex',
      t: 'Exercice 4',
      title: 'Deux Lignes d\'Éléments',
      items: 8,
      desc: 'En utilisant huit éléments, faites qu\'ils <b>s\'enveloppent en deux lignes</b> au lieu de rétrécir dans une ligne.',
      hint: 'La propriété wrap a une valeur qui permet de passer à une nouvelle ligne quand l\'espace manque.',
      init: {direction:'row',justify:'flex-start',align:'stretch',wrap:'nowrap',gap:8},
      target: {wrap:'wrap'}
    },
    {
      type: 'flex',
      t: 'Exercice 5',
      title: 'Bas Gauche',
      items: 3,
      desc: 'Regroupez les éléments dans le <b>coin bas-gauche</b> du conteneur (fin des deux axes ensemble).',
      hint: 'flex-end pour l\'axe principal, et flex-end pour l\'axe transversal.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'flex-end',align:'flex-end'}
    },
    {
      type: 'grid',
      t: 'Exercice 6',
      title: 'Trois Colonnes Égales',
      items: 6,
      desc: 'Convertissez la grille en <b>trois colonnes de taille égale</b> (assurez-vous qu\'elle a six éléments).',
      hint: 'grid-template-columns avec la fonction repeat et l\'unité fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'repeat(3, 1fr)'}
    },
    {
      type: 'grid',
      t: 'Exercice 7',
      title: 'Colonne Proéminente',
      items: 6,
      desc: 'Faites que la <b>colonne du milieu soit le double de la largeur</b> des deux colonnes latérales.',
      hint: 'L\'unité fr divise l\'espace proportionnellement: 1fr 2fr 1fr.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'1fr 2fr 1fr'}
    },
    {
      type: 'grid',
      t: 'Exercice 8',
      title: 'Centrage Dans les Cellules',
      items: 6,
      desc: 'Faites que chaque élément soit <b>au milieu de sa cellule</b> — horizontalement et verticalement.',
      hint: 'Deux propriétés: justify-items pour l\'horizontal et align-items pour le vertical, toutes deux center.',
      init: {cols:'repeat(3, 1fr)',justify:'start',align:'start',flow:'row',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'grid',
      t: 'Exercice 9',
      title: 'Remplissage Vertical',
      items: 6,
      desc: 'Changez la méthode de remplissage pour que la <b>première colonne se remplisse complètement avant de passer à la deuxième</b>.',
      hint: 'grid-auto-flow avec une valeur signifiant "commencez par les colonnes".',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {flow:'column'}
    },
    {
      type: 'grid',
      t: 'Exercice 10',
      title: 'Colonne Fixe et Flexible',
      items: 4,
      desc: 'Faites que la <b>première colonne soit de largeur fixe 150px</b>, et la deuxième colonne remplit le reste de l\'espace.',
      hint: 'Mélangez une unité fixe avec fr: 150px 1fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'150px 1fr'}
    }
  ],
  
  // ============ Quiz ============
  quiz: [
    {
      q: 'Quelle propriété détermine la direction de distribution des éléments dans un conteneur Flexbox?',
      o: ['justify-content', 'flex-direction', 'align-items', 'flex-wrap'],
      a: 1,
      e: 'flex-direction contrôle l\'axe principal: row est horizontal, column est vertical, et avec reverse la direction s\'inverse.'
    },
    {
      q: 'Pour centrer les éléments horizontalement dans un conteneur flex avec direction row nous utilisons:',
      o: ['align-items: center', 'justify-content: center', 'flex-wrap: wrap', 'gap: auto'],
      a: 1,
      e: 'justify-content travaille sur l\'axe principal (horizontal en row), et center centre les éléments dedans.'
    },
    {
      q: 'Quelle valeur de justify-content distribue l\'espace vide également entre les éléments et les bords?',
      o: ['space-between', 'space-around', 'space-evenly', 'flex-start'],
      a: 2,
      e: 'space-evenly rend tous les espaces exactement égaux, tandis que space-between ne laisse pas d\'espace aux bords.'
    },
    {
      q: 'Que fait la valeur wrap dans la propriété flex-wrap?',
      o: ['Agrandit les éléments pour remplir la ligne', 'Déplace les éléments supplémentaires à une nouvelle ligne', 'Cache les éléments supplémentaires', 'Inverse l\'ordre des éléments'],
      a: 1,
      e: 'wrap permet aux éléments de passer à une nouvelle ligne ou colonne quand il n\'y a pas assez d\'espace.'
    },
    {
      q: 'Qu\'est-ce que l\'unité fr dans grid-template-columns?',
      o: ['Une unité fixe comme les pixels', 'Une fraction de l\'espace restant divisée proportionnellement', 'Un pourcentage du contenu', 'Une unité line-height seulement'],
      a: 1,
      e: 'fr divise l\'espace libre proportionnellement: 1fr 2fr signifie que le deuxième est le double du premier.'
    },
    {
      q: 'Quelle propriété dans Grid détermine le nombre et la taille des colonnes?',
      o: ['grid-auto-flow', 'grid-template-rows', 'grid-template-columns', 'justify-items'],
      a: 2,
      e: 'grid-template-columns par exemple: repeat(3, 1fr) signifie trois colonnes égales.'
    },
    {
      q: 'Dans Grid, quelle propriété centre un élément verticalement dans sa cellule?',
      o: ['justify-items', 'align-items', 'justify-content', 'place-content'],
      a: 1,
      e: 'align-items travaille sur l\'axe vertical à l\'intérieur de la cellule, et place-items: center ajuste l\'horizontal et le vertical ensemble.'
    },
    {
      q: 'Que signifie grid-auto-flow: column?',
      o: ['Remplit les lignes d\'abord', 'Remplit les colonnes d\'abord puis passe à une nouvelle colonne', 'Supprime les colonnes vides', 'Rend toutes les colonnes de la même largeur'],
      a: 1,
      e: 'La valeur par défaut row remplit la ligne d\'abord; column fait que le remplissage est vertical d\'abord.'
    },
    {
      q: 'Quelle est la différence fondamentale entre justify-content et justify-items?',
      o: ['Pas de différence entre eux', 'Le premier distribue tout le conteneur sur l\'axe, le deuxième aligne l\'élément dans sa cellule', 'Le premier est pour le texte seulement', 'Le deuxième fonctionne seulement dans Flexbox'],
      a: 1,
      e: 'justify-content distribue l\'espace autour des éléments comme un groupe, tandis que justify-items aligne chaque élément dans l\'espace de sa cellule dans Grid.'
    },
    {
      q: 'Quelle combinaison place un seul élément exactement au milieu du conteneur en utilisant Flexbox?',
      o: ['justify-content: center seulement', 'align-items: center seulement', 'justify-content: center avec align-items: center', 'flex-direction: center'],
      a: 2,
      e: 'Nous avons besoin des deux axes ensemble: justify-content pour l\'horizontal et align-items pour le vertical.'
    }, 
    {
      share_result: 'Partager le résultat',
  share_text: "J'ai obtenu",
  copied_to_clipboard: 'Lien copié! Vous pouvez le coller n\'importe où.',
    }
  ], 
  // ============ Pied de page ============
  footer_home: 'Accueil',
  footer_privacy: 'Politique de confidentialité',
  footer_terms: 'Conditions générales',
  footer_copyright: '© 2026 Référence Flexbox & Grid. Tous droits réservés.',
  back_to_home: '← Retour à l\'accueil',
  
  // ============ Politique de confidentialité ============
  privacy_title: 'Politique de confidentialité',
  privacy_h1: 'Politique de confidentialité',
  privacy_updated: 'Dernière mise à jour: 7 novembre 2026',
  privacy_s1_title: '1. Introduction',
  privacy_s1_p1: 'Bienvenue dans l\'application "Référence Flexbox & Grid". Nous respectons votre vie privée et nous nous engageons à la protéger. Cette politique de confidentialité explique comment nous traitons vos données lorsque vous utilisez notre application.',
  privacy_s1_p2: 'Cette application est purement éducative, ne collecte aucune donnée personnelle sensible, ne nécessite pas d\'inscription de compte et n\'envoie aucune donnée à des serveurs externes.',
  privacy_s2_title: '2. Données que nous collectons',
  privacy_s2_p1: 'L\'application utilise <strong>le stockage local (localStorage)</strong> dans votre navigateur uniquement pour enregistrer:',
  privacy_s2_li1: 'Votre langue préférée',
  privacy_s2_li2: 'Préférence de thème (sombre / clair)',
  privacy_s2_li3: 'Votre progression dans les exercices (exercices terminés)',
  privacy_s2_p2: '<strong>Toutes ces données sont stockées localement sur votre appareil uniquement</strong>, et ne sont envoyées à aucun serveur externe, ni accessibles par nous ou par un tiers.',
  privacy_s3_title: '3. Cookies',
  privacy_s3_p1: 'L\'application <strong>n\'utilise pas de cookies</strong> d\'aucune manière. Toutes les préférences sont enregistrées via localStorage uniquement.',
  privacy_s4_title: '4. Services tiers',
  privacy_s4_p1: 'L\'application n\'utilise pas:',
  privacy_s4_li1: 'Services d\'analyse (tels que Google Analytics)',
  privacy_s4_li2: 'Publicités',
  privacy_s4_li3: 'Outils de suivi',
  privacy_s4_li4: 'Réseaux sociaux',
  privacy_s4_li5: 'Aucun serveur externe pour la collecte de données',
  privacy_s5_title: '5. Fonctionnement hors ligne',
  privacy_s5_p1: 'L\'application est conçue pour fonctionner entièrement hors ligne via la technologie Service Worker. Après le chargement initial, l\'application n\'a besoin d\'aucune connexion réseau.',
  privacy_s6_title: '6. Vos droits',
  privacy_s6_p1: 'Étant donné que toutes vos données sont stockées localement sur votre appareil:',
  privacy_s6_li1: 'Vous pouvez supprimer toutes les données à tout moment en effaçant les données du navigateur',
  privacy_s6_li2: 'Vous pouvez utiliser l\'application en mode navigation privée où aucune donnée ne sera enregistrée',
  privacy_s6_li3: 'Vous avez un contrôle total sur toutes vos données',
  privacy_s7_title: '7. Sécurité des données',
  privacy_s7_p1: 'Étant donné que les données ne quittent pas votre appareil, leur sécurité dépend de la sécurité de votre navigateur et de votre appareil. Nous recommandons d\'utiliser un navigateur à jour et de protéger votre appareil avec un mot de passe.',
  privacy_s8_title: '8. Droits des enfants',
  privacy_s8_p1: 'L\'application est destinée à des fins éducatives et ne collecte aucune donnée d\'aucun utilisateur, y compris les enfants de moins de 13 ans. L\'application est totalement sûre pour une utilisation par tous les âges.',
  privacy_s9_title: '9. Modifications de la politique de confidentialité',
  privacy_s9_p1: 'Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Toute modification sera annoncée en mettant à jour la date "Dernière mise à jour" en haut de cette page.',
  privacy_s10_title: '10. Nous contacter',
  privacy_s10_p1: 'Si vous avez des questions sur cette politique de confidentialité, vous pouvez nous contacter via:',
  privacy_email_label: 'Email:',
  
  // ============ Conditions générales ============
  terms_title: 'Conditions générales',
  terms_h1: 'Conditions générales',
  terms_updated: 'Dernière mise à jour: 7 novembre 2026',
  terms_s1_title: '1. Acceptation des conditions',
  terms_s1_p1: 'En utilisant l\'application "Référence Flexbox & Grid", vous acceptez de respecter ces conditions générales. Si vous n\'acceptez pas l\'une de ces conditions, veuillez ne pas utiliser l\'application.',
  terms_s2_title: '2. Description du service',
  terms_s2_p1: 'L\'application est une plateforme éducative gratuite visant à aider les développeurs et les étudiants à apprendre les systèmes de mise en page CSS (Flexbox et CSS Grid) à travers:',
  terms_s2_li1: 'Leçons théoriques complètes',
  terms_s2_li2: 'Exercices pratiques interactifs',
  terms_s2_li3: 'Simulateur gratuit pour expérimenter les propriétés',
  terms_s2_li4: 'Quiz pour mesurer la compréhension',
  terms_s3_title: '3. Propriété intellectuelle',
  terms_s3_p1: 'Tout le contenu de l\'application (textes, leçons, exercices, code, design) est la propriété privée du propriétaire de l\'application et est protégé par les lois sur le droit d\'auteur et la propriété intellectuelle.',
  terms_s3_p2: 'L\'utilisation personnelle et éducative est autorisée. Il est interdit de:',
  terms_s3_li1: 'Copier ou republier le contenu sans autorisation',
  terms_s3_li2: 'Utiliser le contenu à des fins commerciales',
  terms_s3_li3: 'Modifier et redistribuer le contenu',
  terms_s4_title: '4. Utilisation acceptable',
  terms_s4_p1: 'Vous êtes autorisé à utiliser l\'application aux fins suivantes:',
  terms_s4_li1: 'Apprentissage personnel',
  terms_s4_li2: 'Utilisation éducative en classe',
  terms_s4_li3: 'Référence rapide pendant le travail',
  terms_s5_title: '5. Clause de non-responsabilité',
  terms_s5_p1: 'L\'application est fournie "telle quelle" sans garanties d\'aucune sorte, expresses ou implicites.',
  terms_s5_p2: 'Nous ne garantissons pas:',
  terms_s5_li1: 'L\'exactitude à 100% des informations',
  terms_s5_li2: 'La continuité du service sans interruption',
  terms_s5_li3: 'L\'adéquation du contenu à vos besoins spécifiques',
  terms_s5_li4: 'L\'absence de bugs logiciels',
  terms_s5_p3: 'L\'utilisateur assume l\'entière responsabilité de l\'utilisation des informations obtenues à partir de l\'application.',
  terms_s6_title: '6. Limitation de responsabilité',
  terms_s6_p1: 'Dans la mesure maximale autorisée par la loi, le propriétaire de l\'application ne sera pas responsable des dommages directs ou indirects résultant de l\'utilisation de l\'application ou de l\'incapacité à l\'utiliser.',
  terms_s7_title: '7. Liens externes',
  terms_s7_p1: 'L\'application peut contenir des liens vers des sites Web externes. Nous ne sommes pas responsables du contenu ou des politiques de confidentialité de ces sites. Nous recommandons de consulter leurs propres conditions.',
  terms_s8_title: '8. Modifications du service',
  terms_s8_p1: 'Nous nous réservons le droit de:',
  terms_s8_li1: 'Modifier ou interrompre l\'application à tout moment sans préavis',
  terms_s8_li2: 'Mettre à jour le contenu ou en supprimer des parties',
  terms_s8_li3: 'Modifier ces conditions à tout moment',
  terms_s9_title: '9. Droit applicable',
  terms_s9_p1: 'Ces conditions générales sont régies et interprétées conformément aux lois en vigueur en République Algérienne Démocratique et Populaire.',
  terms_s10_title: '10. Modifications des conditions',
  terms_s10_p1: 'Nous pouvons mettre à jour ces conditions de temps en temps. Toute modification sera annoncée en mettant à jour la date "Dernière mise à jour" en haut de cette page. Votre utilisation continue de l\'application après l\'apport de modifications signifie votre acceptation des nouvelles conditions.',
  terms_s11_title: '11. Nous contacter',
  terms_s11_p1: 'Si vous avez des questions sur ces conditions générales, vous pouvez nous contacter via:',
  terms_email_label: 'Email:'
};