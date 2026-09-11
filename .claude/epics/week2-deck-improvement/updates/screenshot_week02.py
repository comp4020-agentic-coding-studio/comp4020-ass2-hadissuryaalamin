import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1]
out = sys.argv[2]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    errors = []
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
    resp = page.goto(url, wait_until="networkidle")
    print(f"status: {resp.status if resp else 'no response'}")
    page.wait_for_timeout(500)
    page.screenshot(path=out, full_page=True)
    print(f"screenshot saved to {out}")
    if errors:
        print("PAGE ERRORS:")
        for e in errors:
            print(" -", e)
    browser.close()
