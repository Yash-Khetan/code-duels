import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="min-h-screen bg-[#0B0E14] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden relative">
            {/* Subtle Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.05]"></div>
            </div>

            {/* Navbar */}
            <nav className="relative z-10 border-b border-slate-800/60 bg-[#0B0E14]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            &lt;/&gt;
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Code Duels</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Leaderboard
                        </button>
                        <div className="h-4 w-px bg-slate-700 mx-2"></div>
                        <Link to="/dashboard">
                            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors mr-2">
                                Log in
                            </button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="text-sm font-medium bg-white text-slate-900 px-5 py-2.5 rounded-md hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm font-medium text-blue-400 mb-8 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Season 1 is now live
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        Compete in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Real-Time Code
                        </span> <br />
                        Battles.
                    </h1>

                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Enter the ultimate 1v1 algorithmic arena. Match instantly with opponents, write optimized code under pressure, and climb the global ranks. Show the world what you can build in 5 minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link to="/dashboard">
                            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-lg hover:bg-blue-700 hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)] w-full sm:w-auto overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Enter the Arena
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient"></div>
                            </button>
                        </Link>
                        <button className="px-8 py-4 font-semibold text-slate-300 transition-all duration-200 bg-slate-800/40 border border-slate-700/60 rounded-lg hover:bg-slate-800 hover:text-white w-full sm:w-auto">
                            How it works
                        </button>
                    </div>

                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-800/60 pt-8">
                        <div>
                            <p className="text-3xl font-bold text-white">1k+</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Daily Matches</p>
                        </div>
                        <div className="w-px h-12 bg-slate-800"></div>
                        <div>
                            <p className="text-3xl font-bold text-white">5min</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Avg. Match Time</p>
                        </div>
                        <div className="w-px h-12 bg-slate-800 hidden sm:block"></div>
                        <div className="hidden sm:block">
                            <p className="text-3xl font-bold text-white">4</p>
                            <p className="text-sm font-medium text-slate-500 mt-1">Languages Supported</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Code Battle UI Mockup */}
                <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative perspective-1000 mt-12 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-2xl transform scale-95 translate-y-4"></div>

                    {/* Main IDE Window */}
                    <div className="relative bg-[#0F131A] rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden transform md:rotate-y-[-5deg] md:rotate-x-[5deg] transition-transform hover:rotate-0 duration-700">
                        {/* Window Header */}
                        <div className="h-12 bg-[#171C25] border-b border-slate-800 flex items-center px-4 justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Duel in progress... 03:42
                            </div>
                            <div className="text-xs font-medium text-slate-500">main.js</div>
                        </div>

                        {/* Split Screen Battle Mockup */}
                        <div className="flex h-[400px]">
                            {/* Player 1 (You) */}
                            <div className="flex-1 border-r border-slate-800 relative bg-[#0F131A] flex flex-col">
                                <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center bg-blue-900/10">
                                    <span className="text-xs font-bold text-blue-400 flex items-center gap-2">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="avatar" className="w-5 h-5 rounded-full bg-slate-800" />
                                        You
                                    </span>
                                    <span className="text-[10px] uppercase font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">Running</span>
                                </div>
                                <div className="p-5 font-mono text-sm flex-1 overflow-hidden" style={{ color: '#abb2bf' }}>
                                    <div className="flex">
                                        <div className="text-slate-600 text-right select-none pr-4 w-6 space-y-1">
                                            1<br />2<br />3<br />4<br />5<br />6<br />7
                                        </div>
                                        <div>
                                            <span className="text-purple-400">function</span> <span className="text-blue-400">twoSum</span>(nums, target) {'{'}<br />
                                            &nbsp;&nbsp;<span className="text-purple-400">const</span> map = <span className="text-purple-400">new</span> <span className="text-yellow-200">Map</span>();<br />
                                            &nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = <span className="text-orange-400">0</span>; i {'<'} nums.<span className="text-gray-400">length</span>; i++) {'{'}<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> complement = target - nums[i];<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (map.<span className="text-blue-400">has</span>(complement)) {'{'}<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [map.<span className="text-blue-400">get</span>(complement), i];<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                            {/* Blinking cursor effect */}
                                            &nbsp;&nbsp;&nbsp;&nbsp;map.<span className="text-blue-400">set</span>(nums[i], i);<span className="inline-block w-2.5 h-4 bg-blue-400 animate-pulse ml-0.5 align-middle border-b-2 border-blue-400"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Player 2 (Opponent) */}
                            <div className="flex-1 relative bg-[#0B0E14] flex flex-col opacity-75">
                                <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                                    <span className="text-xs font-bold text-red-400 flex items-center gap-2">
                                        Opponent
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=transparent" alt="avatar" className="w-5 h-5 rounded-full bg-slate-800" />
                                    </span>
                                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-800 px-2 py-0.5 rounded">Typing...</span>
                                </div>
                                <div className="p-5 font-mono text-sm flex-1 overflow-hidden" style={{ color: '#abb2bf' }}>
                                    <div className="flex">
                                        <div className="text-slate-700 text-right select-none pr-4 w-6 space-y-1">
                                            1<br />2<br />3<br />4<br />5
                                        </div>
                                        <div className="opacity-60 blur-[0.5px]">
                                            <span className="text-purple-400">function</span> <span className="text-blue-400">twoSum</span>(nums, target) {'{'}<br />
                                            &nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = <span className="text-orange-400">0</span>; i {'<'} nums...<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> j = i + <span className="text-orange-400">1</span>; ...<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic">// O(n^2) approach - too slow!</span><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (nums[i] + nums[j] ==...
                                        </div>
                                    </div>
                                </div>

                                {/* VS Overlay Badge */}
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center font-black italic text-slate-300 shadow-xl z-10">
                                    VS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Landing;
