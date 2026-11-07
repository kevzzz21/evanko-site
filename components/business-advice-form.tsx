'use client';

import { FormEvent, useState } from 'react';
import { trackBusinessAdviceRequestSubmitted } from './google-ads-analytics';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function BusinessAdviceForm() {
  const [notice, setNotice] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const configured = Boolean(supabaseUrl && supabaseAnonKey);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!configured) {
      setNotice('This form is being connected to the Foundation’s secure inquiry system. Please email kyle@evanko.co in the meantime.');
      return;
    }
    const data = new FormData(form);
    setSubmitting(true);
    setNotice('');
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/business_advice_inquiries`, {
        method: 'POST',
        headers: {
          apikey: supabaseAnonKey!,
          Authorization: `Bearer ${supabaseAnonKey!}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          business_name: null,
          website: data.get('website') || null,
          industry: null,
          annual_revenue: data.get('annualRevenue') || null,
          challenge: data.get('challenge'),
          source: 'evanko.co/business-advice',
        }),
      });
      if (!response.ok) throw new Error('Submission failed');
      trackBusinessAdviceRequestSubmitted();
      form.reset();
      setNotice('Your request has been received! We will follow up within 48 hours.');
    } catch {
      setNotice('We could not send your request just now. Please try again or email kyle@evanko.co directly.');
    } finally {
      setSubmitting(false);
    }
  }

  const submitted = notice.includes('request has been received');

  return <form className="business-form" onSubmit={submit}>
    {submitted ? <p className="business-form__notice business-form__notice--success" role="status">{notice}</p> : null}
    <div className="business-form__four-up">
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email<input name="email" autoComplete="email" required /></label>
      <label><span className="business-form__label-text">Website <small>Optional</small></span><input name="website" placeholder="https://" /></label>
      <label><span className="business-form__label-text">Annual Revenue <small>Optional</small></span><select name="annualRevenue" defaultValue=""><option value="">Select a range</option><option>Pre-revenue</option><option>Under $100,000</option><option>$100,000–$500,000</option><option>$500,000–$1 million</option><option>Prefer not to say</option></select></label>
    </div>
    <label>What are the biggest challenges you’re facing?<textarea name="challenge" rows={5} required placeholder="Tell us what feels stuck, unclear, or harder than it should be." /></label>
    <button className="button button--primary button--cycle" type="submit" disabled={submitting}>{submitting ? 'Sending your request…' : 'Request free business advice'} <span aria-hidden="true">→</span></button>
    <p className="business-form__privacy">Your details are submitted securely to the Evanko Foundation for free advisory follow-up. We will reply via email within 48 hours. Feel free to include whatever you are comfortable sharing.</p>
    {notice && !submitted ? <p className="business-form__notice" role="status">{notice}</p> : null}
  </form>;
}
