import React from 'react';
import './Culturals.css'; // Import the new CSS file

const Culturals = () => {
  // Directly use the fetched video metadata
  const culturalEvents = [
    {
      id: 1,
      title: 'The Most memorable Group dance 🔥performance at college fest',
      description: 'A vibrant and energetic group dance performance from a college cultural fest.',
      url: 'http://www.youtube.com/watch?v=gmWdP5Vu74I',
      channelName: 'Medico Om 💉',
      viewCount: 11524,
      videoLength: 'PT4M34S' // ISO 8601 format
    },
    {
      id: 2,
      title: 'Pulse: The Culture Fest Documentary',
      description: 'This documentary highlights the cultural festival and dance performances at a popular college event.',
      url: 'http://www.youtube.com/watch?v=8E2NgfumVG8',
      channelName: 'The State Press',
      viewCount: 797,
      videoLength: 'PT6M45S'
    },
    {
      id: 3,
      title: 'College Fest Dance ✨ Part 1',
      description: 'A vibrant dance routine showcased at a college festival.',
      url: 'http://www.youtube.com/watch?v=iaYgoRuyK7E',
      channelName: 'Her Dusky Vibes',
      viewCount: 581905,
      videoLength: 'PT17S'
    },
    {
      id: 4,
      title: 'Valley Asian Cultural Festival',
      description: 'An energetic cultural performance celebrating diversity and traditional dance.',
      url: 'http://www.youtube.com/watch?v=eSs9TvXHKmg',
      channelName: 'LA THIS WEEK',
      viewCount: 809,
      videoLength: 'PT1M37S'
    },
    {
      id: 5,
      title: 'DANCE PERFORMANCE ON CULTURAL FEST || WCTM COLLEGE',
      description: 'A stunning dance performance featured during a college cultural festival.',
      url: 'http://www.youtube.com/watch?v=ze70EUcAGlU',
      channelName: 'World College of Technology & Management',
      viewCount: 1362,
      videoLength: 'PT6M57S'
    },
    {
      id: 6,
      title: 'Cultural Rhythms Festival Highlights (TikTok)',
      description: 'Highlights from a cultural rhythm event celebrating dance, music, and tradition. (Note: This is a TikTok link and details are not available via YouTube tools.)',
      url: 'https://www.tiktok.com/%40harvard/video/7492422461804399918',
      channelName: 'Harvard University (TikTok)',
      viewCount: null, // Data not available
      videoLength: null // Data not available
    }
  ];

  // Helper function to format ISO 8601 duration
  const formatDuration = (isoDuration) => {
    if (!isoDuration) return 'N/A';
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 'N/A';

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    let parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`); // Ensure seconds always show if no other unit
    return parts.join(' ');
  };

  const formatViews = (views) => {
    if (views === null) return 'N/A';
    if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M views';
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K views';
    return `${views} views`;
  };

  return (
    <div className="culturals-container">
      <h2>College Cultural Events</h2>
      <p>
        Experience the energy and creativity of college cultural festivals through these captivating performances.
        Dive into a collection of vibrant dance routines, insightful documentaries, and highlights from memorable events.
      </p>

      <div className="cultural-events-grid">
        {culturalEvents.map((event) => (
          <div key={event.id} className="cultural-event-item">
            <div>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              {event.channelName && (
                <div className="video-info">
                  <span>Channel: {event.channelName}</span><br />
                  {event.viewCount !== null && <span>Views: {formatViews(event.viewCount)}</span>}<br />
                  {event.videoLength !== null && <span>Duration: {formatDuration(event.videoLength)}</span>}
                </div>
              )}
            </div>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Watch {event.id === 2 ? 'Documentary' : 'Performance'}
            </a>
          </div>
        ))}
      </div>

      <p>
        These events showcase the diverse talents and vibrant spirit of our college community.
        Join us in celebrating arts, culture, and creativity!
      </p>
    </div>
  );
};

export default Culturals;