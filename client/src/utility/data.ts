import { images } from "../assets/images";

// routes paths
export const pages = [
  { name: "About", path: "/" },
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

// Upcoming events dummy data

export const events: HomeContent[] = [
  {
    id: 1,
    title: "Sunday Session",
    description:
      "Join us for an epic breakdance jam with top dancers from around the world. Don't miss out!",
    date: "2024-09-12",
    location: "Central Park",
    image: images.hero[11], // Example image from 'dance' category
    instructor: "Dave 'Whirlwind' Evans",
  },
  {
    id: 2,
    title: "Labor Day Dance-off",
    description:
      "Get ready for a day full of dance workshops, competitions, and fun in the sun!",
    date: "2024-08-30",
    location: "Beachside Arena",
    image: images.hero[1], // Example image from 'general' category
    instructor: "Mia 'Twist' Turner",
  },
  {
    id: 3,
    title: "X-mas Power Jam",
    description:
      "Power up on the cold Snow! Bring Your friends and melt up the dance floor!",
    date: "2024-12-20",
    location: "Winter Wonderland Plaza",
    image: images.hero[16], // Example image from 'hero' category
    instructor: "Liam 'Ice' Carter",
  },
  {
    id: 4,
    title: "New Year Dance Party",
    description:
      "Start the new year with a bang at our special New Year Dance Party. Dance to the beats and enjoy the celebrations!",
    date: "2025-01-01",
    location: "City Hall Square",
    image: images.hero[4], // Example image from 'instructors' category
    instructor: "Eva 'Storm' Rivera",
  },
  {
    id: 5,
    title: "Spring Break Jam",
    description:
      "Celebrate the arrival of spring with an exciting breakdance jam. Fresh moves, cool beats, and great vibes!",
    date: "2025-03-15",
    location: "Sunnyvale Park",
    image: images.hero[5], // Example image from 'dance' category
    instructor: "Carlos 'Spin' Rodriguez",
  },
  {
    id: 6,
    title: "Autumn Break Battle",
    description:
      "Battle it out in the heart of the city as the leaves fall! Show your style and take the crown.",
    date: "2024-10-10",
    location: "Downtown Square",
    image: images.hero[8], // Example image from 'battle' category
    instructor: "Jenny 'Hurricane' Lee",
  },
  {
    id: 7,
    title: "Halloween Freestyle Night",
    description:
      "Bring your spookiest moves to our Halloween freestyle event. Prizes for the best dance and best costume!",
    date: "2024-10-31",
    location: "The Spooky Arena",
    image: images.hero[9], // Example image from 'freestyle' category
    instructor: "Zane 'Phantom' Brooks",
  },
  {
    id: 8,
    title: "Thanksgiving Dance Feast",
    description:
      "A dance-off and a feast! Give thanks and break it down with amazing performers from all over.",
    date: "2024-11-28",
    location: "Harvest Hall",
    image: images.hero[10], // Example image from 'festival' category
    instructor: "Sasha 'Blaze' Williams",
  },
  {
    id: 9,
    title: "Winter Solstice Spin",
    description:
      "The longest night of the year calls for the longest session of breakdance madness. Warm up with some hot moves!",
    date: "2024-12-21",
    location: "Frosty Fields",
    image: images.hero[11], // Example image from 'winter' category
    instructor: "Oscar 'Freeze' Delgado",
  },
  {
    id: 10,
    title: "Summer Heat Showdown",
    description:
      "Get ready to sweat it out under the sun in this ultimate summer dance-off. Only the coolest moves will survive!",
    date: "2025-07-15",
    location: "Sunset Beach Stage",
    image: images.hero[4], // Example image from 'summer' category
    instructor: "Lena 'Flare' Thompson",
  },
  {
    id: 11,
    title: "Midnight Rooftop Jam",
    description:
      "Take your dance to new heights at this exclusive rooftop jam. Enjoy the beats and the stars!",
    date: "2024-11-15",
    location: "Skyline Rooftop",
    image: images.hero[13], // Example image from 'urban' category
    instructor: "Tyler 'Sky' Monroe",
  },
  {
    id: 12,
    title: "Break the Ice Winter Fest",
    description:
      "Shake off the winter blues with this high-energy breakdance fest. Cold outside, fire on the dance floor!",
    date: "2024-12-10",
    location: "Frostbite Stadium",
    image: images.hero[14], // Example image from 'festival' category
    instructor: "Ivy 'Blizzard' Chen",
  },
  {
    id: 13,
    title: "Carnival Dance Clash",
    description:
      "Bring your colors and energy to this vibrant Carnival-themed dance battle. A celebration of music, culture, and moves!",
    date: "2025-02-20",
    location: "Carnival Street Arena",
    image: images.hero[15], // Example image from 'carnival' category
    instructor: "Marco 'Tiger' Santos",
  },
  {
    id: 14,
    title: "Festival of Lights Dance-Off",
    description:
      "As the lights sparkle, so will the dancers. Join us for a dazzling display of breakdance skills!",
    date: "2025-01-05",
    location: "Lumen Plaza",
    image: images.hero[5], // Example image from 'festival' category
    instructor: "Elena 'Glow' Martinez",
  },
  {
    id: 15,
    title: "Sunset Groove",
    description:
      "Watch the sun set while you rise to the top of this electrifying beachside breakdance competition!",
    date: "2025-04-22",
    location: "Oceanview Beach",
    image: images.hero[1], // Example image from 'sunset' category
    instructor: "Sam 'Voltage' Carter",
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
      { id: 1, checked: false, text: "Guest Agreement Check Item 1" },
      { id: 2, checked: false, text: "Guest Agreement Check Item 2" },
      { id: 3, checked: false, text: "Guest Agreement Check Item 3" },
      { id: 4, checked: false, text: "Guest Agreement Check Item 4" },
      { id: 5, checked: false, text: "Guest Agreement Check Item 5" },
    ],
    learner: [
      { id: 1, checked: false, text: "Learner Agreement Check Item 1" },
      { id: 2, checked: false, text: "Learner Agreement Check Item 2" },
      { id: 3, checked: false, text: "Learner Agreement Check Item 3" },
      { id: 4, checked: false, text: "Learner Agreement Check Item 4" },
      { id: 5, checked: false, text: "Learner Agreement Check Item 5" },
    ],
    host: [
      { id: 1, checked: false, text: "Host Agreement Check Item 1" },
      { id: 2, checked: false, text: "Host Agreement Check Item 2" },
      { id: 3, checked: false, text: "Host Agreement Check Item 3" },
      { id: 4, checked: false, text: "Host Agreement Check Item 4" },
      { id: 5, checked: false, text: "Host Agreement Check Item 5" },
    ],
    instructor: [
      { id: 1, checked: false, text: "Instructor Agreement Check Item 1" },
      { id: 2, checked: false, text: "Instructor Agreement Check Item 2" },
      { id: 3, checked: false, text: "Instructor Agreement Check Item 3" },
      { id: 4, checked: false, text: "Instructor Agreement Check Item 4" },
      { id: 5, checked: false, text: "Instructor Agreement Check Item 5" },
    ],
  },
};
