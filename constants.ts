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
    time: '10:00 AM Onwards',
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
    time: '7:00 PM Onwards',
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
      '/images/abhay-1.jpeg',
      '/images/abhay-2.jpeg',
      '/images/abhay-3.jpeg',
      '/images/abhay-4.jpeg',
      '/images/abhay-5.jpeg'
    ],
    introduction: "Abhay is a man of few words but a heart full of gold. Known for his calm demeanor and witty humor, he lights up every room he enters. An avid traveler and a photography enthusiast, he believes in capturing moments rather than just living them.",
    work: "Senior Software Engineer at Corecard. Abhay is passionate about building scalable web applications and exploring new technologies.",
    education: "B.tech in Machinical Engineering at Bansal Institute of Science and Technology, Bhopal.",
    family: {
      grandParents: [
        { id: 'gp1', name: 'Ravindra Nath Tiwari', relation: 'Grandfather', image: '/images/rabindra.jpeg', bio: 'The pillar of our family values.' }
      ],
      parents: [
        { id: 'p1', name: 'Mr. Mithilesh Kumar Tiwari', relation: 'Father', image: '/images/m.jpeg', bio: 'A Sub inspector with a strict discipline but a soft heart.' },
        { id: 'p2', name: 'Mrs. Sunita Devi', relation: 'Mother', image: '/images/s.jpeg', bio: 'The sweetest soul and the best cook in .' }
      ],
      siblings: [
        { id: 's1', name: 'Amritesh Tiwari', relation: 'Brother', image: '/images/amritesh.jpeg', bio: 'Tech enthusiast and Abhay’s partner in crime.' }
      ]
    }
  },
  {
    id: 'bride',
    name: 'Tannu Kunwar',
    title: 'The Bride',
    images: [
      '/images/tannu-1.jpeg',
      '/images/tannu-2.jpeg',
      '/images/tannu-3.jpeg',
      '/images/tannu-4.jpeg',
      '/images/tannu-5.jpeg'
    ],
    introduction: "Tannu is the life of the party and a dreamer at heart. With a contagious laugh and an artistic soul, she finds beauty in the smallest of things. She loves classical dance and has trained in Kathak for 15 years.",
    work: "Lead UI/UX Designer at Creative Pulse. Tannu crafts digital experiences that users fall in love with.",
    education: "Masters in Design from NID Ahmedabad. Bachelors in Fine Arts.",
    family: {
      grandParents: [
      ],
      parents: [
        { id: 'p3', name: 'Mr. RadheyShyam Kunwar', relation: 'Father', image: '/images/radhey.jpeg', bio: '' },
        { id: 'p4', name: 'Mrs. Laxmi Devi', relation: 'Mother', image: '/images/laxmi.jpeg', bio: '' }
      ],
      siblings: [
        { id: 's2', name: 'Durga', relation: 'Sister', image: '/images/durga.jpeg', bio: '' },
        { id: 's2', name: 'Pooja', relation: 'Sister', image: '/images/pooja.jpeg', bio: '' },
        { id: 's2', name: 'Omprakash Kuwer', relation: 'Brother', image: '/images/om.jpeg', bio: '' },
        { id: 's2', name: 'Jai prakash Kuwer', relation: 'Brother', image: '/images/Jai.jpeg', bio: '' }
      ]
    }
  }
];