/**
 * 极算金融量化平台 - JS核心模块
 * 导航/搜索/显示 核心函数
 * 单独文件：即使此文件加载失败也不影响HTML结构
 */

(function() {
  'use strict';

  window.toggleCat = function(id) {
    var ch = document.getElementById('ch-' + id);
    if (!ch) return;
    var arr = document.getElementById('arr-' + id);
    if (ch.classList.contains('open')) {
      ch.classList.remove('open');
      if (arr) arr.classList.remove('open');
    } else {
      ch.classList.add('open');
      if (arr) arr.classList.add('open');
    }
  };

  window.showApi = function(catId, idx) {
    // Hide all sections
    var secs = document.querySelectorAll('.api-section');
    for (var i = 0; i < secs.length; i++) {
      secs[i].classList.remove('active');
    }
    // Show target section
    var sec = document.getElementById('sec-' + catId);
    if (sec) sec.classList.add('active');
    // Hide welcome
    var ws = document.getElementById('welcomeSection');
    if (ws) ws.style.display = 'none';
    // Scroll to card
    setTimeout(function() {
      var card = document.getElementById('card-' + catId + '-' + idx);
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    // Clear nav selection
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) links[i].classList.remove('active');
    // Select current nav
    var link = document.getElementById('nav-' + catId + '-' + idx);
    if (link) link.classList.add('active');
  };

  window.searchApi = function(val) {
    var q = val.toLowerCase().trim();
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = (!q || links[i].textContent.toLowerCase().indexOf(q) > -1) ? '' : 'none';
    }
  };

  // Auto-open first category on load
  document.addEventListener('DOMContentLoaded', function() {
    var c = document.querySelector('.nav-category');
    if (c) c.click();
  });

})();
