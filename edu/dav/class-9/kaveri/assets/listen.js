/* ============================================================
   LISTEN — the board reads the transcript aloud
   Uses the browser's own speech engine: no audio files, no
   library, nothing to host, and it still works on GitHub Pages.
   Sentences are spoken as separate short utterances for two
   reasons: Chrome silently drops a long one after ~15s, and
   chunking is what lets the class follow a highlighted line.
   ============================================================ */
const SP = { chunks:[], i:0, on:false, rate:0.9, voice:null };

const sentences = t => (t.match(/[^.!?]+[.!?]+["']?|\S[^.!?]*$/g) || [t]).map(s=>s.trim()).filter(Boolean);

function pickVoice(){
  const vs = speechSynthesis.getVoices() || [];
  /* an Indian English voice first — it is the accent the class actually hears */
  return vs.find(v=>/^en[-_]IN$/i.test(v.lang))
      || vs.find(v=>/en[-_]IN/i.test(v.lang))
      || vs.find(v=>/^en[-_]GB$/i.test(v.lang))
      || vs.find(v=>/^en/i.test(v.lang)) || null;
}
if("speechSynthesis" in window){
  speechSynthesis.addEventListener("voiceschanged",()=>{ SP.voice=pickVoice(); });
  SP.voice=pickVoice();
}

function paintLine(){
  document.querySelectorAll(".ln").forEach((el,i)=>el.classList.toggle("said", i===SP.i));
  const el=document.querySelector(".ln.said");
  if(el) el.scrollIntoView({block:"center",behavior:"auto"});   /* auto, not smooth: a smooth scroll per spoken line stutters the panel */
}
function speakFrom(i){
  if(!("speechSynthesis" in window)) return;
  if(i>=SP.chunks.length){ stopSpeak(true); return; }
  SP.i=i; paintLine();
  const u=new SpeechSynthesisUtterance(SP.chunks[i]);
  u.rate=SP.rate; u.pitch=1;
  if(SP.voice) { u.voice=SP.voice; u.lang=SP.voice.lang; } else u.lang="en-IN";
  u.onend=()=>{ if(SP.on) speakFrom(i+1); };
  u.onerror=()=>{ if(SP.on) speakFrom(i+1); };   /* one bad chunk must not end the lesson */
  speechSynthesis.speak(u);
}
function startSpeak(from=SP.i){
  if(!("speechSynthesis" in window)){ toast("This browser can't read aloud — the text is below."); return; }
  speechSynthesis.cancel();
  SP.on=true; setPlayBtn(true); speakFrom(from);
}
function stopSpeak(finished=false){
  SP.on=false;
  try{ speechSynthesis.cancel(); }catch(e){}
  setPlayBtn(false);
  if(finished){ SP.i=0; document.querySelectorAll(".ln").forEach(el=>el.classList.remove("said")); toast("🎧 Transcript finished."); }
}
function setPlayBtn(on){
  const b=$("spPlay"); if(!b) return;
  b.innerHTML = on ? `⏸ Pause` : (SP.i>0 ? `▶ Resume` : `▶ Listen`);
  b.classList.toggle("on",on);
}

function renderListen(ch){
  const b=$("conBody"), text=TRANSCRIPTS[ch.id]||"";
  SP.chunks=sentences(text); SP.i=0; SP.on=false;
  const supported = "speechSynthesis" in window;
  b.innerHTML=`<div class="pane">${compBanner("listen")}
    <div class="row" style="margin-top:0">
      <button class="btn go" id="spPlay">▶ Listen</button>
      <button class="btn" id="spStop">■ Stop</button>
      <button class="btn" id="spSlow">🐢 Slower</button>
      <button class="btn" id="spFast">🐇 Faster</button>
      <span class="tag" id="spRate" style="align-self:center">0.9×</span>
    </div>
    ${supported?``:`<p class="comp" style="margin-top:16px">This browser has no speech engine, so read the transcript below aloud yourself.</p>`}
    <div class="script" id="script">${SP.chunks.map((s,i)=>`<span class="ln" data-i="${i}">${s} </span>`).join("")}</div>
    <p style="margin-top:14px;font-size:.8em;color:var(--ink-soft);line-height:1.6">
      Transcript © NCERT, <b>Kaveri</b> Grade 9 appendix (Unit ${ch.unit}). NCERT prints these to be read aloud;
      the board reads them instead. Tap any line to start from there.</p></div>`;
  tap($("spPlay"),()=>{ SP.on ? (speechSynthesis.pause(), SP.on=false, setPlayBtn(false)) : startSpeak(SP.i); });
  tap($("spStop"),()=>stopSpeak(true));
  tap($("spSlow"),()=>rate(-0.15));
  tap($("spFast"),()=>rate(+0.15));
  b.querySelectorAll(".ln").forEach(el=>tap(el,()=>{ SP.i=+el.dataset.i; startSpeak(SP.i); }));
  b.scrollTop=0;
}
function rate(d){
  SP.rate=Math.min(1.6,Math.max(0.5,+(SP.rate+d).toFixed(2)));
  $("spRate").textContent=SP.rate.toFixed(2).replace(/0$/,"")+"×";
  if(SP.on) startSpeak(SP.i);      /* restart the current line at the new speed */
  else sfx.tap();
}
