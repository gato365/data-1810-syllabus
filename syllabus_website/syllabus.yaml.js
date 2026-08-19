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
  final_exam: "Common Final — Saturday, December 12, 2026; time TBD"  # day, date & time of the final
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
    - [R is Your Friend](https://r-is-your-friend.github.io/course-pack/) — setup, R basics, control flow, functions, tidyverse, visualization, data wrangling, projects, and file paths.
    - [R for Data Science, 2nd edition (R4DS)](https://r4ds.hadley.nz/) by Hadley Wickham, Mine Çetinkaya-Rundel, and Garrett Grolemund — data import, transformation, visualization, tidying, joins, strings, factors, dates, spreadsheets, and Quarto.
    - [Introduction to Modern Statistics (OpenIntro)](https://openintrostat.github.io/ims/) — specifically the linear-regression material in §7.1.1–7.1.3.
  install_instructions: |
    1. **Install R.** Open the [R download page](https://cloud.r-project.org/), choose your operating system, and install the latest version.
    2. **Install Positron.** Download and install [Positron](https://posit.co/download/positron/), the program we will use to write and run R code.
    3. **Check your setup.** Open Positron, start an R console, type **1 + 1**, and press Enter. If the console returns **2**, you are ready.
    4. **Bring your laptop to class.** If installation does not work, bring your laptop and charger to the first class so we can help you finish the setup.
  laptop_policy: "**You should bring a laptop to every class**"         # e.g., "Bring a laptop to every class"
  drill_app_access: ""      # URL / how to log in
  other_supplies: "None"        # anything else, or "None"

grading:
  # Point values per category (leave "" if you grade by weighted percentage only)
  points:
    final: 325
    midterms: 250
    checkins_self: 150
    checkins_collab: 100
    labs: 100
    drills: 75
    total: 1000
  # Letter-grade cutoffs — add or remove rows as needed
  grade_scale:
    - { letter: "A+", range: "97–100" }
    - { letter: "A",  range: "93–96.9" }
    - { letter: "A−", range: "90–92.9" }
    - { letter: "B+", range: "87–89.9" }
    - { letter: "B",  range: "83–86.9" }
    - { letter: "B−", range: "80–82.9" }
    - { letter: "C+", range: "77–79.9" }
    - { letter: "C",  range: "73–76.9" }
    - { letter: "C−", range: "70–72.9" }
    - { letter: "D",  range: "60–69.9" }
    - { letter: "F",  range: "below 60" }
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
  rounding_policy: "TBD — the rounding and curving policy will be determined during final exam week."

assignments:
  exams:
    description: |
      The midterms allow you to demonstrate your individual understanding of the course material. Each midterm will be cumulative, with greater emphasis placed on the concepts introduced most recently. This structure reflects the nature of programming and data science: new skills continually depend on the foundation established earlier in the course.

      The final examination will also be cumulative and will assess your ability to integrate and apply ideas from across the semester. The labs, drills, and check-ins are intentionally designed to prepare you for these assessments. Consistent engagement throughout the course will be far more effective than attempting to relearn the material shortly before an exam.
    materials_allowed: ""   # closed/open notes? calculator? computer? AI?
    makeup: ""              # make-up / missed-exam policy
  checkins:
    description: |
      **Individual Check-Ins.** Each Monday, you will complete a brief individual check-in lasting approximately 10–15 minutes. These check-ins allow you to demonstrate what you understand from the labs and class activities and how well you can apply the material independently. Because learning to program requires retaining and building upon previous skills, the questions will be cumulative. You should be prepared to use concepts from both the current week and earlier portions of the course.

      **Collaborative Check-Ins.** You will also complete collaborative check-ins in randomly assigned groups. Each group will have approximately 10–15 minutes to work through questions based on concepts introduced in class and practiced in the labs. These check-ins assess more than whether your group reaches the correct answer. They also give you practice explaining your reasoning, listening to different approaches, resolving disagreements, and working productively with a variety of classmates. Collaboration is an essential part of data science, and these check-ins will help you develop that skill throughout the course.
    submission: ""          # paper / Canvas / in-app — how and when during class
    missed: ""              # number dropped / make-up rule
  labs:
    description: |
      The labs are where you will gain meaningful experience working with Quarto documents, analyzing data, and using AI as a learning tool outside the classroom. Early labs will provide substantial guidance, including partially completed examples and structured prompts. As the semester progresses, that support will gradually decrease. You will move from filling in portions of an existing document to receiving broader instructions and eventually creating and completing more of the Quarto workflow independently.

      The format of the labs may vary. Some may include videos, demonstrations, guided coding exercises, independent investigations, or other supporting materials. Because each lab may require a different approach, begin early and allow yourself enough time to complete every component thoughtfully. After each lab, you will complete a 7–10-question Canvas assessment to demonstrate your understanding of the material.

      The individual and collaborative check-ins will be closely connected to the skills developed in the labs. Although AI can help you complete portions of a lab, it cannot replace your responsibility to understand the code, explain your decisions, and apply the material independently. The check-ins provide regular opportunities to demonstrate that understanding.
    due: "Assigned each Wednesday and due the following Wednesday at 11:59 PM (one week later)."
    submission: ""          # what to submit (.qmd + rendered HTML/PDF?) and where
  drills:
    description: |
      Drills are a critical part of this course because programming improves through consistent, deliberate practice. You will be expected to complete 40 drill questions each week. One effective approach is to complete approximately 10 questions per day on any four days of your choice, although you may organize the work differently as long as you reach the weekly requirement.

      The drills will reinforce material from class while occasionally introducing variations, extensions, or unfamiliar situations. When you encounter something new, use AI investigatively: ask questions, examine explanations, test alternatives, and determine why a solution works. The goal is not simply to finish 40 questions. The goal is to strengthen your foundation, expand your experience, and become a more capable and confident R programmer.

      You may complete more than the required 40 questions. Opportunities for additional credit will reward meaningful practice beyond the weekly requirement, particularly consistent practice completed throughout the semester and in preparation for assessments. The application will explain the specific requirements and available incentives. The more problems you thoughtfully complete, the more patterns, techniques, and extensions you will encounter—and that experience will directly support your success in the course.
    deadline: "Every Sunday at 11:59 PM."
    grading: ""             # completion vs. accuracy; do late drills count?

schedule:
  # One entry per week (15) — e.g., "Sep 22 & 24"
  week_dates:
    - "Aug. 24 & 26"                # week 1
    - "Aug. 31 & Sept. 2"           # week 2
    - "Sept. 7 (no class) & 9"      # week 3
    - "Sept. 14 & 16"               # week 4
    - "Sept. 21 & 23"               # week 5
    - "Sept. 28 & 30"               # week 6
    - "Oct. 5 & 7"                  # week 7
    - "Oct. 12 & 14"                # week 8
    - "Oct. 19 & 21"                # week 9
    - "Oct. 26 & 28"                # week 10
    - "Nov. 2 & 4"                  # week 11
    - "Nov. 9 & 11 (no class)"      # week 12
    - "Nov. 16 & 18"                # week 13
    - "Nov. 30 & Dec. 2"            # week 14 (after Fall Break)
    - "Dec. 7 & 9"                  # week 15
  midterm1_date: "September 23, 2026"  # Wednesday of week 5
  midterm2_date: "October 21, 2026"    # Wednesday of week 9
  midterm3_date: "November 18, 2026"   # moved to Wednesday of week 13; Nov. 11 is Veterans Day
  final_date: "Saturday, December 12, 2026 — time TBD"
  lab_due: "Assigned Wednesday; due the following Wednesday at 11:59 PM"
  drill_deadline: "Every Sunday at 11:59 PM"
  other_deadlines: "Labor Day: Sept. 7 (no class) · Veterans Day: Nov. 11 (no class) · Fall Break: Nov. 23–29 · Last day of classes: Dec. 11 · Common Final: Dec. 12 (time TBD)"
  # Optional: put per-week notes here (holiday, no class, guest speaker). Same order as week_dates.
  week_notes:
    - ""   # week 1
    - ""   # week 2
    - "Labor Day — no class Monday, Sept. 7"   # week 3
    - ""   # week 4
    - ""   # week 5
    - ""   # week 6
    - ""   # week 7
    - ""   # week 8
    - ""   # week 9
    - ""   # week 10
    - ""   # week 11
    - "Veterans Day — no class Wednesday, Nov. 11"   # week 12
    - "Midterm 3 on Wednesday, Nov. 18"   # week 13
    - "Fall Break was Nov. 23–29"   # week 14
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
    Artificial intelligence will be used in this course to enhance learning—not replace it. You are encouraged to use AI to investigate ideas, clarify concepts, explore alternative solutions, troubleshoot code, and ask deeper questions. However, you remain responsible for understanding any work you submit and for developing the ability to reason, communicate, and program independently.

    Our shared goal is to use AI thoughtfully, responsibly, and collegially so that everyone can maximize this learning experience. By engaging seriously with the labs, drills, check-ins, and assessments, you will develop a strong foundation in R programming while applying important ideas from data science, statistics, and computer science.
  academic_integrity: |
    # (paragraph) academic integrity / collaboration policy and consequences
  dei: |
    # (paragraph) diversity, equity, inclusion, and classroom respect statement
  success_extra: |
    # (bullets, optional) extra advice, office-hour encouragement, tutoring / stat-lab resources
  extra_credit:
    see_me: |
      **You Do Know Me.** If you see me on campus, you know me! Ask me a statistical question, then complete the survey. I will award the extra-credit points at the end of the quarter. The number of points will be determined at the end of the quarter.
    see_me_survey_url: "https://forms.gle/vjdDM8Y7xMDS1LkFA"
    visual: |
      **Visual Opportunity.** There is a picture in the picture frame. During learning hours, I will randomly display the picture frame two days each week. If you see it, take a picture and complete the survey. I will award the extra-credit points at the end of the quarter. The number of points will be determined at the end of the quarter.
    visual_survey_url: "https://forms.gle/q3qj1nvDTBWgdK6B8"
  trips_events: ""          # course-related trips / special events, or "None planned"
  incentives: ""            # stickers or other course incentives, or "None"
  drc: |
    # (paragraph) Cal Poly Disability Resource Center (DRC) accommodations statement
  changes: |
    The instructor reserves the right to adjust the schedule, assignments, and policies as needed;
    any changes will be announced in class and posted on the course site. This syllabus is the
    authoritative version of the course design.
`;
