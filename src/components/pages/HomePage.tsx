import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Keyboard, Zap, Target } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4 animate-in fade-in duration-1000">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Keyboard className="w-20 h-20 text-blue-600 dark:text-blue-400 relative" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              TypeFlow
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Master the art of speed typing
          </p>

          <p className="text-base md:text-lg text-slate-500 dark:text-slate-500 max-w-xl mx-auto leading-relaxed">
            Challenge yourself, improve your typing speed, and reach new heights of productivity
          </p>
        </div>

          <Button
            size="lg"
            onClick={() => navigate('/play-game')}
            variant='outline'
          >
            <Zap className="mr-2 h-5 w-5" />
            Start Typing
          </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-in fade-in duration-1000 delay-300">
          <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Precision Practice
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Focus on accuracy while building speed with carefully crafted exercises
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Lightning Fast
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Real-time feedback helps you improve with every keystroke
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
            <Keyboard className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Track Progress
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Monitor your improvement and achieve your typing goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
