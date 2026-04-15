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
    ptags: ['🖼 マルチモーダル', '⚡ 高速', '💰 無料', '🇺🇸 Google製'],
    dailyLimit: 500
  },
  gemma: {
    name: 'Gemma 3 27B', model: 'gemma-3-27b-it',
    color: 'var(--deepseek)', avatar: 'Gm', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'free', provider: 'gemini', keyId: 'gemini',
    desc: 'Google DeepMind製オープンモデルの決定版。128Kの長文コンテキストと堅実な日本語処理で、構造的・論理的な議論を落ち着いて展開する。',
    ptags: ['📄 128K文脈', '🧠 論理的', '💰 無料', '🇺🇸 Google製'],
    dailyLimit: 500
  },
  gptoss: {
    name: 'GPT-OSS 20B', model: 'openai/gpt-oss-20b:free',
    color: 'var(--mistral)', avatar: 'O', avatarBg: 'rgba(255,126,179,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'OpenAI初のオープンソースモデル。MoEアーキテクチャで軽量ながらGPT品質の応答。ツール使用・構造化出力に対応。',
    ptags: ['🌐 OpenAI系', '⚡ MoE軽量', '💰 無料', '🇺🇸 OpenAI製'],
    dailyLimit: 50
  },
  nemotronano: {
    name: 'Nemotron Nano 9B', model: 'nvidia/nemotron-nano-9b-v2:free',
    color: 'var(--qwen)', avatar: 'Nn', avatarBg: 'rgba(52,211,153,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'NVIDIA製コンパクト高速モデル。9Bながら即答性に優れ、スピード重視のブレストや短文ディベートで活躍。',
    ptags: ['⚡ 超高速応答', '🎯 簡潔明快', '💰 無料', '🟢 NVIDIA製'],
    dailyLimit: 50
  },
  qwen3: {
    name: 'Qwen Plus', model: 'qwen-plus',
    color: 'var(--qwen)', avatar: 'Qw', avatarBg: 'rgba(52,211,153,0.15)',
    tag: 'free', provider: 'dashscope', keyId: 'dashscope',
    desc: 'Alibaba Cloud Model Studio提供のQwenフラッグシップモデル。高性能かつ100万トークン無料枠あり。OpenAI互換APIで安定利用。',
    ptags: ['🌏 多言語', '🧠 高性能', '💰 無料枠あり', '🇨🇳 Alibaba製'],
    dailyLimit: 200
  },
  glm: {
    name: 'GLM 4.5 Air', model: 'z-ai/glm-4.5-air:free',
    color: 'var(--accent2)', avatar: 'GL', avatarBg: 'rgba(0,229,170,0.15)',
    tag: 'free', provider: 'openrouter', keyId: 'openrouter',
    desc: 'Zhipu AIのGLM 4.5 Air軽量版。応答が速くバランスに優れる。幅広いテーマで的確かつ流暢な日本語を返す。',
    ptags: ['⚡ 高速', '🗣 流暢な日本語', '💰 無料', '🇨🇳 Zhipu製'],
    dailyLimit: 50
  },
  groq: {
    name: 'Llama 3.3 70B (Groq)', model: 'llama-3.3-70b-versatile',
    color: 'var(--grok)', avatar: 'Gq', avatarBg: 'rgba(56,189,248,0.15)',
    tag: 'free', provider: 'groq', keyId: 'groq',
    desc: 'Groq LPU推論エンジンで動作するLlama 3.3 70B。圧倒的な応答速度が最大の特徴で、リアルタイム議論に最適。',
    ptags: ['⚡ 超高速推論', '💪 70B規模', '💰 無料枠あり', '🚀 Groq LPU'],
    dailyLimit: 30
  },
  deepseek: {
    name: 'DeepSeek V3.2', model: 'deepseek-chat',
    color: 'var(--deepseek)', avatar: 'DS', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'paid', provider: 'deepseek', keyId: 'deepseek',
    desc: 'DeepSeek公式API経由の高速汎用モデル。安価かつ低レイテンシで日本語の切り返しが鋭く、矛盾や甘さを即座に指摘するツッコミ役として場を紡める。',
    ptags: ['😈 鋭い切り返し', '💴 激安', '🧠 高推論力', '🇨🇳 DeepSeek製'],
    role: '🎍 ツッコミ役',
    dailyLimit: null
  },
  deepseekr: {
    name: 'DeepSeek R1', model: 'deepseek-reasoner',
    color: 'var(--deepseek)', avatar: 'R1', avatarBg: 'rgba(79,195,247,0.15)',
    tag: 'paid', provider: 'deepseek', keyId: 'deepseek',
    desc: 'DeepSeek公式のR1系推論モデル。Chain-of-Thoughtで内省しながら結論に至る思考型。複雑な論理・数学・哲学的議論で真価を発揮。',
    ptags: ['🧠 Chain-of-Thought', '🔬 深い推論', '💴 低価格', '🇨🇳 DeepSeek製'],
    dailyLimit: null
  },
  chatgpt: {
    name: 'ChatGPT 4o', model: 'gpt-4o',
    color: 'var(--chatgpt)', avatar: 'C', avatarBg: 'rgba(116,170,156,0.15)',
    tag: 'paid', provider: 'openai', keyId: 'chatgpt',
    desc: 'OpenAI製のスタンダードAI。膨大な知識量と丁寧な説明、バランスの取れた意見が強み。APIキー設定で利用可能。',
    ptags: ['🌐 圧倒的知名度', '🤝 バランス型', '💳 有料', '🇺🇸 OpenAI製'],
    dailyLimit: null
  },
  claude: {
    name: 'Claude Sonnet', model: 'claude-sonnet-4-5',
    color: 'var(--claude)', avatar: 'A', avatarBg: 'rgba(212,165,116,0.15)',
    tag: 'paid', provider: 'claude', keyId: 'claude',
    desc: 'Anthropic製AI。倫理的視点と長文理解が業界最高レベル。ニュアンスを大切にした丁寧な議論が得意。APIキー設定で利用可能。',
    ptags: ['📖 長文理解', '⚖️ 倫理的視点', '💳 有料', '🛡 Anthropic製'],
    dailyLimit: null
  }
};

// ============================================================================
// 使用回数トラッキング
// ============================================================================

function getUsageKey() {
  return 'agora_usage_' + new Date().toISOString().slice(0, 10);
}

function getDailyUsage() {
  const key = getUsageKey();
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
}

function recordUsage(aiId) {
  const key = getUsageKey();
  const usage = getDailyUsage();
  usage[aiId] = (usage[aiId] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(usage));
  // 古い日付のデータを削除
  Object.keys(localStorage).forEach(k => {
    if (k.startsWith('agora_usage_') && k !== key) localStorage.removeItem(k);
  });
}

function getRemaining(aiId) {
  const ai = AI_CONFIG[aiId];
  if (!ai || ai.dailyLimit === null) return null;
  const usage = getDailyUsage();
  const used = usage[aiId] || 0;
  return Math.max(0, ai.dailyLimit - used);
}

// ============================================================================
// サブモード設定 - 議論形式 (拡張可能)
// ============================================================================

const SUB_MODES = {
  study: {
    key: 'study',
    label: '考える',
    icon: '🧠',
    desc: '多角的に分析・解説',
    prompt: '教育的な視点から、異なる角度で分かりやすく解説する'
  },
  brainstorm: {
    key: 'brainstorm',
    label: 'アイデア出し',
    icon: '💡',
    desc: '自由な発想でアイデアを出し合う',
    prompt: '自由な発想でアイデアを出し合う'
  },
  predict: {
    key: 'predict',
    label: '予測',
    icon: '🔮',
    desc: '未来・市場・トレンド',
    prompt: 'データと論理に基づいた未来予測を行う'
  },
  devil: {
    key: 'devil',
    label: '悪魔の代弁者',
    icon: '😈',
    desc: '穴・リスク・反論探し',
    prompt: 'あえて反対意見・リスク・穴を指摘する悪魔の代弁者として振る舞う'
  }
};

// ============================================================================
// API キー設定 - 無料/有料セクション
// ============================================================================

const KEY_ROWS = [
  { keyId: 'openrouter', label: 'OpenRouter', color: 'var(--accent)', ph: 'sk-or-v1-... (Gemma/Llama/GLM等共通)' },
  { keyId: 'dashscope', label: 'DashScope (Qwen)', color: 'var(--qwen)', ph: 'sk-... (Alibaba Cloud Model Studio)' },
  { keyId: 'gemini', label: 'Gemini', color: 'var(--gemini)', ph: 'AIzaSy...' },
  { keyId: 'groq', label: 'Groq', color: 'var(--grok)', ph: 'gsk_... (console.groq.com)' }
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
let currentSubmode = 'study';
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
  const badge = document.getElementById(`saved-${keyId}`);
  if (badge) {
    badge.textContent = val ? '✓ 接続済み' : '未設定';
    badge.className = `key-card-status ${val ? 'saved' : 'empty'}`;
  }
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
  const chat = document.getElementById('messages');
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
  // AI選択画面を開くたびにゲージを更新
  if (name === 'start') buildAIList();
}

function gotoStart(mode, sub) {
  currentMode = mode;
  currentSubmode = sub || 'study';
  switchTab('start', document.querySelector('.tab-item:nth-child(2)'));
  buildModeSelector();
  buildSubModeSelector();
}

// ============================================================================
// AI リスト - AI選択UI の構築
// ============================================================================

function toggleInfo(aiId) {
  const profile = document.getElementById('profile-' + aiId);
  if (!profile) return;
  if (profile.style.display === 'none' || profile.style.display === '') {
    profile.style.display = 'block';
  } else {
    profile.style.display = 'none';
  }
}

function toggleAI(aiId) {
  const items = document.querySelectorAll('.ai-item');
  items.forEach(item => {
    const circle = item.querySelector('.check-circle');
    if (circle && circle.dataset.ai === aiId) {
      item.classList.toggle('active');
    }
  });
  updateSelectedAIs();
}

function buildAIList() {
  const container = document.getElementById('aiList');
  if (!container) return;
  container.innerHTML = '';

  Object.entries(AI_CONFIG).forEach(([id, ai]) => {
    const canUseThis = canUse(id);
    let tagClass = ai.tag;  // 'free' or 'paid'
    let tagLabel = ai.tag === 'free' ? 'free' : 'paid';
    if (!canUseThis && ai.tag !== 'free') { tagClass = 'nokey'; tagLabel = '要APIキー'; }

    const remaining = getRemaining(id);
    let quotaHtml = '';
    if (remaining !== null) {
      const limit = ai.dailyLimit;
      const used = limit - remaining;
      const pct = Math.round((remaining / limit) * 100);
      const barColor = pct > 50 ? 'var(--accent2)' : pct > 20 ? '#ffb347' : 'var(--debate)';
      quotaHtml = `
        <div style="display:flex;align-items:center;gap:6px;margin-top:5px">
          <div style="flex:1;height:3px;background:var(--surface3);border-radius:2px;overflow:hidden">
            <div style="width:${pct}%;height:100%;background:${barColor};border-radius:2px;transition:width 0.3s"></div>
          </div>
          <span style="font-size:10px;color:${barColor};font-family:'DM Mono',monospace;white-space:nowrap;min-width:55px;text-align:right">${remaining}/${limit}</span>
        </div>`;
    } else {
      quotaHtml = `
        <div style="margin-top:5px">
          <span style="font-size:10px;color:var(--text-dim);font-family:'DM Mono',monospace">従量課金</span>
        </div>`;
    }

    const item = document.createElement('div');
    item.className = 'ai-item';
    item.style.color = ai.color;
    item.innerHTML = `
      <div class="ai-row">
        <div class="ai-av" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
        <div class="ai-inf" onclick="toggleAI('${id}')">
          <div class="ai-nm">${ai.name} <span class="ai-tag ${tagClass}">${tagLabel}</span></div>
          <div class="ai-md" style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">
            ${ai.ptags.map(p => `<span class="ai-ptag">${p}</span>`).join('')}
          </div>
          ${quotaHtml}
        </div>
        <button class="info-btn" onclick="event.stopPropagation();toggleInfo('${id}')">ℹ</button>
        <div class="check-circle" data-ai="${id}" onclick="event.stopPropagation();toggleAI('${id}')">✓</div>
      </div>
      <div class="ai-profile" id="profile-${id}" style="display:none;max-height:none;overflow:visible">
        <div class="ai-profile-inner">
          <div class="ai-profile-desc">${ai.desc}</div>
          <div class="ai-profile-tags">
            ${ai.ptags.map(p => `<span class="ai-ptag">${p}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

function updateSelectedAIs() {
  selectedAIs = Array.from(document.querySelectorAll('.ai-item.active'))
    .map(item => item.querySelector('.check-circle').dataset.ai);
  const btn = document.getElementById('startBtn');
  if (btn) btn.disabled = selectedAIs.length < 2;
}

// ============================================================================
// API キーフォーム - キー入力UI
// ============================================================================

function buildApiKeyForm() {
  const container = document.getElementById('apiKeyForm');
  if (!container) return;
  container.innerHTML = '';

  function buildSection(title, icon, badge, rows) {
    const section = document.createElement('div');
    section.className = 'key-section';
    section.innerHTML = `<div class="key-section-title"><span class="key-section-icon">${icon}</span><span class="key-section-label">${title}</span><span class="key-section-badge ${badge}">${badge === 'free' ? 'FREE' : 'PAID'}</span></div>`;
    rows.forEach(row => {
      const saved = getKey(row.keyId);
      const card = document.createElement('div');
      card.className = 'key-card';
      card.innerHTML = `
        <div class="key-card-header">
          <div class="key-card-name">
            <div class="key-card-dot" style="background:${row.color}"></div>
            <div class="key-card-label">${row.label}</div>
          </div>
          <div class="key-card-status ${saved ? 'saved' : 'empty'}" id="saved-${row.keyId}">${saved ? '✓ 接続済み' : '未設定'}</div>
        </div>
        <div class="key-card-input-row">
          <input type="password" class="key-card-input" data-key="${row.keyId}" placeholder="${row.ph}" value="${saved}">
          <button class="key-card-save" onclick="saveKey('${row.keyId}')">保存</button>
        </div>
      `;
      section.appendChild(card);
    });
    container.appendChild(section);
  }

  buildSection('無料 API', '🌐', 'free', KEY_ROWS);
  buildSection('有料 API', '💎', 'paid', PAID_KEY_ROWS);
}

// ============================================================================
// モード選択 - debate vs meet
// ============================================================================

function buildModeSelector() {
  const debate = document.getElementById('msDebate');
  const meet = document.getElementById('msMeet');
  if (debate) {
    debate.classList.toggle('active', currentMode === 'debate');
    debate.classList.toggle('debate', currentMode === 'debate');
  }
  if (meet) {
    meet.classList.toggle('active', currentMode === 'meet');
    meet.classList.toggle('meet', currentMode === 'meet');
  }
  // Show/hide submode card based on mode
  const submodeCard = document.getElementById('submodeCard');
  const roundCard = document.getElementById('roundCard');
  if (submodeCard) submodeCard.style.display = currentMode === 'meet' ? '' : 'none';
  if (roundCard) roundCard.style.display = currentMode === 'debate' ? '' : 'none';
  // Update start button text
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.textContent = currentMode === 'debate' ? '▶ ディベート開始' : '▶ 会議開始';
    startBtn.className = currentMode === 'debate' ? 'start-btn' : 'start-btn meet-btn';
  }
}

function selectMode(mode) {
  currentMode = mode;
  buildModeSelector();
}

// ============================================================================
// サブモード選択
// ============================================================================

function buildSubModeSelector() {
  // Use the existing sm-pill elements in HTML
  const pills = document.querySelectorAll('.sm-pill');
  pills.forEach(pill => {
    const sub = pill.dataset.sub;
    pill.classList.toggle('active', sub === currentSubmode);
  });
}

function selSub(el) {
  document.querySelectorAll('.sm-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  currentSubmode = el.dataset.sub || 'study';
}

// ============================================================================
// ラウンド選択
// ============================================================================

function selRound(btn) {
  document.querySelectorAll('.round-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  maxRounds = parseInt(btn.textContent) || 3;
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
  if (selectedAIs.length < 2) {
    showToast('AIを2つ以上選択してください');
    return;
  }

  currentTheme = themeInput.value.trim();
  sessionHistory = [];
  currentRound = 1;

  // Switch to chat page
  switchTab('chat', document.querySelector('.tab-item:nth-child(3)'));

  // Set up chat topic bar
  const topicText = document.getElementById('chatTopicText');
  if (topicText) topicText.textContent = currentTheme;
  const modeIcon = document.getElementById('chatModeIcon');
  if (modeIcon) modeIcon.textContent = currentMode === 'debate' ? '🥊' : '🤝';
  const roundBadge = document.getElementById('roundBadge');
  if (roundBadge) roundBadge.textContent = `Round ${currentRound} / ${maxRounds}`;

  // Update header chip
  const chip = document.getElementById('headerChip');
  if (chip) {
    chip.textContent = currentMode === 'debate' ? 'ディベート中' : '会議中';
    chip.className = `mode-chip ${currentMode === 'debate' ? 'debate' : 'meet'}`;
  }


  // Show next round button
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.style.display = maxRounds > 1 ? '' : 'none';

  // Initialize chat
  const messages = document.getElementById('messages');
  if (messages) messages.innerHTML = '';
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
  const roundBadge = document.getElementById('roundBadge');
  if (roundBadge) roundBadge.textContent = `Round ${currentRound} / ${maxRounds}`;
  addDivider(`ラウンド ${currentRound} / ${maxRounds}`);
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

  prompt += `\n\n【重要なルール】`;
  prompt += `\n・回答は必ず100〜300文字の日本語で書いてください。`;
  prompt += `\n・他のAIの発言がある場合、その意見を深掘りしたり、具体例を挙げて補強したり、反対意見があれば根拠を示して反論してください。`;
  prompt += `\n・単に同意するだけでなく、議論を前に進める新しい視点や論点を提示してください。`;
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
  } else if (userContent !== null) {
    // Trailing user message not yet paired with assistant response
    msgs.push({
      role: 'user',
      content: userContent
    });
  } else if (msgs[msgs.length - 1].role === 'assistant') {
    // Ensure last message is from user (required by Gemini API and others)
    msgs.push({
      role: 'user',
      content: `前の議論を踏まえて、さらに議論を深めてください。`
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
    } else if (ai.provider === 'groq') {
      text = await callOpenAICompatible(
        'https://api.groq.com/openai/v1/chat/completions',
        ai, key, msgs, sysPrompt
      );
    } else if (ai.provider === 'claude') {
      text = await callClaude(ai, key, msgs, sysPrompt);
    }

    // Remove typing indicator
    document.querySelectorAll(`.typing-indicator[data-ai="${aiId}"]`).forEach(el => el.remove());

    addMessage(aiId, text);
    recordUsage(aiId);
    sessionHistory.push({ role: 'assistant', id: aiId, content: text });
  } catch (err) {
    document.querySelectorAll(`.typing-indicator[data-ai="${aiId}"]`).forEach(el => el.remove());

    if (retries > 0 && err.message.includes('rate')) {
      await sleep(2000);
      await callAI(aiId, retries - 1);
    } else {
      addMessage(aiId, `エラー: ${translateError(err.message)}`, true);
    }
  }

  scrollBottom();
}

// ============================================================================
// エラーメッセージ日本語翻訳
// ============================================================================

function translateError(msg) {
  const translations = [
    [/high demand/i, 'このモデルは現在アクセスが集中しています。しばらく待ってから再試行してください。'],
    [/rate limit/i, 'リクエスト回数の上限に達しました。しばらく待ってから再試行してください。'],
    [/quota exceeded/i, '利用上限に達しました。APIキーの残高を確認してください。'],
    [/invalid api key/i, 'APIキーが無効です。設定画面で正しいキーを入力してください。'],
    [/unauthorized|401/i, '認証に失敗しました。APIキーを確認してください。'],
    [/forbidden|403/i, 'アクセスが拒否されました。APIキーの権限を確認してください。'],
    [/not found|404/i, 'モデルが見つかりません。現在利用できない可能性があります。'],
    [/too many requests|429/i, 'リクエストが多すぎます。少し待ってから再試行してください。'],
    [/internal server error|500/i, 'サーバー側でエラーが発生しました。しばらく待ってから再試行してください。'],
    [/service unavailable|503/i, 'サービスが一時的に利用できません。しばらく待ってから再試行してください。'],
    [/timeout|timed?\s*out/i, '応答がタイムアウトしました。再試行してください。'],
    [/network|fetch|failed to fetch/i, 'ネットワークエラーが発生しました。インターネット接続を確認してください。'],
    [/CORS/i, 'CORSエラー: このモデルはブラウザから直接利用できません。'],
    [/context.*(length|too long|window)/i, '入力が長すぎます。テーマや会話を短くしてください。'],
    [/content.*(filter|policy|safety)/i, 'コンテンツフィルターにより応答がブロックされました。テーマを変えてお試しください。'],
    [/provider.*error/i, 'プロバイダーでエラーが発生しました。しばらく待ってから再試行してください。'],
    [/bad gateway|502/i, 'サーバーが一時的に応答できません。しばらく待ってから再試行してください。'],
    [/overloaded|capacity/i, 'サーバーが混み合っています。しばらく待ってから再試行してください。'],
    [/model.*not.*available/i, 'このモデルは現在利用できません。別のモデルをお試しください。'],
    [/invalid.*request/i, 'リクエストが無効です。テーマを変えて再試行してください。'],
    [/empty.*response/i, '空の応答が返されました。再試行してください。'],
  ];

  for (const [pattern, japanese] of translations) {
    if (pattern.test(msg)) return japanese;
  }
  return msg;
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
      maxOutputTokens: 4096
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
    max_tokens: 4096
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
    max_tokens: 4096,
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
  const chat = document.getElementById('messages');
  if (!chat) return;
  const div = document.createElement('div');
  div.className = 'divider';
  div.textContent = txt;
  chat.appendChild(div);
}

function addTyping(aiId) {
  const chat = document.getElementById('messages');
  if (!chat) return;
  const ai = AI_CONFIG[aiId];
  if (!ai) return;

  const bubble = document.createElement('div');
  bubble.className = 'typing-indicator';
  bubble.dataset.ai = aiId;
  bubble.innerHTML = `
    <div class="msg-av" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
    <div class="typing-dots"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>
  `;
  chat.appendChild(bubble);
  scrollBottom();
}

function addMessage(aiId, text, isError = false) {
  const chat = document.getElementById('messages');
  if (!chat) return;
  const ai = AI_CONFIG[aiId];
  if (!ai) return;

  const bubble = document.createElement('div');
  bubble.className = 'message';
  bubble.dataset.ai = aiId;
  bubble.innerHTML = `
    <div class="msg-av" style="background:${ai.avatarBg}; color:${ai.color}">${ai.avatar}</div>
    <div class="msg-body">
      <div class="msg-hd">
        <span class="msg-name">${ai.name}</span>
        <span class="msg-time">${now()}</span>
      </div>
      <div class="msg-txt ${isError ? 'error' : ''}">${escHtml(text)}</div>
    </div>
  `;
  chat.appendChild(bubble);
}

// ============================================================================
// ユーザー入力 - メッセージ送信
// ============================================================================

async function sendUserMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = '';

  // Add to session
  sessionHistory.push({ role: 'user', id: null, content: text });

  // Add to chat UI
  const chat = document.getElementById('messages');
  const bubble = document.createElement('div');
  bubble.className = 'message';
  bubble.innerHTML = `
    <div class="msg-av" style="background:rgba(91,143,255,0.15); color:var(--accent)">You</div>
    <div class="msg-body">
      <div class="msg-hd">
        <span class="msg-name">あなた</span>
        <span class="msg-time">${now()}</span>
      </div>
      <div class="msg-txt user-msg">${escHtml(text)}</div>
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
// X 出力モーダル - ツイートスレッド作成
// ============================================================================

function openModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const text = buildXText();
  const tweets = splitTweets(text);

  const container = document.getElementById('tweetBlocks');
  if (container) {
    container.innerHTML = tweets
      .map((t, i) => `<div class="tweet-block"><div class="tweet-num">${i + 1} / ${tweets.length}</div><div class="tweet-text">${escHtml(t)}</div><div class="tweet-chars">${t.length} / 280</div></div>`)
      .join('');
  }

  modal.classList.add('open');
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
  const blocks = document.querySelectorAll('.tweet-text');
  const text = Array.from(blocks)
    .map(t => t.textContent)
    .join('\n\n---\n\n');
  navigator.clipboard.writeText(text);
  showToast('コピーしました');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('open');
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
      const input = document.getElementById('chatInput');
      if (input && document.activeElement === input) {
        sendUserMessage();
      }
    }
  });
});
