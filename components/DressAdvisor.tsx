
import React, { useState, useRef } from 'react';
import { Camera, Sparkles, Loader2, RefreshCw, Download, User, Users } from 'lucide-react';
import { generateRoyalLook } from '../services/geminiService';

const DressAdvisor: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gender, setGender] = useState<'masculine' | 'feminine' | 'neutral'>('neutral');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!sourceImage) return;
    setLoading(true);
    setError(null);
    try {
      const result = await generateRoyalLook(sourceImage, gender);
      setGeneratedImage(result);
    } catch (err) {
      setError("The AI Stylist is busy. Please try again in a moment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'My-Royal-Look.png';
    link.click();
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <section className="py-24 bg-wedding-cream px-4 scroll-mt-28" id="stylist">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-deep-maroon rounded-full shadow-lg mb-6 text-wedding-gold ring-4 ring-wedding-gold/30">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-decorative text-deep-maroon mb-4">Shringar AI Mirror</h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto italic">
            Experience the royalty of Varanasi. <br/>
            Upload your photo and let our AI "dress" you in exquisite wedding couture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls & Upload */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-wedding-red">
              <h3 className="text-xl font-decorative text-deep-maroon mb-6 text-center">Step 1: Your Photo</h3>
              
              <div 
                className={`aspect-[3/4] rounded-xl border-2 border-dashed border-wedding-gold/50 flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden bg-orange-50/30 hover:bg-orange-50 relative ${sourceImage ? 'border-solid' : ''}`}
                onClick={triggerFileInput}
              >
                {sourceImage ? (
                  <>
                    <img src={sourceImage} alt="Source" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                      <p className="text-white font-bold">Change Photo</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-6">
                    <Camera className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
                    <p className="text-deep-maroon font-bold">Upload Portrait</p>
                    <p className="text-xs text-gray-400 mt-2">Clear face shots work best</p>
                  </div>
                )}
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />

              <div className="mt-8 space-y-4">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">Choose Style Preference</p>
                <div className="flex gap-2">
                  {[
                    { id: 'feminine', label: 'Lehenga', icon: <User className="w-4 h-4" /> },
                    { id: 'masculine', label: 'Sherwani', icon: <User className="w-4 h-4" /> },
                    { id: 'neutral', label: 'Indo-West', icon: <Users className="w-4 h-4" /> }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGender(opt.id as any)}
                      className={`flex-1 py-2 px-1 rounded-lg text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                        gender === opt.id 
                          ? 'bg-deep-maroon text-wedding-gold border-wedding-gold shadow-md' 
                          : 'bg-white text-gray-400 border-gray-200 hover:border-wedding-gold'
                      }`}
                    >
                      {opt.icon}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!sourceImage || loading}
                className={`w-full mt-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                  !sourceImage || loading 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-deep-maroon text-wedding-gold hover:bg-wedding-red hover:scale-[1.02]'
                }`}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {generatedImage ? 'Try Different Look' : 'Generate Royal Look'}
              </button>
              {error && <p className="text-red-500 text-xs mt-4 text-center font-bold">{error}</p>}
            </div>
          </div>

          {/* AI Result Area */}
          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px] border-8 border-double border-wedding-gold/20 flex flex-col items-center justify-center p-4">
              
              {!loading && !generatedImage && (
                <div className="text-center space-y-6 max-w-md animate-pulse">
                  <div className="w-32 h-32 bg-wedding-gold/5 rounded-full flex items-center justify-center mx-auto border-4 border-dashed border-wedding-gold/20">
                    <RefreshCw className="w-12 h-12 text-wedding-gold/20" />
                  </div>
                  <h3 className="text-2xl font-decorative text-gray-300">Your Portrait Will Appear Here</h3>
                  <p className="text-gray-400 font-serif">Upload your photo and select a style to begin the transformation.</p>
                </div>
              )}

              {loading && (
                <div className="text-center space-y-8 py-12">
                   <div className="relative">
                      <div className="w-48 h-48 rounded-full border-4 border-wedding-gold border-t-transparent animate-spin mx-auto"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles className="w-12 h-12 text-wedding-gold animate-bounce" />
                      </div>
                   </div>
                   <div>
                     <p className="text-2xl font-decorative text-deep-maroon">Invoking the Royal Stylist...</p>
                     <p className="text-wedding-red font-serif mt-2">Crafting your bespoke Varanasi attire</p>
                   </div>
                </div>
              )}

              {generatedImage && !loading && (
                <div className="w-full max-w-2xl animate-fade-in-up">
                  <div className="relative group">
                    {/* The Royal Frame */}
                    <div className="absolute -inset-4 border-[12px] border-double border-wedding-gold pointer-events-none z-10 opacity-60"></div>
                    <img 
                      src={generatedImage} 
                      alt="Your Royal Look" 
                      className="w-full h-auto rounded-sm shadow-2xl block"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute bottom-6 right-6 flex gap-4 z-20">
                      <button 
                        onClick={downloadImage}
                        className="bg-white/90 backdrop-blur p-4 rounded-full text-deep-maroon shadow-xl hover:bg-wedding-red hover:text-white transition-all transform hover:scale-110"
                        title="Download Portrait"
                      >
                        <Download className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center">
                    <h4 className="text-3xl font-decorative text-deep-maroon mb-2">You look breathtaking!</h4>
                    <p className="text-gray-500 font-serif italic">This ensemble is inspired by the heritage of Kashi.</p>
                  </div>
                </div>
              )}

              {/* Decorative background for the mirror */}
              <div className="absolute inset-0 bg-mandala-pattern opacity-[0.03] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DressAdvisor;
