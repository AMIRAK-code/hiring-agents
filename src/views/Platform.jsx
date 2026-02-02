import React, { useState, useEffect, useRef } from 'react';
import {
    Terminal,
    Users,
    Settings,
    Briefcase,
    FileText,
    Activity,
    MoreVertical,
    CheckCircle,
    XCircle,
    Clock
} from 'lucide-react';

export default function PlatformView() {
    const [logs, setLogs] = useState([
        { id: 1, agent: 'Sourcer', message: 'Scanning LinkedIn profiles for "Senior React Engineer"...', time: '10:41:02' },
        { id: 2, agent: 'System', message: 'Rate limit check: OK. Usage: 15%', time: '10:41:05' },
        { id: 3, agent: 'Sourcer', message: 'Found candidate: Sarah J.', time: '10:41:12' },
        { id: 4, agent: 'Screener', message: 'Analyzing resume for "Sarah J."...', time: '10:41:15' },
    ]);

    const terminalEndRef = useRef(null);

    useEffect(() => {
        // Simulate live logs
        const interval = setInterval(() => {
            const newLogs = [
                { agent: 'Sourcer', message: 'Identified potential match: Alex M. (Score: 88%)' },
                { agent: 'Screener', message: 'Detected missing SQL skill for candidate ID #492.' },
                { agent: 'Closer', message: 'Drafting intro email to candidate #401...' },
                { agent: 'Screener', message: 'Interview slot confirmed: 2pm Friday.' },
                { agent: 'System', message: 'Optimizing search parameters...' },
            ];
            const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)];

            setLogs(prev => {
                const next = [...prev, { ...randomLog, id: Date.now(), time: new Date().toLocaleTimeString('en-US', { hour12: false }) }];
                if (next.length > 20) return next.slice(next.length - 20); // Keep last 20
                return next;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div className="flex h-screen pt-16 bg-muted/20 animate-in fade-in duration-500">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-card hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Workspace</h2>
                    <nav className="space-y-1">
                        <button className="flex w-full items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                            <Activity className="h-4 w-4" /> Dashboard
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                            <Briefcase className="h-4 w-4" /> My Jobs
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                            <FileText className="h-4 w-4" /> Agent Logs
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                            <Users className="h-4 w-4" /> Candidates
                        </button>
                    </nav>
                </div>
                <div className="mt-auto p-6 border-t">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        <Settings className="h-4 w-4" /> Settings
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-6 lg:p-8">
                <div className="mx-auto max-w-6xl space-y-8">

                    {/* Top Stats */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Candidates in Pipeline</p>
                                    <p className="text-2xl font-bold">142</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Interviews Booked</p>
                                    <p className="text-2xl font-bold">8</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Time Saved (hrs)</p>
                                    <p className="text-2xl font-bold">42</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Live Agent Terminal */}
                        <div className="lg:col-span-2 rounded-xl border bg-[#0d0d0d] text-green-400 font-mono text-sm shadow-md overflow-hidden flex flex-col h-[400px]">
                            <div className="flex items-center justify-between border-b border-green-900/50 bg-[#1a1a1a] px-4 py-2">
                                <div className="flex items-center gap-2">
                                    <Terminal className="h-4 w-4" />
                                    <span className="font-semibold">Live Agent Activity</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>
                            <div className="flex-1 overflow-auto p-4 space-y-2">
                                {logs.map((log) => (
                                    <div key={log.id} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                        <span className="opacity-50">[{log.time}]</span>{' '}
                                        <span className="text-blue-400 font-bold">{`>`} {log.agent}:</span>{' '}
                                        <span>{log.message}</span>
                                    </div>
                                ))}
                                <div ref={terminalEndRef} />
                            </div>
                        </div>

                        {/* Recent Activity / Mini List */}
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Urgent Actions</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 border border-border/50">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                                    <div>
                                        <p className="text-sm font-medium">Review Offer Letter</p>
                                        <p className="text-xs text-muted-foreground">Candidate: Michael S.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 border border-border/50">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
                                    <div>
                                        <p className="text-sm font-medium">Approve Job Post</p>
                                        <p className="text-xs text-muted-foreground">Role: Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Candidate List Table */}
                    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                        <div className="border-b px-6 py-4 flex items-center justify-between">
                            <h3 className="font-semibold">Active Pipeline</h3>
                            <button className="text-sm text-primary hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-muted/30">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-medium">Candidate</th>
                                        <th className="px-6 py-3 text-left font-medium">Role</th>
                                        <th className="px-6 py-3 text-left font-medium">Match Score</th>
                                        <th className="px-6 py-3 text-left font-medium">Status</th>
                                        <th className="px-6 py-3 text-right font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {[
                                        { name: 'John Doe', role: 'Frontend Engineer', score: 95, status: 'Interviewing' },
                                        { name: 'Alice Smith', role: 'Product Manager', score: 82, status: 'Offer Sent' },
                                        { name: 'Robert Johnson', role: 'Backend Engineer', score: 45, status: 'Rejected' },
                                        { name: 'Emily Davis', role: 'UX Designer', score: 88, status: 'Screening' },
                                    ].map((candidate) => (
                                        <tr key={candidate.name} className="hover:bg-muted/10">
                                            <td className="px-6 py-4 font-medium">{candidate.name}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{candidate.role}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-2 w-full max-w-[100px] rounded-full bg-muted overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${candidate.score > 80 ? 'bg-green-500' : candidate.score > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                            style={{ width: `${candidate.score}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs font-mono">{candidate.score}%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${candidate.status === 'Interviewing' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                                                        candidate.status === 'Offer Sent' ? 'bg-green-100 text-green-800 border-green-200' :
                                                            candidate.status === 'Rejected' ? 'bg-muted text-muted-foreground border-border' :
                                                                'bg-yellow-100 text-yellow-800 border-yellow-200'
                                                    }`}>
                                                    {candidate.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-muted-foreground hover:text-foreground">
                                                    <MoreVertical className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
