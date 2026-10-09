import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowLeft, ArrowRight, Check, Loader2, Mail, Lock, User } from 'lucide-react'
import { SealLogo } from '@/components/SealLogo'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

type Mode = 'signin' | 'signup'

export function AuthPage({ mode }: { mode: Mode }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const isSignup = mode === 'signup'

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.')
      return
    }
    if (isSignup && !name.trim()) {
      setError('Tell us your name so we know who’s on duty.')
      return
    }
    setBusy(true)
    // Front-end only for now — the real auth API lands with the app backend.
    window.setTimeout(() => {
      try {
        localStorage.setItem(
          'deskpal_session',
          JSON.stringify({ name: name || email.split('@')[0], email, demo: true }),
        )
      } catch {}
      setBusy(false)
      setDone(true)
      window.setTimeout(() => navigate('/'), 1400)
    }, 900)
  }

  return (
    <div className="grid min-h-screen bg-paper lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Link to={`${import.meta.env.BASE_URL}`} className="flex items-center gap-2.5" aria-label="Deskpal home">
            <SealLogo className="h-9 w-9" />
            <span className="font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">
              Deskpal
            </span>
          </Link>
          <Link
            to={`${import.meta.env.BASE_URL}`}
            className="flex items-center gap-1.5 text-[13.5px] font-medium text-mist transition-colors hover:text-teal-deep"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to site
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-16">
          <Reveal className="w-full max-w-sm">
            {done ? (
              <div className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-tint text-teal-deep">
                  <Check className="h-7 w-7" />
                </span>
                <h1 className="mt-6 font-display text-3xl font-medium text-ink">
                  {isSignup ? 'Welcome aboard' : 'Welcome back'}
                </h1>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  {isSignup
                    ? 'Your workspace is being set up. Taking you home…'
                    : 'Signed in. Taking you home…'}
                </p>
              </div>
            ) : (
              <>
                <h1 className="font-display text-4xl font-medium tracking-[-0.02em] text-ink">
                  {isSignup ? 'Put your documents on duty.' : 'Welcome back.'}
                </h1>
                <p className="mt-3 text-[15.5px] leading-relaxed text-mist">
                  {isSignup
                    ? 'Create your workspace — free plan, no card required.'
                    : 'Sign in to your workspace to keep the answers flowing.'}
                </p>

                <form onSubmit={submit} className="mt-9 flex flex-col gap-4" noValidate>
                  {isSignup && (
                    <label className="block">
                      <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                        Your name
                      </span>
                      <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 transition-colors focus-within:border-teal">
                        <User className="h-4 w-4 shrink-0 text-mist/70" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ada Lovelace"
                          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-mist/50"
                        />
                      </div>
                    </label>
                  )}

                  <label className="block">
                    <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                      Work email
                    </span>
                    <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 transition-colors focus-within:border-teal">
                      <Mail className="h-4 w-4 shrink-0 text-mist/70" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourbusiness.com"
                        className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-mist/50"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                      Password
                    </span>
                    <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 transition-colors focus-within:border-teal">
                      <Lock className="h-4 w-4 shrink-0 text-mist/70" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={isSignup ? 'At least 8 characters' : '••••••••'}
                        className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-mist/50"
                      />
                    </div>
                  </label>

                  {error && (
                    <p className="rounded-lg border border-amber/30 bg-amber-tint px-3.5 py-2.5 text-[13.5px] font-medium text-amber-deep">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={busy}
                    className={cn(
                      'mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3.5 text-[15px] font-semibold text-white transition-all duration-200',
                      busy ? 'opacity-70' : 'hover:bg-teal-deep hover:shadow-[0_10px_24px_-8px_rgba(37,139,131,0.7)]',
                    )}
                  >
                    {busy ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Working…
                      </>
                    ) : (
                      <>
                        {isSignup ? 'Create workspace' : 'Sign in'}
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-[14px] text-mist">
                  {isSignup ? (
                    <>
                      Already have a workspace?{' '}
                      <Link to={`${import.meta.env.BASE_URL}signin`} className="font-semibold text-teal-deep hover:underline">
                        Sign in
                      </Link>
                    </>
                  ) : (
                    <>
                      New to Deskpal?{' '}
                      <Link to={`${import.meta.env.BASE_URL}get-started`} className="font-semibold text-teal-deep hover:underline">
                        Create a free workspace
                      </Link>
                    </>
                  )}
                </p>

                <p className="mt-8 text-center font-label text-[10.5px] uppercase tracking-[0.14em] text-mist/60">
                  Demo build — accounts are stored locally in your browser
                </p>
              </>
            )}
          </Reveal>
        </div>
      </div>

      {/* Brand side */}
      <div className="relative hidden overflow-hidden bg-teal lg:block">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 20%, #ffffff 0, transparent 34%), radial-gradient(circle at 20% 85%, #0b4141 0, transparent 40%)',
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-16">
          <blockquote className="max-w-md font-display text-[2.6rem] font-medium leading-[1.15] tracking-[-0.02em] text-white">
            “The questions never stop.
            <br />
            <em className="text-amber-light">Now the answers don’t either.”</em>
          </blockquote>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber" />
            <p className="font-label text-[12px] uppercase tracking-[0.2em] text-white/70">
              Your documents, on duty — 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
