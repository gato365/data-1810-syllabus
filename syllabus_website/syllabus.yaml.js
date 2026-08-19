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
      Each exam combines Canvas questions with paper-and-pencil questions. Approximately 10%–25% of the questions will be completed through Canvas, and the remaining 75%–90% will be completed using paper and pencil. You are responsible for bringing any required materials and arriving prepared to complete both portions.
    materials_allowed: |
      **Midterm exams:** You may prepare one standard 8.5 × 11-inch reference sheet using one side only.

      **Final exam:** You may prepare one standard 8.5 × 11-inch reference sheet using both the front and back.

      Reference sheets must be prepared before the exam. No additional notes, reference materials, or unauthorized resources may be used.
    makeup: |
      Exam dates are firm, and extensions will not be granted. Review the exam schedule at the beginning of the semester and plan accordingly.

      If a known academic, religious, athletic, professional, or personal obligation will prevent you from taking an exam as scheduled, notify the instructor at least two weeks in advance.

      For an unexpected illness or emergency, contact the instructor as soon as possible—preferably the day before the exam, but no later than the day of the exam—and briefly explain the situation. Missed exams caused by documented illnesses or emergencies will be handled individually under course and university policies. Notification does not automatically guarantee an alternative exam arrangement.
  checkins:
    description: |
      Check-ins are completed during class and may occur at any point during a class meeting. You must be present and participating when the check-in is administered to receive credit.

      **Self check-ins** are completed independently and assess your understanding of the course material. **Collaborative check-ins** are completed with assigned classmates and assess communication, problem-solving, and collaboration.
    submission: "Completed during class; you must be present and participating when the check-in is administered."
    missed: "Four scores are dropped automatically: two self check-ins and two collaborative check-ins. These drops account for occasional absences, illnesses, emergencies, or missed classes. Because four scores are already dropped, additional make-ups or extensions generally will not be provided."
  labs:
    description: |
      Labs give you opportunities to practice and apply skills introduced in class. Complete the required work in your own Quarto (.qmd) file and retain that file as a record of your work.
    due: "Assigned each Wednesday and due the following Wednesday at 11:59 PM (one week later)."
    submission: "Submit the answers used for grading through Canvas by the stated deadline. A completed Quarto (.qmd) file does not replace the required Canvas submission. You are responsible for confirming that Canvas received your answers successfully."
    late_policy: "Late submissions and extensions ordinarily will not be accepted. An extension may be considered only under extreme circumstances. To request consideration, email the instructor at least one full day before the deadline. Sending a request does not guarantee approval."
  drills:
    description: |
      Each drill requires a good-faith attempt at all 40 assigned questions before the stated deadline. Begin early and distribute your practice throughout the week. Drill extensions will not be granted.
    deadline: "Every Sunday at 11:59 PM."
    grading: "Credit is based on completion, participation, and time spent practicing—not solely on correctness. A question counts as completed when a reasonable attempt has been submitted. If question completion and practice time fall into different engagement levels, the lower level determines the credit awarded."

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
    Attendance is required because each class meeting includes important instruction, practice, and in-class assessment activities. Check-ins may occur at any point during class and must be completed in class. There are two types: self check-ins and collaborative check-ins.

    The four lowest check-in scores will be dropped—two self check-ins and two collaborative check-ins. These drops account for occasional absences, illnesses, emergencies, or other unavoidable conflicts. You may miss up to four check-ins without a direct effect on your check-in grade, provided the missed check-ins remain within the two-drop limit for each type. Missing additional check-ins may lower your grade. Check-ins generally cannot be completed outside class or made up.
  late_work: |
    Labs must be submitted through Canvas by the stated deadlines. Complete your work in an individual Quarto (.qmd) file, but submit the answers used for grading through Canvas. Maintaining a completed .qmd file does not replace the required Canvas submission.

    Late labs and extensions will be considered only under extreme circumstances. If you need an extension, email the instructor at least one full day before the deadline whenever possible and briefly explain the circumstances. A request does not guarantee approval. Requests made after the deadline generally will not be accepted unless an unexpected emergency made advance communication impossible.
  missed_exams: |
    Exam dates are firm. If a known event, obligation, or conflict will prevent you from taking an exam as scheduled, notify the instructor at least two weeks in advance.

    If you become sick or experience an unexpected emergency, contact the instructor as soon as possible—preferably the day before the exam, but no later than the day of the exam. Missed exams will be addressed individually according to the circumstances and applicable university policies. Notification does not automatically guarantee an alternative exam arrangement.
  ai_labs: "AI tools may be used to support learning and problem-solving. You remain responsible for understanding, reviewing, and being able to explain everything you submit."
  ai_checkins: "AI tools are not permitted."
  ai_drills: "AI tools are not permitted."
  ai_exams: "AI tools are not permitted."
  ai_statement: |
    Using AI on an activity for which it is prohibited will be treated as an academic-integrity concern. Ask the instructor before using an AI tool if you are uncertain whether its use is permitted.
  academic_integrity: |
    Academic integrity is essential to both individual learning and the trust of our classroom community. You must submit your own work, avoid copying or looking at another student’s work during individual activities, and use artificial intelligence only when it is expressly permitted. Receiving unauthorized assistance may produce an answer, but it prevents you from developing the reasoning, technical skills, and judgment that this course is designed to cultivate.

    Adhering to these expectations supports your growth as a student and as a future statistician, data scientist, or other data-informed professional. All suspected academic-integrity violations will be addressed according to course and university policies.
  dei: |
    I am committed to creating a learning environment that is respectful, inclusive, and equitable for students with different identities, backgrounds, experiences, and perspectives. I will continue working to ensure that course materials, examples, activities, and classroom practices represent a range of experiences and provide meaningful opportunities for all students to participate and learn.

    Data science is not separate from questions of ethics, equity, and social responsibility. Throughout the course, we will consider how data are collected, represented, analyzed, and communicated, as well as how these decisions may affect different individuals and communities. You are expected to engage with these discussions thoughtfully and respectfully.
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
    Students who need disability-related accommodations should contact Cal Poly’s Disability Resource Center (DRC) and provide the appropriate accommodation information to the instructor as early as possible. I will work with the student and the DRC to implement approved accommodations while maintaining the course’s learning objectives. Students are encouraged to communicate early so accommodations can be arranged before an assignment, check-in, or exam.

    It is University policy to provide, on a flexible and individualized basis, reasonable accommodations to students who have disabilities that may affect their ability to participate in course activities or meet course requirements. If you have a disability for which you are or may be requesting an accommodation, contact both your instructor and the Disability Resource Center, Building 124, Room 119, at (805) 756-1395 as early as possible in the term. Use of DRC services, including testing accommodations, requires prior authorization by the DRC and compliance with approved procedures.
  changes: |
    The instructor reserves the right to adjust the schedule, assignments, and policies as needed;
    any changes will be announced in class and posted on the course site. This syllabus is the
    authoritative version of the course design.
`;
