/* ============================================================
// AI設定オブジェクト（ここを変えるだけでバージョンアップ対応）
// ============================================================ */
const AI_CONFIG = {
  gemini: {
    name:'Gemini 2.5 Flash',
    model:'gemini-2.5-flash',
    color:'var(--gemini)', avatar:'G', avatarBg:'rgba(91,143,255,0.15)',
    tag:'free', provider:'gemini', keyId:'gemini',
    desc:'Google最新のマルチモーダル高速モデル。テキスト・画像を同時に理解し、長文処理と論理推論のバランスに優れる。最新情報にも強い。',
    ptags:['🖼 マルチモーダル','⚡ 高速','💰 無料','🇺🇸 Google製']
  },
  gemma: {
    name:'Gemma 3 27B',
    model:'google/gemma-3-27b-it:free',
    color:'var(--deepseek)', avatar:'Gm', avatarBg:'rgba(79,195,247,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Google DeepMind製オープンモデルの決定版。128Kの長文コンテキストと堅実な日本語処理で、構造的・論理的な議論を落ち着いて展開する。',
    ptags:['📄 128K文脈','🧠 論理的','💰 無料','🇺🇸 Google製']
  },
  gptoss: {
    name:'GPT-OSS 20B',
    model:'openai/gpt-oss-20b:free',
    color:'var(--mistral)', avatar:'O', avatarBg:'rgba(255,126,179,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'OpenAI初のオープンソースモデル。MoEアーキテクチャで軽量ながらGPT品質の応答。ツール使用・構造化出力に対応。',
    ptags:['🌐 OpenAI系','⚡ MoE軽量','💰 無料','🇺🇸 OpenAI製']
  },
  llama33: {
    name:'Llama 3.3 70B',
    model:'meta-llama/llama-3.3-70b-instruct:free',
    color:'var(--llama)', avatar:'L3', avatarBg:'rgba(255,179,71,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Meta製の定番大規模モデル。70Bの地力で幅広いテーマを堅実にこなす。バランス型で議論の基盤を支える安定枠。',
    ptags:['💪 70B規模','🤝 バランス型','💰 無料','🦙 Meta製']
  },
  nemotronano: {
    name:'Nemotron Nano 9B',
    model:'nvidia/nemotron-nano-9b-v2:free',
    color:'var(--qwen)', avatar:'Nn', avatarBg:'rgba(52,211,153,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'NVIDIA製コンパクト高速モデル。9Bながら即答性に優れ、スピード重視のブレストや短文ディベートで活躍。',
    ptags:['⚡ 超高速応答','🎯 簡潔明快','💰 無料','🟢 NVIDIA製']
  },
  qwen3: {
    name:'Qwen Plus',
    model:'qwen-plus',
    color:'var(--qwen)', avatar:'Qw', avatarBg:'rgba(52,211,153,0.15)',
    tag:'free', provider:'dashscope', keyId:'dashscope',
    desc:'Alibaba Cloud Model Studio提供のQwenフラッグシップモデル。高性能かつ100万トークン無料枠あり。OpenAI互換APIで安定利用。',
    ptags:['🌏 多言語','🧠 高性能','💰 無料枠あり','🇨🇳 Alibaba製']
  },
  glm: {
    name:'GLM 4.5 Air',
    model:'z-ai/glm-4.5-air:free',
    color:'var(--accent2)', avatar:'GL', avatarBg:'rgba(0,229,170,0.15)',
    tag:'free', provider:'openrouter', keyId:'openrouter',
    desc:'Zhipu AIのGLM 4.5 Air軽量版。応答が速くバランスに優れる。幅広いテーマで的確かつ流暢な日本語を返す。',
    ptags:['⚡ 高速','🗣 流暢な日本語','💰 無料','🇨🇳 Zhipu製']
  },
  deepseek: {
    name:'DeepSeek V3.2（ツッコミ役）',
    model:'deepseek-chat',
    color:'var(--deepseek)', avatar:'DS', avatarBg:'rgba(79,195,247,0.15)',
    tag:'paid', provider:'deepseek', keyId:'deepseek',
    desc:'DeepSeek公式API経由の高速汎用モデル。安価かつ低レイテンシで日本語の切り返しが鋭く、矛盾や甘さを即座に指摘するツッコミ役として場を締める。',
    ptags:['😈 鋭い切り返し','💴 激安','🧠 高推論力','🇨🇳 DeepSeek製'],
    role:'🎭 ツッコミ役'
  },
  deepseekr: {
    name:'DeepSeek R1',
    model:'deepseek-reasoner',
    color:'var(--deepseek)', avatar:'R1', avatarBg:'rgba(79,195,247,0.15)',
    tag:'paid', provider:'deepseek', keyId:'deepseek',
    desc:'DeepSeek公式のR1系推論モデル。Chain-of-Thoughtで内省しながら結論へ至る思考型。複雑な論理・数学・哲学的議論で真価を発揮。',
    ptags:['🧠 Chain-of-Thought','🔬 深い推論','💴 低価格','🇨🇳 DeepSeek製']
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
    {keyId:'openrouter', label:'OpenRouter', color:'var(--accent)', ph:'sk-or-v1-... (Gemma/Llama/GLM等共通)'},
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
    else if(ai.provider==='deepseek') text = await callDeepSeek(ai, key, msgs, sysPrompt);
    else if(ai.provider==='dashscope') text = await callDashScope(ai, key, msgs, sysPrompt);
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
    const roleNote = ai.role ? `\nあなたのキャラクター：${ai.role}。比舌・ユーモア・皮肉を交えた発言が持ち味です。` : '';
    return `あなたは${ai.name}です。テーマ「${sessionTheme}」についてディベートに参加しています。\n他の参加AI：${others}\nあなたは${stance}から意見を述べてください。${roleNote}\n他のAIの発言を踏まえて反論・補強しながら議論を深めてください。日本語で100〜150文字程度で簡潔に回答してください。`;
  }
  const subDesc = {
    brainstorm:'自由な発想でアイデアを出し合う',
    decide:'最善の選択肢を選ぶための分析と判断を行う',
    action:'実行可能なタスクと計画に落とし込む',
    idea:'できるだけ多くの独創的なアイデアを量産する',
    persona:'与えられた役割・ペルソナの視点から意見を述べる',
    devil:'あえて反対意見・リスク・空を指摘する悪魔の代弁者として振る舞う',
    review:'文章・企画・コードの問題点と改善点を具体的に指摘する',
    study:'教育的な観点から、異なる角度で分かりやすく解説する',
    predict:'データと論理に基づいた未来予測を行う',
    vote:'公平な視点て��B��*{�
��
K��W����_��r�Z�
K��؜(���m���ɕ��MՉ����t��������{���������â�[�g�
,��(������Ё�������􁅝����%ѕ�̹����Ѡ����q��>��r����
��
�
��ώ��k�0�텝����%ѕ��m5�Ѡ��������ɕ��I�չ��İ�������%ѕ�̹����Ѡ�ĥu��5��耜��(��ɕ��ɸ���������텤���������g����{�0��͕�ͥ��Q������7���������k��Î��>�*��_������g�����'��h���Չ�͍��텝�������[���>�*�'��h���ѡ������[��'���f뢢�
K��?���#���3�
$���Չ�͍��������?���f뢢�_���?���W���^��r���{����Îp��ÚZ��_��/�ꛎ����S���n{��S�_���?���W��	��)�()�չ�ѥ����ե��5��ͅ��̡���Aɽ��Ф��(������Ё�̀͝�mt�(�����͕�ͥ��!��ѽ�乱���Ѡ�������(��������Ё����Q��Ѐ�͕�ͥ��!��ѽ�乵����������������耑������ѕ������������q�q����(�����̹͝��͠��ɽ����͕Ȝ�����ѕ��郎O�
3��������â�X�q�q�������Q����q�q��������f뢢�
K�+��c��_���g�	����(��􁕱͔��(������Ё�͕�5͜�􁃎��{�0��͕�ͥ��Q������7��������������?��/�
K��Î���?���W��	��(���������х�������̹����Ѡ���(����������Ё����%������х�������̹���ѕȡ�������������ѕ�М����������q�q�o����c�W�
��
���耑혹�����uq��혹��ф��Չ��ɥ�����������������������(�������͕�5͜��􁙥��%����(�����(�����̹͝��͠��ɽ����͕Ȝ�����ѕ����͕�5͝���(���(��ɕ��ɸ��͝��)�((���������A$���)��幌��չ�ѥ�������������������䰁�̰͝����Aɽ��Ф��(������Ё����5͜��͝�m�̹͝����Ѡ��t�(����Ё����̀�m�ѕ��聱���5͜����ѕ���t�(�������х�������̹����Ѡ����͕�ͥ��!��ѽ�乱���Ѡ�������(��������Ё���������х�������̹��������������������������(����������������(����������Ё��Ѐ􁥵�������ф�����Р����l�t�(����������Ё����Q����􁥵�������ф�����Р�윥l�t�����Р�蜥l�t�(����������̀�m�������}��ф������}����鵥��Q�������ф��������ѕ��鱅��5͜����ѕ���t�(�����(���(������Ё������(�������ѕ�}�����Սѥ����������m�ѕ������Aɽ����u��(�������ѕ����m�ɽ����͕Ȝ��������t�(��������Ʌѥ������������=�����Q���������а�ѕ���Ʌ��ɔ�����(����(������Ёɕ̀�݅�Ё��э��������輽����Ʌѥٕ����Յ������������̹�����ŉ�ф������̼�텤�������靕��Ʌѕ��ѕ�����������������(������ѡ���A=MP��������������ѕ�еQ����蝅������ѥ����ͽ����������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ����ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф��������ѕ���l�t�����ѕ�����������l�t��ѕ�Ё������s��S���\��)�((���=���I��ѕȁA$���)��幌��չ�ѥ�������=���I��ѕȡ������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������ͅ����m�ɽ������ѕ�������ѕ������Aɽ����������͝�t�(�������}ѽ��������а(����ѕ���Ʌ��ɔ����(����(������Ёɕ̀�݅�Ё��э��������輽����ɽ�ѕȹ��������Ľ���н������ѥ��̜���(������ѡ���A=MP��(���������������ѕ�еQ����蝅������ѥ����ͽ�����ѡ�ɥ�ѥ����	��ɕȀ���������!QQ@�I���ɕȜ蝡����輽���Ʉ�������`�Q�ѱ���=I���(���������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ����ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����������l�t�����ͅ�������ѕ�Ё������s��S���\��)�((���=���$�A$�����AP����)��幌��չ�ѥ�������=���$�������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������ͅ����m�ɽ������ѕ�������ѕ������Aɽ����������͝�t�(�������}ѽ��������а(����ѕ���Ʌ��ɔ����(����(������Ёɕ̀�݅�Ё��э��������輽����������������Ľ���н������ѥ��̜���(������ѡ���A=MP��������������ѕ�еQ����蝅������ѥ����ͽ�����ѡ�ɥ�ѥ����	��ɕȀ���������������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ����ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����������l�t�����ͅ�������ѕ�Ё������s��S���\��)�((������M����A$������?�nӖ>��7�=���'��K�>l����)��幌��չ�ѥ����������M����������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������ͅ����m�ɽ������ѕ�������ѕ������Aɽ����������͝�t�(�������}ѽ��������а(����ѕ���Ʌ��ɔ����(����(������Ёɕ̀�݅�Ё��э��������輽��������͕����������н������ѥ��̜���(������ѡ���A=MP��������������ѕ�еQ����蝅������ѥ����ͽ�����ѡ�ɥ�ѥ����	��ɕȀ���������������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ������э������������ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����������l�t�����ͅ�������ѕ�Ё������s��S���\��)�((����͡M���������������Ր��A$��P�Eݕ����)��幌��չ�ѥ��������͡M�����������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������ͅ����m�ɽ������ѕ�������ѕ������Aɽ����������͝�t�(�������}ѽ��������а(����ѕ���Ʌ��ɔ����(����(������Ёɕ̀�݅�Ё��э��������輽��͍͡������Ѱ�����չ�̹���������ѥ����������Ľ���н������ѥ��̜���(������ѡ���A=MP��������������ѕ�еQ����蝅������ѥ����ͽ�����ѡ�ɥ�ѥ����	��ɕȀ���������������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ������э������������ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����������l�t�����ͅ�������ѕ�Ё������s��S���\��)�((���ɽāA$���)��幌��չ�ѥ�������ɽġ������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������ͅ����m�ɽ������ѕ�������ѕ������Aɽ����������͝�t�(�������}ѽ��������а(����ѕ���Ʌ��ɔ����(����(������Ёɕ̀�݅�Ё��э��������輽�����ɽĹ������������Ľ���н������ѥ��̜���(������ѡ���A=MP��������������ѕ�еQ����蝅������ѥ����ͽ�����ѡ�ɥ�ѥ����	��ɕȀ���������������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ����ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����������l�t�����ͅ�������ѕ�Ё������s��S���\��)�((�����Ց��A$���)��幌��չ�ѥ���������Ց��������䰁�̰͝����Aɽ��Ф��(������Ё������(���������聅��������(�������}ѽ��������а(�������ѕ�����Aɽ��а(�������ͅ���聵͝�(����(������Ёɕ̀�݅�Ё��э��������輽������ѡɽ���������Ľ���ͅ��̜���(������ѡ���A=MP��(���������������ѕ�еQ����蝅������ѥ����ͽ����൅������魕䰝��ѡɽ����ٕ�ͥ�������̴�ش�Ĝ����ѡɽ���������ɽ�̵��ɕ�е�ɽ�͕ȵ�����̜���Ք���(���������)M=8���ɥ����䡉���(�����(������ɕ̹����쁍���Ё���݅�Ёɕ̹�ͽ����ѡɽ܁��܁�ɽȡ����ɽ������ͅ����!QQ@���ɕ̹�х��������(������Ё��ф��݅�Ёɕ̹�ͽ����(��ɕ��ɸ���ф����ѕ����l�t��ѕ�Ё������s��S���\��)�((�������
ێ����
��
�������)��幌��չ�ѥ���͕��U͕�5��ͅ������(������Ё����Ѐ􁑽�յ��й���������	�%�������%���М��(������Ёѕ�Ѐ􁥹��йم�Ք��ɥ����(������ѕ�Ё�����Iչ������ɕ��ɸ�(������йم�Ք�􀜜�(������Ё�͝��􁑽�յ��й�ɕ�ѕ�����Р���؜��(���͝�������9����􀝵��ͅ����(���͝�������!Q50��(�����؁������͜����䈁��屔􉑥�����陱��홱�൑�ɕ�ѥ��鍽�յ�텱�����ѕ��陱�ൕ����(�������؁������͜�������屔���ѥ�䵍��ѕ��陱�ൕ����������������͜�ѥ��������ܠ��������������������͜���������屔􉍽����مȠ�������Ф������|������𽑥��(�������؁������͜���Ё�͕ȵ�͜����͍!ѵ��ѕ�Х�𽑥��(����𽑥����(�����յ��й���������	�%������ͅ��̜��������������͝���(��͍ɽ��	��ѽ����(��͕�ͥ��!��ѽ����͠�텥%���͕Ȝ������蟎���|������ѕ���ѕ�����(�����յ��й���������	�%�������	Ѹ�����屔��������􀝹�����(���݅�Ё�չI�չ����)�((���������������������������������������������������������������(���U$��c���G��(��������������������������������������������������������������􀨼)�չ�ѥ�������٥��ȡ��Ф��(������Ё���􁑽�յ��й�ɕ�ѕ�����Р���؜��(����������9����􀝑�٥��Ȝ�(�����ѕ����ѕ�Ѐ�����(�����յ��й���������	�%������ͅ��̜�����������������(��͍ɽ��	��ѽ����)�()�չ�ѥ������Q�����������(������Ё����%}=9%m��t�(������Ё���􁑽�յ��й�ɕ�ѕ�����Р���؜��(����������9������������������ѽȜ�(����������!Q50��(�����؁������͜��؈���屔􉉅���ɽչ��텤��مх�	��퍽����텤���������텤��مх��𽑥��(�����؁����������������̈��؁������ё�Ј�𽑥���؁������ё�Ј�𽑥���؁������ё�Ј�𽑥��𽑥����(�����յ��й���������	�%������ͅ��̜�����������������(��͍ɽ��	��ѽ����(��ɕ��ɸ����)�()�չ�ѥ������5��ͅ�������ѕ�а����ɽ�����͔���(������Ё����%}=9%m��t�(������Ё���􁑽�յ��й�ɕ�ѕ�����Р���؜��(����������9����􀝵��ͅ����(����������!Q50��(�����؁������͜��؈���屔􉉅���ɽչ��텤��مх�	��퍽����텤���������텤��مх��𽑥��(�����؁������͜������(�������؁������͜�����(��������������������͜���������屔􉍽����텤���������텤������������(���������텤�ɽ����������������͜�ɽ�����텤�ɽ����������蜝�(��������������������͜�ѥ��������ܠ��������(������𽑥��(�������؁������͜���Б����ɽ������ɽȜ蜝����͍!ѵ��ѕ�Х�𽑥��(����𽑥����(�����յ��й���������	�%������ͅ��̜�����������������(��͍ɽ��	��ѽ����)�()�չ�ѥ���ɕ������������̡ɽչ�%�ँ�(������Ё����̀􁑽�յ��й���������	�%������������̜��(������̹�����!Q50�􁅝����%ѕ�̹������ѕ������(������؁�����􉅍���������ɽչ�%��������ɕ�М��ɽչ�%����������蜝�������������ѕ��𽑥���(�������������)�()�չ�ѥ���͕�M����ͅ�����ؤ��(�����յ��й���������	�%���͕��	Ѹ�����ͅ��������(�����յ��й���������	�%�������%���М����ͅ��������)�()�չ�ѥ���͍ɽ��	��ѽ�����(������Ё��􁑽�յ��й���������	�%������ͅ��̜��(����͍ɽ��Q���􁴹͍ɽ��!������)�()�չ�ѥ�����ܠ���ɕ��ɸ���܁�є���ѽ1�����Q���M�ɥ�������)@��������ȵ����М�����є�ȵ����Н����)�չ�ѥ����͍!ѵ��̤��ɕ��ɸ�̹ɕ����������������윤�ɕ�������𽜰����윤�ɕ���������������윤�ɕ�������q������������)�չ�ѥ���ͱ�����̤��ɕ��ɸ���܁Aɽ��͔����͕�Q�����Сȱ�̤���)�չ�ѥ���͡��Q���С�͜���(������ЁЀ􁑽�յ��й���������	�%���ѽ��М��(��йѕ����ѕ�Ѐ�͜�(��й�����1��й�����͡�ܜ��(��͕�Q�����Р����й�����1��йɕ��ٔ��͡�ܜ���������)�((���������������������������������������������������������������(���c��*o������(��������������������������������������������������������������􀨼)�չ�ѥ�������5��������(������Ё�����̀􁑽�յ��й���������	�%����ݕ��	����̜��(�������̹�����!Q50�􀜜�(������Ё�ձ�Q��Ѐ�ե��aQ��Р��(������Ё�ݕ��̀������Qݕ��̡�ձ�Q��Ф�(���ݕ��̹���������ܱ�����(��������Ё��؀􁑽�յ��й�ɕ�ѕ�����Р���؜��(������ع�����9������ݕ�е�������(������ع�����!Q50��(�������؁�������ݕ�е�մ�������􀼀���ݕ��̹����ѡ�𽑥��(�������؁�������ݕ�еѕ�Ј���͍!ѵ���ܥ�𽑥��(�������؁�������ݕ�е����̈����ܹ����ѡ􀼀��ÚZ��\𽑥����(���������̹�������������ؤ�(�����(�����յ��й���������	�%����������������1��й������������)�()�չ�ѥ����ե��aQ��Р���(������Ё����1��������ɕ��5�����������є����~�+��
��g�� ���~�w��k�����(������Ё��9���̀�͕���ѕ�%̹��������%}=9%m��t��������������윤�(����Ёѕ�Ѐ􁃎A$�������1������D��͕�ͥ��Q�����q�q��>�*�'��h�텥9�����q���(�����������%ѕ�̹����Ѡ���(����ѕ�Ѐ��q��~N,��
��
�
��ώq��텝����%ѕ�̹��������������������������������q����q���(���(��ѕ�Ѐ��q���(��͕�ͥ��!��ѽ�乙��ѕȡ�������%������͕Ȝ�������������(����ѕ�Ѐ��q���%}=9%m����%�t���مх��������������h�������ѕ���q���(�����(��ѕ�Ѐ��q��'��
��g�� ��=I��(��ɕ��ɸ�ѕ���)�()�չ�ѥ��������Qݕ��̡ѕ�Ф��(������Ё��չ�̀�mt�(����Ёɕ���������ѕ���(��ݡ����ɕ������������Ѡ�������(�������ɕ������������Ѡ��������쁍�չ�̹��͠�ɕ��������쁉ɕ����(������Ё��Ѐ�����(����ݡ������Ѐ�������ɕ�������m���t����q������ɕ�������m���t���􀟎�����ɕ�������m���t���􀜀�����д��(������������������������(������չ�̹��͠�ɕ���������Չ��ɥ�������Ф��(����ɕ���������ɕ���������Չ��ɥ�����Ф��ɥ�Mх�Р��(���(��ɕ��ɸ���չ���)�()�չ�ѥ�������������(������Ё�����̀􁑽�յ��й�Օ��M����ѽ�������ݕ�еѕ�М��(������Ё������Ʌ乙ɽ�������̤����������ѕ����ѕ�Ф�������q�q����q�q����(����٥��ѽȹ�������ɐ��ɥѕQ��С�����ѡ��������(����͡��Q���Р��
ώS��_���_������(�������͕5�������(�����)�()�չ�ѥ������͕5�������쁑��յ��й���������	�%����������������1��йɕ��ٔ����������(