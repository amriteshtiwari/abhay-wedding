import React, { useState, useRef } from 'react';
import { Camera, Sparkles, Loader2, Upload, Shirt } from 'lucide-react';
import { suggestOutfits } from '../services/geminiService';
import { OutfitSuggestion } from '../types';

const DressAdvisor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<OutfitSuggestion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setSuggestions([]); 
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const results = await suggestOutfits(image);
      setSuggestions(results);
    } catch (err) {
      setError("Failed to generate suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-wedding-cream px-4 scroll-mt-28" id="stylist">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-deep-maroon rounded-full shadow-lg mb-6 text-wedding-gold ring-4 ring-wedding-gold/30">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-decorative text-deep-maroon mb-4">Royal Attire Consultant</h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto italic">
            "Every wedding is a royal affair." <br/>
            Allow our AI stylist to suggest the perfect traditional ensemble for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-wedding-red">
            <div 
              className={`aspect-[3/4] rounded-xl border-2 border-dashed border-wedding-gold/50 flex flex-col items-center justify-center cursor-pointer transition-colors bg-orange-50/30 ${!image ? 'hover:bg-orange-50' : ''}`}
              onClick={triggerFileInput}
            >
              {image ? (
                <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-xl shadow-inner" />
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-wedding-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-wedding-gold" />
                  </div>
                  <p className="text-deep-maroon font-bold text-lg">Upload Photo</p>
                  <p className="text-sm text-gray-500 mt-2 font-serif">We will analyze your features to suggest colors & styles</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className={`w-full mt-8 py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                !image || loading 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-deep-maroon text-wedding-gold hover:bg-wedding-red'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Consulting Stylist...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Get Suggestions
                </>
              )}
            </button>
            {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
          </div>

          {/* Results Section */}
          <div className="lg:col-span-8">
            {!loading && suggestions.length === 0 && !image && (
               <div className="h-full flex flex-col items-center justify-center p-12 bg-white/50 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                 <Shirt className="w-20 h-20 text-gray-200 mb-6" />
                 <h3 className="text-xl font-decorative text-gray-400">Your personalized style awaits</h3>
               </div>
            )}

            {!loading && suggestions.length === 0 && image && !error && (
              <div className="h-full flex items-center justify-center p-12 bg-white/50 rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-deep-maroon font-serif italic text-xl">Creating your royal lookbook...</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group animate-fade-in-up" style={{animationDelay: `${idx * 150}ms`}}>
                  <div className="h-2 bg-gradient-to-r from-wedding-red to-deep-maroon"></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-decorative text-deep-maroon mb-3 group-hover:text-wedding-red transition-colors">{item.name}</h3>
                    <p className="text-gray-600 mb-6 font-serif leading-relaxed border-b border-gray-100 pb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Palette</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.colorPalette.map((color, cIdx) => (
                          <span key={cIdx} className="px-3 py-1 bg-gray-50 text-deep-maroon text-xs font-bold rounded-full border border-gray-200 shadow-sm">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <h4 className="text-xs font-bold text-wedding-gold uppercase tracking-widest mb-1">Stylist's Note</h4>
                      <p className="text-sm text-deep-maroon italic">{item.matchReason}</p>
                    </div>
                    
                    <div>
                       <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Tip: <span className="text-gray-700 normal-case font-serif">{item.stylingTips}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressAdvisor;