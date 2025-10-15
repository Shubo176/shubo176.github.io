function toggleNav(){
  const m = document.getElementById('navmenu');
  m.classList.toggle('show');
}
(function(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();