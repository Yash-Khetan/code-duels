import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, Check, X, LogOut, Clock, Terminal } from 'lucide-react';

export default function Arena() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(300); // 5 mins in seconds
    const [code, setCode] = useState('// Write your solution here...\n\nfunction solve(input) {\n  \n}');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [verdict, setVerdict] = useState(null);

    // Format time remaining
    const formattedTime = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        setIsSubmitting(true);
        setVerdict(null);

        // Simulate submission delay
        setTimeout(() => {
            setIsSubmitting(false);
            // Simulate random verdict
            setVerdict(Math.random() > 0.5 ? 'ACCEPTED' : 'WRONG_ANSWER');
        }, 1500);
    };

    const leaveArena = () => {
        navigate('/dashboard');
    };

    return (
        <div className="h-screen flex flex-col bg-[#0B0E14] text-slate-200 font-sans overflow-hidden selection:bg-blue-500/30">
            {/* Header */}
            <header className="h-14 border-b border-slate-800 bg-[#0F131A] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={leaveArena} className="p-2 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white" title="Quit Match">
                        <LogOut className="w-5 h-5" />
                    </button>
                    <div className="h-4 w-px bg-slate-700"></div>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-slate-300">Live Match</span>
                    </div>
                </div>

                {/* Timer */}
                <div className="absolute left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 px-6 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Clock className={`w-4 h-4 ${timeLeft <= 60 ? 'text-red-500 animate-pulse' : 'text-blue-400'}`} />
                    <span className={`font-mono text-lg font-bold tracking-wider ${timeLeft <= 60 ? 'text-red-400' : 'text-white'}`}>
                        {formattedTime}
                    </span>
                </div>

                {/* Player Stats / Profile */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 opacity-60 pointer-events-none">
                        {/* Opponent Mini Overview */}
                        <div className="flex gap-1">
                            <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/50 flex items-center justify-center"><Check className="w-3 h-3 text-green-400" /></div>
                            <div className="w-4 h-4 rounded bg-slate-800 border border-slate-700"></div>
                        </div>
                        <span className="text-xs font-mono">Opponent_X</span>
                    </div>

                    <div className="h-4 w-px bg-slate-700"></div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-400">PlayerOne</span>
                        <div className="flex gap-1">
                            {/* Your status */}
                            <div className="w-4 h-4 rounded bg-slate-800 border border-slate-700 transition-colors duration-300">
                                {verdict === 'ACCEPTED' && <Check className="w-3 h-3 text-green-400 m-0.5" />}
                                {verdict === 'WRONG_ANSWER' && <X className="w-3 h-3 text-red-500 m-0.5" />}
                            </div>
                            <div className="w-4 h-4 rounded bg-slate-800 border border-slate-700"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Arena Layout */}
            <main className="flex-1 flex overflow-hidden">

                {/* Left Col - Problem Details */}
                <div className="w-[35%] min-w-[300px] border-r border-slate-800 bg-[#0F131A] flex flex-col">
                    {/* Tab Header */}
                    <div className="h-10 border-b border-slate-800 flex items-center px-2 bg-slate-900/50">
                        <div className="px-3 py-1.5 bg-[#0F131A] text-sm font-medium border-t-2 border-t-blue-500 text-white rounded-t-md -mb-px border-r border-l border-slate-800">
                            Problem
                        </div>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto">
                        <h1 className="text-2xl font-bold text-white mb-2">1. Sum of Two Numbers</h1>
                        <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
                            Easy
                        </div>

                        <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-4">
                            <p>
                                You are given two integers. Print their sum.
                                This is a fundamental introductory challenge to verify I/O formats.
                            </p>

                            <div className="mt-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Input Format</h3>
                                <p className="font-mono text-sm bg-slate-900 border border-slate-800 p-3 rounded-md">
                                    Two space-separated integers a and b
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Output Format</h3>
                                <p className="font-mono text-sm bg-slate-900 border border-slate-800 p-3 rounded-md">
                                    Single integer representing a + b
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Constraints</h3>
                                <ul className="font-mono text-sm list-disc pl-5 space-y-1">
                                    <li>-10<sup className="text-xs">9</sup> ≤ a, b ≤ 10<sup className="text-xs">9</sup></li>
                                </ul>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="border border-slate-700 rounded-lg overflow-hidden">
                                    <div className="bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 border-b border-slate-700">Example 1</div>
                                    <div className="p-4 bg-slate-900/50 font-mono text-sm">
                                        <div className="mb-2 text-slate-500">Input:</div>
                                        <div className="mb-4 text-white">2 3</div>
                                        <div className="mb-2 text-slate-500">Output:</div>
                                        <div className="text-green-400">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center & Right Col - Editor & Output */}
                <div className="flex-1 flex flex-col relative bg-[#151A22]">

                    {/* Editor Header */}
                    <div className="h-10 border-b border-slate-800 flex items-center justify-between px-2 bg-slate-900/50">
                        <div className="flex items-center gap-1">
                            <div className="px-3 py-1.5 bg-[#151A22] text-sm font-mono text-white rounded-t-md -mb-px border-t border-t-slate-700 flex items-center gap-2">
                                <span className="text-yellow-400">JS</span> main.js
                            </div>
                        </div>

                        {/* Opponent Activity Banner (Small overlay inside editor top header) */}
                        <div className="px-3 border border-red-900/30 bg-red-500/5 rounded text-xs font-medium text-red-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            Opponent is typing...
                        </div>
                    </div>

                    {/* Monaco Area */}
                    <div className="flex-1 relative">
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={setCode}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                fontFamily: "'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace",
                                lineHeight: 24,
                                padding: { top: 16 },
                                scrollbar: {
                                    verticalScrollbarSize: 8,
                                    horizontalScrollbarSize: 8,
                                },
                                roundedSelection: true,
                                cursorBlinking: "smooth",
                                cursorSmoothCaretAnimation: "on"
                            }}
                        />
                    </div>

                    {/* Bottom Console / Actions */}
                    <div className="h-48 border-t border-slate-800 bg-[#0F131A] flex flex-col shrink-0">
                        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 bg-slate-900/50">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                <Terminal className="w-4 h-4" />
                                Console
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-4 py-1.5 rounded bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors">
                                    Run Code
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`flex items-center gap-2 px-6 py-1.5 rounded text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]
                    ${isSubmitting ? 'bg-blue-800 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'}`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <Play className="w-4 h-4 fill-white" />
                                    )}
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>

                        {/* Output Area (Mocked state) */}
                        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
                            {!verdict && !isSubmitting && (
                                <span className="text-slate-500">Ready to execute. Press Run or Submit to test your code.</span>
                            )}

                            {verdict === 'ACCEPTED' && (
                                <div className="flex flex-col gap-2">
                                    <span className="text-green-400 font-bold tracking-widest text-lg animate-pulse">ACCEPTED</span>
                                    <span className="text-slate-400 mt-2">Passed all test cases. Waiting for Opponent...</span>
                                </div>
                            )}

                            {verdict === 'WRONG_ANSWER' && (
                                <div className="flex flex-col gap-2">
                                    <span className="text-red-500 font-bold tracking-widest text-lg">WRONG_ANSWER</span>
                                    <div className="mt-2 bg-red-950/20 border border-red-900/30 rounded p-3 text-red-200">
                                        <p className="mb-1 text-slate-400">Failed Testcase #2</p>
                                        <p><span className="text-red-400 font-bold">Input:</span> "1000000000 -1000000000"</p>
                                        <p><span className="text-red-400 font-bold">Expected:</span> "0"</p>
                                        <p><span className="text-slate-400 font-bold">Actual:</span> "undefined"</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
