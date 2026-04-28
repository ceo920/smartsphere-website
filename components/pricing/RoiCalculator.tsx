'use client';

import { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';

type SuggestedPlan = {
  name: string;
  price: string;
  reason: string;
};

function formatCurrency(value: number) {
  if (!Number.isFinite(value) || value <= 0) return '$0';
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
}

function suggestPlan(callsAutomated: number): SuggestedPlan {
  if (callsAutomated <= 1000)
    return {
      name: 'Starter',
      price: '$300/mo',
      reason: 'Right-sized for low-volume teams piloting automation.'
    };
  if (callsAutomated <= 4000)
    return {
      name: 'Pro',
      price: '$750/mo',
      reason: 'Multi-channel agents with priority support — your sweet spot.'
    };
  if (callsAutomated <= 12000)
    return {
      name: 'Growth',
      price: '$1,800/mo',
      reason: 'Unlimited agents, dedicated CSM, and custom REST API.'
    };
  return {
    name: 'Enterprise',
    price: 'Custom',
    reason: 'Volume warrants a custom contract — talk to sales for usage rates.'
  };
}

export function RoiCalculator() {
  const [calls, setCalls] = useState<number>(2000);
  const [costPerCall, setCostPerCall] = useState<number>(6);
  const [automationPct, setAutomationPct] = useState<number>(60);

  const result = useMemo(() => {
    const automatedCalls = Math.round((calls * automationPct) / 100);
    const grossSavings = automatedCalls * costPerCall;
    const suggested = suggestPlan(automatedCalls);
    return {
      automatedCalls,
      grossSavings,
      suggested
    };
  }, [calls, costPerCall, automationPct]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-10">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600"
        >
          <Calculator size={20} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-navy-900">
            ROI calculator
          </h3>
          <p className="text-sm text-slate-600">
            Estimate monthly savings from automating your conversations.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-navy-900">
              Current monthly call/chat volume
            </span>
            <input
              type="number"
              min={0}
              value={calls}
              onChange={(e) => setCalls(Number(e.target.value) || 0)}
              className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-navy-900">
              Current cost per call (USD)
            </span>
            <input
              type="number"
              min={0}
              step="0.5"
              value={costPerCall}
              onChange={(e) => setCostPerCall(Number(e.target.value) || 0)}
              className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <span className="mt-1 block text-xs text-slate-500">
              Fully-loaded — agent salary, tooling, supervision, queue cost.
            </span>
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-sm font-medium text-navy-900">
              <span>Expected automation</span>
              <span className="font-semibold text-teal-700">
                {automationPct}%
              </span>
            </span>
            <input
              type="range"
              min={10}
              max={90}
              step={5}
              value={automationPct}
              onChange={(e) => setAutomationPct(Number(e.target.value))}
              className="mt-2 w-full accent-teal-500"
            />
            <span className="mt-1 block text-xs text-slate-500">
              Most teams see 50–75% of tier-1 conversations resolved by AI.
            </span>
          </label>
        </div>

        <div className="rounded-xl bg-navy-900 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-100">
            Estimated impact
          </p>
          <p className="mt-3 text-sm text-navy-100">
            Conversations automated / month
          </p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">
            {result.automatedCalls.toLocaleString('en-US')}
          </p>

          <p className="mt-6 text-sm text-navy-100">Estimated monthly savings</p>
          <p className="mt-1 text-4xl font-semibold tracking-tight text-teal-300">
            {formatCurrency(result.grossSavings)}
          </p>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-200">
              Suggested plan
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {result.suggested.name} · {result.suggested.price}
            </p>
            <p className="mt-2 text-sm text-navy-100">
              {result.suggested.reason}
            </p>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-navy-200">
            This is a directional estimate. Actual savings depend on resolution
            rate, escalation cost, and channel mix.
          </p>
        </div>
      </div>
    </div>
  );
}
