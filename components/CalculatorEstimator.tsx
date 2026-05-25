// input: reported calculator inputs from the player
// output: client-side conservative estimate with explicit pending verification label
// pos: calculator estimator component

"use client";

import { useMemo, useState } from "react";

function parsePositiveNumber(value: string, fallback: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return fallback;
  return parsed;
}

function formatEstimate(value: number): string {
  if (!Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}

export default function CalculatorEstimator() {
  const [plantCount, setPlantCount] = useState("10");
  const [baseValue, setBaseValue] = useState("100");
  const [mutationMultiplier, setMutationMultiplier] = useState("1");
  const [ringMultiplier, setRingMultiplier] = useState("1");

  const estimate = useMemo(() => {
    const plants = parsePositiveNumber(plantCount, 0);
    const base = parsePositiveNumber(baseValue, 0);
    const mutation = parsePositiveNumber(mutationMultiplier, 1);
    const ring = parsePositiveNumber(ringMultiplier, 1);
    return plants * base * mutation * ring;
  }, [plantCount, baseValue, mutationMultiplier, ringMultiplier]);

  return (
    <section className="guide-card data-card" aria-label="Build A Ring Farm conservative calculator">
      <span className="card-rule" />
      <p className="eyebrow">Working estimate</p>
      <h2>Conservative profit estimator</h2>
      <p>Enter your own values from the game. The result is an estimate only, not a verified official value.</p>
      <div className="data-list">
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Plant count</strong></div>
          <div><span>Use</span><strong>How many crops you plan to sell</strong></div>
          <div><span>Value</span><input aria-label="Plant count" inputMode="decimal" value={plantCount} onChange={(event) => setPlantCount(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Base value</strong></div>
          <div><span>Use</span><strong>Your observed value per crop</strong></div>
          <div><span>Value</span><input aria-label="Base value" inputMode="decimal" value={baseValue} onChange={(event) => setBaseValue(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Mutation multiplier</strong></div>
          <div><span>Use</span><strong>Use 1 if no mutation is verified</strong></div>
          <div><span>Value</span><input aria-label="Mutation multiplier" inputMode="decimal" value={mutationMultiplier} onChange={(event) => setMutationMultiplier(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Ring multiplier</strong></div>
          <div><span>Use</span><strong>Use 1 if ring value is pending</strong></div>
          <div><span>Value</span><input aria-label="Ring multiplier" inputMode="decimal" value={ringMultiplier} onChange={(event) => setRingMultiplier(event.target.value)} /></div>
        </label>
        <div className="data-row three-field-row">
          <div><span>Result</span><strong>{formatEstimate(estimate)}</strong></div>
          <div><span>Status</span><strong>Reported estimate, pending verification</strong></div>
          <div><span>Formula</span><strong>plants × base × mutation × ring</strong></div>
        </div>
      </div>
    </section>
  );
}
