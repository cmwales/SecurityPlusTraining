"""Regenerates questions-data.js, flashcards-data.js, and acronyms-data.js from their JSON sources.

Run this any time Questions.json, Flashcards.json, or Acronyms.json is edited:
    python build_data.py

The quiz app loads the generated .js files directly (plain <script> tags) instead
of fetching the JSON via AJAX, so the app works by just double-clicking
index.html - no local web server required (browsers block fetch() of local
files opened via file://).
"""
import json


def write_js(src, dest, var_name):
    with open(src, encoding="utf-8") as f:
        data = json.load(f)
    with open(dest, "w", encoding="utf-8") as f:
        f.write(f"// AUTO-GENERATED from {src} by build_data.py - do not edit directly\n")
        f.write(f"window.{var_name} = ")
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write(";\n")
    return data


quiz = write_js("Questions.json", "questions-data.js", "QUIZ_DATA")
total = sum(len(v["questions"]) + len(v.get("bonusQuestions", [])) for v in quiz.values())
print(f"Wrote questions-data.js: {len(quiz)} sections, {total} questions.")

cards = write_js("Flashcards.json", "flashcards-data.js", "FLASHCARD_DATA")
total = sum(len(v["cards"]) for v in cards.values())
print(f"Wrote flashcards-data.js: {len(cards)} sections, {total} cards.")

acr = write_js("Acronyms.json", "acronyms-data.js", "ACRONYM_DATA")
total = sum(len(v["cards"]) for v in acr.values())
print(f"Wrote acronyms-data.js: {len(acr)} sections, {total} acronyms.")
