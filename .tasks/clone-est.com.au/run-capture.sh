#!/bin/bash
# Screenshot Capture Runner for est.com.au (4 pages)
# Captures: About, Team, Services, Blog
set -e

TASK_DIR="/Users/justinimanuelle/est-clone/.tasks/clone-est.com.au"
SCREENSHOT_DIR="${TASK_DIR}/screenshots"

mkdir -p "${SCREENSHOT_DIR}/about"
mkdir -p "${SCREENSHOT_DIR}/team"
mkdir -p "${SCREENSHOT_DIR}/services"
mkdir -p "${SCREENSHOT_DIR}/blog"

cd "${TASK_DIR}"

echo "=== EST.com.au Screenshot Capture (4 Pages) ==="
echo ""

# Check if playwright is available, install if needed
if ! npx playwright --version 2>/dev/null; then
  echo "[1/3] Installing Playwright..."
  npm install playwright 2>/dev/null
  npx playwright install chromium
else
  echo "[1/3] Playwright already installed"
fi

# Ensure Chromium browser is installed
echo "[2/3] Ensuring Chromium browser is available..."
npx playwright install chromium 2>/dev/null || true

# Run the comprehensive capture script
echo "[3/3] Running screenshot capture for all 4 pages..."
echo ""
node capture-all-pages.mjs

echo ""
echo "=== Capture Complete ==="
echo ""
echo "Screenshots saved to:"
echo "  - ${SCREENSHOT_DIR}/about/"
echo "  - ${SCREENSHOT_DIR}/team/"
echo "  - ${SCREENSHOT_DIR}/services/"
echo "  - ${SCREENSHOT_DIR}/blog/"
echo ""
echo "Capture results: ${TASK_DIR}/capture-results.json"
echo ""
echo "Context files:"
echo "  - ${TASK_DIR}/about-context.md"
echo "  - ${TASK_DIR}/team-context.md"
echo "  - ${TASK_DIR}/services-context.md"
echo "  - ${TASK_DIR}/blog-context.md"
