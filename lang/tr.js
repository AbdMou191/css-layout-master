window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS['tr'] = {
  // ============ Ortak Metinler ============
  app_title: 'Flexbox ve Grid Referansı — Dersler ve Alıştırmalar',
  mode_theory: 'Teori Dersleri',
  mode_practice: 'Uygulama Dersleri',
  mode_flex: 'Flexbox Simülatörü',
  mode_grid: 'Grid Simülatörü',
  mode_compare: 'Karşılaştır',
  mode_quiz: 'Kendini Test Et',
  toggle_lessons: 'Ders Listesini Göster/Gizle',
  welcome_title: '🎯 Uygulamanın Amacı',
  welcome_desc: 'Bu uygulama, CSS yerleşim sistemlerinde (<strong>Flexbox</strong> ve <strong>CSS Grid</strong>) ustalaşmanız için adım adım rehberlik etmek üzere tasarlanmıştır.',
  welcome_hint: 'Kenar çubuğundan istediğiniz dersi seçin; yumuşak bir animasyonla gizlenir ve ders hemen başlar!',
  goal_title: 'Hedef',
  your_try: 'Sizin Denemeniz',
  btn_check: 'Çözümü Kontrol Et',
  btn_hint: 'İpucu',
  btn_next: 'Sonraki',
  msg_success: 'Harika! Doğru çözüm. Sonraki alıştırmaya geçin.',
  msg_error: 'Henüz doğru cevap değil — diğer seçenekleri deneyin veya ipucu isteyin.',
  msg_hint: 'İpucu: ',
  live_demo: 'Canlı Demo: Değerleri kendiniz deneyin',
  flex_container: 'Flexbox',
  grid_container: 'Grid',
  container_label: 'Kapsayıcı',
  items_count: 'Öğe sayısı: ',
  gap_label: 'gap: ',
  flex_props: 'Flexbox Özellikleri',
  grid_props: 'Grid Özellikleri',
  question: 'Soru ',
  of: ' / ',
  correct_answers: 'Doğru cevaplar: ',
  show_result: 'Sonucu Göster',
  restart_quiz: 'Testi Yeniden Başlat',
  excellent: 'Mükemmel! Flexbox ve Grid temellerinde ustalaştınız.',
  good: 'İyi — teori derslerini gözden geçirin, daha iyi olacaksınız.',
  need_practice: 'Endişelenmeyin — teori dersleriyle başlayın, sonra alıştırmaları deneyin.',
  
  // ============ Özellik Adları ============
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
  
  // ============ Özellik Değerleri ============
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
  
  // ============ Teori Dersleri ============
  lessons: [
    // Flexbox
    {
      grp: 'Flexbox',
      id: 'f0',
      t: 'Flexbox Nedir?',
      b: '<p>Flexbox, öğeleri bir kapsayıcı içinde dağıtmak için <b>tek bir eksene</b> (yatay veya dikey) dayanan ve öğelerin mevcut alana göre otomatik olarak büyüyüp küçülebilmesini sağlayan bir CSS yerleşim modelidir.</p><p>Temel fikir: kapsayıcı <code>display: flex</code> olur ve tüm doğrudan alt öğeleri <b>ana eksen</b> boyunca dağıtılan ve <b>çapraz eksende</b> hizalanan "flex öğeleri" haline gelir.</p><div class="note">Ne zaman kullanılır? Gezinme çubuğu, düğme grubu, tek bir öğeyi ortalama, öğeleri tek bir satır veya sütunda dağıtma.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f1',
      t: 'flex-direction — Yön',
      b: '<p>Ana eksenin yönünü, yani dağıtımın nerede "başladığını" ve "bittiğini" belirler:</p><table class="vals"><tr><th>Değer</th><th>Anlamı</th></tr><tr><td><code>row</code></td><td>Soldan sağa yatay (varsayılan)</td></tr><tr><td><code>row-reverse</code></td><td>Yatay ters, sağdan başlar</td></tr><tr><td><code>column</code></td><td>Yukarıdan aşağıya dikey</td></tr><tr><td><code>column-reverse</code></td><td>Dikey ters, aşağıdan başlar</td></tr></table><p>Aşağıdaki canlı demoda değerleri deneyin ve öğelerin varsayılan hizalamasının nasıl değiştiğine dikkat edin.</p><div class="note">Not: row modunda justify-content yatay, align-items dikeydir ve column modunda bu tamamen tersine döner.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f2',
      t: 'justify-content — Ana Eksen',
      b: '<p>Öğeleri ve boş alanı <b>ana eksen boyunca</b> dağıtır:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>flex-start</code></td><td>Öğeleri eksenin başında toplar (varsayılan)</td></tr><tr><td><code>center</code></td><td>Öğeleri ortalar</td></tr><tr><td><code>flex-end</code></td><td>Öğeleri eksenin sonunda toplar</td></tr><tr><td><code>space-between</code></td><td>Yalnızca öğeler <b>arasında</b> eşit boşluk, kenarlarda boşluk yok</td></tr><tr><td><code>space-around</code></td><td>Kenarlarda yarım, öğeler arasında tam boşluk</td></tr><tr><td><code>space-evenly</code></td><td>Tüm boşluklar tamamen eşittir: kenarlar ve öğeler arası</td></tr></table><div class="note">Kendiniz karşılaştırın: space-between kenarlarda boşluk bırakmaz, space-evenly ise her yerde eşit boşluk bırakır.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f3',
      t: 'align-items — Çapraz Eksen',
      b: '<p>Öğeleri <b>çapraz eksende</b> hizalar (row modunda dikey). Farka dikkat edin: justify-content ana eksende dağıtır, bu ise karşı eksende:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>stretch</code></td><td>Öğeleri tam yüksekliği dolduracak şekilde gerdirir (varsayılan)</td></tr><tr><td><code>flex-start</code></td><td>Kapsayıcının üstü</td></tr><tr><td><code>center</code></td><td>Dikey ortalama</td></tr><tr><td><code>flex-end</code></td><td>Kapsayıcının altı</td></tr><tr><td><code>baseline</code></td><td>Öğeler arasındaki metnin taban çizgisini hizalar</td></tr></table><div class="note">Kapsayıcının tam ortasında mükemmel ortalama = justify-content: center + align-items: center.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f4',
      t: 'flex-wrap — Sarma',
      b: '<p>Öğeler bir satıra sığmadığında ne olur? <code>flex-wrap</code> bunu belirler:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>nowrap</code></td><td>Tek satırda kalır ve sığmasalar bile küçülür (varsayılan)</td></tr><tr><td><code>wrap</code></td><td>Fazla öğeler yeni bir satıra geçer</td></tr><tr><td><code>wrap-reverse</code></td><td>Ters satır yönüyle sarar</td></tr></table><p>Demoda 6 öğeyle wrap\'i deneyin — farkı görmek için öğe sayısını artırmayı veya büyütmeyi unutmayın.</p>'
    },
    {
      grp: 'Flexbox',
      id: 'f5',
      t: 'flex-grow, flex-shrink ve flex-basis',
      b: '<p>Bu özellikler flex öğelerinin nasıl büyüyüp küçüleceğini kontrol eder:</p><table class="vals"><tr><th>Özellik</th><th>İşlevi</th><th>Varsayılan Değer</th></tr><tr><td><code>flex-grow</code></td><td>Boş alanı doldurmak için öğe büyüme oranı</td><td>0</td></tr><tr><td><code>flex-shrink</code></td><td>Alan dar olduğunda öğe küçülme oranı</td><td>1</td></tr><tr><td><code>flex-basis</code></td><td>Büyüme/küçülme öncesi öğenin başlangıç boyutu</td><td>auto</td></tr></table><p>Kısayol <code>flex: 1</code> şu anlama gelir: <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>.</p><div class="note">flex-basis width/height gibidir ama yalnızca ana eksende çalışır.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f6',
      t: 'order — Öğe Sıralaması',
      b: '<p>HTML\'i değiştirmeden öğelerin görsel sırasını değiştirmenize olanak tanır:</p><pre>.item {\n  order: 2;   /* Daha yüksek değer = daha sonra görünür */\n}</pre><p>Varsayılan değer <code>0</code>\'dır. Negatif değerli öğeler önce, pozitif değerli öğeler sonra görünür.</p><div class="note">order\'ı dikkatli kullanın — içeriğin mantıksal okuma sırasını değiştirmeyin.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f7',
      t: 'align-self — Bireysel Hizalama',
      b: '<p>Tek bir öğeyi diğerlerinden farklı şekilde hizalamanıza olanak tanır:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>auto</code></td><td>Kapsayıcının align-items değerini izler (varsayılan)</td></tr><tr><td><code>flex-start</code></td><td>Kapsayıcının üstü</td></tr><tr><td><code>center</code></td><td>Dikey ortalama</td></tr><tr><td><code>flex-end</code></td><td>Kapsayıcının altı</td></tr><tr><td><code>stretch</code></td><td>Öğeyi yüksekliği dolduracak şekilde gerdirir</td></tr></table><p>Örnek: geri kalanı üstteyken bir öğeyi altta tutma:</p><pre>.last-item {\n  align-self: flex-end;\n}</pre>'
    },
    {
      grp: 'Flexbox',
      id: 'f8',
      t: 'align-content — Çok Satırlı Hizalama',
      b: '<p>Sarıldığında <b>satırların kendisinin</b> (öğelerin değil) hizalanmasını kontrol eder:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>stretch</code></td><td>Satırları alanı dolduracak şekilde gerdirir (varsayılan)</td></tr><tr><td><code>flex-start</code></td><td>Satırları üstte toplar</td></tr><tr><td><code>center</code></td><td>Satırları dikey olarak ortalar</td></tr><tr><td><code>flex-end</code></td><td>Satırları altta toplar</td></tr><tr><td><code>space-between</code></td><td>Satırlar arasında eşit boşluk</td></tr></table><div class="note">align-content yalnızca flex-wrap: wrap ve 1\'den fazla satır olduğunda çalışır.</div>'
    },
    {
      grp: 'Flexbox',
      id: 'f9',
      t: 'gap — Öğeler Arası Boşluk',
      b: '<p><code>gap</code> öğeler arasındaki boşluğu <b>dış kenar boşlukları olmadan</b> ayarlar — hem Flexbox hem de Grid\'de boşluk eklemenin en temiz yolu:</p><pre>.container {\n  gap: 16px;           /* Satırlar ve sütunlar birlikte */\n  row-gap: 8px;        /* Yalnızca satırlar */\n  column-gap: 16px;    /* Yalnızca sütunlar */\n}</pre><div class="note">Modern tarayıcılarda gap hem Flexbox hem de Grid ile çalışır.</div>'
    },
    
    // Grid
    {
      grp: 'Grid',
      id: 'g0',
      t: 'Grid Nedir?',
      b: '<p>Grid, tek eksenle ilgilenen Flexbox\'ın aksine, satırlar ve sütunların aynı anda birlikte olduğu <b>iki boyutlu</b> bir yerleşim modelidir.</p><p>Kapsayıcı <b><code>display: grid</code></b> ile tanımlanır, ardından <code>grid-template-columns</code> ve <code>grid-template-rows</code> aracılığıyla bir hücre ızgarasına bölünür ve öğeler hücrelere otomatik veya manuel olarak yerleştirilir.</p><div class="note">Ne zaman kullanılır? Tam sayfa yerleşimi, resim galerisi, ürün kartları — satır × sütun yapısına sahip her şey.</div>'
    },
    {
      grp: 'Grid',
      id: 'g1',
      t: 'grid-template-columns — Sütunlar',
      b: '<p>Sütunların sayısını ve boyutunu belirler. En önemli birimler:</p><table class="vals"><tr><th>Birim</th><th>Anlamı</th></tr><tr><td><code>px</code></td><td>Değişmeyen sabit boyut</td></tr><tr><td><code>%</code></td><td>Kapsayıcı genişliğinin yüzdesi</td></tr><tr><td><code>fr</code></td><td>Kalan alanın "kesri" — alanı orantılı olarak böler</td></tr><tr><td><code>auto</code></td><td>Öğe içeriğinden hesaplanır</td></tr></table><p>Yaygın örnekler:</p><pre>grid-template-columns: 1fr 1fr 1fr;        /* 3 eşit sütun */\ngrid-template-columns: repeat(3, 1fr);     /* Aynısının kısaltılmışı */\ngrid-template-columns: 200px 1fr;          /* Sabit sütun + esnek */\ngrid-template-columns: 1fr 2fr 1fr;        /* Ortadaki kenarların iki katı */</pre>'
    },
    {
      grp: 'Grid',
      id: 'g2',
      t: 'grid-template-rows ve minmax',
      b: '<p>Satır yüksekliklerini sütunlarla aynı mantıkla belirler. Örnek: <code>grid-template-rows: 80px auto 1fr</code> bir sabit satır, içeriğini izleyen bir satır ve geri kalanı dolduran üçüncü bir satır anlamına gelir.</p><p>Çok kullanışlı <code>minmax(min, max)</code> fonksiyonu:</p><pre>grid-template-rows: repeat(3, minmax(44px, auto));</pre><p>Bu, her satırı <b>en az 44px</b> yapar ancak içerik daha fazla alana ihtiyaç duyarsa büyür.</p>'
    },
    {
      grp: 'Grid',
      id: 'g3',
      t: 'gap — Boşluk',
      b: '<p>Flexbox\'ta olduğu gibi, <code>gap</code> satırlar ve sütunlar arasındaki boşluğu kenar boşluğu olmadan ayarlar:</p><pre>gap: 12px;                 /* Satırlar ve sütunlar birlikte */\nrow-gap: 8px;              /* Yalnızca satırlar */\ncolumn-gap: 16px;          /* Yalnızca sütunlar */</pre><div class="note">gap var olmadan önce geliştiriciler karmaşık hilelerle margin ve padding kullanıyordu — artık gerek yok.</div>'
    },
    {
      grp: 'Grid',
      id: 'g4',
      t: 'justify-items ve align-items',
      b: '<p>Bu iki özellik <b>her öğeyi kendi hücresinin içinde</b> hizalar (tüm ızgarayı değil):</p><table class="vals"><tr><th>Özellik</th><th>Eksen</th></tr><tr><td><code>justify-items</code></td><td>Hücre içinde yatay: start / center / end / stretch</td></tr><tr><td><code>align-items</code></td><td>Hücre içinde dikey: start / center / end / stretch</td></tr></table><p>Kısayol <code>place-items: center center;</code> ikisini birlikte ayarlar — bir öğeyi kendi hücresi içinde ortalamanın en kısa yolu.</p><div class="note">Karşılaştırın: Flexbox\'ta justify-items yoktur çünkü öğeler justify-content aracılığıyla ana eksende bir grup olarak hareket eder.</div>'
    },
    {
      grp: 'Grid',
      id: 'g5',
      t: 'grid-auto-flow — Doldurma Sırası',
      b: '<p>Öğelerin mevcut hücreleri nasıl dolduracağını belirler:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>row</code></td><td>Satırları soldan sağa doldurur (varsayılan)</td></tr><tr><td><code>column</code></td><td>Sütunları sütun sütun doldurur — sonraki öğe yanına değil altına gider</td></tr><tr><td><code>dense</code></td><td>Yeni hücrelerden önce boş alanları doldurur</td></tr></table><p>Demoda column\'ı deneyin: sütun sayısı aynı kalmasına rağmen sıralamanın nasıl dikey hale geldiğine dikkat edin.</p>'
    },
    {
      grp: 'Grid',
      id: 'g6',
      t: 'grid-template-areas — Alanlarla Yerleşim',
      b: '<p>Izgara alanlarını adlandırmanıza ve öğeleri açık adlarla bu alanlara dağıtmanıza olanak tanır:</p><pre>.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }</pre><p>Nokta <code>.</code> boş bir alan anlamına gelir.</p><div class="note">Bu yöntem tam sayfa yerleşimleri için mükemmeldir çünkü kodu bir harita gibi okunabilir kılar.</div>'
    },
    {
      grp: 'Grid',
      id: 'g7',
      t: 'grid-column ve grid-row — Hücre Birleştirme',
      b: '<p>Birden fazla hücreyi tek bir öğede birleştirmenize olanak tanır:</p><pre>.item {\n  grid-column: 1 / 3;    /* Sütun 1\'den 3\'e (iki sütunu birleştirir) */\n  grid-row: 2 / 4;       /* Satır 2\'den 4\'e (iki satırı birleştirir) */\n}</pre><p><code>span</code> anahtar kelimesini kullanabilirsiniz:</p><pre>.item {\n  grid-column: span 2;   /* 2 sütuna yayılır */\n  grid-row: span 3;      /* 3 satıra yayılır */\n}</pre>'
    },
    {
      grp: 'Grid',
      id: 'g8',
      t: 'auto-fit ve auto-fill — Dinamik Sütunlar',
      b: '<p>Kapsayıcı genişliğine otomatik olarak uyum sağlayan sütunlar oluşturmanıza olanak tanır:</p><pre>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</pre><p>auto-fit ile auto-fill arasındaki fark:</p><table class="vals"><tr><th>Değer</th><th>Davranış</th></tr><tr><td><code>auto-fill</code></td><td>Öğeler onları doldurmaya yetmezse boş sütunlar oluşturur</td></tr><tr><td><code>auto-fit</code></td><td>Boş sütunları çöktürür ve mevcut olanları genişletir</td></tr></table><div class="note">auto-fit, duyarlı resim galerileri ve kartlar için en iyi seçimdir.</div>'
    },
    {
      grp: 'Grid',
      id: 'g9',
      t: 'Flexbox mı Grid mi? Her Biri Ne Zaman Kullanılır',
      b: '<p><b>Flexbox\'ı kullanın</b> yerleşim <b>tek boyutlu</b> olduğunda: öğeler bir satır veya sütunda ve alana göre sarılabilir. Örnekler: gezinme çubuğu, etiketler, düğme grubu, bir öğeyi ortalama.</p><p><b>Grid\'i kullanın</b> yerleşim önceden tanımlanmış <b>iki boyut birlikte</b> olduğunda: alanlarla dolu sayfa, resim galerisi, kart tablosu. Sayfa yerleşimi için klasik örnek:</p><pre>.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 60px 1fr 60px;\n  gap: 12px;\n}</pre><p>Ve genellikle birlikte çalışırlar: tüm sayfa çerçevesi için Grid ve her alanın içeriğini dağıtmak için Flexbox.</p>'
    }
  ],
  
  // ============ Uygulama Alıştırmaları ============
  challenges: [
    {
      type: 'flex',
      t: 'Alıştırma 1',
      title: 'Mükemmel Ortalama',
      items: 3,
      desc: 'Üç öğeyi <b>kapsayıcının tam ortasına</b> yerleştirin — yatay ve dikey olarak.',
      hint: 'İki özelliğe birlikte ihtiyacınız var: biri ana eksen, diğeri çapraz eksen için, her ikisi de center değeriyle.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'flex',
      t: 'Alıştırma 2',
      title: 'Aralıklı Dağıtım',
      items: 5,
      desc: 'Beş öğeyi <b>her yerde boşluklar eşit olacak şekilde</b> dağıtın — öğeler arasında ve öğelerle kapsayıcı kenarları arasında.',
      hint: 'justify-content\'ten bir değer tüm boşlukları tamamen eşit yapar.',
      init: {direction:'row',justify:'flex-start',align:'center',wrap:'nowrap',gap:8},
      target: {justify:'space-evenly'}
    },
    {
      type: 'flex',
      t: 'Alıştırma 3',
      title: 'Ters Sütun',
      items: 4,
      desc: 'Öğeleri <b>alttan başlayan bir sütun</b> halinde düzenleyin (ilk öğe altta, son öğe üstte).',
      hint: 'Yön özelliğinin "ters sütun" anlamına gelen bir değeri vardır.',
      init: {direction:'row',justify:'center',align:'center',wrap:'nowrap',gap:8},
      target: {direction:'column-reverse'}
    },
    {
      type: 'flex',
      t: 'Alıştırma 4',
      title: 'İki Satır Öğe',
      items: 8,
      desc: 'Sekiz öğe kullanarak, tek satırda küçülmek yerine <b>iki satıra sarılmalarını</b> sağlayın.',
      hint: 'wrap özelliğinin, alan bittiğinde yeni bir satıra geçmeye izin veren bir değeri vardır.',
      init: {direction:'row',justify:'flex-start',align:'stretch',wrap:'nowrap',gap:8},
      target: {wrap:'wrap'}
    },
    {
      type: 'flex',
      t: 'Alıştırma 5',
      title: 'Sol Alt',
      items: 3,
      desc: 'Öğeleri kapsayıcının <b>sol alt köşesinde</b> toplayın (her iki eksenin sonu birlikte).',
      hint: 'Ana eksen için flex-end, çapraz eksen için flex-end.',
      init: {direction:'row',justify:'flex-start',align:'flex-start',wrap:'nowrap',gap:8},
      target: {justify:'flex-end',align:'flex-end'}
    },
    {
      type: 'grid',
      t: 'Alıştırma 6',
      title: 'Üç Eşit Sütun',
      items: 6,
      desc: 'Izgarayı <b>üç eşit boyutlu sütuna</b> dönüştürün (altı öğesi olduğundan emin olun).',
      hint: 'grid-template-columns, repeat fonksiyonu ve fr birimi ile.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'repeat(3, 1fr)'}
    },
    {
      type: 'grid',
      t: 'Alıştırma 7',
      title: 'Öne Çıkan Sütun',
      items: 6,
      desc: '<b>Orta sütunu iki yan sütunun iki katı genişliğinde</b> yapın.',
      hint: 'fr birimi alanı orantılı böler: 1fr 2fr 1fr.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'1fr 2fr 1fr'}
    },
    {
      type: 'grid',
      t: 'Alıştırma 8',
      title: 'Hücre İçinde Ortalama',
      items: 6,
      desc: 'Her öğeyi <b>kendi hücresinin ortasında</b> yapın — yatay ve dikey.',
      hint: 'İki özellik: yatay için justify-items ve dikey için align-items, her ikisi de center.',
      init: {cols:'repeat(3, 1fr)',justify:'start',align:'start',flow:'row',gap:8},
      target: {justify:'center',align:'center'}
    },
    {
      type: 'grid',
      t: 'Alıştırma 9',
      title: 'Dikey Doldurma',
      items: 6,
      desc: 'Doldurma yöntemini <b>ilk sütun tamamen dolmadan ikinciye geçilmeyecek</b> şekilde değiştirin.',
      hint: 'grid-auto-flow, "sütunlarla başla" anlamına gelen bir değerle.',
      init: {cols:'repeat(3, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {flow:'column'}
    },
    {
      type: 'grid',
      t: 'Alıştırma 10',
      title: 'Sabit Sütun ve Esnek Sütun',
      items: 4,
      desc: '<b>İlk sütunu 150px sabit genişlikte</b> yapın ve ikinci sütun alanın geri kalanını doldursun.',
      hint: 'Sabit bir birimi fr ile karıştırın: 150px 1fr.',
      init: {cols:'repeat(2, 1fr)',justify:'stretch',align:'stretch',flow:'row',gap:8},
      target: {cols:'150px 1fr'}
    }
  ],
  
  // ============ Test ============
  quiz: [
    {
      q: 'Flexbox kapsayıcısı içindeki öğe dağıtımının yönünü hangi özellik belirler?',
      o: ['justify-content', 'flex-direction', 'align-items', 'flex-wrap'],
      a: 1,
      e: 'flex-direction ana ekseni kontrol eder: row yatay, column dikey ve reverse ile yön tersine döner.'
    },
    {
      q: 'row yönlü bir flex kapsayıcısında öğeleri yatay olarak ortalamak için şunu kullanırız:',
      o: ['align-items: center', 'justify-content: center', 'flex-wrap: wrap', 'gap: auto'],
      a: 1,
      e: 'justify-content ana eksende çalışır (row\'da yatay) ve center öğeleri onun içinde ortalar.'
    },
    {
      q: 'justify-content\'in hangi değeri boş alanı öğeler ve kenarlar arasında eşit dağıtır?',
      o: ['space-between', 'space-around', 'space-evenly', 'flex-start'],
      a: 2,
      e: 'space-evenly tüm boşlukları tamamen eşit yapar, space-between ise kenarlarda boşluk bırakmaz.'
    },
    {
      q: 'flex-wrap özelliğindeki wrap değeri ne yapar?',
      o: ['Öğeleri satırı doldurmak için büyütür', 'Fazla öğeleri yeni bir satıra taşır', 'Fazla öğeleri gizler', 'Öğe sırasını tersine çevirir'],
      a: 1,
      e: 'wrap, yeterli alan olmadığında öğelerin yeni bir satıra veya sütuna geçmesine izin verir.'
    },
    {
      q: 'grid-template-columns\'taki fr birimi nedir?',
      o: ['Pikseller gibi sabit bir birim', 'Orantılı olarak bölünen kalan alanın kesri', 'İçeriğin yüzdesi', 'Yalnızca satır yüksekliği birimi'],
      a: 1,
      e: 'fr boş alanı orantılı böler: 1fr 2fr, ikincinin birincinin iki katı olduğu anlamına gelir.'
    },
    {
      q: 'Grid\'de sütunların sayısını ve boyutunu hangi özellik belirler?',
      o: ['grid-auto-flow', 'grid-template-rows', 'grid-template-columns', 'justify-items'],
      a: 2,
      e: 'grid-template-columns, örneğin: repeat(3, 1fr) üç eşit sütun anlamına gelir.'
    },
    {
      q: 'Grid\'de, bir öğeyi kendi hücresinin içinde dikey olarak hangi özellik ortalar?',
      o: ['justify-items', 'align-items', 'justify-content', 'place-content'],
      a: 1,
      e: 'align-items hücre içindeki dikey eksende çalışır ve place-items: center hem yatay hem dikeyi birlikte ayarlar.'
    },
    {
      q: 'grid-auto-flow: column ne anlama gelir?',
      o: ['Önce satırları doldurur', 'Önce sütunları doldurur sonra yeni sütuna geçer', 'Boş sütunları siler', 'Tüm sütunları aynı genişlikte yapar'],
      a: 1,
      e: 'Varsayılan değer row önce satırı doldurur; column doldurmayı önce dikey yapar.'
    },
    {
      q: 'justify-content ile justify-items arasındaki temel fark nedir?',
      o: ['Aralarında fark yoktur', 'Birincisi tüm kapsayıcıyı eksende dağıtır, ikincisi öğeyi kendi hücresinin içinde hizalar', 'Birincisi yalnızca metin içindir', 'İkincisi yalnızca Flexbox\'ta çalışır'],
      a: 1,
      e: 'justify-content boş alanı öğelerin etrafına grup olarak dağıtır, justify-items ise Grid\'de her öğeyi kendi hücre alanı içinde hizalar.'
    },
    {
      q: 'Hangi kombinasyon Flexbox kullanarak tek bir öğeyi kapsayıcının tam ortasına yerleştirir?',
      o: ['Yalnızca justify-content: center', 'Yalnızca align-items: center', 'justify-content: center ve align-items: center birlikte', 'flex-direction: center'],
      a: 2,
      e: 'Her iki eksene birlikte ihtiyacımız var: yatay için justify-content ve dikey için align-items.'
    }, 
    {
      share_result: 'Sonucu paylaş',
  share_text: 'Aldığım puan:',
  copied_to_clipboard: 'Bağlantı kopyalandı! Herhangi bir yere yapıştırabilirsiniz.',
    }
  ],
  
  // ============ Alt Bilgi ============
  footer_home: 'Ana Sayfa',
  footer_privacy: 'Gizlilik Politikası',
  footer_terms: 'Şartlar ve Koşullar',
  footer_copyright: '© 2026 Flexbox ve Grid Referansı. Tüm hakları saklıdır.',
  back_to_home: '← Ana Sayfaya Dön',
  
  // ============ Gizlilik Politikası ============
  privacy_title: 'Gizlilik Politikası',
  privacy_h1: 'Gizlilik Politikası',
  privacy_updated: 'Son güncelleme: 7 Kasım 2026',
  privacy_s1_title: '1. Giriş',
  privacy_s1_p1: '"Flexbox ve Grid Referansı" uygulamasına hoş geldiniz. Gizliliğinize saygı duyuyoruz ve onu korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, uygulamamızı kullandığınızda verilerinizi nasıl işlediğimizi açıklar.',
  privacy_s1_p2: 'Bu uygulama tamamen eğitim amaçlıdır, hassas kişisel veri toplamaz, hesap kaydı gerektirmez ve hiçbir veriyi harici sunuculara göndermez.',
  privacy_s2_title: '2. Topladığımız Veriler',
  privacy_s2_p1: 'Uygulama, yalnızca şunları kaydetmek için tarayıcınızda <strong>yerel depolama (localStorage)</strong> kullanır:',
  privacy_s2_li1: 'Tercih ettiğiniz dil',
  privacy_s2_li2: 'Tema tercihi (koyu / açık)',
  privacy_s2_li3: 'Alıştırmalardaki ilerlemeniz (tamamlanan alıştırmalar)',
  privacy_s2_p2: '<strong>Tüm bu veriler yalnızca cihazınızda yerel olarak depolanır</strong> ve hiçbir harici sunucuya gönderilmez; bizim veya herhangi bir üçüncü tarafın erişebileceği bir yerde değildir.',
  privacy_s3_title: '3. Çerezler',
  privacy_s3_p1: 'Uygulama hiçbir şekilde <strong>çerez kullanmaz</strong>. Tüm tercihler yalnızca localStorage aracılığıyla kaydedilir.',
  privacy_s4_title: '4. Üçüncü Taraf Hizmetleri',
  privacy_s4_p1: 'Uygulama şunları kullanmaz:',
  privacy_s4_li1: 'Analitik hizmetleri (Google Analytics gibi)',
  privacy_s4_li2: 'Reklamlar',
  privacy_s4_li3: 'İzleme araçları',
  privacy_s4_li4: 'Sosyal ağlar',
  privacy_s4_li5: 'Veri toplama için herhangi bir harici sunucu',
  privacy_s5_title: '5. Çevrimdışı Çalışma',
  privacy_s5_p1: 'Uygulama, Service Worker teknolojisi aracılığıyla tamamen çevrimdışı çalışacak şekilde tasarlanmıştır. İlk yüklemeden sonra uygulamanın hiçbir ağ bağlantısına ihtiyacı yoktur.',
  privacy_s6_title: '6. Haklarınız',
  privacy_s6_p1: 'Tüm verileriniz cihazınızda yerel olarak depolandığı için:',
  privacy_s6_li1: 'Tarayıcı verilerini temizleyerek istediğiniz zaman tüm verileri silebilirsiniz',
  privacy_s6_li2: 'Uygulamayı hiçbir verinin kaydedilmeyeceği Gizli Mod\'da kullanabilirsiniz',
  privacy_s6_li3: 'Tüm verileriniz üzerinde tam kontrole sahipsiniz',
  privacy_s7_title: '7. Veri Güvenliği',
  privacy_s7_p1: 'Veriler cihazınızdan ayrılmadığı için güvenliği tarayıcınızın ve cihazınızın güvenliğine bağlıdır. Güncel bir tarayıcı kullanmanızı ve cihazınızı parolayla korumanızı öneririz.',
  privacy_s8_title: '8. Çocukların Hakları',
  privacy_s8_p1: 'Uygulama eğitim amaçlıdır ve 13 yaş altı çocuklar da dahil olmak üzere hiçbir kullanıcıdan veri toplamaz. Uygulama her yaştan kullanıcı için tamamen güvenlidir.',
  privacy_s9_title: '9. Gizlilik Politikasındaki Değişiklikler',
  privacy_s9_p1: 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik, bu sayfanın üst kısmındaki "Son güncelleme" tarihi güncellenerek duyurulacaktır.',
  privacy_s10_title: '10. Bize Ulaşın',
  privacy_s10_p1: 'Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, bize şu yolla ulaşabilirsiniz:',
  privacy_email_label: 'E-posta:',
  
  // ============ Şartlar ve Koşullar ============
  terms_title: 'Şartlar ve Koşullar',
  terms_h1: 'Şartlar ve Koşullar',
  terms_updated: 'Son güncelleme: 7 Kasım 2026',
  terms_s1_title: '1. Şartların Kabulü',
  terms_s1_p1: '"Flexbox ve Grid Referansı" uygulamasını kullanarak bu şartlar ve koşullara uymayı kabul etmiş olursunuz. Bu şartlardan herhangi birini kabul etmiyorsanız, lütfen uygulamayı kullanmayın.',
  terms_s2_title: '2. Hizmetin Tanımı',
  terms_s2_p1: 'Uygulama, geliştiricilere ve öğrencilere CSS yerleşim sistemlerini (Flexbox ve CSS Grid) şu yollarla öğrenmelerine yardımcı olmayı amaçlayan ücretsiz bir eğitim platformudur:',
  terms_s2_li1: 'Kapsamlı teori dersleri',
  terms_s2_li2: 'Etkileşimli uygulama alıştırmaları',
  terms_s2_li3: 'Özelliklerle deney yapmak için ücretsiz simülatör',
  terms_s2_li4: 'Anlamayı ölçmek için testler',
  terms_s3_title: '3. Fikri Mülkiyet',
  terms_s3_p1: 'Uygulamadaki tüm içerik (metinler, dersler, alıştırmalar, kod, tasarım) uygulama sahibinin özel mülkiyetidir ve telif hakkı ve fikri mülkiyet yasaları kapsamında korunmaktadır.',
  terms_s3_p2: 'Kişisel ve eğitim amaçlı kullanıma izin verilir. Aşağıdakiler yasaktır:',
  terms_s3_li1: 'İçeriği izinsiz kopyalamak veya yeniden yayınlamak',
  terms_s3_li2: 'İçeriği ticari amaçlarla kullanmak',
  terms_s3_li3: 'İçeriği değiştirmek ve yeniden dağıtmak',
  terms_s4_title: '4. Kabul Edilebilir Kullanım',
  terms_s4_p1: 'Uygulamayı aşağıdaki amaçlarla kullanmanıza izin verilir:',
  terms_s4_li1: 'Kişisel öğrenme',
  terms_s4_li2: 'Sınıflarda eğitim amaçlı kullanım',
  terms_s4_li3: 'Çalışma sırasında hızlı başvuru',
  terms_s5_title: '5. Sorumluluk Reddi',
  terms_s5_p1: 'Uygulama, açık veya zımni herhangi bir garanti olmaksızın "Olduğu Gibi" sunulmaktadır.',
  terms_s5_p2: 'Şunları garanti etmiyoruz:',
  terms_s5_li1: 'Bilgilerin %100 doğruluğu',
  terms_s5_li2: 'Kesintisiz hizmet',
  terms_s5_li3: 'İçeriğin özel ihtiyaçlarınıza uygunluğu',
  terms_s5_li4: 'Yazılım hatalarından arınmışlık',
  terms_s5_p3: 'Kullanıcı, uygulamadan elde edilen bilgileri kullanmanın tüm sorumluluğunu üstlenir.',
  terms_s6_title: '6. Sorumluluğun Sınırlandırılması',
  terms_s6_p1: 'Yasaların izin verdiği azami ölçüde, uygulama sahibi, uygulamanın kullanımından veya kullanılamamasından kaynaklanan doğrudan veya dolaylı hiçbir zarardan sorumlu tutulamaz.',
  terms_s7_title: '7. Harici Bağlantılar',
  terms_s7_p1: 'Uygulama harici web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden veya gizlilik politikalarından sorumlu değiliz. Kendi şartlarını incelemenizi öneririz.',
  terms_s8_title: '8. Hizmette Değişiklikler',
  terms_s8_p1: 'Şu hakları saklı tutarız:',
  terms_s8_li1: 'Uygulamayı önceden bildirimde bulunmaksızın istediğimiz zaman değiştirmek veya durdurmak',
  terms_s8_li2: 'İçeriği güncellemek veya bir kısmını kaldırmak',
  terms_s8_li3: 'Bu şartları istediğimiz zaman değiştirmek',
  terms_s9_title: '9. Geçerli Yasa',
  terms_s9_p1: 'Bu şartlar ve koşullar, Cezayir Demokratik Halk Cumhuriyeti yasalarına göre yönetilir ve yorumlanır.',
  terms_s10_title: '10. Şartlardaki Değişiklikler',
  terms_s10_p1: 'Bu şartları zaman zaman güncelleyebiliriz. Herhangi bir değişiklik, bu sayfanın üst kısmındaki "Son güncelleme" tarihi güncellenerek duyurulacaktır. Değişiklikler yapıldıktan sonra uygulamayı kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.',
  terms_s11_title: '11. Bize Ulaşın',
  terms_s11_p1: 'Bu şartlar ve koşullar hakkında herhangi bir sorunuz varsa, bize şu yolla ulaşabilirsiniz:',
  terms_email_label: 'E-posta:'
};