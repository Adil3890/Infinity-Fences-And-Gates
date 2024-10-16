import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaUserFriends, FaClipboardCheck } from "react-icons/fa"; // Import icons from react-icons

const progressData = [
  {
    icon: FaBriefcase,
    count: 4,
    label: "Years In Business",
  },
  {
    icon: FaUserFriends,
    count: 262,
    label: "Happy Clients",
  },
  {
    icon: FaClipboardCheck,
    count: 285,
    label: "Projects Completed",
  },
];

const Progress = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [iconSize, setIconSize] = useState(48); // Default size for large screens
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has run
  const progressRef = useRef(null); // Create a reference for the progress section

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(24);
      } else if (window.innerWidth < 768) {
        setIconSize(32);
      } else {
        setIconSize(38);
      }
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      progressData.forEach((item, index) => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < item.count) {
              newCounts[index] += Math.ceil(item.count / 100); // Adjust increment speed
            } else {
              newCounts[index] = item.count;
              clearInterval(interval);
            }
            return newCounts;
          });
        }, 20); // Animation speed (ms)
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true); // Ensure the animation only runs once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current); // Observe the progress section
    }

    return () => {
      if (progressRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(progressRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={progressRef}
      className="bg-bluish flex flex-col items-center py-6"
    >
      <h2 className="text-4xl font-bold text-white mb-6">OUR PROGRESS</h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
        {progressData.map((item, index) => {
          const IconComponent = item.icon; // Get the icon component
          return (
            <div
              key={index}
              className="bg-light-buish p-8 md:p-10 rounded-lg transition-transform duration-300 hover:scale-105 shadow-white-glow-hover w-72 md:w-80"
            >
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <IconComponent size={iconSize} /> {/* Set icon size */}
              </div>
              <h3 className="text-4xl font-bold text-white">{counts[index]}</h3>
              <p className="text-white">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
