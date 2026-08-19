/* =====================================================================
   STAT/DATA 1810 — Syllabus behavior
   1. Reads syllabus.yaml.js (window.SYLLABUS_YAML) and fills every
      element that has data-field="path.to.value".
        - empty value  -> RED BOLD BOX naming the field
          (data-optional: empty renders as nothing instead)
        - data-fmt="rich" -> paragraphs / bullet lists / **bold** / `code`
        - data-fmt="link" -> <a> using data-href-field for the URL
        - data-render="grade_scale" | "todo-count" -> special renderers
   2. Section accordions (all collapsed at start; many may be open),
      nested assignment accordions, vertical section menu, expand/collapse
      all, print / export to PDF (expands everything first).
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------ data */
  var DATA = {};
  function loadYaml() {
    var src = window.SYLLABUS_YAML || "";
    try {
      DATA = (window.jsyaml && window.jsyaml.load(src)) || {};
      if (typeof DATA !== "object" || DATA === null) DATA = {};
    } catch (e) {
      DATA = {};
      var banner = document.getElementById("yamlError");
      if (banner) {
        banner.hidden = false;
        banner.textContent = "Could not read syllabus.yaml.js — " + (e.message || e) +
          " (fix the YAML and refresh; until then every field shows as missing).";
      }
    }
  }
  function get(path) {
    var cur = DATA;
    var parts = String(path).split(".");
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || cur === undefined) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }
  /* Drop "# hint" lines; return "" if nothing real remains. */
  function clean(v) {
    if (v === null || v === undefined) return "";
    if (typeof v !== "string") return String(v);
    var lines = v.split(/\r?\n/).filter(function (l) { return !/^\s*#/.test(l); });
    var out = lines.join("\n").replace(/^\s+|\s+$/g, "");
    return out;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /* inline mini-markdown: **bold**, `code`, [links](URL), bare URLs */
  function inline(s) {
    var h = esc(s);
    h = h.replace(/`([^`]+)`/g, "<code>$1</code>");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    h = h.replace(/(^|[\s(])((?:https?:\/\/)[^\s)<]+)/g, '$1<a href="$2">$2</a>');
    return h;
  }
  /* rich text: blank-line paragraphs, bullet lists, and numbered lists */
  function rich(s) {
    var blocks = s.split(/\n\s*\n/);
    return blocks.map(function (b) {
      var lines = b.split(/\n/).map(function (l) { return l.replace(/^\s+|\s+$/g, ""); }).filter(Boolean);
      if (lines.length && lines.every(function (l) { return /^[-*•]\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + inline(l.replace(/^[-*•]\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      if (lines.length && lines.every(function (l) { return /^\d+[.)]\s+/.test(l); })) {
        return "<ol>" + lines.map(function (l) { return "<li>" + inline(l.replace(/^\d+[.)]\s+/, "")) + "</li>"; }).join("") + "</ol>";
      }
      return "<p>" + inline(lines.join(" ")) + "</p>";
    }).join("");
  }
  function todo(el, path) {
    var label = el.getAttribute("data-label") || path.split(".").pop().replace(/_/g, " ").toUpperCase();
    return '<span class="todo" title="Fill in: ' + esc(path) + ' (syllabus.yaml.js)">' + esc(label) +
           ' <small>[' + esc(path) + ']</small></span>';
  }
  function fillFields() {
    var els = document.querySelectorAll("[data-field]");
    Array.prototype.forEach.call(els, function (el) {
      var path = el.getAttribute("data-field");
      var fmt = el.getAttribute("data-fmt") || "text";
      var val = clean(get(path));
      if (!val) {
        if (el.hasAttribute("data-optional")) { el.innerHTML = ""; return; }   /* optional: blank, no red box */
        el.innerHTML = todo(el, path); el.classList.add("is-todo"); return;
      }
      el.classList.remove("is-todo");
      if (fmt === "rich") el.innerHTML = rich(val);
      else if (fmt === "link") {
        var url = clean(get(el.getAttribute("data-href-field") || ""));
        el.innerHTML = url ? '<a href="' + esc(url) + '">' + inline(val) + "</a>" : inline(val);
      } else el.innerHTML = inline(val);
    });
    /* link fields where the URL is the missing piece */
    Array.prototype.forEach.call(document.querySelectorAll("[data-link-field]"), function (el) {
      var path = el.getAttribute("data-link-field");
      var url = clean(get(path));
      var label = clean(get(el.getAttribute("data-label-field") || "")) || el.getAttribute("data-label") || url;
      if (!url) { el.innerHTML = todo(el, path); return; }
      el.innerHTML = '<a href="' + esc(url) + '">' + esc(label) + "</a>";
    });
    renderGradeScale();
    renderTodoCount();
  }
  function renderGradeScale() {
    var host = document.querySelector('[data-render="grade_scale"]');
    if (!host) return;
    var rows = get("grading.grade_scale");
    if (!Array.isArray(rows) || !rows.length) {
      host.innerHTML = '<div class="todo-note"><b>Grade scale:</b> ' +
        '<span class="todo">LETTER-GRADE CUTOFFS <small>[grading.grade_scale]</small></span> — add rows to <code>grading.grade_scale</code> in syllabus.yaml.js.</div>';
      return;
    }
    var html = '<div class="tbl-scroll"><table><thead><tr><th>Letter grade</th><th>Percentage</th></tr></thead><tbody>';
    rows.forEach(function (r) {
      html += "<tr><td><strong>" + esc(r.letter || "") + "</strong></td><td>" + esc(r.range || "") + "</td></tr>";
    });
    html += "</tbody></table></div>";
    host.innerHTML = html;
  }
  function renderTodoCount() {
    var n = document.querySelectorAll(".acc .todo, .masthead .meta .todo, .masthead .sub .todo, .masthead h1 .todo").length;
    Array.prototype.forEach.call(document.querySelectorAll('[data-render="todo-count"]'), function (el) {
      el.textContent = n;
    });
    var note = document.getElementById("todoNote");
    if (note) note.hidden = n === 0;
    /* per-section counts in the side menu */
    Array.prototype.forEach.call(document.querySelectorAll(".menu-item"), function (mi) {
      var sec = document.getElementById(mi.getAttribute("data-target"));
      var badge = mi.querySelector(".todo-count");
      if (!sec || !badge) return;
      var k = sec.querySelectorAll(".todo").length;
      badge.textContent = k;
      badge.hidden = k === 0;
      badge.title = k + " item(s) still to fill in";
    });
  }

  /* ------------------------------------------------------- accordions */
  var secButtons, menuItems;
  function panelOf(btn) { return document.getElementById(btn.getAttribute("aria-controls")); }
  function setOpen(btn, open) {
    var panel = panelOf(btn);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) { if (open) panel.removeAttribute("hidden"); else panel.setAttribute("hidden", ""); }
    syncMenu();
  }
  function isOpen(btn) { return btn.getAttribute("aria-expanded") === "true"; }
  function setAllSections(open) { secButtons.forEach(function (b) { setOpen(b, open); }); }
  function setAllSubs(open) {
    Array.prototype.forEach.call(document.querySelectorAll(".sub-btn"), function (b) { setOpen(b, open); });
  }
  function syncMenu() {
    if (!menuItems) return;
    menuItems.forEach(function (mi) {
      var sec = document.getElementById(mi.getAttribute("data-target"));
      var btn = sec && sec.querySelector(".acc-btn");
      mi.classList.toggle("open", !!(btn && isOpen(btn)));
    });
  }
  function openSection(id, scroll) {
    var sec = document.getElementById(id);
    if (!sec) return;
    var btn = sec.querySelector(".acc-btn");
    if (btn) setOpen(btn, true);
    if (scroll) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function initAccordions() {
    secButtons = Array.prototype.slice.call(document.querySelectorAll(".acc-btn"));
    menuItems = Array.prototype.slice.call(document.querySelectorAll(".menu-item"));

    Array.prototype.forEach.call(document.querySelectorAll(".acc-btn, .sub-btn"), function (btn) {
      btn.addEventListener("click", function () { setOpen(btn, !isOpen(btn)); });
    });
    /* everything starts collapsed */
    setAllSections(false);
    setAllSubs(false);

    menuItems.forEach(function (mi) {
      mi.addEventListener("click", function () {
        var id = mi.getAttribute("data-target");
        var sec = document.getElementById(id);
        var btn = sec && sec.querySelector(".acc-btn");
        if (!btn) return;
        if (isOpen(btn) && mi.classList.contains("current")) { setOpen(btn, false); return; }
        openSection(id, true);
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });

    var bind = function (id, fn) { var b = document.getElementById(id); if (b) b.addEventListener("click", fn); };
    bind("expandAll", function () { setAllSections(true); setAllSubs(true); });
    bind("collapseAll", function () { setAllSections(false); setAllSubs(false); });

    /* deep links: #s4 opens section 4 */
    function openFromHash() {
      var id = location.hash.replace("#", "");
      if (id && document.getElementById(id) && document.getElementById(id).classList.contains("acc")) openSection(id, false);
    }
    window.addEventListener("hashchange", openFromHash);
    openFromHash();

    /* highlight the section currently in view */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            menuItems.forEach(function (mi) { mi.classList.toggle("current", mi.getAttribute("data-target") === en.target.id); });
          }
        });
      }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
      Array.prototype.forEach.call(document.querySelectorAll(".acc"), function (s) { io.observe(s); });
    }
  }

  /* ------------------------------------------------------------ print */
  function initPrint() {
    var saved = null;
    var all = function () { return Array.prototype.slice.call(document.querySelectorAll(".acc-btn, .sub-btn")); };
    function rememberAndExpand() {
      if (saved === null) saved = all().map(isOpen);
      all().forEach(function (b) { setOpen(b, true); });
    }
    function restore() {
      if (saved) { var btns = all(); btns.forEach(function (b, i) { setOpen(b, saved[i]); }); saved = null; }
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-print]"), function (b) {
      b.addEventListener("click", function () { rememberAndExpand(); setTimeout(function () { window.print(); }, 60); });
    });
    window.addEventListener("beforeprint", rememberAndExpand);
    window.addEventListener("afterprint", restore);
    if (window.matchMedia) {
      var mq = window.matchMedia("print");
      var handler = function (e) { if (e.matches) rememberAndExpand(); else restore(); };
      if (mq.addEventListener) mq.addEventListener("change", handler); else if (mq.addListener) mq.addListener(handler);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadYaml();
    fillFields();
    initAccordions();
    initPrint();
  });
})();
