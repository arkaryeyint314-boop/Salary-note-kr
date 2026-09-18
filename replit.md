# Project Instructions

## Change Scope

- Continue working only inside this project until it is finished. Do not move the work to another project or make unrelated changes elsewhere.

## Approval Before Improvements

- If a potentially better idea, redesign, feature, or approach comes up, explain it to the user first and wait for the user's approval before implementing it.
- Do not apply unrequested improvements silently.

# Salary-note-kr Project Rules

## Working rules

- Keep all changes inside the current Salary-note-kr project until the project is finished.
- Make code changes in the current project only, on the `main` branch.
- Do not add redesigns, new features, or alternative approaches silently. Explain a better idea first and wait for the user's approval before implementing it.
- Preserve the existing English, Korean, and Myanmar language support.
- Treat payroll calculations as factory-specific unless a rule has been confirmed from the user's payslips and work records.

## Confirmed factory schedule

- Regular day shift: 08:30–17:30, meal break 12:30–13:30; 8 paid hours.
- `3OT`: regular day shift followed by a 17:30–18:00 meal break and OT from 18:00–21:00; 3 OT hours.
- Regular night shift (`Ngt`): 20:30–08:30, break 00:30–01:30; 11 paid hours.
- `토 08:30–17:30`: Saturday/public-holiday day shift, with a one-hour break.
- `야 17:30–01:30`: special night shift; the user reported no break, so it is 8 elapsed/paid hours unless a later record proves otherwise.
- January 24 partial shift: 20:30–01:50, no break; 5 hours 20 minutes paid time and 3 hours 50 minutes overlapping the 22:00–06:00 night window. Treat it as a Saturday partial-night shift, not a full `Ngt`.

## Confirmed payroll interpretation

- The payslip's `식대` KRW 200,000 is not a separate meal allowance for this factory. The user says it is part of overtime pay separated under the `식대` label. For actual extra pay, use:

  `actual extra pay = 식대 + 연장근로`

- Cross-month payslip comparisons previously inferred these user-entered extra-pay amounts:
  - Full regular `Ngt`: approximately KRW 85,140 per shift.
  - `야 17:30–01:30` and `토 08:30–17:30`: approximately KRW 123,840 per shift.
- These amounts are reconstructed from aggregate monthly payslips, not yet a confirmed payroll formula. Keep them as User Manual data unless the user confirms them from a factory source or payslip.
- The exact `3OT` amount and partial-night formula are not final. Do not force a formula when the payslip aggregates multiple shift types.
- Never count the `식대` amount twice as both meal allowance and overtime.
- Compare gross payroll amounts with gross amounts, and take-home/bank amounts with take-home amounts.

## Product direction

- The app is for the user and other foreign workers in Korea to record shifts, calculate expected pay, compare payslips, and identify unexplained differences.
- Other factories must be able to create or select their own factory rule template instead of inheriting this factory's rates.
- A factory template should eventually store shift names, start/end times, break rules, weekday/weekend/holiday status, night window, overtime threshold, premium rates, and payroll-label adjustments.
- Verified-by-contract data and User Manual data must be shown separately. “Verified by contract” means supported by the user's contract or payroll evidence; it is not a legal-compliance determination.

## Implemented shift-template behavior

- Shift templates are stored in `workpay_shift_templates` and always use the standard hourly formula based on their saved times and factory rates. Fixed extra pay is intentionally not supported because it can duplicate OT, night, or holiday premiums.
- Templates are applied by inclusive date range plus selected weekdays.
- Apply Shift uses touch-friendly weekday buttons with Select all and Clear controls. The same template, date range, and weekday selection can bulk-remove previously applied template entries; manual entries and dates from other templates are preserved.
- Existing calendar entries are preserved by default. Replacement requires an explicit checkbox and confirmation preview; unknown entry fields and an existing note are retained when the template has no note.
- Applied entries copy template times and break rules into each date so later template edits do not retroactively change prior calendar months.
- A manual day save intentionally detaches that date from its template and returns it to the standard hourly formula.
- Night hours use the 22:00–06:00 window, support overnight and early-morning shifts, and subtract a break when its start time is known.
- Overnight weekend/public-holiday attribution follows the shift's start date. A Friday night shift ending Saturday morning remains Friday work and gets no automatic Saturday holiday hours. A shift starting Saturday/public holiday, or explicitly saved with Holiday / Weekend type, is holiday work. Holiday pay remains capped to the configured regular-hours-per-day limit until the factory-specific holiday-OT policy is confirmed.
- Explicit Salary Calculator runs save one versioned snapshot per month in `workpay_salary_history_v1`, including wage inputs, copied rules, copied calendar entries, summary, and salary breakdown.
- Factory pay rules and shift-template pay data carry an internal `confirmed` or `manual` source. The UI labels these “Verified by contract” and “User Manual”; legacy `provisional` and missing statuses migrate to User Manual.
- Users can promote User Manual data to Verified by contract after checking a contract or payroll evidence; the note field records context. This label does not itself certify legal compliance.
- Calculator totals include both sources and display Verified by contract and User Manual subtotals separately. Applied calendar entries copy the source, so changing a template later does not retroactively relabel historical dates.
- Profile intentionally omits the old Appearance and Work Profile cards. Language, factory pay rules, and shift templates remain.
- The Calendar day popup has separate Manual and Template modes. Manual mode lets the user choose Day/Night/Holiday/Off and enter times directly, while Template mode shows only shift-template names created in Profile. Selecting a template name fills that date's shift type, times, break, note, and rule status before saving. Both modes use the same hourly formula.
- Salary Calculator no longer has a separate Meal Allowance input; factory-specific additions or deductions belong in Factory Pay Rules, preventing `식대` from being counted twice.
- Pay Formula Settings start with Korea defaults (8 regular hours, OT 1.5×, night extra 0.5×, holiday 1.5×) and can be edited per browser/factory. Shift Templates determine whether a factory-specific shift, such as Saturday 17:30–01:30, is treated as Holiday / Weekend.
- Pay Formula Settings have separate Verified by contract and User Manual profiles. A Shift Template's Pay Data Source selects which profile calculates its saved calendar entries and its OT, night, and holiday premiums. Existing single-profile settings migrate to User Manual so custom factory values are preserved.
- Profile includes user-customizable Day, Night, Holiday Work, and Off Day colors. The selected colors persist in the browser and update calendar cells, the calendar legend, and manual shift buttons without changing saved shift or payroll data.
- Salary Calculator accepts an optional Contract Monthly Basic Salary and saves it locally. When present, gross salary uses that fixed monthly amount as Basic Pay instead of `calendar basic hours × hourly wage`; hourly wage and calendar hours remain the basis for OT, night, and holiday premiums. When absent, the prior hourly-calendar calculation remains as a fallback for hourly workers.
- The Calculation Breakdown below Calculate Salary shows the active method and each amount used in Gross Total. Monthly Contract mode shows Contract Monthly Basic Salary and hides Basic Hours Pay; hourly-calendar mode does the opposite. OT, night, holiday, and any non-zero factory adjustment remain visible with their hours/rates and amounts.