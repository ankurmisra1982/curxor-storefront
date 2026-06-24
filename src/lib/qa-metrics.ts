/** Matches curxor-os qa-smoke.mjs + qa-user-flows.mjs — update when suites grow. */
export const qaMetrics = {
  smokeChecks: 180,
  userFlowChecks: 40,
} as const;

export const qaMetricsLine = `${qaMetrics.smokeChecks} smoke + ${qaMetrics.userFlowChecks} user-flow QA checks`;
