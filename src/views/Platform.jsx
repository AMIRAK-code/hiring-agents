import React, { useState, useEffect, useRef } from 'react';
import {
    Terminal,
    Users,
    Settings,
    Briefcase,
    FileText,
    Activity,
    MoreVertical,
    Clock,
    Search,
    Filter,
    Plus,
    AlertCircle,
    Download,
    RefreshCw
} from 'lucide-react';

// --- Sub-Components ---

const DashboardView = ({ logs, terminalEndRef }) => (
    <div className="space-y-8 animate-in fade-in duration-500">
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
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 border border-border/50 cursor-pointer hover:bg-accent transition-colors">
                        <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                        <div>
                            <p className="text-sm font-medium">Review Offer Letter</p>
                            <p className="text-xs text-muted-foreground">Candidate: Michael S.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 border border-border/50 cursor-pointer hover:bg-accent transition-colors">
                        <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div>
                            <p className="text-sm font-medium">Approve Job Post</p>
                            <p className="text-xs text-muted-foreground">Role: Product Designer</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 border border-border/50 cursor-pointer hover:bg-accent transition-colors">
                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                        <div>
                            <p className="text-sm font-medium">New Feature: AI Scheduling</p>
                            <p className="text-xs text-muted-foreground">Enable in Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const JobsView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Jobs</h2>
                <p className="text-muted-foreground">Manage your active job listings and track applicants.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                <Plus className="h-4 w-4" /> Create Job
            </button>
        </div>

        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                        <Filter className="h-4 w-4" /> Filter
                    </button>
                    <button className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                        <Download className="h-4 w-4" /> Export
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-muted/30">
                        <tr>
                            <th className="px-6 py-3 text-left font-medium">Job Title</th>
                            <th className="px-6 py-3 text-left font-medium">Department</th>
                            <th className="px-6 py-3 text-left font-medium">Status</th>
                            <th className="px-6 py-3 text-left font-medium">Applicants</th>
                            <th className="px-6 py-3 text-left font-medium">Posted</th>
                            <th className="px-6 py-3 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {[
                            { title: 'Senior React Engineer', dept: 'Engineering', status: 'Active', applicants: 45, posted: '2 days ago' },
                            { title: 'Product Manager', dept: 'Product', status: 'Active', applicants: 12, posted: '5 days ago' },
                            { title: 'UX Designer', dept: 'Design', status: 'Paused', applicants: 28, posted: '1 week ago' },
                            { title: 'Customer Support Lead', dept: 'Operations', status: 'Draft', applicants: 0, posted: '-' },
                            { title: 'Marketing Manager', dept: 'Marketing', status: 'Active', applicants: 8, posted: '1 day ago' },
                        ].map((job, i) => (
                            <tr key={i} className="hover:bg-muted/10">
                                <td className="px-6 py-4 font-medium">{job.title}</td>
                                <td className="px-6 py-4 text-muted-foreground">{job.dept}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${job.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' :
                                        job.status === 'Paused' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                                            'bg-muted text-muted-foreground border-border'
                                        }`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span>{job.applicants}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">{job.posted}</td>
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
);

const CandidatesView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Candidates</h2>
                <p className="text-muted-foreground">View and manage candidates across all your active pipelines.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                <Plus className="h-4 w-4" /> Add Candidate
            </button>
        </div>

        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search candidates, skills..."
                        className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                </div>
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
                            { name: 'Michael Chen', role: 'DevOps Engineer', score: 76, status: 'Screening' },
                            { name: 'Sarah Wilson', role: 'Frontend Engineer', score: 91, status: 'Interviewing' },
                            { name: 'David Lee', role: 'Data Scientist', score: 65, status: 'Archived' },
                        ].map((candidate, i) => (
                            <tr key={i} className="hover:bg-muted/10">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            {candidate.name.charAt(0)}
                                        </div>
                                        {candidate.name}
                                    </div>
                                </td>
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
                                            candidate.status === 'Rejected' || candidate.status === 'Archived' ? 'bg-muted text-muted-foreground border-border' :
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
            <div className="border-t p-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Showing 7 of 142 candidates</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded hover:bg-muted">Previous</button>
                    <button className="px-2 py-1 border rounded hover:bg-muted">Next</button>
                </div>
            </div>
        </div>
    </div>
);

const LogsView = ({ logs }) => (
    <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Agent Logs</h2>
                <p className="text-muted-foreground">Real-time activity log of your autonomous hiring agents.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium hover:bg-accent transition-colors">
                <RefreshCw className="h-4 w-4" /> Clear Logs
            </button>
        </div>

        <div className="flex-1 rounded-xl border bg-[#0d0d0d] text-green-400 font-mono text-sm shadow-md overflow-hidden flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between border-b border-green-900/50 bg-[#1a1a1a] px-4 py-2">
                <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    <span className="font-semibold">Terminal Output</span>
                </div>
                <div className="text-xs text-green-500/70">Connected - Live</div>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-2 font-mono">
                {logs.map((log) => (
                    <div key={log.id} className="border-b border-green-900/10 pb-1">
                        <span className="opacity-50 inline-block w-20">[{log.time}]</span>{' '}
                        <span className={`font-bold inline-block w-24 ${log.agent === 'System' ? 'text-yellow-400' :
                            log.agent === 'Screener' ? 'text-purple-400' : 'text-blue-400'
                            }`}>{log.agent}</span>{' '}
                        <span className="text-gray-300">{log.message}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SettingsView = ({ onOpenWaitlist }) => {
    const [subTab, setSubTab] = useState('general');

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage workspace preferences and integrations.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sub-nav */}
                <div className="w-full lg:w-48 space-y-1">
                    {['general', 'integrations', 'notifications', 'billing'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSubTab(tab)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium capitalize ${subTab === tab ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                    {subTab === 'general' && (
                        <div className="space-y-6">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Workspace Name</label>
                                <input type="text" defaultValue="Acme Corp Recruiting" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Workspace URL</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                        hiringagents.ai/
                                    </span>
                                    <input type="text" defaultValue="acme-corp" className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                                </div>
                            </div>
                            <div className="items-center flex gap-4 pt-4">
                                <button className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {subTab === 'integrations' && (
                        <div className="space-y-6">
                            <div className="rounded-lg border p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">L</div>
                                    <div>
                                        <h4 className="font-semibold">LinkedIn Integration</h4>
                                        <p className="text-sm text-muted-foreground">Connect for automated sourcing</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 border rounded-md text-sm font-medium bg-green-50 text-green-700 border-green-200">Connected</button>
                            </div>
                            <div className="rounded-lg border p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-black rounded flex items-center justify-center text-white font-bold text-xl">G</div>
                                    <div>
                                        <h4 className="font-semibold">Github Integration</h4>
                                        <p className="text-sm text-muted-foreground">Analyze candidate code repositories</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 border rounded-md text-sm font-medium hover:bg-muted">Connect</button>
                            </div>
                        </div>
                    )}

                    {subTab === 'billing' && (
                        <div className="space-y-6">
                            <div className="rounded-xl border bg-card p-6">
                                <h3 className="font-semibold mb-2">Current Plan</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold">Demo</span>
                                    <span className="text-muted-foreground">/ forever</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-6">
                                    You are currently exploring the demo workspace. Upgrade to unlock full features, unlimited seats, and live API access.
                                </p>
                                <button
                                    onClick={onOpenWaitlist}
                                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 text-sm font-medium hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20"
                                >
                                    Upgrade to Pro
                                </button>
                            </div>
                        </div>
                    )}

                    {subTab === 'notifications' && (
                        <div className="space-y-4">
                            {['Email Alerts for New Matches', 'Daily Digest Summary', 'Slack Notifications', 'Browser Push Notifications'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-2">
                                    <span className="text-sm font-medium">{item}</span>
                                    <div className={`h-5 w-9 rounded-full relative cursor-pointer ${i < 2 ? 'bg-primary' : 'bg-muted'}`}>
                                        <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${i < 2 ? 'left-4.5' : 'left-0.5'}`} style={{ left: i < 2 ? '18px' : '2px' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// --- Main Platform Component ---

export default function PlatformView({ onOpenWaitlist }) {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [logs, setLogs] = useState([
        { id: 1, agent: 'Sourcer', message: 'Scanning LinkedIn profiles for "Senior React Engineer"...', time: '10:41:02' },
        { id: 2, agent: 'System', message: 'Rate limit check: OK. Usage: 15%', time: '10:41:05' },
        { id: 3, agent: 'Sourcer', message: 'Found candidate: Sarah J.', time: '10:41:12' },
        { id: 4, agent: 'Screener', message: 'Analyzing resume for "Sarah J."...', time: '10:41:15' },
    ]);

    const terminalEndRef = useRef(null);

    useEffect(() => {
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
        if (activeTab === 'dashboard' || activeTab === 'logs') {
            terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs, activeTab]);

    const NavButton = ({ id, icon: Icon, label }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeTab === id
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
        >
            <Icon className="h-4 w-4" /> {label}
        </button>
    );

    return (
        <div className="flex h-screen pt-16 bg-muted/20 animate-in fade-in duration-500">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-card hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Workspace</h2>
                    <nav className="space-y-1">
                        <NavButton id="dashboard" icon={Activity} label="Dashboard" />
                        <NavButton id="jobs" icon={Briefcase} label="My Jobs" />
                        <NavButton id="logs" icon={FileText} label="Agent Logs" />
                        <NavButton id="candidates" icon={Users} label="Candidates" />
                    </nav>
                </div>
                <div className="mt-auto p-6 border-t">
                    <NavButton id="settings" icon={Settings} label="Settings" />
                    <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center gap-3 px-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium truncate">Demo User</p>
                                <p className="text-xs text-muted-foreground truncate">demo@hiringagents.ai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-background/50">
                {/* Top Banner for Demo Mode */}
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b px-6 py-2 flex items-center justify-between backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                        <AlertCircle className="h-4 w-4 text-blue-500" />
                        Viewing in Demo Mode
                    </div>
                    <button
                        onClick={onOpenWaitlist}
                        className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium hover:bg-primary/90"
                    >
                        Get Early Access
                    </button>
                </div>

                <div className="p-6 lg:p-8 max-w-7xl mx-auto">
                    {activeTab === 'dashboard' && <DashboardView logs={logs} terminalEndRef={terminalEndRef} />}
                    {activeTab === 'jobs' && <JobsView />}
                    {activeTab === 'logs' && <LogsView logs={logs} />}
                    {activeTab === 'candidates' && <CandidatesView />}
                    {activeTab === 'settings' && <SettingsView onOpenWaitlist={onOpenWaitlist} />}
                </div>
            </main>
        </div>
    );
}
