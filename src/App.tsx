import { useState, useEffect, useRef } from 'react';
import { Heart, Music, Volume2, VolumeX, Sparkles, Cake } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
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
    { id: 1, url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg', caption: 'Always smiling' },
    { id: 2, url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', caption: 'Living your best life' },
    { id: 3, url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg', caption: 'Making memories' },
    { id: 4, url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg', caption: 'You light up every room' },
  ];

  const floatingPhotos = [
    { id: 1, url: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { id: 2, url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
    { id: 3, url: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg' },
    { id: 4, url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  ];

  const messages = [
    {
      id: 1,
      text: "You're not just a year older, you're a year more fabulous! Keep shining bright like the star you are.",
      author: 'Your biggest fan',
    },
    {
      id: 2,
      text: "Age is merely the number of years the world has been enjoying you. And what a joy it's been!",
      author: 'With love',
    },
    {
      id: 3,
      text: "Here's to another year of laughing until it hurts, dealing with stupid people, and keeping each other sane. Cheers!",
      author: 'Your partner in crime',
    },
    {
      id: 4,
      text: "You're not getting older, you're just becoming a classic! Like fine wine, you only get better with time.",
      author: 'Forever grateful',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

      <audio
        ref={audioRef}
        src="https://www.bensound.com/bensound-music/bensound-birthdayparty.mp3"
        loop
      />

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
          {[...Array(30)].map((_, i) => (
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
                left: `${15 + index * 20}%`,
                top: `${20 + index * 15}%`,
                animationDelay: `${index * 2}s`,
                animationDuration: `${15 + index * 3}s`,
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
              Celebrating You Today
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
              Memories Together
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
    </div>
  );
}

export default App;
