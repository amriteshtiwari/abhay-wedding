import React, { useState } from 'react';
import { Heart, Loader2, Sparkles, Sun, Flower2 } from 'lucide-react';
import { submitRSVPToSheet } from '../services/rsvpService';

const RSVP: React.FC = () => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name or family title.');
      return;
    }

    setStep('submitting');
    setError('');

    try {
      const success = await submitRSVPToSheet(name, guests);
      if (success) {
        setStep('success');
      } else {
        setStep('form');
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStep('form');
      setError('Connection failed. Please check your internet.');
    }
  };

  return (
    <section id="rsvp" className="py-24 relative overflow-hidden bg-deep-maroon scroll-mt-28 border-t-8 border-wedding-gold">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
             <Flower2 className="w-12 h-12 text-wedding-gold animate-spin-slow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-decorative text-wedding-cream mb-4">Atithi Devo Bhava</h2>
          <div className="flex justify-center items-center gap-4 mb-6 opacity-80">
            <span className="h-px w-16 bg-wedding-gold"></span>
            <span className="text-wedding-gold text-lg font-serif italic">The Guest is God</span>
            <span className="h-px w-16 bg-wedding-gold"></span>
          </div>
          <p className="text-xl text-wedding-cream/90 font-serif max-w-2xl mx-auto leading-relaxed">
            Your presence is the greatest gift we could ask for. <br/>
            Please bless us with your company as we start this new chapter.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-wedding-cream backdrop-blur-md rounded-t-full rounded-b-2xl shadow-2xl overflow-hidden border-4 border-wedding-gold relative px-2 pt-12 pb-2">
             
             {/* Inner border frame */}
             <div className="bg-white/80 p-8 rounded-t-[10rem] rounded-b-xl border border-wedding-red/20 h-full">
              
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up pt-4">
                  <div className="text-center">
                    <p className="text-deep-maroon font-bold uppercase tracking-[0.2em] text-xs mb-2">RSVP</p>
                    <h3 className="text-2xl font-decorative text-wedding-red">Confirm Your Presence</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-deep-maroon font-serif font-bold text-lg mb-2" htmlFor="name">
                        Name / Parivar
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. The Sharma Family"
                        className="w-full px-4 py-3 border-b-2 border-wedding-gold/50 bg-orange-50/50 focus:border-wedding-red focus:bg-white focus:outline-none transition-all font-serif text-xl placeholder-gray-400 text-gray-800 rounded-t-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-deep-maroon font-serif font-bold text-lg mb-2">
                        Number of Guests
                      </label>
                      <div className="flex items-center justify-center gap-6">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-12 h-12 rounded-full border-2 border-deep-maroon text-deep-maroon hover:bg-deep-maroon hover:text-white transition-colors flex items-center justify-center font-bold text-2xl"
                        >
                          -
                        </button>
                        <span className="text-4xl font-decorative text-wedding-red min-w-[3rem] text-center">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(15, guests + 1))}
                          className="w-12 h-12 rounded-full border-2 border-deep-maroon text-deep-maroon hover:bg-deep-maroon hover:text-white transition-colors flex items-center justify-center font-bold text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {error && <p className="text-red-600 text-sm text-center font-bold bg-red-50 p-2 rounded">{error}</p>}

                  <button
                    type="submit"
                    className="w-full py-4 bg-deep-maroon text-wedding-gold font-decorative text-xl tracking-wider rounded-lg shadow-lg hover:shadow-2xl hover:bg-wedding-red transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                  >
                    <span>Send Blessings</span>
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                </form>
              )}

              {step === 'submitting' && (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="relative">
                    <div className="absolute inset-0 bg-wedding-gold rounded-full opacity-20 animate-ping"></div>
                    <Loader2 className="w-16 h-16 text-wedding-red animate-spin relative z-10" />
                  </div>
                  <p className="text-deep-maroon font-serif text-xl mt-8">Sending your love to the couple...</p>
                </div>
              )}

              {step === 'success' && (
                <div className="py-8 text-center animate-fade-in-up">
                  <div className="w-24 h-24 mx-auto bg-wedding-red text-wedding-gold rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-wedding-gold">
                    <span className="text-5xl">ॐ</span>
                  </div>
                  
                  <h3 className="text-3xl font-decorative text-deep-maroon mb-2">Dhanyavad!</h3>
                  <p className="text-xl text-wedding-red font-medium mb-6 font-serif">Namaste, {name}</p>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-6 relative">
                    <p className="text-gray-800 font-serif italic text-lg leading-relaxed">
                      "We eagerly await your presence. Your blessing of <strong>{guests} guest{guests > 1 ? 's' : ''}</strong> has been received with gratitude."
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">
                    Jai Shree Krishna
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;