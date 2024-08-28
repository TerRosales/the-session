import { images } from "../assets/images";

// routes paths
export const pages = [
  { name: "About", path: "/" },
  { name: "Mission", path: "/mission" },
  { name: "Join", path: "/signup" },
  { name: "Movements", path: "/movements" },
];
export interface HomeContent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  instructor: string;
}

export const quote: HomeContent[] = [
  {
    id: 1,
    title: "Unleash Your Rhythm!",
    description:
      "Breakdance your way into a new passion! Join our sessions and elevate your moves to the next level.",
    date: "2024-09-01",
    location: "Downtown Studio",
    image: images.general[0], // Access the first image in the 'general' category
    instructor: "John 'Bboy Blaze' Doe",
  },
  {
    id: 2,
    title: "Flip the Script!",
    description:
      "Break free from the ordinary and learn the art of breakdancing. Join our sessions—because dancing is more than just a move, it's a lifestyle.",
    date: "2024-09-08",
    location: "Urban Dance Hub",
    image: images.dance[0], // Access the first image in the 'dance' category
    instructor: "Jane 'Twist' Smith",
  },
  {
    id: 3,
    title: "Step Into the Spotlight!",
    description:
      "Learn how to breakdance and show the world your unique style! Our sessions are the perfect place to start your journey.",
    date: "2024-09-15",
    location: "Open Air Plaza",
    image: images.hero[0], // Access the first image in the 'hero' category
    instructor: "Alex 'Spin' Johnson",
  },
  {
    id: 4,
    title: "Feel the Beat, Own the Floor!",
    description:
      "Ready to learn some jaw-dropping moves? Our breakdance sessions are where you'll find your rhythm.",
    date: "2024-09-22",
    location: "Rooftop Lounge",
    image: images.instructors[0], // Access the first image in the 'instructors' category
    instructor: "Sam 'Flow' Lee",
  },
  {
    id: 5,
    title: "Master the Moves!",
    description:
      "Breakdancing isn’t just a dance; it's a statement. Come learn with us and show off your skills.",
    date: "2024-09-29",
    location: "Underground Club",
    image: images.instructors[1], // Access the second image in the 'instructors' category
    instructor: "Kim 'Freeze' Brown",
  },
];

// Upcoming events dummy data

export const events: HomeContent[] = [
  {
    id: 6,
    title: "Sunday Session",
    description:
      "Join us for an epic breakdance jam with top dancers from around the world. Don't miss out!",
    date: "2024-09-12",
    location: "Central Park",
    image: images.hero[3], // Example image from 'dance' category
    instructor: "Dave 'Whirlwind' Evans",
  },
  {
    id: 7,
    title: "Labor Day Dance-off",
    description:
      "Get ready for a day full of dance workshops, competitions, and fun in the sun!",
    date: "2024-08-30",
    location: "Beachside Arena",
    image: images.hero[6], // Example image from 'general' category
    instructor: "Mia 'Twist' Turner",
  },
  {
    id: 8,
    title: "X-mas Power Jam",
    description:
      "Power up on the cold Snow! Bring Your friends and melt up the dance floor!",
    date: "2024-12-20",
    location: "Winter Wonderland Plaza",
    image: images.hero[7], // Example image from 'hero' category
    instructor: "Liam 'Ice' Carter",
  },
  {
    id: 9,
    title: "New Year Dance Party",
    description:
      "Start the new year with a bang at our special New Year Dance Party. Dance to the beats and enjoy the celebrations!",
    date: "2025-01-01",
    location: "City Hall Square",
    image: images.hero[4], // Example image from 'instructors' category
    instructor: "Eva 'Storm' Rivera",
  },
  {
    id: 10,
    title: "Spring Break Jam",
    description:
      "Celebrate the arrival of spring with an exciting breakdance jam. Fresh moves, cool beats, and great vibes!",
    date: "2025-03-15",
    location: "Sunnyvale Park",
    image: images.hero[5], // Example image from 'dance' category
    instructor: "Carlos 'Spin' Rodriguez",
  },
];

export const checklistData = {
  termsAndCondition: {
    checklist: [
      { id: 1, checked: false, text: "Agree to the Terms of Service" },
      { id: 2, checked: false, text: "Accept the Privacy Policy" },
      { id: 3, checked: false, text: "Subscribe to the Newsletter" },
      { id: 4, checked: false, text: "Agree to the Cookie Policy" },
      { id: 5, checked: false, text: "Review the User Agreement" },
    ],
  },
};

export const checklistData2 = {
  termsAndCondition: {
    guest: [
      { id: 1, checked: false, text: "Agree to the Terms of Service" },
      { id: 2, checked: false, text: "Accept the Privacy Policy" },
      { id: 3, checked: false, text: "Opt into Promotional Emails" },
      { id: 4, checked: false, text: "Agree to the Cookie Policy" },
      { id: 5, checked: false, text: "Review the Community Guidelines" },
    ],
    learner: [
      { id: 1, checked: false, text: "Agree to the Learning Agreement" },
      { id: 2, checked: false, text: "Accept the Privacy Policy" },
      { id: 3, checked: false, text: "Join the Study Group" },
      { id: 4, checked: false, text: "Agree to the Academic Honesty Policy" },
      { id: 5, checked: false, text: "Review the Course Terms" },
    ],
    host: [
      { id: 1, checked: false, text: "Agree to the Host Terms of Service" },
      { id: 2, checked: false, text: "Accept the Event Policy" },
      { id: 3, checked: false, text: "Provide Emergency Contact Info" },
      { id: 4, checked: false, text: "Agree to the Liability Waiver" },
      { id: 5, checked: false, text: "Review the Venue Guidelines" },
    ],
    instructor: [
      { id: 1, checked: false, text: "Agree to the Instructor Agreement" },
      { id: 2, checked: false, text: "Accept the Code of Conduct" },
      { id: 3, checked: false, text: "Complete the Background Check" },
      { id: 4, checked: false, text: "Agree to the Payment Terms" },
      { id: 5, checked: false, text: "Review the Course Materials Policy" },
    ],
  },
};
