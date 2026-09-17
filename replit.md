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

- Cross-month payslip comparisons currently infer these provisional extra-pay amounts:
  - Full regular `Ngt`: approximately KRW 85,140 per shift.
  - `야 17:30–01:30` and `토 08:30–17:30`: approximately KRW 123,840 per shift.
- These amounts are reconstructed from aggregate monthly payslips, not yet a confirmed payroll formula. Keep them labelled provisional in the app.
- The exact `3OT` amount and partial-night formula are not final. Do not force a formula when the payslip aggregates multiple shift types.
- Never count the `식대` amount twice as both meal allowance and overtime.
- Compare gross payroll amounts with gross amounts, and take-home/bank amounts with take-home amounts.

## Product direction

- The app is for the user and other foreign workers in Korea to record shifts, calculate expected pay, compare payslips, and identify unexplained differences.
- Other factories must be able to create or select their own factory rule template instead of inheriting this factory's rates.
- A factory template should eventually store shift names, start/end times, break rules, weekday/weekend/holiday status, night window, overtime threshold, premium rates, payroll-label adjustments such as `식대`, and whether a rule is confirmed or provisional.
- Actual pay and inferred pay must be shown separately. Do not present an inferred factory rule as a legal conclusion.

## Implemented shift-template behavior

- Shift templates are stored in `workpay_shift_templates` and can use either the standard hourly formula or a fixed amount explicitly defined as extra pay above basic hours.
- Templates are applied by inclusive date range plus selected weekdays.
- Existing calendar entries are preserved by default. Replacement requires an explicit checkbox and confirmation preview; unknown entry fields and an existing note are retained when the template has no note.
- Applied entries copy template times, break rules, pay mode, and fixed amount into each date so later template edits do not retroactively change prior calendar months.
- A manual day save intentionally detaches that date from its template and returns it to the standard hourly formula.
- Night hours use the 22:00–06:00 window, support overnight and early-morning shifts, and subtract a break when its start time is known.
- Overnight weekend/public-holiday attribution follows the actual calendar date of each worked segment. Holiday pay remains capped to the first eight hours for backward compatibility until the factory-specific holiday-OT policy is confirmed.
- Explicit Salary Calculator runs save one versioned snapshot per month in `workpay_salary_history_v1`, including wage inputs, copied rules, copied calendar entries, summary, and salary breakdown.
- Factory pay rules and shift-template pay rules carry a `confirmed` or `provisional` status. Missing legacy statuses default to provisional so old inferred values are never silently presented as confirmed.
- Users can edit a factory rule to promote it from provisional to confirmed after checking a payslip, contract, or factory explanation; an evidence/note field records the reason.
- Calculator totals include both statuses but display confirmed and provisional subtotals separately. Applied calendar entries copy the status, so changing a template later does not retroactively relabel historical dates.