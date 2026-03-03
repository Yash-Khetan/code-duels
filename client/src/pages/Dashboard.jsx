import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, Swords, Trophy, Activity, History } from 'lucide-react';

function Dashboard() {
    const navigate = useNavigate();
    const [isFindingMatch, setIsFindingMatch] = useState(false);

    const startMatchmaking = () => {
        setIsFindingMatch(true);
        // Simulate matchmaking delay before redirecting to arena
        setTimeout(() => {
            navigate('/arena');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#0B0E14] text-slate-200 font-sans">
            {/* Navbar */}
            <nav className="border-b border-slate-800 bg-[#0B0E14]">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            &lt;/&gt;
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Code Duels</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-md border border-slate-700">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="avatar" className="w-6 h-6 rounded-full bg-slate-700" />
                            <span className="text-sm font-medium">PlayerOne</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                {/* Left Col - Play Action */}
                <div className="flex-1 space-y-6">
                    <div className="bg-[#151A22] rounded-xl border border-slate-700/60 p-8 flex flex-col items-center justify-center text-center min-h-[300px] relative overflow-hidden">
                        {/* BG glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <Swords className="w-16 h-16 text-blue-500 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                        <h2 className="text-2xl font-bold text-white mb-2">Ranked 1v1 Arena</h2>
                        <p className="text-slate-400 mb-8 max-w-sm">
                            Match with an opponent of similar skill. First to solve 2 algorithmic challenges wins. Time limit: 5 minutes.
                        </p>

                        <button
                            onClick={startMatchmaking}
                            disabled={isFindingMatch}
                            className={`group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-300 rounded-lg shadow-[0_0_40px_rgba(37,99,235,0.3)]
                ${isFindingMatch ? 'bg-slate-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 hover:scale-105'}`}
                        >
                            {isFindingMatch ? (
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Finding Opponent...
                                </span>
                            ) : (
                                'Find Match'
                            )}
                        </button>
                    </div>

                    <div className="bg-[#151A22] rounded-xl border border-slate-700/60 p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <History className="w-5 h-5 text-slate-400" />
                            Recent Matches
                        </h3>
                        <div className="space-y-3">
                            {[
                                { res: 'WIN', score: '2 - 0', opp: 'ZeroCool', time: '2 hours ago' },
                                { res: 'LOSE', score: '1 - 2', opp: 'AcidBurn', time: 'Yesterday' },
                                { res: 'DRAW', score: '1 - 1', opp: 'CrashOverride', time: 'Yesterday' },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded w-14 text-center ${m.res === 'WIN' ? 'bg-green-500/20 text-green-400' : m.res === 'LOSE' ? 'bg-red-500/20 text-red-400' : 'bg-slate-600/30 text-slate-400'}`}>
                                            {m.res}
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-slate-200">vs {m.opp}</p>
                                            <p className="text-xs text-slate-500">{m.time}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-700">{m.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Col - Stats (Minimalist) */}
                <div className="md:w-80 space-y-6">
                    <div className="bg-[#151A22] rounded-xl border border-slate-700/60 p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-slate-400" />
                            Your Stats
                        </h3>

                        <div className="flex items-center justify-between py-3 border-b border-slate-800">
                            <span className="text-slate-400 text-sm">Rating</span>
                            <span className="text-lg font-bold text-blue-400 flex items-center gap-1">
                                <Trophy className="w-4 h-4" /> 1250
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-800">
                            <span className="text-slate-400 text-sm">Win Rate</span>
                            <span className="text-slate-200 font-medium">54%</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-800">
                            <span className="text-slate-400 text-sm">Matches Played</span>
                            <span className="text-slate-200 font-medium">42</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <span className="text-slate-400 text-sm">Questions Solved</span>
                            <span className="text-slate-200 font-medium">38</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
