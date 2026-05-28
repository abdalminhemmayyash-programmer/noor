<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>نُور</title>
<meta name="theme-color" content="#F9F7F4">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Scheherazade+New:wght@400;500;600;700&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

<style>
/* ─── Design Tokens ─── */
:root {
  --bg:          #F9F7F4;
  --bg2:         #F2EFE9;
  --surface:     #FFFFFF;
  --surface2:    #F5F3EE;
  --border:      rgba(0,0,0,0.07);
  --border2:     rgba(0,0,0,0.11);
  --ink:         #1A1614;
  --ink2:        #5A5550;
  --ink3:        #9A9490;
  --gold:        #B8954A;
  --gold-light:  #D4AF6A;
  --gold-dim:    rgba(184,149,74,0.12);
  --teal:        #2E7D6B;
  --teal-light:  #3A9980;
  --teal-dim:    rgba(46,125,107,0.10);
  --rose:        #C0614A;
  --holo-bg:     #0F1016;
  --holo-glow:   rgba(184,149,74,0.18);
  --holo-card:   rgba(255,255,255,0.04);
  --holo-active: rgba(184,149,74,0.14);
  --holo-border: rgba(184,149,74,0.25);
  --holo-text:   #E8DCC8;
  --r-sm:  8px;
  --r-md:  14px;
  --r-lg:  20px;
  --r-xl:  26px;
  --sh-sm: 0 1px 4px rgba(0,0,0,0.06), 0 0px 1px rgba(0,0,0,0.04);
  --sh-md: 0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05);
  --sh-lg: 0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05);
  --quran-fs: 1.85rem;
}

body.dark {
  --bg:          #100E0C;
  --bg2:         #161310;
  --surface:     #1E1A16;
  --surface2:    #252119;
  --border:      rgba(255,255,255,0.07);
  --border2:     rgba(255,255,255,0.11);
  --ink:         #F0EAE0;
  --ink2:        #A09080;
  --ink3:        #605850;
  --gold:        #D4AF6A;
  --gold-light:  #E8CC8A;
  --gold-dim:    rgba(212,175,106,0.12);
  --teal:        #3AB090;
  --teal-light:  #4AC8A8;
  --teal-dim:    rgba(58,176,144,0.10);
  --sh-sm: 0 1px 4px rgba(0,0,0,0.25);
  --sh-md: 0 4px 16px rgba(0,0,0,0.30);
  --sh-lg: 0 12px 40px rgba(0,0,0,0.40);
}

* { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; -webkit-text-size-adjust:100%; }

body {
  font-family: 'Cairo', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  direction: rtl;
  min-height: 100vh;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

body::before {
  content:'';
  position:fixed; inset:0; z-index:-1;
  background:
    radial-gradient(ellipse 80% 50% at 20% 10%, rgba(184,149,74,0.04) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 80%, rgba(46,125,107,0.04) 0%, transparent 60%),
    var(--bg);
  pointer-events:none;
}

.app-wrap { max-width:780px; margin:0 auto; padding:0 0 80px; }

.app-header {
  position:sticky; top:0; z-index:100;
  background:rgba(249,247,244,0.88);
  backdrop-filter:blur(20px) saturate(1.6);
  -webkit-backdrop-filter:blur(20px) saturate(1.6);
  border-bottom:1px solid var(--border);
  padding:14px 20px;
  display:flex; align-items:center; justify-content:space-between;
  transition: background 0.3s;
}
body.dark .app-header {
  background:rgba(16,14,12,0.88);
}
.app-logo {
  font-size:1.55rem; font-weight:900; letter-spacing:-0.5px;
  background: linear-gradient(135deg, var(--gold), var(--teal));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text;
  display:flex; align-items:center; gap:7px;
}
.app-logo svg { flex-shrink:0; }
.header-actions { display:flex; gap:8px; }
.icon-btn {
  width:36px; height:36px; border-radius:50%;
  border:1px solid var(--border2);
  background:var(--surface);
  color:var(--ink2);
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; font-size:.85rem;
  box-shadow:var(--sh-sm);
  transition:all .18s;
}
.icon-btn:hover { background:var(--surface2); color:var(--ink); }

.tabs-scroll {
  overflow-x:auto; scrollbar-width:none;
  padding:12px 20px 0;
  display:flex; gap:6px;
  border-bottom:1px solid var(--border);
  background:var(--bg);
  position:sticky; top:65px; z-index:90;
}
.tabs-scroll::-webkit-scrollbar { display:none; }

.tab-pill {
  flex-shrink:0;
  padding:7px 14px;
  border-radius:20px;
  border:1px solid transparent;
  background:transparent;
  color:var(--ink2);
  font-family:'Cairo'; font-weight:600; font-size:.82rem;
  cursor:pointer; white-space:nowrap;
  transition:all .18s;
  display:flex; align-items:center; gap:5px;
  margin-bottom:10px;
}
.tab-pill:hover { background:var(--surface2); color:var(--ink); }
.tab-pill.active {
  background:var(--ink);
  color:var(--bg);
  border-color:var(--ink);
}
body.dark .tab-pill.active { background:var(--gold); color:#100E0C; border-color:var(--gold); }

.tab-content { display:none; padding:20px; }
.tab-content.active { display:block; }

.card {
  background:var(--surface);
  border-radius:var(--r-lg);
  border:1px solid var(--border);
  box-shadow:var(--sh-sm);
  overflow:hidden;
  margin-bottom:14px;
}
.card-pad { padding:18px; }

.clock-card {
  background:linear-gradient(145deg, var(--surface), var(--surface2));
  border-radius:var(--r-xl);
  border:1px solid var(--border);
  box-shadow:var(--sh-md);
  padding:24px 20px 20px;
  text-align:center;
  margin-bottom:14px;
  position:relative;
  overflow:hidden;
}
.clock-card::before {
  content:'';
  position:absolute; top:-40px; right:-40px;
  width:160px; height:160px;
  border-radius:50%;
  background:radial-gradient(circle, var(--gold-dim), transparent 70%);
  pointer-events:none;
}
.digital-clock {
  font-size:clamp(2.8rem,10vw,4.2rem);
  font-weight:900;
  color:var(--ink);
  letter-spacing:-2px;
  line-height:1;
  margin-bottom:8px;
  font-variant-numeric:tabular-nums;
}
.hijri-date { font-size:.82rem; color:var(--ink2); margin-bottom:16px; }

.next-prayer-pill {
  display:inline-flex; align-items:center; gap:8px;
  background:var(--teal-dim);
  border:1px solid rgba(46,125,107,0.2);
  border-radius:30px;
  padding:8px 16px;
  font-size:.85rem; font-weight:600;
  color:var(--teal);
  margin-bottom:18px;
}
body.dark .next-prayer-pill { color:var(--teal-light); }

.prayer-grid {
  display:grid; grid-template-columns:repeat(5,1fr); gap:8px;
}
.prayer-pill {
  text-align:center;
  padding:10px 4px;
  border-radius:var(--r-md);
  border:1px solid var(--border);
  background:var(--bg2);
  transition:all .2s;
  cursor:default;
}
.prayer-pill.active {
  background:var(--gold);
  border-color:var(--gold);
  color:#fff;
  box-shadow:0 4px 16px rgba(184,149,74,0.35);
  transform:translateY(-2px);
}
.prayer-pill .p-name { font-size:.7rem; color:var(--ink2); margin-bottom:3px; }
.prayer-pill.active .p-name { color:rgba(255,255,255,0.8); }
.prayer-pill .p-time { font-size:.85rem; font-weight:700; color:var(--ink); }
.prayer-pill.active .p-time { color:#fff; }

.nafha-card {
  text-align:center; padding:18px;
  font-family:'Scheherazade New', serif;
  font-size:1.25rem; color:var(--gold);
  background:var(--gold-dim);
  border:1px solid rgba(184,149,74,0.2);
  border-radius:var(--r-lg);
  line-height:1.8;
  margin-bottom:14px;
  transition:opacity .4s;
}

.action-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; }
.action-card {
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r-lg);
  padding:16px;
  cursor:pointer; text-align:center;
  box-shadow:var(--sh-sm);
  transition:all .18s;
  display:flex; flex-direction:column; align-items:center; gap:8px;
}
.action-card:hover { box-shadow:var(--sh-md); transform:translateY(-1px); }
.action-card .ac-icon { font-size:1.6rem; margin-bottom:6px; display:flex; align-items:center; justify-content:center; }
.action-card .ac-label { font-size:.8rem; font-weight:600; color:var(--ink2); }

.adhan-panel {
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r-lg);
  padding:18px;
  box-shadow:var(--sh-sm);
  margin-bottom:14px;
}
.adhan-panel-title { font-weight:700; color:var(--ink); margin-bottom:4px; display:flex; align-items:center; gap:8px; }
.status-dot { width:8px; height:8px; border-radius:50%; background:#E53935; animation:pulse-dot 2s infinite; }
.status-dot.on { background:#43A047; }
@keyframes pulse-dot { 0%,100%{opacity:1;} 50%{opacity:.3;} }

/* Location permission banner */
.location-banner {
  background: linear-gradient(135deg, var(--teal-dim), rgba(46,125,107,0.06));
  border: 1px solid rgba(46,125,107,0.25);
  border-radius: var(--r-lg);
  padding: 16px;
  margin-bottom: 14px;
  text-align: center;
}
.location-banner-icon { margin-bottom: 8px; display:flex; align-items:center; justify-content:center; }
.location-banner h3 { font-size:.95rem; font-weight:700; color:var(--teal); margin-bottom:6px; }
.location-banner p { font-size:.8rem; color:var(--ink2); margin-bottom:12px; line-height:1.6; }
.location-banner-btns { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }

select.ios-select, input.ios-input {
  width:100%; padding:10px 14px;
  background:var(--bg2);
  border:1px solid var(--border2);
  border-radius:var(--r-md);
  color:var(--ink);
  font-family:'Cairo'; font-size:.88rem;
  margin:8px 0;
  appearance:none; -webkit-appearance:none;
}

.btn { padding:10px 16px; border-radius:var(--r-md); border:1px solid var(--border2); background:var(--surface2); color:var(--ink); cursor:pointer; font-family:'Cairo'; font-weight:600; display:inline-flex; align-items:center; justify-content:center; gap:7px; font-size:.85rem; transition:all .18s; }
.btn:hover { background:var(--bg2); }
.btn-primary { background:var(--ink); color:var(--bg); border-color:var(--ink); }
.btn-primary:hover { opacity:.9; }
.btn-gold { background:var(--gold); color:#fff; border-color:var(--gold); }
.btn-gold:hover { background:var(--gold-light); }
.btn-teal { background:var(--teal); color:#fff; border-color:var(--teal); }
.btn-sm { padding:7px 12px; font-size:.78rem; border-radius:var(--r-sm); }
.btn-row { display:flex; gap:8px; margin-top:10px; }
.btn-row .btn { flex:1; }

.holo-wrap {
  background: var(--holo-bg);
  border-radius:var(--r-xl);
  overflow:hidden;
  margin-bottom:14px;
  border:1px solid rgba(255,255,255,0.05);
  box-shadow:var(--sh-lg), inset 0 1px 0 rgba(255,255,255,0.04);
  position:relative;
}
.holo-header {
  padding:18px 20px 0;
  text-align:center;
}
.holo-brand {
  font-family:'Scheherazade New',serif;
  font-size:1.1rem; font-weight:700;
  color:var(--gold);
  letter-spacing:6px;
  opacity:.9;
}
.holo-sub {
  font-size:.65rem; color:rgba(255,255,255,0.25);
  letter-spacing:3px; margin-top:2px;
  font-family:'Cairo';
}

.holo-scene {
  width:100%; height:340px;
  display:flex; align-items:center; justify-content:center;
  position:relative; overflow:hidden;
  cursor:grab; user-select:none;
  perspective:800px;
}
.holo-scene:active { cursor:grabbing; }

.holo-ring {
  position:absolute; left:50%; border-radius:50%;
  border:1px solid;
  transform:translateX(-50%);
  pointer-events:none;
}
.holo-ring-1 { width:220px; height:220px; top:50%; margin-top:-110px; border-color:rgba(184,149,74,0.08); }
.holo-ring-2 { width:300px; height:300px; top:50%; margin-top:-150px; border-color:rgba(184,149,74,0.04); }
.holo-axis {
  position:absolute; left:50%; top:50%;
  width:1px; height:280px; margin-top:-140px;
  background:linear-gradient(180deg,transparent,rgba(184,149,74,0.15),transparent);
  pointer-events:none;
}

#holo-cylinder-wrap {
  width:260px; height:300px;
  position:relative; transform-style:preserve-3d;
  transform:rotateX(-6deg);
}
#holo-cylinder {
  width:100%; height:100%;
  position:relative; transform-style:preserve-3d;
}

.h-card {
  position:absolute;
  width:230px; height:48px;
  left:50%; top:50%;
  margin-left:-115px; margin-top:-24px;
  transform-origin:50% 50%;
  display:flex; align-items:center; gap:10px;
  padding:0 14px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.06);
  background:var(--holo-card);
  cursor:pointer;
  transition:background .15s, border-color .15s;
  backdrop-filter:blur(4px);
}
.h-card.hc-front {
  border-color:rgba(184,149,74,0.45) !important;
  background:var(--holo-active) !important;
  box-shadow:0 0 20px rgba(184,149,74,0.15), inset 0 1px 0 rgba(255,255,255,0.06);
}
.h-num {
  width:28px; height:28px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:.62rem; font-weight:700;
  border:1px solid rgba(184,149,74,0.3);
  color:var(--gold); flex-shrink:0;
  font-family:'Cairo';
}
.h-name {
  font-size:.98rem; font-weight:600;
  color:var(--holo-text);
  font-family:'Scheherazade New';
  flex:1;
}
.h-ayahs { font-size:.6rem; color:rgba(255,255,255,0.25); flex-shrink:0; font-family:'Cairo'; }

#holo-sel-strip {
  position:absolute; left:50%; top:50%;
  width:232px; height:56px;
  margin-left:-116px; margin-top:-28px;
  border-radius:13px;
  background:radial-gradient(ellipse 80% 100% at 50% 50%, rgba(184,149,74,0.08), transparent);
  pointer-events:none; z-index:0;
}

.holo-fade-top, .holo-fade-bot {
  position:absolute; left:0; right:0; height:90px;
  pointer-events:none; z-index:10;
}
.holo-fade-top { top:0; background:linear-gradient(to bottom, var(--holo-bg), transparent); }
.holo-fade-bot { bottom:0; background:linear-gradient(to top, var(--holo-bg), transparent); }

.holo-hint {
  text-align:center; font-size:.65rem;
  color:rgba(255,255,255,0.2); letter-spacing:3px;
  padding:6px 0 14px;
  font-family:'Cairo';
}

.holo-surah-bar {
  padding:14px 20px;
  border-top:1px solid rgba(255,255,255,0.05);
  background:rgba(0,0,0,0.2);
  display:flex; align-items:center; gap:12px;
}
.hsb-name {
  font-family:'Scheherazade New',serif;
  font-size:1.45rem; color:var(--gold); font-weight:600;
}
.hsb-meta { font-size:.72rem; color:rgba(255,255,255,0.3); margin-top:2px; font-family:'Cairo'; }
.hsb-badge {
  margin-right:auto;
  background:rgba(184,149,74,0.15);
  border:1px solid rgba(184,149,74,0.3);
  border-radius:20px; padding:3px 10px;
  font-size:.65rem; color:var(--gold);
  font-family:'Cairo';
}

#holo-ayah-box {
  padding:16px 20px 20px;
  max-height:220px; overflow-y:auto;
  font-family:'Scheherazade New',serif;
  font-size:1.35rem; line-height:2.4;
  color:#E8DCC8;
  text-align:justify;
  -webkit-overflow-scrolling:touch;
  scrollbar-width:thin;
  scrollbar-color:rgba(184,149,74,0.3) transparent;
}
#holo-ayah-box::-webkit-scrollbar { width:3px; }
#holo-ayah-box::-webkit-scrollbar-track { background:transparent; }
#holo-ayah-box::-webkit-scrollbar-thumb { background:rgba(184,149,74,0.3); border-radius:2px; }

.holo-basmala { text-align:center; color:var(--gold); font-size:1.4rem; display:block; margin-bottom:12px; opacity:.9; }
.holo-ayah-num {
  display:inline-flex; align-items:center; justify-content:center;
  width:22px; height:22px; border-radius:50%;
  background:rgba(184,149,74,0.25);
  color:var(--gold); font-size:.58rem;
  font-weight:900; font-family:'Cairo';
  margin:0 3px; vertical-align:middle;
  border:1px solid rgba(184,149,74,0.3);
}
.holo-loading {
  padding:32px; text-align:center;
  color:rgba(255,255,255,0.25);
  font-family:'Cairo'; font-size:.82rem;
}

.holo-controls {
  padding:12px 16px;
  border-top:1px solid rgba(255,255,255,0.05);
  display:flex; gap:8px;
  background:rgba(0,0,0,0.15);
}
.holo-btn {
  flex:1; padding:9px; border-radius:10px;
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.08);
  color:rgba(255,255,255,0.6);
  font-family:'Cairo'; font-size:.78rem;
  cursor:pointer; transition:all .18s;
}
.holo-btn:hover { background:rgba(184,149,74,0.12); border-color:rgba(184,149,74,0.3); color:var(--gold); }
.holo-btn-primary {
  background:rgba(184,149,74,0.15);
  border-color:rgba(184,149,74,0.35);
  color:var(--gold); font-weight:700;
}
.holo-btn-primary:hover { background:rgba(184,149,74,0.25); }

.surah-scroll { display:flex; overflow-x:auto; gap:8px; padding:2px 0 10px; scrollbar-width:none; -webkit-overflow-scrolling:touch; }
.surah-scroll::-webkit-scrollbar { display:none; }
.surah-chip {
  flex-shrink:0; padding:8px 14px;
  border-radius:20px;
  background:var(--surface);
  border:1px solid var(--border);
  cursor:pointer; text-align:center;
  font-size:.8rem; font-weight:600; color:var(--ink2);
  white-space:nowrap;
  transition:all .18s;
  box-shadow:var(--sh-sm);
}
.surah-chip:hover, .surah-chip.active {
  background:var(--ink); color:var(--bg);
  border-color:var(--ink);
}
body.dark .surah-chip.active { background:var(--gold); border-color:var(--gold); color:#100E0C; }

.quran-viewer {
  font-family:'Scheherazade New',serif;
  font-size:var(--quran-fs);
  line-height:2.5; text-align:justify;
  padding:20px;
  background:var(--bg2);
  border-radius:var(--r-lg);
  border:1px solid var(--border);
  max-height:460px; overflow-y:auto;
  -webkit-overflow-scrolling:touch;
  margin-top:12px;
  transition:background .3s;
}
.quran-viewer.night { background:#080606; color:#D4AF6A; }

.ayah-span { cursor:pointer; padding:0 3px; border-radius:4px; transition:background .15s; }
.ayah-span:hover { background:var(--gold-dim); }
.ayah-span.selected { background:var(--gold-dim); color:var(--gold); }
.ayah-num-badge {
  display:inline-flex; align-items:center; justify-content:center;
  width:24px; height:24px; border-radius:50%;
  background:var(--gold-dim); border:1px solid rgba(184,149,74,0.25);
  color:var(--gold); font-size:.6rem; font-weight:700;
  margin:0 3px; vertical-align:middle; font-family:'Cairo';
}

.surah-grid {
  display:grid; grid-template-columns:repeat(auto-fill,minmax(90px,1fr));
  gap:6px; max-height:260px; overflow-y:auto;
  scrollbar-width:thin; scrollbar-color:var(--gold-dim) transparent;
  margin-bottom:12px;
}
.surah-grid-item {
  padding:8px 4px; border-radius:var(--r-md);
  background:var(--surface);
  border:1px solid var(--border);
  cursor:pointer; text-align:center;
  font-size:.78rem; transition:all .18s;
  box-shadow:var(--sh-sm);
}
.surah-grid-item:hover, .surah-grid-item.active {
  border-color:var(--gold); background:var(--gold-dim);
}

.section-title {
  font-size:1.15rem; font-weight:700; color:var(--ink);
  margin-bottom:14px; display:flex; align-items:center; gap:8px;
}
.section-title::before {
  content:''; width:3px; height:1.2em; border-radius:2px;
  background:var(--gold); flex-shrink:0;
}

.azkar-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.azkar-cat-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:20px 16px; text-align:center;
  cursor:pointer; box-shadow:var(--sh-sm); transition:all .18s;
  display:flex; flex-direction:column; align-items:center; gap:8px;
}
.azkar-cat-card:hover { box-shadow:var(--sh-md); transform:translateY(-1px); border-color:var(--gold); }
.azkar-cat-icon { font-size:1.8rem; margin-bottom:8px; display:flex; align-items:center; justify-content:center; }
.azkar-cat-label { font-size:.88rem; font-weight:600; color:var(--ink2); }

.zekr-item {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:16px;
  margin-bottom:10px; position:relative;
  box-shadow:var(--sh-sm); transition:all .2s;
  cursor:pointer;
}
.zekr-item.done { opacity:.45; border-color:var(--teal); background:var(--teal-dim); }
.zekr-count {
  position:absolute; top:-8px; right:14px;
  background:var(--gold); color:#fff;
  font-size:.7rem; font-weight:700; font-family:'Cairo';
  padding:2px 9px; border-radius:12px;
}
.zekr-text { font-family:'Amiri',serif; font-size:1rem; line-height:1.9; color:var(--ink); }

.names-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(80px,1fr)); gap:6px; }
.name-chip {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-md); padding:10px 4px; text-align:center;
  font-weight:700; color:var(--gold); font-size:.85rem;
  cursor:pointer; transition:all .18s; box-shadow:var(--sh-sm);
}
.name-chip:hover { background:var(--gold); color:#fff; transform:scale(1.04); box-shadow:0 4px 14px rgba(184,149,74,0.3); }

.stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; }
.stat-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:16px; text-align:center;
  box-shadow:var(--sh-sm);
}
.stat-val { font-size:1.6rem; font-weight:900; color:var(--gold); line-height:1; margin-bottom:4px; }
.stat-lbl { font-size:.75rem; color:var(--ink2); }

.prog-wrap { background:var(--bg2); border-radius:20px; height:6px; overflow:hidden; }
.prog-fill { height:100%; border-radius:20px; background:linear-gradient(90deg, var(--gold), var(--gold-light)); transition:width .5s ease; }

.info-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:16px; margin-bottom:10px;
  box-shadow:var(--sh-sm);
}
.info-card-title { font-weight:700; color:var(--ink); margin-bottom:10px; font-size:.92rem; display:flex; align-items:center; gap:6px; }

.occasions-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:10px; }
.occasion-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:16px; text-align:center;
  box-shadow:var(--sh-sm); transition:border-color .2s;
}
.occasion-card.soon { border-color:var(--gold); }
.occasion-card.passed { opacity:.45; }
.occ-icon { font-size:1.7rem; margin-bottom:6px; display:flex; align-items:center; justify-content:center; }
.occ-name { font-weight:700; color:var(--gold); font-size:.88rem; margin-bottom:6px; }
.occ-meta { font-size:.72rem; color:var(--ink2); margin-bottom:10px; }
.countdown-row { display:grid; grid-template-columns:repeat(4,1fr); gap:5px; }
.cd-unit { background:var(--bg2); border-radius:var(--r-sm); padding:5px 2px; text-align:center; }
.cd-val { font-size:1.1rem; font-weight:900; color:var(--teal); display:block; line-height:1.2; }
body.dark .cd-val { color:var(--teal-light); }
.cd-lbl { font-size:.58rem; color:var(--ink2); }

.wird-item {
  display:flex; align-items:center; gap:12px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-md); padding:12px 16px;
  margin-bottom:8px; cursor:pointer; transition:all .25s;
  box-shadow:var(--sh-sm);
}
.wird-item.done { opacity:.45; border-color:var(--teal); background:var(--teal-dim); text-decoration:line-through; }
.wird-check {
  width:26px; height:26px; border-radius:50%;
  border:2px solid var(--border2); flex-shrink:0;
  display:flex; align-items:center; justify-content:center;
  transition:all .2s; color:transparent;
}
.wird-item.done .wird-check { background:var(--teal); border-color:var(--teal); color:#fff; font-size:.8rem; }
.wird-pts { margin-right:auto; font-size:.75rem; color:var(--gold); font-weight:700; }

.prayer-track-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:8px; }
.pt-item {
  text-align:center; padding:10px 4px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-md); cursor:pointer; transition:all .2s;
  box-shadow:var(--sh-sm);
}
.pt-item.prayed { background:var(--teal-dim); border-color:var(--teal); }
.pt-item.missed { background:rgba(192,97,74,0.08); border-color:rgba(192,97,74,0.3); }
.pt-name { font-size:.72rem; color:var(--ink2); margin-bottom:4px; }
.pt-icon { font-size:1.1rem; display:flex; align-items:center; justify-content:center; }

.challenge-card {
  background:linear-gradient(135deg, var(--surface), var(--surface2));
  border:1px solid var(--border);
  border-radius:var(--r-xl); padding:24px; text-align:center;
  box-shadow:var(--sh-md);
}
.challenge-title { font-size:1.1rem; font-weight:700; color:var(--gold); margin-bottom:6px; }
.challenge-desc { font-size:.88rem; color:var(--ink2); margin-bottom:16px; }
.challenge-num { font-size:2.4rem; font-weight:900; color:var(--teal); margin:12px 0; }

.mosque-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-lg); padding:14px; margin-bottom:10px;
  box-shadow:var(--sh-sm);
}
.mosque-card h4 { color:var(--gold); margin-bottom:8px; font-size:.92rem; }
.mosque-times { display:grid; grid-template-columns:repeat(5,1fr); gap:5px; }
.mt-unit { text-align:center; background:var(--bg2); border-radius:var(--r-sm); padding:5px 2px; }
.mt-name { font-size:.62rem; color:var(--ink2); }
.mt-time { font-size:.8rem; font-weight:700; color:var(--teal); }

.bm-item {
  display:flex; align-items:center; gap:10px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-md); padding:12px; margin-bottom:8px;
  cursor:pointer; transition:border-color .2s; box-shadow:var(--sh-sm);
}
.bm-item:hover { border-color:var(--gold); }
.bm-del { background:none; border:none; color:var(--rose); cursor:pointer; font-size:.85rem; padding:4px; }

.compass-wrap { display:flex; flex-direction:column; align-items:center; padding:20px; gap:16px; }
.compass-ring {
  width:180px; height:180px; border-radius:50%;
  border:2px solid var(--border2);
  position:relative;
  background:radial-gradient(circle, var(--surface), var(--bg2));
  box-shadow:var(--sh-md), inset 0 2px 8px rgba(0,0,0,0.05);
  transition:transform .5s cubic-bezier(.25,.46,.45,.94);
}
.compass-n { position:absolute; top:4px; left:50%; margin-left:-6px; font-size:.7rem; font-weight:700; color:var(--rose); }
.compass-pointer { position:absolute; width:3px; height:70px; background:linear-gradient(to top, var(--rose), #fff); top:12px; left:88.5px; transform-origin:bottom center; border-radius:3px 3px 0 0; }
.compass-qibla { position:absolute; width:3px; height:70px; background:linear-gradient(to top, var(--gold), rgba(184,149,74,0.3)); top:12px; left:88.5px; transform-origin:bottom center; transform:rotate(145deg); border-radius:3px 3px 0 0; }
.compass-center { position:absolute; width:10px; height:10px; background:var(--ink); border-radius:50%; top:50%; left:50%; margin:-5px 0 0 -5px; }

.sebha-fab {
  position:fixed; bottom:24px; left:20px; z-index:1000;
  width:64px; height:64px; border-radius:50%;
  background:var(--ink); color:var(--bg);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  cursor:pointer; border:none;
  box-shadow:0 4px 20px rgba(0,0,0,0.25);
  transition:transform .1s, box-shadow .2s;
}
body.dark .sebha-fab { background:var(--gold); color:#100E0C; }
.sebha-fab:active { transform:scale(.93); }
.sebha-count { font-size:1.45rem; font-weight:900; line-height:1; }
.sebha-total { font-size:.52rem; opacity:.6; }

.sebha-controls {
  position:fixed; bottom:30px; left:98px; z-index:1000;
  display:flex; gap:6px; align-items:center;
}

#toast {
  position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
  background:var(--ink); color:var(--bg);
  padding:10px 20px; border-radius:30px;
  font-weight:600; font-size:.85rem;
  display:none; z-index:9999; white-space:nowrap;
  box-shadow:var(--sh-md);
}

.overlay {
  display:none; position:fixed; inset:0; z-index:9000;
  background:rgba(0,0,0,0.5);
  backdrop-filter:blur(8px);
  -webkit-backdrop-filter:blur(8px);
  flex-direction:column; align-items:center; justify-content:center;
}
.overlay.open { display:flex; }

#focus-overlay { text-align:center; padding:40px 32px; }
#focus-ayah { font-family:'Scheherazade New',serif; font-size:2rem; line-height:2.4; color:var(--gold); max-width:700px; margin-bottom:24px; }
#focus-counter { font-size:4.5rem; font-weight:900; color:#fff; margin-bottom:24px; }

#breath-circle {
  width:180px; height:180px; border-radius:50%;
  border:2px solid rgba(184,149,74,0.5);
  display:flex; align-items:center; justify-content:center;
  font-size:1rem; color:var(--gold); font-weight:600;
  background:radial-gradient(circle, rgba(184,149,74,0.1), transparent);
  animation:breathe 8s ease-in-out infinite;
  margin-bottom:24px;
}
@keyframes breathe { 0%,100%{transform:scale(1);} 50%{transform:scale(1.35);} }

#adhan-notif {
  display:none; position:fixed; top:90px; right:16px; z-index:9999;
  background:var(--surface); border:1px solid var(--gold);
  border-radius:var(--r-xl); padding:18px; max-width:300px;
  box-shadow:var(--sh-lg);
  animation:slideIn .4s ease;
}
@keyframes slideIn { from{transform:translateY(-20px);opacity:0;} to{transform:translateY(0);opacity:1;} }

#ayah-panel {
  margin-top:12px; padding:16px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r-lg);
  box-shadow:var(--sh-sm);
  display:none;
}

.khatma-card {
  background:linear-gradient(135deg, var(--surface), var(--surface2));
  border:1px dashed var(--gold);
  border-radius:var(--r-xl); padding:20px; text-align:center;
  margin-bottom:14px;
}

.seerah-item { border-right:3px solid var(--gold); padding-right:14px; margin-bottom:14px; }
.seerah-item h4 { color:var(--gold); margin-bottom:4px; font-size:.92rem; }
.seerah-item p { font-size:.85rem; color:var(--ink2); }
.tajweed-item { background:var(--surface); border-right:3px solid var(--teal); padding:12px 14px; border-radius:0 var(--r-md) var(--r-md) 0; margin-bottom:8px; box-shadow:var(--sh-sm); }
.tajweed-item h4 { color:var(--teal); margin-bottom:4px; font-size:.9rem; }
.tajweed-item p { font-size:.83rem; color:var(--ink2); }

.hadith-text { font-family:'Scheherazade New',serif; font-size:1.25rem; line-height:2; color:var(--gold); padding:16px; background:var(--gold-dim); border-radius:var(--r-lg); margin-bottom:10px; border:1px solid rgba(184,149,74,0.2); }

.zakah-result { font-size:1.05rem; font-weight:700; color:var(--teal); text-align:center; padding:14px; background:var(--teal-dim); border-radius:var(--r-lg); margin-top:10px; border:1px solid rgba(46,125,107,0.2); min-height:46px; }

#continue-box {
  background:var(--gold-dim); border:1px solid rgba(184,149,74,0.25);
  border-radius:var(--r-md); padding:12px 16px;
  font-size:.85rem; display:none; margin-bottom:10px;
  display:flex; align-items:center; gap:10px; flex-wrap:wrap;
}
#auto-azkar-box {
  background:var(--teal-dim); border:1px solid rgba(46,125,107,0.2);
  border-radius:var(--r-md); padding:12px 16px;
  font-size:.85rem; display:none; margin-bottom:10px;
  color:var(--teal);
}

.duaa-cat { margin-bottom:16px; }
.duaa-cat h4 { color:var(--teal); font-size:.92rem; border-bottom:1px solid var(--border); padding-bottom:6px; margin-bottom:8px; }
.duaa-item { padding:8px 12px; background:var(--surface); margin-bottom:6px; border-radius:var(--r-sm); font-size:.88rem; border:1px solid var(--border); }

.audio-bar {
  display:flex; align-items:center; justify-content:center; gap:10px;
  background:var(--surface2); border-radius:var(--r-lg); padding:12px;
  border:1px solid var(--border); box-shadow:var(--sh-sm);
  margin-top:12px;
}

#share-modal-overlay {
  display:none; position:fixed; inset:0; z-index:9000;
  background:rgba(0,0,0,0.7); backdrop-filter:blur(10px);
  overflow-y:auto; padding:20px;
}
.share-modal-inner {
  max-width:500px; margin:0 auto;
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--r-xl); padding:24px;
  box-shadow:var(--sh-lg);
}
.share-theme-btn {
  height:50px; border-radius:var(--r-md);
  border:2px solid transparent; cursor:pointer; transition:all .2s;
  position:relative; overflow:hidden;
}
.share-theme-btn.sel { border-color:var(--gold); box-shadow:0 0 12px rgba(184,149,74,0.3); transform:scale(1.05); }
.share-theme-btn span { position:absolute; bottom:3px; left:0; right:0; text-align:center; font-size:.55rem; color:rgba(255,255,255,.8); font-family:'Cairo'; text-shadow:0 1px 2px rgba(0,0,0,.8); }

#ramadan-badge {
  text-align:center; padding:8px; font-size:.82rem;
  color:var(--gold); font-weight:600; display:none;
}

@media (max-width:600px) {
  .prayer-grid { grid-template-columns:repeat(3,1fr); }
  .occasions-grid { grid-template-columns:1fr; }
  .action-grid { grid-template-columns:1fr 1fr; }
  .digital-clock { font-size:3rem; }
  .quran-viewer { font-size:1.6rem; }
  #holo-ayah-box { font-size:1.2rem; }
  .stats-grid { grid-template-columns:1fr 1fr; }
  .tab-content { padding:14px; }
  .holo-scene { height:300px; }
  #holo-cylinder-wrap { width:230px; }
  .h-card { width:200px; margin-left:-100px; }
}
</style>
</head>
<body>

<!-- SVG Icons Definitions -->
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Mosque icon -->
    <symbol id="icon-mosque" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C10.5 2 9.5 3.5 9.5 5C9.5 6 10 6.8 10 7.5L8 9H16L14 7.5C14 6.8 14.5 6 14.5 5C14.5 3.5 13.5 2 12 2Z"/>
      <path d="M4 9H8V19H4V9Z"/>
      <path d="M16 9H20V19H16V9Z"/>
      <path d="M8 13H16V19H8V13Z"/>
      <path d="M10 13V19M14 13V19"/>
      <path d="M2 19H22"/>
      <path d="M10 9H14V13H10V9Z"/>
    </symbol>
    <!-- Sun icon -->
    <symbol id="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </symbol>
    <!-- Moon icon -->
    <symbol id="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </symbol>
    <!-- Clock icon -->
    <symbol id="icon-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </symbol>
    <!-- Wind icon (breathing) -->
    <symbol id="icon-wind" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
    </symbol>
    <!-- Bell icon -->
    <symbol id="icon-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </symbol>
    <!-- Sunrise icon (fajr) -->
    <symbol id="icon-sunrise" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 18a5 5 0 0 0-10 0"/>
      <line x1="12" y1="2" x2="12" y2="9"/>
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
      <line x1="1" y1="18" x2="3" y2="18"/>
      <line x1="21" y1="18" x2="23" y2="18"/>
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
      <line x1="23" y1="22" x2="1" y2="22"/>
      <polyline points="8 6 12 2 16 6"/>
    </symbol>
    <!-- Star icon -->
    <symbol id="icon-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </symbol>
    <!-- Crescent moon (Islamic) -->
    <symbol id="icon-crescent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
    </symbol>
    <!-- Heart icon -->
    <symbol id="icon-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </symbol>
    <!-- Compass icon -->
    <symbol id="icon-compass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </symbol>
    <!-- Book open icon -->
    <symbol id="icon-book-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </symbol>
    <!-- Book icon -->
    <symbol id="icon-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </symbol>
    <!-- Chart bar -->
    <symbol id="icon-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </symbol>
    <!-- Scroll icon -->
    <symbol id="icon-scroll" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </symbol>
    <!-- Hands (duaa) -->
    <symbol id="icon-hands" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
    </symbol>
    <!-- Coins (zakah) -->
    <symbol id="icon-coins" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="8" r="6"/>
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
      <path d="M7 6h1v4"/>
      <line x1="16.71" y1="13.88" x2="17" y2="14"/>
    </symbol>
    <!-- Trophy -->
    <symbol id="icon-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="14 9 22 9"/>
      <polyline points="2 9 10 9"/>
      <path d="M21 9c-.96 6.06-3 9-9 9S3.96 15.06 3 9"/>
      <line x1="12" y1="18" x2="12" y2="22"/>
      <rect x="7" y="22" width="10" height="1" rx=".5"/>
    </symbol>
    <!-- Calendar -->
    <symbol id="icon-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </symbol>
    <!-- Tasks/checklist -->
    <symbol id="icon-tasks" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/>
      <line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/>
      <line x1="3" y1="12" x2="3.01" y2="12"/>
      <line x1="3" y1="18" x2="3.01" y2="18"/>
    </symbol>
    <!-- Check circle -->
    <symbol id="icon-check-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </symbol>
    <!-- Fire -->
    <symbol id="icon-fire" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </symbol>
    <!-- Map marker -->
    <symbol id="icon-map-marker" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </symbol>
    <!-- Bookmark -->
    <symbol id="icon-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </symbol>
    <!-- Home -->
    <symbol id="icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </symbol>
    <!-- Location pin with GPS waves -->
    <symbol id="icon-gps" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>
      <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </symbol>
    <!-- Rotate/refresh for location change -->
    <symbol id="icon-refresh-loc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </symbol>
    <!-- Islamic star/geometric (logo icon) -->
    <symbol id="icon-islamic-star" viewBox="0 0 32 32" fill="none">
      <path d="M16 2L18.8 10.2H27.4L20.3 15.3L23.1 23.5L16 18.4L8.9 23.5L11.7 15.3L4.6 10.2H13.2L16 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="1.5"/>
    </symbol>
    <!-- Tasbih beads -->
    <symbol id="icon-tasbih" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="5" r="2"/>
      <circle cx="19" cy="9" r="2"/>
      <circle cx="19" cy="15" r="2"/>
      <circle cx="12" cy="19" r="2"/>
      <circle cx="5" cy="15" r="2"/>
      <circle cx="5" cy="9" r="2"/>
      <line x1="12" y1="7" x2="17" y2="8"/>
      <line x1="19" y1="11" x2="19" y2="13"/>
      <line x1="17" y1="16" x2="14" y2="17"/>
      <line x1="10" y1="17" x2="7" y2="16"/>
      <line x1="5" y1="13" x2="5" y2="11"/>
      <line x1="7" y1="8" x2="10" y2="7"/>
      <circle cx="12" cy="2" r="1" fill="currentColor"/>
    </symbol>
    <!-- Charity/gift heart -->
    <symbol id="icon-charity" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <line x1="12" y1="10" x2="12" y2="14"/>
      <line x1="10" y1="12" x2="14" y2="12"/>
    </symbol>
    <!-- Eye (focus mode) -->
    <symbol id="icon-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </symbol>
  </defs>
</svg>

<!-- Adhan Notification -->
<div id="adhan-notif">
  <div style="font-weight:700;color:var(--gold);margin-bottom:6px;display:flex;align-items:center;gap:6px;">
    <svg width="16" height="16"><use href="#icon-mosque"/></svg>
    أذان <span id="adhan-notif-name">الفجر</span>
  </div>
  <div style="font-size:.83rem;color:var(--ink2);margin-bottom:12px;">استجب لنداء الله وأقم الصلاة</div>
  <div style="display:flex;gap:8px;">
    <button class="btn btn-sm btn-primary" onclick="closeAdhanNotif()">حسناً ✓</button>
    <button class="btn btn-sm" onclick="snoozeAdhan()">بعد 5 دقائق</button>
  </div>
</div>

<!-- Focus Overlay -->
<div class="overlay" id="focus-overlay">
  <button onclick="closeFocus()" style="position:absolute;top:20px;left:20px;background:rgba(255,255,255,.1);border:none;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-family:Cairo;">✕ إغلاق</button>
  <div id="focus-ayah">اختر سورة وافتح وضع التركيز</div>
  <div id="focus-counter">0</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <button onclick="focusTap()" style="background:var(--gold);color:#fff;border:none;padding:14px 28px;border-radius:14px;cursor:pointer;font-family:Cairo;font-size:1rem;font-weight:700;">تسبيح +١</button>
    <button onclick="focusReset()" style="background:rgba(255,255,255,.1);color:#fff;border:none;padding:14px 18px;border-radius:14px;cursor:pointer;font-family:Cairo;">تصفير</button>
  </div>
</div>

<!-- Breathing Overlay -->
<div class="overlay" id="breath-overlay">
  <button onclick="closeBreath()" style="position:absolute;top:20px;left:20px;background:rgba(255,255,255,.1);border:none;color:#fff;padding:8px 16px;border-radius:8px;cursor:pointer;font-family:Cairo;">✕ إغلاق</button>
  <div style="color:var(--gold);font-size:1rem;font-weight:700;margin-bottom:24px;">تمرين التنفس الروحي</div>
  <div id="breath-circle">تنفس</div>
  <div id="breath-inst" style="color:rgba(255,255,255,.5);font-size:.9rem;text-align:center;max-width:240px;"></div>
  <div id="breath-dhikr" style="color:var(--gold);font-size:1rem;margin-top:20px;font-family:'Scheherazade New'"></div>
</div>

<div id="toast">تمت العملية!</div>

<!-- Share Modal -->
<div id="share-modal-overlay">
  <div class="share-modal-inner">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <h3 style="font-size:1rem;font-weight:700;">مشاركة كصورة</h3>
      <button onclick="closeShareModal()" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--ink2);">✕</button>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:.8rem;color:var(--ink2);margin-bottom:8px;font-weight:600;">نطاق الآيات</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div><label style="font-size:.72rem;color:var(--ink2);">من</label><select id="share-from-ayah" class="ios-select"></select></div>
        <div><label style="font-size:.72rem;color:var(--ink2);">إلى</label><select id="share-to-ayah" class="ios-select"></select></div>
      </div>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:.8rem;color:var(--ink2);margin-bottom:8px;font-weight:600;">الثيم</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;" id="share-themes-grid"></div>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:.8rem;color:var(--ink2);margin-bottom:6px;font-weight:600;">معاينة</div>
      <div id="share-preview-box" style="border-radius:var(--r-md);overflow:hidden;min-height:100px;border:1px solid var(--border);"></div>
    </div>
    <div class="btn-row">
      <button class="btn btn-gold" onclick="generateShareImage()">
        <svg width="14" height="14"><use href="#icon-bookmark"/></svg> حفظ الصورة
      </button>
      <button class="btn" onclick="closeShareModal()">إلغاء</button>
    </div>
  </div>
</div>

<div id="temp-screenshot-area" style="position:absolute;left:-9999px;width:700px;padding:0;"></div>
<audio id="main-audio"></audio>
<audio id="adhan-audio" preload="none"></audio>

<div class="app-wrap">
  <!-- Header -->
  <header class="app-header">
    <div class="app-logo">
      <!-- Islamic crescent + star logo -->
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2C9.5 2 6.5 4 5 7C8 6.5 11 7.5 13 10C15 7.5 18 6.5 21 7C19.5 4 16.5 2 13 2Z" fill="url(#logoGrad1)" opacity="0.9"/>
        <path d="M13 22C16.5 22 19.5 20 21 17C18 17.5 15 16.5 13 14C11 16.5 8 17.5 5 17C6.5 20 9.5 22 13 22Z" fill="url(#logoGrad1)" opacity="0.6"/>
        <circle cx="13" cy="12" r="3.5" fill="url(#logoGrad1)" opacity="0.85"/>
        <path d="M13 6L14.2 9.3H17.7L14.95 11.3L16.1 14.6L13 12.6L9.9 14.6L11.05 11.3L8.3 9.3H11.8L13 6Z" fill="url(#logoGrad2)" opacity="0.7"/>
        <defs>
          <linearGradient id="logoGrad1" x1="5" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#B8954A"/>
            <stop offset="100%" stop-color="#2E7D6B"/>
          </linearGradient>
          <linearGradient id="logoGrad2" x1="8" y1="6" x2="17" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#D4AF6A"/>
            <stop offset="100%" stop-color="#3A9980"/>
          </linearGradient>
        </defs>
      </svg>
      نُـور
    </div>
    <div class="header-actions">
      <button class="icon-btn" onclick="requestNotifPerm()" title="التنبيهات">
        <svg width="16" height="16"><use href="#icon-bell"/></svg>
      </button>
      <button class="icon-btn" onclick="toggleDark()" title="المظهر" id="theme-btn">
        <svg width="16" height="16"><use href="#icon-moon"/></svg>
      </button>
      <button class="icon-btn" onclick="openBreath()" style="color:var(--teal);" title="تنفس">
        <svg width="16" height="16"><use href="#icon-wind"/></svg>
      </button>
    </div>
  </header>

  <!-- Tab Bar -->
  <div class="tabs-scroll" id="tabs-bar">
    <button class="tab-pill active" onclick="switchTab('main-sec',this)">
      <svg width="13" height="13"><use href="#icon-home"/></svg> الرئيسية
    </button>
    <button class="tab-pill" onclick="switchTab('quran-sec',this)">
      <svg width="13" height="13"><use href="#icon-book-open"/></svg> المصحف
    </button>
    <button class="tab-pill" onclick="switchTab('quran-offline-sec',this)">
      <svg width="13" height="13"><use href="#icon-book"/></svg> أوفلاين
    </button>
    <button class="tab-pill" onclick="switchTab('azkar-sec',this)">
      <svg width="13" height="13"><use href="#icon-heart"/></svg> الأذكار
    </button>
    <button class="tab-pill" onclick="switchTab('qibla-sec',this)">
      <svg width="13" height="13"><use href="#icon-compass"/></svg> القبلة
    </button>
    <button class="tab-pill" onclick="switchTab('names-sec',this)">
      <svg width="13" height="13"><use href="#icon-star"/></svg> الأسماء
    </button>
    <button class="tab-pill" onclick="switchTab('dashboard-sec',this)">
      <svg width="13" height="13"><use href="#icon-chart"/></svg> لوحتي
    </button>
    <button class="tab-pill" onclick="switchTab('hadith-sec',this)">
      <svg width="13" height="13"><use href="#icon-scroll"/></svg> حديث
    </button>
    <button class="tab-pill" onclick="switchTab('duaa-sec',this)">
      <svg width="13" height="13"><use href="#icon-hands"/></svg> الأدعية
    </button>
    <button class="tab-pill" onclick="switchTab('seerah-sec',this)">
      <svg width="13" height="13"><use href="#icon-mosque"/></svg> السيرة
    </button>
    <button class="tab-pill" onclick="switchTab('tajweed-sec',this)">
      <svg width="13" height="13"><use href="#icon-book"/></svg> التجويد
    </button>
    <button class="tab-pill" onclick="switchTab('zakah-sec',this)">
      <svg width="13" height="13"><use href="#icon-coins"/></svg> الزكاة
    </button>
    <button class="tab-pill" onclick="switchTab('khatma-sec',this)">
      <svg width="13" height="13"><use href="#icon-trophy"/></svg> الختمة
    </button>
    <button class="tab-pill" onclick="switchTab('occasions-sec',this)">
      <svg width="13" height="13"><use href="#icon-calendar"/></svg> المناسبات
    </button>
    <button class="tab-pill" onclick="switchTab('wird-sec',this)">
      <svg width="13" height="13"><use href="#icon-tasks"/></svg> الوِرد
    </button>
    <button class="tab-pill" onclick="switchTab('prayer-track-sec',this)">
      <svg width="13" height="13"><use href="#icon-check-circle"/></svg> الصلوات
    </button>
    <button class="tab-pill" onclick="switchTab('challenge-sec',this)">
      <svg width="13" height="13"><use href="#icon-fire"/></svg> التحدي
    </button>
    <button class="tab-pill" onclick="switchTab('mosque-sec',this)">
      <svg width="13" height="13"><use href="#icon-map-marker"/></svg> المدن
    </button>
    <button class="tab-pill" onclick="switchTab('bookmarks-sec',this)">
      <svg width="13" height="13"><use href="#icon-bookmark"/></svg> المحفوظات
    </button>
  </div>

  <!-- ══ 1. الرئيسية ══ -->
  <div id="main-sec" class="tab-content active">
    <div id="ramadan-badge"></div>

    <!-- Location Permission Banner -->
    <div class="location-banner" id="location-banner" style="display:none;">
      <div class="location-banner-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 2v2M12 18v2M4 10H2M22 10h-2" stroke="var(--gold)" stroke-width="1"/>
        </svg>
      </div>
      <h3>تحديد موقعك الجغرافي</h3>
      <p>لحساب مواقيت الصلاة الدقيقة لمكانك، نحتاج إلى إذنك للوصول إلى موقعك الجغرافي. يعمل بعدها بدون إنترنت.</p>
      <div class="location-banner-btns">
        <button class="btn btn-teal" onclick="requestLocationAndPrayers()">
          <svg width="14" height="14"><use href="#icon-gps"/></svg>
          السماح بالموقع
        </button>
        <button class="btn" onclick="useFallbackLocation()">
          <svg width="14" height="14"><use href="#icon-mosque"/></svg>
          استخدام القدس (افتراضي)
        </button>
      </div>
    </div>

    <div class="clock-card">
      <div id="digital-clock" class="digital-clock">00:00:00</div>
      <div id="hijri-txt" class="hijri-date">جاري التحميل...</div>
      <div class="next-prayer-pill">
        <svg width="14" height="14"><use href="#icon-clock"/></svg>
        صلاة <span id="next-prayer-name" style="font-weight:800;">--</span>
        &nbsp;·&nbsp; <span id="next-prayer-countdown">--:--:--</span>
        <span class="status-dot" id="adhan-dot"></span>
      </div>
      <div class="prayer-grid" id="today-prayers"></div>
      <!-- Change location button -->
      <div style="margin-top:12px;display:flex;justify-content:center;">
        <button class="btn btn-sm" id="change-location-btn" onclick="changeLocation()" style="display:none;font-size:.72rem;padding:5px 12px;">
          <svg width="12" height="12"><use href="#icon-map-marker"/></svg>
          تغيير الموقع
        </button>
      </div>
    </div>

    <div id="auto-azkar-box"></div>

    <div id="continue-box">
      <svg width="14" height="14" style="color:var(--gold);flex-shrink:0;"><use href="#icon-bookmark"/></svg>
      <span id="continue-txt">متابعة القراءة...</span>
    </div>

    <div class="nafha-card" id="nafha-text">"ألا بذكر الله تطمئن القلوب"</div>

    <div class="action-grid">
      <div class="action-card" onclick="suggestCharity()">
        <div class="ac-icon">
          <svg width="32" height="32" stroke="var(--teal)"><use href="#icon-charity"/></svg>
        </div>
        <div class="ac-label">عمل صالح اليوم</div>
      </div>
      <div class="action-card" onclick="openFocus()" style="border-color:var(--gold);">
        <div class="ac-icon">
          <svg width="32" height="32" stroke="var(--gold)"><use href="#icon-eye"/></svg>
        </div>
        <div class="ac-label">وضع التركيز</div>
      </div>
    </div>

    <div class="adhan-panel">
      <div class="adhan-panel-title">
        <svg width="16" height="16" style="color:var(--teal);"><use href="#icon-mosque"/></svg>
        الأذان التلقائي
        <span class="status-dot" id="adhan-dot2"></span>
        <small id="adhan-sw-status" style="font-size:.7rem;font-weight:400;color:var(--ink2);margin-right:auto;">متوقف</small>
      </div>
      <select id="adhan-voice-select" class="ios-select">
        <option value="alafasy">مشاري العفاسي</option>
        <option value="makkah">الحرم المكي</option>
        <option value="madinah">الحرم المدني</option>
      </select>
      <div class="btn-row">
        <button class="btn btn-teal" onclick="enableAdhan()">
          <svg width="13" height="13"><use href="#icon-bell"/></svg> تفعيل
        </button>
        <button class="btn" onclick="testAdhan()">▶ اختبار</button>
        <button class="btn" onclick="cacheAdhan()">↓ أوفلاين</button>
      </div>
      <div id="adhan-cache-prog" style="display:none;margin-top:8px;">
        <div class="prog-wrap"><div class="prog-fill" id="adhan-cache-bar" style="width:0%"></div></div>
        <div id="adhan-cache-lbl" style="font-size:.72rem;color:var(--ink2);margin-top:4px;"></div>
      </div>
    </div>
  </div>

  <!-- ══ 2. المصحف الهولوغرافي ══ -->
  <div id="quran-sec" class="tab-content">
    <div class="section-title">المصحف الهولوغرافي</div>

    <div class="holo-wrap">
      <div class="holo-header">
        <div class="holo-brand">✦ نُـور ✦</div>
        <div class="holo-sub">المصحف المجسّم · اسحب للتنقل</div>
      </div>

      <div id="holo-scene">
        <div class="holo-ring holo-ring-1"></div>
        <div class="holo-ring holo-ring-2"></div>
        <div class="holo-axis"></div>
        <div id="holo-sel-strip"></div>
        <div id="holo-cylinder-wrap">
          <div id="holo-cylinder"></div>
        </div>
        <div class="holo-fade-top"></div>
        <div class="holo-fade-bot"></div>
      </div>
      <div class="holo-hint">↕ اسحب · انقر للاختيار</div>

      <div class="holo-surah-bar">
        <div>
          <div class="hsb-name" id="hvb-name">الفاتحة</div>
          <div class="hsb-meta" id="hvb-meta">مكية • ٧ آيات</div>
        </div>
        <div class="hsb-badge" id="hvb-num">١</div>
      </div>

      <div id="holo-ayah-box"><div class="holo-loading">اختر سورة أو انتظر التحميل...</div></div>

      <div class="holo-controls">
        <button class="holo-btn" onclick="holoPrev()">◄ السابقة</button>
        <button class="holo-btn holo-btn-primary" onclick="holoLoadCurrent()">تحميل الآيات</button>
        <button class="holo-btn" onclick="holoNext()">التالية ►</button>
      </div>
    </div>

    <div class="card card-pad">
      <input type="text" id="quran-search" class="ios-input" placeholder="🔍 ابحث عن سورة..." oninput="searchQuran()">
      <div class="surah-scroll" id="surahBox"></div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0;">
        <select id="reciter-select" class="ios-select" onchange="updateAudioSource()">
          <option value="https://server8.mp3quran.net/afs/">مشاري العفاسي</option>
          <option value="https://server13.mp3quran.net/husr/">الحصري</option>
          <option value="https://server10.mp3quran.net/minsh/">المنشاوي</option>
          <option value="https://server7.mp3quran.net/basit/">عبد الباسط</option>
          <option value="https://server12.mp3quran.net/maher/">ماهر المعيقلي</option>
        </select>
        <button class="btn btn-gold" onclick="openShareModal()">
          <svg width="13" height="13"><use href="#icon-bookmark"/></svg> مشاركة كصورة
        </button>
      </div>

      <div class="audio-bar">
        <button class="btn btn-sm" onclick="prevAyah()">⏮</button>
        <button class="btn btn-sm btn-primary" id="play-btn" onclick="toggleAudio()">▶</button>
        <button class="btn btn-sm" onclick="nextAyah()">⏭</button>
        <select id="playback-mode" class="ios-select" style="margin:0;width:auto;" onchange="handlePlayMode()">
          <option value="default">عادي</option>
          <option value="repeat">تكرار</option>
          <option value="continuous">متواصل</option>
        </select>
      </div>

      <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap;">
        <button class="btn btn-sm" onclick="changeFontSize(2)">+ تكبير</button>
        <button class="btn btn-sm" onclick="changeFontSize(-2)">− تصغير</button>
        <button class="btn btn-sm btn-gold" onclick="loadLastBm()">
          <svg width="12" height="12"><use href="#icon-bookmark"/></svg> موضعي
        </button>
        <button class="btn btn-sm" onclick="toggleNight()">
          <svg width="12" height="12"><use href="#icon-moon"/></svg> ليلي
        </button>
      </div>

      <div id="quran-meta" style="text-align:center;color:var(--gold);font-size:1rem;font-weight:700;margin:10px 0;"></div>
      <div class="quran-viewer" id="viewer">اختر سورة للبدء...</div>

      <div id="ayah-panel">
        <div style="font-weight:700;color:var(--teal);margin-bottom:8px;" id="ayah-panel-title">التفسير</div>
        <p id="ayah-tafseer" style="font-size:.92rem;color:var(--ink);margin-bottom:6px;"></p>
        <p id="ayah-trans" style="font-size:.85rem;color:var(--ink2);direction:ltr;text-align:left;"></p>
        <button class="btn btn-sm btn-gold" style="margin-top:8px;" id="bm-btn">
          <svg width="12" height="12"><use href="#icon-bookmark"/></svg> حفظ كعلامة
        </button>
      </div>
    </div>
  </div>

  <!-- ══ 3. أوفلاين ══ -->
  <div id="quran-offline-sec" class="tab-content">
    <div class="section-title">القرآن — قراءة أوفلاين</div>
    <div style="background:var(--teal-dim);border:1px solid rgba(46,125,107,.2);border-radius:var(--r-md);padding:10px 14px;margin-bottom:12px;font-size:.82rem;color:var(--teal);display:flex;align-items:center;gap:8px;">
      <svg width="14" height="14"><use href="#icon-book"/></svg>
      يعمل بدون إنترنت بعد التحميل الأول
    </div>
    <input type="text" id="offline-search" class="ios-input" placeholder="🔍 ابحث عن سورة..." oninput="filterOffline()">
    <div class="surah-grid" id="offline-grid"></div>
    <div style="display:flex;gap:7px;margin-bottom:12px;flex-wrap:wrap;">
      <button class="btn btn-sm" onclick="changeOfflineFontSize(2)">تكبير</button>
      <button class="btn btn-sm" onclick="changeOfflineFontSize(-2)">تصغير</button>
      <button class="btn btn-sm" onclick="toggleNightOffline()">
        <svg width="12" height="12"><use href="#icon-moon"/></svg>
      </button>
      <button class="btn btn-sm btn-gold" onclick="copyAyah()">نسخ</button>
      <button class="btn btn-sm" onclick="openFocusOffline()">
        <svg width="12" height="12"><use href="#icon-eye"/></svg> تركيز
      </button>
    </div>
    <div id="offline-surah-info" style="display:none;text-align:center;padding:10px;background:var(--gold-dim);border-radius:var(--r-md);margin-bottom:10px;border:1px solid rgba(184,149,74,.2);">
      <div id="offline-surah-name" style="font-size:1.3rem;font-weight:700;color:var(--gold);"></div>
      <div id="offline-surah-meta" style="font-size:.8rem;color:var(--ink2);"></div>
    </div>
    <div class="quran-viewer" id="offline-viewer" style="font-size:1.85rem;">
      <div style="color:var(--ink2);text-align:center;padding:28px;font-size:1rem;">اختر سورة من القائمة</div>
    </div>
    <div id="offline-ayah-info" style="display:none;margin-top:10px;padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--sh-sm);">
      <div id="offline-ayah-preview" style="font-size:.82rem;color:var(--ink2);margin-bottom:8px;"></div>
      <div class="btn-row">
        <button class="btn btn-sm btn-gold" onclick="saveOfflineBm()">
          <svg width="12" height="12"><use href="#icon-bookmark"/></svg> حفظ
        </button>
        <button class="btn btn-sm" onclick="copyAyah()">نسخ</button>
        <button class="btn btn-sm" onclick="addFavorite()">
          <svg width="12" height="12"><use href="#icon-heart"/></svg>
        </button>
      </div>
    </div>
    <div id="offline-last-btn" style="display:none;margin-top:10px;">
      <button class="btn" style="width:100%;" onclick="goToLastOffline()">متابعة من حيث توقفت</button>
    </div>
  </div>

  <!-- ══ 4. الأذكار ══ -->
  <div id="azkar-sec" class="tab-content">
    <div class="section-title">حصن المسلم</div>
    <div id="azkar-cats" class="azkar-grid">
      <div class="azkar-cat-card" onclick="loadZekrCat('morning')">
        <div class="azkar-cat-icon">
          <svg width="36" height="36" stroke="var(--gold)"><use href="#icon-sunrise"/></svg>
        </div>
        <div class="azkar-cat-label">أذكار الصباح</div>
      </div>
      <div class="azkar-cat-card" onclick="loadZekrCat('evening')">
        <div class="azkar-cat-icon">
          <svg width="36" height="36" stroke="var(--teal)"><use href="#icon-crescent"/></svg>
        </div>
        <div class="azkar-cat-label">أذكار المساء</div>
      </div>
      <div class="azkar-cat-card" onclick="loadZekrCat('sleep')">
        <div class="azkar-cat-icon">
          <svg width="36" height="36" stroke="var(--ink2)"><use href="#icon-moon"/></svg>
        </div>
        <div class="azkar-cat-label">أذكار النوم</div>
      </div>
      <div class="azkar-cat-card" onclick="loadZekrCat('praise')">
        <div class="azkar-cat-icon">
          <svg width="36" height="36" stroke="var(--gold)"><use href="#icon-tasbih"/></svg>
        </div>
        <div class="azkar-cat-label">تسابيح عامة</div>
      </div>
    </div>
    <div id="azkar-view" style="display:none;margin-top:16px;">
      <button class="btn btn-sm" onclick="backAzkar()" style="margin-bottom:12px;">→ العودة</button>
      <div id="azkar-list"></div>
    </div>
  </div>

  <!-- ══ 5. القبلة ══ -->
  <div id="qibla-sec" class="tab-content">
    <div class="section-title">اتجاه القبلة</div>
    <p style="color:var(--ink2);font-size:.85rem;text-align:center;margin-bottom:16px;">اتجاه القبلة لفلسطين: ≈ ١٤٥° من الشمال</p>
    <div class="compass-wrap">
      <div class="compass-ring" id="compass-ring">
        <span class="compass-n">N</span>
        <div class="compass-pointer"></div>
        <div class="compass-qibla"></div>
        <div class="compass-center"></div>
      </div>
      <button class="btn btn-gold" onclick="initQibla()">
        <svg width="14" height="14"><use href="#icon-gps"/></svg> تفعيل القبلة بـ GPS
      </button>
      <p id="qibla-result" style="color:var(--teal);font-weight:700;text-align:center;font-size:.92rem;"></p>
    </div>
  </div>

  <!-- ══ 6. الأسماء ══ -->
  <div id="names-sec" class="tab-content">
    <div class="section-title">أسماء الله الحسنى</div>
    <div class="names-grid" id="names-grid"></div>
  </div>

  <!-- ══ 7. لوحتي ══ -->
  <div id="dashboard-sec" class="tab-content">
    <div class="section-title">لوحتي الشخصية</div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-val" id="dash-points">0</div><div class="stat-lbl">النقاط الإيمانية</div></div>
      <div class="stat-card"><div class="stat-val" id="dash-ayahs">0</div><div class="stat-lbl">آيات اليوم</div></div>
      <div class="stat-card"><div class="stat-val" id="dash-tasbih">0</div><div class="stat-lbl">تسبيحات</div></div>
      <div class="stat-card"><div class="stat-val" id="dash-khatmas">0</div><div class="stat-lbl">ختمات</div></div>
    </div>
    <div class="info-card">
      <div class="info-card-title">🏅 الأوسمة</div>
      <p id="dash-badges" style="font-size:.85rem;color:var(--ink2);">لا يوجد أوسمة بعد</p>
    </div>
    <div class="info-card">
      <div class="info-card-title">📖 تقدم الختمة</div>
      <p id="dash-khatma-txt" style="font-size:.85rem;color:var(--ink2);margin-bottom:8px;">لم تبدأ ختمة</p>
      <div class="prog-wrap"><div class="prog-fill" id="khatma-prog-bar" style="width:0%"></div></div>
    </div>
    <div class="info-card">
      <div class="info-card-title">📊 تسبيحات الأسبوع</div>
      <div id="tasbih-week" style="display:flex;gap:6px;align-items:flex-end;height:70px;margin-top:4px;"></div>
    </div>
  </div>

  <!-- ══ 8. حديث ══ -->
  <div id="hadith-sec" class="tab-content">
    <div class="section-title">حديث اليوم</div>
    <div class="hadith-text" id="hadith-text"></div>
    <div class="info-card"><div class="info-card-title">الشرح</div><p id="hadith-sharh" style="font-size:.88rem;color:var(--ink2);"></p></div>
    <button class="btn btn-gold" style="width:100%;margin-top:8px;" onclick="nextHadith()">حديث آخر</button>
  </div>

  <!-- ══ 9. الأدعية ══ -->
  <div id="duaa-sec" class="tab-content">
    <div class="section-title">الأدعية المستجابة</div>
    <div id="duaa-container"></div>
  </div>

  <!-- ══ 10. السيرة ══ -->
  <div id="seerah-sec" class="tab-content">
    <div class="section-title">السيرة النبوية</div>
    <div id="seerah-container"></div>
  </div>

  <!-- ══ 11. التجويد ══ -->
  <div id="tajweed-sec" class="tab-content">
    <div class="section-title">دروس التجويد</div>
    <div id="tajweed-container"></div>
  </div>

  <!-- ══ 12. الزكاة ══ -->
  <div id="zakah-sec" class="tab-content">
    <div class="section-title">حاسبة الزكاة</div>
    <div class="info-card">
      <label style="font-weight:600;display:block;margin-bottom:4px;font-size:.85rem;">نوع المال</label>
      <select id="zakah-type" class="ios-select" onchange="calcZakah()">
        <option value="money">مال نقدي</option>
        <option value="gold">ذهب (بالجرام)</option>
        <option value="silver">فضة</option>
      </select>
      <label style="font-weight:600;display:block;margin-bottom:4px;margin-top:10px;font-size:.85rem;">المقدار</label>
      <input type="number" id="zakah-amount" class="ios-input" placeholder="أدخل المقدار..." oninput="calcZakah()">
      <div class="zakah-result" id="zakah-result">أدخل المقدار لحساب الزكاة...</div>
      <p style="font-size:.72rem;color:var(--ink2);text-align:center;margin-top:8px;">النصاب: ٨٥ جرام ذهب · يُستحب استشارة أهل العلم</p>
    </div>
  </div>

  <!-- ══ 13. الختمة ══ -->
  <div id="khatma-sec" class="tab-content">
    <div class="section-title">الختمة الذكية</div>
    <div class="khatma-card" id="khatma-main">
      <p id="khatma-info" style="color:var(--ink2);font-size:.88rem;">ابدأ ختمة جديدة</p>
      <div class="prog-wrap" style="margin:12px 0;"><div class="prog-fill" id="khatma-detail-bar" style="width:0%"></div></div>
      <p id="khatma-detail" style="font-size:.8rem;color:var(--ink2);"></p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
      <div><label style="font-size:.82rem;font-weight:600;display:block;margin-bottom:4px;">هدف (أيام)</label><input type="number" id="khatma-days" class="ios-input" value="30"></div>
      <div style="display:flex;align-items:flex-end;"><button class="btn btn-gold" style="width:100%;" onclick="startKhatma()">▶ ابدأ</button></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div><label style="font-size:.82rem;font-weight:600;display:block;margin-bottom:4px;">صفحات اليوم</label><input type="number" id="khatma-pages" class="ios-input" value="5"></div>
      <div style="display:flex;align-items:flex-end;"><button class="btn" style="width:100%;" onclick="advanceKhatma()">✓ سجّل</button></div>
    </div>
    <div style="text-align:center;margin-top:12px;font-size:.85rem;color:var(--ink2);">الختمات المكتملة: <strong id="khatmas-total" style="color:var(--gold);">0</strong></div>
  </div>

  <!-- ══ 14. المناسبات ══ -->
  <div id="occasions-sec" class="tab-content">
    <div class="section-title">المناسبات الإسلامية</div>
    <div class="occasions-grid" id="occasions-container"></div>
    <div class="info-card" style="margin-top:14px;">
      <div class="info-card-title">التقويم الهجري</div>
      <div id="hijri-full" style="font-size:.88rem;color:var(--ink2);"></div>
    </div>
  </div>

  <!-- ══ 15. الوِرد ══ -->
  <div id="wird-sec" class="tab-content">
    <div class="section-title">الوِرد اليومي</div>
    <div style="text-align:center;margin-bottom:14px;">
      <span id="wird-done" style="font-size:1.6rem;font-weight:900;color:var(--gold);">0</span>
      <span style="color:var(--ink2);"> / </span>
      <span id="wird-total" style="color:var(--ink2);">0</span>
      <div class="prog-wrap" style="margin-top:8px;"><div class="prog-fill" id="wird-prog" style="width:0%"></div></div>
    </div>
    <div id="wird-list"></div>
    <button class="btn" style="width:100%;margin-top:10px;" onclick="resetWird()">↺ يوم جديد</button>
  </div>

  <!-- ══ 16. تتبع الصلاة ══ -->
  <div id="prayer-track-sec" class="tab-content">
    <div class="section-title">تتبع الصلوات</div>
    <div class="prayer-track-grid" id="prayer-track-grid"></div>
    <div class="info-card" style="margin-top:14px;">
      <div class="info-card-title">إحصائيات</div>
      <div id="prayer-stats" style="font-size:.85rem;color:var(--ink2);"></div>
      <div class="prog-wrap" style="margin-top:8px;"><div class="prog-fill" id="prayer-prog" style="width:0%"></div></div>
      <p id="prayer-pct" style="font-size:.78rem;color:var(--ink2);margin-top:4px;"></p>
    </div>
  </div>

  <!-- ══ 17. التحدي ══ -->
  <div id="challenge-sec" class="tab-content">
    <div class="section-title">التحدي اليومي</div>
    <div class="challenge-card">
      <div class="challenge-title" id="ch-title">تحدي اليوم</div>
      <div class="challenge-desc" id="ch-desc">جاري التحميل...</div>
      <div class="prog-wrap" style="margin:12px 0;"><div class="prog-fill" id="ch-bar" style="width:0%"></div></div>
      <div class="challenge-num" id="ch-progress">0 / 0</div>
      <div class="btn-row" style="justify-content:center;">
        <button class="btn btn-gold" onclick="incChallenge()">+ ١</button>
        <button class="btn" onclick="newChallenge()">↺ تحدٍّ آخر</button>
      </div>
    </div>
    <div class="info-card" style="margin-top:14px;">
      <div class="info-card-title">🔥 السلسلة</div>
      <p style="font-size:.85rem;color:var(--ink2);">أكملت <strong id="ch-streak" style="color:var(--gold);">0</strong> يوم متواصل</p>
      <p style="font-size:.85rem;color:var(--ink2);">المجموع: <strong id="ch-total" style="color:var(--teal);">0</strong></p>
    </div>
  </div>

  <!-- ══ 18. المدن ══ -->
  <div id="mosque-sec" class="tab-content">
    <div class="section-title">مواقيت المدن الفلسطينية</div>
    <div id="cities-list"></div>
    <div class="info-card" style="margin-top:14px;">
      <div class="info-card-title">من تاريخ المساجد المقدسة</div>
      <p id="mosque-fact" style="font-size:.85rem;color:var(--ink2);"></p>
    </div>
  </div>

  <!-- ══ 19. المحفوظات ══ -->
  <div id="bookmarks-sec" class="tab-content">
    <div class="section-title">المحفوظات والمفضلة</div>
    <div class="info-card">
      <div class="info-card-title">
        <svg width="14" height="14" style="color:var(--gold);"><use href="#icon-bookmark"/></svg>
        علامات القراءة
      </div>
      <div id="bm-reading-list" style="font-size:.85rem;color:var(--ink2);">لا توجد علامات</div>
    </div>
    <div class="info-card">
      <div class="info-card-title">
        <svg width="14" height="14" style="color:var(--rose);"><use href="#icon-heart"/></svg>
        المفضلة
      </div>
      <div id="bm-favs-list" style="font-size:.85rem;color:var(--ink2);">لا توجد آيات</div>
    </div>
    <div class="btn-row">
      <button class="btn" onclick="clearBms()">✕ مسح الكل</button>
      <button class="btn btn-gold" onclick="exportBms()">↓ تصدير</button>
    </div>
  </div>

</div><!-- end app-wrap -->

<!-- Floating Sebha -->
<button class="sebha-fab" id="sebha-btn" onclick="tasbih()">
  <span class="sebha-count" id="s-count">0</span>
  <span class="sebha-total" id="s-total">0 مجموع</span>
</button>
<div class="sebha-controls">
  <select id="sebha-type" class="btn" style="font-size:.75rem;padding:6px 10px;" onchange="showToast('✓ تم تغيير الذكر')">
    <option>سبحان الله</option>
    <option>الحمد لله</option>
    <option>لا إله إلا الله</option>
    <option>الله أكبر</option>
    <option>أستغفر الله</option>
  </select>
  <button class="btn btn-sm" onclick="resetTasbih()">تصفير</button>
</div>

<script>
// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════
const SURAHS_META = [
  {n:1,name:"الفاتحة",ayahs:7,type:"مكية"},{n:2,name:"البقرة",ayahs:286,type:"مدنية"},{n:3,name:"آل عمران",ayahs:200,type:"مدنية"},
  {n:4,name:"النساء",ayahs:176,type:"مدنية"},{n:5,name:"المائدة",ayahs:120,type:"مدنية"},{n:6,name:"الأنعام",ayahs:165,type:"مكية"},
  {n:7,name:"الأعراف",ayahs:206,type:"مكية"},{n:8,name:"الأنفال",ayahs:75,type:"مدنية"},{n:9,name:"التوبة",ayahs:129,type:"مدنية"},
  {n:10,name:"يونس",ayahs:109,type:"مكية"},{n:11,name:"هود",ayahs:123,type:"مكية"},{n:12,name:"يوسف",ayahs:111,type:"مكية"},
  {n:13,name:"الرعد",ayahs:43,type:"مدنية"},{n:14,name:"إبراهيم",ayahs:52,type:"مكية"},{n:15,name:"الحجر",ayahs:99,type:"مكية"},
  {n:16,name:"النحل",ayahs:128,type:"مكية"},{n:17,name:"الإسراء",ayahs:111,type:"مكية"},{n:18,name:"الكهف",ayahs:110,type:"مكية"},
  {n:19,name:"مريم",ayahs:98,type:"مكية"},{n:20,name:"طه",ayahs:135,type:"مكية"},{n:21,name:"الأنبياء",ayahs:112,type:"مكية"},
  {n:22,name:"الحج",ayahs:78,type:"مدنية"},{n:23,name:"المؤمنون",ayahs:118,type:"مكية"},{n:24,name:"النور",ayahs:64,type:"مدنية"},
  {n:25,name:"الفرقان",ayahs:77,type:"مكية"},{n:26,name:"الشعراء",ayahs:227,type:"مكية"},{n:27,name:"النمل",ayahs:93,type:"مكية"},
  {n:28,name:"القصص",ayahs:88,type:"مكية"},{n:29,name:"العنكبوت",ayahs:69,type:"مكية"},{n:30,name:"الروم",ayahs:60,type:"مكية"},
  {n:31,name:"لقمان",ayahs:34,type:"مكية"},{n:32,name:"السجدة",ayahs:30,type:"مكية"},{n:33,name:"الأحزاب",ayahs:73,type:"مدنية"},
  {n:34,name:"سبأ",ayahs:54,type:"مكية"},{n:35,name:"فاطر",ayahs:45,type:"مكية"},{n:36,name:"يس",ayahs:83,type:"مكية"},
  {n:37,name:"الصافات",ayahs:182,type:"مكية"},{n:38,name:"ص",ayahs:88,type:"مكية"},{n:39,name:"الزمر",ayahs:75,type:"مكية"},
  {n:40,name:"غافر",ayahs:85,type:"مكية"},{n:41,name:"فصلت",ayahs:54,type:"مكية"},{n:42,name:"الشورى",ayahs:53,type:"مكية"},
  {n:43,name:"الزخرف",ayahs:89,type:"مكية"},{n:44,name:"الدخان",ayahs:59,type:"مكية"},{n:45,name:"الجاثية",ayahs:37,type:"مكية"},
  {n:46,name:"الأحقاف",ayahs:35,type:"مكية"},{n:47,name:"محمد",ayahs:38,type:"مدنية"},{n:48,name:"الفتح",ayahs:29,type:"مدنية"},
  {n:49,name:"الحجرات",ayahs:18,type:"مدنية"},{n:50,name:"ق",ayahs:45,type:"مكية"},{n:51,name:"الذاريات",ayahs:60,type:"مكية"},
  {n:52,name:"الطور",ayahs:49,type:"مكية"},{n:53,name:"النجم",ayahs:62,type:"مكية"},{n:54,name:"القمر",ayahs:55,type:"مكية"},
  {n:55,name:"الرحمن",ayahs:78,type:"مدنية"},{n:56,name:"الواقعة",ayahs:96,type:"مكية"},{n:57,name:"الحديد",ayahs:29,type:"مدنية"},
  {n:58,name:"المجادلة",ayahs:22,type:"مدنية"},{n:59,name:"الحشر",ayahs:24,type:"مدنية"},{n:60,name:"الممتحنة",ayahs:13,type:"مدنية"},
  {n:61,name:"الصف",ayahs:14,type:"مدنية"},{n:62,name:"الجمعة",ayahs:11,type:"مدنية"},{n:63,name:"المنافقون",ayahs:11,type:"مدنية"},
  {n:64,name:"التغابن",ayahs:18,type:"مدنية"},{n:65,name:"الطلاق",ayahs:12,type:"مدنية"},{n:66,name:"التحريم",ayahs:12,type:"مدنية"},
  {n:67,name:"الملك",ayahs:30,type:"مكية"},{n:68,name:"القلم",ayahs:52,type:"مكية"},{n:69,name:"الحاقة",ayahs:52,type:"مكية"},
  {n:70,name:"المعارج",ayahs:44,type:"مكية"},{n:71,name:"نوح",ayahs:28,type:"مكية"},{n:72,name:"الجن",ayahs:28,type:"مكية"},
  {n:73,name:"المزمل",ayahs:20,type:"مكية"},{n:74,name:"المدثر",ayahs:56,type:"مكية"},{n:75,name:"القيامة",ayahs:40,type:"مكية"},
  {n:76,name:"الإنسان",ayahs:31,type:"مدنية"},{n:77,name:"المرسلات",ayahs:50,type:"مكية"},{n:78,name:"النبأ",ayahs:40,type:"مكية"},
  {n:79,name:"النازعات",ayahs:46,type:"مكية"},{n:80,name:"عبس",ayahs:42,type:"مكية"},{n:81,name:"التكوير",ayahs:29,type:"مكية"},
  {n:82,name:"الانفطار",ayahs:19,type:"مكية"},{n:83,name:"المطففين",ayahs:36,type:"مكية"},{n:84,name:"الانشقاق",ayahs:25,type:"مكية"},
  {n:85,name:"البروج",ayahs:22,type:"مكية"},{n:86,name:"الطارق",ayahs:17,type:"مكية"},{n:87,name:"الأعلى",ayahs:19,type:"مكية"},
  {n:88,name:"الغاشية",ayahs:26,type:"مكية"},{n:89,name:"الفجر",ayahs:30,type:"مكية"},{n:90,name:"البلد",ayahs:20,type:"مكية"},
  {n:91,name:"الشمس",ayahs:15,type:"مكية"},{n:92,name:"الليل",ayahs:21,type:"مكية"},{n:93,name:"الضحى",ayahs:11,type:"مكية"},
  {n:94,name:"الشرح",ayahs:8,type:"مكية"},{n:95,name:"التين",ayahs:8,type:"مكية"},{n:96,name:"العلق",ayahs:19,type:"مكية"},
  {n:97,name:"القدر",ayahs:5,type:"مكية"},{n:98,name:"البينة",ayahs:8,type:"مدنية"},{n:99,name:"الزلزلة",ayahs:8,type:"مدنية"},
  {n:100,name:"العاديات",ayahs:11,type:"مكية"},{n:101,name:"القارعة",ayahs:11,type:"مكية"},{n:102,name:"التكاثر",ayahs:8,type:"مكية"},
  {n:103,name:"العصر",ayahs:3,type:"مكية"},{n:104,name:"الهمزة",ayahs:9,type:"مكية"},{n:105,name:"الفيل",ayahs:5,type:"مكية"},
  {n:106,name:"قريش",ayahs:4,type:"مكية"},{n:107,name:"الماعون",ayahs:7,type:"مكية"},{n:108,name:"الكوثر",ayahs:3,type:"مكية"},
  {n:109,name:"الكافرون",ayahs:6,type:"مكية"},{n:110,name:"النصر",ayahs:3,type:"مدنية"},{n:111,name:"المسد",ayahs:5,type:"مكية"},
  {n:112,name:"الإخلاص",ayahs:4,type:"مكية"},{n:113,name:"الفلق",ayahs:5,type:"مكية"},{n:114,name:"الناس",ayahs:6,type:"مكية"}
];

const ADHAN_URLS = { alafasy:'https://www.islamcan.com/audio/adhan/azan1.mp3', makkah:'https://www.islamcan.com/audio/adhan/azan2.mp3', madinah:'https://www.islamcan.com/audio/adhan/azan20.mp3' };
const ADHAN_CACHE = 'noor-adhan-v2';
const PRAYER_CACHE_KEY = 'noor-prayer-data-v3';

const NAFAHAT = ["لا تحزن إن الله معنا","ألا بذكر الله تطمئن القلوب","ومن يتق الله يجعل له مخرجاً","فصبر جميل","إن مع العسر يسراً","الله نور السماوات والأرض","حسبي الله ونعم الوكيل","لا حول ولا قوة إلا بالله"];
const AZKAR = {
  morning:[{text:"أصبحنا وأصبح الملك لله، والحمد لله لا إله إلا الله وحده لا شريك له",count:1},{text:"اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور",count:1},{text:"يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين",count:3},{text:"اللهم عافني في بدني، اللهم عافني في سمعي وبصري، لا إله إلا أنت",count:3},{text:"اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً",count:1}],
  evening:[{text:"أمسينا وأمسى الملك لله، والحمد لله لا إله إلا الله وحده لا شريك له",count:1},{text:"اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",count:1},{text:"بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",count:3},{text:"اللهم إني أمسيت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت",count:4}],
  sleep:[{text:"باسمك ربي وضعت جنبي وبك أرفعه، إن أمسكت نفسي فارحمها",count:1},{text:"اللهم قني عذابك يوم تبعث عبادك",count:3},{text:"باسمك اللهم أموت وأحيا",count:1}],
  praise:[{text:"سبحان الله وبحمده: عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته",count:3},{text:"اللهم صل وسلم على نبينا محمد",count:10},{text:"لا حول ولا قوة إلا بالله العلي العظيم",count:100},{text:"أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",count:100}]
};
const AHADITH = [
  {text:"إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى...",sharh:"قبول الأعمال يعتمد على النية الصالحة المخلصة لله تعالى."},
  {text:"من سلك طريقاً يلتمس فيه علماً سهّل الله له به طريقاً إلى الجنة",sharh:"فضل طلب العلم الشرعي وعظيم أجره عند الله."},
  {text:"الدين النصيحة: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم",sharh:"يوضح أن عماد الدين النصح المخلص لله والناس."},
  {text:"من صلّى البردين دخل الجنة",sharh:"البردان: صلاة الفجر والعصر، وفيهما فضل عظيم."},
  {text:"خيركم من تعلّم القرآن وعلّمه",sharh:"يبيّن شرف تعلم القرآن الكريم وتعليمه للناس."},
  {text:"المسلم من سلم المسلمون من لسانه ويده",sharh:"الإسلام الحق يقوم على كف الأذى وإيصال الخير."},
  {text:"أحب الأعمال إلى الله أدومها وإن قلّ",sharh:"المداومة على العمل الصالح ولو كان يسيراً أفضل من الكثير المنقطع."}
];
const DUAA = {
  "الهم والكرب":["اللهم إني أعوذ بك من الهم والحزن والعجز والكسل","لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم"],
  "الرزق والبركة":["اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك","اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً"],
  "المرض والشفاء":["اللهم رب الناس، أذهب البأس، اشفِ أنت الشافي لا شفاء إلا شفاؤك","بسم الله أرقيك من كل شيء يؤذيك"],
  "الزواج والذرية":["رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ","رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ"]
};
const SEERAH = [
  {title:"مولد النبي ﷺ",content:"وُلد في مكة المكرمة عام الفيل (570م)، يتيم الأب قبل ولادته."},
  {title:"بعثة النبي ﷺ",content:"نزل الوحي أول مرة في غار حراء وكان النبي ﷺ في الأربعين من عمره."},
  {title:"الهجرة النبوية",content:"هاجر النبي ﷺ وصاحبه أبو بكر الصديق إلى المدينة المنورة."},
  {title:"بناء المسجد النبوي",content:"كان أول عمل قام به النبي ﷺ في المدينة بناء المسجد."},
  {title:"غزوة بدر الكبرى",content:"في السنة الثانية، انتصر المسلمون رغم قلة عددهم وعُدّتهم."},
  {title:"صلح الحديبية",content:"في السنة السادسة كان فتحاً مبيناً مهّد لانتشار الإسلام."},
  {title:"فتح مكة المكرمة",content:"في السنة الثامنة دخل النبي ﷺ مكة فاتحاً وعفا عن أهلها."}
];
const TAJWEED = [
  {rule:"أحكام النون الساكنة والتنوين",detail:"أربعة أحكام: الإظهار الحلقي، الإدغام، الإقلاب، والإخفاء الحقيقي."},
  {rule:"أحكام الميم الساكنة",detail:"الإخفاء الشفوي مع الباء، الإدغام الشفوي مع الميم، والإظهار مع غيرهما."},
  {rule:"أقسام المدود",detail:"مد طبيعي حركتان، مد فرعي بسبب همز أو سكون من ٢ إلى ٦ حركات."},
  {rule:"صفات الحروف",detail:"الجهر والهمس، الشدة والرخاوة، الاستعلاء والاستفال وغيرها."},
  {rule:"اللام الشمسية والقمرية",detail:"القمرية تُظهر، الشمسية تُدغم في الحرف الذي يليها."}
];
const WIRD_ITEMS = [
  {id:'fajr',label:'صلاة الفجر',pts:30,icon:'fajr'},{id:'dhuhr',label:'صلاة الظهر',pts:20,icon:'sun'},
  {id:'asr',label:'صلاة العصر',pts:20,icon:'sun'},{id:'maghrib',label:'صلاة المغرب',pts:20,icon:'sunset'},
  {id:'isha',label:'صلاة العشاء',pts:20,icon:'moon'},{id:'morning_azkar',label:'أذكار الصباح',pts:15,icon:'sunrise'},
  {id:'evening_azkar',label:'أذكار المساء',pts:15,icon:'crescent'},{id:'quran_read',label:'تلاوة القرآن',pts:25,icon:'book'},
  {id:'tasbih_33',label:'تسبيح 33×3',pts:10,icon:'tasbih'},{id:'salah_prophet',label:'الصلاة على النبي ﷺ',pts:10,icon:'star'},
  {id:'sadaqah',label:'صدقة ولو بسيطة',pts:20,icon:'charity'},{id:'duaa',label:'دعاء وتضرع',pts:15,icon:'hands'}
];
const WIRD_ICONS = {
  fajr:'#icon-sunrise', sun:'#icon-sun', sunset:'#icon-sunrise', moon:'#icon-moon',
  sunrise:'#icon-sunrise', crescent:'#icon-crescent', book:'#icon-book-open',
  tasbih:'#icon-tasbih', star:'#icon-star', charity:'#icon-charity', hands:'#icon-hands'
};
const CHALLENGES = [
  {title:"تحدي الاستغفار",desc:"استغفر الله 100 مرة اليوم",target:100},
  {title:"الصلاة على النبي ﷺ",desc:"صلّ على النبي 200 مرة",target:200},
  {title:"تحدي التسبيح",desc:"سبّح الله 99 مرة بعد كل صلاة",target:99},
  {title:"تحدي آية الكرسي",desc:"اقرأ آية الكرسي 10 مرات",target:10},
  {title:"تحدي الحمد",desc:"قل الحمد لله 100 مرة",target:100},
  {title:"تحدي التهليل",desc:"قل لا إله إلا الله 100 مرة",target:100},
  {title:"تحدي الصفحات",desc:"اقرأ 5 صفحات من القرآن",target:5}
];
const MOSQUE_FACTS = [
  "المسجد الأقصى هو أولى القبلتين وثالث الحرمين الشريفين.",
  "المسجد الإبراهيمي الشريف في الخليل يضم رفات الأنبياء.",
  "قبة الصخرة بناها الخليفة عبد الملك بن مروان عام 72 هـ.",
  "الصلاة في المسجد الأقصى تعادل 500 صلاة فيما سواه.",
  "فلسطين سُميت في القرآن بـ﴿الأرض المباركة﴾."
];
const ISLAMIC_OCCASIONS = [
  {name:"رأس السنة الهجرية 1447",icon:"calendar",date:"2025-06-26",notes:"1 محرم 1447"},
  {name:"عاشوراء 1447",icon:"crescent",date:"2025-07-05",notes:"10 محرم 1447"},
  {name:"المولد النبوي 1447",icon:"star",date:"2025-09-04",notes:"12 ربيع الأول 1447"},
  {name:"الإسراء والمعراج 1447",icon:"star",date:"2026-01-27",notes:"27 رجب 1447"},
  {name:"رمضان المبارك 1447",icon:"crescent",date:"2026-02-18",notes:"1 رمضان 1447 — تقريبي"},
  {name:"ليلة القدر 1447",icon:"star",date:"2026-03-14",notes:"27 رمضان 1447 — تقريبي"},
  {name:"عيد الفطر 1447",icon:"star",date:"2026-03-20",notes:"1 شوال 1447 — تقريبي"},
  {name:"عيد الأضحى 1447",icon:"star",date:"2026-05-27",notes:"10 ذو الحجة 1447 — تقريبي"},
  {name:"رأس السنة الهجرية 1448",icon:"calendar",date:"2026-06-16",notes:"1 محرم 1448 — تقريبي"}
];
const OCC_SVG_ICONS = {
  calendar:'#icon-calendar', crescent:'#icon-crescent', star:'#icon-star'
};

const SHARE_THEMES=[
  {id:'midnight',name:'ليلي',bg:'linear-gradient(145deg,#0a0a1a,#0d1b2a)',textColor:'#e8d5a3',verseColor:'#f5e6c8',numberColor:'#7ecfff',borderColor:'rgba(126,207,255,0.3)',surahColor:'#7ecfff',preview:'linear-gradient(135deg,#0a0a1a,#0d1b2a)'},
  {id:'golden',name:'ذهبي',bg:'linear-gradient(145deg,#120900,#1e1000)',textColor:'#f5dfa0',verseColor:'#fff8e6',numberColor:'#fbbf24',borderColor:'rgba(251,191,36,0.35)',surahColor:'#fbbf24',preview:'linear-gradient(135deg,#120900,#1e1000)'},
  {id:'emerald',name:'زمرّدي',bg:'linear-gradient(145deg,#001a0e,#002d1a)',textColor:'#b8f0d0',verseColor:'#e8fff4',numberColor:'#4ade80',borderColor:'rgba(74,222,128,0.3)',surahColor:'#4ade80',preview:'linear-gradient(135deg,#001a0e,#002d1a)'},
  {id:'amethyst',name:'بنفسجي',bg:'linear-gradient(145deg,#0e0014,#1a0028)',textColor:'#ddb8f5',verseColor:'#f3e8ff',numberColor:'#c084fc',borderColor:'rgba(192,132,252,0.3)',surahColor:'#c084fc',preview:'linear-gradient(135deg,#0e0014,#1a0028)'},
  {id:'ivory',name:'عاجي',bg:'linear-gradient(145deg,#faf8f2,#ede8dc)',textColor:'#3d3320',verseColor:'#1a1208',numberColor:'#8b6914',borderColor:'rgba(139,105,20,0.3)',surahColor:'#6b4f0a',preview:'linear-gradient(135deg,#faf8f2,#ede8dc)'},
  {id:'ocean',name:'أزرق',bg:'linear-gradient(145deg,#00060f,#001424)',textColor:'#a0d4f5',verseColor:'#e0f2ff',numberColor:'#38bdf8',borderColor:'rgba(56,189,248,0.3)',surahColor:'#38bdf8',preview:'linear-gradient(135deg,#00060f,#001424)'},
  {id:'rose',name:'وردي',bg:'linear-gradient(145deg,#1a080a,#2a0f12)',textColor:'#ffc4c4',verseColor:'#fff0f0',numberColor:'#fb7185',borderColor:'rgba(251,113,133,0.3)',surahColor:'#fb7185',preview:'linear-gradient(135deg,#1a080a,#2a0f12)'},
  {id:'sand',name:'رملي',bg:'linear-gradient(145deg,#1a1208,#261a08)',textColor:'#e8d5a0',verseColor:'#fff8e0',numberColor:'#d4a843',borderColor:'rgba(212,168,67,0.35)',surahColor:'#d4a843',preview:'linear-gradient(135deg,#1a1208,#261a08)'}
];

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
const audio = document.getElementById('main-audio');
const adhanAudio = document.getElementById('adhan-audio');
let prayerTimes = {};
let currentSurahId = null, currentAyahIdx = 0, ayahsData = [];
let totalTasbih = parseInt(localStorage.getItem('totalTasbih'))||0;
let adhanEnabled = false, adhanInterval = null;
let focusCount = 0;
let currentHadithIdx = 0;
let breathInterval;
let shareThemeIdx = 0;

let points = parseInt(localStorage.getItem('noor_pts'))||0;
let badges = JSON.parse(localStorage.getItem('noor_bdg'))||[];
let dailyProg = JSON.parse(localStorage.getItem('noor_daily'))||{ayahs:0,tasbih:0};
let khatma = JSON.parse(localStorage.getItem('noor_khatma'))||{active:false,days:30,page:1,total:0};
let tasbihStats = JSON.parse(localStorage.getItem('noor_tsb_stats'))||{0:0,1:0,2:0,3:0,4:0,5:0,6:0};
let challengeState = JSON.parse(localStorage.getItem('noor_ch'))||{idx:0,prog:0,streak:0,total:0,date:''};

const todayStr = new Date().toDateString();
const wirdDate = localStorage.getItem('noor_wird_dt')||'';
let wirdState = JSON.parse(localStorage.getItem('noor_wird'))||{};
if(wirdDate!==todayStr){wirdState={};localStorage.setItem('noor_wird_dt',todayStr);localStorage.setItem('noor_wird',JSON.stringify(wirdState));}

const ptDate = localStorage.getItem('noor_pt_dt')||'';
let ptToday = JSON.parse(localStorage.getItem('noor_pt_today'))||{};
if(ptDate!==todayStr){ptToday={};localStorage.setItem('noor_pt_dt',todayStr);localStorage.setItem('noor_pt_today',JSON.stringify(ptToday));}

const offlineCache = {};
let offlineSurah = null, offlineAyahIdx = 0, selectedAyah = null;

// ═══════════════════════════════════════════════════
// ✦ HOLOGRAPHIC CYLINDER ENGINE
// ═══════════════════════════════════════════════════
const HOLO_RADIUS = 145;
const CARD_COUNT = SURAHS_META.length;
const STEP = 360 / CARD_COUNT;
let holoAngle = 0, holoVel = 0, holoIdx = 0;
let holoDrag = false, holoDragY = 0, holoLastY = 0;
let holoRAF;

function buildHoloCylinder() {
  const cyl = document.getElementById('holo-cylinder');
  cyl.innerHTML = '';
  SURAHS_META.forEach((s,i) => {
    const c = document.createElement('div');
    c.className = 'h-card';
    c.id = `hc-${i}`;
    c.innerHTML = `<span class="h-num">${s.n}</span><span class="h-name">${s.name}</span><span class="h-ayahs">${s.ayahs}</span>`;
    c.addEventListener('click', () => holoSelect(i));
    cyl.appendChild(c);
  });
  renderHolo();
}

function renderHolo() {
  const frontIdx = ((Math.round(holoAngle/STEP)%CARD_COUNT)+CARD_COUNT)%CARD_COUNT;
  SURAHS_META.forEach((_,i) => {
    const el = document.getElementById(`hc-${i}`);
    if(!el) return;
    const a = (i * STEP - holoAngle) * Math.PI / 180;
    const z = Math.cos(a) * HOLO_RADIUS;
    const y = Math.sin(a) * HOLO_RADIUS;
    const scale = (z + HOLO_RADIUS) / (2 * HOLO_RADIUS);
    const scaleMapped = 0.45 + scale * 0.6;
    const opacity = scale < 0.05 ? 0 : Math.min(1, 0.15 + scale * 0.9);
    const isFront = z > HOLO_RADIUS * 0.78;
    el.style.cssText = `transform: translateY(${y.toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${scaleMapped.toFixed(3)});opacity: ${opacity.toFixed(3)};z-index: ${Math.round(z + HOLO_RADIUS + 100)};pointer-events: ${z > 0 ? 'auto' : 'none'};`;
    el.classList.toggle('hc-front', isFront);
  });
  updateHoloHeader(frontIdx);
}

function updateHoloHeader(idx) {
  const s = SURAHS_META[idx];
  if(!s) return;
  holoIdx = idx;
  document.getElementById('hvb-name').textContent = s.name;
  document.getElementById('hvb-meta').textContent = `${s.type} • ${s.ayahs} آية`;
  document.getElementById('hvb-num').textContent = s.n;
}

function holoLoop() {
  holoVel *= 0.89;
  holoAngle += holoVel;
  const snap = Math.round(holoAngle / STEP) * STEP;
  if(Math.abs(holoVel) < 0.05) {
    holoAngle += (snap - holoAngle) * 0.12;
    if(Math.abs(holoAngle - snap) < 0.01) { holoAngle = snap; holoVel = 0; }
  }
  renderHolo();
  holoRAF = requestAnimationFrame(holoLoop);
}

function holoSelect(idx) {
  holoAngle = idx * STEP;
  holoVel = 0; holoIdx = idx;
  renderHolo(); holoLoadCurrent();
}

function holoPrev() { holoSelect((holoIdx - 1 + CARD_COUNT) % CARD_COUNT); }
function holoNext() { holoSelect((holoIdx + 1) % CARD_COUNT); }

async function holoLoadCurrent() {
  const s = SURAHS_META[holoIdx];
  const box = document.getElementById('holo-ayah-box');
  box.innerHTML = `<div class="holo-loading">جاري تحميل ${s.name}...</div>`;
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${s.n}`);
    const data = await res.json();
    const ayahs = data.data.ayahs;
    let html = s.n !== 9 ? `<span class="holo-basmala">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</span>` : '';
    ayahs.forEach(a => { html += `${a.text}<span class="holo-ayah-num">${a.numberInSurah}</span> `; });
    box.innerHTML = html; box.scrollTop = 0;
    addPts(10, 'عرض سورة');
  } catch {
    box.innerHTML = `<div class="holo-loading" style="color:#E57373;">تعذّر التحميل — تحقق من الاتصال</div>`;
  }
}

function initHoloDrag() {
  const scene = document.getElementById('holo-scene');
  const onStart = y => { holoDrag = true; holoLastY = y; holoVel = 0; };
  const onMove = y => {
    if(!holoDrag) return;
    const dy = y - holoLastY;
    holoVel = dy * 0.22; holoAngle += dy * 0.22; holoLastY = y;
  };
  const onEnd = () => { holoDrag = false; };
  scene.addEventListener('mousedown', e => onStart(e.clientY));
  scene.addEventListener('touchstart', e => onStart(e.touches[0].clientY), {passive:true});
  window.addEventListener('mousemove', e => onMove(e.clientY));
  window.addEventListener('touchmove', e => onMove(e.touches[0].clientY), {passive:true});
  window.addEventListener('mouseup', onEnd);
  window.addEventListener('touchend', onEnd);
}

// ═══════════════════════════════════════════════════
// PRAYER TIMES — OFFLINE CAPABLE
// ═══════════════════════════════════════════════════

// Astronomical prayer time calculation (works fully offline)
function calcPrayerTimesOffline(lat, lng, date) {
  // Using standard astronomical calculations (Adhan.js algorithm simplified)
  const d2r = Math.PI / 180;
  const r2d = 180 / Math.PI;

  function julianDate(y, m, d) {
    if(m <= 2) { y -= 1; m += 12; }
    const A = Math.floor(y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
  }

  const year = date.getFullYear(), month = date.getMonth()+1, day = date.getDate();
  const JD = julianDate(year, month, day);
  const D = JD - 2451545.0;

  // Sun position
  const g = (357.529 + 0.98560028 * D) * d2r;
  const q = 280.459 + 0.98564736 * D;
  const L = (q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2*g)) * d2r;
  const e = (23.439 - 0.00000036 * D) * d2r;
  const RA = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L)) * r2d / 15;
  const D_sun = Math.asin(Math.sin(e) * Math.sin(L)) * r2d;
  const EqT = q/15 - (RA < 0 ? RA + 24 : RA % 24);

  // Transit
  const transit = 12 + lng/(-15) - EqT;

  function sunAngleTime(angle, after) {
    const cosH = (Math.sin(angle * d2r) - Math.sin(lat * d2r) * Math.sin(D_sun * d2r)) /
                 (Math.cos(lat * d2r) * Math.cos(D_sun * d2r));
    if(Math.abs(cosH) > 1) return null;
    const H = Math.acos(cosH) * r2d / 15;
    return transit + (after ? H : -H);
  }

  function asrTime(shadow) {
    const X = shadow + Math.tan(Math.abs(lat - D_sun) * d2r);
    const angle = -r2d * Math.atan(1/X);
    return sunAngleTime(angle, true);
  }

  function decToHHMM(dec) {
    if(dec === null) return '--:--';
    dec = ((dec % 24) + 24) % 24;
    const h = Math.floor(dec);
    const m = Math.floor((dec - h) * 60);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  }

  // Method 4 = Umm al-Qura / Muslim World League style
  // Fajr: -18°, Isha: -17° (general Muslim World League)
  return {
    Fajr:    decToHHMM(sunAngleTime(-18, false)),
    Sunrise: decToHHMM(sunAngleTime(-0.833, false)),
    Dhuhr:   decToHHMM(transit + 0.013), // small offset
    Asr:     decToHHMM(asrTime(1)),
    Maghrib: decToHHMM(sunAngleTime(-0.833, true)),
    Isha:    decToHHMM(sunAngleTime(-17, true)),
    Midnight: decToHHMM(transit + 6)
  };
}

// Check if we have cached prayer data for today
function loadCachedPrayerData() {
  try {
    const cached = JSON.parse(localStorage.getItem(PRAYER_CACHE_KEY));
    if(!cached) return null;
    // Valid if same date AND location hasn't changed significantly
    const today = new Date().toDateString();
    if(cached.date === today && cached.timings) return cached;
    return null;
  } catch { return null; }
}

function savePrayerCache(timings, lat, lng, hijri) {
  const data = {
    date: new Date().toDateString(),
    timings, lat, lng, hijri
  };
  localStorage.setItem(PRAYER_CACHE_KEY, JSON.stringify(data));
}

// Main entry: check if location known, else show banner
function initPrayerTimes() {
  const cached = loadCachedPrayerData();
  if(cached) {
    // Use cached data — works offline
    prayerTimes = cached.timings;
    if(cached.hijri) {
      document.getElementById('hijri-txt').textContent = cached.hijri;
      document.getElementById('hijri-full').innerHTML = `<p>الهجري: <strong style="color:var(--gold)">${cached.hijri}</strong></p>`;
    } else {
      document.getElementById('hijri-txt').textContent = getHijriApprox();
    }
    renderPrayers();
    document.getElementById('change-location-btn').style.display = 'inline-flex';
    // Silently try to refresh from network (won't block UI)
    refreshPrayerTimesFromNetwork(cached.lat, cached.lng);
    return;
  }

  const savedLoc = JSON.parse(localStorage.getItem('noor_location'));
  if(savedLoc) {
    // We have a saved location — compute offline immediately
    const offlineTimes = calcPrayerTimesOffline(savedLoc.lat, savedLoc.lng, new Date());
    prayerTimes = offlineTimes;
    document.getElementById('hijri-txt').textContent = getHijriApprox();
    renderPrayers();
    document.getElementById('change-location-btn').style.display = 'inline-flex';
    savePrayerCache(offlineTimes, savedLoc.lat, savedLoc.lng, null);
    refreshPrayerTimesFromNetwork(savedLoc.lat, savedLoc.lng);
    return;
  }

  // No location yet — show permission banner
  document.getElementById('location-banner').style.display = 'block';
}

function requestLocationAndPrayers() {
  if(!navigator.geolocation) {
    showToast('GPS غير مدعوم');
    useFallbackLocation();
    return;
  }
  showToast('جاري تحديد موقعك...');
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude, lng = pos.coords.longitude;
      localStorage.setItem('noor_location', JSON.stringify({lat, lng}));
      document.getElementById('location-banner').style.display = 'none';
      document.getElementById('change-location-btn').style.display = 'inline-flex';
      // Compute offline immediately
      const offlineTimes = calcPrayerTimesOffline(lat, lng, new Date());
      prayerTimes = offlineTimes;
      document.getElementById('hijri-txt').textContent = getHijriApprox();
      renderPrayers();
      savePrayerCache(offlineTimes, lat, lng, null);
      showToast('✅ تم تحديد موقعك!');
      // Also try network for accurate data + hijri
      refreshPrayerTimesFromNetwork(lat, lng);
    },
    err => {
      showToast('تعذّر الوصول للموقع — تم استخدام القدس');
      useFallbackLocation();
    },
    {timeout: 8000, enableHighAccuracy: false}
  );
}

function useFallbackLocation() {
  // Jerusalem as default
  const lat = 31.7683, lng = 35.2137;
  localStorage.setItem('noor_location', JSON.stringify({lat, lng}));
  document.getElementById('location-banner').style.display = 'none';
  document.getElementById('change-location-btn').style.display = 'inline-flex';
  const offlineTimes = calcPrayerTimesOffline(lat, lng, new Date());
  prayerTimes = offlineTimes;
  document.getElementById('hijri-txt').textContent = getHijriApprox();
  renderPrayers();
  savePrayerCache(offlineTimes, lat, lng, null);
  refreshPrayerTimesFromNetwork(lat, lng);
}

function changeLocation() {
  // Clear saved location and show banner again
  localStorage.removeItem('noor_location');
  localStorage.removeItem(PRAYER_CACHE_KEY);
  document.getElementById('location-banner').style.display = 'block';
  document.getElementById('change-location-btn').style.display = 'none';
  showToast('حدّد موقعك الجديد');
}

async function refreshPrayerTimesFromNetwork(lat, lng) {
  try {
    const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=4`);
    if(!res.ok) return;
    const data = await res.json();
    prayerTimes = data.data.timings;
    renderPrayers();
    const h = data.data.date.hijri;
    const hijriStr = `${h.day} ${h.month.ar} ${h.year} هـ`;
    document.getElementById('hijri-txt').textContent = hijriStr;
    document.getElementById('hijri-full').innerHTML = `<p>الهجري: <strong style="color:var(--gold)">${hijriStr}</strong></p><p>الميلادي: <strong>${data.data.date.gregorian.date}</strong></p>`;
    savePrayerCache(prayerTimes, lat, lng, hijriStr);
  } catch {
    // Network unavailable — silently use already-computed offline data
  }
}

// Approximate Hijri date for offline use
function getHijriApprox() {
  const gDate = new Date();
  const jd = Math.floor((gDate.getTime() / 86400000) + 2440587.5);
  let l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
             Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
      Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l) / 709);
  const day = l - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  const monthNames = ['محرم','صفر','ربيع الأول','ربيع الثاني','جمادى الأولى','جمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
  return `${day} ${monthNames[month-1] || ''} ${year} هـ (تقريبي)`;
}

// Legacy fetchPrayers kept for cities tab
async function fetchPrayers() {
  // Now handled by initPrayerTimes()
}

function renderPrayers() {
  const prayers = [['الفجر',prayerTimes.Fajr],['الظهر',prayerTimes.Dhuhr],['العصر',prayerTimes.Asr],['المغرب',prayerTimes.Maghrib],['العشاء',prayerTimes.Isha]];
  document.getElementById('today-prayers').innerHTML = prayers.map(([n,t]) =>
    `<div class="prayer-pill" id="pp-${n}"><div class="p-name">${n}</div><div class="p-time">${fmt12(t)}</div></div>`
  ).join('');
}

function updateCountdown() {
  if(!prayerTimes.Fajr) return;
  const now = new Date();
  const times = [['الفجر',prayerTimes.Fajr],['الظهر',prayerTimes.Dhuhr],['العصر',prayerTimes.Asr],['المغرب',prayerTimes.Maghrib],['العشاء',prayerTimes.Isha]];
  let next = null;
  for(const [n,t] of times) {
    if(!t || t === '--:--') continue;
    const [h,m] = t.split(':'); const d = new Date(); d.setHours(parseInt(h),parseInt(m),0,0);
    if(d > now) { next = {n, d}; break; }
  }
  if(!next) {
    const [h,m] = (times[0][1]||'05:00').split(':');
    const d = new Date(); d.setDate(d.getDate()+1); d.setHours(parseInt(h),parseInt(m),0,0);
    next = {n:'الفجر', d};
  }
  const diff = next.d - now;
  document.getElementById('next-prayer-name').textContent = next.n;
  document.getElementById('next-prayer-countdown').textContent =
    `${String(Math.floor(diff/3600000)).padStart(2,'0')}:${String(Math.floor(diff%3600000/60000)).padStart(2,'0')}:${String(Math.floor(diff%60000/1000)).padStart(2,'0')}`;
  document.querySelectorAll('.prayer-pill').forEach(c => c.classList.remove('active'));
  const el = document.getElementById(`pp-${next.n}`); if(el) el.classList.add('active');
  if(adhanEnabled) {
    const cur = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    if(now.getSeconds() < 3) {
      for(const [n,t] of times) {
        if(t?.substring(0,5)===cur) triggerAdhan(n);
      }
    }
  }
}

function updateClock() {
  document.getElementById('digital-clock').textContent = new Date().toLocaleTimeString('ar-EG');
}

function fmt12(t) {
  if(!t || t === '--:--') return '--:--';
  const [h,m] = t.split(':');
  const hi = parseInt(h);
  return `${hi%12||12}:${m} ${hi>=12?'م':'ص'}`;
}

// ═══════════════════════════════════════════════════
// QURAN ONLINE
// ═══════════════════════════════════════════════════
async function loadSurahs() {
  try {
    const res = await fetch('https://api.alquran.cloud/v1/surah');
    const data = await res.json();
    window._allSurahs = data.data;
    renderSurahChips(data.data);
  } catch { console.error('load surahs failed'); }
}

function renderSurahChips(list) {
  document.getElementById('surahBox').innerHTML = list.map(s =>
    `<div class="surah-chip" onclick="loadSurah(${s.number})">${s.name}</div>`
  ).join('');
}

function searchQuran() {
  const q = document.getElementById('quran-search').value.trim();
  if(!window._allSurahs) return;
  renderSurahChips(!q ? window._allSurahs : window._allSurahs.filter(s => s.name.includes(q) || s.englishName.toLowerCase().includes(q.toLowerCase())));
}

async function loadSurah(id) {
  currentSurahId = id;
  const viewer = document.getElementById('viewer');
  viewer.innerHTML = 'جاري التحميل...';
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}`);
    const data = await res.json();
    ayahsData = data.data.ayahs;
    document.getElementById('quran-meta').textContent = `${data.data.name} (${data.data.revelationType==='Meccan'?'مكية':'مدنية'})`;
    viewer.innerHTML = (id!==9?'<div style="text-align:center;color:var(--gold);font-family:Scheherazade New;font-size:1.8rem;margin-bottom:12px;">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>':'') +
      ayahsData.map((a,i) => `<span class="ayah-span" id="ar-${i}" onclick="setAyahDetail(${i})" oncontextmenu="longPressAyah(event,${i})">${a.text}<span class="ayah-num-badge">${a.numberInSurah}</span></span> `).join('');
    viewer.scrollTop = 0;
    setAyahDetail(0);
    dailyProg.ayahs += ayahsData.length;
    localStorage.setItem('noor_daily', JSON.stringify(dailyProg));
    addPts(20, 'تلاوة سورة'); renderDash();
    updateAudioSource();
  } catch { viewer.innerHTML = 'خطأ في التحميل'; }
}

async function setAyahDetail(idx) {
  currentAyahIdx = idx;
  document.querySelectorAll('.ayah-span').forEach(e => e.classList.remove('selected'));
  const el = document.getElementById(`ar-${idx}`); if(el) el.classList.add('selected');
  const a = ayahsData[idx]; if(!a) return;
  localStorage.setItem('noor_last_read', JSON.stringify({surahId:currentSurahId, idx, num:a.numberInSurah}));
  const panel = document.getElementById('ayah-panel');
  panel.style.display = 'block';
  document.getElementById('ayah-panel-title').textContent = `آية ﴿${a.numberInSurah}﴾`;
  document.getElementById('ayah-tafseer').textContent = 'جاري الجلب...';
  document.getElementById('ayah-trans').textContent = '';
  document.getElementById('bm-btn').onclick = () => {
    localStorage.setItem('bm-surah', currentSurahId);
    localStorage.setItem('bm-idx', idx);
    showToast('🔖 تم الحفظ!');
  };
  try {
    const [tr,tt] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/ayah/${a.number}/ar.jalalayn`).then(r=>r.json()),
      fetch(`https://api.alquran.cloud/v1/ayah/${a.number}/en.sahih`).then(r=>r.json())
    ]);
    document.getElementById('ayah-tafseer').textContent = tr.data.text;
    document.getElementById('ayah-trans').textContent = `English: ${tt.data.text}`;
  } catch { document.getElementById('ayah-tafseer').textContent = 'تعذّر جلب البيانات.'; }
}

function loadLastBm() {
  const s = localStorage.getItem('bm-surah'), i = localStorage.getItem('bm-idx');
  if(s) { loadSurah(parseInt(s)).then(() => { if(i) setAyahDetail(parseInt(i)); }); showToast('تم الانتقال'); }
  else showToast('لا توجد إشارة');
}

function updateAudioSource() {
  if(!currentSurahId) return;
  const base = document.getElementById('reciter-select').value;
  audio.src = `${base}${String(currentSurahId).padStart(3,'0')}.mp3`;
  document.getElementById('play-btn').innerHTML = '⏸';
  audio.play().catch(() => { document.getElementById('play-btn').innerHTML='▶'; });
}

function toggleAudio() {
  const btn = document.getElementById('play-btn');
  if(audio.paused) { audio.play(); btn.innerHTML='⏸'; }
  else { audio.pause(); btn.innerHTML='▶'; }
}

function nextAyah() { if(currentAyahIdx < ayahsData.length-1) setAyahDetail(currentAyahIdx+1); else if(currentSurahId<114) loadSurah(currentSurahId+1); }
function prevAyah() { if(currentAyahIdx > 0) setAyahDetail(currentAyahIdx-1); else if(currentSurahId>1) loadSurah(currentSurahId-1); }
function handlePlayMode() { showToast({default:'▶ عادي',repeat:'🔂 تكرار',continuous:'🔄 متواصل'}[document.getElementById('playback-mode').value]||''); }

audio.addEventListener('ended', () => {
  const m = document.getElementById('playback-mode')?.value;
  if(m==='repeat') audio.play();
  else if(m==='continuous' && currentSurahId<114) loadSurah(currentSurahId+1);
});

function changeFontSize(d) {
  const v = document.getElementById('viewer');
  v.style.fontSize = (parseFloat(window.getComputedStyle(v).fontSize)+d)+'px';
}

function toggleNight() {
  const v = document.getElementById('viewer');
  v.classList.toggle('night');
  showToast(v.classList.contains('night')?'🌙 ليلي':'☀️ عادي');
}

async function longPressAyah(e, idx) {
  e.preventDefault();
  const a = ayahsData[idx]; if(!a) return;
  let favs = JSON.parse(localStorage.getItem('noor_favs'))||[];
  if(!favs.some(f=>f.number===a.number)) {
    favs.push({number:a.number, text:a.text, num:a.numberInSurah, surahNum:currentSurahId});
    localStorage.setItem('noor_favs', JSON.stringify(favs));
    showToast('💖 تم حفظ الآية');
    updateBmTab();
  }
  if(navigator.vibrate) navigator.vibrate(60);
}

// ═══════════════════════════════════════════════════
// OFFLINE QURAN
// ═══════════════════════════════════════════════════
function renderOfflineGrid(list) {
  document.getElementById('offline-grid').innerHTML = list.map(s =>
    `<div class="surah-grid-item ${offlineSurah===s.n?'active':''}" id="og-${s.n}" onclick="loadOfflineSurah(${s.n})"><div style="font-weight:700;font-size:.82rem;">${s.name}</div><div style="font-size:.65rem;color:var(--ink2);">${s.n} · ${s.ayahs}</div></div>`
  ).join('');
}

function filterOffline() {
  const q = document.getElementById('offline-search').value.trim();
  renderOfflineGrid(!q ? SURAHS_META : SURAHS_META.filter(s=>s.name.includes(q)||String(s.n).includes(q)));
}

async function loadOfflineSurah(n) {
  offlineSurah = n;
  const viewer = document.getElementById('offline-viewer');
  const meta = SURAHS_META.find(s=>s.n===n);
  document.querySelectorAll('.surah-grid-item').forEach(e=>e.classList.remove('active'));
  const el = document.getElementById(`og-${n}`); if(el){el.classList.add('active');el.scrollIntoView({behavior:'smooth',block:'nearest'});}
  document.getElementById('offline-surah-info').style.display = 'block';
  document.getElementById('offline-surah-name').textContent = meta?.name||`سورة ${n}`;
  document.getElementById('offline-surah-meta').textContent = meta?`${meta.type} • ${meta.ayahs} آية`:'';
  viewer.innerHTML = `<div style="text-align:center;padding:28px;color:var(--ink2);font-size:1rem;">جاري التحميل...</div>`;
  let ayahs = offlineCache[n];
  if(!ayahs){
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${n}`);
      const data = await res.json();
      ayahs = data.data.ayahs; offlineCache[n] = ayahs;
    } catch {
      viewer.innerHTML = `<div style="text-align:center;padding:28px;color:var(--rose);">تعذّر التحميل</div>`; return;
    }
  }
  let html = n!==9 ? '<div style="text-align:center;color:var(--gold);font-family:Scheherazade New;font-size:1.8rem;margin-bottom:14px;">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>' : '';
  html += ayahs.map((a,i) =>
    `<span class="ayah-span" id="oa-${i}" onclick="selectOfflineAyah(${i},'${a.text.replace(/'/g,"\\'")}',${a.numberInSurah})">${a.text}<span class="ayah-num-badge">${a.numberInSurah}</span></span> `
  ).join('');
  viewer.innerHTML = html; viewer.scrollTop = 0;
  document.getElementById('offline-ayah-info').style.display = 'none';
  localStorage.setItem('noor_offline_last', JSON.stringify({n, name:meta?.name, ayahIdx:0, ayahNum:1}));
  addPts(15, 'قراءة أوفلاين');
}

function selectOfflineAyah(idx, text, num) {
  selectedAyah = {idx, text, num, n:offlineSurah};
  document.querySelectorAll('.ayah-span').forEach(e=>e.classList.remove('selected'));
  const el = document.getElementById(`oa-${idx}`); if(el) el.classList.add('selected');
  const meta = SURAHS_META.find(s=>s.n===offlineSurah);
  document.getElementById('offline-ayah-preview').textContent = `آية ﴿${num}﴾ من سورة ${meta?.name||''}`;
  document.getElementById('offline-ayah-info').style.display = 'block';
  localStorage.setItem('noor_offline_last', JSON.stringify({n:offlineSurah, name:meta?.name, ayahIdx:idx, ayahNum:num}));
  if(navigator.vibrate) navigator.vibrate(18);
}

function saveOfflineBm() {
  if(!selectedAyah){showToast('اختر آية أولاً');return;}
  const meta = SURAHS_META.find(s=>s.n===offlineSurah);
  let bms = JSON.parse(localStorage.getItem('noor_offline_bms'))||[];
  if(!bms.some(b=>b.n===selectedAyah.n&&b.num===selectedAyah.num)){
    bms.push({n:offlineSurah, idx:selectedAyah.idx, num:selectedAyah.num, name:meta?.name, text:selectedAyah.text});
    localStorage.setItem('noor_offline_bms', JSON.stringify(bms));
  }
  showToast('✅ تم الحفظ!'); updateBmTab();
}

function copyAyah() {
  if(!selectedAyah){showToast('اختر آية أولاً');return;}
  navigator.clipboard?.writeText(selectedAyah.text).then(()=>showToast('📋 تم النسخ!')).catch(()=>showToast('تعذّر النسخ'));
}

function addFavorite() {
  if(!selectedAyah){showToast('اختر آية أولاً');return;}
  const meta = SURAHS_META.find(s=>s.n===offlineSurah);
  let favs = JSON.parse(localStorage.getItem('noor_favs'))||[];
  if(!favs.some(f=>f.n===offlineSurah&&f.num===selectedAyah.num)){
    favs.push({n:offlineSurah, num:selectedAyah.num, name:meta?.name, text:selectedAyah.text});
    localStorage.setItem('noor_favs', JSON.stringify(favs));
    showToast('💖 تمت الإضافة للمفضلة!'); updateBmTab();
  } else showToast('موجودة مسبقاً');
}

function checkOfflineLastPos() {
  const last = JSON.parse(localStorage.getItem('noor_offline_last'));
  const btn = document.getElementById('offline-last-btn');
  if(last && btn) {
    btn.style.display = 'block';
    btn.querySelector('button').innerHTML = `متابعة: ${last.name||''} آية ﴿${last.ayahNum||1}﴾`;
  }
}

async function goToLastOffline() {
  const last = JSON.parse(localStorage.getItem('noor_offline_last'));
  if(!last) return;
  await loadOfflineSurah(last.n);
  setTimeout(() => {
    const el = document.getElementById(`oa-${last.ayahIdx}`);
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('selected');}
  }, 500);
}

function changeOfflineFontSize(d) {
  const v = document.getElementById('offline-viewer');
  v.style.fontSize = (parseFloat(window.getComputedStyle(v).fontSize)+d)+'px';
}

function toggleNightOffline() {
  const v = document.getElementById('offline-viewer');
  v.classList.toggle('night');
  showToast(v.classList.contains('night')?'🌙 ليلي':'☀️ عادي');
}

function openFocusOffline() {
  if(selectedAyah) document.getElementById('focus-ayah').innerHTML = `${selectedAyah.text} <span style="color:var(--gold)">﴿${selectedAyah.num}﴾</span>`;
  openFocus();
}

// ═══════════════════════════════════════════════════
// AZKAR & TASBIH
// ═══════════════════════════════════════════════════
function loadZekrCat(cat) {
  document.getElementById('azkar-cats').style.display='none';
  document.getElementById('azkar-view').style.display='block';
  const items = AZKAR[cat];
  document.getElementById('azkar-list').innerHTML = items.map((z,i) =>
    `<div class="zekr-item" id="zk-${i}" onclick="countZekr(${i},${z.count})"><span class="zekr-count" id="zb-${i}">×${z.count}</span><div class="zekr-text">${z.text}</div></div>`
  ).join('');
}

function countZekr(idx, orig) {
  const b = document.getElementById(`zb-${idx}`);
  let c = parseInt(b.textContent.replace('×',''))||orig;
  if(c > 0) { c--; b.textContent = `×${c}`; if(navigator.vibrate) navigator.vibrate(25); }
  if(c === 0) { document.getElementById(`zk-${idx}`).classList.add('done'); showToast('✅ تم الذكر'); addPts(5,'ذكر'); }
}

function backAzkar() {
  document.getElementById('azkar-cats').style.display='grid';
  document.getElementById('azkar-view').style.display='none';
}

function tasbih() {
  if(navigator.vibrate) navigator.vibrate(45);
  const el = document.getElementById('s-count');
  let c = parseInt(el.textContent)+1; el.textContent = c;
  totalTasbih++; dailyProg.tasbih++;
  document.getElementById('s-total').textContent = `${totalTasbih} مجموع`;
  localStorage.setItem('totalTasbih', totalTasbih);
  localStorage.setItem('noor_daily', JSON.stringify(dailyProg));
  const d = new Date().getDay();
  tasbihStats[d] = (tasbihStats[d]||0)+1;
  localStorage.setItem('noor_tsb_stats', JSON.stringify(tasbihStats));
  renderTasbihWeek();
  if(c%33===0){if(typeof confetti!=='undefined')confetti({particleCount:90,spread:65,origin:{y:.8}});addPts(10,'تسبيح');showToast(`أحسنت! ${c} تسبيحة 🌟`);}
}

function resetTasbih() { document.getElementById('s-count').textContent=0; showToast('تم التصفير'); }

function renderTasbihWeek() {
  const c = document.getElementById('tasbih-week'); if(!c) return;
  const days = [0,1,2,3,4,5,6];
  const labels = ['أح','إث','ثل','أر','خم','جم','سب'];
  const mx = Math.max(...days.map(d=>tasbihStats[d]||0), 1);
  c.innerHTML = days.map((d,i) => {
    const v = tasbihStats[d]||0;
    const h = Math.max(4, Math.round((v/mx)*58));
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;">
      <span style="font-size:.6rem;color:var(--ink2);">${v}</span>
      <div style="width:18px;height:${h}px;background:linear-gradient(to top,var(--gold),var(--gold-light));border-radius:3px 3px 0 0;"></div>
      <span style="font-size:.6rem;color:var(--ink2);">${labels[i]}</span>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════
// ADHAN
// ═══════════════════════════════════════════════════
async function cacheAdhan() {
  const prog = document.getElementById('adhan-cache-prog'), bar = document.getElementById('adhan-cache-bar'), lbl = document.getElementById('adhan-cache-lbl');
  prog.style.display='block'; bar.style.width='0%';
  if(!('caches' in window)){lbl.textContent='⚠️ غير مدعوم';return;}
  const urls = Object.values(ADHAN_URLS), cache = await caches.open(ADHAN_CACHE);
  let done=0;
  for(const url of urls){
    try{const r=await fetch(url);if(r.ok){await cache.put(url,r);}}catch{}
    done++; bar.style.width=Math.round(done/urls.length*100)+'%';
  }
  lbl.textContent='✅ جاهز للعمل أوفلاين!'; showToast('✅ الأذان محفوظ أوفلاين');
}

function enableAdhan() {
  if(adhanEnabled){adhanEnabled=false;clearInterval(adhanInterval);updateAdhanUI(false);showToast('🔕 تم إيقاف الأذان');return;}
  Notification.requestPermission().then(p=>{if(p!=='granted')showToast('يرجى السماح بالإشعارات');adhanEnabled=true;updateAdhanUI(true);showToast('✅ تم تفعيل الأذان');});
}

function updateAdhanUI(on) {
  document.querySelectorAll('.status-dot').forEach(d=>d.classList.toggle('on',on));
  const s = document.getElementById('adhan-sw-status'); if(s) s.textContent = on?'مفعّل ✓':'متوقف';
}

function triggerAdhan(n) {
  const key=`adhan_${n}`,now=new Date(),stamp=now.toDateString()+now.getHours()+now.getMinutes();
  if(localStorage.getItem(key)===stamp)return;
  localStorage.setItem(key,stamp);
  document.getElementById('adhan-notif-name').textContent=n;
  document.getElementById('adhan-notif').style.display='block';
  setTimeout(()=>document.getElementById('adhan-notif').style.display='none',60000);
  playAdhan();
  if(Notification.permission==='granted') new Notification(`أذان ${n}`,{body:'تطبيق نُور',tag:`adhan-${n}`});
  if(navigator.vibrate) navigator.vibrate([500,300,500,300,500]);
}

async function playAdhan() {
  const v = document.getElementById('adhan-voice-select')?.value||'alafasy';
  const url = ADHAN_URLS[v];
  if('caches' in window){
    try{const cache=await caches.open(ADHAN_CACHE),cached=await cache.match(url);
    if(cached){const blob=await cached.blob(),ou=URL.createObjectURL(blob);adhanAudio.src=ou;await adhanAudio.play();adhanAudio.onended=()=>URL.revokeObjectURL(ou);return;}}catch{}
  }
  try{adhanAudio.src=url;await adhanAudio.play();}catch{playGeneratedAdhan();}
}

function playGeneratedAdhan(){
  const ctx=new(window.AudioContext||window.webkitAudioContext)();
  const notes=[{f:440,d:.6},{f:494,d:.4},{f:523,d:.8},{f:494,d:.4},{f:440,d:.6},{f:392,d:.4},{f:440,d:1},{f:0,d:.3},{f:523,d:.6},{f:587,d:.4},{f:659,d:.8},{f:587,d:.4},{f:523,d:.6},{f:494,d:.4},{f:523,d:1.2}];
  let t=ctx.currentTime+.1;
  notes.forEach(n=>{if(n.f>0){const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=n.f;g.gain.setValueAtTime(.3,t);g.gain.exponentialRampToValueAtTime(.001,t+n.d*.9);o.start(t);o.stop(t+n.d);}t+=n.d;});
}

function testAdhan(){showToast('🔊 اختبار...');playAdhan();}
function closeAdhanNotif(){document.getElementById('adhan-notif').style.display='none';adhanAudio.pause();adhanAudio.currentTime=0;}
function snoozeAdhan(){closeAdhanNotif();showToast('⏰ تذكير بعد 5 دقائق');setTimeout(()=>showToast('أذان — حان وقت الصلاة!'),5*60*1000);}

// ═══════════════════════════════════════════════════
// OCCASIONS
// ═══════════════════════════════════════════════════
function renderOccasions() {
  const el = document.getElementById('occasions-container'); if(!el) return;
  const now = new Date();
  el.innerHTML = ISLAMIC_OCCASIONS.map(occ => {
    const target = new Date(occ.date+'T00:00:00');
    const passed = target < now, diff = Math.abs(target-now);
    const days=Math.floor(diff/864e5), hours=Math.floor(diff%864e5/36e5), mins=Math.floor(diff%36e5/6e4), secs=Math.floor(diff%6e4/1e3);
    const iconRef = OCC_SVG_ICONS[occ.icon] || '#icon-star';
    const iconSvg = `<svg width="28" height="28" stroke="var(--gold)"><use href="${iconRef}"/></svg>`;
    if(passed) return `<div class="occasion-card passed"><div class="occ-icon">${iconSvg}</div><div class="occ-name">${occ.name}</div><div class="occ-meta">${occ.notes}</div><div style="font-size:.75rem;color:var(--ink2);">مرّت منذ ${days} يوم</div></div>`;
    const soon = days<=30;
    return `<div class="occasion-card ${soon?'soon':''}"><div class="occ-icon">${iconSvg}</div><div class="occ-name">${occ.name}</div><div class="occ-meta">${occ.notes}</div>
    <div class="countdown-row">
      <div class="cd-unit"><span class="cd-val">${days}</span><span class="cd-lbl">يوم</span></div>
      <div class="cd-unit"><span class="cd-val">${String(hours).padStart(2,'0')}</span><span class="cd-lbl">ساعة</span></div>
      <div class="cd-unit"><span class="cd-val">${String(mins).padStart(2,'0')}</span><span class="cd-lbl">دقيقة</span></div>
      <div class="cd-unit"><span class="cd-val">${String(secs).padStart(2,'0')}</span><span class="cd-lbl">ثانية</span></div>
    </div></div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════
// WIRD & PRAYER TRACK
// ═══════════════════════════════════════════════════
function renderWird() {
  const el = document.getElementById('wird-list'); if(!el) return;
  el.innerHTML = WIRD_ITEMS.map(w => {
    const iconRef = WIRD_ICONS[w.icon] || '#icon-star';
    return `<div class="wird-item ${wirdState[w.id]?'done':''}" onclick="toggleWird('${w.id}')">
      <div class="wird-check">${wirdState[w.id]?'✓':''}</div>
      <svg width="18" height="18" style="flex-shrink:0;color:var(--gold);"><use href="${iconRef}"/></svg>
      <span>${w.label}</span>
      <span class="wird-pts">+${w.pts}</span>
    </div>`;
  }).join('');
  updateWirdProg();
}

function toggleWird(id) {
  if(wirdState[id]) return;
  wirdState[id]=true; localStorage.setItem('noor_wird',JSON.stringify(wirdState));
  const item=WIRD_ITEMS.find(w=>w.id===id); if(item) addPts(item.pts, item.label);
  if(navigator.vibrate) navigator.vibrate(55);
  renderWird(); showToast(`✅ ${item?.label}`);
}

function updateWirdProg() {
  const done=Object.keys(wirdState).filter(k=>wirdState[k]).length,total=WIRD_ITEMS.length;
  const pct=Math.round(done/total*100);
  const a=document.getElementById('wird-done'),b=document.getElementById('wird-total'),f=document.getElementById('wird-prog');
  if(a) a.textContent=done; if(b) b.textContent=total; if(f) f.style.width=pct+'%';
  if(done===total){showToast('🏆 أكملت وِردك اليومي!');addPts(100,'إتمام الوِرد');}
}

function resetWird() {
  wirdState={}; localStorage.setItem('noor_wird',JSON.stringify(wirdState));
  localStorage.setItem('noor_wird_dt',new Date().toDateString());
  renderWird(); showToast('🔄 تم تجديد الوِرد');
}

function renderPrayerTrack() {
  const el=document.getElementById('prayer-track-grid'); if(!el) return;
  const prayers=['الفجر','الظهر','العصر','المغرب','العشاء'];
  el.innerHTML = prayers.map(p => {
    const s=ptToday[p];
    let iconSvg;
    if(s==='prayed') iconSvg = `<svg width="20" height="20" stroke="var(--teal)"><use href="#icon-check-circle"/></svg>`;
    else if(s==='missed') iconSvg = `<svg width="20" height="20" stroke="var(--rose)"><use href="#icon-moon"/></svg>`;
    else iconSvg = `<svg width="20" height="20" stroke="var(--ink2)"><use href="#icon-mosque"/></svg>`;
    return `<div class="pt-item ${s==='prayed'?'prayed':s==='missed'?'missed':''}" onclick="cyclePrayer('${p}')">
      <div class="pt-name">${p}</div>
      <div class="pt-icon">${iconSvg}</div>
    </div>`;
  }).join('');
  const prayed=Object.values(ptToday).filter(s=>s==='prayed').length;
  const missed=Object.values(ptToday).filter(s=>s==='missed').length;
  const el2=document.getElementById('prayer-stats');
  if(el2) el2.innerHTML=`<p>مؤداة: <strong style="color:var(--teal)">${prayed}</strong>/5 &nbsp; فائتة: <strong style="color:var(--rose)">${missed}</strong></p>`;
  const pct=Math.round(prayed/5*100);
  const pb=document.getElementById('prayer-prog'),pp=document.getElementById('prayer-pct');
  if(pb) pb.style.width=pct+'%'; if(pp) pp.textContent=`${pct}% إنجاز اليوم`;
}

function cyclePrayer(p) {
  const cur=ptToday[p];
  if(!cur) ptToday[p]='prayed';
  else if(cur==='prayed') ptToday[p]='missed';
  else delete ptToday[p];
  localStorage.setItem('noor_pt_today',JSON.stringify(ptToday));
  if(ptToday[p]==='prayed'){addPts(15,`صلاة ${p}`);if(navigator.vibrate)navigator.vibrate(75);}
  renderPrayerTrack();
}

// ═══════════════════════════════════════════════════
// CHALLENGE
// ═══════════════════════════════════════════════════
function loadChallenge() {
  const today=new Date().toDateString();
  if(challengeState.date!==today){
    challengeState.idx=new Date().getDate()%CHALLENGES.length;
    challengeState.prog=0;
    if(challengeState.date){const y=new Date();y.setDate(y.getDate()-1);if(challengeState.date===y.toDateString())challengeState.streak++;else challengeState.streak=1;}
    challengeState.date=today; saveChallenge();
  }
  renderChallenge();
}

function renderChallenge() {
  const ch=CHALLENGES[challengeState.idx];
  const f=id=>document.getElementById(id);
  if(f('ch-title')) f('ch-title').textContent=ch.title;
  if(f('ch-desc')) f('ch-desc').textContent=ch.desc;
  const pct=Math.min(100,Math.round(challengeState.prog/ch.target*100));
  if(f('ch-progress')) f('ch-progress').textContent=`${challengeState.prog}/${ch.target}`;
  if(f('ch-bar')) f('ch-bar').style.width=pct+'%';
  if(f('ch-streak')) f('ch-streak').textContent=challengeState.streak||0;
  if(f('ch-total')) f('ch-total').textContent=challengeState.total||0;
}

function incChallenge() {
  const ch=CHALLENGES[challengeState.idx];
  if(challengeState.prog>=ch.target){showToast('✅ أكملت التحدي!');return;}
  challengeState.prog++;
  if(navigator.vibrate) navigator.vibrate(35);
  if(challengeState.prog>=ch.target){challengeState.total++;addPts(50,'تحدٍّ');if(typeof confetti!=='undefined')confetti({particleCount:80,spread:60,origin:{y:.7}});showToast('🎉 أكملت تحدي اليوم!');}
  saveChallenge(); renderChallenge();
}

function newChallenge() {
  challengeState.idx=(challengeState.idx+1)%CHALLENGES.length;
  challengeState.prog=0; saveChallenge(); renderChallenge(); showToast('تحدٍّ جديد');
}

function saveChallenge(){localStorage.setItem('noor_ch',JSON.stringify(challengeState));}

// ═══════════════════════════════════════════════════
// QIBLA
// ═══════════════════════════════════════════════════
function initQibla() {
  if(!navigator.geolocation){showToast('GPS غير مدعوم');return;}
  showToast('جاري التحديد...');
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat=pos.coords.latitude,lon=pos.coords.longitude;
    const ml=21.4225,mlon=39.8262;
    const y=Math.sin((mlon-lon)*Math.PI/180);
    const x=Math.cos(lat*Math.PI/180)*Math.tan(ml*Math.PI/180)-Math.sin(lat*Math.PI/180)*Math.cos((mlon-lon)*Math.PI/180);
    const angle=Math.atan2(y,x)*180/Math.PI;
    document.getElementById('compass-ring').style.transform=`rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('qibla-result').textContent=`اتجاه القبلة: ${angle.toFixed(1)}°`;
  },()=>{
    window.addEventListener('deviceorientation',e=>{if(e.alpha)document.getElementById('compass-ring').style.transform=`rotate(${-e.alpha}deg)`;},{once:true});
    showToast('تم تفعيل البوصلة');
  });
}

// ═══════════════════════════════════════════════════
// KHATMA
// ═══════════════════════════════════════════════════
function startKhatma() {
  khatma={active:true,days:parseInt(document.getElementById('khatma-days').value)||30,page:1,total:khatma.total};
  localStorage.setItem('noor_khatma',JSON.stringify(khatma));
  updateKhatmaUI(); renderDash(); showToast('ختمة جديدة!');
}

function advanceKhatma() {
  if(!khatma.active){showToast('ابدأ ختمة أولاً');return;}
  const p=parseInt(document.getElementById('khatma-pages').value)||0;
  khatma.page=Math.min(604,khatma.page+p);
  if(khatma.page>=604){khatma.active=false;khatma.total++;addPts(500,'ختمة');localStorage.setItem('noor_khatma',JSON.stringify(khatma));if(typeof confetti!=='undefined')confetti({particleCount:200,spread:150,origin:{y:.5}});showToast('🎉 أتممت الختمة!');}
  else{localStorage.setItem('noor_khatma',JSON.stringify(khatma));showToast(`تم تسجيل ${p} صفحات`);}
  updateKhatmaUI(); renderDash();
}

function updateKhatmaUI() {
  const pct=Math.round(khatma.page/604*100);
  const el=id=>document.getElementById(id);
  if(el('khatmas-total')) el('khatmas-total').textContent=khatma.total;
  if(el('khatma-detail-bar')) el('khatma-detail-bar').style.width=pct+'%';
  if(khatma.active){
    const rem=604-khatma.page,ppd=Math.ceil(rem/khatma.days);
    if(el('khatma-info')) el('khatma-info').textContent=`الختمة نشطة — صفحة ${khatma.page}/604 (${pct}%)`;
    if(el('khatma-detail')) el('khatma-detail').textContent=`يُنصح بـ ${ppd} صفحة يومياً`;
  } else {
    if(el('khatma-info')) el('khatma-info').textContent=khatma.total>0?`أتممت ${khatma.total} ختمة 🎉`:'ابدأ ختمة جديدة';
    if(el('khatma-detail')) el('khatma-detail').textContent='';
  }
}

// ═══════════════════════════════════════════════════
// POINTS & DASHBOARD
// ═══════════════════════════════════════════════════
function addPts(n) {
  points+=n; localStorage.setItem('noor_pts',points);
  if(points>=150&&!badges.includes('📖 حافظ'))badges.push('📖 حافظ');
  if(points>=500&&!badges.includes('⭐ طالب علم'))badges.push('⭐ طالب علم');
  if(totalTasbih>=500&&!badges.includes('📿 مكثر الذكر'))badges.push('📿 مكثر الذكر');
  if(khatma.total>=1&&!badges.includes('🏆 خاتم المصحف'))badges.push('🏆 خاتم المصحف');
  localStorage.setItem('noor_bdg',JSON.stringify(badges));
  renderDash();
}

function renderDash() {
  const f=id=>document.getElementById(id);
  if(f('dash-points')) f('dash-points').textContent=points;
  if(f('dash-ayahs')) f('dash-ayahs').textContent=dailyProg.ayahs;
  if(f('dash-tasbih')) f('dash-tasbih').textContent=dailyProg.tasbih;
  if(f('dash-khatmas')) f('dash-khatmas').textContent=khatma.total;
  if(f('dash-badges')) f('dash-badges').textContent=badges.length?badges.join(' · '):'لا يوجد أوسمة بعد';
  const pct=Math.round(khatma.page/604*100);
  if(f('khatma-prog-bar')) f('khatma-prog-bar').style.width=pct+'%';
  if(f('dash-khatma-txt')) f('dash-khatma-txt').textContent=khatma.active?`الختمة نشطة: ${khatma.page}/604`:`الختمات: ${khatma.total}`;
}

// ═══════════════════════════════════════════════════
// BOOKMARKS
// ═══════════════════════════════════════════════════
function updateBmTab() {
  const bms=JSON.parse(localStorage.getItem('noor_offline_bms'))||[];
  const favs=JSON.parse(localStorage.getItem('noor_favs'))||[];
  const rl=document.getElementById('bm-reading-list');
  const fl=document.getElementById('bm-favs-list');
  if(rl) rl.innerHTML=bms.length?bms.map((b,i)=>`<div class="bm-item" onclick="jumpBm(${b.n},${b.idx},${b.num})"><div style="flex:1;"><div style="font-weight:700;font-size:.88rem;">${b.name} ﴿${b.num}﴾</div><div style="font-size:.72rem;color:var(--ink2);">${b.text?.substring(0,50)}...</div></div><button class="bm-del" onclick="event.stopPropagation();delBm(${i})">✕</button></div>`).join(''):'<div style="color:var(--ink2);">لا توجد علامات</div>';
  if(fl) fl.innerHTML=favs.length?favs.map((f,i)=>`<div class="bm-item" onclick="jumpBm(${f.n},0,${f.num})"><div style="flex:1;"><div style="font-weight:700;font-size:.88rem;">${f.name} ﴿${f.num}﴾</div><div style="font-size:.72rem;color:var(--ink2);">${f.text?.substring(0,50)}...</div></div><button class="bm-del" onclick="event.stopPropagation();delFav(${i})">✕</button></div>`).join(''):'<div style="color:var(--ink2);">لا توجد آيات</div>';
}

async function jumpBm(n, idx, num) {
  switchTab('quran-offline-sec', document.querySelectorAll('.tab-pill')[2]);
  await loadOfflineSurah(n);
  setTimeout(()=>{const el=document.getElementById(`oa-${idx}`);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('selected');}},500);
}

function delBm(i){let bms=JSON.parse(localStorage.getItem('noor_offline_bms'))||[];bms.splice(i,1);localStorage.setItem('noor_offline_bms',JSON.stringify(bms));updateBmTab();}
function delFav(i){let favs=JSON.parse(localStorage.getItem('noor_favs'))||[];favs.splice(i,1);localStorage.setItem('noor_favs',JSON.stringify(favs));updateBmTab();}
function clearBms(){if(confirm('مسح جميع المحفوظات؟')){localStorage.removeItem('noor_offline_bms');localStorage.removeItem('noor_favs');updateBmTab();showToast('تم المسح');}}
function exportBms(){const d={bms:JSON.parse(localStorage.getItem('noor_offline_bms'))||[],favs:JSON.parse(localStorage.getItem('noor_favs'))||[]};const a=document.createElement('a');a.href='data:application/json;charset=utf-8,'+encodeURIComponent(JSON.stringify(d,null,2));a.download='noor_bookmarks.json';a.click();showToast('📥 تم التصدير');}

// ═══════════════════════════════════════════════════
// CONTENT RENDERERS
// ═══════════════════════════════════════════════════
function renderNames() {
  const names=["الله","الرحمن","الرحيم","الملك","القدوس","السلام","المؤمن","المهيمن","العزيز","الجبار","المتكبر","الخالق","البارئ","المصور","الغفار","القهار","الوهاب","الرزاق","الفتاح","العليم","القابض","الباسط","الخافض","الرافع","المعز","المذل","السميع","البصير","الحكيم","العدل","اللطيف","الخبير","الحليم","العظيم","الغفور","الشكور","العلي","الكبير","الحفيظ","المقيت","الحسيب","الجليل","الكريم","الرقيب","المجيب","الواسع","الحكيم","الودود","المجيد","الباعث","الشهيد","الحق","الوكيل","القوي","المتين","الولي","الحميد","المحصي","المبدئ","المعيد","المحيي","المميت","الحي","القيوم","الواجد","الماجد","الواحد","الأحد","الصمد","القادر","المقتدر","المقدم","المؤخر","الأول","الآخر","الظاهر","الباطن","الوالي","المتعالي","البر","التواب","المنتقم","العفو","الرؤوف","مالك الملك","ذو الجلال","المقسط","الجامع","الغني","المغني","المانع","الضار","النافع","النور","الهادي","البديع","الباقي","الوارث","الرشيد","الصبور"];
  document.getElementById('names-grid').innerHTML=names.map(n=>`<div class="name-chip" onclick="showToast('${n}')">${n}</div>`).join('');
}

function renderHadith(i){const h=AHADITH[i];const t=document.getElementById('hadith-text'),s=document.getElementById('hadith-sharh');if(t)t.textContent=`"${h.text}"`;if(s)s.textContent=h.sharh;}
function nextHadith(){currentHadithIdx=(currentHadithIdx+1)%AHADITH.length;renderHadith(currentHadithIdx);showToast('حديث آخر');}

function renderDuaa(){const c=document.getElementById('duaa-container');if(!c)return;let h='';for(const cat in DUAA)h+=`<div class="duaa-cat"><h4>🤲 ${cat}</h4>${DUAA[cat].map(d=>`<div class="duaa-item">🔹 ${d}</div>`).join('')}</div>`;c.innerHTML=h;}
function renderSeerah(){const c=document.getElementById('seerah-container');if(!c)return;c.innerHTML=SEERAH.map(s=>`<div class="seerah-item"><h4>✨ ${s.title}</h4><p>${s.content}</p></div>`).join('');}
function renderTajweed(){const c=document.getElementById('tajweed-container');if(!c)return;c.innerHTML=TAJWEED.map(t=>`<div class="tajweed-item"><h4>📖 ${t.rule}</h4><p>${t.detail}</p></div>`).join('');}
function calcZakah(){const v=parseFloat(document.getElementById('zakah-amount').value)||0,type=document.getElementById('zakah-type').value;let msg='أدخل المقدار...';if(v>0){if(type==='money')msg=v>=1000?`✅ الزكاة (2.5%): ${(v*0.025).toFixed(2)}`:'⚠️ أقل من النصاب';else if(type==='gold')msg=v>=85?`✅ زكاة الذهب (2.5%): ${(v*0.025).toFixed(2)} جرام`:`⚠️ الوزن (${v}غ) أقل من النصاب (85غ)`;else msg=v>=612?`✅ الزكاة: ${(v*0.025).toFixed(2)}`:'⚠️ أقل من النصاب';}document.getElementById('zakah-result').textContent=msg;}

async function renderCities(){
  const c=document.getElementById('cities-list');if(!c)return;
  const cities=[{name:'نابلس',city:'Nablus'},{name:'القدس',city:'Jerusalem'},{name:'غزة الصامدة',city:'Gaza'},{name:'رام الله',city:'Ramallah'},{name:'الخليل',city:'Hebron'}];
  // Try offline first using coordinates
  const cityCoords = {
    'Nablus':{lat:32.2211,lng:35.2544}, 'Jerusalem':{lat:31.7683,lng:35.2137},
    'Gaza':{lat:31.5017,lng:34.4668}, 'Ramallah':{lat:31.9038,lng:35.2034},
    'Hebron':{lat:31.5326,lng:35.0998}
  };
  const now = new Date();
  const offlineResults = cities.map(ct => {
    const coord = cityCoords[ct.city];
    if(!coord) return {name:ct.name, timings:null};
    const t = calcPrayerTimesOffline(coord.lat, coord.lng, now);
    return {name:ct.name, timings:t};
  });
  renderCityList(c, offlineResults);
  // Try to refresh from network
  try{
    const results=await Promise.all(cities.map(ct=>fetch(`https://api.aladhan.com/v1/timingsByCity?city=${ct.city}&country=Palestine&method=4`).then(r=>r.json()).then(d=>({name:ct.name,timings:d.data?.timings})).catch(()=>null)));
    const valid = results.filter(Boolean);
    if(valid.length > 0) renderCityList(c, valid);
  }catch{}
}

function renderCityList(c, results) {
  c.innerHTML=results.map(r=>{
    if(!r.timings)return`<div class="mosque-card"><h4>🕌 ${r.name}</h4><p style="color:var(--ink2);font-size:.82rem;">تعذّر التحميل</p></div>`;
    return`<div class="mosque-card"><h4 style="display:flex;align-items:center;gap:6px;"><svg width="14" height="14" stroke="var(--gold)"><use href="#icon-mosque"/></svg> ${r.name}</h4><div class="mosque-times">${[['الفجر',r.timings.Fajr],['الظهر',r.timings.Dhuhr],['العصر',r.timings.Asr],['المغرب',r.timings.Maghrib],['العشاء',r.timings.Isha]].map(([n,t])=>`<div class="mt-unit"><div class="mt-name">${n}</div><div class="mt-time">${(t||'--:--').substring(0,5)}</div></div>`).join('')}</div></div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════
// OVERLAYS
// ═══════════════════════════════════════════════════
function openFocus(){document.getElementById('focus-overlay').classList.add('open');if(ayahsData.length>0){const a=ayahsData[currentAyahIdx];document.getElementById('focus-ayah').innerHTML=`${a.text} <span style="color:var(--gold)">﴿${a.numberInSurah}﴾</span>`;}if(navigator.wakeLock)navigator.wakeLock.request('screen').catch(()=>{});}
function closeFocus(){document.getElementById('focus-overlay').classList.remove('open');}
function focusTap(){focusCount++;document.getElementById('focus-counter').textContent=focusCount;if(navigator.vibrate)navigator.vibrate(25);if(focusCount%33===0&&typeof confetti!=='undefined')confetti({particleCount:55,spread:45});}
function focusReset(){focusCount=0;document.getElementById('focus-counter').textContent=0;}

const breathDhikrs=['سبحان الله وبحمده','لا إله إلا الله','الله أكبر كبيراً','الحمد لله رب العالمين'];
function openBreath(){
  document.getElementById('breath-overlay').classList.add('open');
  const phases=['خذ نفساً ببطء...','احتفظ به...','أخرجه ببطء...','ارتَح...'];
  let p=0;
  const run=()=>{document.getElementById('breath-inst').textContent=phases[p%4];document.getElementById('breath-dhikr').textContent=`"${breathDhikrs[Math.floor(Math.random()*breathDhikrs.length)]}"`;p++;};
  run(); breathInterval=setInterval(run,4000);
}
function closeBreath(){document.getElementById('breath-overlay').classList.remove('open');clearInterval(breathInterval);}

// ═══════════════════════════════════════════════════
// SHARE IMAGE
// ═══════════════════════════════════════════════════
function openShareModal(){
  if(!currentSurahId||!ayahsData.length){showToast('اختر سورة أولاً');return;}
  const from=document.getElementById('share-from-ayah'),to=document.getElementById('share-to-ayah');
  from.innerHTML=''; to.innerHTML='';
  ayahsData.forEach((a,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`الآية ${a.numberInSurah}`;from.appendChild(o);});
  from.value=currentAyahIdx;
  const buildTo=(fi)=>{to.innerHTML='';const mx=Math.min(fi+19,ayahsData.length-1);for(let i=fi;i<=mx;i++){const o=document.createElement('option');o.value=i;o.textContent=`الآية ${ayahsData[i].numberInSurah}`;to.appendChild(o);}to.value=Math.min(fi+4,mx);};
  buildTo(currentAyahIdx);
  from.onchange=()=>{buildTo(parseInt(from.value));updateSharePreview();};
  to.onchange=updateSharePreview;
  document.getElementById('share-themes-grid').innerHTML=SHARE_THEMES.map((t,i)=>`<button class="share-theme-btn ${i===shareThemeIdx?'sel':''}" style="background:${t.preview}" onclick="selShareTheme(${i})"><span>${t.name}</span></button>`).join('');
  document.getElementById('share-modal-overlay').style.display='block';
  updateSharePreview();
}

function closeShareModal(){document.getElementById('share-modal-overlay').style.display='none';}
function selShareTheme(i){shareThemeIdx=i;document.querySelectorAll('.share-theme-btn').forEach((b,j)=>b.classList.toggle('sel',j===i));updateSharePreview();}

function buildShareHTML(t,ayahs,name){
  const isLight=t.id==='ivory';
  const html=ayahs.map(a=>`<span style="font-family:'Scheherazade New','Amiri',serif;font-size:22px;line-height:2;color:${t.verseColor};">${a.text}</span><span style="display:inline-block;width:26px;height:26px;line-height:26px;background:${t.numberColor};color:${isLight?'#fff':'#0a0a0a'};border-radius:50%;font-size:11px;font-weight:900;text-align:center;font-family:Cairo,sans-serif;margin:0 3px;vertical-align:middle;">﴿${a.numberInSurah}﴾</span>`).join(' ');
  return`<div style="background:${t.bg};padding:36px 32px;font-family:'Amiri',serif;direction:rtl;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;top:0;right:0;width:60px;height:60px;border-top:2px solid ${t.borderColor};border-right:2px solid ${t.borderColor};border-radius:0 18px 0 0;"></div><div style="position:absolute;top:0;left:0;width:60px;height:60px;border-top:2px solid ${t.borderColor};border-left:2px solid ${t.borderColor};border-radius:18px 0 0 0;"></div><div style="position:absolute;bottom:0;right:0;width:60px;height:60px;border-bottom:2px solid ${t.borderColor};border-right:2px solid ${t.borderColor};border-radius:0 0 0 18px;"></div><div style="position:absolute;bottom:0;left:0;width:60px;height:60px;border-bottom:2px solid ${t.borderColor};border-left:2px solid ${t.borderColor};border-radius:0 0 18px 0;"></div><div style="font-size:22px;color:${t.surahColor};letter-spacing:4px;margin-bottom:12px;">۞ ✦ ۞</div><div style="font-family:'Scheherazade New','Amiri',serif;font-size:20px;font-weight:bold;color:${t.surahColor};margin-bottom:4px;">${name}</div><div style="height:1px;background:linear-gradient(to left,transparent,${t.borderColor},transparent);margin:14px 0;"></div><div style="text-align:justify;text-align-last:center;padding:0 8px;line-height:2.1;">${html}</div><div style="height:1px;background:linear-gradient(to left,transparent,${t.borderColor},transparent);margin:14px 0;"></div><div style="font-size:16px;color:${t.surahColor};letter-spacing:4px;">✦ ۩ ✦</div><div style="font-size:11px;color:${t.textColor};opacity:.5;margin-top:8px;letter-spacing:3px;font-family:Cairo;">تطبيق نُـور</div></div>`;
}

function updateSharePreview(){const from=parseInt(document.getElementById('share-from-ayah').value),to=parseInt(document.getElementById('share-to-ayah').value);const s=Math.min(from,to),e=Math.min(Math.max(from,to),s+19);const ayahs=ayahsData.slice(s,e+1),t=SHARE_THEMES[shareThemeIdx];const name=SURAHS_META.find(s=>s.n===currentSurahId)?.name||'';document.getElementById('share-preview-box').innerHTML=buildShareHTML(t,ayahs,name);}

async function generateShareImage(){const from=parseInt(document.getElementById('share-from-ayah').value),to=parseInt(document.getElementById('share-to-ayah').value);const s=Math.min(from,to),e=Math.max(from,to);if(e-s>19){showToast('⚠️ الحد الأقصى 20 آية');return;}const ayahs=ayahsData.slice(s,e+1),t=SHARE_THEMES[shareThemeIdx];const name=SURAHS_META.find(s=>s.n===currentSurahId)?.name||'';const area=document.getElementById('temp-screenshot-area');area.style.width='700px';area.style.padding='0';area.innerHTML=buildShareHTML(t,ayahs,name);if(typeof html2canvas==='undefined'){showToast('مكتبة html2canvas غير محملة');return;}showToast('⏳ جاري الإنشاء...');try{const canvas=await html2canvas(area,{scale:2,useCORS:true,backgroundColor:null,logging:false});const a=document.createElement('a');a.download=`نور-${name}-${ayahs[0].numberInSurah}.png`;a.href=canvas.toDataURL('image/png');a.click();showToast('✅ تم الحفظ!');closeShareModal();}catch{showToast('خطأ في الإنشاء');}}

// ═══════════════════════════════════════════════════
// MISC
// ═══════════════════════════════════════════════════
function switchTab(tabId, btnEl) {
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  document.querySelectorAll('.tab-pill').forEach(b=>b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  if(btnEl) btnEl.classList.add('active');
  if(tabId==='bookmarks-sec') updateBmTab();
  if(btnEl) btnEl.scrollIntoView({behavior:'smooth',block:'nearest',inline:'nearest'});
}

function toggleDark() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-btn');
  const isDark = document.body.classList.contains('dark');
  btn.innerHTML = isDark
    ? '<svg width="16" height="16"><use href="#icon-sun"/></svg>'
    : '<svg width="16" height="16"><use href="#icon-moon"/></svg>';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.display='block';
  setTimeout(() => t.style.display='none', 2800);
}

function rotateNafha() {
  const el = document.getElementById('nafha-text');
  if(!el) return;
  el.style.opacity='0';
  setTimeout(() => {
    el.textContent = `"${NAFAHAT[Math.floor(Math.random()*NAFAHAT.length)]}"`;
    el.style.opacity='1';
    el.style.transition='opacity .5s';
  }, 400);
}

function suggestCharity(){
  const actions=["إرسال دعم لأهلنا في فلسطين المظلومة.","بر الوالدين — اتصل بهما الآن.","إفشاء السلام وتبسم في وجه أخيك.","نشر آية أو ذكر مبارك.","إطعام محتاج ولو بشيء يسير.","زيارة مريض أو الاطمئنان على صديق.","صلة الرحم — تواصل مع قريب."];
  alert(`💝 عمل صالح مقترح:\n\n"${actions[Math.floor(Math.random()*actions.length)]}"\n\nتقبّل الله منا ومنكم.`);
}

function checkContinueReading(){
  const last=JSON.parse(localStorage.getItem('noor_last_read')),box=document.getElementById('continue-box');
  if(last&&box){box.style.display='flex';document.getElementById('continue-txt').innerHTML=`متابعة: آية ﴿${last.num}﴾ <button onclick="switchTab('quran-sec',document.querySelectorAll('.tab-pill')[1]);loadSurah(${last.surahId})" style="background:var(--gold);border:none;padding:3px 10px;border-radius:7px;cursor:pointer;font-weight:700;font-size:.8rem;color:#fff;">▶ متابعة</button>`;}
}

function checkAutoAzkar(){
  const h=new Date().getHours(),box=document.getElementById('auto-azkar-box');
  if(!box)return;
  if(h>=5&&h<11){box.innerHTML='🌟 أذكار الصباح: احرص على تحصين يومك الآن.';box.style.display='block';}
  else if(h>=15&&h<20){box.innerHTML='🌙 أذكار المساء: حان وقت أذكار المساء.';box.style.display='block';}
}

function updateRamadanBadge(){
  const rd=ISLAMIC_OCCASIONS.find(o=>o.name.includes('رمضان 1447'));if(!rd)return;
  const diff=new Date(rd.date)-new Date();
  const el=document.getElementById('ramadan-badge');
  if(!el)return;
  if(diff>0){el.textContent=`🌙 متبقي لرمضان: ${Math.floor(diff/864e5)} يوم`;el.style.display='block';}
  else{el.textContent='🌙 رمضان مبارك!';el.style.display='block';}
}

async function requestNotifPerm(){const p=await Notification.requestPermission();showToast(p==='granted'?'✅ تم تفعيل التنبيهات!':'لم يتم المنح');}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
window.onload = () => {
  // Holo
  buildHoloCylinder();
  initHoloDrag();
  holoLoop();
  holoLoadCurrent();

  // Clock
  updateClock(); setInterval(updateClock, 1000);
  setInterval(updateCountdown, 1000);

  // Prayer times (offline-capable)
  initPrayerTimes();

  // Quran
  loadSurahs();
  renderOfflineGrid(SURAHS_META);
  checkOfflineLastPos();

  // Content
  renderNames();
  renderHadith(new Date().getDate()%AHADITH.length);
  renderDuaa(); renderSeerah(); renderTajweed();
  renderWird(); renderPrayerTrack(); loadChallenge();
  renderCities();
  document.getElementById('mosque-fact').textContent = MOSQUE_FACTS[new Date().getDate()%MOSQUE_FACTS.length];
  renderOccasions(); setInterval(renderOccasions, 1000);

  // Dashboard & UI
  renderDash(); updateKhatmaUI(); renderTasbihWeek();
  document.getElementById('s-total').textContent = `${totalTasbih} مجموع`;
  checkContinueReading(); checkAutoAzkar(); updateRamadanBadge();
  rotateNafha(); setInterval(rotateNafha, 10000);
  updateBmTab();
};
</script>
</body>
</html>
