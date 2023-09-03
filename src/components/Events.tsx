export default function Events() {
  const data = [
    {
      eventImg: "https://ik.imagekit.io/netmaze/rcchurch/events/prayer-1.jpg",
      eventName: "மாதத்தின் முதல் ஞாயிறு",
      description:
        "காலை 8.00 மணிக்கு திருப்பலி முடிந்ததும் சிறப்பு நற்கருணை ஆராதனை நடைபெறும்.",
      location:
        "தூய ஆரோக்கிய அன்னை ஆலயம், மரியானுஸ் நகர், சிவகாசி மேற்கு அஞ்சல்",
    },
    {
      eventImg: "https://ik.imagekit.io/netmaze/rcchurch/events/prayer-1.jpg",
      eventName: "மாதத்தின் முதல் வெள்ளி",
      description:
        "மாலை 7.00 மணிக்கு நற்கருணை ஆராதனை மற்றும் திருப்பலி நடைபெறும்",
      location:
        "தூய ஆரோக்கிய அன்னை ஆலயம், மரியானுஸ் நகர், சிவகாசி மேற்கு அஞ்சல்",
    },
    {
      eventImg: "https://ik.imagekit.io/netmaze/rcchurch/events/prayer-1.jpg",
      eventName: "மாதத்தின் இரண்டாவது சனிக்கிழமை",
      description:
        "திங்கள், வியாழன் காலை 6.30 மணி, செவ்வாய், புதன், வெள்ளி மற்றும் சனி மாலை 7.00 மணி",
      location: "கெபியில் வைத்து நடைபெறும்",
    },
    {
      eventImg: "https://ik.imagekit.io/netmaze/rcchurch/events/prayer-1.jpg",
      eventName: "வார நாட்களில்",
      description:
        "தூய ஆரோக்கிய அன்னையின் சிறப்பு நவநாள் வழிபாடு காலை 10.30 மணிக்கு ஜெபமாலை, நவநாள் திருப்பலி, நற்கருணை ஆசீர் அதைத் தொடர்ந்து “அன்பின் விருந்து” நடைபெறும்.",
      location:
        "தூய ஆரோக்கிய அன்னை ஆலயம், மரியானுஸ் நகர், சிவகாசி மேற்கு அஞ்சல்",
    },
    {
      eventImg: "https://ik.imagekit.io/netmaze/rcchurch/events/prayer-1.jpg",
      eventName: "பிரதி ஞாயிறு",
      description: "காலை 8.00 மணி",
      location:
        "தூய ஆரோக்கிய அன்னை ஆலயம், மரியானுஸ் நகர், சிவகாசி மேற்கு அஞ்சல்",
    },
  ];

  return (
    <>
      <div
        className="w-full py-20 flex flex-col justify-center items-center bg-gray-100 space-y-10"
        id="events"
      >
        <span className="font-bold text-3xl">News & Events</span>
        <div className="w-11/12 flex flex-col items-center justify-center space-y-5">
          {data.map((event: any, index: number) => (
            <div
              key={index}
              className="w-11/12 sm:w-2/3 border-y-4 border-r-4 max-sm:border-x-4 max-sm:border-b-4 max-sm:border-t-0 border-red-400 flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/3 flex justify-center items-center">
                <img src={event.eventImg} className="sm:w-full" alt="" />
              </div>
              <div className="sm:h-56 my-5 flex flex-col justify-center px-10 space-y-3 sm:w-2/3 sm:overflow-y-scroll">
                <span className="font-bold text-xl">{event.eventName}</span>
                <span className="text-justify">{event.description}</span>
                <span className="font-bold">{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
