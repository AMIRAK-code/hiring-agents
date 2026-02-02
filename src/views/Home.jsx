import React from 'react';
import { Search, Brain, Calendar, ArrowRight, MessageSquare, Bot } from 'lucide-react';

export default function HomeView() {
    return (
        <div className="flex flex-col min-h-screen pt-16 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative flex-1 flex flex-col items-center justify-center py-20 lg:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Now hiring digital workers
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none">
                                    Hire Your First <br />
                                    <span className="text-primary">Autonomous HR Team</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Replace manual screening with a multi-agent crew. Sourcer, Screener, and Scheduler agents working 24/7 to fill your pipeline.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                    Start Hiring
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                                <button className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                    View Demo
                                </button>
                            </div>
                        </div>

                        {/* Visual Hook: Chat Mock */}
                        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                            <div className="relative rounded-xl border bg-card shadow-2xl overflow-hidden">
                                <div className="flex items-center border-b p-4 bg-muted/30">
                                    <div className="flex space-x-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="ml-4 text-xs font-mono text-muted-foreground">hiring-agents-live-channel</div>
                                </div>
                                <div className="p-4 space-y-4 font-mono text-sm max-h-[400px] overflow-hidden relative">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-card to-transparent pointer-events-none h-20 bottom-0 top-auto"></div>

                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">S</div>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">Sourcer Agent</span>
                                                <span className="text-xs text-muted-foreground">10:42 AM</span>
                                            </div>
                                            <p className="text-muted-foreground">I found a candidate matching the Senior React role. GitHub activity shows heavy contributions to Shadcn/UI.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">V</div>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">The Vet</span>
                                                <span className="text-xs text-muted-foreground">10:43 AM</span>
                                            </div>
                                            <p className="text-muted-foreground">Scanning code samples... Proficiency confirmed. Recommend proceeding to technical interview. Score: 92/100.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">C</div>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">The Closer</span>
                                                <span className="text-xs text-muted-foreground">10:43 AM</span>
                                            </div>
                                            <p className="text-muted-foreground">Understood. Checking calendar availability for both parties. Sending invite for Tuesday at 2 PM.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 opacity-50">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">S</div>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">Sourcer Agent</span>
                                                <span className="text-xs text-muted-foreground">10:44 AM</span>
                                            </div>
                                            <p className="text-muted-foreground">Analyzing next profile...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -right-12 -top-12 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="border-y bg-muted/40 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-6 text-sm font-medium text-muted-foreground">TRUSTED BY FUTURE-FORWARD TEAMS</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        {/* Simple Text Logos for demo */}
                        {['Acme AI', 'Nebula', 'QuantumSoft', 'HyperGrid', 'FutureScale'].map((logo) => (
                            <div key={logo} className="flex items-center gap-2 text-xl font-bold font-mono">
                                <div className="h-4 w-4 rounded-full bg-foreground/20"></div>
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Crew */}
            <section className="py-24 bg-muted/10">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Crew</h2>
                        <p className="mt-4 text-muted-foreground">Your dedicated digital HR department.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Agent 1 */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                                <Search className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">The Sourcer</h3>
                            <p className="text-muted-foreground">"Scans 1,000+ profiles in seconds."</p>
                            <div className="mt-4 rounded bg-muted/50 p-2 text-xs font-mono text-muted-foreground">
                                Capabilities: LinkedIn, GitHub, StackOverflow scraping
                            </div>
                        </div>

                        {/* Agent 2 */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">The Vet</h3>
                            <p className="text-muted-foreground">"Conducts deep technical interviews."</p>
                            <div className="mt-4 rounded bg-muted/50 p-2 text-xs font-mono text-muted-foreground">
                                Capabilities: Code analysis, Personality assessment
                            </div>
                        </div>

                        {/* Agent 3 */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">The Closer</h3>
                            <p className="text-muted-foreground">"Handles scheduling and offers."</p>
                            <div className="mt-4 rounded bg-muted/50 p-2 text-xs font-mono text-muted-foreground">
                                Capabilities: Calendar sync, Offer generation
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
