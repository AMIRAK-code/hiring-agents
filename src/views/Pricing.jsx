import React from 'react';
import { Check, X } from 'lucide-react';

export default function PricingView({ onOpenWaitlist }) {
    return (
        <div className="min-h-screen pt-24 pb-12 animate-in fade-in duration-500">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Choose the perfect agent team for your hiring needs. No hidden fees.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3 mb-24">
                    {/* Starter Plan */}
                    <div className="rounded-3xl border bg-card text-card-foreground shadow-sm p-8 flex flex-col">
                        <h3 className="font-semibold text-xl mb-2">Starter</h3>
                        <p className="text-muted-foreground text-sm mb-6">For early-stage startups.</p>
                        <div className="text-4xl font-bold mb-6">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> 1 Active Agent</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> 50 Resumes/mo</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Basic Email Support</li>
                        </ul>
                        <button
                            onClick={onOpenWaitlist}
                            className="w-full rounded-lg border border-input bg-background py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Growth Plan - Highlighted */}
                    <div className="relative rounded-3xl border-2 border-primary bg-card text-card-foreground shadow-lg p-8 flex flex-col scale-105 z-10 transition-transform hover:scale-[1.07]">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
                        </div>
                        <h3 className="font-semibold text-xl mb-2 text-primary">Growth</h3>
                        <p className="text-muted-foreground text-sm mb-6">For growing teams.</p>
                        <div className="text-4xl font-bold mb-6">$499<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> 3-Agent Crew</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Unlimited Screening</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> ATS Integration</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Priority Support</li>
                        </ul>
                        <button
                            onClick={onOpenWaitlist}
                            className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 shadow-md"
                        >
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="rounded-3xl border bg-card text-card-foreground shadow-sm p-8 flex flex-col">
                        <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
                        <p className="text-muted-foreground text-sm mb-6">Custom Agents & Legal Compliance.</p>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Unlimited Agents</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Custom Models</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> Dedicated Success Manager</li>
                            <li className="flex items-center text-sm"><Check className="h-4 w-4 mr-2 text-primary" /> SLA & Compliance</li>
                        </ul>
                        <button
                            onClick={onOpenWaitlist}
                            className="w-full rounded-lg border border-input bg-background py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="p-6 border-b bg-muted/30">
                        <h3 className="font-bold text-lg">Feature Comparison</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-4 font-medium text-muted-foreground bg-muted/10">Features</th>
                                    <th className="p-4 font-semibold text-center w-1/4">Starter</th>
                                    <th className="p-4 font-semibold text-center text-primary w-1/4 bg-primary/5">Growth</th>
                                    <th className="p-4 font-semibold text-center w-1/4">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-4 font-medium">Context Window</td>
                                    <td className="p-4 text-center text-muted-foreground">8k Tokens</td>
                                    <td className="p-4 text-center font-medium bg-primary/5">32k Tokens</td>
                                    <td className="p-4 text-center font-medium">128k+ Tokens</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Reasoning Depth</td>
                                    <td className="p-4 text-center text-muted-foreground">Standard</td>
                                    <td className="p-4 text-center font-medium bg-primary/5">Advanced (CoT)</td>
                                    <td className="p-4 text-center font-medium">Custom Fine-Tuned</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Dedicated Support</td>
                                    <td className="p-4 text-center"><X className="h-4 w-4 mx-auto text-muted-foreground" /></td>
                                    <td className="p-4 text-center font-medium bg-primary/5"><Check className="h-4 w-4 mx-auto text-primary" /></td>
                                    <td className="p-4 text-center font-medium"><Check className="h-4 w-4 mx-auto text-primary" /></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">API Access</td>
                                    <td className="p-4 text-center"><X className="h-4 w-4 mx-auto text-muted-foreground" /></td>
                                    <td className="p-4 text-center font-medium bg-primary/5"><Check className="h-4 w-4 mx-auto text-primary" /></td>
                                    <td className="p-4 text-center font-medium"><Check className="h-4 w-4 mx-auto text-primary" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
