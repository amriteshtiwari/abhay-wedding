import { WeddingEvent, CoupleProfile } from './types';

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: '1',
    title: 'Tilak Ceremony',
    date: 'February 04, 2026',
    time: '6:00 PM Onwards',
    location: 'Buxar, Bihar',
    address: 'VishwaMitra Colony, Near Baba Dhram Kanta ,Golomber , Buxar , Bihar',
    description: 'A vibrant evening of traditional music, henna, and dance performances. Let the rhythm of the Ghats move you!',
    icon: 'music',
    mapUrl: 'https://maps.app.goo.gl/7Wm7n3bMxYSbT14Q6'
  },
  {
    id: '2',
    title: 'Shubh Haldi',
    date: 'February 06, 2026',
    time: '10:00 AM',
    location: 'Buxar, Bihar',
    address: 'VishwaMitra Colony, Near Baba Dhram Kanta ,Golomber , Buxar , Bihar',
    description: 'A sun-kissed morning where we drench the couple in turmeric and love. Dress code: Sunshine Yellow.',
    icon: 'sun',
    mapUrl: 'https://maps.app.goo.gl/7Wm7n3bMxYSbT14Q6'
  },
  {
    id: '3',
    title: 'The Wedding (Vivah)',
    date: 'February 10, 2026',
    time: '7:00 PM',
    location: 'Buxar, Bihar',
    address: 'Rajwada Palace, Dalsagar, Buxar, Bihar',
    description: 'Witness the sacred Pheras and the union of Abhay and Tannu in the holy city of Buxar.',
    icon: 'ring',
    mapUrl: 'https://maps.app.goo.gl/7Wm7n3bMxYSbT14Q6'
  },
];

export const COUPLE_DATA: CoupleProfile[] = [
  {
    id: 'groom',
    name: 'Abhay Tiwari',
    title: 'The Groom',
    images: [
      'https://images.unsplash.com/photo-1595986790924-a3d53754f9a0?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586723223945-8c764b8d745c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop'
    ],
    introduction: "Abhay is a man of few words but a heart full of gold. Known for his calm demeanor and witty humor, he lights up every room he enters. An avid traveler and a photography enthusiast, he believes in capturing moments rather than just living them.",
    work: "Senior Architect at Skyline Designs. Abhay has designed sustainable housing projects across 3 continents.",
    education: "Masters in Architecture from IIT Bombay. B.Arch from SPA Delhi.",
    family: {
      grandParents: [
        { id: 'gp1', name: 'Lt. Ram Tiwari', relation: 'Grandfather', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', bio: 'The pillar of our family values.' }
      ],
      parents: [
        { id: 'p1', name: 'Mr. Mithilesh Kumar Tiwari', relation: 'Father', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', bio: 'A retired army officer with a strict discipline but a soft heart.' },
        { id: 'p2', name: 'Mrs. Sunita Devi', relation: 'Mother', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', bio: 'The sweetest soul and the best cook in Varanasi.' }
      ],
      siblings: [
        { id: 's1', name: 'Amritesh Tiwari', relation: 'Brother', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', bio: 'Tech enthusiast and Abhay’s partner in crime.' }
      ]
    }
  },
  {
    id: 'bride',
    name: 'Tannu Kunwar',
    title: 'The Bride',
    images: [
      'https://images.unsplash.com/photo-1616782299839-4467c6b9b3e1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588665042459-002f664b4c78?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558282716-e9105311802d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop'
    ],
    introduction: "Tannu is the life of the party and a dreamer at heart. With a contagious laugh and an artistic soul, she finds beauty in the smallest of things. She loves classical dance and has trained in Kathak for 15 years.",
    work: "Lead UI/UX Designer at Creative Pulse. Tannu crafts digital experiences that users fall in love with.",
    education: "Masters in Design from NID Ahmedabad. Bachelors in Fine Arts.",
    family: {
      grandParents: [
        { id: 'gp2', name: 'Mrs. Leela Kuwer', relation: 'Grandmother', image: 'https://images.unsplash.com/photo-1551843022-4cc71848a716?q=80&w=200&auto=format&fit=crop', bio: 'Our storyteller and guardian angel.' }
      ],
      parents: [
        { id: 'p3', name: 'Mr. RadheyShyam Kunwar', relation: 'Father', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop', bio: 'A businessman who taught Tannu to aim for the stars.' },
        { id: 'p4', name: 'Mrs. Laxmi Devi', relation: 'Mother', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop', bio: 'A professor of literature and Tannu’s best friend.' }
      ],
      siblings: [
        { id: 's2', name: 'Kavya Kuwer', relation: 'Sister', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', bio: 'Fashionista and the official wedding planner.' }
      ]
    }
  }
];