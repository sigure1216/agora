/* ============================================================
// AI設定オブジェクト（ここを変えるだけでバージョンアップ対応）
// ============================================================ */
const AI_CONFIG = {
  gemini: {
    name:'Gemini 2.0 Flash',
    model:'gemini-2.0-flash',
    color:'var(--gemini)', avatar:'G', avatarBg:'rgba(91,143,255,0.15)',
    tag:'free', provider:'gemini', keyId:'gemini',
    desc:'Google製マルチモーダルモデル。テキスト・画像を同時に理解し、Google検索とも連携。最新情報への対応力が強み。',
    ptags:['🖼 マルチモーダル','🔍 リアルタイム検索','💰 無料','🇺🇸 Google製']
  },
  gemma: {
    name:'Gemma 4 31B',
    model:'google/gemma-4-31b-it:free',
    color:'var(--deepseek)', avatar:'Gm', avatarBg:'rgba(79,195,247,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Google DeepMind製オープンモデルの最新世代。262Kの超長文コンテキストを持ち、構造的・論理的な議論を展開する。',
    ptags:['📄 262K文脈','🧠 論理的','💰 無料','🇺🇸 Google製']
  },
  nemotron: {
    name:'Nemotron 120B',
    model:'nvidia/nemotron-3-super-120b-a12b:free',
    color:'var(--llama)', avatar:'N', avatarBg:'rgba(255,179,71,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'NVIDIA製120Bハイブリッドモデル。Mamba-Transformerアーキテクチャで複雑な推論と多角的分析が得意。',
    ptags:['💪 120B規模','🔀 ハイブリッド型','💰 無料','🟢 NVIDIA製']
  },
  gptoss: {
    name:'GPT-OSS 20B',
    model:'openai/gpt-oss-20b:free',
    color:'var(--mistral)', avatar:'O', avatarBg:'rgba(255,126,179,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'OpenAI初のオープンソースモデル。MoEアーキテクチャで軽量ながらGPT品質の応答。ツール使用・構造化出力に対応。',
    ptags:['🌐 OpenAI系','⚡ MoE軽量','💰 無料','🇺🇸 OpenAI製']
  },
  minimax: {
    name:'MiniMax M2.5',
    model:'minimax/minimax-m2.5:free',
    color:'var(--kimi)', avatar:'Mx', avatarBg:'rgba(192,132,252,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'MiniMax製オフィス特化型大規模モデル。文書作成・タスク整理・創造的発想が得意で、会議モードで真価を発揮。',
    ptags:['📋 業務特化','💡 創造的','💰 無料','🇨🇳 MiniMax製']
  },
  nemotronano: {
    name:'Nemotron Nano 9B',
    model:'nvidia/nemotron-nano-9b-v2:free',
    color:'var(--qwen)', avatar:'Nn', avatarBg:'rgba(52,211,153,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'NVIDIA製コンパクト高速モデル。9Bながら即答性に優れ、スピード重視のブレストや短文ディベートで活躍。',
    ptags:['⚡ 超高速応答','🎯 簡潔明快','💰 無料','🟢 NVIDIA製']
  },
  gemma2: {
    name:'Gemma 4 26B（ツッコミ役）',
    model:'google/gemma-4-26b-a4b-it:free',
    color:'var(--grok)', avatar:'G2', avatarBg:'rgba(56,189,248,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Google Gemma 4のMoE軽量版。鋭い反論と別視点の提示が持ち味。毒舌キャラとして議論を荒らす（いい意味で）。',
    ptags:['😈 反論特化','⚡ MoE高速','💰 無料','🇺🇸 Google製'],
    role:'🎭 ツッコミ役'
  },
  deepseekr1: {
    name:'DeepSeek R1',
    model:'deepseek/deepseek-r1:free',
    color:'var(--deepseek)', avatar:'D1', avatarBg:'rgba(79,195,247,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'DeepSeek製の思考型推論モデル。答える前に内部で熟考するCoT方式で、複雑な論理・数学・哲学的議論に強い。',
    ptags:['🧠 Chain-of-Thought','🔬 深い推論','💰 無料','🇨🇳 DeepSeek製']
  },
  deepseekv3: {
    name:'DeepSeek V3',
    model:'deepseek/deepseek-chat-v3-5:free',
    color:'var(--accent2)', avatar:'D3', avatarBg:'rgba(0,229,170,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'DeepSeek製の高速汎用モデル。R1より応答が速くバランスに優れる。幅広いテーマで的確かつ流暢な日本語を返す。',
    ptags:['⚡ 高速','🗣 流暢な日本語','💰 無料','🇨🇳 DeepSeek製']
  },
  llama: {
    name:'Llama 4 Scout',
    model:'meta-llama/llama-4-scout-17b-16e-instruct',
    color:'var(--llama)', avatar:'L', avatarBg:'rgba(255,179,71,0.15)',
    tag:'free', provider:'groq', keyId:'groq',
    desc:'Meta製の最新Llama 4。Groq経由で超高速応答。MoEアーキテクチャで軽量ながら鋭い意見を出す。議論のテンポを上げる存在。',
    ptags:['⚡ Groq超高速','🦙 Meta製','💰 無料','🔀 MoE軽量']
  },
  chatgpt: {
    name:'ChatGPT 4o',
    model:'gpt-4o',
    color:'var(--chatgpt)', avatar:'C', avatarBg:'rgba(116,170,156,0.15)',
    tag:'paid', provider:'openai', keyId:'chatgpt',
    desc:'OpenAI製のスタンダードAI。膨大な知識量と丁寧な説明、バランスの取れた意見が強み。APIキー設定で利用可能。',
    ptags:['🌐 圧倒的知名度','🤝 バランス型','💳 有料','🇺🇸 OpenAI製']
  },
  claude: {
    name:'Claude Sonnet',
    model:'claude-sonnet-4-5',
    color:'var(--claude)', avatar:'A', avatarBg:'rgba(212,165,116,0.15)',
    tag:'paid', provider:'claude', keyId:'claude',
    desc:'Anthropic製AI。倫理的視点と長文理解が業界最高レベル。ニュアンスを大切にした丁寧な議論が得意。APIキー設定で利用可能。',
    ptags:['📖 長文理解','⚖️ 倫理的視点','💳 有料','🛡 Anthropic製']
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
// 初期化
// ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildAIList();
  buildApiKeyForm();
});

/* ============================================================
// キー管理
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
  if(!val) { showToast('APIキーを入力してください'); return; }
  setKey(keyId, val);
  document.getElementById('saved-' + keyId).innerHTML = '<span class="key-saved">✓ 保存済</span>';
  showToast('保存しました！');
  buildAIList();
}

/* ============================================================
// AIリスト構築
// ============================================================ */
function buildAIList() {
  const container = document.getElementById('aiList');
  container.innerHTML = '';
  selectedAIs = [];
  Object.entries(AI_CONFIG).forEach(([id, ai]) => {
    const ok = canUse(id);
    if(ok) selectedAIs.push(id);
    const tagLabel = ok ? (ai.tag==='free'?'FREE':'READY') : (ai.tag==='paid'?'有料・要キー':'要APIキー');
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
        <div class="check-circle" onclick="toggleAI('${id}')">✓</div>
        <div class="info-btn" id="infobtn-${id}" onclick="toggleProfile('${id}')">ℹ</div>
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
    {keyId:'openrouter', label:'OpenRouter', color:'var(--accent)', ph:'sk-or-v1-... (Gemma/Nemotron/MiniMax等共通)'},
    {keyId:'gemini', label:'Gemini', color:'var(--gemini)', ph:'AIzaSy...'},
    {keyId:'groq', label:'Groq', color:'var(--llama)', ph:'gsk_... (Llama高速推論)'},
  ];
  const paidRows = [
    {keyId:'chatgpt', label:'ChatGPT', color:'var(--chatgpt)', ph:'sk-...'},
    {keyId:'claude', label:'Claude', color:'var(--claude)', ph:'sk-ant-...'},
  ];
  rows.forEach(r => form.appendChild(makeKeyRow(r)));
  const sep = document.createElement('div');
  sep.style.cssText = 'font-size:11px;color:var(--text-dim);margin:14px 0 8px;padding-top:14px;border-top:1px solid var(--border)';
  sep.textContent = '有料オプション（任意）';
  form.appendChild(sep);
  paidRows.forEach(r => form.appendChild(makeKeyRow(r)));
}

function makeKeyRow({keyId, label, color, ph}) {
  const div = document.createElement('div');
  div.className = 'api-row';
  const saved = getKey(keyId) ? '<span class="key-saved">✓ 保存済</span>' : '';
  div.innerHTML = `
    <div class="api-lbl" style="color:${color}">${label}</div>
    <input class="api-inp" id="key-${keyId}" type="password" placeholder="${ph}" value="${getKey(keyId)}">
    <button class="api-save" onclick="saveKey('${keyId}')">保存</button>
    <span id="saved-${keyId}">${saved}</span>`;
  return div;
}

/* ============================================================
// ナビ
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
// 設定操作
// ============================================================ */
function selectMode(mode) {
  currentMode = mode;
  document.getElementById('msDebate').className = `ms-btn${mode==='debate'?' active debate':' debate'}`;
  document.getElementById('msMeet').className = `ms-btn${mode==='meet'?' active meet':' meet'}`;
  document.getElementById('submodeCard').style.display = mode==='meet'?'block':'none';
  document.getElementById('roundCard').style.display = mode==='debate'?'block':'none';
  document.getElementById('agendaCard').style.display = mode==='meet'?'block':'none';
  const btn = document.getElementById('startBtn');
  btn.textContent = mode==='debate'?'▶ ディベート開始':'▶ 会議を開始';
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
    showToast('設定ページでAPIキーを登録してください');
    switchTab('settings', document.querySelectorAll('.tab-item')[3]);
    return;
  }
  if(selectedAIs.includes(id)) {
    if(selectedAIs.length<=2) { showToast('最低2つのAIが必要です'); return; }
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
// ファイル添付
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
      <span>${f.type==='image'?'🖼':'📄'}</span>
      <span style="flex:1;color:var(--text-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name} · ${Math.round(f.size/1024)}KB</span>
      <span style="color:var(--text-dim);cursor:pointer;flex-shrink:0" onclick="removeFile(${i})">✕</span>
    </div>`).join('');
}

function removeFile(i) { attachedFiles.splice(i,1); renderAttachments(); }

/* ============================================================
// アジェンダ
// ============================================================ */
function delAgenda(btn) {
  btn.closest('.agenda-row').remove();
  document.querySelectorAll('#agendaList .agenda-row').forEach((r,i)=>r.querySelector('.agenda-num').textContent=i+1);
}

function addAgenda() {
  const txt = prompt('アジェンダを入力');
  if(!txt) return;
  const list = document.getElementById('agendaList');
  const n = list.querySelectorAll('.agenda-row').length + 1;
  const row = document.createElement('div');
  row.className = 'agenda-row';
  row.innerHTML = `<div class="agenda-num">${n}</div><div class="agenda-txt">${txt}</div><div class="agenda-del" onclick="delAgenda(this)">✕</div>`;
  list.appendChild(row);
}

function getAgendaItems() {
  return Array.from(document.querySelectorAll('#agendaList .agenda-txt')).map(e=>e.textContent);
}

/* ============================================================
// セッション開始
// ============================================================ */
async function startSession() {
  const theme = document.getElementById('themeInput').value.trim();
  if(!theme) { showToast('テーマを入力してください'); return; }
  if(selectedAIs.length < 2) { showToast('AIを2つ以上選択してください'); return; }
  sessionTheme = theme;
  sessionHistory = [];
  currentRound = 1;
  agendaItems = currentMode==='meet' ? getAgendaItems() : [];
  document.getElementById('chatModeIcon').textContent = currentMode==='debate'?'🥊':'🤝';
  document.getElementById('chatTopicText').textContent = theme;
  document.getElementById('roundBadge').textContent = `Round ${currentRound} / ${totalRounds}`;
  document.getElementById('messages').innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
  const chip = document.getElementById('headerChip');
  chip.className = `mode-chip ${currentMode}`;
  chip.innerHTML = `<div class="sdot"></div>${currentMode==='debate'?'🥊 ディベート中':'🤝 会議中'}`;
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
    addDivider('🏁 終了');
    showToast('終了！議事録を出力できます');
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
// AI API呼び出し
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
    typingEl.remove();
    addMessage(id, text);
    sessionHistory.push({aiId:id, name:ai.name, content:text});
  } catch(e) {
    typingEl.remove();
    if(retries > 0 && (e.message.includes('rate') || e.message.includes('429') || e.message.includes('Provider'))) {
      addMessage(id, `⏳ レート制限中...${retries}回リトライします`, true);
      await sleep(3000);
      const oldMsg = document.querySelector('.messages').lastElementChild;
      if(oldMsg) oldMsg.remove();
      await callAI(id, retries - 1);
    } else {
      addMessage(id, `エラー: ${e.message}`, true);
    }
  }
}

function buildPrompt(id) {
  const ai = AI_CONFIG[id];
  const others = selectedAIs.filter(a=>a!==id).map(a=>AI_CONFIG[a].name).join('、');
  const idx = selectedAIs.indexOf(id);
  if(currentMode==='debate') {
    const stance = idx===0?'肯定的・賛成の立場':idx===1?'否定的・反対の立場':'中立・第三者の立場';
    const roleNote = ai.role ? `\nあなたのキャラクター：${ai.role}。毒舌・ユーモア・皮肉を交えた発言が持ち味です。` : '';
    return `あなたは${ai.name}です。テーマ「${sessionTheme}」についてディベートに参加しています。\n他の参加AI：${others}\nあなたは${stance}から意見を述べてください。${roleNote}\n他のAIの発言を踏まえて反論・補強しながら議論を深めてください。日本語で100〜150文字程度で簡潔に回答してください。`;
  }
  const subDesc = {
    brainstorm:'自由な発想でアイデアを出し合う',
    decide:'最善の選択肢を選ぶための分析と判断を行う',
    action:'実行可胼なタスクと計画に落とし込む',
    idea:'できるだけ多くの独創的なアイデアを量産する',
    persona:'与えられた役割・ペルソナの視点から意見を述べる',
    devil:'あえて反対意見・リスク・穴を指摘する悪魔の代弁者として振る舞う',
    review:'文章・企画・コードの問題点と改善点を具体的に指摘する',
    study:'教育的な観点から、異なる角度で分かりやすく解説する',
    predict:'データと論理に基づいた未来予測を行う',
    vote:'公平な視点で各選択肢を評価し、最善を選ぶ'
  }[currentSubmode] || 'テーマについて議論する';
  const agenda = agendaItems.length ? `\n現在のアジェンダ：「${agendaItems[Math.min(currentRound-1, agendaItems.length-1)]}」` : '';
  return `あなたは${ai.name}です。テーマ「${sessionTheme}」について会議に参加しています。モード：${subDesc}${agenda}他の参加AI：${others}他のAIの発言を踏まえながら${subDesc}の形式で発言してください。日本語で100〜150文字程度で簡潔に回答してください。`;
}

function buildMessages(sysPrompt) {
  const msgs = [];
  if(sessionHistory.length > 0) {
    const histText = sessionHistory.map(h=>`${h.name}: ${h.content}`).join('\n\n');
    msgs.push({role:'user', content:`これまでの議論:\n\n${histText}\n\nあなたの発言をお願いします。`});
  } else {
    let userMsg = `テーマ「${sessionTheme}」についてあなたの意見を述べてください。`;
    if(attachedFiles.length) {
      const fileInfo = attachedFiles.filter(f=>f.type==='text').map(f=>`\n\n[添付ファイル: ${f.name}]\n${f.data.substring(0,2000)}`).join('');
      userMsg += fileInfo;
    }
    msgs.push({role:'user', content:userMsg});
  }
  return msgs;
}

/* Gemini API */
async function callGemini(ai, key, msgs, sysPrompt) {
  const lastMsg = msgs[msgs.length-1];
  let parts = [{text: lastMsg.content}];
  if(attachedFiles.length && sessionHistory.length===0) {
    const imgFile = attachedFiles.find(f=>f.type==='image');
    if(imgFile) {
      const b64 = imgFile.data.split(',')[1];
      const mimeType = imgFile.data.split(';')[0].split(':')[1];
      parts = [{inline_data:{mime_type:mimeType, data:b64}}, {text:lastMsg.content}];
    }
  }
  const body = {
    system_instruction:{parts:[{text:sysPrompt}]},
    contents:[{role:'user', parts}],
    generationConfig:{maxOutputTokens:1024, temperature:0.8}
  };
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${ai.model}:generateContent?key=${key}`, {
    method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)
  });
  if(!res.ok) { const e=await res.json(); throw new Error(e.error?.message||`HTTP ${res.status}`); }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '応答なし';
}

/* OpenRouter API */
async function callOpenRouter(ai, key, msgs, sysPrompt) {
  const body = {
    model: ai.model,
    messages: [{role:'system', content:sysPrompt}, ...msgs],
    max_tokens: 1024,
    temperature: 0.8
  };
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`,'HTTP-Referer':'https://agora.app','X-Title':'AGORA'},
    body:JSON.stringify(body)
  });
  if(!res.ok) { const e=await res.json(); throw new Error(e.error?.message||`HTTP ${res.status}`); }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '応答なし';
}

/* OpenAI API (ChatGPT) */
async function callOpenAI(ai, key, msgs, sysPrompt) {
  const body = {
    model: ai.model,
    messages: [{role:'system', content:sysPrompt}, ...msgs],
    max_tokens: 1024,
    temperature: 0.8
  };
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`}, body:JSON.stringify(body)
  });
  if(!res.ok) { const e=await res.json(); throw new Error(e.error?.message||`HTTP ${res.status}`); }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '応答なし';
}

/* Groq API */
async function callGroq(ai, key, msgs, sysPrompt) {
  const body = {
    model: ai.model,
    messages: [{role:'system', content:sysPrompt}, ...msgs],
    max_tokens: 1024,
    temperature: 0.8
  };
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`}, body:JSON.stringify(body)
  });
  if(!res.ok) { const e=await res.json(); throw new Error(e.error?.message||`HTTP ${res.status}`); }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '応答なし';
}

/* Claude API */
async function callClaude(ai, key, msgs, sysPrompt) {
  const body = {
    model: ai.model,
    max_tokens: 1024,
    system: sysPrompt,
    messages: msgs
  };
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method:'POST',
    headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify(body)
  });
  if(!res.ok) { const e=await res.json(); throw new Error(e.error?.message||`HTTP ${res.status}`); }
  const data = await res.json();
  return data.content?.[0]?.text || '応答なし';
}

/* ユーザーメッセージ送信 */
async function sendUserMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text || isRunning) return;
  input.value = '';
  const msgEl = document.createElement('div');
  msgEl.className = 'message';
  msgEl.innerHTML = `
    <div class="msg-body" style="display:flex;flex-direction:column;align-items:flex-end">
      <div class="msg-hd" style="justify-content:flex-end"><span class="msg-time">${now()}</span><span class="msg-name" style="color:var(--accent)">あなた</span></div>
      <div class="msg-txt user-msg">${escHtml(text)}</div>
    </div>`;
  document.getElementById('messages').appendChild(msgEl);
  scrollBottom();
  sessionHistory.push({aiId:'user', name:'あなた', content:text});
  document.getElementById('nextBtn').style.display = 'none';
  await runRound();
}

/* ============================================================
// UI ヘルパー
// ============================================================ */
function addDivider(txt) {
  const el = document.createElement('div');
  el.className = 'divider';
  el.textContent = txt;
  document.getElementById('messages').appendChild(el);
  scrollBottom();
}

function addTyping(id) {
  const ai = AI_CONFIG[id];
  const el = document.createElement('div');
  el.className = 'typing-indicator';
  el.innerHTML = `
    <div class="msg-av" style="background:${ai.avatarBg};color:${ai.color}">${ai.avatar}</div>
    <div class="typing-dots"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>`;
  document.getElementById('messages').appendChild(el);
  scrollBottom();
  return el;
}

function addMessage(id, text, isError=false) {
  const ai = AI_CONFIG[id];
  const el = document.createElement('div');
  el.className = 'message';
  el.innerHTML = `
    <div class="msg-av" style="background:${ai.avatarBg};color:${ai.color}">${ai.avatar}</div>
    <div class="msg-body">
      <div class="msg-hd">
        <span class="msg-name" style="color:${ai.color}">${ai.name}</span>
        ${ai.role?`<span class="msg-role">${ai.role}</span>`:''}
        <span class="msg-time">${now()}</span>
      </div>
      <div class="msg-txt${isError?' error':''}">${escHtml(text)}</div>
    </div>`;
  document.getElementById('messages').appendChild(el);
  scrollBottom();
}

function renderAgendaChips(roundIdx) {
  const chips = document.getElementById('agendaChips');
  chips.innerHTML = agendaItems.map((item,i)=>
    `<div class="achip${i===roundIdx?' current':i<roundIdx?' done':''}">${i+1}. ${item}</div>`
  ).join('');
}

function setSendDisabled(v) {
  document.getElementById('sendBtn').disabled = v;
  document.getElementById('chatInput').disabled = v;
}

function scrollBottom() {
  const m = document.getElementById('messages');
  m.scrollTop = m.scrollHeight;
}

function now() { return new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'}); }
function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'); }
function sleep(ms) { return new Promise(r=>setTimeout(r,ms)); }
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2500);
}

/* ============================================================
// X出力モーダル
// ============================================================ */
function openModal() {
  const blocks = document.getElementById('tweetBlocks');
  blocks.innerHTML = '';
  const fullText = buildXText();
  const tweets = splitTweets(fullText);
  tweets.forEach((tw,i)=>{
    const div = document.createElement('div');
    div.className = 'tweet-block';
    div.innerHTML = `
      <div class="tweet-num">${i+1} / ${tweets.length}</div>
      <div class="tweet-text">${escHtml(tw)}</div>
      <div class="tweet-chars">${tw.length} / 280文字</div>`;
    blocks.appendChild(div);
  });
  document.getElementById('modal').classList.add('open');
}

function buildXText() {
  const modeLabel = currentMode==='debate'?'🥊ディベート':'🤝会議';
  const aiNames = selectedAIs.map(id=>AI_CONFIG[id].name).join('・');
  let text = `【AI ${modeLabel}】${sessionTheme}\n\n参加AI：${aiNames}\n`;
  if(agendaItems.length) {
    text += `\n📋 アジェンダ\n${agendaItems.map((a,i)=>`${i+1}. ${a}`).join('\n')}\n`;
  }
  text += '\n';
  sessionHistory.filter(h=>h.aiId!=='user').forEach(h=>{
    text += `\n${AI_CONFIG[h.aiId]?.avatar||''} ${h.name}：${h.content}\n`;
  });
  text += `\n#AIディベート #AGORA`;
  return text;
}

function splitTweets(text) {
  const chunks = [];
  let remaining = text;
  while(remaining.length > 0) {
    if(remaining.length <= 280) { chunks.push(remaining); break; }
    let cut = 280;
    while(cut > 0 && remaining[cut] !== '\n' && remaining[cut] !== '。' && remaining[cut] !== ' ') cut--;
    if(cut===0) cut=280;
    chunks.push(remaining.substring(0,cut));
    remaining = remaining.substring(cut).trimStart();
  }
  return chunks;
}

function copyAll() {
  const blocks = document.querySelectorAll('.tweet-text');
  const all = Array.from(blocks).map(b=>b.textContent).join('\n\n---\n\n');
  navigator.clipboard.writeText(all).then(()=>{
    showToast('コピーしました！');
    closeModal();
  });
}

function closeModal() { document.getElementById('modal').classList.remove('open'); }
