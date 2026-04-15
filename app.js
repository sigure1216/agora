/**
 * AGORA - Multi-AI Debate & Meeting Web App
 * A platform for collaborative AI discussions across 11 diverse models
 *
 * Architecture:
 * - Single-page app with tab-based navigation
 * - Session-based conversation management
 * - Multi-provider API integration with unified interface
 * - Extensible sub-mode system for different discussion formats
 */

// ============================================================================
// AI 設定 - 11個のAIモデル定義
// ============================================================================

const AI_CONFIG = {
  gemini: {
    name: 'Gemini 2.5 Flash', model: 'gemini-2.5-flash',
    color: 'var(--gemini)', avatar: 'G', avatarBg: 'rgba(91,143,255,0.15)',
    tag: 'free', provider: 'gemini', keyId: 'gemini',
    desc: 'Google最新のマルチモーダル高速モデル。テキスト・画像を同時に理解し、長文処理と論理推論のバランスに優れる。最新情報にも強い。',
    ptags: ['🖼 マルチモーダル', '⚡ 高速', '💰 無料', '🇺🇸 Google製']
  },
  gemma: {
    name: 'Gemma 3 27B', model: 'google/gemma-3-27b-it:free',
    color: 'var(--deepseek)', avatar: 'Gm', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'Google DeepMind製オープンモデルの決定版。128Kの長文コンテキストと堅実な日本語処理で、構造的・論理的な議論を落ち着いて展開する。',
    ptags: ['📄 128K文脈', '🧠 論理的', '💰 無料', '🇺🇸 Google製']
  },
  gptoss: {
    name: 'GPT-OSS 20B', model: 'openai/gpt-oss-20b:free',
    color: 'var(--mistral)', avatar: 'O', avatarBg: 'rgba(255,126,179,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'OpenAI初のオープンソースモデル。MoEアーキテクチャで軽量ながらGPT品質の応答。ツール使用・構造化出力に対応。',
    ptags: ['🌐 OpenAI系', '⚡ MoE軽量', '💰 無料', '🇺🇸 OpenAI製']
  },
  llama33: {
    name: 'Llama 3.3 70B', model: 'meta-llama/llama-3.3-70b-instruct:free',
    color: 'var(--llama)', avatar: 'L3', avatarBg: 'rgba(255,179,71,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'Meta製の実用大規模モデル。70Bの地力で幅広いテーマを堅実にこなす。バランス型で議論の基礎を支える安定機。',
    ptags: ['💪 70B規模', '🤝 バランス型', '💰 無料', '🦙 Meta製']
  },
  nemotronano: {
    name: 'Nemotron Nano 9B', model: 'nvidia/nemotron-nano-9b-v2:free',
    color: 'var(--qwen)', avatar: 'Nn', avatarBg: 'rgba(52,211,153,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'NVIDIA製コンパクト高速モデル。9Bながら即答性に優れ、スピード重視のブレストや短文ディベートで活躍。',
    ptags: ['⚡ 超高速応答', '🎯 簡潔明快', '💰 無料', '🟢 NVIDIA製']
  },
  qwen3: {
    name: 'Qwen Plus', model: 'qwen-plus',
    color: 'var(--qwen)', avatar: 'Qw', avatarBg: 'rgba(52,211,153,0.15)',
    tag: 'free', provider: 'dashscope', keyId: 'dashscope',
    desc: 'Alibaba Cloud Model Studio提供のQwenフラッグシップモデル。高性能かつ100万トークン無料枠あり。OpenAI互換APIで安定利用。',
    ptags: ['🌏 多言語', '🧠 高性能', '💰 無料枠あり', '🇨🇳 Alibaba製']
  },
  glm: {
    name: 'GLM 4.5 Air', model: 'z-ai/glm-4.5-air:free',
    color: 'var(--accent2)', avatar: 'GL', avatarBg: 'rgba(0,229,170,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'Zhipu AIのGLM 4.5 Air軽量版。応答が速くバランスに優れる。幅広いテーマで的確かつ流暢な日本語を返す。',
    ptags: ['⚡ 高速', '🗣 流暢な日本語', '💰 無料', '🇨🇳 Zhipu製']
  },
  deepseek: {
    name: 'DeepSeek V3.2（ツッコミ役）', model: 'deepseek-chat',
    color: 'var(--deepseek)', avatar: 'DS', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'paid', provider: 'deepseek', keyId: 'deepseek',
    desc: 'DeepSeek公式API経由の高速汎用モデル。安価かつ低レイテンシで日本語の切り返しが鋭く、矛盾や甘さを即座に指摘するツッコミ役として場を紡める。',
    ptags: ['😈 鋭い切り返し', '💴 激安', '🧠 高推論力', '🇨🇳 DeepSeek製'],
    role: '🎍 ツッコミ役'
  },
  deepseekr: {
    name: 'DeepSeek R1', model: 'deepseek-reasoner',
    color: 'var(--deepseek)', avatar: 'R1', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'paid', provider: 'deepseek', keyId: 'deepseek',
    desc: 'DeepSeek公式のR1系推論モデル。Chain-of-Thoughtで内省しながら結論に至る思考型。複雑な論理・数学・哲学的議論で真価を発揮。',
    ptags: ['🧠 Chain-of-Thought', '🔬 深い推論', '💴 低価格', '🇨🇳 DeepSeek製']
  },
  chatgpt: {
    name: 'ChatGPT 4o', model: 'gpt-4o',
    color: 'var(--chatgpt)', avatar: 'C', avatarBg: 'rgba(116,170,156,0.15)',
    tag: 'paid', provider: 'openai', keyId: 'chatgpt',
    desc: 'OpenAI製のスタンダードAI。膨大な知識量と丁寧な説明、バランスの取れた意見が強み。APIキー設定で利用可能。',
    ptags: ['🌐 圧倒的知名度', '🤝 バランス型', '💳 有料', '🇺🇸 OpenAI製']
  },
  claude: {
    name: 'Claude Sonnet', model: 'claude-sonnet-4-5',
    color: 'var(--claude)', avatar: 'A', avatarBg: 'rgba(212,165,116,0.15)',
    tag: 'paid', provider: 'claude', keyId: 'claude',
    desc: 'Anthropic製AI。倫理的視点と長文理解が業界最高レベル。ニュアンスを大切にした丁寧な議論が得意。APIキー設定で利用可能。',
    ptags: ['📖 長文理解', '⚖️ 倫理的視点', '💳 有料', '🛡 Anthropic製']
  }
};

// ============================================================================
// サブモード設定 - 議論形式 (拡張可能)
// ============================================================================

const SUB_MODES = {
  brainstorm: {
    key: 'brainstorm',
    label: 'アイデア出し',
    icon: '💡',
    desc: '自由な発想でアイデアを出し合う',
    prompt: '自由な発想でアイデアを出し合う'
  },
  study: {
    key: 'study',
    label: '考える',
    icon: '🧠',
    desc: '多角的に分析・解説',
    prompt: '教育的な視点から、異なる角度で分かりやすく解説する'
  },
  devil: {
    key: 'devil',
    label: '悪魔の代弁者',
    icon: '😈',
    desc: '穴・リスク・反論探し',
    prompt: 'あえて反対意見・リスク・穴を指摘する悪魔の代弁者として振る舞う'
  },
  predict: {
    key: 'predict',
    label: '予測',
    icon: '🔮',
    desc: '未来・市場・トレンド',
    prompt: 'データと論理に基づいた未来予測を行う'
  }
};

// ============================================================================
// API キー設定 - 無料/有料セクション
// ============================================================================

const KEY_ROWS = [
  { keyId: 'openrouter', label: 'OpenRouter', color: 'var(--accent)', ph: 'sk-or-v1-... (Gemma/Llama/GLM等共通)' },
  { keyId: 'dashscope', label: 'DashScope (Qwen)', color: 'var(--qwen)', ph: 'sk-... (Alibaba Cloud Model Studio)' },
  { keyId: 'gemini', label: 'Gemini', color: 'var(--gemini)', ph: 'AIzaSy...' }
];

const PAID_KEY_ROWS = [
  { keyId: 'deepseek', label: 'DeepSeek', color: 'var(--deepseek)', ph: 'sk-... (platform.deepseek.com)' },
  { keyId: 'chatgpt', label: 'ChatGPT', color: 'var(--chatgpt)', ph: 'sk-...' },
  { keyId: 'claude', label: 'Claude', color: 'var(--claude)', ph: 'sk-ant-...' }
];

// ============================================================================
// グローバル状態
// ============================================================================

let currentMode = 'debate'; // 'debate' or 'meet'
let currentSubmode = 'brainstorm';
let currentTheme = '';
let selectedAIs = [];
let currentRound = 1;
let maxRounds = 3;

// セッション履歴: [ { role: 'user'|'assistant', id: 'aiId'|null, content: text }, ... ]
let sessionHistory = [];

let isRunning = false;
let currentAttachments = [];

// ============================================================================
// キー管理 - localStorage から読み書き
// ============================================================================

function getKey(keyId) {
  return localStorage.getItem(`agora_key_${keyId}`) || '';
}

function setKey(keyId, val) {
  if (val) {
    localStorage.setItem(`agora_key_${keyId}`, val);
  } else {
    localStorage.removeItem(`agora_key_${keyId}`);
  }
}

function canUse(aiId) {
  const ai = AI_CONFIG[aiId];
  if (!ai) return false;
  const key = getKey(ai.keyId);
  return !!key;
}

function saveKey(keyId) {
  const input = document.querySelector(`input[data-key="${keyId}"]`);
  if (!input) return;
  const val = input.value.trim();
  setKey(keyId, val);
  showToast(val ? `${keyId} を保存` : `${keyId} をクリア`);
}

// ============================================================================
// ユーティリティ関数
// ============================================================================

function now() {
  return new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
}

function escHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  await sleep(2000);
  el.classList.remove('show');
}

function scrollBottom() {
  const chat = document.getElementById('chatMessages');
  if (chat) chat.scrollTop = chat.scrollHeight;
}

function setSendDisabled(v) {
  const btn = document.getElementById('sendBtn');
  if (btn) btn.disabled = v;
}

// ============================================================================
// ナビゲーション - ページ切り替え
// ============================================================================

function switchTab(name, el) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(t => t.classList.remove('active'));
  // Show selected page
  const page = document.getElementById(`page-${name}`);
  if (page) page.classList.add('active');
  // Update tab bar buttons
  document.querySelectorAll('.tab-item').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
}

function gotoStart(mode, sub) {
  currentMode = mode;
  currentSubmode = sub || 'brainstorm';
  switchTab('start', document.querySelector('.tab-item:nth-child(2)'));
  buildModeSelector();
  buildSubModeSelector();
}

// ============================================================================
// AI リスト - AI選択UI の構築
// ============================================================================

function buildAIList() {
  const container = document.getElementById('aiList');
  if (!container) return;
  container.innerHTML = '';

  Object.entries(AI_CONFIG).forEach(([id, ai]) => {
    const canUseThis = canUse(id);
    let tag = ai.tag;
    if (!canUseThis && ai.tag !== 'free') tag = '要APIキー';

    const card = document.createElement('div');
    card.className = 'ai-card';
    card.innerHTML = `
      <div class="ai-card-header">
        <div class="ai-avatar" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
        <div class="ai-info">
          <div class="ai-name">${ai.name}</div>
          <div class="ai-tag">${tag}</div>
        </div>
        <input type="checkbox" class="ai-checkbox" data-ai="${id}" ${canUseThis ? '' : 'disabled'}>
      </div>
      <div class="ai-desc-collapsed">${ai.desc.substring(0, 50)}...</div>
      <div class="ai-desc-expanded hidden">${ai.desc}</div>
      <div class="ai-ptags">
        ${ai.ptags.map(p => `<span>${p}</span>`).join('')}
      </div>
      ${ai.role ? `<div class="ai-role">${ai.role}</div>` : ''}
    `;

    // Expand/collapse description
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('ai-checkbox')) return;
      const exp = card.querySelector('.ai-desc-expanded');
      const col = card.querySelector('.ai-desc-collapsed');
      exp?.classList.toggle('hidden');
      col?.classList.toggle('hidden');
    });

    // Handle checkbox
    const cb = card.querySelector('.ai-checkbox');
    cb.addEventListener('change', () => {
      updateSelectedAIs();
    });

    container.appendChild(card);
  });
}

function updateSelectedAIs() {
  selectedAIs = Array.from(document.querySelectorAll('.ai-checkbox:checked'))
    .map(cb => cb.dataset.ai);
  const btn = document.getElementById('startSessionBtn');
  if (btn) btn.disabled = selectedAIs.length < 2;
}

// ============================================================================
// API キーフォーム - キー入力UI
// ============================================================================

function buildApiKeyForm() {
  const container = document.getElementById('apiKeyForm');
  if (!container) return;
  container.innerHTML = '';

  // Free section
  const freeDiv = document.createElement('div');
  freeDiv.className = 'key-section';
  freeDiv.innerHTML = '<h3>無料API</h3>';
  KEY_ROWS.forEach(row => {
    const row_el = document.createElement('div');
    row_el.className = 'key-row';
    row_el.innerHTML = `
      <label>${row.label}</label>
      <input type="password" class="key-input" data-key="${row.keyId}" placeholder="${row.ph}" value="${getKey(row.keyId)}">
      <button onclick="saveKey('${row.keyId}')">保存</button>
    `;
    freeDiv.appendChild(row_el);
  });
  container.appendChild(freeDiv);

  // Paid section
  const paidDiv = document.createElement('div');
  paidDiv.className = 'key-section';
  paidDiv.innerHTML = '<h3>有料API</h3>';
  PAID_KEY_ROWS.forEach(row => {
    const row_el = document.createElement('div');
    row_el.className = 'key-row';
    row_el.innerHTML = `
      <label>${row.label}</label>
      <input type="password" class="key-input" data-key="${row.keyId}" placeholder="${row.ph}" value="${getKey(row.keyId)}">
      <button onclick="saveKey('${row.keyId}')">保存</button>
    `;
    paidDiv.appendChild(row_el);
  });
  container.appendChild(paidDiv);
}

// ============================================================================
// モード選択 - debate vs meet
// ============================================================================

function buildModeSelector() {
  const debate = document.getElementById('modeDebate');
  const meet = document.getElementById('modeMeet');
  if (debate) debate.classList.toggle('active', currentMode === 'debate');
  if (meet) meet.classList.toggle('active', currentMode === 'meet');
}

function selectMode(mode) {
  currentMode = mode;
  buildModeSelector();
  if (mode === 'debate') {
    document.getElementById('submodeSection').classList.remove('hidden');
  } else {
    document.getElementById('submodeSection').classList.remove('hidden');
  }
}

// ============================================================================
// サブモード選択
// ============================================================================

function buildSubModeSelector() {
  const container = document.getElementById('submodepills');
  if (!container) return;
  container.innerHTML = '';

  Object.values(SUB_MODES).forEach(sub => {
    const pill = document.createElement('button');
    pill.className = 'submode-pill';
    if (sub.key === currentSubmode) pill.classList.add('active');
    pill.textContent = `${sub.icon} ${sub.label}`;
    pill.onclick = () => selSub(pill);
    container.appendChild(pill);
  });
}

function selSub(el) {
  document.querySelectorAll('.submode-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  currentSubmode = el.textContent.split(' ').slice(1).join(' ');
  // Find by label
  currentSubmode = Object.entries(SUB_MODES).find(([, s]) => s.label === el.textContent.split(' ').slice(1).join(' '))?.[0] || 'brainstorm';
}

// ============================================================================
// ラウンド選択
// ============================================================================

function selRound(btn) {
  document.querySelectorAll('.round-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  maxRounds = parseInt(btn.dataset.rounds) || 3;
}

// ============================================================================
// セッション開始 - theme 確認、chat ページへ遷移
// ============================================================================

async function startSession() {
  const themeInput = document.getElementById('themeInput');
  if (!themeInput || !themeInput.value.trim()) {
    showToast('テーマを入力してください');
    return;
  }

  currentTheme = themeInput.value.trim();
  sessionHistory = [];
  currentRound = 1;

  // Switch to chat page
  switchTab('chat', document.querySelector('.tab-item:nth-child(3)'));

  // Set up UI
  document.getElementById('chatTitle').textContent = currentTheme;
  document.getElementById('chatSubtitle').textContent =
    `${currentMode === 'debate' ? '討論' : 'ミーティング'} / ${SUB_MODES[currentSubmode]?.label || currentSubmode}`;

  // Initialize chat
  document.getElementById('chatMessages').innerHTML = '';
  addDivider(`ラウンド ${currentRound} / ${maxRounds}`);

  await runRound();
}

// ============================================================================
// ラウンド実行 - 各 AI を順番に呼び出し
// ============================================================================

async function runRound() {
  if (isRunning) return;
  isRunning = true;
  setSendDisabled(true);

  for (const aiId of selectedAIs) {
    await callAI(aiId);
  }

  isRunning = false;
  setSendDisabled(false);
  scrollBottom();
}

// ============================================================================
// 次のラウンドへ
// ============================================================================

function nextRound() {
  if (currentRound >= maxRounds) {
    showToast('最終ラウンド達成');
    return;
  }
  currentRound++;
  document.getElementById('chatMessages').innerHTML += `<div class="divider">ラウンド ${currentRound} / ${maxRounds}</div>`;
  runRound();
}

// ============================================================================
// プロンプト構築 - system prompt
// ============================================================================

function buildPrompt(aiId) {
  let prompt = `あなたは AIディベートプラットフォーム AGORA のメンバーです。`;
  prompt += `テーマ: "${currentTheme}"\n`;

  if (currentMode === 'debate') {
    // Assign stance: first 1/3 affirmative, next 1/3 negative, rest neutral
    const idx = selectedAIs.indexOf(aiId);
    const third = Math.ceil(selectedAIs.length / 3);
    let stance = '中立的に';
    if (idx < third) stance = '賛成の立場から';
    else if (idx < 2 * third) stance = '反対の立場から';
    prompt += `\n${stance}議論してください。`;
  } else {
    // Meet mode
    const sub = SUB_MODES[currentSubmode];
    if (sub) {
      prompt += `\n方針: ${sub.prompt}`;
    }
  }

  prompt += `\n最大100-150字の簡潔な日本語で。`;
  return prompt;
}

// ============================================================================
// メッセージ配列構築 - session history から
// ============================================================================

function buildMessages(sysPrompt) {
  const msgs = [];

  // Build conversation from history
  let userContent = null;
  for (const entry of sessionHistory) {
    if (entry.role === 'user') {
      userContent = entry.content;
    } else if (entry.role === 'assistant') {
      msgs.push({
        role: 'user',
        content: userContent || `テーマについて議論してください`
      });
      msgs.push({
        role: 'assistant',
        content: entry.content
      });
      userContent = null;
    }
  }

  // If no messages yet, add initial prompt
  if (msgs.length === 0) {
    msgs.push({
      role: 'user',
      content: `テーマについて ${SUB_MODES[currentSubmode]?.prompt || 'あなたの見解を述べてください'}。`
    });
  }

  return msgs;
}

// ============================================================================
// AI 呼び出し - 各プロバイダーの統一インターフェース
// ============================================================================

async function callAI(aiId, retries = 2) {
  const ai = AI_CONFIG[aiId];
  if (!ai) return;

  const key = getKey(ai.keyId);
  if (!key) {
    addMessage(aiId, `APIキーが未設定です (${ai.keyId})`, true);
    return;
  }

  addTyping(aiId);
  const sysPrompt = buildPrompt(aiId);
  const msgs = buildMessages(sysPrompt);

  try {
    let text = '';

    if (ai.provider === 'gemini') {
      text = await callGemini(ai, key, msgs, sysPrompt);
    } else if (ai.provider === 'openrouter') {
      text = await callOpenAICompatible(
        'https://openrouter.ai/api/v1/chat/completions',
        ai, key, msgs, sysPrompt,
        { 'HTTP-Referer': 'https://agora.app', 'X-Title': 'AGORA' }
      );
    } else if (ai.provider === 'openai') {
      text = await callOpenAICompatible(
        'https://api.openai.com/v1/chat/completions',
        ai, key, msgs, sysPrompt
      );
    } else if (ai.provider === 'deepseek') {
      text = await callOpenAICompatible(
        'https://api.deepseek.com/chat/completions',
        ai, key, msgs, sysPrompt
      );
    } else if (ai.provider === 'dashscope') {
      text = await callOpenAICompatible(
        'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
        ai, key, msgs, sysPrompt
      );
    } else if (ai.provider === 'claude') {
      text = await callClaude(ai, key, msgs, sysPrompt);
    }

    // Remove typing indicator
    document.querySelectorAll(`[data-ai="${aiId}"].typing`).forEach(el => el.remove());

    addMessage(aiId, text);
    sessionHistory.push({ role: 'assistant', id: aiId, content: text });
  } catch (err) {
    document.querySelectorAll(`[data-ai="${aiId}"].typing`).forEach(el => el.remove());

    if (retries > 0 && err.message.includes('rate')) {
      await sleep(2000);
      await callAI(aiId, retries - 1);
    } else {
      addMessage(aiId, `エラー: ${err.message}`, true);
    }
  }

  scrollBottom();
}

// ============================================================================
// API ヘルパー - Gemini
// ============================================================================

async function callGemini(ai, key, msgs, sysPrompt) {
  const contents = msgs.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const body = {
    system_instruction: { parts: [{ text: sysPrompt }] },
    contents: contents,
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1024
    }
  };

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${ai.model}:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || `Gemini API error: ${res.status}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// ============================================================================
// API ヘルパー - OpenAI 互換 (OpenRouter, DeepSeek, DashScope, ChatGPT)
// ============================================================================

async function callOpenAICompatible(url, ai, key, msgs, sysPrompt, extraHeaders = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`,
    ...extraHeaders
  };

  const body = {
    model: ai.model,
    messages: [
      { role: 'system', content: sysPrompt },
      ...msgs
    ],
    temperature: 0.8,
    max_tokens: 1024
  };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || `API error: ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

// ============================================================================
// API ヘルパー - Claude (Anthropic 形式)
// ============================================================================

async function callClaude(ai, key, msgs, sysPrompt) {
  const messages = msgs.map(m => ({
    role: m.role,
    content: m.content
  }));

  const body = {
    model: ai.model,
    max_tokens: 1024,
    temperature: 0.8,
    system: sysPrompt,
    messages: messages
  };

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || `Claude API error: ${res.status}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text || '';
}

// ============================================================================
// チャット UI - メッセージ表示
// ============================================================================

function addDivider(txt) {
  const chat = document.getElementById('chatMessages');
  if (!chat) return;
  const div = document.createElement('div');
  div.className = 'divider';
  div.textContent = txt;
  chat.appendChild(div);
}

function addTyping(aiId) {
  const chat = document.getElementById('chatMessages');
  if (!chat) return;
  const ai = AI_CONFIG[aiId];
  if (!ai) return;

  const bubble = document.createElement('div');
  bubble.className = 'message typing';
  bubble.dataset.ai = aiId;
  bubble.innerHTML = `
    <div class="message-avatar" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
    <div class="message-content">
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chat.appendChild(bubble);
  scrollBottom();
}

function addMessage(aiId, text, isError = false) {
  const chat = document.getElementById('chatMessages');
  if (!chat) return;
  const ai = AI_CONFIG[aiId];
  if (!ai) return;

  const bubble = document.createElement('div');
  bubble.className = `message ${isError ? 'error' : ''}`;
  bubble.dataset.ai = aiId;
  bubble.innerHTML = `
    <div class="message-avatar" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
    <div class="message-content">
      <div class="message-name">${ai.name}</div>
      <div class="message-text">${escHtml(text)}</div>
      <div class="message-time">${now()}</div>
    </div>
  `;
  chat.appendChild(bubble);
}

// ============================================================================
// ユーザー入力 - メッセージ送信
// ============================================================================

async function sendUserMessage() {
  const input = document.getElementById('userInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = '';

  // Add to session
  sessionHistory.push({ role: 'user', id: null, content: text });

  // Add to chat UI
  const chat = document.getElementById('chatMessages');
  const bubble = document.createElement('div');
  bubble.className = 'message user';
  bubble.innerHTML = `
    <div class="message-avatar">You</div>
    <div class="message-content">
      <div class="message-text">${escHtml(text)}</div>
      <div class="message-time">${now()}</div>
    </div>
  `;
  chat.appendChild(bubble);
  scrollBottom();

  // Run next round
  await runRound();
}

// ============================================================================
// ファイル添付
// ============================================================================

function handleFile(input, type) {
  const files = input.files;
  if (!files) return;

  for (let file of files) {
    if (type === 'image' && !file.type.startsWith('image/')) continue;
    if (type === 'document' && !['application/pdf', 'text/plain'].includes(file.type)) continue;

    const reader = new FileReader();
    reader.onload = (e) => {
      currentAttachments.push({
        name: file.name,
        type: file.type,
        data: e.target.result
      });
      renderAttachments();
      input.value = '';
    };
    reader.readAsDataURL(file);
  }
}

function renderAttachments() {
  const container = document.getElementById('attachments');
  if (!container) return;
  container.innerHTML = '';

  currentAttachments.forEach((att, i) => {
    const chip = document.createElement('div');
    chip.className = 'attachment-chip';
    chip.innerHTML = `
      <span>${att.name}</span>
      <button onclick="removeFile(${i})">×</button>
    `;
    container.appendChild(chip);
  });
}

function removeFile(i) {
  currentAttachments.splice(i, 1);
  renderAttachments();
}

// ============================================================================
// アジェンダ - ミーティング用議題管理
// ============================================================================

function addAgenda() {
  const input = document.getElementById('agendaInput');
  if (!input || !input.value.trim()) return;

  const items = getAgendaItems();
  items.push(input.value.trim());
  localStorage.setItem('agora_agenda', JSON.stringify(items));
  input.value = '';

  renderAgendaChips(-1);
}

function delAgenda(btn) {
  const items = getAgendaItems();
  const idx = parseInt(btn.dataset.idx);
  items.splice(idx, 1);
  localStorage.setItem('agora_agenda', JSON.stringify(items));
  renderAgendaChips(-1);
}

function getAgendaItems() {
  try {
    return JSON.parse(localStorage.getItem('agora_agenda') || '[]');
  } catch {
    return [];
  }
}

function renderAgendaChips(roundIdx) {
  const container = document.getElementById('agendaChips');
  if (!container) return;
  container.innerHTML = '';

  const items = getAgendaItems();
  items.forEach((item, i) => {
    const chip = document.createElement('button');
    chip.className = `agenda-chip ${i === roundIdx ? 'active' : ''}`;
    chip.innerHTML = `${item} <button class="del-btn" data-idx="${i}" onclick="event.stopPropagation(); delAgenda(this)">×</button>`;
    chip.onclick = () => {
      document.querySelectorAll('.agenda-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    };
    container.appendChild(chip);
  });
}

// ============================================================================
// X 出力モーダル - ツイートスレッド作成
// ============================================================================

function openModal() {
  const modal = document.getElementById('xModal');
  if (!modal) return;

  const text = buildXText();
  const tweets = splitTweets(text);

  const container = document.getElementById('tweetsContainer');
  if (container) {
    container.innerHTML = tweets
      .map((t, i) => `<div class="tweet-preview">[${i + 1}/${tweets.length}]\n${t}</div>`)
      .join('');
  }

  modal.classList.remove('hidden');
}

function buildXText() {
  let text = `【${currentTheme}】\n`;
  text += `${selectedAIs.length} AIが参加した ${SUB_MODES[currentSubmode]?.label || 'ディベート'}\n\n`;

  for (const entry of sessionHistory) {
    if (entry.role === 'assistant') {
      const ai = AI_CONFIG[entry.id];
      text += `${ai?.avatar} ${ai?.name}:\n${entry.content}\n\n`;
    }
  }

  return text;
}

function splitTweets(text) {
  const tweets = [];
  let current = '';
  const words = text.split(' ');

  for (const word of words) {
    if ((current + word).length > 280) {
      tweets.push(current.trim());
      current = word + ' ';
    } else {
      current += word + ' ';
    }
  }

  if (current.trim()) tweets.push(current.trim());
  return tweets.length ? tweets : [text];
}

function copyAll() {
  const tweets = document.querySelectorAll('.tweet-preview');
  const text = Array.from(tweets)
    .map(t => t.textContent.split('\n').slice(1).join('\n'))
    .join('\n\n---\n\n');
  navigator.clipboard.writeText(text);
  showToast('コピーしました');
}

function closeModal() {
  const modal = document.getElementById('xModal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================================
// 初期化
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  buildAIList();
  buildApiKeyForm();
  buildModeSelector();
  buildSubModeSelector();

  // Set up keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey && !isRunning) {
      const input = document.getElementById('userInput');
      if (input && document.activeElement === input) {
        sendUserMessage();
      }
    }
  });
});
