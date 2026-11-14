
(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme',saved);
  const btn=document.getElementById('themeToggle');
  const sun='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const moon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  function paint(){btn.innerHTML=root.getAttribute('data-theme')==='light'?moon:sun;}
  if(btn){paint();btn.addEventListener('click',()=>{const l=root.getAttribute('data-theme')==='light';if(l)root.removeAttribute('data-theme');else root.setAttribute('data-theme','light');localStorage.setItem('theme',l?'dark':'light');paint();});}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>el.classList.add('in')),1200);
})();
