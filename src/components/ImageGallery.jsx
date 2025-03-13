const ImageGallery = () => {
  // Array of image data to make the code more maintainable
  const images = [
    {
      src: "https://via.placeholder.com/300x400",
      alt: "Colorful robot toy with bubbles",
      className: "col-start-1 col-end-2 row-start-1 row-end-3",
    },
    {
      src: "https://via.placeholder.com/350x600",
      alt: "Person underwater with digital effect",
      className: "col-start-2 col-end-3 row-start-1 row-end-4",
    },
    {
      src: "https://via.placeholder.com/250x250",
      alt: "Circuit board with processor",
      className: "col-start-3 col-end-4 row-start-1 row-end-2",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Traditional Asian building with cherry blossoms",
      className: "col-start-4 col-end-5 row-start-1 row-end-3",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Person with digital interface",
      className: "col-start-5 col-end-6 row-start-1 row-end-3",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Digital wave on laptop",
      className: "col-start-5 col-end-6 row-start-3 row-end-5",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Glass sphere with miniature scene",
      className: "col-start-1 col-end-2 row-start-3 row-end-5",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Aerial view of circuit board",
      className: "col-start-2 col-end-3 row-start-4 row-end-6",
    },
    {
      src: "https://via.placeholder.com/300x600",
      alt: "Urban cityscape with tall buildings",
      className: "col-start-3 col-end-4 row-start-2 row-end-6",
    },
    {
      src: "https://via.placeholder.com/300x350",
      alt: "Cute robot character",
      className: "col-start-4 col-end-5 row-start-3 row-end-5",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-900 p-6 md:p-10 overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <div className="w-full h-full bg-[radial-gradient(circle,_#666_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Diagonal line */}
      <div className="absolute bottom-0 right-0 w-[2px] h-[300px] bg-blue-500 rotate-[30deg] translate-x-[100px] translate-y-[50px]"></div>

      {/* Image gallery grid - using explicit grid placement to match exact layout */}
      <div className="relative grid grid-cols-[repeat(5,_minmax(0,_1fr))] auto-rows-[minmax(120px,_auto)] gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className={`${image.className} relative`}>
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
