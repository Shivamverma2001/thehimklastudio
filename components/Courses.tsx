const COURSES = [
  {
    title: "Professional Acting Training",
    description: "Industry-level acting techniques for film and television.",
    icon: "camera",
  },
  {
    title: "Acting Fundamentals",
    description: "Learn expressions, emotions, and character building.",
    icon: "star",
  },
  {
    title: "TV & Web Series Auditions",
    description: "Practice real audition techniques.",
    icon: "video",
  },
  {
    title: "Camera Confidence",
    description: "Learn how to perform naturally in front of cameras.",
    icon: "camera",
  },
  {
    title: "Dialogue Delivery",
    description: "Improve voice, pronunciation, and emotional delivery.",
    icon: "mic",
  },
  {
    title: "Stage Presence",
    description: "Build confidence for live stage performance.",
    icon: "users",
  },
  {
    title: "Personality Development",
    description: "Build confidence, communication, and presence for auditions and life.",
    icon: "user",
  },
];

const Icon = ({ name }: { name: string }) => {
  const cls = "w-6 h-6";
  if (name === "camera")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      </svg>
    );
  if (name === "star")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  if (name === "video")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    );
  if (name === "mic")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-4a4 4 0 01-8 0V5a4 4 0 118 0v6z" />
      </svg>
    );
  if (name === "users")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  if (name === "user")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  return null;
};

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-2 sm:mb-3">
          Our Courses
        </h2>
        <p className="font-tagline text-sm sm:text-base text-white/70 text-center mb-8 sm:mb-12 max-w-2xl mx-auto italic">
          Master the art of acting with our comprehensive training programs
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="bg-dark-card rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-3 sm:mb-4">
                <Icon name={course.icon} />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-white mb-1.5 sm:mb-2 tracking-tight">
                {course.title}
              </h3>
              <p className="font-sans text-white/70 text-xs sm:text-sm leading-snug">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
