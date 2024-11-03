
const Media = () => {
    return (
        <section id="media">

            <div className="max-w-7xl w-full mx-auto px-5 py-12">
                {/* Header div */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h1 className="text-4xl font-teko font-semibold  mb-4">
                        Our <span className="text-primary font-teko">Media Gallery</span>
                    </h1>
                    <p className="text-lg">
                        Explore our latest articles, videos, and images.
                    </p>
                </div>

                <div className="carousel rounded-box" data-aos="fade-up">
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                            alt="Burger" />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Media;
