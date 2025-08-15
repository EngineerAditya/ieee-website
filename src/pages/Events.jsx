import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';


export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('title, description, date, venue, image_url')
      .order('date', { ascending: false });

    if (!error) setEvents(data);
    setLoading(false);
  }

  function formatDateTime(dateStr) {
    const dateObj = new Date(dateStr);

    const datePart = dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const timePart = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    return `${datePart} • ${timePart}`;
  }

  if (loading) return <p className="loading">Loading events...</p>;

  return (
    <div className="events-page">
      <h1 className="events-title-text">Events</h1>
      {events.length === 0 ? (
        <p className="no-events">No events found.</p>
      ) : (
        <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card bg-slate-800/80 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-slate-700 p-6 flex flex-col gap-4"
            >
              <h2 className="event-title text-2xl font-bold text-sky-400 mb-1">{event.title}</h2>
              <p className="event-date text-sm text-slate-400">{formatDateTime(event.date)}</p>

              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="event-image w-full h-48 object-cover rounded-xl shadow mb-2"
                />
              )}

              {event.venue && (
                <p className="event-venue text-slate-300 text-sm flex items-center gap-1">
                  <span role="img" aria-label="Venue">📍</span> {event.venue}
                </p>
              )}
              <p className="event-description text-slate-200">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
