window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS['en'] = {
  // ============ Common Texts ============
  app_title: 'Flexbox & Grid Reference — Lessons & Exercises',
  mode_theory: 'Theory Lessons',
  mode_practice: 'Practice Lessons',
  mode_flex: 'Flexbox Simulator',
  mode_grid: 'Grid Simulator',
  mode_compare: 'Compare',
  mode_quiz: 'Quiz Yourself',
  toggle_lessons: 'Show/Hide Lessons List',
  welcome_title: '🎯 App Goal',
  welcome_desc: 'This app is designed to guide you step by step to master CSS layout systems (<strong>Flexbox</strong> and <strong>CSS Grid</strong>).',
  welcome_hint: 'Choose any lesson from the sidebar to hide it with a smooth animation and start the lesson immediately!',
  goal_title: 'Target Goal',
  your_try: 'Your Try',
  btn_check: 'Check Solution',
  btn_hint: 'Hint',
  btn_next: 'Next',
  msg_success: 'Great! Correct solution. Move to the next exercise.',
  msg_error: 'Not the correct answer yet — try other options or ask for a hint.',
  msg_hint: 'Hint: ',
  live_demo: 'Live Demo: Try the values yourself',
  flex_container: 'Flexbox',
  grid_container: 'Grid',
  container_label: 'Container',
  items_count: 'Number of items: ',
  gap_label: 'gap: ',
  flex_props: 'Flexbox Properties',
  grid_props: 'Grid Properties',
  question: 'Question ',
  of: ' of ',
  correct_answers: 'Correct answers: ',
  show_result: 'Show Result',
  restart_quiz: 'Restart Quiz',
  excellent: 'Excellent! You\'ve mastered the basics of Flexbox and Grid.',
  good: 'Good — review the theory lessons and you\'ll improve.',
  need_practice: 'No worries — start with the theory lessons then try the exercises.',
  
  // ============ Property Names ============
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
  
  // ============ Property Values ============
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
  
  // ============ Theory Lessons ============
  lessons: [
    // Flexbox
    {
      grp: 'Flexbox',
      id: 'f0',
      t: 'What is Flexbox?',
      b: '<p>Flexbox is a CSS layout model based on <b>one axis</b> (horizontal or vertical) to distribute elements inside a container, with the ability for elements to grow and shrink automatically based on available space.</p><p>The basic idea: the container becomes <code>display: flex</code>, and all its direct children become "flex items" distributed along the <b>main axis</b> and aligned on the <b>cross axis</b>.</p><div class="note">When to use it? Navigation bar, button group, centering a single element, distributing elements in one row or column.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f1',
      t: 'flex-direction — Direction',
      b: '<p>Determines the direction of the main axis, i.e., where distribution "starts" and "ends":</p><table class="vals"><tr><th>Value</th><th>Meaning</th></tr><tr><td><code>row</code></td><td>Horizontal from left to right (default)</td></tr><tr><td><code>row-reverse</code></td><td>Horizontal reversed, starts from right</td></tr><tr><td><code>column</code></td><td>Vertical from top to bottom</td></tr><tr><td><code>column-reverse</code></td><td>Vertical reversed, starts from bottom</td></tr></table><p>Try the values in the live demo below and notice how the default alignment of elements changes.</p><div class="note">Note: in row mode, justify-content is horizontal and align-items is vertical, and it\'s completely reversed in column mode.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f2',
      t: 'justify-content — Main Axis',
      b: '<p>Distributes elements and empty space <b>along the main axis</b>:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>flex-start</code></td><td>Gathers elements at the start of the axis (default)</td></tr><tr><td><code>center</code></td><td>Centers the elements</td></tr><tr><td><code>flex-end</code></td><td>Gathers elements at the end of the axis</td></tr><tr><td><code>space-between</code></td><td>Equal space <b>between</b> elements only, no space at edges</td></tr><tr><td><code>space-around</code></td><td>Half space at edges and full space between elements</td></tr><tr><td><code>space-evenly</code></td><td>All spaces are exactly equal: edges and between elements</td></tr></table><div class="note">Compare yourself: space-between leaves no space at edges, while space-evenly leaves equal space everywhere.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f3',
      t: 'align-items — Cross Axis',
      b: '<p>Aligns elements <b>on the cross axis</b> (vertical in row mode). Note the difference: justify-content distributes on the main axis, and this one on the opposite axis:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>stretch</code></td><td>Stretches elements to fill the full height (default)</td></tr><tr><td><code>flex-start</code></td><td>Top of the container</td></tr><tr><td><code>center</code></td><td>Vertical centering</td></tr><tr><td><code>flex-end</code></td><td>Bottom of the container</td></tr><tr><td><code>baseline</code></td><td>Aligns the baseline of text between elements</td></tr></table><div class="note">Perfect centering in the middle of the container = justify-content: center + align-items: center.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f4',
      t: 'flex-wrap — Wrapping',
      b: '<p>What happens when elements don\'t fit in one line? <code>flex-wrap</code> determines that:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>nowrap</code></td><td>Stay in one line and shrink even if they don\'t fit (default)</td></tr><tr><td><code>wrap</code></td><td>Extra elements move to a new line</td></tr><tr><td><code>wrap-reverse</code></td><td>Wraps with reversed line direction</td></tr></table><p>Try wrap in the demo with 6 elements — remember to increase the number of elements or make them larger to notice the difference.</p>'
    },
    {
      grp: 'Flexbox',
      id: 'f5',
      t: 'flex-grow, flex-shrink, and flex-basis',
      b: '<p>These properties control how flex items grow or shrink:</p><table class="vals"><tr><th>Property</th><th>Function</th><th>Default Value</th></tr><tr><td><code>flex-grow</code></td><td>Ratio of element growth to fill empty space</td><td>0</td></tr><tr><td><code>flex-shrink</code></td><td>Ratio of element shrinkage when space is tight</td><td>1</td></tr><tr><td><code>flex-basis</code></td><td>Initial size of the element before growing/shrinking</td><td>auto</td></tr></table><p>The shorthand <code>flex: 1</code> means <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.</p><div class="note">flex-basis is like width/height but works only on the main axis.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f6',
      t: 'order — Element Ordering',
      b: '<p>Allows you to change the visual order of elements without changing HTML:</p><pre>.item {\n  order: 2;   /* Higher value = appears later */\n}</pre><p>The default value is <code>0</code>. Elements with negative values appear first, and positive values appear last.</p><div class="note">Use order carefully — don\'t change the logical reading order of content.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f7',
      t: 'align-self — Individual Alignment',
      b: '<p>Allows aligning a single element differently from the rest:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>auto</code></td><td>Follows align-items of the container (default)</td></tr><tr><td><code>flex-start</code></td><td>Top of the container</td></tr><tr><td><code>center</code></td><td>Vertical centering</td></tr><tr><td><code>flex-end</code></td><td>Bottom of the container</td></tr><tr><td><code>stretch</code></td><td>Stretches the element to fill the height</td></tr></table><p>Example: one element at the bottom while the rest are at the top:</p><pre>.last-item {\n  align-self: flex-end;\n}</pre>'
    },
    {
      grp: 'Flexbox',
      id: 'f8',
      t: 'align-content — Multi-line Alignment',
      b: '<p>Controls the alignment of <b>the lines themselves</b> (not the elements) when there is wrapping:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>stretch</code></td><td>Stretches lines to fill the space (default)</td></tr><tr><td><code>flex-start</code></td><td>Gathers lines at the top</td></tr><tr><td><code>center</code></td><td>Centers lines vertically</td></tr><tr><td><code>flex-end</code></td><td>Gathers lines at the bottom</td></tr><tr><td><code>space-between</code></td><td>Equal space between lines</td></tr></table><div class="note">align-content only works with flex-wrap: wrap and more than 1 row.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f9',
      t: 'gap — Spacing Between Elements',
      b: '<p><code>gap</code> sets the spacing between elements <b>without external margins</b> — the cleanest way to add spacing in both Flexbox and Grid:</p><pre>.container {\n  gap: 16px;           /* Rows and columns together */\n  row-gap: 8px;        /* Rows only */\n  column-gap: 16px;    /* Columns only */\n}</pre><div class="note">In modern browsers, gap works with both Flexbox and Grid.</div>'
    },
    
    // Grid
    {
      grp: 'Grid',
      id: 'g0',
      t: 'What is Grid?',
      b: '<p>Grid is a <b>two-dimensional</b> layout model: rows and columns together at the same time, unlike Flexbox which deals with one axis.</p><p>The container is defined with <b><code>display: grid</code></b>, then divided into a grid of cells via <code>grid-template-columns</code> and <code>grid-template-rows</code>, and elements are placed in cells automatically or manually.</p><div class="note">When to use it? Full page layout, image gallery, product cards — anything with a rows × columns structure.</div>'
    },
    {
      grp: 'Grid',
      id: 'g1',
      t: 'grid-template-columns — Columns',
      b: '<p>Determines the number and size of columns. The most important units:</p><table class="vals"><tr><th>Unit</th><th>Meaning</th></tr><tr><td><code>px</code></td><td>Fixed size that doesn\'t change</td></tr><tr><td><code>%</code></td><td>Percentage of container width</td></tr><tr><td><code>fr</code></td><td>"Fraction" of remaining space — divides space proportionally</td></tr><tr><td><code>auto</code></td><td>Calculated from element content</td></tr></table><p>Common examples:</p><pre>grid-template-columns: 1fr 1fr 1fr;        /* 3 equal columns */\ngrid-template-columns: repeat(3, 1fr);     /* Same thing shortened */\ngrid-template-columns: 200px 1fr;          /* Fixed column + flexible */\ngrid-template-columns: 1fr 2fr 1fr;        /* Middle double the sides */</pre>'
    },
    {
      grp: 'Grid',
      id: 'g2',
      t: 'grid-template-rows and minmax',
      b: '<p>Determines row heights with the same logic as columns. Example: <code>grid-template-rows: 80px auto 1fr</code> means a fixed row, one following its content, and a third filling the rest.</p><p>The very useful function <code>minmax(min, max)</code>:</p><pre>grid-template-rows: repeat(3, minmax(44px, auto));</pre><p>This makes each row <b>no less than 44px</b> but grows if the content needs more space.</p>'
    },
    {
      grp: 'Grid',
      id: 'g3',
      t: 'gap — Spacing',
      b: '<p>As in Flexbox, <code>gap</code> sets the spacing between rows and columns without margins:</p><pre>gap: 12px;                 /* Rows and columns together */\nrow-gap: 8px;              /* Rows only */\ncolumn-gap: 16px;          /* Columns only */</pre><div class="note">Before gap existed, developers used margins and padding with complex tricks — no longer needed.</div>'
    },
    {
      grp: 'Grid',
      id: 'g4',
      t: 'justify-items and align-items',
      b: '<p>These two properties align <b>each element inside its cell</b> (not the whole grid):</p><table class="vals"><tr><th>Property</th><th>Axis</th></tr><tr><td><code>justify-items</code></td><td>Horizontal inside the cell: start / center / end / stretch</td></tr><tr><td><code>align-items</code></td><td>Vertical inside the cell: start / center / end / stretch</td></tr></table><p>The shorthand <code>place-items: center center;</code> adjusts both together — the shortest way to center an element inside its cell.</p><div class="note">Compare: in Flexbox there is no justify-items, because elements move as a group on the main axis via justify-content.</div>'
    },
    {
      grp: 'Grid',
      id: 'g5',
      t: 'grid-auto-flow — Fill Order',
      b: '<p>Determines how elements fill available cells:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>row</code></td><td>Fills row by row from left to right (default)</td></tr><tr><td><code>column</code></td><td>Fills column by column — next element goes below not beside</td></tr><tr><td><code>dense</code></td><td>Fills empty spaces first before new cells</td></tr></table><p>Try column in the demo: notice how the order becomes vertical even though the number of columns stays the same.</p>'
    },
    {
      grp: 'Grid',
      id: 'g6',
      t: 'grid-template-areas — Layout with Areas',
      b: '<p>Allows you to name grid areas and distribute elements on them with clear names:</p><pre>.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }</pre><p>The dot <code>.</code> means an empty area.</p><div class="note">This method is excellent for full page layouts because it makes the code readable like a map.</div>'
    },
    {
      grp: 'Grid',
      id: 'g7',
      t: 'grid-column and grid-row — Cell Merging',
      b: '<p>Allows you to merge multiple cells into one element:</p><pre>.item {\n  grid-column: 1 / 3;    /* From column 1 to 3 (merges two columns) */\n  grid-row: 2 / 4;       /* From row 2 to 4 (merges two rows) */\n}</pre><p>You can use the keyword <code>span</code>:</p><pre>.item {\n  grid-column: span 2;   /* Spans 2 columns */\n  grid-row: span 3;      /* Spans 3 rows */\n}</pre>'
    },
    {
      grp: 'Grid',
      id: 'g8',
      t: 'auto-fit and auto-fill — Dynamic Columns',
      b: '<p>Allows creating columns that automatically adapt to container width:</p><pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre><p>The difference between auto-fit and auto-fill:</p><table class="vals"><tr><th>Value</th><th>Behavior</th></tr><tr><td><code>auto-fill</code></td><td>Creates empty columns if elements aren\'t enough to fill them</td></tr><tr><td><code>auto-fit</code></td><td>Collapses empty columns and expands existing ones</td></tr></table><div class="note">auto-fit is the best choice for responsive image galleries and cards.</div>'
    },
    {
      grp: 'Grid',
      id: 'g9',
      t: 'Flexbox or Grid? When to Use Each',
      b: '<p><b>Use Flexbox</b> when the layout is <b>one-dimensional</b>: elements in a row or column, and may wrap based on space. Examples: navigation bar, tags, button group, centering an element.</p><p><b>Use Grid</b> when the layout is <b>two dimensions together</b> predefined: full page with areas, image gallery, card table. Classic example for page layout:</p><pre>.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  gap: 12px;\n}</pre><p>And often they work together: Grid for the whole page frame, and Flexbox inside each area to distribute its content.</p>'
    }
  ],
  
  // ============ Practice Challenges ============
  challenges: [
    {
      type: 'flex',
      t: 'Exercise 1',
      title: 'Perfect Centering',
      items: 3,
      desc: 'Make the three elements <b>exactly in the middle of the container</b> — horizontally and vertically.',
      hint: 'You need two properties together: one for the main axis and one for the cross axis, both with value center.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'flex',
      t: 'Exercise 2',
      title: 'Spaced Distribution',
      items: 5,
      desc: 'Distribute the five elements so that <b>spaces are equal everywhere</b> — between elements and between them and the container edges.',
      hint: 'One value from justify-content makes all spaces exactly equal.',
      init: {direction:'row',justify:'flex-start',align:'center',wrap:'nowrap',gap:8},
      target: {justify:'space-evenly'}
    },
    {
      type: 'flex',
      t: 'Exercise 3',
      title: 'Reversed Column',
      items: 4,
      desc: 'Make the elements arranged in a <b>column starting from the bottom</b> (first element at bottom, last at top).',
      hint: 'The direction property has a value meaning "reversed column".',
      init: {direction:'row',justify:'center',align:'center',wrap:'nowrap',gap:8},
      target: {direction:'column-reverse'}
    },
    {
      type: 'flex',
      t: 'Exercise 4',
      title: 'Two Rows of Elements',
      items: 8,
      desc: 'Using eight elements, make them <b>wrap into two rows</b> instead of shrinking in one row.',
      hint: 'The wrap property has a value that allows moving to a new line when space runs out.',
      init: {direction:'row',justify:'flex-start',align:'stretch',wrap:'nowrap',gap:8},
      target: {wrap:'wrap'}
    },
    {
      type: 'flex',
      t: 'Exercise 5',
      title: 'Bottom Left',
      items: 3,
      desc: 'Gather the elements in the <b>bottom-left corner</b> of the container (end of both axes together).',
      hint: 'flex-end for the main axis, and flex-end for the cross axis.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'flex-end',align:'flex-end'}
    },
    {
      type: 'grid',
      t: 'Exercise 6',
      title: 'Three Equal Columns',
      items: 6,
      desc: 'Convert the grid to <b>three equal-sized columns</b> (make sure it has six elements).',
      hint: 'grid-template-columns with the repeat function and fr unit.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'repeat(3, 1fr)'}
    },
    {
      type: 'grid',
      t: 'Exercise 7',
      title: 'Prominent Column',
      items: 6,
      desc: 'Make the <b>middle column double the width</b> of the two side columns.',
      hint: 'The fr unit divides space proportionally: 1fr 2fr 1fr.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'1fr 2fr 1fr'}
    },
    {
      type: 'grid',
      t: 'Exercise 8',
      title: 'Centering Inside Cells',
      items: 6,
      desc: 'Make each element <b>in the middle of its cell</b> — horizontally and vertically.',
      hint: 'Two properties: justify-items for horizontal and align-items for vertical, both center.',
      init: {cols:'repeat(3, 1fr)',justify:'start',align:'start',flow:'row',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'grid',
      t: 'Exercise 9',
      title: 'Vertical Fill',
      items: 6,
      desc: 'Change the fill method so that the <b>first column fills completely before moving to the second</b>.',
      hint: 'grid-auto-flow with a value meaning "start with columns".',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {flow:'column'}
    },
    {
      type: 'grid',
      t: 'Exercise 10',
      title: 'Fixed Column and Flexible One',
      items: 4,
      desc: 'Make the <b>first column 150px fixed width</b>, and the second column fills the rest of the space.',
      hint: 'Mix a fixed unit with fr: 150px 1fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'150px 1fr'}
    }
  ],
  
  // ============ Quiz ============
  quiz: [
    {
      q: 'Which property determines the direction of element distribution inside a Flexbox container?',
      o: ['justify-content', 'flex-direction', 'align-items', 'flex-wrap'],
      a: 1,
      e: 'flex-direction controls the main axis: row is horizontal, column is vertical, and with reverse the direction flips.'
    },
    {
      q: 'To center elements horizontally inside a flex container with row direction we use:',
      o: ['align-items: center', 'justify-content: center', 'flex-wrap: wrap', 'gap: auto'],
      a: 1,
      e: 'justify-content works on the main axis (horizontal in row), and center centers the elements in it.'
    },
    {
      q: 'Which value of justify-content distributes empty space equally between elements and edges?',
      o: ['space-between', 'space-around', 'space-evenly', 'flex-start'],
      a: 2,
      e: 'space-evenly makes all spaces exactly equal, while space-between leaves no space at edges.'
    },
    {
      q: 'What does the wrap value do in the flex-wrap property?',
      o: ['Enlarges elements to fill the row', 'Moves extra elements to a new line', 'Hides extra elements', 'Reverses element order'],
      a: 1,
      e: 'wrap allows elements to move to a new line or column when there isn\'t enough space.'
    },
    {
      q: 'What is the fr unit in grid-template-columns?',
      o: ['A fixed unit like pixels', 'A fraction of remaining space divided proportionally', 'A percentage of content', 'A line-height unit only'],
      a: 1,
      e: 'fr divides free space proportionally: 1fr 2fr means the second is double the first.'
    },
    {
      q: 'Which property in Grid determines the number and size of columns?',
      o: ['grid-auto-flow', 'grid-template-rows', 'grid-template-columns', 'justify-items'],
      a: 2,
      e: 'grid-template-columns for example: repeat(3, 1fr) means three equal columns.'
    },
    {
      q: 'In Grid, which property centers an element vertically inside its cell?',
      o: ['justify-items', 'align-items', 'justify-content', 'place-content'],
      a: 1,
      e: 'align-items works on the vertical axis inside the cell, and place-items: center adjusts both horizontal and vertical together.'
    },
    {
      q: 'What does grid-auto-flow: column mean?',
      o: ['Fills rows first', 'Fills columns first then moves to a new column', 'Deletes empty columns', 'Makes all columns the same width'],
      a: 1,
      e: 'The default value row fills the row first; column makes the fill vertical first.'
    },
    {
      q: 'What is the basic difference between justify-content and justify-items?',
      o: ['No difference between them', 'The first distributes the whole container on the axis, the second aligns the element inside its cell', 'The first is for text only', 'The second works only in Flexbox'],
      a: 1,
      e: 'justify-content distributes space around elements as a group, while justify-items aligns each element inside its cell space in Grid.'
    },
    {
      q: 'Which combination places a single element exactly in the middle of the container using Flexbox?',
      o: ['justify-content: center only', 'align-items: center only', 'justify-content: center with align-items: center', 'flex-direction: center'],
      a: 2,
      e: 'We need both axes together: justify-content for horizontal and align-items for vertical.'
    }
  ], 
  // ============ Footer ============
  footer_home: 'Home',
  footer_privacy: 'Privacy Policy',
  footer_terms: 'Terms & Conditions',
  footer_copyright: '© 2026 Flexbox & Grid Reference. All rights reserved.',
  back_to_home: '← Back to Home',
  
  // ============ Privacy Policy ============
  privacy_title: 'Privacy Policy',
  privacy_h1: 'Privacy Policy',
  privacy_updated: 'Last updated: November 7, 2026',
  privacy_s1_title: '1. Introduction',
  privacy_s1_p1: 'Welcome to "Flexbox & Grid Reference" app. We respect your privacy and are committed to protecting it. This Privacy Policy explains how we handle your data when you use our application.',
  privacy_s1_p2: 'This application is purely educational, does not collect any sensitive personal data, does not require account registration, and does not send any data to external servers.',
  privacy_s2_title: '2. Data We Collect',
  privacy_s2_p1: 'The application uses <strong>local storage (localStorage)</strong> in your browser only to save:',
  privacy_s2_li1: 'Your preferred language',
  privacy_s2_li2: 'Theme preference (dark / light)',
  privacy_s2_li3: 'Your progress in exercises (completed exercises)',
  privacy_s2_p2: '<strong>All this data is stored locally on your device only</strong>, and is not sent to any external server, nor can it be accessed by us or by any third party.',
  privacy_s3_title: '3. Cookies',
  privacy_s3_p1: 'The application <strong>does not use cookies</strong> in any way. All preferences are saved via localStorage only.',
  privacy_s4_title: '4. Third-Party Services',
  privacy_s4_p1: 'The application does not use:',
  privacy_s4_li1: 'Analytics services (such as Google Analytics)',
  privacy_s4_li2: 'Advertisements',
  privacy_s4_li3: 'Tracking tools',
  privacy_s4_li4: 'Social networks',
  privacy_s4_li5: 'Any external servers for data collection',
  privacy_s5_title: '5. Offline Operation',
  privacy_s5_p1: 'The application is designed to work fully offline via Service Worker technology. After the initial load, the application does not need any network connection.',
  privacy_s6_title: '6. Your Rights',
  privacy_s6_p1: 'Since all your data is stored locally on your device:',
  privacy_s6_li1: 'You can delete all data at any time by clearing browser data',
  privacy_s6_li2: 'You can use the application in Incognito mode where no data will be saved',
  privacy_s6_li3: 'You have full control over all your data',
  privacy_s7_title: '7. Data Security',
  privacy_s7_p1: 'Since data does not leave your device, its security depends on the security of your browser and device. We recommend using an updated browser and protecting your device with a password.',
  privacy_s8_title: '8. Children\'s Rights',
  privacy_s8_p1: 'The application is intended for educational purposes and does not collect any data from any user, including children under 13 years of age. The application is completely safe for use by all ages.',
  privacy_s9_title: '9. Changes to Privacy Policy',
  privacy_s9_p1: 'We may update this Privacy Policy from time to time. Any changes will be announced by updating the "Last updated" date at the top of this page.',
  privacy_s10_title: '10. Contact Us',
  privacy_s10_p1: 'If you have any questions about this Privacy Policy, you can contact us via:',
  privacy_email_label: 'Email:',
  
  // ============ Terms and Conditions ============
  terms_title: 'Terms and Conditions',
  terms_h1: 'Terms and Conditions',
  terms_updated: 'Last updated: November 7, 2026',
  terms_s1_title: '1. Acceptance of Terms',
  terms_s1_p1: 'By using the "Flexbox & Grid Reference" application, you agree to comply with these terms and conditions. If you do not agree to any of these terms, please do not use the application.',
  terms_s2_title: '2. Description of Service',
  terms_s2_p1: 'The application is a free educational platform aimed at helping developers and students learn CSS layout systems (Flexbox and CSS Grid) through:',
  terms_s2_li1: 'Comprehensive theory lessons',
  terms_s2_li2: 'Interactive practice exercises',
  terms_s2_li3: 'Free simulator to experiment with properties',
  terms_s2_li4: 'Quizzes to measure understanding',
  terms_s3_title: '3. Intellectual Property',
  terms_s3_p1: 'All content in the application (texts, lessons, exercises, code, design) is the private property of the application owner and is protected under copyright and intellectual property laws.',
  terms_s3_p2: 'Personal and educational use is permitted. The following is prohibited:',
  terms_s3_li1: 'Copying or republishing content without permission',
  terms_s3_li2: 'Using content for commercial purposes',
  terms_s3_li3: 'Modifying and redistributing content',
  terms_s4_title: '4. Acceptable Use',
  terms_s4_p1: 'You are allowed to use the application for the following purposes:',
  terms_s4_li1: 'Personal learning',
  terms_s4_li2: 'Educational use in classrooms',
  terms_s4_li3: 'Quick reference during work',
  terms_s5_title: '5. Disclaimer',
  terms_s5_p1: 'The application is provided "As Is" without any warranties of any kind, express or implied.',
  terms_s5_p2: 'We do not guarantee:',
  terms_s5_li1: '100% accuracy of information',
  terms_s5_li2: 'Continuous service without interruption',
  terms_s5_li3: 'Suitability of content for your specific needs',
  terms_s5_li4: 'Freedom from software bugs',
  terms_s5_p3: 'The user bears full responsibility for using the information gained from the application.',
  terms_s6_title: '6. Limitation of Liability',
  terms_s6_p1: 'To the maximum extent permitted by law, the application owner shall not be liable for any direct or indirect damages resulting from the use of the application or inability to use it.',
  terms_s7_title: '7. External Links',
  terms_s7_p1: 'The application may contain links to external websites. We are not responsible for the content or privacy policies of those sites. We recommend reviewing their own terms.',
  terms_s8_title: '8. Modifications to Service',
  terms_s8_p1: 'We reserve the right to:',
  terms_s8_li1: 'Modify or discontinue the application at any time without prior notice',
  terms_s8_li2: 'Update content or remove parts of it',
  terms_s8_li3: 'Change these terms at any time',
  terms_s9_title: '9. Governing Law',
  terms_s9_p1: 'These terms and conditions are governed by and construed in accordance with the laws of the People\'s Democratic Republic of Algeria.',
  terms_s10_title: '10. Changes to Terms',
  terms_s10_p1: 'We may update these terms from time to time. Any changes will be announced by updating the "Last updated" date at the top of this page. Your continued use of the application after changes are made means your acceptance of the new terms.',
  terms_s11_title: '11. Contact Us',
  terms_s11_p1: 'If you have any questions about these terms and conditions, you can contact us via:',
  terms_email_label: 'Email:'
};