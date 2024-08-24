import { images } from "../assets/images";

export interface HomeContent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  instructor: string; // New key object
}

export const sessions: HomeContent[] = [
  {
    id: 1,
    title: "Unleash Your Rhythm!",
    description:
      "Breakdance your way into a new passion! Join our sessions and elevate your moves to the next level.",
    date: "2024-09-01",
    location: "Downtown Studio",
    image: images[0],
    instructor: "John 'Bboy Blaze' Doe", // New key object value
  },
  {
    id: 2,
    title: "Flip the Script!",
    description:
      "Break free from the ordinary and learn the art of breakdancing. Join our sessions—because dancing is more than just a move, it's a lifestyle.",
    date: "2024-09-08",
    location: "Urban Dance Hub",
    image: images[1],
    instructor: "Jane 'Twist' Smith", // New key object value
  },
  {
    id: 3,
    title: "Step Into the Spotlight!",
    description:
      "Learn how to breakdance and show the world your unique style! Our sessions are the perfect place to start your journey.",
    date: "2024-09-15",
    location: "Open Air Plaza",
    image: images[2],
    instructor: "Alex 'Spin' Johnson", // New key object value
  },
  {
    id: 4,
    title: "Feel the Beat, Own the Floor!",
    description:
      "Ready to learn some jaw-dropping moves? Our breakdance sessions are where you'll find your rhythm.",
    date: "2024-09-22",
    location: "Rooftop Lounge",
    image: images[3],
    instructor: "Sam 'Flow' Lee", // New key object value
  },
  {
    id: 5,
    title: "Master the Moves!",
    description:
      "Breakdancing isn’t just a dance; it's a statement. Come learn with us and show off your skills.",
    date: "2024-09-29",
    location: "Underground Club",
    image: images[4],
    instructor: "Kim 'Freeze' Brown", // New key object value
  },
];
