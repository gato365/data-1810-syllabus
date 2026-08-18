# STAT/DATA 1810 — Syllabus website

Open `index.html` in any browser (double-click; no server needed). Works from GitHub Pages too.
The original course-outline site (`../../DATA 1810 - outline/website`) is untouched.

```
syllabus_website/
├── index.html            page structure only (sections, tables, where each YAML field goes)
├── syllabus.yaml.js      ← THE FORM: fill this in (YAML inside a one-line JS wrapper)
├── assets/
│   ├── css/style.css     Cal Poly green/gold theme + course colors + print/PDF rules
│   ├── js/main.js        reads the YAML, fills the page, accordions, menu, print
│   └── js/js-yaml.min.js YAML parser (js-yaml 4.1.0, MIT)
└── README.md
```

## Filling in the syllabus (`syllabus.yaml.js`)

* Everything between the first and last line is plain YAML. Fill in the `""` values; use the
  `|` block style for paragraphs (blank line = new paragraph, `- ` = bullet, `**bold**`,
  `code` in backticks). Lines starting with `#` inside a paragraph are hints and are ignored.
* Save → refresh the browser. No build step.
* Any field left empty shows on the page as a **RED BOLD BOX** that names its YAML key
  (e.g. `[instructor.email]`); the side menu shows a red count per section and the masthead
  shows the total. When nothing is missing the note disappears (it never prints anyway).
* Fields marked optional in the YAML (`schedule.week_notes`, `policies.success_extra`) render
  as nothing when empty.
* Why `.yaml.js` and not `.yaml`? Browsers block reading a local `.yaml` file when the page is
  opened by double-click; wrapping the YAML in `window.SYLLABUS_YAML = String.raw\`…\`` lets it
  load anywhere. Two rules: don't type a lone backtick, and don't write `${` in the file.
* Assignment paragraphs: `assignments.exams|checkins|labs|drills.description` — each shows at the
  top of its collapsible panel in Section 7. Grade cutoffs: uncomment `grading.grade_scale`.

## Behavior

* Nine numbered sections, all **collapsed on load**; open any number at once. Nested collapsibles
  for Exams / Check-Ins / Labs / Drills inside Section 7.
* Vertical **Sections** menu (sticky on desktop, stacked on mobile): click to open + scroll; the
  gold dot marks open sections; the outline marks the section in view.
* **Expand All / Collapse All** (top bar and menu). **Print / Export to PDF** expands everything,
  opens the print dialog (choose *Save as PDF*), then restores your open/closed state. Ctrl/Cmd+P
  does the same.
* Print: nav/menu/buttons removed; Letter, 0.75in margins; "Page X of Y" footer (Chrome/Edge);
  headings stay with content; tables/boxes/rows don't split; Sections 8 and 9 start on new pages.

## Design

Cal Poly Green `#154734` and Cal Poly Gold `#BD8B13` for the frame; the course color system is
kept for content: Foundations amber · Data blue · CS purple · STAT green; Exams red · Check-Ins
teal · Labs sky · Drills orange. All colors are CSS variables at the top of `assets/css/style.css`.
