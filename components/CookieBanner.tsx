'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/lib/cn';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type Consent = {
  necessary: true;
  performance: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
};

function readConsentCookie(): Consent | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    const value = decodeURIComponent(match.split('=').slice(1).join('='));
    const parsed = JSON.parse(value) as Consent;
    if (parsed && parsed.necessary === true) return parsed;
    return null;
  } catch {
    return null;
  }
}

function writeConsentCookie(consent: Consent) {
  if (typeof document === 'undefined') return;
  const value = encodeURIComponent(JSON.stringify(consent));
  const isHttps =
    typeof window !== 'undefined' && window.location.protocol === 'https:';
  document.cookie = [
    `${COOKIE_NAME}=${value}`,
    'Path=/',
    `Max-Age=${COOKIE_MAX_AGE_SECONDS}`,
    'SameSite=Lax',
    isHttps ? 'Secure' : ''
  ]
    .filter(Boolean)
    .join('; ');
}

export function CookieBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({
    performance: false,
    functional: false,
    marketing: false
  });

  useEffect(() => {
    setHydrated(true);
    const existing = readConsentCookie();
    if (!existing) setVisible(true);
  }, []);

  if (!hydrated || !visible) return null;

  const save = (consent: Omit<Consent, 'necessary' | 'timestamp'>) => {
    const payload: Consent = {
      necessary: true,
      performance: consent.performance,
      functional: consent.functional,
      marketing: consent.marketing,
      timestamp: new Date().toISOString()
    };
    writeConsentCookie(payload);
    setVisible(false);
    setShowCustomize(false);
  };

  const acceptAll = () =>
    save({ performance: true, functional: true, marketing: true });
  const rejectNonEssential = () =>
    save({ performance: false, functional: false, marketing: false });
  const saveCustom = () => save(prefs);

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(10,37,64,0.08)]"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5">
          <p className="text-sm leading-relaxed text-slate-700 lg:max-w-3xl">
            We use cookies to enhance your experience and analyze site
            performance. See our{' '}
            <Link
              href="/cookie-policy"
              className="font-medium text-teal-700 underline-offset-2 hover:underline"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={() => setShowCustomize(true)}
              className="text-sm font-medium text-navy-800 underline-offset-2 hover:underline"
            >
              Customize
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-navy-800 transition-colors hover:bg-slate-50"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-4 text-sm font-medium text-navy-900 transition-colors hover:bg-teal-400"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {showCustomize && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-prefs-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-navy-900/50"
            onClick={() => setShowCustomize(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-card">
            <button
              type="button"
              onClick={() => setShowCustomize(false)}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-navy-900"
            >
              <X size={18} strokeWidth={2} />
            </button>
            <h2
              id="cookie-prefs-title"
              className="text-xl font-semibold text-navy-900"
            >
              Cookie Preferences
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Choose which categories of cookies you allow. You can change
              this at any time.
            </p>

            <ul className="mt-5 space-y-4">
              <ToggleRow
                label="Strictly Necessary"
                description="Required for core site functions. Always on."
                checked
                disabled
              />
              <ToggleRow
                label="Performance / Analytics"
                description="Aggregate analytics that help us improve the site."
                checked={prefs.performance}
                onChange={(v) => setPrefs((p) => ({ ...p, performance: v }))}
              />
              <ToggleRow
                label="Functional"
                description="Remember choices like language and region."
                checked={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
              <ToggleRow
                label="Marketing"
                description="Used to deliver advertising relevant to you."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </ul>

            <button
              type="button"
              onClick={saveCustom}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-teal-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-teal-400"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  disabled,
  onChange
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
}) {
  return (
    <li className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-navy-900">{label}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {description}
          {disabled && (
            <span className="ml-1 italic text-slate-500">(always on)</span>
          )}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 flex-none items-center rounded-full transition-colors',
          checked ? 'bg-teal-500' : 'bg-slate-300',
          disabled && 'cursor-not-allowed opacity-60'
        )}
      >
        <span
          aria-hidden
          className={cn(
            'inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform',
            checked ? 'translate-x-5' : 'translate-x-0.5'
          )}
        />
      </button>
    </li>
  );
}
