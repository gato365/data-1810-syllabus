window.SYLLABUS_YAML = String.raw`
# =====================================================================
#  STAT/DATA 1810 — SYLLABUS FORM  (fill me in!)
#  ---------------------------------------------------------------------
#  Everything between the first line and the last line is plain YAML.
#  • Fill in the "" values. Anything left empty shows on the page as a
#    RED BOLD BOX naming the field, so you can see what is still missing.
#  • For paragraphs use the  |  block style (see examples). Blank lines
#    make new paragraphs; lines starting with "- " make bullet lists;
#    **bold** and code-in-backticks work inside text. Lines that start with "#"
#    inside a paragraph are hints — they are ignored on the page, so you
#    can leave them or delete them.
#  • Save the file and refresh the browser — no build step.
#  • Do NOT type a lone backtick character anywhere (only matched pairs
#    around inline code), and never write a dollar sign followed by {.
# =====================================================================

course:
  code: "STAT/DATA 1810"
  title: "Introduction to Statistical Computing with R"                 # official catalog title, exactly as in the catalog
  term: "Fall 2026"                  # e.g., Fall 2026
  section: "02, 03, 04"               # section number(s)
  units: "3"                 # e.g., 4
  meeting_days: "Monday & Wednesday"
  meeting_time: "7:30-8:50 AM, 9:00-10:20 AM, 10:30-11:50 AM"          # e.g., 2:10–4:00 PM
  location: "38-122 (Math & Science 38)"              # building – room
  final_exam: "Common Final - December 12, Time: TBD"            # day, date & time of the final (finals week)
  final_exam_location: "TBD"
  prerequisites: "One of the following: DATA/STAT 1000, STAT 130, STAT 217, STAT 218, STAT 252, STAT 301, STAT 312, STAT 1110, STAT 1220, STAT 1510, or STAT 3210.
"         # exactly as in the catalog, or "None"
  ge_gwr_uscp: "NA"           # e.g., "Not applicable" or "Meets GE Area B4"
  course_site_label: "Canvas"
  course_site_url: "https://canvas.calpoly.edu/courses/192205"       # https://canvas.calpoly.edu/...

instructor:
  name: "Dr. Immanuel Williams"                  # e.g., Dr. Jane Doe
  title: "Assistant Professor, Statistics Department"                 # e.g., Assistant Professor, Statistics Department
  email: "imwillia@calpoly.edu"
  office: "25-113"                # building – room
  office_hours: "MW 2:00 - 3:15 pm"          # days & times
  office_hours_mode: "in person"     # in person / Zoom link
  preferred_contact: "Email"     # e.g., Email; expect a reply within 24 hours on weekdays
  communication_expectations: |
    When emailing me, **introduce yourself and include your course/section**, then use a clear subject line such as **“DATA 1810 – Assignment 3 Question.”** Email is best for brief questions or administrative matters; use **office hours** for detailed explanations, code help, or longer discussions. Please include enough context in your message so I can respond efficiently.


purpose:
  catalog_description: |
   STAT/DATA 1810 is where you stop being a spectator of data and become someone who does something with it. From the first weeks you will write real R code in a real workflow — pulling in messy datasets, wrestling them into shape, and turning them into visualizations that actually answer a question. Every class in the heart of the course runs one complete Extract → Transform → Visualize cycle on real data — Kobe's game logs, county populations scraped from the web, live weather from an API, coffee sales, the NBA's greatest — so you learn by finishing something, every single day. Then you level up: you will write loops and functions that let you do in seconds what once took an afternoon, and you will finish the term running your own statistical investigations — forming a question, testing it, and defending the answer. 
   
   Along the way you will build the habits that separate people who use data from people who are used by it: reading documentation on your own, asking who is missing from a dataset and who might be harmed by a conclusion, and reproducing your work so others can trust it. This course is demanding on purpose. It asks you to practice a little every day, to keep old skills sharp while you add new ones, and to show your work under time pressure — because that is what competence feels like. Come ready to be stretched. Leave able to take any table of numbers and make it speak.
  program_role: |
    This course provides students from a wide range of majors with a practical foundation in data science using R. For students pursuing the Data Science minor, it introduces the computational and data-management skills needed for later coursework. More broadly, it serves as an early course in the sequence, connecting introductory statistical ideas with reproducible workflows for importing, transforming, visualizing, and analyzing real data.

materials:
  textbook: |
    # (paragraph) title, author, edition, ISBN/URL, required vs. recommended — or "No textbook required"
  install_instructions: ""  # link or short note on installing R + Positron
  laptop_policy: ""         # e.g., "Bring a laptop to every class"
  drill_app_access: ""      # URL / how to log in
  other_supplies: ""        # anything else, or "None"

grading:
  # Point values per category (leave "" if you grade by weighted percentage only)
  points:
    final: ""
    midterms: ""
    checkins_self: ""
    checkins_collab: ""
    labs: ""
    drills: ""
    total: ""
  # Letter-grade cutoffs — add or remove rows as needed
  grade_scale: []
  # grade_scale:
  #   - { letter: "A",  range: "93–100" }
  #   - { letter: "A−", range: "90–92.9" }
  #   - { letter: "B+", range: "87–89.9" }
  #   - { letter: "B",  range: "83–86.9" }
  #   - { letter: "B−", range: "80–82.9" }
  #   - { letter: "C+", range: "77–79.9" }
  #   - { letter: "C",  range: "73–76.9" }
  #   - { letter: "C−", range: "70–72.9" }
  #   - { letter: "D",  range: "60–69.9" }
  #   - { letter: "F",  range: "below 60" }
  rounding_policy: ""       # e.g., "Final percentages are rounded to the nearest tenth; no curve."

assignments:
  exams:
    description: |
      # (paragraph) your own description of the exams — purpose, feel, how to prepare
    materials_allowed: ""   # closed/open notes? calculator? computer? AI?
    makeup: ""              # make-up / missed-exam policy
  checkins:
    description: |
      # (paragraph) your own description of Check-Ins
    submission: ""          # paper / Canvas / in-app — how and when during class
    missed: ""              # number dropped / make-up rule
  labs:
    description: |
      # (paragraph) your own description of Labs
    due: ""                 # e.g., "Sundays at 11:59 PM"
    submission: ""          # what to submit (.qmd + rendered HTML/PDF?) and where
  drills:
    description: |
      # (paragraph) your own description of Drills
    deadline: ""            # weekly drill deadline
    grading: ""             # completion vs. accuracy; do late drills count?

schedule:
  # One entry per week (15) — e.g., "Sep 22 & 24"
  week_dates:
    - ""   # week 1
    - ""   # week 2
    - ""   # week 3
    - ""   # week 4
    - ""   # week 5
    - ""   # week 6
    - ""   # week 7
    - ""   # week 8
    - ""   # week 9
    - ""   # week 10
    - ""   # week 11
    - ""   # week 12
    - ""   # week 13
    - ""   # week 14
    - ""   # week 15
  midterm1_date: ""         # Wednesday of week 5
  midterm2_date: ""         # Wednesday of week 9
  midterm3_date: ""         # Wednesday of week 12
  final_date: ""            # finals week — date & time (can repeat course.final_exam)
  lab_due: ""               # weekly lab due day/time
  drill_deadline: ""        # weekly drill deadline
  other_deadlines: ""       # add/drop deadline, withdrawal deadline, holidays / no-class days
  # Optional: put per-week notes here (holiday, no class, guest speaker). Same order as week_dates.
  week_notes:
    - ""   # week 1
    - ""   # week 2
    - ""   # week 3
    - ""   # week 4
    - ""   # week 5
    - ""   # week 6
    - ""   # week 7
    - ""   # week 8
    - ""   # week 9
    - ""   # week 10
    - ""   # week 11
    - ""   # week 12
    - ""   # week 13
    - ""   # week 14
    - ""   # week 15

policies:
  attendance: |
    # (paragraph) attendance and missed Check-Ins — how many are dropped, make-ups, excused absences
  late_work: |
    # (paragraph) late and missing work — grace period, per-day penalty, drops, extension procedure, missed exams
  ai_labs: ""               # AI on labs is permitted — how must it be disclosed/cited? what stays your responsibility?
  ai_exams_checkins: ""     # AI on exams and check-ins (expected: not permitted)
  ai_drills: ""             # AI on drills
  ai_statement: |
    # (paragraph) campus-recommended generative-AI syllabus statement — see https://ctlt.calpoly.edu/syllabus-statements
  academic_integrity: |
    # (paragraph) academic integrity / collaboration policy and consequences
  dei: |
    # (paragraph) diversity, equity, inclusion, and classroom respect statement
  success_extra: |
    # (bullets, optional) extra advice, office-hour encouragement, tutoring / stat-lab resources
  trips_events: ""          # course-related trips / special events, or "None planned"
  incentives: ""            # stickers or other course incentives, or "None"
  drc: |
    # (paragraph) Cal Poly Disability Resource Center (DRC) accommodations statement
  changes: |
    The instructor reserves the right to adjust the schedule, assignments, and policies as needed;
    any changes will be announced in class and posted on the course site. This syllabus is the
    authoritative version of the course design.
`;
