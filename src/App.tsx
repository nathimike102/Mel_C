import { useState, useEffect, useRef, useMemo } from 'react';
import { Heart, Volume2, VolumeX, Sparkles, Cake } from 'lucide-react';

const audioSrc = '/song/Samthing_Soweto_-_Happy_Birthday_CeeNaija.com_.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [runtimeError, setRuntimeError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
    const tryAutoplay = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // autoplay blocked — user can press the toggle button to start music
        }
      }
    };

    tryAutoplay();
  }, []);

  useEffect(() => {
    const onError = (e: ErrorEvent) => {
      console.error('Global error captured:', e.error || e.message || e);
      setRuntimeError(String(e.error || e.message || e));
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      console.error('Unhandled rejection:', e.reason);
      setRuntimeError(String(e.reason || 'Unhandled promise rejection'));
    };
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection as any);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection as any);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const photos = [
    { id: 1, url: '/image4/WhatsApp Image 2025-10-25 at 23.12.50.jpeg', caption: 'That radiant smile that lights every room' },
    { id: 2, url: '/image4/jwwrd_WhatsApp Image 2025-10-25 at 23.12.48.jpeg', caption: 'Warm moments full of love' },
    { id: 3, url: '/image4/kdzhi_WhatsApp Image 2025-10-25 at 23.12.47.jpeg', caption: 'Always ready for a little adventure' },
    { id: 4, url: '/image4/opbnu_WhatsApp Image 2025-10-25 at 23.12.48.jpeg', caption: 'Candle-blowing, wish-making memories' },
  ];

  const floatingPhotos = [
    { id: 1, url: '/images/WhatsApp Image 2025-10-25 at 23.12.48.jpeg' },
    { id: 2, url: '/images/jkuwg_WhatsApp Image 2025-10-25 at 23.12.48.jpeg' },
    { id: 3, url: '/images/muiij_WhatsApp Image 2025-10-25 at 23.12.48.jpeg' },
    { id: 4, url: '/images/WhatsApp Image 2025-10-25 at 23.12.49.jpeg' },
    { id: 5, url: '/images/bazjq_WhatsApp Image 2025-10-25 at 23.12.49.jpeg' },
    { id: 6, url: '/images/cfrjv_WhatsApp Image 2025-10-25 at 23.12.49.jpeg' },
    { id: 7, url: '/images/ezwpj_WhatsApp Image 2025-10-25 at 23.12.50.jpeg' },
    { id: 8, url: '/images/zmfyo_WhatsApp Image 2025-10-25 at 23.12.50.jpeg' },
    { id: 9, url: '/images/WhatsApp Image 2025-10-25 at 23.12.51.jpeg' },
    { id: 10, url: '/images/gytbu_WhatsApp Image 2025-10-25 at 23.12.51.jpeg' },
    { id: 11, url: '/images/rbmoz_WhatsApp Image 2025-10-25 at 23.12.51.jpeg' },
    { id: 12, url: '/images/sfrav_WhatsApp Image 2025-10-25 at 23.12.51.jpeg' },
    { id: 13, url: '/images/WhatsApp Image 2025-10-25 at 23.12.53.jpeg' },
  ];

  const floatingPositions = useMemo(() => {
    const margin = 8;
    return floatingPhotos.map(() => {
      const left = Math.random() * (100 - margin * 2) + margin;
      const top = Math.random() * (100 - margin * 2) + margin;
      const delay = Math.random() * 3;
      const duration = 12 + Math.random() * 10;
      return { left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%`, delay: `${delay.toFixed(2)}s`, duration: `${duration.toFixed(2)}s` };
    });
  }, [floatingPhotos.length]);

  const messages = [
    {
      id: 1,
      text: `Happy Birthday to mamncae’ wami 🥳🥳🥳

On this special day, I want you to know how much you mean to me. Your laughter, wisdom, and endless love bring so much joy 🥰. You have a unique way of making everyone feel special, and I’m so grateful to have you in my life 😌.

May this year be filled with new adventures, cherished moments, and all the happiness you give to others. You deserve every bit of joy that comes your way. Celebrate big today — you’re one in a million!, million ngani incane, one in Zillion khonangale 🫢☺️🥰🥳🥳🥳.`,
      author: 'With all my love',
    },
    {
      id: 2,
      text: `Thank you for all the laughter, guidance, and unconditional love you've given me over the years. You bring so much joy and light to our family, and I hope your day is as wonderful and special as you are. Wishing you the very best on your birthday — I'm sending you all my love.`,
      author: 'Forever grateful',
    },
    {
      id: 3,
      text: `I hope your birthday is filled with everything that makes you smile. Your kind heart and bright spirit are such a gift to us. Love you dearly!`,
      author: 'Love always',
    },
    {
      id: 4,
      text: `You've always been one of my favorite people to talk to. Thank you for the great advice and the even better laughs. You're not getting older — you're leveling up! Happy Birthday — you deserve the best!`,
      author: 'Cheering you on',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden relative">
      {runtimeError && (
        <div className="fixed inset-0 z-[9999] bg-black/90 text-white p-6 overflow-auto">
          <h2 className="text-3xl font-bold mb-4">Runtime error detected</h2>
          <pre className="whitespace-pre-wrap mb-4">{runtimeError}</pre>
          <div className="mb-4">
            <strong>Floating photos loaded:</strong>
            <div className="mt-2">
              {floatingPhotos.length === 0 ? (
                <div>No floating photos loaded.</div>
              ) : (
                <ul className="list-disc list-inside">
                  {floatingPhotos.slice(0, 20).map((f) => (
                    <li key={f.id} className="break-words">{f.url}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setRuntimeError(null)}
              className="px-4 py-2 bg-red-600 rounded-md shadow hover:opacity-90"
            >
              Dismiss overlay
            </button>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

  <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-4 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 hover:scale-110 hover:rotate-12"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-white" />
        )}
      </button>

      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <Sparkles
                className={`${
                  i % 3 === 0 ? 'text-blue-400' : i % 3 === 1 ? 'text-cyan-400' : 'text-sky-400'
                } opacity-60 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                size={Math.random() * 25 + 15}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="absolute animate-orbit"
              style={{
                left: floatingPositions[index]?.left,
                top: floatingPositions[index]?.top,
                animationDelay: floatingPositions[index]?.delay,
                animationDuration: floatingPositions[index]?.duration,
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
                <img
                  src={photo.url}
                  alt={`Floating memory ${photo.id}`}
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-cyan-400/50 shadow-xl shadow-blue-500/50 hover:scale-110 hover:border-cyan-300 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="inline-flex items-center justify-center mb-6 animate-bounce">
              <div className="relative">
                <Cake className="w-20 h-20 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]" />
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Happy Birthday!
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light tracking-wide">
              🥳🥳Celebrating You Today🥳🥳
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="w-6 h-6 text-blue-400 animate-pulse drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <Heart className="w-8 h-8 text-cyan-400 animate-pulse drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 text-sky-400 animate-pulse drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div
            className={`mb-20 transition-all duration-1000 delay-300 transform ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MEL C
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-fadeIn border border-blue-500/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Messages for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className="relative group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeIn border border-blue-500/30"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <Heart className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    </div>
                    <p className="text-gray-200 text-lg mb-6 leading-relaxed italic">
                      "{message.text}"
                    </p>
                    <p className="text-cyan-300 font-medium">— {message.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`text-center mt-20 mb-12 transition-all duration-1000 delay-700 transform ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl shadow-blue-900/50 p-12 max-w-3xl mx-auto border-2 border-blue-500/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/10 to-sky-600/10 animate-gradient"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="relative z-10">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  Wishing You the Happiest Birthday!
                </h2>
                <p className="text-blue-100 text-xl leading-relaxed">
                  May this year bring you endless joy, countless blessings, and all the happiness your heart can hold.
                  You deserve nothing but the best today and every day. Here's to another amazing year of adventures,
                  laughter, and unforgettable moments!
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Heart className="w-8 h-8 text-blue-400 animate-pulse drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <Sparkles className="w-10 h-10 text-cyan-400 animate-spin drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDuration: '3s' }} />
                  <Heart className="w-8 h-8 text-sky-400 animate-pulse drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 py-6 bg-gradient-to-r from-blue-900 to-slate-900 text-center text-sm text-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <p>Happy Birthday<span className="text-pink-400">❤</span>!</p>
          <p className="mt-2">© {new Date().getFullYear()} Nathi. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
