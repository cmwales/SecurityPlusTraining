"""Regenerates questions-data.js from Questions.json.

Run this any time Questions.json is edited:
    python build_data.py

The quiz app loads questions-data.js directly (a plain <script> tag) instead of
fetching Questions.json via AJAX, so the app works by just double-clicking
index.html - no local web server required (browsers block fetch() of local
files opened via file://).
"""
import json

with open("Questions.json", encoding="utf-8") as f:
    data = json.load(f)

with open("questions-data.js", "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED from Questions.json by build_data.py - do not edit directly\n")
    f.write("window.QUIZ_DATA = ")
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(";\n")

total = sum(len(v["questions"]) + len(v.get("bonusQuestions", [])) for v in data.values())
print(f"Wrote questions-data.js: {len(data)} sections, {total} questions.")
