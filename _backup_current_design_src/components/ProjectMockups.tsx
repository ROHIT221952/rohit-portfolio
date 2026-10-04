import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Shield,
  Search,
  ShoppingCart,
  Star,
  Coins,
  Bot,
  BookOpen,
  Filter,
  Check,
  Plus,
  Loader2,
  Lock,
  Zap
} from 'lucide-react';

export const AIStoryMockup: React.FC = () => {
  const [credits, setCredits] = useState(25);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);

  const prompts = [
    {
      text: "A curious young robot discovers an ancient digital forest...",
      card1Title: "The Clockwork Grove",
      card1Desc: "Circuits hummed with ancient melodies under copper leaves...",
      card2Title: "Digital Canopy",
      card2Desc: "Bioluminescent fiber optics whispering secrets of the old world."
    },
    {
      text: "Cyberpunk detective tracing rogue AI in neon Neo-Tokyo...",
      card1Title: "Neon Shadows",
      card1Desc: "Holographic rain reflected off chrome jackets in Sector 7...",
      card2Title: "Ghost in the Fiber",
      card2Desc: "Encrypted memory chips retrieved from the subterranean grid."
    },
    {
      text: "Deep space explorer discovering a singing crystalline nebula...",
      card1Title: "Harmonic Nebula",
      card1Desc: "Resonant frequencies vibrated against the observation deck...",
      card2Title: "Starlight Echo",
      card2Desc: "Ancient coordinates mapped across radiant sapphire clusters."
    }
  ];

  const handleGenerate = () => {
    if (isGenerating || credits <= 0) return;
    setIsGenerating(true);
    setTimeout(() => {
      setSelectedPromptIdx((prev) => (prev + 1) % prompts.length);
      setCredits((prev) => Math.max(0, prev - 1));
      setIsGenerating(false);
    }, 800);
  };

  const currentPrompt = prompts[selectedPromptIdx];

  return (
    <div className="w-full bg-[#080E1C] rounded-xl overflow-hidden border border-primary-blue/30 shadow-2xl text-text-main font-sans select-none">
      {/* Browser Bar */}
      <div className="bg-[#050A14] px-3.5 py-2 border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1 bg-[#091122] px-2.5 py-0.5 rounded text-[10px] font-mono text-text-secondary border border-border-subtle/50">
          <span className="text-emerald-400">https://</span>
          <span>ai-story-generator.netlify.app</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
          <Coins className="w-2.5 h-2.5" />
          <span>{credits} Credits</span>
        </div>
      </div>

      {/* Internal Web Application Mockup UI */}
      <div className="p-3 sm:p-4 space-y-2.5">
        {/* App Nav */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary-blue to-primary-violet flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-3 h-3" />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white">StoryForge AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono bg-primary-blue/20 text-primary-cyan px-2 py-0.5 rounded-full border border-primary-blue/40">
              OpenAI + Gemini
            </span>
          </div>
        </div>

        {/* Story Generation Prompt Area */}
        <div className="bg-[#0D162B] p-2.5 rounded-lg border border-primary-blue/20 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-text-secondary uppercase flex items-center gap-1">
              <Bot className="w-2.5 h-2.5 text-primary-cyan" /> Dual LLM Engine
            </span>
            <span className="text-[9px] text-text-muted">Click 'Generate' to test</span>
          </div>
          <div className="bg-[#060B16] p-2 rounded border border-border-subtle text-[11px] text-text-main flex items-center justify-between gap-2">
            <span className="text-text-secondary italic truncate">"{currentPrompt.text}"</span>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="text-[9px] bg-primary-blue hover:bg-primary-cyan hover:text-black text-white px-2.5 py-1 rounded font-semibold shrink-0 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-2.5 h-2.5 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-2.5 h-2.5" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generated Cards Preview Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#0B1326] p-2.5 rounded-lg border border-border-subtle/80 space-y-1.5 hover:border-primary-blue/40 transition-colors">
            <div className="h-14 sm:h-16 rounded-md bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 flex items-center justify-center relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-primary-blue/20 mix-blend-overlay" />
              <Sparkles className="w-5 h-5 text-primary-cyan animate-pulse" />
              <span className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/70 px-1 py-0.5 rounded text-white">
                Gemini Art
              </span>
            </div>
            <h4 className="text-[11px] font-bold text-white truncate">{currentPrompt.card1Title}</h4>
            <p className="text-[9px] text-text-secondary line-clamp-1 leading-snug">
              {currentPrompt.card1Desc}
            </p>
          </div>

          <div className="bg-[#0B1326] p-2.5 rounded-lg border border-border-subtle/80 space-y-1.5 hover:border-primary-violet/40 transition-colors">
            <div className="h-14 sm:h-16 rounded-md bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 flex items-center justify-center relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-primary-violet/20 mix-blend-overlay" />
              <BookOpen className="w-5 h-5 text-primary-violet animate-pulse" />
              <span className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/70 px-1 py-0.5 rounded text-white">
                GPT-4o Text
              </span>
            </div>
            <h4 className="text-[11px] font-bold text-white truncate">{currentPrompt.card2Title}</h4>
            <p className="text-[9px] text-text-secondary line-clamp-1 leading-snug">
              {currentPrompt.card2Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EcommerceMockup: React.FC = () => {
  const [cartCount, setCartCount] = useState(3);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (itemName: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(itemName);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="w-full bg-[#080E1C] rounded-xl overflow-hidden border border-primary-blue/30 shadow-2xl text-text-main font-sans select-none">
      {/* Browser Bar */}
      <div className="bg-[#050A14] px-3.5 py-2 border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1 bg-[#091122] px-2.5 py-0.5 rounded text-[10px] font-mono text-text-secondary border border-border-subtle/50">
          <span className="text-emerald-400">https://</span>
          <span>sporting-goods.netlify.app</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-primary-cyan bg-primary-blue/10 px-2 py-0.5 rounded border border-primary-blue/30">
          <ShoppingCart className="w-2.5 h-2.5" />
          <span className="font-bold">Cart: {cartCount}</span>
        </div>
      </div>

      {/* Internal Web Application Mockup UI */}
      <div className="p-3 sm:p-4 space-y-2.5">
        {/* App Nav */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-black">
              <ShoppingBag className="w-3 h-3" />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white">APEX Athletics</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-text-secondary">
            <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
              JWT &amp; RBAC Live
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex gap-2">
          <div className="flex-1 bg-[#0D162B] px-2.5 py-1 rounded-md border border-border-subtle flex items-center gap-1.5 text-[11px] text-text-secondary">
            <Search className="w-3 h-3 text-primary-blue" />
            <span className="truncate">Search athletic shoes, gear...</span>
          </div>
          <div className="bg-[#0D162B] px-2.5 py-1 rounded-md border border-border-subtle flex items-center gap-1 text-[10px] text-primary-cyan">
            <Filter className="w-2.5 h-2.5 text-primary-cyan" />
            <span>Redux State</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Product 1 */}
          <div className="bg-[#0B1326] p-2.5 rounded-lg border border-border-subtle/80 space-y-1.5 group hover:border-primary-cyan/40 transition-colors">
            <div className="h-14 sm:h-16 rounded-md bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden border border-white/10">
              <span className="text-xl">👟</span>
              <span className="absolute top-1 right-1 text-[8px] font-mono bg-emerald-500/20 text-emerald-400 px-1 rounded border border-emerald-500/30">
                In Stock
              </span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[11px] font-bold text-white truncate">Pro Sprint Carbon</h4>
                <div className="flex items-center gap-1 text-[9px] text-amber-400">
                  <Star className="w-2 h-2 fill-amber-400" />
                  <span>4.9 (124)</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-primary-cyan">$189</span>
            </div>
            <button
              type="button"
              onClick={() => handleAddToCart('Pro Sprint')}
              className="w-full py-1 rounded bg-[#0D162B] hover:bg-primary-blue hover:text-white text-text-secondary text-[10px] font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              {addedItem === 'Pro Sprint' ? (
                <>
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-emerald-400">Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-2.5 h-2.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-[#0B1326] p-2.5 rounded-lg border border-border-subtle/80 space-y-1.5 group hover:border-primary-cyan/40 transition-colors">
            <div className="h-14 sm:h-16 rounded-md bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden border border-white/10">
              <span className="text-xl">🥊</span>
              <span className="absolute top-1 right-1 text-[8px] font-mono bg-primary-blue/20 text-primary-cyan px-1 rounded border border-primary-blue/30">
                REST API
              </span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[11px] font-bold text-white truncate">Elite Training Gloves</h4>
                <div className="flex items-center gap-1 text-[9px] text-amber-400">
                  <Star className="w-2 h-2 fill-amber-400" />
                  <span>4.8 (88)</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-primary-cyan">$75</span>
            </div>
            <button
              type="button"
              onClick={() => handleAddToCart('Elite Gloves')}
              className="w-full py-1 rounded bg-[#0D162B] hover:bg-primary-blue hover:text-white text-text-secondary text-[10px] font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              {addedItem === 'Elite Gloves' ? (
                <>
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-emerald-400">Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-2.5 h-2.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VPNGuiMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'protocols' | 'seo'>('overview');

  return (
    <div className="w-full bg-[#080E1C] rounded-xl overflow-hidden border border-primary-violet/30 shadow-2xl text-text-main font-sans select-none">
      {/* Browser Bar */}
      <div className="bg-[#050A14] px-3.5 py-2 border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1 bg-[#091122] px-2.5 py-0.5 rounded text-[10px] font-mono text-text-secondary border border-border-subtle/50">
          <span className="text-emerald-400">https://</span>
          <span>vpnexpertguide.com</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-primary-violet bg-primary-violet/10 px-2 py-0.5 rounded border border-primary-violet/30">
          <Shield className="w-2.5 h-2.5" />
          <span>SSL Secured</span>
        </div>
      </div>

      {/* Internal Web Application Mockup UI */}
      <div className="p-3 sm:p-4 space-y-2.5">
        {/* App Nav */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary-blue to-primary-cyan flex items-center justify-center text-white">
              <Shield className="w-3 h-3" />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white">VPN Expert Guide</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-1.5 py-0.5 rounded ${activeTab === 'overview' ? 'bg-primary-violet/30 text-white' : 'text-text-muted hover:text-white'}`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('protocols')}
              className={`px-1.5 py-0.5 rounded ${activeTab === 'protocols' ? 'bg-primary-violet/30 text-white' : 'text-text-muted hover:text-white'}`}
            >
              Protocols
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              className={`px-1.5 py-0.5 rounded ${activeTab === 'seo' ? 'bg-primary-violet/30 text-white' : 'text-text-muted hover:text-white'}`}
            >
              SEO Score
            </button>
          </div>
        </div>

        {/* Tab Content 1: Overview */}
        {activeTab === 'overview' && (
          <>
            <div className="bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 p-2.5 sm:p-3 rounded-lg border border-primary-blue/30 space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-wider text-primary-cyan">Cybersecurity Authority Platform</span>
              <h4 className="text-xs sm:text-sm font-heading font-bold text-white leading-snug">
                Stay Safe. Browse Without Limits.
              </h4>
              <p className="text-[10px] text-text-secondary line-clamp-1">
                In-depth comparisons, encryption protocols, and verified VPN security reviews.
              </p>
            </div>

            {/* Metrics Badges */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#0D162B] p-1.5 sm:p-2 rounded-lg border border-border-subtle">
                <span className="block text-[11px] sm:text-xs font-mono font-bold text-primary-cyan">92+</span>
                <span className="text-[8px] sm:text-[9px] text-text-secondary">Published Posts</span>
              </div>
              <div className="bg-[#0D162B] p-1.5 sm:p-2 rounded-lg border border-border-subtle">
                <span className="block text-[11px] sm:text-xs font-mono font-bold text-primary-violet">Astra/CSS</span>
                <span className="text-[8px] sm:text-[9px] text-text-secondary">Custom Theme</span>
              </div>
              <div className="bg-[#0D162B] p-1.5 sm:p-2 rounded-lg border border-border-subtle">
                <span className="block text-[11px] sm:text-xs font-mono font-bold text-emerald-400">95+</span>
                <span className="text-[8px] sm:text-[9px] text-text-secondary">SEO Health</span>
              </div>
            </div>
          </>
        )}

        {/* Tab Content 2: Protocols */}
        {activeTab === 'protocols' && (
          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between p-2 rounded bg-[#0D162B] border border-border-subtle text-[10px]">
              <span className="flex items-center gap-1.5 text-white font-mono">
                <Lock className="w-3 h-3 text-emerald-400" /> AES-256 GCM Encryption
              </span>
              <span className="text-emerald-400 font-mono">Verified</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#0D162B] border border-border-subtle text-[10px]">
              <span className="flex items-center gap-1.5 text-white font-mono">
                <Shield className="w-3 h-3 text-primary-cyan" /> WireGuard &amp; OpenVPN
              </span>
              <span className="text-primary-cyan font-mono">Audited</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#0D162B] border border-border-subtle text-[10px]">
              <span className="flex items-center gap-1.5 text-white font-mono">
                <Zap className="w-3 h-3 text-amber-400" /> Zero-Logs Policy Testing
              </span>
              <span className="text-amber-400 font-mono">Passed</span>
            </div>
          </div>
        )}

        {/* Tab Content 3: SEO */}
        {activeTab === 'seo' && (
          <div className="space-y-1.5 py-1">
            <div className="p-2 rounded bg-[#0D162B] border border-border-subtle text-[10px] space-y-1">
              <div className="flex justify-between text-white font-mono">
                <span>Technical Schema Markup</span>
                <span className="text-emerald-400">100%</span>
              </div>
              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-full rounded-full" />
              </div>
            </div>
            <div className="p-2 rounded bg-[#0D162B] border border-border-subtle text-[10px] space-y-1">
              <div className="flex justify-between text-white font-mono">
                <span>Core Web Vitals (LCP &lt; 1.2s)</span>
                <span className="text-primary-cyan">94%</span>
              </div>
              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary-cyan h-full w-[94%] rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
