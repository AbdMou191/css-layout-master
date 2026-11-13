window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS['es'] = {
  // ============ Textos Comunes ============
  app_title: 'Referencia de Flexbox y Grid — Lecciones y Ejercicios',
  mode_theory: 'Lecciones Teóricas',
  mode_practice: 'Lecciones Prácticas',
  mode_flex: 'Simulador Flexbox',
  mode_grid: 'Simulador Grid',
  mode_compare: 'Comparar',
  mode_quiz: 'Ponte a Prueba',
  toggle_lessons: 'Mostrar/Ocultar Lista de Lecciones',
  welcome_title: '🎯 Objetivo de la App',
  welcome_desc: 'Esta aplicación está diseñada para guiarte paso a paso a dominar los sistemas de diseño CSS (<strong>Flexbox</strong> y <strong>CSS Grid</strong>).',
  welcome_hint: '¡Elige cualquier lección de la barra lateral para ocultarla con una animación suave y comenzar la lección de inmediato!',
  goal_title: 'Objetivo',
  your_try: 'Tu Intento',
  btn_check: 'Comprobar Solución',
  btn_hint: 'Pista',
  btn_next: 'Siguiente',
  msg_success: '¡Excelente! Solución correcta. Pasa al siguiente ejercicio.',
  msg_error: 'Aún no es la respuesta correcta — prueba otras opciones o pide una pista.',
  msg_hint: 'Pista: ',
  live_demo: 'Demo en Vivo: Prueba los valores tú mismo',
  flex_container: 'Flexbox',
  grid_container: 'Grid',
  container_label: 'Contenedor',
  items_count: 'Número de elementos: ',
  gap_label: 'gap: ',
  flex_props: 'Propiedades de Flexbox',
  grid_props: 'Propiedades de Grid',
  question: 'Pregunta ',
  of: ' de ',
  correct_answers: 'Respuestas correctas: ',
  show_result: 'Mostrar Resultado',
  restart_quiz: 'Reiniciar Cuestionario',
  excellent: '¡Excelente! Has dominado los fundamentos de Flexbox y Grid.',
  good: 'Bien — repasa las lecciones teóricas y mejorarás.',
  need_practice: 'No te preocupes — comienza con las lecciones teóricas y luego prueba los ejercicios.',
  
  // ============ Nombres de Propiedades ============
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
  
  // ============ Valores de Propiedades ============
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
  
  // ============ Lecciones Teóricas ============
  lessons: [
    // Flexbox
    {
      grp: 'Flexbox',
      id: 'f0',
      t: '¿Qué es Flexbox?',
      b: '<p>Flexbox es un modelo de diseño CSS basado en <b>un solo eje</b> (horizontal o vertical) para distribuir elementos dentro de un contenedor, con la capacidad de que los elementos crezcan y se contraigan automáticamente según el espacio disponible.</p><p>La idea básica: el contenedor se convierte en <code>display: flex</code>, y todos sus hijos directos se convierten en "flex items" distribuidos a lo largo del <b>eje principal</b> y alineados en el <b>eje transversal</b>.</p><div class="note">¿Cuándo usarlo? Barra de navegación, grupo de botones, centrar un solo elemento, distribuir elementos en una fila o columna.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f1',
      t: 'flex-direction — Dirección',
      b: '<p>Determina la dirección del eje principal, es decir, dónde "empieza" y "termina" la distribución:</p><table class="vals"><tr><th>Valor</th><th>Significado</th></tr><tr><td><code>row</code></td><td>Horizontal de izquierda a derecha (por defecto)</td></tr><tr><td><code>row-reverse</code></td><td>Horizontal invertido, comienza por la derecha</td></tr><tr><td><code>column</code></td><td>Vertical de arriba hacia abajo</td></tr><tr><td><code>column-reverse</code></td><td>Vertical invertido, comienza por abajo</td></tr></table><p>Prueba los valores en la demo en vivo a continuación y observa cómo cambia la alineación por defecto de los elementos.</p><div class="note">Nota: en modo row, justify-content es horizontal y align-items es vertical, y se invierte completamente en modo column.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f2',
      t: 'justify-content — Eje Principal',
      b: '<p>Distribuye los elementos y el espacio vacío <b>a lo largo del eje principal</b>:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>flex-start</code></td><td>Agrupa los elementos al inicio del eje (por defecto)</td></tr><tr><td><code>center</code></td><td>Centra los elementos</td></tr><tr><td><code>flex-end</code></td><td>Agrupa los elementos al final del eje</td></tr><tr><td><code>space-between</code></td><td>Espacio igual <b>entre</b> elementos únicamente, sin espacio en los bordes</td></tr><tr><td><code>space-around</code></td><td>Medio espacio en los bordes y espacio completo entre elementos</td></tr><tr><td><code>space-evenly</code></td><td>Todos los espacios son exactamente iguales: bordes y entre elementos</td></tr></table><div class="note">Compruébalo tú mismo: space-between no deja espacio en los bordes, mientras que space-evenly deja espacio igual en todas partes.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f3',
      t: 'align-items — Eje Transversal',
      b: '<p>Alinea los elementos <b>en el eje transversal</b> (vertical en modo row). Observa la diferencia: justify-content distribuye en el eje principal, y este en el eje opuesto:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>stretch</code></td><td>Estira los elementos para llenar toda la altura (por defecto)</td></tr><tr><td><code>flex-start</code></td><td>Parte superior del contenedor</td></tr><tr><td><code>center</code></td><td>Centrado vertical</td></tr><tr><td><code>flex-end</code></td><td>Parte inferior del contenedor</td></tr><tr><td><code>baseline</code></td><td>Alinea la línea base del texto entre elementos</td></tr></table><div class="note">Centrado perfecto en el medio del contenedor = justify-content: center + align-items: center.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f4',
      t: 'flex-wrap — Salto de Línea',
      b: '<p>¿Qué pasa cuando los elementos no caben en una línea? <code>flex-wrap</code> lo determina:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>nowrap</code></td><td>Se quedan en una línea y se encogen aunque no quepan (por defecto)</td></tr><tr><td><code>wrap</code></td><td>Los elementos extra pasan a una nueva línea</td></tr><tr><td><code>wrap-reverse</code></td><td>Envuelve con dirección de línea invertida</td></tr></table><p>Prueba wrap en la demo con 6 elementos — recuerda aumentar el número de elementos o hacerlos más grandes para notar la diferencia.</p>'
    },
    {
      grp: 'Flexbox',
      id: 'f5',
      t: 'flex-grow, flex-shrink y flex-basis',
      b: '<p>Estas propiedades controlan cómo crecen o se encogen los flex items:</p><table class="vals"><tr><th>Propiedad</th><th>Función</th><th>Valor por Defecto</th></tr><tr><td><code>flex-grow</code></td><td>Proporción de crecimiento del elemento para llenar el espacio vacío</td><td>0</td></tr><tr><td><code>flex-shrink</code></td><td>Proporción de reducción del elemento cuando el espacio es escaso</td><td>1</td></tr><tr><td><code>flex-basis</code></td><td>Tamaño inicial del elemento antes de crecer/encogerse</td><td>auto</td></tr></table><p>La forma abreviada <code>flex: 1</code> significa <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.</p><div class="note">flex-basis es como width/height pero funciona solo en el eje principal.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f6',
      t: 'order — Orden de Elementos',
      b: '<p>Te permite cambiar el orden visual de los elementos sin cambiar el HTML:</p><pre>.item {\n  order: 2;   /* Valor más alto = aparece después */\n}</pre><p>El valor por defecto es <code>0</code>. Los elementos con valores negativos aparecen primero, y los positivos al final.</p><div class="note">Usa order con cuidado — no cambies el orden lógico de lectura del contenido.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f7',
      t: 'align-self — Alineación Individual',
      b: '<p>Te permite alinear un solo elemento de forma distinta al resto:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>auto</code></td><td>Sigue el align-items del contenedor (por defecto)</td></tr><tr><td><code>flex-start</code></td><td>Parte superior del contenedor</td></tr><tr><td><code>center</code></td><td>Centrado vertical</td></tr><tr><td><code>flex-end</code></td><td>Parte inferior del contenedor</td></tr><tr><td><code>stretch</code></td><td>Estira el elemento para llenar la altura</td></tr></table><p>Ejemplo: un elemento abajo mientras el resto está arriba:</p><pre>.last-item {\n  align-self: flex-end;\n}</pre>'
    },
    {
      grp: 'Flexbox',
      id: 'f8',
      t: 'align-content — Alineación Multilínea',
      b: '<p>Controla la alineación de <b>las líneas en sí</b> (no los elementos) cuando hay salto de línea:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>stretch</code></td><td>Estira las líneas para llenar el espacio (por defecto)</td></tr><tr><td><code>flex-start</code></td><td>Agrupa las líneas arriba</td></tr><tr><td><code>center</code></td><td>Centra las líneas verticalmente</td></tr><tr><td><code>flex-end</code></td><td>Agrupa las líneas abajo</td></tr><tr><td><code>space-between</code></td><td>Espacio igual entre líneas</td></tr></table><div class="note">align-content solo funciona con flex-wrap: wrap y más de 1 fila.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f9',
      t: 'gap — Espaciado Entre Elementos',
      b: '<p><code>gap</code> establece el espaciado entre elementos <b>sin márgenes externos</b> — la forma más limpia de añadir espaciado tanto en Flexbox como en Grid:</p><pre>.container {\n  gap: 16px;           /* Filas y columnas juntas */\n  row-gap: 8px;        /* Solo filas */\n  column-gap: 16px;    /* Solo columnas */\n}</pre><div class="note">En navegadores modernos, gap funciona tanto con Flexbox como con Grid.</div>'
    },
    
    // Grid
    {
      grp: 'Grid',
      id: 'g0',
      t: '¿Qué es Grid?',
      b: '<p>Grid es un modelo de diseño <b>bidimensional</b>: filas y columnas juntas al mismo tiempo, a diferencia de Flexbox que trabaja con un solo eje.</p><p>El contenedor se define con <b><code>display: grid</code></b>, luego se divide en una cuadrícula de celdas mediante <code>grid-template-columns</code> y <code>grid-template-rows</code>, y los elementos se colocan en las celdas automática o manualmente.</p><div class="note">¿Cuándo usarlo? Diseño de página completa, galería de imágenes, tarjetas de productos — cualquier cosa con estructura de filas × columnas.</div>'
    },
    {
      grp: 'Grid',
      id: 'g1',
      t: 'grid-template-columns — Columnas',
      b: '<p>Determina el número y tamaño de las columnas. Las unidades más importantes:</p><table class="vals"><tr><th>Unidad</th><th>Significado</th></tr><tr><td><code>px</code></td><td>Tamaño fijo que no cambia</td></tr><tr><td><code>%</code></td><td>Porcentaje del ancho del contenedor</td></tr><tr><td><code>fr</code></td><td>"Fracción" del espacio restante — divide el espacio proporcionalmente</td></tr><tr><td><code>auto</code></td><td>Calculado a partir del contenido del elemento</td></tr></table><p>Ejemplos comunes:</p><pre>grid-template-columns: 1fr 1fr 1fr;        /* 3 columnas iguales */\ngrid-template-columns: repeat(3, 1fr);     /* Lo mismo abreviado */\ngrid-template-columns: 200px 1fr;          /* Columna fija + flexible */\ngrid-template-columns: 1fr 2fr 1fr;        /* La del medio el doble que los lados */</pre>'
    },
    {
      grp: 'Grid',
      id: 'g2',
      t: 'grid-template-rows y minmax',
      b: '<p>Determina las alturas de las filas con la misma lógica que las columnas. Ejemplo: <code>grid-template-rows: 80px auto 1fr</code> significa una fila fija, una que sigue su contenido, y una tercera que llena el resto.</p><p>La función muy útil <code>minmax(min, max)</code>:</p><pre>grid-template-rows: repeat(3, minmax(44px, auto));</pre><p>Esto hace que cada fila tenga <b>al menos 44px</b> pero crezca si el contenido necesita más espacio.</p>'
    },
    {
      grp: 'Grid',
      id: 'g3',
      t: 'gap — Espaciado',
      b: '<p>Como en Flexbox, <code>gap</code> establece el espaciado entre filas y columnas sin márgenes:</p><pre>gap: 12px;                 /* Filas y columnas juntas */\nrow-gap: 8px;              /* Solo filas */\ncolumn-gap: 16px;          /* Solo columnas */</pre><div class="note">Antes de que existiera gap, los desarrolladores usaban márgenes y padding con trucos complejos — ya no es necesario.</div>'
    },
    {
      grp: 'Grid',
      id: 'g4',
      t: 'justify-items y align-items',
      b: '<p>Estas dos propiedades alinean <b>cada elemento dentro de su celda</b> (no toda la cuadrícula):</p><table class="vals"><tr><th>Propiedad</th><th>Eje</th></tr><tr><td><code>justify-items</code></td><td>Horizontal dentro de la celda: start / center / end / stretch</td></tr><tr><td><code>align-items</code></td><td>Vertical dentro de la celda: start / center / end / stretch</td></tr></table><p>La forma abreviada <code>place-items: center center;</code> ajusta ambas a la vez — la forma más corta de centrar un elemento dentro de su celda.</p><div class="note">Compara: en Flexbox no existe justify-items, porque los elementos se mueven como grupo en el eje principal mediante justify-content.</div>'
    },
    {
      grp: 'Grid',
      id: 'g5',
      t: 'grid-auto-flow — Orden de Relleno',
      b: '<p>Determina cómo los elementos llenan las celdas disponibles:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>row</code></td><td>Llena fila por fila de izquierda a derecha (por defecto)</td></tr><tr><td><code>column</code></td><td>Llena columna por columna — el siguiente elemento va abajo y no al lado</td></tr><tr><td><code>dense</code></td><td>Llena los espacios vacíos primero antes de nuevas celdas</td></tr></table><p>Prueba column en la demo: observa cómo el orden se vuelve vertical aunque el número de columnas se mantenga igual.</p>'
    },
    {
      grp: 'Grid',
      id: 'g6',
      t: 'grid-template-areas — Diseño con Áreas',
      b: '<p>Te permite nombrar áreas de la cuadrícula y distribuir elementos en ellas con nombres claros:</p><pre>.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }</pre><p>El punto <code>.</code> significa un área vacía.</p><div class="note">Este método es excelente para diseños de página completa porque hace el código legible como un mapa.</div>'
    },
    {
      grp: 'Grid',
      id: 'g7',
      t: 'grid-column y grid-row — Fusión de Celdas',
      b: '<p>Te permite fusionar varias celdas en un solo elemento:</p><pre>.item {\n  grid-column: 1 / 3;    /* De la columna 1 a la 3 (fusiona dos columnas) */\n  grid-row: 2 / 4;       /* De la fila 2 a la 4 (fusiona dos filas) */\n}</pre><p>Puedes usar la palabra clave <code>span</code>:</p><pre>.item {\n  grid-column: span 2;   /* Abarca 2 columnas */\n  grid-row: span 3;      /* Abarca 3 filas */\n}</pre>'
    },
    {
      grp: 'Grid',
      id: 'g8',
      t: 'auto-fit y auto-fill — Columnas Dinámicas',
      b: '<p>Te permite crear columnas que se adaptan automáticamente al ancho del contenedor:</p><pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre><p>La diferencia entre auto-fit y auto-fill:</p><table class="vals"><tr><th>Valor</th><th>Comportamiento</th></tr><tr><td><code>auto-fill</code></td><td>Crea columnas vacías si los elementos no son suficientes para llenarlas</td></tr><tr><td><code>auto-fit</code></td><td>Colapsa las columnas vacías y expande las existentes</td></tr></table><div class="note">auto-fit es la mejor opción para galerías de imágenes y tarjetas responsivas.</div>'
    },
    {
      grp: 'Grid',
      id: 'g9',
      t: '¿Flexbox o Grid? Cuándo Usar Cada Uno',
      b: '<p><b>Usa Flexbox</b> cuando el diseño es <b>unidimensional</b>: elementos en una fila o columna, y pueden envolverse según el espacio. Ejemplos: barra de navegación, etiquetas, grupo de botones, centrar un elemento.</p><p><b>Usa Grid</b> cuando el diseño es <b>bidimensional</b> con dos ejes predefinidos: página completa con áreas, galería de imágenes, tabla de tarjetas. Ejemplo clásico para diseño de página:</p><pre>.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  gap: 12px;\n}</pre><p>Y a menudo trabajan juntos: Grid para el marco de toda la página, y Flexbox dentro de cada área para distribuir su contenido.</p>'
    }
  ],
  
  // ============ Ejercicios Prácticos ============
  challenges: [
    {
      type: 'flex',
      t: 'Ejercicio 1',
      title: 'Centrado Perfecto',
      items: 3,
      desc: 'Coloca los tres elementos <b>exactamente en el centro del contenedor</b> — horizontal y verticalmente.',
      hint: 'Necesitas dos propiedades juntas: una para el eje principal y otra para el eje transversal, ambas con el valor center.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'flex',
      t: 'Ejercicio 2',
      title: 'Distribución Espaciada',
      items: 5,
      desc: 'Distribuye los cinco elementos de modo que <b>los espacios sean iguales en todas partes</b> — entre elementos y entre ellos y los bordes del contenedor.',
      hint: 'Un valor de justify-content hace que todos los espacios sean exactamente iguales.',
      init: {direction:'row',justify:'flex-start',align:'center',wrap:'nowrap',gap:8},
      target: {justify:'space-evenly'}
    },
    {
      type: 'flex',
      t: 'Ejercicio 3',
      title: 'Columna Invertida',
      items: 4,
      desc: 'Haz que los elementos se dispongan en una <b>columna que empieza por abajo</b> (primer elemento abajo, último arriba).',
      hint: 'La propiedad de dirección tiene un valor que significa "columna invertida".',
      init: {direction:'row',justify:'center',align:'center',wrap:'nowrap',gap:8},
      target: {direction:'column-reverse'}
    },
    {
      type: 'flex',
      t: 'Ejercicio 4',
      title: 'Dos Filas de Elementos',
      items: 8,
      desc: 'Usando ocho elementos, haz que <b>se envuelvan en dos filas</b> en lugar de encogerse en una sola.',
      hint: 'La propiedad wrap tiene un valor que permite pasar a una nueva línea cuando se acaba el espacio.',
      init: {direction:'row',justify:'flex-start',align:'stretch',wrap:'nowrap',gap:8},
      target: {wrap:'wrap'}
    },
    {
      type: 'flex',
      t: 'Ejercicio 5',
      title: 'Abajo a la Izquierda',
      items: 3,
      desc: 'Agrupa los elementos en la <b>esquina inferior izquierda</b> del contenedor (final de ambos ejes juntos).',
      hint: 'flex-end para el eje principal, y flex-end para el eje transversal.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'flex-end',align:'flex-end'}
    },
    {
      type: 'grid',
      t: 'Ejercicio 6',
      title: 'Tres Columnas Iguales',
      items: 6,
      desc: 'Convierte la cuadrícula a <b>tres columnas de igual tamaño</b> (asegúrate de que tenga seis elementos).',
      hint: 'grid-template-columns con la función repeat y la unidad fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'repeat(3, 1fr)'}
    },
    {
      type: 'grid',
      t: 'Ejercicio 7',
      title: 'Columna Destacada',
      items: 6,
      desc: 'Haz que la <b>columna central tenga el doble de ancho</b> que las dos columnas laterales.',
      hint: 'La unidad fr divide el espacio proporcionalmente: 1fr 2fr 1fr.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'1fr 2fr 1fr'}
    },
    {
      type: 'grid',
      t: 'Ejercicio 8',
      title: 'Centrado Dentro de las Celdas',
      items: 6,
      desc: 'Haz que cada elemento esté <b>en el centro de su celda</b> — horizontal y verticalmente.',
      hint: 'Dos propiedades: justify-items para horizontal y align-items para vertical, ambas en center.',
      init: {cols:'repeat(3, 1fr)',justify:'start',align:'start',flow:'row',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'grid',
      t: 'Ejercicio 9',
      title: 'Relleno Vertical',
      items: 6,
      desc: 'Cambia el método de relleno para que <b>la primera columna se llene completamente antes de pasar a la segunda</b>.',
      hint: 'grid-auto-flow con un valor que significa "empezar por columnas".',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {flow:'column'}
    },
    {
      type: 'grid',
      t: 'Ejercicio 10',
      title: 'Columna Fija y Flexible',
      items: 4,
      desc: 'Haz que la <b>primera columna tenga 150px de ancho fijo</b>, y la segunda columna llene el resto del espacio.',
      hint: 'Combina una unidad fija con fr: 150px 1fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'150px 1fr'}
    }
  ],
  
  // ============ Cuestionario ============
  quiz: [
    {
      q: '¿Qué propiedad determina la dirección de distribución de los elementos dentro de un contenedor Flexbox?',
      o: ['justify-content', 'flex-direction', 'align-items', 'flex-wrap'],
      a: 1,
      e: 'flex-direction controla el eje principal: row es horizontal, column es vertical, y con reverse la dirección se invierte.'
    },
    {
      q: 'Para centrar elementos horizontalmente dentro de un contenedor flex con dirección row usamos:',
      o: ['align-items: center', 'justify-content: center', 'flex-wrap: wrap', 'gap: auto'],
      a: 1,
      e: 'justify-content trabaja en el eje principal (horizontal en row), y center centra los elementos en él.'
    },
    {
      q: '¿Qué valor de justify-content distribuye el espacio vacío por igual entre elementos y bordes?',
      o: ['space-between', 'space-around', 'space-evenly', 'flex-start'],
      a: 2,
      e: 'space-evenly hace todos los espacios exactamente iguales, mientras que space-between no deja espacio en los bordes.'
    },
    {
      q: '¿Qué hace el valor wrap en la propiedad flex-wrap?',
      o: ['Agranda los elementos para llenar la fila', 'Mueve los elementos extra a una nueva línea', 'Oculta los elementos extra', 'Invierte el orden de los elementos'],
      a: 1,
      e: 'wrap permite que los elementos pasen a una nueva línea o columna cuando no hay suficiente espacio.'
    },
    {
      q: '¿Qué es la unidad fr en grid-template-columns?',
      o: ['Una unidad fija como los píxeles', 'Una fracción del espacio restante dividido proporcionalmente', 'Un porcentaje del contenido', 'Una unidad de altura de línea solamente'],
      a: 1,
      e: 'fr divide el espacio libre proporcionalmente: 1fr 2fr significa que la segunda es el doble de la primera.'
    },
    {
      q: '¿Qué propiedad en Grid determina el número y tamaño de las columnas?',
      o: ['grid-auto-flow', 'grid-template-rows', 'grid-template-columns', 'justify-items'],
      a: 2,
      e: 'grid-template-columns, por ejemplo: repeat(3, 1fr) significa tres columnas iguales.'
    },
    {
      q: 'En Grid, ¿qué propiedad centra un elemento verticalmente dentro de su celda?',
      o: ['justify-items', 'align-items', 'justify-content', 'place-content'],
      a: 1,
      e: 'align-items trabaja en el eje vertical dentro de la celda, y place-items: center ajusta tanto horizontal como vertical a la vez.'
    },
    {
      q: '¿Qué significa grid-auto-flow: column?',
      o: ['Llena las filas primero', 'Llena las columnas primero y luego pasa a una nueva columna', 'Elimina las columnas vacías', 'Hace todas las columnas del mismo ancho'],
      a: 1,
      e: 'El valor por defecto row llena la fila primero; column hace que el relleno sea vertical primero.'
    },
    {
      q: '¿Cuál es la diferencia básica entre justify-content y justify-items?',
      o: ['No hay diferencia entre ellas', 'La primera distribuye todo el contenedor en el eje, la segunda alinea el elemento dentro de su celda', 'La primera es solo para texto', 'La segunda funciona solo en Flexbox'],
      a: 1,
      e: 'justify-content distribuye el espacio alrededor de los elementos como grupo, mientras que justify-items alinea cada elemento dentro del espacio de su celda en Grid.'
    },
    {
      q: '¿Qué combinación coloca un solo elemento exactamente en el centro del contenedor usando Flexbox?',
      o: ['Solo justify-content: center', 'Solo align-items: center', 'justify-content: center con align-items: center', 'flex-direction: center'],
      a: 2,
      e: 'Necesitamos ambos ejes juntos: justify-content para horizontal y align-items para vertical.'
    }
  ],
  
  // ============ Pie de Página ============
  footer_home: 'Inicio',
  footer_privacy: 'Política de Privacidad',
  footer_terms: 'Términos y Condiciones',
  footer_copyright: '© 2026 Referencia de Flexbox y Grid. Todos los derechos reservados.',
  back_to_home: '← Volver al Inicio',
  
  // ============ Política de Privacidad ============
  privacy_title: 'Política de Privacidad',
  privacy_h1: 'Política de Privacidad',
  privacy_updated: 'Última actualización: 7 de noviembre de 2026',
  privacy_s1_title: '1. Introducción',
  privacy_s1_p1: 'Bienvenido a la aplicación "Referencia de Flexbox y Grid". Respetamos tu privacidad y estamos comprometidos a protegerla. Esta Política de Privacidad explica cómo manejamos tus datos cuando usas nuestra aplicación.',
  privacy_s1_p2: 'Esta aplicación es puramente educativa, no recopila ningún dato personal sensible, no requiere registro de cuenta, y no envía ningún dato a servidores externos.',
  privacy_s2_title: '2. Datos que Recopilamos',
  privacy_s2_p1: 'La aplicación usa <strong>almacenamiento local (localStorage)</strong> en tu navegador únicamente para guardar:',
  privacy_s2_li1: 'Tu idioma preferido',
  privacy_s2_li2: 'Preferencia de tema (oscuro / claro)',
  privacy_s2_li3: 'Tu progreso en los ejercicios (ejercicios completados)',
  privacy_s2_p2: '<strong>Todos estos datos se almacenan localmente solo en tu dispositivo</strong>, y no se envían a ningún servidor externo, ni nosotros ni ningún tercero podemos acceder a ellos.',
  privacy_s3_title: '3. Cookies',
  privacy_s3_p1: 'La aplicación <strong>no usa cookies</strong> de ninguna manera. Todas las preferencias se guardan únicamente a través de localStorage.',
  privacy_s4_title: '4. Servicios de Terceros',
  privacy_s4_p1: 'La aplicación no usa:',
  privacy_s4_li1: 'Servicios de analítica (como Google Analytics)',
  privacy_s4_li2: 'Anuncios',
  privacy_s4_li3: 'Herramientas de rastreo',
  privacy_s4_li4: 'Redes sociales',
  privacy_s4_li5: 'Ningún servidor externo para recopilación de datos',
  privacy_s5_title: '5. Funcionamiento Sin Conexión',
  privacy_s5_p1: 'La aplicación está diseñada para funcionar completamente sin conexión mediante la tecnología Service Worker. Después de la carga inicial, la aplicación no necesita ninguna conexión de red.',
  privacy_s6_title: '6. Tus Derechos',
  privacy_s6_p1: 'Como todos tus datos se almacenan localmente en tu dispositivo:',
  privacy_s6_li1: 'Puedes eliminar todos los datos en cualquier momento borrando los datos del navegador',
  privacy_s6_li2: 'Puedes usar la aplicación en modo Incógnito donde no se guardará ningún dato',
  privacy_s6_li3: 'Tienes control total sobre todos tus datos',
  privacy_s7_title: '7. Seguridad de los Datos',
  privacy_s7_p1: 'Como los datos no salen de tu dispositivo, su seguridad depende de la seguridad de tu navegador y dispositivo. Recomendamos usar un navegador actualizado y proteger tu dispositivo con una contraseña.',
  privacy_s8_title: '8. Derechos de los Niños',
  privacy_s8_p1: 'La aplicación está destinada a fines educativos y no recopila datos de ningún usuario, incluidos los niños menores de 13 años. La aplicación es completamente segura para su uso por todas las edades.',
  privacy_s9_title: '9. Cambios en la Política de Privacidad',
  privacy_s9_p1: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se anunciará actualizando la fecha de "Última actualización" en la parte superior de esta página.',
  privacy_s10_title: '10. Contáctanos',
  privacy_s10_p1: 'Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de:',
  privacy_email_label: 'Correo electrónico:',
  
  // ============ Términos y Condiciones ============
  terms_title: 'Términos y Condiciones',
  terms_h1: 'Términos y Condiciones',
  terms_updated: 'Última actualización: 7 de noviembre de 2026',
  terms_s1_title: '1. Aceptación de los Términos',
  terms_s1_p1: 'Al usar la aplicación "Referencia de Flexbox y Grid", aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no uses la aplicación.',
  terms_s2_title: '2. Descripción del Servicio',
  terms_s2_p1: 'La aplicación es una plataforma educativa gratuita destinada a ayudar a desarrolladores y estudiantes a aprender los sistemas de diseño CSS (Flexbox y CSS Grid) a través de:',
  terms_s2_li1: 'Lecciones teóricas completas',
  terms_s2_li2: 'Ejercicios prácticos interactivos',
  terms_s2_li3: 'Simulador gratuito para experimentar con propiedades',
  terms_s2_li4: 'Cuestionarios para medir la comprensión',
  terms_s3_title: '3. Propiedad Intelectual',
  terms_s3_p1: 'Todo el contenido de la aplicación (textos, lecciones, ejercicios, código, diseño) es propiedad privada del propietario de la aplicación y está protegido por las leyes de derechos de autor y propiedad intelectual.',
  terms_s3_p2: 'Se permite el uso personal y educativo. Está prohibido:',
  terms_s3_li1: 'Copiar o republicar el contenido sin permiso',
  terms_s3_li2: 'Usar el contenido con fines comerciales',
  terms_s3_li3: 'Modificar y redistribuir el contenido',
  terms_s4_title: '4. Uso Aceptable',
  terms_s4_p1: 'Se te permite usar la aplicación para los siguientes fines:',
  terms_s4_li1: 'Aprendizaje personal',
  terms_s4_li2: 'Uso educativo en aulas',
  terms_s4_li3: 'Consulta rápida durante el trabajo',
  terms_s5_title: '5. Descargo de Responsabilidad',
  terms_s5_p1: 'La aplicación se proporciona "Tal Cual" sin ninguna garantía de ningún tipo, expresa o implícita.',
  terms_s5_p2: 'No garantizamos:',
  terms_s5_li1: 'La exactitud del 100% de la información',
  terms_s5_li2: 'Servicio continuo sin interrupciones',
  terms_s5_li3: 'La idoneidad del contenido para tus necesidades específicas',
  terms_s5_li4: 'Estar libre de errores de software',
  terms_s5_p3: 'El usuario asume toda la responsabilidad por el uso de la información obtenida de la aplicación.',
  terms_s6_title: '6. Limitación de Responsabilidad',
  terms_s6_p1: 'En la máxima medida permitida por la ley, el propietario de la aplicación no será responsable de ningún daño directo o indirecto resultante del uso de la aplicación o de la imposibilidad de usarla.',
  terms_s7_title: '7. Enlaces Externos',
  terms_s7_p1: 'La aplicación puede contener enlaces a sitios web externos. No somos responsables del contenido o las políticas de privacidad de esos sitios. Recomendamos revisar sus propios términos.',
  terms_s8_title: '8. Modificaciones del Servicio',
  terms_s8_p1: 'Nos reservamos el derecho a:',
  terms_s8_li1: 'Modificar o discontinuar la aplicación en cualquier momento sin previo aviso',
  terms_s8_li2: 'Actualizar el contenido o eliminar partes de él',
  terms_s8_li3: 'Cambiar estos términos en cualquier momento',
  terms_s9_title: '9. Ley Aplicable',
  terms_s9_p1: 'Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de la República Argelina Democrática y Popular.',
  terms_s10_title: '10. Cambios en los Términos',
  terms_s10_p1: 'Podemos actualizar estos términos de vez en cuando. Cualquier cambio se anunciará actualizando la fecha de "Última actualización" en la parte superior de esta página. Tu uso continuado de la aplicación después de realizar los cambios significa tu aceptación de los nuevos términos.',
  terms_s11_title: '11. Contáctanos',
  terms_s11_p1: 'Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos a través de:',
  terms_email_label: 'Correo electrónico:'
};