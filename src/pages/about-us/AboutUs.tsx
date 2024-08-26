

const AboutUs = () => {
    return (
        <div>
            <section className="relative z-0 py-8 my-8 bg-secondary rounded-lg">
                <div className="relative text-center">
                    <h1
                        className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal">
                        Control your fitness with our <span className="text-primary">platform </span>
                    </h1>
                    <p className="w-[80%] mx-auto text-center text-base font-normal leading-7 text-gray-300 mb-9">Our mission is to revolutionize sports facility management by providing a platform that is as efficient as it is user-friendly. We are committed to empowering facility managers, coaches, and athletes with tools that streamline operations, enhance the user experience, and promote excellence in sports. At the core of our values are innovation, reliability, and a dedication to fostering a community where every interaction counts, ensuring that every facility runs smoothly and every player has the best possible experience.</p>


                </div>
            </section>
            {/* history section */}
            <section className="relative py-8 mb-8">
                <div className=" relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="img-box">
                            <img src="https://images.squarespace-cdn.com/content/v1/5fdfeb249d00c472c28c8e82/1707428932332-02X7WF48TVYPBIE58JKX/Sports-Performance_Camp-2.jpg" alt="About Us tailwind page"
                                className="max-lg:mx-auto" />
                        </div>
                        <div className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <h2
                                    className="font-manrope font-bold text-4xl lg:text-5xl text-primary mb-9 max-lg:text-center relative">
                                    History & Milestones</h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">

                                    Since our inception in 2005, our journey has been marked by significant milestones and continuous growth. We started with a vision to transform sports facility management, and through dedication and innovation, we achieved our first major milestone by launching the platform and securing our initial clients. Over the years, we’ve expanded our user base, introduced groundbreaking features, and received industry recognition for our efforts. Today, we continue to push boundaries, committed to enhancing the sports experience and driving excellence. Our story is a testament to the hard work and vision that drives us forward, and we look forward to many more achievements on the horizon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-8 my-20">
                <div className="relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                        <div className="lg:pr-24 flex items-center">
                            <div className="data w-full">
                                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                                    className="block lg:hidden mb-9 mx-auto" />
                                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-primary mb-9 max-lg:text-center" >We
                                    are Creative Since 2005</h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Our sports facility platform isn’t just a management tool; it's a philosophy. We go beyond basic functionality, prioritizing efficiency, scalability, and user satisfaction. Every feature, from the smallest detail to the most comprehensive solutions, is meticulously designed to enhance performance and elevate the overall sports experience.
                                </p>
                            </div>
                        </div>
                        <div className="img-box ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaaA4TWi8mbCjpzQvefL7TXIdAfB2Fouznw&s" alt="About Us tailwind page"
                                className="hidden lg:block w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="l mb-20">
                <div className="mx-auto">
                    <div className="mb-20">
                        <h2 className="font-manrope text-4xl text-center font-bold text-primary mb-6">Introducing our champion of sports management
                        </h2>
                        <p className="text-lg text-gray-500 text-center">We offer all the advantages that streamline your sports facility management, eliminating challenges and ensuring seamless support every step of the way.</p>
                    </div>
                    {/* Slider Wrapper */}
                    <div className="swiper teamswiper pb-10">
                        <div className="swiper-wrapper flex lg:flex-wrap flex-col lg:flex-row justify-between gap-28">
                            <div className="swiper-slide">
                                <div
                                    className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500  lg:flex-nowrap">
                                    <div className="w-fit lg:w-48 h-64 mx-auto">
                                        <img src="https://pagedone.io/asset/uploads/1696238786.png" alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg text-gray-900 font-semibold mb-1">Harsh Patel</h6>
                                            <span className="text-sm text-gray-500 group-hover:text-primary">Co-Founder &
                                                CEO</span>
                                        </div>
                                        <p className="text-gray-500 leading-6 mb-7">
                                            As the co-founder of our sports facility booking platform, I've pushed our limits to ensure its success, creating a system that genuinely enhances the experience for every user and facility.
                                        </p>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                                                        fill="currentColor" />
                                                </svg>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500  lg:flex-nowrap">
                                    <div className="w-fit lg:w-48 h-64 mx-auto">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nQLNoyk0OVJNUsYy0NLgWvFu8CJWz2b9fw&s" alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg text-gray-900 font-semibold mb-1">Tanjila Aktar</h6>
                                            <span className="text-sm text-gray-500 group-hover:text-primary">CTO</span>
                                        </div>
                                        <p className="text-gray-500 leading-6 mb-7">
                                            As CTO of our sports facility platform, I've spearheaded the development of advanced, scalable technology that ensures reliable and seamless management for all our members.
                                        </p>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                                                        fill="currentColor" />
                                                </svg>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500  lg:flex-nowrap">
                                    <div className="w-fit lg:w-48 h-64 mx-auto">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkU8Fjp6mexcRYgfHp3h2LtjX785M40Jm-A&s" alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg text-gray-900 font-semibold mb-1">Rashed Ahmed</h6>
                                            <span className="text-sm text-gray-500 group-hover:text-primary">Head of Operations</span>
                                        </div>
                                        <p className="text-gray-500 leading-6 mb-7">
                                            As the Head of Operations, I've streamlined processes to guarantee smooth facility management and effortless bookings, creating a hassle-free experience for all members.
                                        </p>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                                                        fill="currentColor" />
                                                </svg>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500  lg:flex-nowrap">
                                    <div className="w-fit lg:w-48 h-64 mx-auto">
                                        <img src="data:image/jpeg;base64,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" alt="image"
                                            className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg text-gray-900 font-semibold mb-1">Ujjol Khan</h6>
                                            <span className="text-sm text-gray-500 group-hover:text-primary">Marketing Director</span>
                                        </div>
                                        <p className="text-gray-500 leading-6 mb-7">
                                            As the Marketing Director, I've crafted strategies that highlight the unique benefits of our platform, attracting members who value top-notch sports facility management and convenience.
                                        </p>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </p>
                                            <p
                                                className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-primary">
                                                <svg className="w-5 h-5" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                                                        fill="currentColor" />
                                                </svg>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact details section */}

            <div className="mb-20">
                <h1 className="text-4xl text-primary text-center mb-20 font-bold">Contact Details</h1>
                <div className="flex mx-auto gap-6 justify-center flex-col lg:flex-row">
                    <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark text-black">
                                Our Location
                            </h4>
                            <p className="text-base text-body-color dark:text-dark-6">
                                23 hosaetii st., Kutir, London
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_941_17577)">
                                    <path
                                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_941_17577">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark text-black">
                                Phone Number
                            </h4>
                            <p className="text-base text-body-color dark:text-dark-6">
                                01919273352
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark text-black">
                                Email Address
                            </h4>
                            <p className="text-base text-body-color dark:text-dark-6">
                                mdsayel111@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;