/* ============================================================
   VIDEO HOSTING
   Films sit in a public-read S3 bucket in ap-south-1 (Mumbai —
   the closest region to the class; London added latency the
   students would feel as buffering). Bare filenames resolve
   against VIDEO_BASE; a full URL passes through untouched, so a
   film can be repointed at any host by editing one string.
   ============================================================ */
const VIDEO_BASE = "https://kaveri-video-fcee88a180bb.s3.ap-south-1.amazonaws.com/videos/";
const LESSON_BASE = "https://kaveri-video-fcee88a180bb.s3.ap-south-1.amazonaws.com/lessons/";
const resolve = (base, v) => !v || !v.trim() ? "" : (/^https?:\/\//i.test(v.trim()) ? v.trim() : base + v.trim());
const videoURL  = v => resolve(VIDEO_BASE, v);
/* The NCERT PDFs are UNITS, not chapters: each one carries a prose piece, its poem
   and the exercises for both. So all 16 chapters have a text — eight of them just
   live deeper inside a file whose name is the prose piece. Every page number below
   was read out of the PDFs rather than guessed, and #page= drops the reader on it. */
const lessonURL = ch => {
  const u = resolve(LESSON_BASE, ch.lesson);
  return u ? `${u}#page=${ch.page || 1}&view=FitH` : "";
};
const APPENDIX = { file:"iebe1a1.pdf", pages:{1:1,2:3,3:5,4:8,5:10,6:12,7:14,8:17} };
const appendixURL = unit => `${LESSON_BASE}${APPENDIX.file}#page=${APPENDIX.pages[unit] || 1}&view=FitH`;

/* ============================================================
   NCF-SE 2023 — the real codes, not a badge that says "NEP 2020"

   Verified against the official 578-page NCF-SE 2023 PDF
   (ncert.nic.in/pdf/NCFSE-2023-August_2023.pdf) and CBSE's
   English Class IX 2026-27 syllabus (cbseacademic.nic.in).

   Two things worth knowing, because they trip up almost everyone:

   1. NCF-SE 2023 defines NO curricular goals for "English". The
      word does not appear once in its Language Education chapter
      (Part C, Ch 2). NCF only defines R1 / R2 / R3 language slots
      and leaves the assignment to the state or school. So an
      "NCF English CG-1" does not exist; anything quoting one is
      quoting something invented.
   2. CBSE resolves it by publishing English under BOTH R1 and R2
      with, in its own words, "common curricular goals rather than
      rigid differentiation between R1 & R2" — one framework, one
      textbook (Kaveri, named in the syllabus), one question paper
      design. So the R1 Secondary codes below are the ones that
      actually govern this class.

   Codes and wording are NCF's own, verbatim, for Language R1 at
   the Secondary Stage (Grades 9-10). CBSE restates them in
   slightly different words; where the two differ this shows NCF's,
   because NCF is the framework and CBSE the implementation.
   ============================================================ */
const NCF_NOTE = "NCF-SE 2023 · Language R1/R2 · Secondary Stage (Grades 9–10). CBSE transacts English against a framework common to R1 and R2.";

const MODES = [
  { k:"text",  i:"📄", t:"Text",  code:"C-2.2",
    ncf:"Analyses a literary text by close reading, critiquing form and style, and interpreting possible meanings.",
    cd:"The chapter itself, from the NCERT book. Read it together on the board, in the writer's own words." },
  { k:"film",  i:"▶",  t:"Film",  code:"C-3.1",
    ncf:"Analyses and evaluates the different audio and written material.",
    cd:"Watch the chapter, then say what the film chose to show — and what it left out. That comparison IS the competency." },
  { k:"read",  i:"📖", t:"Read",  code:"C-2.2",
    ncf:"Analyses a literary text by close reading, critiquing form and style, and interpreting possible meanings.",
    cd:"The short of it, plus the themes. Ask what the writer wants you to feel, and how they do it." },
  { k:"quiz",  i:"🧠", t:"Quiz",  code:"C-3.1",
    ncf:"Analyses and evaluates the different audio and written material.",
    cd:"Check what you understood. Options reshuffle every attempt, so the answer is never in the same place twice." },
  { k:"talk",  i:"💬", t:"Talk",  code:"C-3.2 + C-1.1",
    ncf:"Argues with proper rationale by carefully evaluating premises. · Uses language appropriate to social context, expresses agreement and disagreement with reasons, and arrives at conclusions through discussion and debate.",
    cd:"Think alone, pair up, then share. A view without a reason behind it does not count." },
  { k:"listen",i:"🎧", t:"Listen",code:"C-3.1",
    ncf:"Analyses and evaluates the different audio and written material.",
    cd:"The board reads the NCERT transcript aloud. Follow the highlighted line, then answer the Listen and Respond task." },
  { k:"words", i:"✨", t:"Words", code:"C-1.2",
    ncf:"Writes in different styles (narrative, descriptive, expository, and persuasive) from their own, as well as others experiences.",
    cd:"Build the word power to say precisely what you mean, in any style you choose." },
  { k:"do",    i:"🚀", t:"Do",    code:"C-1.3",
    ncf:"Writes for real-life situations (invitations, speeches, condolence messages, notices, creative slogans, advertisements, etc.) and for school newsletter/magazine/journal.",
    cd:"Learning beyond the text: do it in the real world, with real people, and bring it back." },
  { k:"connect",i:"🌍", t:"Connect", code:"CG-4",
    ncf:"Appreciates literary and cultural heritage related to the richness of Indian languages.",
    cd:"English is not an island. Where this chapter touches your other subjects, the work it could turn into, and what it is rooted in." }
];

/* ============================================================
   STORAGE
   Wrapped, because a single corrupt value used to throw at the
   top level and leave a permanently blank page with no way back
   short of devtools. A classroom cannot debug that mid-lesson;
   bad data is dropped and the page still opens.
   ============================================================ */
const LS = {
  get(k, fb){ try{ const v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); }catch(e){ return fb; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const K_DONE="kaveri_done_v2", K_TEAM="kaveri_teams_v2";

let doneArr = LS.get(K_DONE, []);
let done = new Set(Array.isArray(doneArr) ? doneArr : []);
let teamRaw = LS.get(K_TEAM, {A:0,B:0});
let teams = { A: Number(teamRaw?.A) || 0, B: Number(teamRaw?.B) || 0 };

const TOTAL = CHAPTERS.length;                       /* never a hardcoded 16 — add a chapter and every counter follows */
const N_PROSE = CHAPTERS.filter(c=>c.type==="prose").length;
const N_POEM  = CHAPTERS.filter(c=>c.type==="poem").length;
const N_FILM  = CHAPTERS.filter(c=>videoURL(c.video)).length;
const N_TEXT  = CHAPTERS.filter(c=>lessonURL(c)).length;
const N_LISTEN= CHAPTERS.filter(c=>TRANSCRIPTS[c.id]).length;
const N_CONN  = CHAPTERS.filter(c=>LINKS[c.id]).length;

let filter="all", cur=null, mode="read", quiz=null, picked=null;
const $ = id => document.getElementById(id);

/* ============================================================
   MISTOUCH GUARD
   A finger on an 86" board lands heavy and often twice. Any tap
   repeated on the same control inside 320ms is the board, not a
   decision, so it is dropped.
   ============================================================ */
const lastTap = new WeakMap();
function guard(el){
  const now = performance.now(), prev = lastTap.get(el) || 0;
  if (now - prev < 320) return false;
  lastTap.set(el, now); return true;
}
function tap(el, fn){
  if(!el) return;
  el.addEventListener("click", e => { if(!guard(el)) return; fn(e); });
}

/* ---------------- sound ---------------- */
let AC=null, soundOn=true;
function ac(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return AC; }
function tone(f,d,type="sine",vol=.1,when=0){
  if(!soundOn) return; const a=ac(); if(!a) return;
  try{
    const o=a.createOscillator(), g=a.createGain();
    o.type=type; o.frequency.value=f;
    g.gain.setValueAtTime(vol,a.currentTime+when);
    g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+when+d);
    o.connect(g); g.connect(a.destination);
    o.start(a.currentTime+when); o.stop(a.currentTime+when+d+.05);
  }catch(e){}
}
const sfx={
  tap:()=>tone(620,.06,"square",.045),
  open:()=>{tone(420,.09,"sine",.08);tone(630,.11,"sine",.08,.06);},
  ok:()=>{tone(523,.11,"sine",.12);tone(659,.11,"sine",.12,.09);tone(784,.18,"sine",.12,.18);},
  no:()=>{tone(200,.22,"sawtooth",.07);tone(165,.26,"sawtooth",.07,.09);},
  win:()=>{[523,659,784,1046].forEach((f,i)=>tone(f,.2,"triangle",.11,i*.1));},
  tick:()=>tone(880,.04,"square",.03),
  bell:()=>{[880,880,880,1100].forEach((f,i)=>tone(f,.16,"square",.1,i*.2));},
  spin:()=>tone(440+Math.random()*380,.04,"square",.04)
};

/* ---------------- grid ---------------- */
function matches(ch){
  if(filter==="all") return true;
  if(filter==="done") return done.has(ch.id);
  if(filter==="film") return has(ch,"film");
  if(filter==="text") return has(ch,"text");
  if(filter==="listen") return has(ch,"listen");
  if(filter==="connect") return has(ch,"connect");
  return ch.type===filter;
}
function accent(ch){ return ch.type==="poem" ? "var(--gold-fill)" : "var(--coral)"; }
/* A mode only exists for a chapter that actually has it. No dead buttons: on a board,
   a control that does nothing is a control the teacher taps twice, then distrusts. */
function has(ch,k){
  if(k==="film")    return !!videoURL(ch.video);
  if(k==="text")    return !!lessonURL(ch);
  if(k==="listen")  return !!TRANSCRIPTS[ch.id];
  if(k==="connect") return !!LINKS[ch.id];
  return true;
}

/* One card body, used on the bank and in the filtered grid alike. */
function cardEl(ch){
  const isDone=done.has(ch.id);
  const el=document.createElement("article");
  el.className="card"+(isDone?" done":"");
  el.style.setProperty("--accent",accent(ch));
  el.innerHTML=`
    <div class="hd">
      <span class="no mono">${String(ch.n).padStart(2,"0")}</span>
      <span class="em" aria-hidden="true">${ch.emoji}</span>
    </div>
    <h3>${ch.title}</h3>
    ${ch.by?`<p class="by">${ch.by}</p>`:``}
    <div class="meta">
      <span class="tag ${ch.type}">${ch.genre}</span>
      ${has(ch,"film")?`<span class="tag film">▶ Film</span>`:``}
      ${isDone?`<span class="tag ok">✓ Read</span>`:``}
    </div>
    <div class="jump"></div>`;
  const jump=el.querySelector(".jump");
  MODES.filter(m=>has(ch,m.k)).forEach(m=>{
    const b=document.createElement("button");
    b.className="jbtn"+(m.k==="film"||m.k==="text"?" key":"");
    b.innerHTML=`<span class="ji" aria-hidden="true">${m.i}</span>${m.t}`;
    b.setAttribute("aria-label",`${ch.title} — ${m.t}`);
    tap(b,()=>openCon(ch,m.k));
    jump.appendChild(b);
  });
  return el;
}

/* The journey: source at the top, sea at the bottom, prose on one bank and
   poems on the other — the meander is the book's own prose/poem alternation. */
function renderRiver(){
  const v=$("valley");
  v.querySelectorAll(".stop").forEach(n=>n.remove());
  const frag=document.createDocumentFragment();
  CHAPTERS.forEach((ch,i)=>{
    const stop=document.createElement("div");
    stop.className="stop"+(ch.type==="poem"?" right":"")+(done.has(ch.id)?" done":"");
    stop.style.setProperty("--accent",accent(ch));
    stop.style.gridRow=String(i+1);
    const node=document.createElement("span"); node.className="node"; node.setAttribute("aria-hidden","true");
    const jetty=document.createElement("span"); jetty.className="jetty"; jetty.setAttribute("aria-hidden","true");
    stop.appendChild(cardEl(ch)); stop.appendChild(jetty); stop.appendChild(node);
    frag.appendChild(stop);
  });
  v.appendChild(frag);
}

function renderGrid(){
  /* the journey only means anything unfiltered; a filter is a shortlist, so show a plain shelf */
  const river = filter==="all";
  $("valley").classList.toggle("hidden",!river);
  $("grid").classList.toggle("hidden",river);
  if(river){ renderRiver(); return; }
  const grid=$("grid"), list=CHAPTERS.filter(matches);
  grid.innerHTML="";
  if(!list.length){
    grid.innerHTML=`<div class="empty"><div class="eb" aria-hidden="true">🪷</div>
      <p style="font-size:1.15em;font-weight:600;color:var(--ink)">Nothing here yet.</p>
      <p style="margin-top:8px">Open a chapter and mark it read to fill this shelf.</p></div>`;
    return;
  }
  const frag=document.createDocumentFragment();
  list.forEach(ch=>frag.appendChild(cardEl(ch)));
  grid.appendChild(frag);
}

/* ---------------- river rail ---------------- */
function renderRail(){
  const rail=$("rail"); rail.innerHTML="";
  const frag=document.createDocumentFragment();
  CHAPTERS.forEach(ch=>{
    const b=document.createElement("button");
    const film=!!videoURL(ch.video);
    b.className="stn"+(done.has(ch.id)?" done":"")+(film?" film":"");
    b.innerHTML=`<span class="sn">${String(ch.n).padStart(2,"0")}</span><span class="sd" aria-hidden="true"></span>`;
    b.setAttribute("aria-label",`Chapter ${ch.n}: ${ch.title}${done.has(ch.id)?" (read)":""}`);
    tap(b,()=>openCon(ch,"read"));
    frag.appendChild(b);
  });
  rail.appendChild(frag);
}

function paintProgress(){
  const pct=TOTAL?(done.size/TOTAL)*100:0;
  $("gbar").style.width=pct+"%";
  $("grd").textContent = done.size===TOTAL ? `${TOTAL}/${TOTAL} · SEA REACHED` : `${done.size}/${TOTAL}`;
  $("cDone").textContent=done.size;
  $("cFilm").textContent=N_FILM;
  $("cText").textContent=N_TEXT;
  $("cListen").textContent=N_LISTEN;
  $("cConn").textContent=N_CONN;
  document.querySelector('#filters [data-f="prose"] .ct').textContent=N_PROSE;
  document.querySelector('#filters [data-f="poem"] .ct').textContent=N_POEM;
  document.querySelector('#filters [data-f="all"] .ct').textContent=TOTAL;
}

/* ---------------- console ---------------- */
function openCon(ch,k="read"){
  cur=ch; mode=k;
  const con=$("con");
  con.style.setProperty("--accent",accent(ch));
  $("conNo").textContent=String(ch.n).padStart(2,"0");
  $("conNo").style.color=accent(ch);
  $("conEm").textContent=ch.emoji;
  $("conTitle").textContent=ch.title;
  const film=!!videoURL(ch.video);
  $("conMeta").innerHTML=`<span class="tag ${ch.type}">${ch.genre}</span>${film?`<span class="tag film">▶ Film</span>`:``}${done.has(ch.id)?`<span class="tag ok">✓ Read</span>`:``}`;
  renderModes();
  renderMode(k);
  con.classList.add("open");
  document.body.style.overflow="hidden";
  sfx.open();
}
function closeCon(){
  clearT();
  $("con").classList.remove("open");
  document.body.style.overflow="";
  cur=null;
  renderGrid(); renderRail(); paintProgress();
}
function renderModes(){
  const bar=$("modes"); bar.innerHTML="";
  const back=document.createElement("button");
  back.className="mb back"; back.innerHTML=`<span class="mi" aria-hidden="true">◀</span>All`;
  back.setAttribute("aria-label","Back to all chapters");
  tap(back,closeCon); bar.appendChild(back);

  MODES.filter(m=>has(cur,m.k)).forEach(m=>{
    const b=document.createElement("button");
    b.className="mb"+(m.k==="film"||m.k==="text"?" film":"");
    b.setAttribute("role","tab");
    b.setAttribute("aria-selected", String(m.k===mode));
    b.innerHTML=`<span class="mi" aria-hidden="true">${m.i}</span>${m.t}`;
    tap(b,()=>{ mode=m.k; renderModes(); renderMode(m.k); sfx.tap(); });
    bar.appendChild(b);
  });

  const rd=document.createElement("button");
  rd.className="mb"; rd.style.background=done.has(cur.id)?"var(--grape)":"var(--card)";
  rd.style.color=done.has(cur.id)?"#fff":"var(--ink)";
  rd.innerHTML=`<span class="mi" aria-hidden="true">${done.has(cur.id)?"✓":"○"}</span>${done.has(cur.id)?"Read":"Mark"}`;
  tap(rd,toggleDone); bar.appendChild(rd);
}
function compBanner(k){
  const m=MODES.find(x=>x.k===k);
  return `<div class="comp">
      <div class="cr"><span class="cl" title="${NCF_NOTE}">NCF ${m.code}</span><span class="cd">${m.cd}</span></div>
      <span class="ncf">“${m.ncf}”</span>
    </div>`;
}
function renderMode(k){
  const b=$("conBody"), ch=cur;
  clearT();   /* any running quiz timer dies when the mode changes */
  if(k==="film"){ b.innerHTML=`<div class="pane">${compBanner(k)}</div>`; playFilm(ch); return; }
  if(k==="text"){
    const u=lessonURL(ch), ap=appendixURL(ch.unit);
    b.innerHTML=`<div class="pane wide">${compBanner(k)}
      <div class="pdfw" id="pdfw"><iframe class="pdf" src="${u}" title="${ch.title} — full chapter text" loading="lazy"></iframe></div>
      <div class="row">
        <button class="btn go" id="pdfFs">⛶ Fullscreen on the board</button>
        <a class="btn" href="${u}" target="_blank" rel="noopener noreferrer nofollow">↗ Open in a new tab</a>
        <a class="btn warm" href="${ap}" target="_blank" rel="noopener noreferrer nofollow">📻 Listening transcript</a>
      </div>
      <p style="margin-top:14px;font-size:.8em;color:var(--ink-soft);line-height:1.6">
        Unit ${ch.unit}, opening at page ${ch.page}. The NCERT book prints each unit as one file, so this reader
        also holds ${ch.type==="poem"?"the prose piece that opens the unit":"the poem that closes the unit"} — just scroll.
        Text © NCERT, <b>Kaveri, Textbook of English for Grade 9</b>, shown for classroom instruction.
        On an iPhone the inline reader can be limited; use <b>Open in a new tab</b> there.</p></div>`;
    tap($("pdfFs"),()=>{ fsReq($("pdfw")).catch(()=>toast("Fullscreen was blocked — use the new tab.")); });
    b.scrollTop=0; return;
  }
  if(k==="read"){
    b.innerHTML=`<div class="pane">${compBanner(k)}
      ${ch.by?`<p class="byline">by <b>${ch.by}</b></p>`:``}
      <p class="prose">${ch.summary}</p>
      <div class="themes">${ch.themes.map(t=>`<span class="th">${t}</span>`).join("")}</div></div>`;
  }
  else if(k==="quiz"){ startQuiz(); }
  else if(k==="talk"){
    b.innerHTML=`<div class="pane">${compBanner(k)}
      ${ch.discuss.map((d,i)=>`<div class="dq" data-i="${i}"><span class="qi">Q${i+1}</span>${d}</div>`).join("")}
      <div class="tps">
        <div class="st"><b>30s</b>Think alone</div>
        <div class="st"><b>60s</b>Pair up</div>
        <div class="st"><b>Share</b>With the class</div>
      </div>
      <div class="row">
        <button class="btn go" id="dRand">🎲 Surprise question</button>
        <button class="btn warm" id="dTps">⏱ Run Think-Pair-Share</button>
      </div></div>`;
    tap($("dRand"),()=>{
      sfx.spin();
      const cards=b.querySelectorAll(".dq");
      cards.forEach(c=>c.classList.remove("spot"));
      cards[Math.floor(Math.random()*cards.length)].classList.add("spot");
      sfx.win();
    });
    tap($("dTps"),()=>{ openSheet("shTime"); setTimer(120); });
  }
  else if(k==="listen"){ renderListen(ch); return; }
  else if(k==="connect"){
    const L=LINKS[ch.id];
    b.innerHTML=`<div class="pane wide">${compBanner(k)}
      ${L.subjects?.length?`<div class="blk"><h4><span aria-hidden="true">🔗</span> This connects to</h4>
        <div class="subs">${L.subjects.map(x=>`<div class="sub-i"><span class="sb">${x.s}</span><span>${x.t}</span></div>`).join("")}</div></div>`:``}
      ${L.careers?.length?`<div class="blk"><h4><span aria-hidden="true">🎯</span> Work this could turn into</h4>
        <div class="jobs">${L.careers.map(c=>`<span class="job">${c}</span>`).join("")}</div></div>`:``}
      ${L.fact?`<div class="blk"><h4><span aria-hidden="true">💡</span> Did you know</h4>
        <div class="fact">${L.fact}${L.factSrc?`<div class="src">Source: <a href="${L.factSrc}" target="_blank" rel="noopener noreferrer nofollow">${L.factSrcName||"reference"}</a></div>`:``}</div></div>`:``}
      ${L.iks?`<div class="blk"><h4><span aria-hidden="true">🪔</span> Rooted in India</h4>
        <div class="iks">${L.iks}</div></div>`:``}
      </div>`;
    b.scrollTop=0; return;
  }
  else if(k==="words"){
    b.innerHTML=`<div class="pane wide">${compBanner(k)}
      <div class="wgrid">${ch.words.map(w=>`
        <button class="wc" aria-label="Reveal the meaning of ${w.w}">
          <span class="w">${w.w}</span><span class="h">Tap to reveal</span><span class="m">${w.m}</span>
        </button>`).join("")}</div>
      <p style="margin-top:20px;color:var(--ink-soft);font-weight:600;font-size:.95em">🎯 Challenge: use each word in one sentence about your own life.</p></div>`;
    b.querySelectorAll(".wc").forEach(c=>tap(c,()=>{ c.classList.toggle("flip"); sfx.tap(); }));
  }
  else if(k==="do"){
    b.innerHTML=`<div class="pane">${compBanner(k)}
      <div class="act"><div class="al">Learning beyond the text</div>${ch.activity}</div>
      <div class="row">
        <button class="btn go" id="aT">⏱ Activity timer</button>
        <button class="btn warm" id="aTm">🏆 Award points</button>
      </div></div>`;
    tap($("aT"),()=>{ openSheet("shTime"); setTimer(300); });
    tap($("aTm"),()=>{ openSheet("shTeam"); paintTeams(); });
  }
  b.scrollTop=0;
}

/* ============================================================
   QUIZ — it runs itself, so the teacher can teach
   One tap picks depth (10 / 20 / all). After that it is hands-off:
   each question counts down; the instant an answer is tapped OR the
   timer runs out, the correct answer is held for 5 seconds together
   with the line from the text that proves it, then it advances on
   its own. A single, always-visible Pause freezes whichever
   countdown is live — because five seconds is not enough for a
   teacher reading a question aloud and explaining why B is wrong.

   shuffled() stays: it re-randomises option order at render time, so
   the old B/C answer bias cannot come back no matter what the 800
   generated questions happen to contain.
   ============================================================ */
const ANSWER_SECS=25, REVEAL_SECS=5;

function shuffled(q){
  const idx=q.opts.map((_,i)=>i);
  for(let i=idx.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [idx[i],idx[j]]=[idx[j],idx[i]]; }
  return { text:q.q, opts:idx.map(i=>q.opts[i]), a:idx.indexOf(q.a), tag:q.tag||"Comprehension", quote:q.quote||"" };
}
function quizBank(){ const b=(typeof QUIZBANK!=="undefined")&&QUIZBANK[cur.id]; return (b&&b.length)?b:(cur.quiz||[]); }

/* one pausable, wall-clock countdown at a time. Wall-clock so a backgrounded
   tab cannot desync it; pause stores the remaining time and resume restarts. */
function clearT(){ if(quiz&&quiz.t){ clearInterval(quiz.t.id); quiz.t=null; } }
function startT(secs,onTick,onDone){
  clearT();
  const t={ id:null, total:secs*1000, remain:secs*1000, deadline:Date.now()+secs*1000 };
  quiz.t=t;
  const tick=()=>{
    if(quiz.paused) return;
    const left=Math.max(0,t.deadline-Date.now());
    onTick(left,t.total);
    if(left<=0){ clearT(); onDone(); }
  };
  t.id=setInterval(tick,200); tick();
}
function setPauseUI(p){
  const el=$("qPause"); if(el){ el.innerHTML=p?"▶ Resume":(quiz.phase==="reveal"?"⏸ Hold":"⏸ Pause"); el.classList.toggle("on",p); }
  const bar=$("qbar"); if(bar) bar.classList.toggle("held",p);
}
function pauseQuiz(){
  if(!quiz||!quiz.t) return;
  if(quiz.paused){ quiz.paused=false; quiz.t.deadline=Date.now()+quiz.t.remain; setPauseUI(false); }
  else { quiz.paused=true; quiz.t.remain=Math.max(0,quiz.t.deadline-Date.now()); setPauseUI(true); }
}

function startQuiz(){
  clearT();
  const bank=quizBank(), N=bank.length, b=$("conBody");
  if(!N){ b.innerHTML=`<div class="pane">${compBanner("quiz")}<p class="prose">No questions yet for this chapter.</p></div>`; return; }
  const picks=[10,20,N].filter((v,i,a)=>v<=N && a.indexOf(v)===i);
  b.innerHTML=`<div class="pane">${compBanner("quiz")}
    <div class="qstart">
      <div class="qs-em" aria-hidden="true">🧠</div>
      <h3>${N} question${N>1?"s":""} ready</h3>
      <p>Every answer is checked against the chapter text. Pick how many to run — it plays itself, hands-free.</p>
      <div class="qs-pick">${picks.map(v=>`<button class="btn go qs-n" data-n="${v}">${v===N&&N>1?`All ${N}`:v}</button>`).join("")}</div>
      <p class="qs-note">Tap an answer, or let the timer run. The right answer holds for ${REVEAL_SECS}s with the line from the text, then it moves on. Pause any time.</p>
    </div></div>`;
  b.querySelectorAll(".qs-n").forEach(x=>tap(x,()=>runQuiz(+x.dataset.n)));
  b.scrollTop=0;
}
function runQuiz(depth){
  const bank=quizBank().slice();
  for(let i=bank.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [bank[i],bank[j]]=[bank[j],bank[i]]; }
  const qs=bank.slice(0,depth).map(shuffled);
  quiz={ i:0, score:0, res:[], qs, pool:quizBank().length, phase:null, paused:false, t:null };
  drawQ();
}
function drawQ(){
  const b=$("conBody"), st=quiz;
  if(st.i>=st.qs.length) return drawRes();
  const q=st.qs[st.i]; st.phase="answer"; st.paused=false;
  b.innerHTML=`<div class="pane">
    <div class="qhd">
      <span class="qn mono">Q ${st.i+1} / ${st.qs.length}${st.pool>st.qs.length?` · of ${st.pool}`:``}</span>
      <span class="qtag">${q.tag}</span>
      <span class="qcount mono" id="qcount"></span>
      <span class="dots">${st.qs.map((_,j)=>`<i class="${j<st.res.length?(st.res[j]?"ok":"no"):(j===st.i?"now":"")}"></i>`).join("")}</span>
    </div>
    <div class="qbarwrap" aria-hidden="true"><i class="qbar" id="qbar"></i></div>
    <p class="qq">${q.text}</p>
    <div id="opts"></div>
    <div class="qfoot"><button class="btn qpause" id="qPause">⏸ Pause</button></div></div>`;
  const wrap=$("opts");
  q.opts.forEach((o,j)=>{
    const btn=document.createElement("button");
    btn.className="opt"; btn.dataset.j=j;
    btn.innerHTML=`<span class="kx">${String.fromCharCode(65+j)}</span><span>${o}</span>`;
    tap(btn,()=>reveal(j));
    wrap.appendChild(btn);
  });
  tap($("qPause"),pauseQuiz);
  startT(ANSWER_SECS,
    (left,total)=>{ const bar=$("qbar"); if(bar) bar.style.width=(left/total*100)+"%"; const c=$("qcount"); if(c) c.textContent=Math.ceil(left/1000)+"s"; },
    ()=>reveal(null));
  b.scrollTop=0;
}
function reveal(j){
  const st=quiz; if(!st||st.phase!=="answer") return;   /* ignore the answer-timer firing after a tap, and double taps */
  clearT(); st.phase="reveal"; st.paused=false;
  const q=st.qs[st.i], right=(j===q.a);
  const all=$("opts").querySelectorAll(".opt");
  all.forEach((el,i2)=>{
    el.disabled=true; el.classList.add("dim");
    /* correctness is a word AND a glyph, never colour alone — the back row and the colour-blind both read it */
    if(i2===q.a){ el.classList.remove("dim"); el.classList.add("ok"); el.insertAdjacentHTML("beforeend",`<span class="vd">✓ Correct</span>`); }
  });
  if(j!=null && !right){ all[j].classList.remove("dim"); all[j].classList.add("no"); all[j].insertAdjacentHTML("beforeend",`<span class="vd">✗ Not this</span>`); }
  st.res.push(right);
  right?sfx.ok():sfx.no();
  /* the line from the book that proves the answer — grounding, shown to the whole class */
  if(q.quote) $("opts").insertAdjacentHTML("beforeend",`<div class="qsrc"><b>From the text:</b> “${q.quote}”</div>`);
  const last=st.i+1>=st.qs.length;
  tap($("qPause"),pauseQuiz); setPauseUI(false);
  startT(REVEAL_SECS,
    (left)=>{ const c=$("qcount"); if(c) c.textContent=(last?"Result in ":"Next in ")+Math.ceil(left/1000)+"s"; },
    ()=>{ st.i++; drawQ(); });
  /* one tap anywhere in the reveal HOLDS it — a teacher mid-explanation should not be raced.
     Options are disabled and the Pause button handles its own toggle, so both are excluded. */
  const pane=$("conBody").querySelector(".pane");
  pane.addEventListener("click",(e)=>{
    if(e.target.closest("#qPause")||e.target.closest(".opt")) return;
    if(!quiz.paused) pauseQuiz();
  });
}
function drawRes(){
  clearT();
  const st=quiz, b=$("conBody"), n=st.qs.length, pct=st.score=st.res.filter(Boolean).length, f=n?pct/n:0;
  const face=f===1?"🏆":f>=.67?"🌊":f>=.34?"💪":"🌱";
  const msg=f===1?"Perfect. Every one.":f>=.67?"Strong. One more read and it's perfect.":f>=.34?"Halfway. Reread and come back.":"No stress. Read it again, then retry.";
  b.innerHTML=`<div class="pane"><div class="res">
    <div class="big" aria-hidden="true">${face}</div>
    <h3>${pct} / ${n} correct</h3>
    <p>${msg}</p>
    <div class="row" style="justify-content:center">
      <button class="btn" id="qA">🌊 +1 Kaveri</button>
      <button class="btn" id="qB">🔥 +1 Laterite</button>
      <button class="btn go" id="qR">↺ New set</button>
    </div>
    <p style="margin-top:16px;font-size:.85em;color:var(--ink-soft)">${st.pool>n?`Drawn from a bank of ${st.pool}. A new set reshuffles both the questions and their options.`:`Options reshuffle on every attempt.`}</p>
  </div></div>`;
  if(f===1){ sfx.win(); confetti(50); } else if(f>=.67){ sfx.win(); confetti(22); }
  tap($("qA"),()=>{ bump("A",1); toast("🌊 Point to Team Kaveri"); });
  tap($("qB"),()=>{ bump("B",1); toast("🔥 Point to Team Laterite"); });
  tap($("qR"),startQuiz);
}

/* ---------------- progress ---------------- */
function toggleDone(){
  if(!cur) return;
  const was=done.has(cur.id);
  was?done.delete(cur.id):done.add(cur.id);
  LS.set(K_DONE,[...done]);
  paintProgress(); renderModes();
  $("conMeta").innerHTML=`<span class="tag ${cur.type}">${cur.genre}</span>${videoURL(cur.video)?`<span class="tag film">▶ Film</span>`:``}${done.has(cur.id)?`<span class="tag ok">✓ Read</span>`:``}`;
  if(!was){
    confetti(); sfx.win();
    toast(["Downstream. 🌊","Logged. ✓","Chapter cleared.","One more station."][Math.floor(Math.random()*4)]);
    if(done.size===TOTAL) setTimeout(()=>{ confetti(80); toast("All "+TOTAL+" chapters. You reached the sea. 🏆"); },600);
  }
}

/* ---------------- sheets ---------------- */
function openSheet(id){ $(id).classList.add("open"); sfx.open(); }
function closeSheets(){ document.querySelectorAll(".sheet.open").forEach(s=>s.classList.remove("open")); }
document.querySelectorAll("[data-x]").forEach(b=>tap(b,()=>$(b.dataset.x).classList.remove("open")));
document.querySelectorAll(".sheet").forEach(s=>s.addEventListener("click",e=>{ if(e.target===s) s.classList.remove("open"); }));

/* ============================================================
   TIMER
   Driven off wall-clock deltas, not a tick counter. A background
   tab gets throttled to roughly one tick a minute, which used to
   leave a five-minute activity timer reading five minutes late.
   ============================================================ */
const CIRC=2*Math.PI*96;
let tTotal=120, tEnd=0, tLeft=120, tInt=null;
$("tpg").style.strokeDasharray=CIRC; $("tpg").style.strokeDashoffset=0;
const fmt=s=>Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0");
function paintTimer(){
  $("tnum").textContent=fmt(tLeft);
  $("tnum").classList.toggle("end",tLeft<=10&&tLeft>0);
  $("tpg").style.strokeDashoffset=CIRC*(1-(tTotal?tLeft/tTotal:0));
}
function setTimer(s){ clearInterval(tInt); tInt=null; tTotal=s; tLeft=s; paintTimer(); $("tGo").textContent="▶ Start"; }
function tickTimer(){
  tLeft=Math.max(0,Math.round((tEnd-Date.now())/1000));
  if(tLeft<=10&&tLeft>0) sfx.tick();
  paintTimer();
  if(tLeft<=0){
    clearInterval(tInt); tInt=null; $("tGo").textContent="▶ Start";
    sfx.bell(); confetti(40); toast("⏰ Time's up. Pens down.");
  }
}
tap($("tGo"),()=>{
  if(tInt){ clearInterval(tInt); tInt=null; $("tGo").textContent="▶ Resume"; }
  else{
    if(tLeft<=0) tLeft=tTotal;
    tEnd=Date.now()+tLeft*1000;
    tInt=setInterval(tickTimer,250); $("tGo").textContent="⏸ Pause";
  }
  sfx.tap();
});
tap($("tRe"),()=>{ setTimer(tTotal); sfx.tap(); });
document.querySelectorAll("[data-min]").forEach(b=>tap(b,()=>{ setTimer(+b.dataset.min*60); sfx.tap(); }));
setTimer(120);

/* ---------------- picker ---------------- */
tap($("pkGo"),()=>{
  const card=$("pk"); $("pkOpen").classList.add("hidden"); card.classList.remove("land");
  /* six frames, not twenty-five: enough to read as a draw, cheap enough for the panel */
  let steps=0;
  (function step(){
    const ch=CHAPTERS[Math.floor(Math.random()*TOTAL)];
    card.innerHTML=`<span class="pe" aria-hidden="true">${ch.emoji}</span>${ch.title}`;
    sfx.spin(); steps++;
    if(steps<6) setTimeout(step,110);
    else{
      picked=ch; card.classList.add("land"); sfx.win();
      $("pkOpen").classList.remove("hidden"); $("pkGo").textContent="🎲 Again";
    }
  })();
});
tap($("pkOpen"),()=>{ closeSheets(); if(picked) openCon(picked,"read"); });

/* ---------------- teams ---------------- */
function paintTeams(){
  $("svA").textContent=teams.A; $("svB").textContent=teams.B;
  $("tmA").querySelector(".cr")?.remove(); $("tmB").querySelector(".cr")?.remove();
  if(teams.A!==teams.B){
    const c=document.createElement("div"); c.className="cr"; c.textContent="👑"; c.setAttribute("aria-label","leading");
    $(teams.A>teams.B?"tmA":"tmB").appendChild(c);
  }
}
function bump(t,d){
  teams[t]=Math.max(0,teams[t]+d);
  LS.set(K_TEAM,teams); paintTeams();
  const el=$(t==="A"?"svA":"svB");
  if(d>0){ sfx.ok(); confetti(8); } else sfx.tap();
}
document.querySelectorAll(".tb").forEach(b=>tap(b,()=>bump(b.dataset.t,+b.dataset.d)));
/* wiping live scores is unrecoverable, so it takes two deliberate taps — a stray palm can't do it */
let armed=false, armT=null;
tap($("tmRe"),()=>{
  const b=$("tmRe");
  if(!armed){
    armed=true; b.textContent="⚠ Tap again to wipe scores"; b.classList.add("danger");
    clearTimeout(armT); armT=setTimeout(()=>{ armed=false; b.textContent="↺ New game"; b.classList.remove("danger"); },3000);
    return;
  }
  armed=false; clearTimeout(armT);
  b.textContent="↺ New game"; b.classList.remove("danger");
  teams={A:0,B:0}; LS.set(K_TEAM,teams); paintTeams(); toast("🏆 New game. Scores reset.");
});

/* ---------------- spark ---------------- */
function newSpark(){
  const ch=CHAPTERS[Math.floor(Math.random()*TOTAL)];
  const q=ch.discuss[Math.floor(Math.random()*ch.discuss.length)];
  $("spk").innerHTML=`<span class="qi">${ch.emoji} ${ch.title}</span><br>${q}`;
  sfx.open();
}
tap($("spkGo"),newSpark);
tap($("spkT"),()=>{ closeSheets(); openSheet("shTime"); setTimer(120); });

/* ============================================================
   FILM PLAYER
   Fullscreen on tap, and it exits itself when the film ends so
   the teacher never has to walk back to the board to dismiss it.
   ============================================================ */
const vp=$("vp"), vv=$("vv"), vld=$("vld"), vldm=$("vldm"), vcr=$("vcr");
function fsReq(el){ const f=el.requestFullscreen||el.webkitRequestFullscreen||el.msRequestFullscreen; return f?Promise.resolve(f.call(el)):Promise.reject(); }
function fsEl(){ return document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement; }
function fsOut(){ if(!fsEl()) return; const f=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen; if(f) try{ f.call(document); }catch(e){} }

function playFilm(ch){
  const url=videoURL(ch.video); if(!url) return;
  vcr.innerHTML=`🎬 <b>${ch.title}</b><br>Film courtesy of <b>The Learners' Deck</b> (YouTube · @TheLearnersDeck) · © original creator · shown for classroom teaching`;
  vldm.textContent="Loading the film…";
  vld.classList.remove("hidden");
  vv.src=url;
  vp.classList.add("open");
  /* fullscreen the container so the credit rides along; iPhone only permits it on the
     <video>, so fall back to that. If both are refused the player still fills the viewport. */
  fsReq(vp).catch(()=>{ if(vv.webkitEnterFullscreen) try{ vv.webkitEnterFullscreen(); }catch(e){} });
  vv.play().catch(()=>{});
}
function closeFilm(){
  if(!vp.classList.contains("open")) return;
  vp.classList.remove("open");        /* dropped first so the fullscreenchange handler can't re-enter */
  vv.pause(); vv.removeAttribute("src"); vv.load();   /* stops the buffer — a half-watched 50MB film stops costing egress */
  fsOut();
  if(cur && mode==="film"){ mode="read"; renderModes(); renderMode("read"); }
}
vv.addEventListener("playing",()=>vld.classList.add("hidden"));
vv.addEventListener("ended",()=>{ closeFilm(); sfx.win(); confetti(30); toast("🎬 That's a wrap."); });
vv.addEventListener("error",()=>{
  if(!vv.getAttribute("src")) return;      /* our own load() on close fires one of these; ignore it */
  vld.classList.remove("hidden");
  vldm.innerHTML="⚠️ Couldn't load the film.<br><span style='font-size:.8em;font-weight:500'>Check the connection, close and try again.</span>";
});
tap($("vx"),closeFilm);
["fullscreenchange","webkitfullscreenchange","msfullscreenchange"].forEach(e=>
  document.addEventListener(e,()=>{ if(!fsEl()) closeFilm(); }));

/* ---------------- board mode ---------------- */
const K_BOARD="kaveri_board_v1";
function setBoard(on){
  document.body.classList.toggle("board",on);
  $("dBoard").setAttribute("aria-pressed",String(on));
  LS.set(K_BOARD,on);
}
tap($("dExam"),()=>openSheet("shExam"));
tap($("dBoard"),()=>{
  const on=!document.body.classList.contains("board");
  setBoard(on); sfx.tap();
  toast(on?"📺 Board mode on — sized for the back bench":"📺 Board mode off");
});
setBoard(LS.get(K_BOARD,false)===true);

/* ---------------- keyboard ---------------- */
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape") return;
  if(vp.classList.contains("open")){ closeFilm(); return; }      /* film sits on top; it goes first */
  if(document.querySelector(".sheet.open")){ closeSheets(); return; }
  if($("con").classList.contains("open")) closeCon();
});

/* ---------------- filters + dock ---------------- */
document.querySelectorAll("#filters .chip").forEach(c=>tap(c,()=>{
  document.querySelectorAll("#filters .chip").forEach(x=>x.setAttribute("aria-pressed","false"));
  c.setAttribute("aria-pressed","true");
  filter=c.dataset.f; renderGrid(); sfx.tap();
}));
tap($("dPick"),()=>openSheet("shPick"));
tap($("dTime"),()=>openSheet("shTime"));
tap($("dTeam"),()=>{ openSheet("shTeam"); paintTeams(); });
tap($("dSpark"),()=>{ openSheet("shSpark"); newSpark(); });

/* ---------------- flourish ---------------- */
/* Confetti was 30-80 animated nodes falling across the whole panel — the single
   worst thing you can hand a smartboard SoC mid-lesson. The toast and the sound
   already carry the win, so it is gone rather than merely reduced. */
function confetti(){}
let toastT;
function toast(m){
  const t=$("toast"); t.textContent=m; t.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),2500);
}

/* ---------------- boot ----------------
   No splash gate. A teacher opens this five days a week and a
   tap-to-enter screen is pure friction; the content is the door. */
renderGrid(); renderRail(); paintProgress();
