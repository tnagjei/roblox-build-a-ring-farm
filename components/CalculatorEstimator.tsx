"use client";

// input: reported calculator inputs from the player
// output: client-side reported value estimator with explicit source status labels
// pos: calculator estimator component（更新规则：文件变更需同步本注释与所属目录 README）

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
  const [fertilizerMultiplier, setFertilizerMultiplier] = useState("1");
  const [runCount, setRunCount] = useState("1");

  const estimates = useMemo(() => {
    const plants = parsePositiveNumber(plantCount, 0);
    const base = parsePositiveNumber(baseValue, 0);
    const mutation = parsePositiveNumber(mutationMultiplier, 1);
    const ring = parsePositiveNumber(ringMultiplier, 1);
    const fertilizer = parsePositiveNumber(fertilizerMultiplier, 1);
    const runs = parsePositiveNumber(runCount, 1);
    const perHarvest = plants * base * mutation * ring * fertilizer;

    return {
      perPlant: base * mutation * ring * fertilizer,
      perHarvest,
      sessionTotal: perHarvest * runs,
      plants,
      runs
    };
  }, [plantCount, baseValue, mutationMultiplier, ringMultiplier, fertilizerMultiplier, runCount]);

  return (
    <section className="guide-card data-card" aria-label="Build A Ring Farm reported value estimator">
      <span className="card-rule" />
      <p className="eyebrow">Working estimate</p>
      <h2>Reported value estimator</h2>
      <p>Enter values you can see or clearly label as reported. The output is a planning estimate only, not an official number.</p>
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
          <div><span>Use</span><strong>Use 1 when mutation value is unknown</strong></div>
          <div><span>Value</span><input aria-label="Mutation multiplier" inputMode="decimal" value={mutationMultiplier} onChange={(event) => setMutationMultiplier(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Ring multiplier</strong></div>
          <div><span>Use</span><strong>Use 1 if ring value is pending</strong></div>
          <div><span>Value</span><input aria-label="Ring multiplier" inputMode="decimal" value={ringMultiplier} onChange={(event) => setRingMultiplier(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Fertilizer multiplier</strong></div>
          <div><span>Use</span><strong>Use 1 if fertilizer effect is pending</strong></div>
          <div><span>Value</span><input aria-label="Fertilizer multiplier" inputMode="decimal" value={fertilizerMultiplier} onChange={(event) => setFertilizerMultiplier(event.target.value)} /></div>
        </label>
        <label className="data-row three-field-row">
          <div><span>Input</span><strong>Run count</strong></div>
          <div><span>Use</span><strong>How many similar harvests to compare</strong></div>
          <div><span>Value</span><input aria-label="Run count" inputMode="numeric" value={runCount} onChange={(event) => setRunCount(event.target.value)} /></div>
        </label>
        <div className="data-row four-field-row">
          <div><span>Output</span><strong>{formatEstimate(estimates.perPlant)}</strong></div>
          <div><span>Meaning</span><strong>Estimated value per plant</strong></div>
          <div><span>Source status</span><strong>Player-entered or reported inputs</strong></div>
          <div><span>Use</span><strong>Compare one crop choice</strong></div>
        </div>
        <div className="data-row four-field-row">
          <div><span>Output</span><strong>{formatEstimate(estimates.perHarvest)}</strong></div>
          <div><span>Meaning</span><strong>Estimated harvest value</strong></div>
          <div><span>Plant count</span><strong>{formatEstimate(estimates.plants)}</strong></div>
          <div><span>Status</span><strong>Reported estimate</strong></div>
        </div>
        <div className="data-row three-field-row">
          <div><span>Output</span><strong>{formatEstimate(estimates.sessionTotal)}</strong></div>
          <div><span>Run count</span><strong>{formatEstimate(estimates.runs)}</strong></div>
          <div><span>Method</span><strong>plants x base x mutation x ring x fertilizer x runs</strong></div>
        </div>
      </div>
      <p className="source-note">Recheck any result in the game before using it as page data. A screenshot, video, or official source is required before changing a reported value into stronger evidence.</p>
    </section>
  );
}
