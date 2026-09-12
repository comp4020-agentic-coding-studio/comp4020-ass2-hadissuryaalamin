import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1]
out = sys.argv[2]
slide_index = int(sys.argv[3]) if len(sys.argv) > 3 else 0

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    errors = []
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
    resp = page.goto(url, wait_until="networkidle")
    print(f"status: {resp.status if resp else 'no response'}")
    page.wait_for_timeout(500)
    for _ in range(slide_index):
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(200)
    bg = page.evaluate("""
        () => {
          const sections = Array.from(document.querySelectorAll('.reveal .slides > section'));
          const slide = sections.find(s => s.classList.contains('present')) || sections[0];
          const bgDiv = slide.querySelector('.slide-bg') || document.querySelector('.slide-bg');
          const text = slide.innerText.slice(0, 60);
          return {
            bg: bgDiv ? getComputedStyle(bgDiv).backgroundImage : null,
            text,
          };
        }
    """)
    print(f"slide text: {bg['text']!r}")
    print(f"computed background-image: {bg['bg']}")
    page.screenshot(path=out, full_page=True)
    print(f"screenshot saved to {out}")
    if errors:
        print("PAGE ERRORS:")
        for e in errors:
            print(" -", e)
    browser.close()
