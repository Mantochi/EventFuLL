import {
  Search,
  MapPin,
  Calendar,
  Heart,
  ChevronDown,
  ArrowRight,
  Music,
  Laptop,
  Palette,
  Briefcase,
  Trophy,
  Utensils,
  Users,
  Martini,
  Grid2X2,
  ShieldCheck,
  Ticket,
  Headphones,
  RotateCcw,
} from "lucide-react";

const trendingEvents = [
  {
    title: "Indie Nights",
    category: "Music",
    date: "May 24, 2025 • 7:00 PM",
    location: "The Brooklyn Mirage",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI & The Future Summit",
    category: "Tech",
    date: "May 28, 2025 • 9:00 AM",
    location: "Javits Convention Center",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "NYC Food Festival",
    category: "Food & Drink",
    date: "Jun 1, 2025 • 12:00 PM",
    location: "Citi Field",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sunrise Yoga in the Park",
    category: "Health",
    date: "May 25, 2025 • 8:00 AM",
    location: "Central Park",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
];

const upcomingEvents = [
  {
    title: "Business Networking",
    category: "Business",
    date: "May 22, 2025 • 6:30 PM",
    location: "WeWork, Manhattan",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "DJ Night Party",
    category: "Nightlife",
    date: "May 24, 2025 • 10:00 PM",
    location: "Marquee NY",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "JavaScript Bootcamp",
    category: "Workshop",
    date: "May 26, 2025 • 10:00 AM",
    location: "Online",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Street Photography Walk",
    category: "Art & Culture",
    date: "May 27, 2025 • 4:00 PM",
    location: "DUMBO, Brooklyn",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = [
  { name: "Music", icon: Music },
  { name: "Tech", icon: Laptop },
  { name: "Art & Culture", icon: Palette },
  { name: "Business", icon: Briefcase },
  { name: "Workshops", icon: Users },
  { name: "Sports", icon: Trophy },
  { name: "Food & Drink", icon: Utensils },
  { name: "Family", icon: Users },
  { name: "Nightlife", icon: Martini },
  { name: "More", icon: Grid2X2 },
];

export default function EventlyHomepage() {
  return (
    <div className="min-h-screen bg-[#070014] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-pink-700/20 blur-[120px] rounded-full" />

      {/* ================= NAVBAR ================= */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl">
              E
            </div>

            <h1 className="text-2xl font-semibold">Evently</h1>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
            <a href="#" className="text-purple-400">
              Discover
            </a>

            <a href="#" className="hover:text-white transition">
              Categories
            </a>

            <a href="#" className="hover:text-white transition">
              Tickets
            </a>

            <a href="#" className="hover:text-white transition">
              For Organizers
            </a>

            <a href="#" className="hover:text-white transition">
              About Us
            </a>
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 h-11 rounded-full text-sm">
              <MapPin size={16} />
              New York, USA
            </button>

            <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
              <Heart size={18} />
            </button>

            <button className="text-sm text-white/70 hover:text-white">
              Log in
            </button>

            <button className="h-11 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover Events
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Happening Around You
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-8 mt-8 max-w-2xl">
              Find concerts, workshops, meetups and more exciting events near
              you or anywhere in the world.
            </p>

            {/* Search Bar */}
            <div className="mt-10 bg-[#120423]/90 border border-white/10 rounded-2xl p-3 flex flex-col lg:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 h-14 bg-white/5 rounded-xl">
                <Search size={18} className="text-white/40" />

                <input
                  type="text"
                  placeholder="Search events, artists or places"
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/40"
                />
              </div>

              <button className="h-14 px-5 bg-white/5 rounded-xl flex items-center gap-2 text-sm">
                <MapPin size={16} />
                New York, USA
                <ChevronDown size={16} />
              </button>

              <button className="h-14 px-5 bg-white/5 rounded-xl flex items-center gap-2 text-sm">
                <Calendar size={16} />
                Any date
                <ChevronDown size={16} />
              </button>

              <button className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Music",
                "Tech",
                "Art & Culture",
                "Business",
                "Sports",
                "More",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-5 h-11 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-purple-500/20 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Hero Cards */}
          <div className="grid grid-cols-[1fr_220px] gap-5">
            {/* Big Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center">
                <Heart size={18} />
              </button>

              <div className="absolute bottom-0 p-7">
                <h3 className="text-3xl font-semibold">
                  Summer Beats
                  <br />
                  Music Festival
                </h3>

                <p className="text-white/70 mt-4">Aug 24 • New York</p>

                <p className="mt-2 text-lg font-medium">From $49</p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-5">
              {[
                {
                  title: "Product Design Workshop",
                  image:
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Modern Art Exhibition",
                  image:
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden border border-white/10 h-[200px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center">
                    <Heart size={16} />
                  </button>

                  <div className="absolute bottom-0 p-5">
                    <h4 className="font-semibold leading-6">
                      {item.title}
                    </h4>

                    <p className="text-white/70 text-sm mt-2">
                      From $29
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING EVENTS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-semibold">Trending Events</h3>

          <button className="text-purple-400 text-sm">
            View all
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {trendingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="relative h-56">
                <img
                  src={event.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center">
                  <Heart size={16} />
                </button>
              </div>

              <div className="p-5">
                <span className="text-xs text-purple-400 uppercase">
                  {event.category}
                </span>

                <h4 className="text-xl font-semibold mt-3">
                  {event.title}
                </h4>

                <p className="text-white/50 text-sm mt-3">
                  {event.date}
                </p>

                <p className="text-white/50 text-sm mt-1">
                  {event.location}
                </p>

                <p className="mt-4 font-semibold">
                  From {event.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

  );
}