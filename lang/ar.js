window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS['ar'] = {
  // ============ النصوص المشتركة ============
  app_title: 'مرجع Flexbox و Grid — دروس وتمارين',
  mode_theory: 'الدروس النظرية',
  mode_practice: 'الدروس التطبيقية',
  mode_flex: 'محاكي Flexbox',
  mode_grid: 'محاكي Grid',
  mode_compare: 'مقارنة',
  mode_quiz: 'اختبر نفسك',
  toggle_lessons: 'إخفاء/إظهار قائمة الدروس',
  welcome_title: '🎯 هدف التطبيق',
  welcome_desc: 'هذا التطبيق مصمم خصيصاً ليرافقك خطوة بخطوة لاحتراف أنظمة التخطيط في CSS (وهي <strong>Flexbox</strong> و <strong>CSS Grid</strong>).',
  welcome_hint: 'اختر أي درس من القائمة الجانبية لتختفي القائمة بأسلوب حركي هادئ ويبدأ الدرس فوراً!',
  goal_title: 'الهدف المطلوب',
  your_try: 'تجربتك',
  btn_check: 'تحقق من الحل',
  btn_hint: 'تلميح',
  btn_next: 'التالي',
  msg_success: 'أحسنت! الحل صحيح. انتقل للتمرين التالي.',
  msg_error: 'ليست الإجابة الصحيحة بعد — جرّب خيارات أخرى أو اطلب تلميحاً.',
  msg_hint: 'تلميح: ',
  live_demo: 'تجربة حية: جرّب القيم بنفسك',
  flex_container: 'Flexbox',
  grid_container: 'Grid',
  container_label: 'الحاوية',
  items_count: 'عدد العناصر: ',
  gap_label: 'gap: ',
  flex_props: 'خصائص Flexbox',
  grid_props: 'خصائص Grid',
  question: 'السؤال ',
  of: ' من ',
  correct_answers: 'الإجابات الصحيحة: ',
  show_result: 'عرض النتيجة',
  restart_quiz: 'إعادة الاختبار',
  excellent: 'ممتاز! أتقنت أساسيات Flexbox و Grid.',
  good: 'جيد — راجع الدروس النظرية وستتحسن.',
  need_practice: 'لا بأس — ابدأ بالدروس النظرية ثم جرّب التمارين.',
  
  // ============ أسماء الخصائص ============
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
  
  // ============ قيم الخصائص ============
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
  
  // ============ الدروس النظرية ============
  lessons: [
    // Flexbox
    {
      grp: 'فليكس بوكس',
      id: 'f0',
      t: 'ما هو Flexbox؟',
      b: '<p>Flexbox نموذج تخطيط في CSS يعتمد على <b>محور واحد</b> (أفقي أو عمودي) لتوزيع العناصر داخل حاوية، مع قابلية تمدد العناصر وانكماشها تلقائياً حسب المساحة المتاحة.</p><p>الفكرة الأساسية: الحاوية تصبح <code>display: flex</code>، فيتحول كل محتواها المباشر إلى «عناصر مرنة» (flex items) تُوزَّع على <b>المحور الرئيسي</b> (main axis) وتُحاذى على <b>المحور الثانوي</b> (cross axis).</p><div class="note">متى تستخدمه؟ شريط تنقل، مجموعة أزرار، توسيط عنصر واحد، توزيع عناصر في سطر أو عمود واحد.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f1',
      t: 'flex-direction — الاتجاه',
      b: '<p>تحدد اتجاه المحور الرئيسي، أي أين «يبدأ» و«ينتهي» التوزيع:</p><table class="vals"><tr><th>القيمة</th><th>المعنى</th></tr><tr><td><code>row</code></td><td>أفقي من اليسار إلى اليمين (الافتراضي)</td></tr><tr><td><code>row-reverse</code></td><td>أفقي معكوس، يبدأ من اليمين</td></tr><tr><td><code>column</code></td><td>عمودي من الأعلى إلى الأسفل</td></tr><tr><td><code>column-reverse</code></td><td>عمودي معكوس، يبدأ من الأسفل</td></tr></table><p>جرّب القيم في التجربة الحية أسفل الدرس ولاحظ كيف تتغير المحاذاة الافتراضية للعناصر.</p><div class="note">انتبه: في الوضع row يصبح justify-content أفقي و align-items عمودي، وينعكس الأمر تماماً في column.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f2',
      t: 'justify-content — المحور الرئيسي',
      b: '<p>توزّع العناصر والمساحة الفارغة <b>على طول المحور الرئيسي</b>:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>flex-start</code></td><td>تجمع العناصر عند بداية المحور (الافتراضي)</td></tr><tr><td><code>center</code></td><td>توسيط العناصر</td></tr><tr><td><code>flex-end</code></td><td>تجمع العناصر عند نهاية المحور</td></tr><tr><td><code>space-between</code></td><td>مسافة متساوية <b>بين</b> العناصر فقط، دون مسافات عند الحواف</td></tr><tr><td><code>space-around</code></td><td>مسافة نصفية عند الحواف وكاملة بين العناصر</td></tr><tr><td><code>space-evenly</code></td><td>كل المسافات متساوية تماماً: حواف وبين العناصر</td></tr></table><div class="note">قارن بنفسك: space-between لا تترك مسافة عند الحواف، بينما space-evenly تترك مسافة متساوية في كل مكان.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f3',
      t: 'align-items — المحور الثانوي',
      b: '<p>تحاذي العناصر <b>على المحور الثانوي</b> (العمودي في الوضع row). لاحظ الفرق: justify-content يوزّع على المحور الرئيسي، وهذه على المحور المقابل له:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>stretch</code></td><td>يمدّ العناصر لملء الارتفاع كاملاً (الافتراضي)</td></tr><tr><td><code>flex-start</code></td><td>أعلى الحاوية</td></tr><tr><td><code>center</code></td><td>توسيط عمودي</td></tr><tr><td><code>flex-end</code></td><td>أسفل الحاوية</td></tr><tr><td><code>baseline</code></td><td>محاذاة خط النص الأساسي بين العناصر</td></tr></table><div class="note">التوسيط المثالي في منتصف الحاوية = justify-content: center + align-items: center.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f4',
      t: 'flex-wrap — الالتفاف',
      b: '<p>ماذا يحدث عندما لا تتسع العناصر في سطر واحد؟ <code>flex-wrap</code> تحدد ذلك:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>nowrap</code></td><td>تبقى في سطر واحد وتنكمش حتى لو لم تتسع (الافتراضي)</td></tr><tr><td><code>wrap</code></td><td>تنتقل العناصر الزائدة إلى سطر جديد</td></tr><tr><td><code>wrap-reverse</code></td><td>تلتف مع عكس اتجاه الأسطر</td></tr></table><p>جرّب wrap في التجربة مع 6 عناصر — تذكر أن ترفع عدد العناصر أو تكبّرها لتلاحظ الفرق.</p>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f5',
      t: 'flex-grow و flex-shrink و flex-basis',
      b: '<p>هذه الخصائص تتحكم في كيفية تمدد أو انكماش العناصر المرنة:</p><table class="vals"><tr><th>الخاصية</th><th>الوظيفة</th><th>القيمة الافتراضية</th></tr><tr><td><code>flex-grow</code></td><td>نسبة تمدد العنصر ليملأ المساحة الفارغة</td><td>0</td></tr><tr><td><code>flex-shrink</code></td><td>نسبة انكماش العنصر عند ضيق المساحة</td><td>1</td></tr><tr><td><code>flex-basis</code></td><td>الحجم الابتدائي للعنصر قبل التمدد/الانكماش</td><td>auto</td></tr></table><p>الاختصار <code>flex: 1</code> يعني <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.</p><div class="note">flex-basis يشبه width/height لكنه يعمل على المحور الرئيسي فقط.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f6',
      t: 'order — ترتيب العناصر',
      b: '<p>تسمح لك بتغيير ترتيب العناصر بصرياً دون تغيير HTML:</p><pre>.item {\n  order: 2;   /* قيمة أكبر = يظهر لاحقاً */\n}</pre><p>القيمة الافتراضية هي <code>0</code>. العناصر ذات القيم السالبة تظهر أولاً، والموجبة تظهر أخيراً.</p><div class="note">استخدم order بحذر — لا تغيّر ترتيب القراءة المنطقي للمحتوى.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f7',
      t: 'align-self — محاذاة فردية',
      b: '<p>تسمح بمحاذاة عنصر واحد بشكل مختلف عن باقي العناصر:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>auto</code></td><td>يتبع align-items للحاوية (الافتراضي)</td></tr><tr><td><code>flex-start</code></td><td>أعلى الحاوية</td></tr><tr><td><code>center</code></td><td>توسيط عمودي</td></tr><tr><td><code>flex-end</code></td><td>أسفل الحاوية</td></tr><tr><td><code>stretch</code></td><td>يمدّ العنصر لملء الارتفاع</td></tr></table><p>مثال: عنصر واحد في الأسفل بينما الباقي في الأعلى:</p><pre>.last-item {\n  align-self: flex-end;\n}</pre>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f8',
      t: 'align-content — محاذاة الأسطر المتعددة',
      b: '<p>تتحكم في محاذاة <b>الأسطر نفسها</b> (وليس العناصر) عندما يكون هناك التفاف (wrap):</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>stretch</code></td><td>تمدد الأسطر لملء المساحة (الافتراضي)</td></tr><tr><td><code>flex-start</code></td><td>تجمع الأسطر في الأعلى</td></tr><tr><td><code>center</code></td><td>توسيط الأسطر عمودياً</td></tr><tr><td><code>flex-end</code></td><td>تجمع الأسطر في الأسفل</td></tr><tr><td><code>space-between</code></td><td>مسافة متساوية بين الأسطر</td></tr></table><div class="note">align-content لا يعمل إلا مع flex-wrap: wrap وعدد صفوف أكبر من 1.</div>'
    },
    {
      grp: 'فليكس بوكس',
      id: 'f9',
      t: 'gap — المسافات بين العناصر',
      b: '<p><code>gap</code> تضبط المسافة بين العناصر <b>دون هوامش خارجية</b> — أنظف طريقة لإضافة فراغات في Flexbox وGrid معاً:</p><pre>.container {\n  gap: 16px;           /* صفوف وأعمدة معاً */\n  row-gap: 8px;        /* الصفوف فقط */\n  column-gap: 16px;    /* الأعمدة فقط */\n}</pre><div class="note">في المتصفحات الحديثة، gap يعمل مع Flexbox و Grid معاً.</div>'
    },
    
    // Grid
    {
      grp: 'جريد',
      id: 'g0',
      t: 'ما هو Grid؟',
      b: '<p>Grid نموذج تخطيط <b>ثنائي الأبعاد</b>: صفوف وأعمدة معاً في نفس الوقت، على عكس Flexbox الذي يتعامل مع محور واحد.</p><p>تُعرَّف الحاوية بـ <b><code>display: grid</code></b>، ثم تُقسَّم إلى شبكة من الخلايا عبر <code>grid-template-columns</code> و <code>grid-template-rows</code>، وتُوضع العناصر في الخلايا تلقائياً أو يدوياً.</p><div class="note">متى تستخدمه؟ تخطيط صفحة كاملة، معرض صور، بطاقات منتجات — أي شيء له بنية صفوف × أعمدة.</div>'
    },
    {
      grp: 'جريد',
      id: 'g1',
      t: 'grid-template-columns — الأعمدة',
      b: '<p>تحدد عدد الأعمدة وأحجامها. الوحدات الأهم:</p><table class="vals"><tr><th>الوحدة</th><th>المعنى</th></tr><tr><td><code>px</code></td><td>حجم ثابت لا يتغير</td></tr><tr><td><code>%</code></td><td>نسبة من عرض الحاوية</td></tr><tr><td><code>fr</code></td><td>«جزء» من المساحة المتبقية — تقسم المساحة بالتناسب</td></tr><tr><td><code>auto</code></td><td>يحسب من محتوى العنصر</td></tr></table><p>أمثلة شائعة:</p><pre>grid-template-columns: 1fr 1fr 1fr;        /* 3 أعمدة متساوية */\ngrid-template-columns: repeat(3, 1fr);     /* نفس الشيء مختصراً */\ngrid-template-columns: 200px 1fr;          /* عمود ثابت + متمدد */\ngrid-template-columns: 1fr 2fr 1fr;        /* الأوسط ضعف الجانبين */</pre>'
    },
    {
      grp: 'جريد',
      id: 'g2',
      t: 'grid-template-rows و minmax',
      b: '<p>تحدد ارتفاعات الصفوف بنفس منطق الأعمدة. مثال: <code>grid-template-rows: 80px auto 1fr</code> تعني صفاً ثابتاً وآخر يتبع محتواه وثالثاً يملأ الباقي.</p><p>الدالة المفيدة جداً <code>minmax(حد أدنى, حد أقصى)</code>:</p><pre>grid-template-rows: repeat(3, minmax(44px, auto));</pre><p>هذا يجعل كل صف <b>لا يقل عن 44px</b> لكن ينمو إن احتاج المحتوى مساحة أكبر.</p>'
    },
    {
      grp: 'جريد',
      id: 'g3',
      t: 'gap — الفراغات',
      b: '<p>كما في Flexbox، <code>gap</code> تضبط المسافة بين الصفوف والأعمدة دون هوامش:</p><pre>gap: 12px;                 /* صفوف وأعمدة معاً */\nrow-gap: 8px;              /* الصفوف فقط */\ncolumn-gap: 16px;          /* الأعمدة فقط */</pre><div class="note">قبل وجود gap كان المطورون يستخدمون هوامش و padding بحيل معقدة — لم تعد هناك حاجة لذلك.</div>'
    },
    {
      grp: 'جريد',
      id: 'g4',
      t: 'justify-items و align-items',
      b: '<p>هاتان الخاصيتان تحاذيان <b>كل عنصر داخل خليته</b> (وليس الشبكة ككل):</p><table class="vals"><tr><th>الخاصية</th><th>المحور</th></tr><tr><td><code>justify-items</code></td><td>أفقي داخل الخلية: start / center / end / stretch</td></tr><tr><td><code>align-items</code></td><td>عمودي داخل الخلية: start / center / end / stretch</td></tr></table><p>الاختصار <code>place-items: center center;</code> يضبط الاثنتين معاً — وهو الطريقة الأقصر لتوسيط عنصر داخل خليته.</p><div class="note">قارن: في Flexbox لا يوجد justify-items، لأن العناصر تتحرك كمجموعة على المحور الرئيسي عبر justify-content.</div>'
    },
    {
      grp: 'جريد',
      id: 'g5',
      t: 'grid-auto-flow — ترتيب التعبئة',
      b: '<p>تحدد كيف تملأ العناصر الخلايا المتاحة:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>row</code></td><td>تعبئة صفاً صفاً من اليسار لليمين (الافتراضي)</td></tr><tr><td><code>column</code></td><td>تعبئة عموداً عموداً — العنصر التالي ينزل تحت لا بجانب</td></tr><tr><td><code>dense</code></td><td>يملأ الفراغات الخالية أولاً قبل الخلايا الجديدة</td></tr></table><p>جرّب column في التجربة: لاحظ كيف يصبح الترتيب عمودياً رغم بقاء عدد الأعمدة كما هو.</p>'
    },
    {
      grp: 'جريد',
      id: 'g6',
      t: 'grid-template-areas — تخطيط بالمناطق',
      b: '<p>تسمح لك بتسمية مناطق الشبكة وتوزيع العناصر عليها بأسماء واضحة:</p><pre>.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }</pre><p>النقطة <code>.</code> تعني منطقة فارغة.</p><div class="note">هذه الطريقة ممتازة لتخطيط الصفحات الكاملة لأنها تجعل الكود قابلاً للقراءة كخريطة.</div>'
    },
    {
      grp: 'جريد',
      id: 'g7',
      t: 'grid-column و grid-row — دمج الخلايا',
      b: '<p>تسمح لك بدمج عدة خلايا في عنصر واحد:</p><pre>.item {\n  grid-column: 1 / 3;    /* من العمود 1 إلى 3 (يجمع عمودين) */\n  grid-row: 2 / 4;       /* من الصف 2 إلى 4 (يجمع صفين) */\n}</pre><p>يمكن استخدام الكلمة <code>span</code>:</p><pre>.item {\n  grid-column: span 2;   /* يمتد على عمودين */\n  grid-row: span 3;      /* يمتد على 3 صفوف */\n}</pre>'
    },
    {
      grp: 'جريد',
      id: 'g8',
      t: 'auto-fit و auto-fill — أعمدة ديناميكية',
      b: '<p>تسمح بإنشاء أعمدة تتكيف تلقائياً مع عرض الحاوية:</p><pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre><p>الفرق بين auto-fit و auto-fill:</p><table class="vals"><tr><th>القيمة</th><th>السلوك</th></tr><tr><td><code>auto-fill</code></td><td>ينشئ أعمدة فارغة إن لم تكفِ العناصر لملئها</td></tr><tr><td><code>auto-fit</code></td><td>يطوي الأعمدة الفارغة ويوسع الموجود منها</td></tr></table><div class="note">auto-fit هو الخيار الأفضل لمعارض الصور والبطاقات المتجاوبة.</div>'
    },
    {
      grp: 'جريد',
      id: 'g9',
      t: 'فليكس أم جريد؟ متى تستخدم كل واحد',
      b: '<p><b>استخدم Flexbox</b> عندما يكون التخطيط <b>بُعداً واحداً</b>: عناصر في سطر أو عمود، وقد تلتف حسب المساحة. أمثلة: شريط تنقل، وسوم، مجموعة أزرار، توسيط عنصر.</p><p><b>استخدم Grid</b> عندما يكون التخطيط <b>بعدين معاً</b> محددين مسبقاً: صفحة كاملة بمناطق، معرض صور، جدول بطاقات. مثال كلاسيكي لتخطيط صفحة:</p><pre>.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  gap: 12px;\n}</pre><p>وغالباً يعملان معاً: Grid لإطار الصفحة كله، وFlexbox داخل كل منطقة لتوزيع محتواها.</p>'
    }
  ],
  
  // ============ التمارين التطبيقية ============
  challenges: [
    {
      type: 'flex',
      t: 'تمرين 1',
      title: 'توسيط مثالي',
      items: 3,
      desc: 'اجعل العناصر الثلاثة في <b>منتصف الحاوية تماماً</b> — أفقياً ورأسياً.',
      hint: 'تحتاج خاصيتين معاً: واحدة للمحور الرئيسي وواحدة للمحور الثانوي، وكلتاهما بالقيمة center.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'flex',
      t: 'تمرين 2',
      title: 'توزيع متباعد',
      items: 5,
      desc: 'وزّع العناصر الخمسة بحيث تكون <b>المسافات متساوية في كل مكان</b> — بين العناصر وبينها وبين حواف الحاوية.',
      hint: 'قيمة واحدة من justify-content تجعل كل الفراغات متساوية تماماً.',
      init: {direction:'row',justify:'flex-start',align:'center',wrap:'nowrap',gap:8},
      target: {justify:'space-evenly'}
    },
    {
      type: 'flex',
      t: 'تمرين 3',
      title: 'عمودي معكوس',
      items: 4,
      desc: 'اجعل العناصر مرتبة في <b>عمود يبدأ من الأسفل</b> (أول عنصر في الأسفل وآخر عنصر في الأعلى).',
      hint: 'خاصية الاتجاه لها قيمة تعني «عمود معكوس».',
      init: {direction:'row',justify:'center',align:'center',wrap:'nowrap',gap:8},
      target: {direction:'column-reverse'}
    },
    {
      type: 'flex',
      t: 'تمرين 4',
      title: 'صفّان من العناصر',
      items: 8,
      desc: 'باستخدام ثمانية عناصر، اجعلها <b>تلتف إلى سطرين</b> بدل أن تنكمش في سطر واحد.',
      hint: 'خاصية التفاف لها قيمة تسمح بالانتقال لسطر جديد عند امتلاء المساحة.',
      init: {direction:'row',justify:'flex-start',align:'stretch',wrap:'nowrap',gap:8},
      target: {wrap:'wrap'}
    },
    {
      type: 'flex',
      t: 'تمرين 5',
      title: 'أسفل اليسار',
      items: 3,
      desc: 'اجمع العناصر في <b>الزاوية السفلية اليسرى</b> من الحاوية (نهاية المحورين معاً).',
      hint: 'flex-end للمحور الرئيسي، وflex-end للمحور الثانوي.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'flex-end',align:'flex-end'}
    },
    {
      type: 'grid',
      t: 'تمرين 6',
      title: 'ثلاثة أعمدة متساوية',
      items: 6,
      desc: 'حوّل الشبكة إلى <b>ثلاثة أعمدة متساوية الحجم</b> (تأكد أن عناصرها ستة).',
      hint: 'grid-template-columns مع الدالة repeat ووحدة fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'repeat(3, 1fr)'}
    },
    {
      type: 'grid',
      t: 'تمرين 7',
      title: 'عمود بارز',
      items: 6,
      desc: 'اجعل العمود <b>الأوسط ضعف عرض العمودين الجانبيين</b>.',
      hint: 'الوحدة fr تقسم المساحة بالتناسب: 1fr 2fr 1fr.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'1fr 2fr 1fr'}
    },
    {
      type: 'grid',
      t: 'تمرين 8',
      title: 'توسيط داخل الخلايا',
      items: 6,
      desc: 'اجعل كل عنصر <b>في منتصف خليته</b> — أفقياً ورأسياً.',
      hint: 'خاصيتان: justify-items للأفقي و align-items للعمودي، وكلتاهما center.',
      init: {cols:'repeat(3, 1fr)',justify:'start',align:'start',flow:'row',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'grid',
      t: 'تمرين 9',
      title: 'تعبئة عمودية',
      items: 6,
      desc: 'غيّر طريقة التعبئة بحيث يمتلئ <b>العمود الأول كاملاً قبل الانتقال للعمود الثاني</b>.',
      hint: 'grid-auto-flow بقيمة تعني «ابدأ بالأعمدة».',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {flow:'column'}
    },
    {
      type: 'grid',
      t: 'تمرين 10',
      title: 'عمود ثابت وآخر مرن',
      items: 4,
      desc: 'اجعل <b>أول عمود عرضه 150px ثابتاً</b>، والعمود الثاني يملأ بقية المساحة.',
      hint: 'امزج وحدة ثابتة مع fr: 150px 1fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'150px 1fr'}
    }
  ],
  
  // ============ الاختبار ============
  quiz: [
    {
      q: 'أي خاصية تحدّد اتجاه توزيع العناصر داخل حاوية Flexbox؟',
      o: ['justify-content', 'flex-direction', 'align-items', 'flex-wrap'],
      a: 1,
      e: 'flex-direction تتحكم بالمحور الرئيسي: row أفقي، column عمودي، ومع reverse تنقلب الاتجاه.'
    },
    {
      q: 'لتوسيط العناصر أفقياً داخل حاوية flex ذات اتجاه row نستخدم:',
      o: ['align-items: center', 'justify-content: center', 'flex-wrap: wrap', 'gap: auto'],
      a: 1,
      e: 'justify-content يعمل على المحور الرئيسي (الأفقي في row)، وcenter توسّط العناصر فيه.'
    },
    {
      q: 'أي قيمة لـ justify-content توزّع المساحة الفارغة بالتساوي بين العناصر وبين الحواف؟',
      o: ['space-between', 'space-around', 'space-evenly', 'flex-start'],
      a: 2,
      e: 'space-evenly تجعل كل المسافات متساوية تماماً، بينما space-between لا تترك مسافة عند الحواف.'
    },
    {
      q: 'ماذا تفعل قيمة wrap في خاصية flex-wrap؟',
      o: ['تكبّر العناصر لتملأ السطر', 'تنقل العناصر الزائدة إلى سطر جديد', 'تخفي العناصر الزائدة', 'تعكس ترتيب العناصر'],
      a: 1,
      e: 'wrap تسمح للعناصر بالانتقال إلى سطر أو عمود جديد عندما لا تكفي المساحة.'
    },
    {
      q: 'ما وحدة fr في grid-template-columns؟',
      o: ['وحدة ثابتة مثل البكسل', 'جزء من المساحة المتبقية تقسم بالتناسب', 'نسبة مئوية من المحتوى', 'وحدة خطوط فقط'],
      a: 1,
      e: 'fr تقسم المساحة الحرة بالتناسب: 1fr 2fr يعني الثاني ضعف الأول.'
    },
    {
      q: 'أي خاصية في Grid تحدّد عدد الأعمدة وأحجامها؟',
      o: ['grid-auto-flow', 'grid-template-rows', 'grid-template-columns', 'justify-items'],
      a: 2,
      e: 'grid-template-columns مثلاً: repeat(3, 1fr) تعني ثلاثة أعمدة متساوية.'
    },
    {
      q: 'في Grid، أي خاصية توسّط العنصر داخل خليته عمودياً؟',
      o: ['justify-items', 'align-items', 'justify-content', 'place-content'],
      a: 1,
      e: 'align-items تعمل على المحور العمودي داخل الخلية، وplace-items: center يضبط الأفقي والعمودي معاً.'
    },
    {
      q: 'ماذا يعني grid-auto-flow: column؟',
      o: ['يملأ الصفوف أولاً', 'يملأ الأعمدة أولاً ثم ينتقل لعمود جديد', 'يحذف الأعمدة الفارغة', 'يجعل كل الأعمدة بنفس العرض'],
      a: 1,
      e: 'القيمة الافتراضية row تملأ الصف أولاً؛ column تجعل التعبئة عمودية أولاً.'
    },
    {
      q: 'ما الفرق الأساسي بين justify-content و justify-items؟',
      o: ['لا فرق بينهما', 'الأولى توزّع الحاوية ككل على المحور، والثانية تحاذي العنصر داخل خليته', 'الأولى للنصوص فقط', 'الثانية تعمل فقط في Flexbox'],
      a: 1,
      e: 'justify-content توزّع المساحة حول العناصر كمجموعة، أما justify-items فتحاذي كل عنصر داخل مساحة خليته في Grid.'
    },
    {
      q: 'أي مجموعة تضع عنصراً واحداً في منتصف الحاوية تماماً باستخدام Flexbox؟',
      o: ['justify-content: center فقط', 'align-items: center فقط', 'justify-content: center مع align-items: center', 'flex-direction: center'],
      a: 2,
      e: 'نحتاج المحورين معاً: justify-content للأفقي و align-items للعمودي.'
    },
    //زر المشاركة
    {
      share_result: 'مشاركة النتيجة',
  share_text: 'لقد حصلت على',
  copied_to_clipboard: 'تم نسخ الرابط! يمكنك لصقه في أي مكان.',
    }
  ], 
  // ============ الفوتر ============
  footer_home: 'الرئيسية',
  footer_privacy: 'سياسة الخصوصية',
  footer_terms: 'الشروط والأحكام',
  footer_copyright: '© 2026 مرجع Flexbox و Grid. جميع الحقوق محفوظة.',
  back_to_home: '← العودة إلى الصفحة الرئيسية',
  
  // ============ سياسة الخصوصية ============
  privacy_title: 'سياسة الخصوصية',
  privacy_h1: 'سياسة الخصوصية',
  privacy_updated: 'آخر تحديث: 7 نوفمبر 2026',
  privacy_s1_title: '1. مقدمة',
  privacy_s1_p1: 'مرحباً بك في تطبيق "مرجع Flexbox و Grid". نحن نحترم خصوصيتك ونلتزم بحمايتها. توضح سياسة الخصوصية هذه كيفية تعاملنا مع بياناتك عند استخدامك لتطبيقنا.',
  privacy_s1_p2: 'هذا التطبيق تعليمي بحت، ولا يجمع أي بيانات شخصية حساسة، ولا يتطلب تسجيل حساب، ولا يرسل أي بيانات إلى خوادم خارجية.',
  privacy_s2_title: '2. البيانات التي نجمعها',
  privacy_s2_p1: 'التطبيق يستخدم <strong>التخزين المحلي (localStorage)</strong> في متصفحك فقط لحفظ:',
  privacy_s2_li1: 'اللغة المفضلة التي اخترتها',
  privacy_s2_li2: 'تفضيل الوضع (ليلي / نهاري)',
  privacy_s2_li3: 'تقدمك في التمارين (التمارين المكتملة)',
  privacy_s2_p2: '<strong>جميع هذه البيانات تُخزَّن محلياً على جهازك فقط</strong>، ولا تُرسل إلى أي خادم خارجي، ولا يمكن الوصول إليها من قبلنا أو من قبل أي طرف ثالث.',
  privacy_s3_title: '3. ملفات تعريف الارتباط (Cookies)',
  privacy_s3_p1: 'التطبيق <strong>لا يستخدم ملفات تعريف الارتباط (Cookies)</strong> بأي شكل من الأشكال. جميع التفضيلات تُحفظ عبر localStorage فقط.',
  privacy_s4_title: '4. خدمات الطرف الثالث',
  privacy_s4_p1: 'التطبيق لا يستخدم:',
  privacy_s4_li1: 'خدمات التحليل (مثل Google Analytics)',
  privacy_s4_li2: 'إعلانات',
  privacy_s4_li3: 'أدوات تتبع',
  privacy_s4_li4: 'شبكات اجتماعية',
  privacy_s4_li5: 'أي خوادم خارجية لجمع البيانات',
  privacy_s5_title: '5. العمل دون اتصال بالإنترنت',
  privacy_s5_p1: 'التطبيق مصمم ليعمل بشكل كامل دون اتصال بالإنترنت (Offline) عبر تقنية Service Worker. بعد التحميل الأول، لا يحتاج التطبيق إلى أي اتصال بالشبكة.',
  privacy_s6_title: '6. حقوقك',
  privacy_s6_p1: 'نظراً لأن جميع بياناتك تُخزَّن محلياً على جهازك:',
  privacy_s6_li1: 'يمكنك حذف جميع البيانات في أي وقت عبر مسح بيانات المتصفح',
  privacy_s6_li2: 'يمكنك استخدام التطبيق في وضع التصفح الخفي (Incognito) حيث لن تُحفظ أي بيانات',
  privacy_s6_li3: 'لديك السيطرة الكاملة على جميع بياناتك',
  privacy_s7_title: '7. أمان البيانات',
  privacy_s7_p1: 'بما أن البيانات لا تغادر جهازك، فإن أمانها يعتمد على أمان متصفحك وجهازك. ننصح باستخدام متصفح محدث وحماية جهازك بكلمة مرور.',
  privacy_s8_title: '8. حقوق الأطفال',
  privacy_s8_p1: 'التطبيق مخصص للأغراض التعليمية ولا يجمع أي بيانات من أي مستخدم، بما في ذلك الأطفال تحت سن 13 عاماً. التطبيق آمن تماماً للاستخدام من قبل جميع الأعمار.',
  privacy_s9_title: '9. تغييرات على سياسة الخصوصية',
  privacy_s9_p1: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم الإعلان عن أي تغييرات عبر تحديث تاريخ "آخر تحديث" في أعلى هذه الصفحة.',
  privacy_s10_title: '10. تواصل معنا',
  privacy_s10_p1: 'إذا كان لديك أي استفسار حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:',
  privacy_email_label: 'البريد الإلكتروني:',
  
  // ============ الشروط والأحكام ============
  terms_title: 'الشروط والأحكام',
  terms_h1: 'الشروط والأحكام',
  terms_updated: 'آخر تحديث: 7 نوفمبر 2026',
  terms_s1_title: '1. قبول الشروط',
  terms_s1_p1: 'باستخدامك لتطبيق "مرجع Flexbox و Grid"، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا لم توافق على أي من هذه الشروط، يرجى عدم استخدام التطبيق.',
  terms_s2_title: '2. وصف الخدمة',
  terms_s2_p1: 'التطبيق هو منصة تعليمية مجانية تهدف إلى مساعدة المطورين والطلاب على تعلم أنظمة التخطيط في CSS (Flexbox و CSS Grid) من خلال:',
  terms_s2_li1: 'دروس نظرية شاملة',
  terms_s2_li2: 'تمارين تطبيقية تفاعلية',
  terms_s2_li3: 'محاكي حر لتجربة الخصائص',
  terms_s2_li4: 'اختبارات لقياس الفهم',
  terms_s3_title: '3. الملكية الفكرية',
  terms_s3_p1: 'جميع المحتويات الموجودة في التطبيق (النصوص، الدروس، التمارين، الأكواد، التصميم) هي ملكية خاصة لصاحب التطبيق ومحمية بموجب قوانين حقوق النشر والملكية الفكرية.',
  terms_s3_p2: 'يُسمح بالاستخدام الشخصي والتعليمي فقط. يُحظر:',
  terms_s3_li1: 'نسخ المحتوى أو إعادة نشره دون إذن',
  terms_s3_li2: 'استخدام المحتوى لأغراض تجارية',
  terms_s3_li3: 'تعديل المحتوى وإعادة توزيعه',
  terms_s4_title: '4. الاستخدام المقبول',
  terms_s4_p1: 'يُسمح لك باستخدام التطبيق للأغراض التالية:',
  terms_s4_li1: 'التعلم الشخصي',
  terms_s4_li2: 'الاستخدام التعليمي في الفصول الدراسية',
  terms_s4_li3: 'المرجع السريع أثناء العمل',
  terms_s5_title: '5. إخلاء المسؤولية',
  terms_s5_p1: 'التطبيق يُقدَّم "كما هو" (As Is) دون أي ضمانات من أي نوع، صريحة أو ضمنية.',
  terms_s5_p2: 'نحن لا نضمن:',
  terms_s5_li1: 'دقة المعلومات بنسبة 100%',
  terms_s5_li2: 'استمرارية الخدمة دون انقطاع',
  terms_s5_li3: 'ملاءمة المحتوى لاحتياجاتك الخاصة',
  terms_s5_li4: 'خلو التطبيق من الأخطاء البرمجية',
  terms_s5_p3: 'المستخدم يتحمل كامل المسؤولية عن استخدام المعلومات المستفادة من التطبيق.',
  terms_s6_title: '6. حدود المسؤولية',
  terms_s6_p1: 'في أقصى حد يسمح به القانون، لن يكون صاحب التطبيق مسؤولاً عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام التطبيق أو عدم القدرة على استخدامه.',
  terms_s7_title: '7. روابط خارجية',
  terms_s7_p1: 'قد يحتوي التطبيق على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو سياسات الخصوصية لتلك المواقع. ننصح بمراجعة شروطها الخاصة.',
  terms_s8_title: '8. التعديلات على الخدمة',
  terms_s8_p1: 'نحتفظ بالحق في:',
  terms_s8_li1: 'تعديل أو إيقاف التطبيق في أي وقت دون إشعار مسبق',
  terms_s8_li2: 'تحديث المحتوى أو إزالة أجزاء منه',
  terms_s8_li3: 'تغيير هذه الشروط في أي وقت',
  terms_s9_title: '9. القانون الواجب التطبيق',
  terms_s9_p1: 'تخضع هذه الشروط والأحكام وتُفسَّر وفقاً للقوانين السارية في الجمهورية الجزائرية الديمقراطية الشعبية.',
  terms_s10_title: '10. تغييرات على الشروط',
  terms_s10_p1: 'قد نقوم بتحديث هذه الشروط من وقت لآخر. سيُعلن عن أي تغييرات عبر تحديث تاريخ "آخر تحديث" في أعلى هذه الصفحة. استمرارك في استخدام التطبيق بعد إجراء التغييرات يعني قبولك للشروط الجديدة.',
  terms_s11_title: '11. تواصل معنا',
  terms_s11_p1: 'إذا كان لديك أي استفسار حول هذه الشروط والأحكام، يمكنك التواصل معنا عبر:',
  terms_email_label: 'البريد الإلكتروني:'
};