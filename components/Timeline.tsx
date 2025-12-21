import React from 'react';
import { WEDDING_EVENTS } from '../constants';
import { Music, Sun, Crown, PartyPopper, MapPin, Calendar, Clock, Navigation } from 'lucide-react';

const Timeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'music': return <Music className="w-6 h-6" />;
      case 'sun': return <Sun className="w-6 h-6" />;
      case 'ring': return <Crown className="w-6 h-6" />;
      case 'party': return <PartyPopper className="w-6 h-6" />;
      default: return <Crown className="w-6 h-6" />;
    }
  };

  return (
    <section id="events" className="py-28 bg-wedding-cream relative overflow-hidden scroll-mt-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wedding-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wedding-red/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
             <div className="h-16 w-16 border-2 border-wedding-gold rotate-45 flex items-center justify-center bg-white shadow-xl">
               <span className="text-wedding-gold font-decorative text-2xl -rotate-45">ॐ</span>
             </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-decorative text-deep-maroon mb-6">Wedding Itinerary</h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-wedding-gold"></span>
            <span className="text-wedding-gold font-script text-3xl">Our Sacred Moments</span>
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-wedding-gold"></span>
          </div>
        </div>

        <div className="relative">
          {/* Central Ornate Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 transform md:-translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-wedding-gold/20 via-wedding-gold to-wedding-gold/20 border-r-2 border-dashed border-wedding-gold/40"></div>
          </div>

          <div className="space-y-24">
            {WEDDING_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              const dayNumber = `0${Math.ceil((index + 1) / 2)}`;

              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-center w-full group">
                  
                  {/* Timeline Marker (Floating Lotus/Circle) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-wedding-gold rounded-full flex items-center justify-center text-deep-maroon shadow-2xl group-hover:scale-110 group-hover:bg-wedding-gold group-hover:text-white transition-all duration-500">
                      {getIcon(event.icon)}
                    </div>
                    {/* Day Tag for Desktop */}
                    <div className="hidden md:block mt-2 px-2 py-0.5 bg-deep-maroon text-wedding-gold text-[10px] font-bold uppercase tracking-widest rounded-sm border border-wedding-gold/30">
                      Event {index + 1}
                    </div>
                  </div>

                  {/* Left Side (Desktop Only) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-20 lg:pr-32 text-right' : ''}`}>
                    {!isEven && (
                      <div className="p-4 inline-block">
                         <h4 className="text-8xl font-decorative text-wedding-gold/10 select-none">#{index + 1}</h4>
                      </div>
                    )}
                  </div>

                  {/* Right/Content Side */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-20 lg:pl-32' : 'md:pr-20 lg:pr-32'}`}>
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-l-8 border-wedding-red relative group-hover:-translate-y-2 transition-transform duration-500 bg-paper-texture">
                      
                      {/* Event Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h3 className="text-3xl font-decorative text-deep-maroon tracking-tight">{event.title}</h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-wedding-red/5 border border-wedding-red/10 rounded-full">
                          <Clock className="w-4 h-4 text-wedding-red" />
                          <span className="text-sm font-bold text-wedding-red">{event.time}</span>
                        </div>
                      </div>

                      {/* Date Block */}
                      <div className="flex items-center gap-3 mb-6 text-gray-500 border-b border-dashed border-gray-100 pb-4">
                        <Calendar className="w-5 h-5 text-wedding-gold" />
                        <span className="font-serif text-lg font-medium">{event.date}</span>
                      </div>

                      <p className="text-gray-600 font-serif text-lg leading-relaxed mb-8 italic">
                        {event.description}
                      </p>

                      {/* Location Card */}
                      <div className="bg-orange-50/50 p-6 rounded-xl border border-wedding-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-full text-wedding-red shadow-sm border border-orange-100">
                             <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="block font-bold text-deep-maroon text-lg">{event.location}</span>
                            <span className="block text-sm text-gray-500 font-serif">{event.address}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-deep-maroon text-wedding-gold rounded-full hover:bg-wedding-red transition-colors shadow-md text-sm font-bold uppercase tracking-wider group/btn"
                        >
                          <Navigation className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          Directions
                        </a>
                      </div>

                      {/* Decorative Corner Motif */}
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                         <div className="w-12 h-12 border-t-2 border-r-2 border-wedding-gold rounded-tr-xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Spacer for Alternating Layout */}
                  <div className={`hidden md:block w-1/2 ${!isEven ? 'pl-20 lg:pl-32' : ''}`}>
                    {isEven && (
                       <div className="p-4">
                          <h4 className="text-8xl font-decorative text-wedding-gold/10 select-none">#{index + 1}</h4>
                       </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;