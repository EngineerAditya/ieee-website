import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './pages_css/Events.css';

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
      <h1 className="events-title">Events</h1>
      {events.length === 0 ? (
        <p className="no-events">No events found.</p>
      ) : (
        <div className="events-list">
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{formatDateTime(event.date)}</p>

              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="event-image"
                />
              )}

              {event.venue && (
                <p className="event-venue">📍 {event.venue}</p>
              )}
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
