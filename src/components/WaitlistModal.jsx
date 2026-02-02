import React, { useState } from 'react';
import { X, Check, Loader2, Sparkles } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            // Auto close after 3 seconds
            setTimeout(() => {
                onClose();
                setStatus('idle');
            }, 3000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border bg-card p-0 shadow-2xl animate-in zoom-in-95 duration-300 mx-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Content */}
                <div className="p-8">
                    <div className="mb-6 flex flex-col items-center text-center">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight">Join the Revolution</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            We are currently in private beta. Join the waitlist to get early access and updates on our launch.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-green-500/10 p-8 text-center animate-in fade-in slide-in-from-bottom-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                                <Check className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-700 dark:text-green-400">You're on the list!</h3>
                                <p className="text-sm text-green-600/90 dark:text-green-400/90">We'll be in touch soon.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Adding you to list...
                                    </>
                                ) : (
                                    'Join Waitlist'
                                )}
                            </button>
                        </form>
                    )}
                </div>

                <div className="bg-muted/50 px-8 py-4 text-center text-xs text-muted-foreground">
                    Trusted by 2,000+ HR leaders from top tech companies.
                </div>
            </div>
        </div>
    );
}
