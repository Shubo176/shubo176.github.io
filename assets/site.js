function toggleNav(){
  const m = document.getElementById('navmenu');
  m.classList.toggle('show');
}

const THEME_STORAGE_KEY = 'theme-preference';

function getStoredTheme(){
  try{
    return localStorage.getItem(THEME_STORAGE_KEY);
  }catch(e){
    return null;
  }
}

function storeTheme(theme){
  try{
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }catch(e){
    // ignore write errors
  }
}

function applyTheme(theme, persist = true){
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  if(persist){
    storeTheme(theme);
  }
  const btn = document.getElementById('theme-toggle');
  if(btn){
    const isDark = theme === 'dark';
    const icon = btn.querySelector('span[aria-hidden="true"]');
    const label = btn.querySelector('.theme-toggle__label');
    if(icon){
      icon.textContent = isDark ? '🌞' : '🌙';
    }
    if(label){
      label.textContent = isDark ? 'Light' : 'Dark';
    }
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

(function(){
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = getStoredTheme();
  const initialTheme = storedTheme || (mql.matches ? 'dark' : 'light');
  applyTheme(initialTheme, Boolean(storedTheme));
  if(!storedTheme){
    const syncWithSystem = (event) => {
      applyTheme(event.matches ? 'dark' : 'light', false);
    };
    if(typeof mql.addEventListener === 'function'){
      mql.addEventListener('change', syncWithSystem);
    }else if(typeof mql.addListener === 'function'){
      mql.addListener(syncWithSystem);
    }
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
