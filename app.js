/* ============================================================
// AIè¨­å®šã‚ªãƒ–ã‚¸ã‚§ã‚¯ãƒˆï¼ˆã“ã“ã‚’å¤‰ãˆã‚‹ã ã‘ã§ãƒãƒ¼ã‚¸ãƒ§ãƒ³ã‚¢ãƒƒãƒ—å¯¾å¿œï¼‰
// ============================================================ */
const AI_CONFIG = {
  gemini: {
    name:'Gemini 2.5 Flash',
    model:'gemini-2.5-flash',
    color:'var(--gemini)', avatar:'G', avatarBg:'rgba(91,143,255,0.15)',
    tag:'free', provider:'gemini', keyId:'gemini',
    desc:'Googleæœ€æ–°ã®ãƒžãƒ«ãƒãƒ¢ãƒ¼ãƒ€ãƒ«é«˜é€Ÿãƒ¢ãƒ‡ãƒ«ã€‚ãƒ†ã‚­ã‚¹ãƒˆãƒ»ç”»åƒã‚’åŒæ™‚ã«ç†è§£ã—ã€é•·æ–‡å‡¦ç†ã¨è«–ç†æŽ¨è«–ã®ãƒãƒ©ãƒ³ã‚¹ã«å„ªã‚Œã‚‹ã€‚æœ€æ–°æƒ…å ±ã«ã‚‚å¼·ã„ã€‚',
    ptags:['ðŸ–¼ ãƒžãƒ«ãƒãƒ¢ãƒ¼ãƒ€ãƒ«','âš¡ é«˜é€Ÿ','ðŸ’° ç„¡æ–™','ðŸ‡ºðŸ‡¸ Googleè£½']
  },
  gemma: {
    name:'Gemma 3 27B',
    model:'google/gemma-3-27b-it:free',
    color:'var(--deepseek)', avatar:'Gm', avatarBg:'rgba(79,195,247,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Google DeepMindè£½ã‚ªãƒ¼ãƒ—ãƒ³ãƒ¢ãƒ‡ãƒ«ã®æ±ºå®šç‰ˆã€‚128Kã®é•·æ–‡ã‚³ãƒ³ãƒ†ã‚­ã‚¹ãƒˆã¨å …å®Ÿãªæ—¥æœ¬èªžå‡¦ç†ã§ã€æ§‹é€ çš„ãƒ»è«–ç†çš„ãªè­°è«–ã‚’è½ã¡ç€ã„ã¦å±•é–‹ã™ã‚‹ã€‚',
    ptags:['ðŸ“„ 128Kæ–‡è„ˆ','ðŸ§  è«–ç†çš„','ðŸ’° ç„¡æ–™','ðŸ‡ºðŸ‡¸ Googleè£½']
  },
  gptoss: {
    name:'GPT-OSS 20B',
    model:'openai/gpt-oss-20b:free',
    color:'var(--mistral)', avatar:'O', avatarBg:'rgba(255,126,179,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'OpenAIåˆã®ã‚ªãƒ¼ãƒ—ãƒ³ã‚½ãƒ¼ã‚¹ãƒ¢ãƒ‡ãƒ«ã€‚MoEã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã§è»½é‡ãªãŒã‚‰GPTå“è³ªã®å¿œç­”ã€‚ãƒ„ãƒ¼ãƒ«ä½¿ç”¨ãƒ»æ§‹é€ åŒ–å‡ºåŠ›ã«å¯¾å¿œã€‚',
    ptags:['ðŸŒ OpenAIç³»','âš¡ MoEè»½é‡','ðŸ’° ç„¡æ–™','ðŸ‡ºðŸ‡¸ OpenAIè£½']
  },
  llama33: {
    name:'Llama 3.3 70B',
    model:'meta-llama/llama-3.3-70b-instruct:free',
    color:'var(--llama)', avatar:'L3', avatarBg:'rgba(255,179,71,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Metaè£½ã®å®šç•ªå¤§è¦æ¨¡ãƒ¢ãƒ‡ãƒ«ã€‚70Bã®åœ°åŠ›ã§å¹…åºƒã„ãƒ†ãƒ¼ãƒžã‚’å …å®Ÿã«ã“ãªã™ã€‚ãƒãƒ©ãƒ³ã‚¹åž‹ã§è­°è«–ã®åŸºç›¤ã‚’æ”¯ãˆã‚‹å®‰å®šæž ã€‚',
    ptags:['ðŸ’ª 70Bè¦æ¨¡','ðŸ¤ ãƒãƒ©ãƒ³ã‚¹åž‹','ðŸ’° ç„¡æ–™','ðŸ¦™ Metaè£½']
  },
  nemotronano: {
    name:'Nemotron Nano 9B',
    model:'nvidia/nemotron-nano-9b-v2:free',
    color:'var(--qwen)', avatar:'Nn', avatarBg:'rgba(52,211,153,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'NVIDIAè£½ã‚³ãƒ³ãƒ‘ã‚¯ãƒˆé«˜é€Ÿãƒ¢ãƒ‡ãƒ«ã€‚9BãªãŒã‚‰å³ç­”æ€§ã«å„ªã‚Œã€ã‚¹ãƒ”ãƒ¼ãƒ‰é‡è¦–ã®ãƒ–ãƒ¬ã‚¹ãƒˆã‚„çŸ­æ–‡ãƒ‡ã‚£ãƒ™ãƒ¼ãƒˆã§æ´»èºã€‚',
    ptags:['âš¡ è¶…é«˜é€Ÿå¿œç­”','ðŸŽ¯ ç°¡æ½”æ˜Žå¿«','ðŸ’° ç„¡æ–™','ðŸŸ¢ NVIDIAè£½']
  },
  qwen3: {
    name:'Qwen Plus',
    model:'qwen-plus',
    color:'var(--qwen)', avatar:'Qw', avatarBg:'rgba(52,211,153,0.15)',
    tag:'free', provider:'dashscope', keyId:'dashscope',
    desc:'Alibaba Cloud Model Studio提供のQwenフラッグシップモデル。高性能かつ100万トークン無料枚あり。OpenAI互換APIで安定利用。',
    ptags:['🌏 多言語','🧠 高性能','💰 無料枚あり','🇨🇳 Alibaba製']
  },
  glm: {
    name:'GLM 4.5 Air',
    model:'z-ai/glm-4.5-air:free',
    color:'var(--accent2)', avatar:'GL', avatarBg:'rgba(0,229,170,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Zhipu AIã®GLM 4.5 Airè»½é‡ç‰ˆã€‚å¿œç­”ãŒé€Ÿããƒãƒ©ãƒ³ã‚¹ã«å„ªã‚Œã‚‹ã€‚å¹…åºƒã„ãƒ†ãƒ¼ãƒžã§çš„ç¢ºã‹ã¤æµæš¢ãªæ—¥æœ¬èªžã‚’è¿”ã™ã€‚',
    ptags:['âš¡ é«˜é€Ÿ','ðŸ—£ æµæš¢ãªæ—¥æœ¬èªž','ðŸ’° ç„¡æ–™','ðŸ‡¨ðŸ‡³ Zhipuè£½']
  },
  deepseek: {
    name:'DeepSeek V3.2ï¼ˆãƒ„ãƒƒã‚³ãƒŸå½¹ï¼‰',
    model:'deepseek-chat',
    color:'var(--deepseek)', avatar:'DS', avatarBg:'rgba(79,195,247,0.15)',
    tag:'paid', provider:'deepseek', keyId:'deepseek',
    desc:'DeepSeekå…¬å¼APIçµŒç”±ã®é«˜é€Ÿæ±Žç”¨ãƒ¢ãƒ‡ãƒ«ã€‚å®‰ä¾¡ã‹ã¤ä½Žãƒ¬ã‚¤ãƒ†ãƒ³ã‚·ã§æ—¥æœ¬èªžã®åˆ‡ã‚Šè¿”ã—ãŒé‹­ãã€çŸ›ç›¾ã‚„ç”˜ã•ã‚’å³åº§ã«æŒ‡æ‘˜ã™ã‚‹ãƒ„ãƒƒã‚³ãƒŸå½¹ã¨ã—ã¦å ´ã‚’ç· ã‚ã‚‹ã€‚',
    ptags:['ðŸ˜ˆ é‹­ã„åˆ‡ã‚Šè¿”ã—','ðŸ’´ æ¿€å®‰','ðŸ§  é«˜æŽ¨è«–åŠ›','ðŸ‡¨ðŸ‡³ DeepSeekè£½'],
    role:'ðŸŽ­ ãƒ„ãƒƒã‚³ãƒŸå½¹'
  },
  deepseekr: {
    name:'DeepSeek R1',
    model:'deepseek-reasoner',
    color:'var(--deepseek)', avatar:'R1', avatarBg:'rgba(79,195,247,0.15)',
    tag:'paid', provider:'deepseek', keyId:'deepseek',
    desc:'DeepSeekå…¬å¼ã®R1ç³»æŽ¨è«–ãƒ¢ãƒ‡ãƒ«ã€‚Chain-of-Thoughtã§å†…çœã—ãªãŒã‚‰çµè«–ã¸è‡³ã‚‹æ€è€ƒåž‹ã€‚è¤‡é›‘ãªè«–ç†ãƒ»æ•°å­¦ãƒ»å“²å­¦çš„è­°è«–ã§çœŸä¾¡ã‚’ç™ºæ®ã€‚',
    ptags:['ðŸ§  Chain-of-Thought','ðŸ”¬ æ·±ã„æŽ¨è«–','ðŸ’´ ä½Žä¾¡æ ¼','ðŸ‡¨ðŸ‡³ DeepSeekè£½']
  },
  chatgpt: {
    name:'ChatGPT 4o',
    model:'gpt-4o',
    color:'var(--chatgpt)', avatar:'C', avatarBg:'rgba(116,170,156,0.15)',
    tag:'paid', provider:'openai', keyId:'chatgpt',
    desc:'OpenAIè£½ã®ã‚¹ã‚¿ãƒ³ãƒ€ãƒ¼ãƒ‰AIã€‚è†¨å¤§ãªçŸ¥è­˜é‡ã¨ä¸å¯§ãªèª¬æ˜Žã€ãƒãƒ©ãƒ³ã‚¹ã®å–ã‚ŒãŸæ„è¦‹ãŒå¼·ã¿ã€‚APIã‚­ãƒ¼è¨­å®šã§åˆ©ç”¨å¯èƒ½ã€‚',
    ptags:['ðŸŒ åœ§å€’çš„çŸ¥ååº¦','ðŸ¤ ãƒãƒ©ãƒ³ã‚¹åž‹','ðŸ’³ æœ‰æ–™','ðŸ‡ºðŸ‡¸ OpenAIè£½']
  },
  claude: {
    name:'Claude Sonnet',
    model:'claude-sonnet-4-5',
    color:'var(--claude)', avatar:'A', avatarBg:'rgba(212,165,116,0.15)',
    tag:'paid', provider:'claude', keyId:'claude',
    desc:'Anthropicè£½AIã€‚å€«ç†çš„è¦–ç‚¹ã¨é•·æ–‡ç†è§£ãŒæ¥­ç•Œæœ€é«˜ãƒ¬ãƒ™ãƒ«ã€‚ãƒ‹ãƒ¥ã‚¢ãƒ³ã‚¹ã‚’å¤§åˆ‡ã«ã—ãŸä¸å¯§ãªè­°è«–ãŒå¾—æ„ã€‚APIã‚­ãƒ¼è¨­å®šã§åˆ©ç”¨å¯èƒ½ã€‚',
    ptags:['ðŸ“– é•·æ–‡ç†è§£','âš–ï¸ å€«ç†çš„è¦–ç‚¹','ðŸ’³ æœ‰æ–™','ðŸ›¡ Anthropicè£½']
  }
};

const KEY_PRE = 'agora_key_';
let currentMode = 'debate';
let currentSubmode = 'brainstorm';
let selectedAIs = [];
let currentRound = 1;
let totalRounds = 3;
let sessionTheme = '';
let sessionHistory = [];
let isRunning = false;
let attachedFiles = [];
let agendaItems = [];

/* ============================================================
// åˆæœŸåŒ–
// ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildAIList();
  buildApiKeyForm();
});

/* ============================================================
// ã‚­ãƒ¼ç®¡ç†
// ============================================================ */
function getKey(keyId) { return localStorage.getItem(KEY_PRE + keyId) || ''; }
function setKey(keyId, val) { localStorage.setItem(KEY_PRE + keyId, val); }
function canUse(id) {
  const ai = AI_CONFIG[id];
  return !!getKey(ai.keyId);
}
function saveKey(keyId) {
  const inp = document.getElementById('key-' + keyId);
  const val = inp.value.trim();
  if(!val) { showToast('APIã‚­ãƒ¼ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„'); return; }
  setKey(keyId, val);
  document.getElementById('saved-' + keyId).innerHTML = '<span class="key-saved">âœ“ ä¿å­˜æ¸ˆ</span>';
  showToast('ä¿å­˜ã—ã¾ã—ãŸï¼');
  buildAIList();
}

/* ============================================================
// AIãƒªã‚¹ãƒˆæ§‹ç¯‰
// ============================================================ */
function buildAIList() {
  const container = document.getElementById('aiList');
  container.innerHTML = '';
  selectedAIs = [];
  Object.entries(AI_CONFIG).forEach(([id, ai]) => {
    const ok = canUse(id);
    if(ok) selectedAIs.push(id);
    const tagLabel = ok ? (ai.tag==='free'?'FREE':'READY') : (ai.tag==='paid'?'æœ‰æ–™ãƒ»è¦ã‚­ãƒ¼':'è¦APIã‚­ãƒ¼');
    const tagClass = ok ? 'free' : (ai.tag==='paid'?'paid':'nokey');
    const item = document.createElement('div');
    item.className = `ai-item${ok?' active':''}`;
    item.id = 'ai-' + id;
    item.style.color = ai.color;
    item.innerHTML = `
      <div class="ai-row">
        <div class="ai-av" style="background:${ai.avatarBg};color:${ai.color}">${ai.avatar}</div>
        <div class="ai-inf" onclick="toggleAI('${id}')">
          <div class="ai-nm">${ai.name} <span class="ai-tag ${tagClass}">${tagLabel}</span>${ai.role?` <span class="ai-tag free">${ai.role}</span>`:''}</div>
          <div class="ai-md">${ai.model}</div>
        </div>
        <div class="check-circle" onclick="toggleAI('${id}')">âœ“</div>
        <div class="info-btn" id="infobtn-${id}" onclick="toggleProfile('${id}')">â„¹</div>
      </div>
      <div class="ai-profile" id="prof-${id}">
        <div class="ai-profile-inner">
          <div class="ai-profile-desc">${ai.desc}</div>
          <div class="ai-profile-tags">${ai.ptags.map(t=>`<span class="ai-ptag">${t}</span>`).join('')}</div>
        </div>
      </div>`;
    container.appendChild(item);
  });
  updateStartBtn();
}

function buildApiKeyForm() {
  const form = document.getElementById('apiKeyForm');
  form.innerHTML = '';
  const rows = [
    {keyId:'openrouter', label:'OpenRouter', color:'var(--accent)', ph:'sk-or-v1-... (Gemma/Llama/GLMç­‰å…±é€š)'},
    {keyId:'dashscope', label:'DashScope (Qwen)', color:'var(--qwen)', ph:'sk-... (Alibaba Cloud Model Studio)'},
    {keyId:'gemini', label:'Gemini', color:'var(--gemini)', ph:'AIzaSy...'},
  ];
  const paidRows = [
    {keyId:'deepseek', label:'DeepSeek', color:'var(--deepseek)', ph:'sk-... (platform.deepseek.com)'},
    {keyId:'chatgpt', label:'ChatGPT', color:'var(--chatgpt)', ph:'sk-...'},
    {keyId:'claude', label:'Claude', color:'var(--claude)', ph:'sk-ant-...'},
  ];
  rows.forEach(r => form.appendChild(makeKeyRow(r)));
  const sep = document.createElement('div');
  sep.style.cssText = 'font-size:11px;color:var(--text-dim);margin:14px 0 8px;padding-top:14px;border-top:1px solid var(--border)';
  sep.textContent = 'æœ‰æ–™ã‚ªãƒ—ã‚·ãƒ§ãƒ³ï¼ˆä»»æ„ï¼‰';
  form.appendChild(sep);
  paidRows.forEach(r => form.appendChild(makeKeyRow(r)));
}

function makeKeyRow({keyId, label, color, ph}) {
  const div = document.createElement('div');
  div.className = 'api-row';
  const saved = getKey(keyId) ? '<span class="key-saved">âœ“ ä¿å­˜æ¸ˆ</span>' : '';
  div.innerHTML = `
    <div class="api-lbl" style="color:${color}">${label}</div>
    <input class="api-inp" id="key-${keyId}" type="password" placeholder="${ph}" value="${getKey(keyId)}">
    <button class="api-save" onclick="saveKey('${keyId}')">ä¿å­˜</button>
    <span id="saved-${keyId}">${saved}</span>`;
  return div;
}

/* ============================================================
// ãƒŠãƒ“
// ============================================================ */
function switchTab(name, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  if(el) el.classList.add('active');
  if(name==='chat') setTimeout(scrollBottom, 50);
}

function gotoStart(mode, sub) {
  switchTab('start', document.querySelectorAll('.tab-item')[1]);
  selectMode(mode);
  if(sub) {
    document.querySelectorAll('.sm-pill').forEach(p=>p.classList.remove('active'));
    const t = document.querySelector(`.sm-pill[data-sub="${sub}"]`);
    if(t) t.classList.add('active');
    currentSubmode = sub;
  }
}

/* ============================================================
// è¨­å®šæ“ä½œ
// ============================================================ */
function selectMode(mode) {
  currentMode = mode;
  document.getElementById('msDebate').className = `ms-btn${mode==='debate'?' active debate':' debate'}`;
  document.getElementById('msMeet').className = `ms-btn${mode==='meet'?' active meet':' meet'}`;
  document.getElementById('submodeCard').style.display = mode==='meet'?'block':'none';
  document.getElementById('roundCard').style.display = mode==='debate'?'block':'none';
  document.getElementById('agendaCard').style.display = mode==='meet'?'block':'none';
  const btn = document.getElementById('startBtn');
  btn.textContent = mode==='debate'?'â–¶ ãƒ‡ã‚£ãƒ™ãƒ¼ãƒˆé–‹å§‹':'â–¶ ä¼šè­°ã‚’é–‹å§‹';
  btn.className = mode==='debate'?'start-btn':'start-btn meet-btn';
}

function selSub(el) {
  document.querySelectorAll('.sm-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  currentSubmode = el.dataset.sub;
}

function selRound(btn) {
  document.querySelectorAll('.round-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  totalRounds = parseInt(btn.textContent);
}

function toggleAI(id) {
  const ai = AI_CONFIG[id];
  if(!canUse(id)) {
    showToast('è¨­å®šãƒšãƒ¼ã‚¸ã§APIã‚­ãƒ¼ã‚’ç™»éŒ²ã—ã¦ãã ã•ã„');
    switchTab('settings', document.querySelectorAll('.tab-item')[3]);
    return;
  }
  if(selectedAIs.includes(id)) {
    if(selectedAIs.length<=2) { showToast('æœ€ä½Ž2ã¤ã®AIãŒå¿…è¦ã§ã™'); return; }
    selectedAIs = selectedAIs.filter(a=>a!==id);
    document.getElementById('ai-'+id).classList.remove('active');
  } else {
    selectedAIs.push(id);
    document.getElementById('ai-'+id).classList.add('active');
  }
  updateStartBtn();
}

function toggleProfile(id) {
  const prof = document.getElementById('prof-'+id);
  const btn = document.getElementById('infobtn-'+id);
  const open = prof.classList.contains('open');
  document.querySelectorAll('.ai-profile').forEach(p=>p.classList.remove('open'));
  document.querySelectorAll('.info-btn').forEach(b=>b.classList.remove('open'));
  if(!open) { prof.classList.add('open'); btn.classList.add('open'); }
}

function updateStartBtn() {
  document.getElementById('startBtn').disabled = selectedAIs.length < 2;
}

/* ============================================================
// ãƒ•ã‚¡ã‚¤ãƒ«æ·»ä»˜
// ============================================================ */
function handleFile(input, type) {
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    attachedFiles.push({name:file.name, type, data:e.target.result, size:file.size});
    renderAttachments();
  };
  if(type==='image') reader.readAsDataURL(file);
  else reader.readAsText(file);
  input.value = '';
}

function renderAttachments() {
  document.getElementById('attachments').innerHTML = attachedFiles.map((f,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:10px 12px;margin-top:8px;background:var(--bg);border-radius:10px;border:1px solid var(--border);font-size:12px">
      <span>${f.type==='image'?'ðŸ–¼':'ðŸ“„'}</span>
      <span style="flex:1;color:var(--text-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name} Â· ${Math.round(f.size/1024)}KB</span>
      <span style="color:var(--text-dim);cursor:pointer;flex-shrink:0" onclick="removeFile(${i})">âœ•</span>
    </div>`).join('');
}

function removeFile(i) { attachedFiles.splice(i,1); renderAttachments(); }

/* ============================================================
// ã‚¢ã‚¸ã‚§ãƒ³ãƒ€
// ============================================================ */
function delAgenda(btn) {
  btn.closest('.agenda-row').remove();
  document.querySelectorAll('#agendaList .agenda-row').forEach((r,i)=>r.querySelector('.agenda-num').textContent=i+1);
}

function addAgenda() {
  const txt = prompt('ã‚¢ã‚¸ã‚§ãƒ³ãƒ€ã‚’å…¥åŠ›');
  if(!txt) return;
  const list = document.getElementById('agendaList');
  const n = list.querySelectorAll('.agenda-row').length + 1;
  const row = document.createElement('div');
  row.className = 'agenda-row';
  row.innerHTML = `<div class="agenda-num">${n}</div><div class="agenda-txt">${txt}</div><div class="agenda-del" onclick="delAgenda(this)">âœ•</div>`;
  list.appendChild(row);
}

function getAgendaItems() {
  return Array.from(document.querySelectorAll('#agendaList .agenda-txt')).map(e=>e.textContent);
}

/* ============================================================
// ã‚»ãƒƒã‚·ãƒ§ãƒ³é–‹å§‹
// ============================================================ */
async function startSession() {
  const theme = document.getElementById('themeInput').value.trim();
  if(!theme) { showToast('ãƒ†ãƒ¼ãƒžã‚’å…¥åŠ›ã—ã¦ãã ã•ã„'); return; }
  if(selectedAIs.length < 2) { showToast('AIã‚’2ã¤ä»¥ä¸Šé¸æŠžã—ã¦ãã ã•ã„'); return; }
  sessionTheme = theme;
  sessionHistory = [];
  currentRound = 1;
  agendaItems = currentMode==='meet' ? getAgendaItems() : [];
  document.getElementById('chatModeIcon').textContent = currentMode==='debate'?'ðŸ¥Š':'ðŸ¤';
  document.getElementById('chatTopicText').textContent = theme;
  document.getElementById('roundBadge').textContent = `Round ${currentRound} / ${totalRounds}`;
  document.getElementById('messages').innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
  const chip = document.getElementById('headerChip');
  chip.className = `mode-chip ${currentMode}`;
  chip.innerHTML = `<div class="sdot"></div>${currentMode==='debate'?'ðŸ¥Š ãƒ‡ã‚£ãƒ™ãƒ¼ãƒˆä¸­':'ðŸ¤ ä¼šè­°ä¸­'}`;
  if(currentMode==='meet' && agendaItems.length) {
    document.getElementById('agendaBar').style.display = 'block';
    renderAgendaChips(0);
  } else {
    document.getElementById('agendaBar').style.display = 'none';
  }
  switchTab('chat', document.querySelectorAll('.tab-item')[2]);
  addDivider(`Round ${currentRound}`);
  await runRound();
}

async function runRound() {
  isRunning = true;
  setSendDisabled(true);
  for(const id of selectedAIs) {
    await callAI(id);
    await sleep(400);
  }
  isRunning = false;
  setSendDisabled(false);
  if(currentRound < totalRounds) {
    document.getElementById('nextBtn').style.display = 'flex';
  } else {
    addDivider('ðŸ çµ‚äº†');
    showToast('çµ‚äº†ï¼è­°äº‹éŒ²ã‚’å‡ºåŠ›ã§ãã¾ã™');
  }
}

async function nextRound() {
  currentRound++;
  document.getElementById('roundBadge').textContent = `Round ${currentRound} / ${totalRounds}`;
  document.getElementById('nextBtn').style.display = 'none';
  addDivider(`Round ${currentRound}`);
  if(currentMode==='meet' && agendaItems.length) renderAgendaChips(currentRound-1);
  await runRound();
}

/* ============================================================
// AI APIå‘¼ã³å‡ºã—
// ============================================================ */
async function callAI(id, retries) {
  if(retries===undefined) retries=2;
  const ai = AI_CONFIG[id];
  const key = getKey(ai.keyId);
  const typingEl = addTyping(id);
  try {
    const sysPrompt = buildPrompt(id);
    const msgs = buildMessages(sysPrompt);
    let text = '';
    if(ai.provider==='gemini') text = await callGemini(ai, key, msgs, sysPrompt);
    else if(ai.provider==='openrouter') text = await callOpenRouter(ai, key, msgs, sysPrompt);
    else if(ai.provider==='openai') text = await callOpenAI(ai, key, msgs, sysPrompt);
    else if(ai.provider==='claude') text = await callClaude(ai, key, msgs, sysPrompt);
    else if(ai.provider==='groq') text = await callGroq(ai, key, msgs, sysPrompt);
    else if(ai.provider==='deepseek') text = await callDeepSeek(ai, key, msgs, sysPrompt);
    else if(ai.provider==='dashscope') text = await callDashScope(ai, key, msgs, sysPrompt);
    typingEl.remove();
    addMessage(id, text);
    sessionHistory.push({aiId:id, name:ai.name, content:text});
  } catch(e) {
    typingEl.remove();
    if(retries > 0 && (e.message.includes('rate') || e.message.includes('429') || e.message.includes('Provider'))) {
      addMessage(id, `â³ ãƒ¬ãƒ¼ãƒˆåˆ¶é™ä¸­...${retries}å›žãƒªãƒˆãƒ©ã‚¤ã—ã¾ã™`, true);
      await sleep(3000);
      const oldMsg = document.querySelector('.messages').lastElementChild;
      if(oldMsg) oldMsg.remove();
      await callAI(id, retries - 1);
    } else {
      addMessage(id, `ã‚¨ãƒ©ãƒ¼: ${e.message}`, true);
    }
  }
}

function buildPrompt(id) {
  const ai = AI_CONFIG[id];
  const others = selectedAIs.filter(a=>a!==id).map(a=>AI_CONFIG[a].name).join('ã€');
  const idx = selectedAIs.indexOf(id);
  if(currentMode==='debate') {
    const stance = idx===0?'è‚¯å®šçš„ãƒ»è³›æˆã®ç«‹å ´':idx===1?'å¦å®šçš„ãƒ»åå¯¾ã®ç«‹å ´':'ä¸­ç«‹ãƒ»ç¬¬ä¸‰è€…ã®ç«‹å ´';
    const roleNote = ai.role ? `\nã‚ãªãŸã®ã‚­ãƒ£ãƒ©ã‚¯ã‚¿ãƒ¼ï¼š${ai.role}ã€‚æ¯”èˆŒãƒ»ãƒ¦ãƒ¼ãƒ¢ã‚¢ãƒ»çš®è‚‰ã‚’äº¤ãˆãŸç™ºè¨€ãŒæŒã¡å‘³ã§ã™ã€‚` : '';
    return `ã‚ãªãŸã¯${ai.name}ã§ã™ã€‚ãƒ†ãƒ¼ãƒžã€Œ${sessionTheme}ã€ã«ã¤ã„ã¦ãƒ‡ã‚£ãƒ™ãƒ¼ãƒˆã«å‚åŠ ã—ã¦ã„ã¾ã™ã€‚\nä»–ã®å‚åŠ AIï¼š${others}\nã‚ãªãŸã¯${stance}ã‹ã‚‰æ„è¦‹ã‚’è¿°ã¹ã¦ãã ã•ã„ã€‚${roleNote}\nä»–ã®AIã®ç™ºè¨€ã‚’è¸ã¾ãˆã¦åè«–ãƒ»è£œå¼·ã—ãªãŒã‚‰è­°è«–ã‚’æ·±ã‚ã¦ãã ã•ã„ã€‚æ—¥æœ¬èªžã§100ã€œ150æ–‡å­—ç¨‹åº¦ã§ç°¡æ½”ã«å›žç­”ã—ã¦ãã ã•ã„ã€‚`;
  }
  const subDesc = {
    brainstorm:'è‡ªç”±ãªç™ºæƒ³ã§ã‚¢ã‚¤ãƒ‡ã‚¢ã‚’å‡ºã—åˆã†',
    decide:'æœ€å–„ã®é¸æŠžè‚¢ã‚’é¸ã¶ãŸã‚ã®åˆ†æžã¨åˆ¤æ–­ã‚’è¡Œã†',
    action:'å®Ÿè¡Œå¯èƒ½ãªã‚¿ã‚¹ã‚¯ã¨è¨ˆç”»ã«è½ã¨ã—è¾¼ã‚€',
    idea:'ã§ãã‚‹ã ã‘å¤šãã®ç‹¬å‰µçš„ãªã‚¢ã‚¤ãƒ‡ã‚¢ã‚’é‡ç”£ã™ã‚‹',
    persona:'ä¸Žãˆã‚‰ã‚ŒãŸå½¹å‰²ãƒ»ãƒšãƒ«ã‚½ãƒŠã®è¦–ç‚¹ã‹ã‚‰æ„è¦‹ã‚’è¿°ã¹ã‚‹',
    devil:'ã‚ãˆã¦åå¯¾æ„è¦‹ãƒ»ãƒªã‚¹ã‚¯ãƒ»ç©ºã‚’æŒ‡æ‘˜ã™ã‚‹æ‚ªé­”ã®ä»£å¼è€…ã¨ã—ã¦æŒ¯ã‚‹èˆžã†',
    review:'æ–‡ç« ãƒ»ä¼ç”»ãƒ»ã‚³ãƒ¼ãƒ‰ã®å•é¡Œç‚¹ã¨æ”¹å–„ç‚¹ã‚’å…·ä½“çš„ã«æŒ‡æ‘˜ã™ã‚‹',
    study:'æ•™è‚²çš„ãªè¦³ç‚¹ã‹ã‚‰ã€ç•°ãªã‚‹è§’åº¦ã§åˆ†ã‹ã‚Šã‚„ã™ãè§£èª¬ã™ã‚‹',
    predict:'ãƒ‡ãƒ¼ã‚¿ã¨è«–ç†ã«åŸºã¥ã„ãŸæœªæ¥äºˆæ¸¬ã‚’è¡Œã†',
    vote:'å…¬å¹³ãªè¦–ç‚¹ã¦Ÿ–B¦ãš*{¢
‹Ž
K¢¦W’ú‡Ž_Žšr–ZŽ
K¦ãŽØœ(€õmÕÉÉ•¹ÑMÕ‰µ½‘•tñð€ŸŽŽóŽ{Ž¯Ž“ŽŽ›¢¶Ã¢®[ŽgŽ
,œì(€½¹ÍÐ…•¹‘„€ô…•¹‘…%Ñ•µÌ¹±•¹Ñ €üq»ž>û–r£Ž»Ž
‹Ž
ãŽ
ŸŽÏŽ¾òkŽ0‘í…•¹‘…%Ñ•µÍm5…Ñ ¹µ¥¸¡ÕÉÉ•¹ÑI½Õ¹´Ä°…•¹‘…%Ñ•µÌ¹±•¹Ñ ´Ä¥u÷Ž5€€è€œœì(€É•ÑÕÉ¸ƒŽŽ«ŽŽ¼‘í…¤¹¹…µ•÷ŽŸŽgŽŽŽóŽ{Ž0‘íÍ•ÍÍ¥½¹Q¡•µ•÷Ž7Ž¯Ž“ŽŽ›’òk¢¶ÃŽ¯–>–*ƒŽ_Ž›ŽŽûŽgŽŽ‹ŽóŽ'¾òh‘íÍÕ‰•Íô‘í…•¹‘…÷’î[Ž»–>–*'¾òh‘í½Ñ¡•ÉÍ÷’î[Ž¹'Ž»žfë¢¢Ž
K¢â?ŽûŽ#Ž«Ž3Ž
$‘íÍÕ‰•Í÷Ž»–ö‹–ò?ŽŸžfë¢¢Ž_Ž›Ž?ŽƒŽWŽŽš^—šr³¢ª{ŽœÄÀÃŽpÄÔÃšZ–¶_ž¢/–ê›ŽŸžÂ‡šöSŽ¯–n{ž¶SŽ_Ž›Ž?ŽƒŽWŽŽ	€ì)ô()™Õ¹Ñ¥½¸‰Õ¥±‘5•ÍÍ…•Ì¡ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐµÍÌ€ômtì(€¥˜¡Í•ÍÍ¥½¹!¥ÍÑ½Éä¹±•¹Ñ €ø€À¤ì(€€€½¹ÍÐ¡¥ÍÑQ•áÐ€ôÍ•ÍÍ¥½¹!¥ÍÑ½Éä¹µ…À¡ ôù€‘í ¹¹…µ•ôè€‘í ¹½¹Ñ•¹Ñõ€¤¹©½¥¸ q¹q¸œ¤ì(€€€µÍÌ¹ÁÕÍ ¡íÉ½±”èÕÍ•Èœ°½¹Ñ•¹ÐéƒŽOŽ
3ŽûŽŸŽ»¢¶Ã¢®Xéq¹q¸‘í¡¥ÍÑQ•áÑõq¹q»ŽŽ«ŽŽ»žfë¢¢Ž
KŽ+¦†cŽŽ_ŽûŽgŽ	ô¤ì(€ô•±Í”ì(€€€±•ÐÕÍ•É5Íœ€ôƒŽŽóŽ{Ž0‘íÍ•ÍÍ¥½¹Q¡•µ•÷Ž7Ž¯Ž“ŽŽ›ŽŽ«ŽŽ»š?¢š/Ž
K¢þÃŽçŽ›Ž?ŽƒŽWŽŽ	€ì(€€€¥˜¡…ÑÑ…¡•‘¥±•Ì¹±•¹Ñ ¤ì(€€€€€½¹ÍÐ™¥±•%¹™¼€ô…ÑÑ…¡•‘¥±•Ì¹™¥±Ñ•È¡˜ôù˜¹ÑåÁ”ôôôÑ•áÐœ¤¹µ…À¡˜ôùq¹q¹ošÞï’îcŽWŽ
‡Ž
“Ž¬è€‘í˜¹¹…µ•õuq¸‘í˜¹‘…Ñ„¹ÍÕ‰ÍÑÉ¥¹œ À°ÈÀÀÀ¥õ€¤¹©½¥¸ œœ¤ì(€€€€€ÕÍ•É5Íœ€¬ô™¥±•%¹™¼ì(€€€ô(€€€µÍÌ¹ÁÕÍ ¡íÉ½±”èÕÍ•Èœ°½¹Ñ•¹ÐéÕÍ•É5Íô¤ì(€ô(€É•ÑÕÉ¸µÍÌì)ô((¼¨•µ¥¹¤A$€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±•µ¥¹¤¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ±…ÍÑ5Íœ€ôµÍÍmµÍÌ¹±•¹Ñ ´Åtì(€±•ÐÁ…ÉÑÌ€ômíÑ•áÐè±…ÍÑ5Íœ¹½¹Ñ•¹Ñõtì(€¥˜¡…ÑÑ…¡•‘¥±•Ì¹±•¹Ñ €˜˜Í•ÍÍ¥½¹!¥ÍÑ½Éä¹±•¹Ñ ôôôÀ¤ì(€€€½¹ÍÐ¥µ¥±”€ô…ÑÑ…¡•‘¥±•Ì¹™¥¹¡˜ôù˜¹ÑåÁ”ôôô¥µ…”œ¤ì(€€€¥˜¡¥µ¥±”¤ì(€€€€€½¹ÍÐˆØÐ€ô¥µ¥±”¹‘…Ñ„¹ÍÁ±¥Ð œ°œ¥lÅtì(€€€€€½¹ÍÐµ¥µ•QåÁ”€ô¥µ¥±”¹‘…Ñ„¹ÍÁ±¥Ð œìœ¥lÁt¹ÍÁ±¥Ð œèœ¥lÅtì(€€€€€Á…ÉÑÌ€ômí¥¹±¥¹•}‘…Ñ„éíµ¥µ•}ÑåÁ”éµ¥µ•QåÁ”°‘…Ñ„éˆØÑõô°íÑ•áÐé±…ÍÑ5Íœ¹½¹Ñ•¹Ñõtì(€€€ô(€ô(€½¹ÍÐ‰½‘ä€ôì(€€€ÍåÍÑ•µ}¥¹ÍÑÉÕÑ¥½¸éíÁ…ÉÑÌémíÑ•áÐéÍåÍAÉ½µÁÑõuô°(€€€½¹Ñ•¹ÑÌémíÉ½±”èÕÍ•Èœ°Á…ÉÑÍõt°(€€€•¹•É…Ñ¥½¹½¹™¥œéíµ…á=ÕÑÁÕÑQ½­•¹ÌèÄÀÈÐ°Ñ•µÁ•É…ÑÕÉ”èÀ¸áô(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ ¡¡ÑÑÁÌè¼½•¹•É…Ñ¥Ù•±…¹Õ…”¹½½±•…Á¥Ì¹½´½ØÅ‰•Ñ„½µ½‘•±Ì¼‘í…¤¹µ½‘•±ôé•¹•É…Ñ•½¹Ñ•¹Ðý­•äô‘í­•åõ€°ì(€€€µ•Ñ¡½èA=MPœ°¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸ô°‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹…¹‘¥‘…Ñ•Ìü¹lÁtü¹½¹Ñ•¹Ðü¹Á…ÉÑÌü¹lÁtü¹Ñ•áÐñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨=Á•¹I½ÕÑ•ÈA$€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±=Á•¹I½ÕÑ•È¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ•ÍÍ…•ÌèmíÉ½±”èÍåÍÑ•´œ°½¹Ñ•¹ÐéÍåÍAÉ½µÁÑô°€¸¸¹µÍÍt°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€Ñ•µÁ•É…ÑÕÉ”è€À¸à(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½½Á•¹É½ÕÑ•È¹…¤½…Á¤½ØÄ½¡…Ð½½µÁ±•Ñ¥½¹Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°(€€€¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°ÕÑ¡½É¥é…Ñ¥½¸œé	•…É•È€‘í­•åõ€°!QQ@µI•™•É•Èœè¡ÑÑÁÌè¼½…½É„¹…ÁÀœ°`µQ¥Ñ±”œè=Iô°(€€€‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹¡½¥•Ìü¹lÁtü¹µ•ÍÍ…”ü¹½¹Ñ•¹Ðñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨=Á•¹$A$€¡¡…ÑAP¤€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±=Á•¹$¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ•ÍÍ…•ÌèmíÉ½±”èÍåÍÑ•´œ°½¹Ñ•¹ÐéÍåÍAÉ½µÁÑô°€¸¸¹µÍÍt°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€Ñ•µÁ•É…ÑÕÉ”è€À¸à(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½…Á¤¹½Á•¹…¤¹½´½ØÄ½¡…Ð½½µÁ±•Ñ¥½¹Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°ÕÑ¡½É¥é…Ñ¥½¸œé	•…É•È€‘í­•åõô°‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹¡½¥•Ìü¹lÁtü¹µ•ÍÍ…”ü¹½¹Ñ•¹Ðñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨••ÁM••¬A$€£–³–ò?žnÓ–>§Ž7Ž=Á•¹'’êKš>l¤€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±••ÁM••¬¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ•ÍÍ…•ÌèmíÉ½±”èÍåÍÑ•´œ°½¹Ñ•¹ÐéÍåÍAÉ½µÁÑô°€¸¸¹µÍÍt°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€Ñ•µÁ•É…ÑÕÉ”è€À¸à(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½…Á¤¹‘••ÁÍ••¬¹½´½¡…Ð½½µÁ±•Ñ¥½¹Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°ÕÑ¡½É¥é…Ñ¥½¸œé	•…É•È€‘í­•åõô°‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤¹…Ñ   ¤ôø¡íô¤¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹¡½¥•Ìü¹lÁtü¹µ•ÍÍ…”ü¹½¹Ñ•¹Ðñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨…Í¡M½Á”€¡±¥‰…‰„±½Õ¤A$ƒŠPEÝ•¸€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±…Í¡M½Á”¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ•ÍÍ…•ÌèmíÉ½±”èÍåÍÑ•´œ°½¹Ñ•¹ÐéÍåÍAÉ½µÁÑô°€¸¸¹µÍÍt°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€Ñ•µÁ•É…ÑÕÉ”è€À¸à(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½‘…Í¡Í½Á”µ¥¹Ñ°¹…±¥åÕ¹Ì¹½´½½µÁ…Ñ¥‰±”µµ½‘”½ØÄ½¡…Ð½½µÁ±•Ñ¥½¹Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°ÕÑ¡½É¥é…Ñ¥½¸œé	•…É•È€‘í­•åõô°‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤¹…Ñ   ¤ôø¡íô¤¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹¡½¥•Ìü¹lÁtü¹µ•ÍÍ…”ü¹½¹Ñ•¹Ðñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨É½ÄA$€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±É½Ä¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ•ÍÍ…•ÌèmíÉ½±”èÍåÍÑ•´œ°½¹Ñ•¹ÐéÍåÍAÉ½µÁÑô°€¸¸¹µÍÍt°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€Ñ•µÁ•É…ÑÕÉ”è€À¸à(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½…Á¤¹É½Ä¹½´½½Á•¹…¤½ØÄ½¡…Ð½½µÁ±•Ñ¥½¹Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°ÕÑ¡½É¥é…Ñ¥½¸œé	•…É•È€‘í­•åõô°‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹¡½¥•Ìü¹lÁtü¹µ•ÍÍ…”ü¹½¹Ñ•¹Ðñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨±…Õ‘”A$€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸…±±±…Õ‘”¡…¤°­•ä°µÍÌ°ÍåÍAÉ½µÁÐ¤ì(€½¹ÍÐ‰½‘ä€ôì(€€€µ½‘•°è…¤¹µ½‘•°°(€€€µ…á}Ñ½­•¹Ìè€ÄÀÈÐ°(€€€ÍåÍÑ•´èÍåÍAÉ½µÁÐ°(€€€µ•ÍÍ…•ÌèµÍÌ(€ôì(€½¹ÍÐÉ•Ì€ô…Ý…¥Ð™•Ñ  ¡ÑÑÁÌè¼½…Á¤¹…¹Ñ¡É½Á¥Œ¹½´½ØÄ½µ•ÍÍ…•Ìœ°ì(€€€µ•Ñ¡½èA=MPœ°(€€€¡•…‘•ÉÌéì½¹Ñ•¹ÐµQåÁ”œè…ÁÁ±¥…Ñ¥½¸½©Í½¸œ°àµ…Á¤µ­•äœé­•ä°…¹Ñ¡É½Á¥ŒµÙ•ÉÍ¥½¸œèœÈÀÈÌ´ÀØ´ÀÄœ°…¹Ñ¡É½Á¥Œµ‘…¹•É½ÕÌµ‘¥É•Ðµ‰É½ÝÍ•Èµ…•ÍÌœèÑÉÕ”ô°(€€€‰½‘äé)M=8¹ÍÑÉ¥¹¥™ä¡‰½‘ä¤(€ô¤ì(€¥˜ …É•Ì¹½¬¤ì½¹ÍÐ”õ…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ìÑ¡É½Ü¹•ÜÉÉ½È¡”¹•ÉÉ½Èü¹µ•ÍÍ…•ññ!QQ@€‘íÉ•Ì¹ÍÑ…ÑÕÍõ€¤ìô(€½¹ÍÐ‘…Ñ„€ô…Ý…¥ÐÉ•Ì¹©Í½¸ ¤ì(€É•ÑÕÉ¸‘…Ñ„¹½¹Ñ•¹Ðü¹lÁtü¹Ñ•áÐñð€Ÿ–þsž¶SŽ«Ž\œì)ô((¼¨ƒŽ›ŽóŽ
ÛŽóŽ‡ŽŽ
ïŽóŽ
ã¦’þ„€¨¼)…Íå¹Œ™Õ¹Ñ¥½¸Í•¹‘UÍ•É5•ÍÍ…” ¤ì(€½¹ÍÐ¥¹ÁÕÐ€ô‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% ¡…Ñ%¹ÁÕÐœ¤ì(€½¹ÍÐÑ•áÐ€ô¥¹ÁÕÐ¹Ù…±Õ”¹ÑÉ¥´ ¤ì(€¥˜ …Ñ•áÐñð¥ÍIÕ¹¹¥¹œ¤É•ÑÕÉ¸ì(€¥¹ÁÕÐ¹Ù…±Õ”€ô€œœì(€½¹ÍÐµÍ°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì(€µÍ°¹±…ÍÍ9…µ”€ô€µ•ÍÍ…”œì(€µÍ°¹¥¹¹•É!Q50€ô€(€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ‰½‘äˆÍÑå±”ô‰‘¥ÍÁ±…äé™±•àí™±•àµ‘¥É•Ñ¥½¸é½±Õµ¸í…±¥¸µ¥Ñ•µÌé™±•àµ•¹ˆø(€€€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ¡ˆÍÑå±”ô‰©ÕÍÑ¥™äµ½¹Ñ•¹Ðé™±•àµ•¹ˆøñÍÁ…¸±…ÍÌô‰µÍœµÑ¥µ”ˆø‘í¹½Ü ¥ôð½ÍÁ…¸øñÍÁ…¸±…ÍÌô‰µÍœµ¹…µ”ˆÍÑå±”ô‰½±½ÈéÙ…È ´µ…•¹Ð¤ˆûŽŽ«Ž|ð½ÍÁ…¸øð½‘¥Øø(€€€€€€ñ‘¥Ø±…ÍÌô‰µÍœµÑáÐÕÍ•ÈµµÍœˆø‘í•Í!Ñµ°¡Ñ•áÐ¥ôð½‘¥Øø(€€€€ð½‘¥Øù€ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ•ÍÍ…•Ìœ¤¹…ÁÁ•¹‘¡¥±¡µÍ°¤ì(€ÍÉ½±±	½ÑÑ½´ ¤ì(€Í•ÍÍ¥½¹!¥ÍÑ½Éä¹ÁÕÍ ¡í…¥%èÕÍ•Èœ°¹…µ”èŸŽŽ«Ž|œ°½¹Ñ•¹ÐéÑ•áÑô¤ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% ¹•áÑ	Ñ¸œ¤¹ÍÑå±”¹‘¥ÍÁ±…ä€ô€¹½¹”œì(€…Ý…¥ÐÉÕ¹I½Õ¹ ¤ì)ô((¼¨€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô(¼¼U$ƒŽcŽ¯ŽGŽð(¼¼€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô€¨¼)™Õ¹Ñ¥½¸…‘‘¥Ù¥‘•È¡ÑáÐ¤ì(€½¹ÍÐ•°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì(€•°¹±…ÍÍ9…µ”€ô€‘¥Ù¥‘•Èœì(€•°¹Ñ•áÑ½¹Ñ•¹Ð€ôÑáÐì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ•ÍÍ…•Ìœ¤¹…ÁÁ•¹‘¡¥±¡•°¤ì(€ÍÉ½±±	½ÑÑ½´ ¤ì)ô()™Õ¹Ñ¥½¸…‘‘QåÁ¥¹œ¡¥¤ì(€½¹ÍÐ…¤€ô%}=9%m¥‘tì(€½¹ÍÐ•°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì(€•°¹±…ÍÍ9…µ”€ô€ÑåÁ¥¹œµ¥¹‘¥…Ñ½Èœì(€•°¹¥¹¹•É!Q50€ô€(€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ…ØˆÍÑå±”ô‰‰…­É½Õ¹è‘í…¤¹…Ù…Ñ…É	ôí½±½Èè‘í…¤¹½±½Éôˆø‘í…¤¹…Ù…Ñ…Éôð½‘¥Øø(€€€€ñ‘¥Ø±…ÍÌô‰ÑåÁ¥¹œµ‘½ÑÌˆøñ‘¥Ø±…ÍÌô‰Ñ‘½Ðˆøð½‘¥Øøñ‘¥Ø±…ÍÌô‰Ñ‘½Ðˆøð½‘¥Øøñ‘¥Ø±…ÍÌô‰Ñ‘½Ðˆøð½‘¥Øøð½‘¥Øù€ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ•ÍÍ…•Ìœ¤¹…ÁÁ•¹‘¡¥±¡•°¤ì(€ÍÉ½±±	½ÑÑ½´ ¤ì(€É•ÑÕÉ¸•°ì)ô()™Õ¹Ñ¥½¸…‘‘5•ÍÍ…”¡¥°Ñ•áÐ°¥ÍÉÉ½Èõ™…±Í”¤ì(€½¹ÍÐ…¤€ô%}=9%m¥‘tì(€½¹ÍÐ•°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì(€•°¹±…ÍÍ9…µ”€ô€µ•ÍÍ…”œì(€•°¹¥¹¹•É!Q50€ô€(€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ…ØˆÍÑå±”ô‰‰…­É½Õ¹è‘í…¤¹…Ù…Ñ…É	ôí½±½Èè‘í…¤¹½±½Éôˆø‘í…¤¹…Ù…Ñ…Éôð½‘¥Øø(€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ‰½‘äˆø(€€€€€€ñ‘¥Ø±…ÍÌô‰µÍœµ¡ˆø(€€€€€€€€ñÍÁ…¸±…ÍÌô‰µÍœµ¹…µ”ˆÍÑå±”ô‰½±½Èè‘í…¤¹½±½Éôˆø‘í…¤¹¹…µ•ôð½ÍÁ…¸ø(€€€€€€€€‘í…¤¹É½±”ý€ñÍÁ…¸±…ÍÌô‰µÍœµÉ½±”ˆø‘í…¤¹É½±•ôð½ÍÁ…¸ù€èœô(€€€€€€€€ñÍÁ…¸±…ÍÌô‰µÍœµÑ¥µ”ˆø‘í¹½Ü ¥ôð½ÍÁ…¸ø(€€€€€€ð½‘¥Øø(€€€€€€ñ‘¥Ø±…ÍÌô‰µÍœµÑáÐ‘í¥ÍÉÉ½Èüœ•ÉÉ½Èœèœôˆø‘í•Í!Ñµ°¡Ñ•áÐ¥ôð½‘¥Øø(€€€€ð½‘¥Øù€ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ•ÍÍ…•Ìœ¤¹…ÁÁ•¹‘¡¥±¡•°¤ì(€ÍÉ½±±	½ÑÑ½´ ¤ì)ô()™Õ¹Ñ¥½¸É•¹‘•É•¹‘…¡¥ÁÌ¡É½Õ¹‘%‘à¤ì(€½¹ÍÐ¡¥ÁÌ€ô‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% …•¹‘…¡¥ÁÌœ¤ì(€¡¥ÁÌ¹¥¹¹•É!Q50€ô…•¹‘…%Ñ•µÌ¹µ…À ¡¥Ñ•´±¤¤ôø(€€€€ñ‘¥Ø±…ÍÌô‰…¡¥À‘í¤ôôõÉ½Õ¹‘%‘àüœÕÉÉ•¹Ðœé¤ñÉ½Õ¹‘%‘àüœ‘½¹”œèœôˆø‘í¤¬Åô¸€‘í¥Ñ•µôð½‘¥Øù€(€€¤¹©½¥¸ œœ¤ì)ô()™Õ¹Ñ¥½¸Í•ÑM•¹‘¥Í…‰±•¡Ø¤ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% Í•¹‘	Ñ¸œ¤¹‘¥Í…‰±•€ôØì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% ¡…Ñ%¹ÁÕÐœ¤¹‘¥Í…‰±•€ôØì)ô()™Õ¹Ñ¥½¸ÍÉ½±±	½ÑÑ½´ ¤ì(€½¹ÍÐ´€ô‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ•ÍÍ…•Ìœ¤ì(€´¹ÍÉ½±±Q½À€ô´¹ÍÉ½±±!•¥¡Ðì)ô()™Õ¹Ñ¥½¸¹½Ü ¤ìÉ•ÑÕÉ¸¹•Ü…Ñ” ¤¹Ñ½1½…±•Q¥µ•MÑÉ¥¹œ ©„µ)@œ±í¡½ÕÈèœÈµ‘¥¥Ðœ±µ¥¹ÕÑ”èœÈµ‘¥¥Ðô¤ìô)™Õ¹Ñ¥½¸•Í!Ñµ°¡Ì¤ìÉ•ÑÕÉ¸Ì¹É•Á±…” ¼˜½œ°œ™…µÀìœ¤¹É•Á±…” ¼ð½œ°œ™±Ðìœ¤¹É•Á±…” ¼ø½œ°œ™Ðìœ¤¹É•Á±…” ½q¸½œ°œñ‰Èøœ¤ìô)™Õ¹Ñ¥½¸Í±••À¡µÌ¤ìÉ•ÑÕÉ¸¹•ÜAÉ½µ¥Í”¡ÈôùÍ•ÑQ¥µ•½ÕÐ¡È±µÌ¤¤ìô)™Õ¹Ñ¥½¸Í¡½ÝQ½…ÍÐ¡µÍœ¤ì(€½¹ÍÐÐ€ô‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% Ñ½…ÍÐœ¤ì(€Ð¹Ñ•áÑ½¹Ñ•¹Ð€ôµÍœì(€Ð¹±…ÍÍ1¥ÍÐ¹…‘ Í¡½Üœ¤ì(€Í•ÑQ¥µ•½ÕÐ  ¤ôùÐ¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” Í¡½Üœ¤°€ÈÔÀÀ¤ì)ô((¼¨€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô(¼¼c–ë–*oŽ‹ŽóŽŽ¬(¼¼€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô€¨¼)™Õ¹Ñ¥½¸½Á•¹5½‘…° ¤ì(€½¹ÍÐ‰±½­Ì€ô‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% ÑÝ••Ñ	±½­Ìœ¤ì(€‰±½­Ì¹¥¹¹•É!Q50€ô€œœì(€½¹ÍÐ™Õ±±Q•áÐ€ô‰Õ¥±‘aQ•áÐ ¤ì(€½¹ÍÐÑÝ••ÑÌ€ôÍÁ±¥ÑQÝ••ÑÌ¡™Õ±±Q•áÐ¤ì(€ÑÝ••ÑÌ¹™½É…  ¡ÑÜ±¤¤ôùì(€€€½¹ÍÐ‘¥Ø€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì(€€€‘¥Ø¹±…ÍÍ9…µ”€ô€ÑÝ••Ðµ‰±½¬œì(€€€‘¥Ø¹¥¹¹•É!Q50€ô€(€€€€€€ñ‘¥Ø±…ÍÌô‰ÑÝ••Ðµ¹Õ´ˆø‘í¤¬Åô€¼€‘íÑÝ••ÑÌ¹±•¹Ñ¡ôð½‘¥Øø(€€€€€€ñ‘¥Ø±…ÍÌô‰ÑÝ••ÐµÑ•áÐˆø‘í•Í!Ñµ°¡ÑÜ¥ôð½‘¥Øø(€€€€€€ñ‘¥Ø±…ÍÌô‰ÑÝ••Ðµ¡…ÉÌˆø‘íÑÜ¹±•¹Ñ¡ô€¼€ÈàÃšZ–¶\ð½‘¥Øù€ì(€€€‰±½­Ì¹…ÁÁ•¹‘¡¥±¡‘¥Ø¤ì(€ô¤ì(€‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ½‘…°œ¤¹±…ÍÍ1¥ÍÐ¹…‘ ½Á•¸œ¤ì)ô()™Õ¹Ñ¥½¸‰Õ¥±‘aQ•áÐ ¤ì(€½¹ÍÐµ½‘•1…‰•°€ôÕÉÉ•¹Ñ5½‘”ôôô‘•‰…Ñ”œüŸÂ~–+ŽŽ
ŽgŽóŽ œèŸÂ~’w’òk¢¶Àœì(€½¹ÍÐ…¥9…µ•Ì€ôÍ•±•Ñ•‘%Ì¹µ…À¡¥ôù%}=9%m¥‘t¹¹…µ”¤¹©½¥¸ ŸŽìœ¤ì(€±•ÐÑ•áÐ€ôƒŽA$€‘íµ½‘•1…‰•±÷ŽD‘íÍ•ÍÍ¥½¹Q¡•µ•õq¹q»–>–*'¾òh‘í…¥9…µ•Íõq¹€ì(€¥˜¡…•¹‘…%Ñ•µÌ¹±•¹Ñ ¤ì(€€€Ñ•áÐ€¬ôq»Â~N,ƒŽ
‹Ž
ãŽ
ŸŽÏŽq¸‘í…•¹‘…%Ñ•µÌ¹µ…À ¡„±¤¤ôù€‘í¤¬Åô¸€‘í…õ€¤¹©½¥¸ q¸œ¥õq¹€ì(€ô(€Ñ•áÐ€¬ô€q¸œì(€Í•ÍÍ¥½¹!¥ÍÑ½Éä¹™¥±Ñ•È¡ ôù ¹…¥%„ôôÕÍ•Èœ¤¹™½É… ¡ ôùì(€€€Ñ•áÐ€¬ôq¸‘í%}=9%m ¹…¥%‘tü¹…Ù…Ñ…Éñðœô€‘í ¹¹…µ•÷¾òh‘í ¹½¹Ñ•¹Ñõq¹€ì(€ô¤ì(€Ñ•áÐ€¬ôq¸'ŽŽ
ŽgŽóŽ €=I€ì(€É•ÑÕÉ¸Ñ•áÐì)ô()™Õ¹Ñ¥½¸ÍÁ±¥ÑQÝ••ÑÌ¡Ñ•áÐ¤ì(€½¹ÍÐ¡Õ¹­Ì€ômtì(€±•ÐÉ•µ…¥¹¥¹œ€ôÑ•áÐì(€Ý¡¥±”¡É•µ…¥¹¥¹œ¹±•¹Ñ €ø€À¤ì(€€€¥˜¡É•µ…¥¹¥¹œ¹±•¹Ñ €ðô€ÈàÀ¤ì¡Õ¹­Ì¹ÁÕÍ ¡É•µ…¥¹¥¹œ¤ì‰É•…¬ìô(€€€±•ÐÕÐ€ô€ÈàÀì(€€€Ý¡¥±”¡ÕÐ€ø€À€˜˜É•µ…¥¹¥¹mÕÑt€„ôô€q¸œ€˜˜É•µ…¥¹¥¹mÕÑt€„ôô€ŸŽœ€˜˜É•µ…¥¹¥¹mÕÑt€„ôô€œ€œ¤ÕÐ´´ì(€€€¥˜¡ÕÐôôôÀ¤ÕÐôÈàÀì(€€€¡Õ¹­Ì¹ÁÕÍ ¡É•µ…¥¹¥¹œ¹ÍÕ‰ÍÑÉ¥¹œ À±ÕÐ¤¤ì(€€€É•µ…¥¹¥¹œ€ôÉ•µ…¥¹¥¹œ¹ÍÕ‰ÍÑÉ¥¹œ¡ÕÐ¤¹ÑÉ¥µMÑ…ÉÐ ¤ì(€ô(€É•ÑÕÉ¸¡Õ¹­Ìì)ô()™Õ¹Ñ¥½¸½Áå±° ¤ì(€½¹ÍÐ‰±½­Ì€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° œ¹ÑÝ••ÐµÑ•áÐœ¤ì(€½¹ÍÐ…±°€ôÉÉ…ä¹™É½´¡‰±½­Ì¤¹µ…À¡ˆôùˆ¹Ñ•áÑ½¹Ñ•¹Ð¤¹©½¥¸ q¹q¸´´µq¹q¸œ¤ì(€¹…Ù¥…Ñ½È¹±¥Á‰½…É¹ÝÉ¥Ñ•Q•áÐ¡…±°¤¹Ñ¡•¸  ¤ôùì(€€€Í¡½ÝQ½…ÍÐ ŸŽ
ÏŽSŽóŽ_ŽûŽ_Ž¾òœ¤ì(€€€±½Í•5½‘…° ¤ì(€ô¤ì)ô()™Õ¹Ñ¥½¸±½Í•5½‘…° ¤ì‘½Õµ•¹Ð¹•Ñ±•µ•¹Ñ	å% µ½‘…°œ¤¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” ½Á•¸œ¤ìô(