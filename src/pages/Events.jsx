import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [societyFilter, setSocietyFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // All societies + affinities from Navbar
  const societies = [
    "Antennas and Propagation Society",
    "Computer Society",
    "Computational Intelligence Society",
    "Engineering in Medicine and Biology Society",
    "Geoscience and Remote Sensing Society",
    "Microwave Theory and Technology Society",
    "Photonics Society",
    "Robotics and Automation Society",
    "Vehicular Technology Society",
    "Women in Engineering" // Affinity
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("title, description, date, venue, image_url, society")
      .order("date", { ascending: false });

    if (!error) setEvents(data);
    setLoading(false);
  }

  function formatDateTime(dateStr) {
    const dateObj = new Date(dateStr);

    const datePart = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const timePart = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${datePart} • ${timePart}`;
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.date.includes(searchTerm);
    const matchesSociety = societyFilter ? event.society === societyFilter : true;
    const matchesDate = dateFilter ? event.date.startsWith(dateFilter) : true;
    return matchesSearch && matchesSociety && matchesDate;
  });

  if (loading) return <p className="loading">Loading events...</p>;

  return (
    <div className="events-page">
      <div className="flex justify-between items-center">
        <h1 className="events-title-text text-3xl font-bold">Events</h1>

        {/* Search + Filters */}
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search event or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 rounded-md border border-slate-600 bg-slate-900 text-white"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 py-1 rounded-md border border-slate-600 bg-slate-900 text-white"
          />
          <select
            value={societyFilter}
            onChange={(e) => setSocietyFilter(e.target.value)}
            className="px-3 py-1 rounded-md border border-slate-600 bg-slate-900 text-white"
          >
            <option value="">All Societies</option>
            {societies.map((soc, idx) => (
              <option key={idx} value={soc}>
                {soc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <p className="no-events mt-4">No events found.</p>
      ) : (
        <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="event-card bg-slate-800/80 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-slate-700 p-6 flex flex-col gap-4"
            >
              <h2 className="event-title text-2xl font-bold text-sky-400 mb-1">
                {event.title}
              </h2>
              <p className="text-sm text-emerald-400 font-semibold">
                {event.society}
              </p>
              <p className="event-date text-sm text-slate-400">
                {formatDateTime(event.date)}
              </p>

              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="event-image w-full h-48 object-cover rounded-xl shadow mb-2"
                />
              )}

              {event.venue && (
                <p className="event-venue text-slate-300 text-sm flex items-center gap-1">
                  <span role="img" aria-label="Venue">
                    📍
                  </span>{" "}
                  {event.venue}
                </p>
              )}
              <p className="event-description text-slate-200">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
