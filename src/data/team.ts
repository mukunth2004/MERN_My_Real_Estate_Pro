export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'With 20 years of real estate experience, John founded RealEstatePro with a vision to revolutionize property transactions.'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Maria brings 15 years of luxury real estate expertise and leads our exceptional sales team.'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'David oversees our technological innovations, ensuring a seamless digital experience for our clients.'
  }
];