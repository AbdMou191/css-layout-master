/* ============ المتغيرات الأساسية ============ */
var $ = function(s) { return document.querySelector(s); };
var COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#6b7280'];

function itemEl(i) {
  var d = document.createElement('div');
  d.className = 'box';
  d.textContent = i + 1;
  d.style.borderColor = COLORS[i % 5];
  d.style.color = 'inherit';
  d.style.background = COLORS[i % 5] + '22';
  return d;
}

function makeStage(el, type, st, items) {
  el.innerHTML = '';
  el.className = 'stage' + (el.id === 'goalStage' || el.id === 'userStage' ? ' sm' : '');
  
  if (type === 'flex') {
    el.style.display = 'flex';
    el.style.gap = st.gap + 'px';
    el.style.flexDirection = st.direction;
    el.style.justifyContent = st.justify;
    el.style.alignItems = st.align;
    el.style.flexWrap = st.wrap;
  } else {
    el.style.display = 'grid';
    el.style.gap = st.gap + 'px';
    el.style.gridTemplateColumns = st.cols;
    el.style.justifyItems = st.justify;
    el.style.alignItems = st.align;
    el.style.gridAutoFlow = st.flow;
    el.style.gridAutoRows = 'minmax(40px, auto)';
  }
  
  for (var i = 0; i < items; i++) el.appendChild(itemEl(i));
}

/* ============ حالة التطبيق ============ */
var demoState = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  wrap: 'nowrap',
  gap: 8,
  cols: 'repeat(3, 1fr)',
  justifyG: 'stretch',
  alignG: 'stretch',
  flow: 'row'
};

var currentLesson = null;
var chIdx = 0, chS = null, chDone = {};
var qi = 0, qOk = 0, qAnswered = false;

var S = {
  mode: 'flex',
  items: 6,
  flex: {direction: 'row', justify: 'flex-start', align: 'stretch', wrap: 'nowrap', gap: 8},
  grid: {cols: 'repeat(3, 1fr)', justify: 'stretch', align: 'stretch', flow: 'row', gap: 8}
};

var PROPS = {
  flex: [
    {k: 'direction', lbl: 'prop_direction', vals: ['row', 'row-reverse', 'column', 'column-reverse']},
    {k: 'justify', lbl: 'prop_justify', vals: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']},
    {k: 'align', lbl: 'prop_align', vals: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline']},
    {k: 'wrap', lbl: 'prop_wrap', vals: ['nowrap', 'wrap', 'wrap-reverse']}
  ],
  grid: [
    {k: 'cols', lbl: 'prop_cols', vals: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr 1fr', '200px 1fr']},
    {k: 'justify', lbl: 'prop_justify_items', vals: ['stretch', 'start', 'center', 'end']},
    {k: 'align', lbl: 'prop_align_items', vals: ['stretch', 'start', 'center', 'end']},
    {k: 'flow', lbl: 'prop_flow', vals: ['row', 'column', 'dense']}
  ]
};

/* ============ عرض قائمة الدروس ============ */
function renderLessonList() {
  var el = $('#lessonList');
  if (!el) return;
  el.innerHTML = '';
  
  var langData = translations[currentLang];
  if (!langData || !langData.lessons) return;
  
  var lastGrp = '';
  langData.lessons.forEach(function(L) {
    if (L.grp !== lastGrp) {
      lastGrp = L.grp;
      var g = document.createElement('div');
      g.className = 'grp';
      g.textContent = L.grp;
      el.appendChild(g);
    }
    var b = document.createElement('button');
    b.textContent = L.t;
    b.dataset.id = L.id;
    if (L.id === currentLesson) b.classList.add('on');
    b.onclick = function() {
      currentLesson = L.id;
      renderLessonList();
      renderLesson();
      $('#lessonList').classList.add('hidden');
      $('#theoryGrid').classList.add('sidebar-hidden');
    };
    el.appendChild(b);
  });
}

/* ============ عرض محتوى الدرس ============ */
function renderLesson() {
  var el = $('#lessonBody');
  if (!el) return;
  el.innerHTML = '';
  
  var langData = translations[currentLang];
  if (!langData) return;
  
  if (!currentLesson) {
    el.innerHTML = `
      <div id="appGoalWelcome">
        <h2 data-i18n="welcome_title">${langData.welcome_title}</h2>
        <p data-i18n="welcome_desc">${langData.welcome_desc}</p>
        <p style="color: var(--sec); margin-top: 20px;" data-i18n="welcome_hint">${langData.welcome_hint}</p>
      </div>
    `;
    return;
  }
  
  var L = langData.lessons.find(function(x) { return x.id === currentLesson; });
  if (!L) return;
  
  var h = document.createElement('h2');
  h.textContent = L.t;
  el.appendChild(h);
  
  var body = document.createElement('div');
  body.innerHTML = L.b;
  el.appendChild(body);
  
  if (L.demo && L.demo.prop) {
    var dl = document.createElement('div');
    dl.className = 'lbl';
    dl.style.fontWeight = '600';
    dl.style.color = 'inherit';
    dl.style.marginTop = '16px';
    dl.textContent = langData.live_demo;
    el.appendChild(dl);
    
    var st = document.createElement('div');
    st.className = 'stage sm';
    el.appendChild(st);
    
    var opts = document.createElement('div');
    opts.className = 'opts';
    opts.style.marginTop = '8px';
    
    var type = L.demo.type, k = L.demo.prop;
    var cur = (type === 'flex' ? demoState[k] : demoState[k === 'cols' ? 'cols' : k === 'align' ? 'alignG' : k === 'flow' ? 'flow' : 'justifyG']);
    
    var vals = type === 'flex' ? {
      direction: ['row', 'row-reverse', 'column', 'column-reverse'],
      justify: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      align: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
      wrap: ['nowrap', 'wrap', 'wrap-reverse']
    }[k] : {
      cols: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr 1fr', '200px 1fr'],
      align: ['stretch', 'start', 'center', 'end'],
      flow: ['row', 'column', 'dense']
    }[k];
    
    var ds = type === 'flex' ? {
      direction: demoState.direction,
      justify: demoState.justify,
      align: demoState.align,
      wrap: demoState.wrap,
      gap: 8
    } : {
      cols: demoState.cols,
      justify: demoState.justifyG,
      align: demoState.alignG,
      flow: demoState.flow,
      gap: 8
    };
    
    function draw() { makeStage(st, type, ds, 6); }
    
    vals.forEach(function(v) {
      var b = document.createElement('button');
      b.textContent = v;
      if (cur === v) b.classList.add('on');
      b.onclick = function() {
        if (type === 'flex') ds[k] = v;
        else if (k === 'cols') ds.cols = v;
        else if (k === 'align') ds.align = v;
        else ds.flow = v;
        opts.querySelectorAll('button').forEach(function(x) {
          x.classList.toggle('on', x.textContent === v);
        });
        draw();
      };
      opts.appendChild(b);
    });
    
    el.appendChild(opts);
    draw();
  }
}

/* ============ التمارين التطبيقية ============ */
function renderChips() {
  var el = $('#chips');
  if (!el) return;
  el.innerHTML = '';
  
  var langData = translations[currentLang];
  if (!langData || !langData.challenges) return;
  
  langData.challenges.forEach(function(c, i) {
    var b = document.createElement('button');
    b.textContent = c.t;
    if (chDone[i]) b.classList.add('done');
    if (i === chIdx) b.classList.add('on');
    b.onclick = function() {
      chIdx = i;
      loadChallenge();
    };
    el.appendChild(b);
  });
}

function loadChallenge() {
  renderChips();
  
  var langData = translations[currentLang];
  if (!langData || !langData.challenges) return;
  
  var c = langData.challenges[chIdx];
  if (!c) return;
  
  chS = JSON.parse(JSON.stringify(c.init));
  var goal = JSON.parse(JSON.stringify(c.init));
  Object.keys(c.target).forEach(function(k) { goal[k] = c.target[k]; });
  
  makeStage($('#goalStage'), c.type, goal, c.items);
  makeStage($('#userStage'), c.type, chS, c.items);
  
  var pc = $('#pControls');
  if (!pc) return;
  pc.innerHTML = '';
  
  var h = document.createElement('div');
  h.className = 'lbl';
  h.style.fontWeight = '600';
  h.style.fontSize = '13px';
  h.style.color = 'inherit';
  h.textContent = c.t + ' — ' + c.title;
  pc.appendChild(h);
  
  var d = document.createElement('p');
  d.style.fontSize = '13px';
  d.style.lineHeight = '1.8';
  d.style.margin = '6px 0';
  d.innerHTML = c.desc;
  pc.appendChild(d);
  
  var props = c.type === 'flex' ? [
    {k: 'direction', vals: ['row', 'row-reverse', 'column', 'column-reverse']},
    {k: 'justify', vals: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']},
    {k: 'align', vals: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline']},
    {k: 'wrap', vals: ['nowrap', 'wrap', 'wrap-reverse']}
  ] : [
    {k: 'cols', vals: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr 1fr', '150px 1fr']},
    {k: 'justify', vals: ['stretch', 'start', 'center', 'end']},
    {k: 'align', vals: ['stretch', 'start', 'center', 'end']},
    {k: 'flow', vals: ['row', 'column', 'dense']}
  ];
  
  props.forEach(function(p) {
    var l = document.createElement('div');
    l.className = 'lbl';
    l.textContent = langData['prop_' + p.k] || p.k;
    
    var o = document.createElement('div');
    o.className = 'opts';
    
    p.vals.forEach(function(v) {
      var b = document.createElement('button');
      b.textContent = v;
      if (chS[p.k] === v) b.classList.add('on');
      b.onclick = function() {
        chS[p.k] = v;
        o.querySelectorAll('button').forEach(function(x) {
          x.classList.toggle('on', x.textContent === v);
        });
        makeStage($('#userStage'), c.type, chS, c.items);
      };
      o.appendChild(b);
    });
    
    pc.appendChild(l);
    pc.appendChild(o);
  });
  
  $('#pMsg').className = 'msg';
  
  $('#hintBtn').onclick = function() {
    showMsg(langData.msg_hint + c.hint, 'no');
  };
}

function showMsg(t, cls) {
  var m = $('#pMsg');
  if (!m) return;
  m.textContent = t;
  m.className = 'msg ' + cls;
}

var checkBtn = $('#checkBtn');
if (checkBtn) {
  checkBtn.onclick = function() {
    var langData = translations[currentLang];
    if (!langData || !langData.challenges) return;
    
    var c = langData.challenges[chIdx];
    if (!c) return;
    
    var ok = true;
    Object.keys(c.target).forEach(function(k) {
      if (chS[k] !== c.target[k]) ok = false;
    });
    
    if (ok) {
      chDone[chIdx] = true;
      showMsg(langData.msg_success, 'ok');
      renderChips();
    } else {
      showMsg(langData.msg_error, 'no');
    }
  };
}

/* ============ المحاكي الحر ============ */
function buildStage(type) {
  var langData = translations[currentLang];
  var w = document.createElement('div');
  w.style.marginBottom = '12px';
  
  var cap = document.createElement('div');
  cap.className = 'cap';
  cap.innerHTML = '<span style="font-weight:600">' + (type === 'flex' ? langData.flex_container : langData.grid_container) + '</span><span>' + langData.container_label + '</span>';
  
  var st = document.createElement('div');
  st.className = 'stage';
  makeStage(st, type, type === 'flex' ? S.flex : S.grid, S.items);
  
  w.appendChild(cap);
  w.appendChild(st);
  return w;
}

function cssFor(type) {
  if (type === 'flex') {
    var f = S.flex;
    return '.flex-container {\n  display: flex;\n  flex-direction: ' + f.direction + ';\n  justify-content: ' + f.justify + ';\n  align-items: ' + f.align + ';\n  flex-wrap: ' + f.wrap + ';\n  gap: ' + f.gap + 'px;\n}';
  }
  var g = S.grid;
  return '.grid-container {\n  display: grid;\n  grid-template-columns: ' + g.cols + ';\n  justify-items: ' + g.justify + ';\n  align-items: ' + g.align + ';\n  grid-auto-flow: ' + g.flow + ';\n  gap: ' + g.gap + 'px;\n}';
}

function renderPlay() {
  var stages = $('#stages');
  if (!stages) return;
  stages.innerHTML = '';
  
  var langData = translations[currentLang];
  if (!langData) return;
  
  if (S.mode === 'compare') {
    stages.appendChild(buildStage('flex'));
    stages.appendChild(buildStage('grid'));
    $('#codeOut').textContent = cssFor('flex') + '\n\n' + cssFor('grid');
  } else {
    stages.appendChild(buildStage(S.mode));
    $('#codeOut').textContent = cssFor(S.mode);
  }
}

function renderPlayControls() {
  var c = $('#controls');
  if (!c) return;
  c.innerHTML = '';
  
  var langData = translations[currentLang];
  if (!langData) return;
  
  var types = S.mode === 'compare' ? ['flex', 'grid'] : [S.mode];
  
  types.forEach(function(t) {
    var h = document.createElement('div');
    h.className = 'lbl';
    h.style.fontWeight = '600';
    h.style.fontSize = '13px';
    h.style.color = 'inherit';
    h.textContent = t === 'flex' ? langData.flex_props : langData.grid_props;
    c.appendChild(h);
    
    PROPS[t].forEach(function(p) {
      var l = document.createElement('div');
      l.className = 'lbl';
      l.textContent = langData[p.lbl] || p.lbl;
      
      var o = document.createElement('div');
      o.className = 'opts';
      
      p.vals.forEach(function(v) {
        var b = document.createElement('button');
        b.textContent = v;
        if (S[t][p.k] === v) b.classList.add('on');
        b.onclick = function() {
          S[t][p.k] = v;
          renderPlayControls();
          renderPlay();
        };
        o.appendChild(b);
      });
      
      c.appendChild(l);
      c.appendChild(o);
    });
    
    var gl = document.createElement('div');
    gl.className = 'lbl';
    gl.textContent = langData.gap_label + S[t].gap + 'px';
    
    var gr = document.createElement('input');
    gr.type = 'range';
    gr.min = 0;
    gr.max = 32;
    gr.step = 4;
    gr.value = S[t].gap;
    gr.oninput = function(e) {
      S[t].gap = +e.target.value;
      gl.textContent = langData.gap_label + S[t].gap + 'px';
      renderPlay();
    };
    
    c.appendChild(gl);
    c.appendChild(gr);
  });
  
  var il = document.createElement('div');
  il.className = 'lbl';
  il.style.marginTop = '14px';
  il.style.fontWeight = '600';
  il.style.color = 'inherit';
  il.textContent = langData.items_count + S.items;
  
  var ir = document.createElement('input');
  ir.type = 'range';
  ir.min = 3;
  ir.max = 12;
  ir.value = S.items;
  ir.oninput = function(e) {
    S.items = +e.target.value;
    il.textContent = langData.items_count + S.items;
    renderPlay();
  };
  
  c.appendChild(il);
  c.appendChild(ir);
}

/* ============ الاختبار ============ */
function startQuiz() {
  qi = 0;
  qOk = 0;
  showQ();
}

function showQ() {
  qAnswered = false;
  
  var langData = translations[currentLang];
  if (!langData || !langData.quiz) return;
  
  var Q = langData.quiz[qi];
  if (!Q) return;
  
  $('#qCount').textContent = langData.question + (qi + 1) + langData.of + langData.quiz.length;
  $('#qScore').textContent = langData.correct_answers + qOk;
  
  var body = $('#qBody');
  body.innerHTML = '';
  
  var t = document.createElement('div');
  t.style.fontWeight = '600';
  t.style.fontSize = '16px';
  t.style.marginTop = '4px';
  t.textContent = Q.q;
  body.appendChild(t);
  
  Q.o.forEach(function(op, i) {
    var b = document.createElement('button');
    b.className = 'qopt';
    b.textContent = op;
    b.onclick = function() {
      if (qAnswered) return;
      qAnswered = true;
      body.querySelectorAll('.qopt').forEach(function(x, j) {
        x.disabled = true;
        if (j === Q.a) x.classList.add('ok');
      });
      if (i === Q.a) {
        qOk++;
      } else {
        b.classList.add('bad');
      }
      var ex = $('#qExpl');
      ex.textContent = '💡 ' + Q.e;
      ex.style.display = 'block';
      $('#qNext').disabled = false;
      $('#qScore').textContent = langData.correct_answers + qOk;
    };
    body.appendChild(b);
  });
  
  $('#qExpl').style.display = 'none';
  var nx = $('#qNext');
  nx.disabled = true;
  nx.textContent = qi === langData.quiz.length - 1 ? langData.show_result : langData.btn_next;
}

var qNextBtn = $('#qNext');
if (qNextBtn) {
  qNextBtn.onclick = function() {
    var langData = translations[currentLang];
    if (!langData || !langData.quiz) return;
    
    if (qi < langData.quiz.length - 1) {
      qi++;
      showQ();
    } else {
      var pct = Math.round(qOk / langData.quiz.length * 100);
      var body = $('#qBody');
      body.innerHTML = '';
      
      var s = document.createElement('div');
      s.className = 'score';
      s.textContent = qOk + ' / ' + langData.quiz.length;
      
      var m = document.createElement('div');
      m.style.marginTop = '8px';
      m.style.fontSize = '14px';
      m.textContent = pct >= 75 ? langData.excellent : pct >= 50 ? langData.good : langData.need_practice;
      
      body.appendChild(s);
      body.appendChild(m);
      
      // ✅ زر مشاركة النتيجة المضاف حديثاً
      var shareBtn = document.createElement('button');
      shareBtn.className = 'pbtn share-btn';
      shareBtn.textContent = '📤 ' + (langData.share_result || 'مشاركة النتيجة');
      shareBtn.style.marginTop = '16px';
      shareBtn.style.width = '100%';
      shareBtn.onclick = function() {
        var shareText = langData.share_text || 'لقد حصلت على';
        var shareUrl = window.location.href;
        var message = shareText + ' ' + qOk + '/' + langData.quiz.length + ' 🎯\n\n' + shareUrl;
        
        if (navigator.share) {
          navigator.share({
            title: langData.app_title || 'مرجع Flexbox و Grid',
            text: message,
            url: shareUrl
          }).catch(function(err) {
            console.log('مشاركة ملغاة:', err);
          });
        } else {
          var shareWindow = window.open(
            'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message),
            '_blank',
            'width=600,height=400'
          );
          if (!shareWindow) {
            navigator.clipboard.writeText(message).then(function() {
              alert(langData.copied_to_clipboard || 'تم نسخ الرابط! يمكنك لصقه في أي مكان.');
            });
          }
        }
      };
      body.appendChild(shareBtn);
      
      $('#qExpl').style.display = 'none';
      var nx = $('#qNext');
      nx.textContent = langData.restart_quiz;
      nx.onclick = function() {
        nx.onclick = null;
        startQuiz();
      };
    }
  };
}

/* ============ التنقل العام ============ */
var modeSeg = $('#modeSeg');
if (modeSeg) {
  modeSeg.addEventListener('click', function(e) {
    var b = e.target.closest('button');
    if (!b) return;
    
    document.querySelectorAll('#modeSeg button').forEach(function(x) {
      x.classList.toggle('on', x === b);
    });
    
    var m = b.dataset.m;
    $('#theory').style.display = m === 'theory' ? '' : 'none';
    $('#practice').style.display = m === 'practice' ? '' : 'none';
    $('#play').style.display = ['flex', 'grid', 'compare'].indexOf(m) > -1 ? '' : 'none';
    $('#quiz').style.display = m === 'quiz' ? '' : 'none';
    
    if (['flex', 'grid', 'compare'].indexOf(m) > -1) {
      S.mode = m;
      renderPlayControls();
      renderPlay();
    } else if (m === 'quiz') {
      startQuiz();
    }
  });
}

/* ============ التحكم بالقائمة الجانبية ============ */
var toggleSidebarBtn = $('#toggleSidebarBtn');
if (toggleSidebarBtn) {
  toggleSidebarBtn.onclick = function() {
    $('#lessonList').classList.toggle('hidden');
    $('#theoryGrid').classList.toggle('sidebar-hidden');
  };
}

/* ============ التهيئة الأولية ============ */
function initApp() {
  if ($('#lessonList')) renderLessonList();
  if ($('#lessonBody')) renderLesson();
  if ($('#chips')) loadChallenge();
  if ($('#controls')) renderPlayControls();
  if ($('#stages')) renderPlay();
}

// بدء التطبيق
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
