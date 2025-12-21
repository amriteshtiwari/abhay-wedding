import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Users, User, Quote } from 'lucide-react';
import { COUPLE_DATA } from '../constants';
import { CoupleProfile, FamilyMember } from '../types';

const CoupleProfileSection: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<CoupleProfile | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFamilyMember, setActiveFamilyMember] = useState<string | null>(null);

  const openProfile = (profile: CoupleProfile) => {
    setSelectedProfile(profile);
    setCurrentImageIndex(0);
    setActiveFamilyMember(null);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeProfile = () => {
    setSelectedProfile(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProfile) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProfile.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProfile) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProfile.images.length) % selectedProfile.images.length);
    }
  };

  const toggleFamilyInfo = (id: string) => {
    setActiveFamilyMember(activeFamilyMember === id ? null : id);
  };

  return (
    <section className="py-24 bg-wedding-cream relative scroll-mt-28" id="couple">
       {/* Decorative Dividers */}
       <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
        <div className="bg-white px-4">
           <div className="w-8 h-8 rotate-45 border-2 border-wedding-gold bg-deep-maroon"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-decorative text-deep-maroon mb-4">Know the Couple</h2>
          <div className="flex justify-center items-center gap-2 mb-4 opacity-70">
            <span className="h-px w-12 bg-wedding-gold"></span>
            <span className="text-wedding-gold text-lg font-script">Rab Ne Bana Di Jodi</span>
            <span className="h-px w-12 bg-wedding-gold"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {COUPLE_DATA.map((profile) => (
            <div 
              key={profile.id} 
              className="group relative cursor-pointer"
              onClick={() => openProfile(profile)}
            >
              {/* Card Container */}
              <div className="relative h-[500px] rounded-t-[150px] rounded-b-xl overflow-hidden border-4 border-wedding-gold/30 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={profile.images[0]} 
                  alt={profile.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/90 via-deep-maroon/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-center text-wedding-gold">
                  <p className="font-decorative text-xl mb-2 tracking-widest uppercase">{profile.title}</p>
                  <h3 className="font-serif text-4xl mb-4 text-white">{profile.name}</h3>
                  <button className="inline-block px-6 py-2 border border-wedding-gold rounded-full text-xs font-bold uppercase tracking-widest hover:bg-wedding-gold hover:text-deep-maroon transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProfile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeProfile}
        >
          <div 
            className="bg-wedding-cream w-full max-w-5xl rounded-xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button 
              onClick={closeProfile}
              className="absolute top-4 right-4 z-50 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-wedding-red transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              {/* Left Side: Image Slider */}
              <div className="w-full md:w-2/5 relative h-[400px] md:h-auto shrink-0 bg-black">
                <img 
                  src={selectedProfile.images[currentImageIndex]} 
                  alt="Gallery" 
                  className="w-full h-full object-cover opacity-90"
                />
                
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button onClick={prevImage} className="p-2 bg-black/30 text-white rounded-full hover:bg-wedding-gold hover:text-deep-maroon transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextImage} className="p-2 bg-black/30 text-white rounded-full hover:bg-wedding-gold hover:text-deep-maroon transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
                  {selectedProfile.images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-wedding-gold w-4' : 'bg-white/50'}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto scrollbar-hide">
                <div className="mb-8 border-b border-wedding-gold/20 pb-6">
                  <h3 className="font-decorative text-4xl text-deep-maroon mb-2">{selectedProfile.name}</h3>
                  <span className="px-3 py-1 bg-wedding-red/10 text-wedding-red text-xs font-bold uppercase tracking-widest rounded-full border border-wedding-red/20">
                    {selectedProfile.title}
                  </span>
                </div>

                {/* Introduction */}
                <div className="mb-10 relative">
                  <Quote className="absolute -top-4 -left-2 w-8 h-8 text-wedding-gold/20 rotate-180" />
                  <p className="text-gray-700 font-serif text-lg leading-relaxed pl-6 italic">
                    {selectedProfile.introduction}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-6 mb-12">
                   <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-orange-100 shadow-sm">
                      <div className="p-3 bg-deep-maroon text-wedding-gold rounded-full shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-decorative text-deep-maroon text-lg mb-1">Work</h4>
                        <p className="text-gray-600 font-serif text-sm">{selectedProfile.work}</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-orange-100 shadow-sm">
                      <div className="p-3 bg-deep-maroon text-wedding-gold rounded-full shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-decorative text-deep-maroon text-lg mb-1">Education</h4>
                        <p className="text-gray-600 font-serif text-sm">{selectedProfile.education}</p>
                      </div>
                   </div>
                </div>

                {/* Family Tree */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="text-wedding-red w-5 h-5" />
                    <h4 className="font-decorative text-2xl text-deep-maroon">Family Tree</h4>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-8 relative">
                    {/* Vertical Connecting Line (Simple CSS trick) */}
                    <div className="absolute top-10 bottom-10 left-1/2 w-px bg-wedding-gold/40 -z-10 hidden md:block"></div>

                    {/* Level 1: Grandparents */}
                    {selectedProfile.family.grandParents.length > 0 && (
                      <div className="flex gap-8 justify-center w-full">
                        {selectedProfile.family.grandParents.map(member => (
                          <FamilyNode 
                            key={member.id} 
                            member={member} 
                            isActive={activeFamilyMember === member.id}
                            onClick={() => toggleFamilyInfo(member.id)}
                          />
                        ))}
                      </div>
                    )}

                    {/* Level 2: Parents */}
                    <div className="flex gap-8 justify-center w-full">
                      {selectedProfile.family.parents.map(member => (
                          <FamilyNode 
                            key={member.id} 
                            member={member} 
                            isActive={activeFamilyMember === member.id}
                            onClick={() => toggleFamilyInfo(member.id)}
                          />
                      ))}
                    </div>

                    {/* Level 3: Siblings */}
                    {selectedProfile.family.siblings.length > 0 && (
                      <div className="flex gap-8 justify-center w-full">
                        {selectedProfile.family.siblings.map(member => (
                          <FamilyNode 
                            key={member.id} 
                            member={member} 
                            isActive={activeFamilyMember === member.id}
                            onClick={() => toggleFamilyInfo(member.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-component for Family Member Node
const FamilyNode: React.FC<{ 
  member: FamilyMember; 
  isActive: boolean; 
  onClick: () => void; 
}> = ({ member, isActive, onClick }) => {
  return (
    <div className="relative flex flex-col items-center group">
      <div 
        onClick={onClick}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 p-1 cursor-pointer transition-all duration-300 ${isActive ? 'border-wedding-red scale-110 shadow-lg' : 'border-wedding-gold hover:border-wedding-red'}`}
      >
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-xs font-bold text-deep-maroon mt-2">{member.relation}</p>
      
      {/* Popover Info */}
      <div className={`absolute bottom-full mb-3 w-48 bg-white p-3 rounded-lg shadow-xl border border-wedding-gold/20 text-center transition-all duration-300 z-20 ${isActive ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
        <p className="font-bold text-wedding-red text-sm mb-1">{member.name}</p>
        <p className="text-xs text-gray-600 font-serif italic leading-tight">"{member.bio}"</p>
        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-wedding-gold/20"></div>
      </div>
    </div>
  );
};

export default CoupleProfileSection;