import React, { useState } from 'react';
import { Home, CreditCard, LayoutDashboard, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onOpenWaitlist }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'pricing', label: 'Pricing', icon: CreditCard },
        { id: 'platform', label: 'Platform Demo', icon: LayoutDashboard },
    ];

    const handleNavClick = (id) => {
        setCurrentView(id);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer" onClick={() => handleNavClick('home')}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <span className="text-foreground">
                            HiringAgents.ai
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-accent/50 p-1 backdrop-blur-sm">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentView(item.id)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${currentView === item.id
                                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border'
                                        : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={onOpenWaitlist} className="text-sm font-medium text-muted-foreground hover:text-foreground">Log in</button>
                        <button
                            onClick={onOpenWaitlist}
                            className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
                        >
                            Book Demo
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:bg-accent rounded-md"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 border-b border-border bg-background p-4 shadow-lg animate-in slide-in-from-top-2">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${currentView === item.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.label}
                                </button>
                            ))}
                            <div className="my-2 border-t border-border pt-2"></div>
                            <button
                                onClick={() => {
                                    onOpenWaitlist();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex w-full items-center justify-center rounded-lg border border-input bg-background py-3 text-sm font-medium hover:bg-accent"
                            >
                                Log in
                            </button>
                            <button
                                onClick={() => {
                                    onOpenWaitlist();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                            >
                                Book Demo
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
