# PDF Export Instructions

## Browser Print Settings (IMPORTANT!)

To properly export your resume as a 2-page PDF without browser headers/footers, follow these steps:

### Chrome/Edge:
1. Click the "Download PDF" button (or press `Ctrl+P` / `Cmd+P`)
2. In the print dialog:
   - **Destination**: Save as PDF
   - **Pages**: All
   - **Layout**: Portrait
   - **Paper size**: Letter (8.5" x 11")
   - **Margins**: Default or Custom (0.35" top/bottom, 0.45" left/right)
   - **Scale**: 100%
   - **More settings**:
     - ✅ Background graphics: **ON** (CRITICAL!)
     - ❌ Headers and footers: **OFF** (CRITICAL!)
     - Print using system dialog: Optional (for more control)

### Firefox:
1. Click the "Download PDF" button (or press `Ctrl+P` / `Cmd+P`)
2. In the print dialog:
   - **Destination**: Save to PDF
   - **Orientation**: Portrait
   - **Page size**: Letter
   - **Margins**: Default or Custom (0.35" top/bottom, 0.45" left/right)
   - **Options**:
     - ✅ Print backgrounds: **ON** (CRITICAL!)
     - ❌ Headers and footers: **OFF** (CRITICAL!)

### Safari (macOS):
1. Click the "Download PDF" button (or press `Cmd+P`)
2. In the print dialog, click "Show Details"
3. Settings:
   - **Printer**: Save as PDF
   - **Paper Size**: US Letter
   - **Orientation**: Portrait
   - **Scale**: 100%
   - Uncheck "Print headers and footers"
   - Safari menu → Preferences → check "Print backgrounds"

## What Changed

### Print Optimizations Made:
1. ✅ Removed browser headers/footers (date, URL, page numbers)
2. ✅ Fixed dark theme → white background for print
3. ✅ Optimized spacing to fit 2 pages
4. ✅ Hid the footer section (redundant contact info)
5. ✅ Hid all buttons in print view
6. ✅ Made text and spacing more compact
7. ✅ Fixed colors for print (black text, proper contrast)
8. ✅ Ensured cards don't break across pages
9. ✅ Single-column layout for projects/skills in print
10. ✅ Reduced margins and padding throughout

### Key Print CSS Features:
- `@page` directive controls margins
- `-webkit-print-color-adjust: exact` preserves colors
- `page-break-inside: avoid` prevents card splitting
- Aggressive spacing reductions (`16px` instead of `48-64px`)
- Typography size adjustments for print legibility
- Footer completely hidden in print

## Troubleshooting

**If the PDF is still more than 2 pages:**
- Check that "Scale" is set to 100% (not "Fit to page")
- Ensure margins are set correctly (see above)
- Try reducing @page margin values in `App.css` if needed

**If you see date/URL/page numbers:**
- MAKE SURE "Headers and footers" is turned OFF
- In Chrome: More settings → Headers and footers: OFF
- This is the most common issue!

**If background colors are missing:**
- MAKE SURE "Background graphics" is turned ON
- In Chrome: More settings → Background graphics: ON
- Without this, borders and subtle backgrounds won't print

**If text is hard to read:**
- The CSS automatically converts to black text on white
- Chips and tags get light gray backgrounds
- Links become purple/blue for clarity

## Testing

1. Open the resume site in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Verify settings match above
4. Click "Print" to generate PDF
5. Review the PDF - should be exactly 2 pages

## Manual Adjustments (if needed)

If you need to make the resume even more compact:

1. Edit `frontend/src/App.css` and find the `@media print` section
2. Reduce the `@page` margins:
   ```css
   @page {
     margin: 0.25in 0.4in; /* Make these smaller */
   }
   ```
3. Reduce font sizes further in the print section
4. Adjust grid gaps and spacing values

The current configuration should fit comfortably on 2 pages with standard letter size paper.
