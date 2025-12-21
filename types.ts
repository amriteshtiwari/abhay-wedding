
export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  icon: 'music' | 'sun' | 'ring' | 'party'; // Simple mapping for UI icons
  mapUrl: string;
}

export interface OutfitSuggestion {
  name: string;
  description: string;
  colorPalette: string[];
  stylingTips: string;
  matchReason: string;
}

export interface RSVPState {
  name: string;
  attending: boolean;
  guests: number;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  image: string;
  bio: string;
}

export interface CoupleProfile {
  id: 'groom' | 'bride';
  name: string;
  title: string; // e.g., "The Groom"
  images: string[];
  introduction: string;
  work: string;
  education: string;
  family: {
    grandParents: FamilyMember[];
    parents: FamilyMember[];
    siblings: FamilyMember[];
  };
}
