import sys
import json
from playwright.sync_api import sync_playwright

url = sys.argv[1]
out_dir = sys.argv[2]
viewport_name = sys.argv[3]
width = int(sys.argv[4])
height = int(sys.argv[5])

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": width, "height": height})
    errors = []
    page.on("pageerror", lambda exc: errors.append(f"pageerror:{exc}"))
    page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
    resp = page.goto(url, wait_until="networkidle")
    print(f"status: {resp.status if resp else 'no response'}")
    page.wait_for_timeout(500)

    total = page.evaluate("() => document.querySelectorAll('.reveal .slides > section').length")
    print(f"total top-level sections: {total}")

    results = []
    for i in range(total):
        page.wait_for_timeout(150)
        info = page.evaluate("""
            () => {
              const sections = Array.from(document.querySelectorAll('.reveal .slides > section'));
              const idx = sections.findIndex(s => s.classList.contains('present'));
              const slide = sections[idx];
              const imgs = Array.from(slide.querySelectorAll('img')).map(img => ({
                src: img.currentSrc || img.src,
                alt: img.alt,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                complete: img.complete,
                rect: img.getBoundingClientRect(),
              }));
              const bgDiv = slide.querySelector('.slide-bg');
              const bg = bgDiv ? getComputedStyle(bgDiv).backgroundImage : null;
              // overlap heuristic: any two visible elements with identical/overlapping
              // bounding boxes beyond expected (skip - too noisy); instead check
              // scrollHeight vs clientHeight of the slide to catch overflow.
              const overflowing = slide.scrollHeight > slide.clientHeight + 2;
              return {
                idx, classes: slide.className, imgs, bg,
                scrollHeight: slide.scrollHeight, clientHeight: slide.clientHeight,
                overflowing,
                text: slide.innerText.slice(0, 80),
              };
            }
        """)
        shot_path = f"{out_dir}/{viewport_name}-slide-{i:02d}.png"
        page.screenshot(path=shot_path)
        info["screenshot"] = shot_path
        results.append(info)
        if i < total - 1:
            page.keyboard.press("ArrowRight")

    print(json.dumps(results, indent=2, default=str))
    if errors:
        print("PAGE ERRORS/CONSOLE ERRORS:")
        for e in errors:
            print(" -", e)
    else:
        print("No page/console errors observed.")
    browser.close()
