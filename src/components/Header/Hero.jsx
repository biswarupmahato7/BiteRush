import React from "react";
import BiryaniImg1 from "../../assets/biryani.png";
import BurgerImg from "../../assets/burger.png";
import Somosa from "../../assets/somosa.png";
import Pizza from "../../assets/pizza.png";


import Vector from "../../assets/vector3.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img:BurgerImg ,
  },
  {
    id: 3,
    img: Somosa,
  },

];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center   items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome{" "}
                <span className="bg-clip-text text-transparent bg-orange-600">
                 Bite
                </span>{" "}
                Rush
              </h1>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <div>
                <button className="bg-orange-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full shadow-orange-glow">
                  Order Now
                </button>
              </div>
            </div>

                {/* image */}
                <div className="order-1 sm:order-2 min-h-[450px] sm:min-h[450px] flex justify-center
                items-center relative ">
                    {/* main image section */}
                    <div className="flex justify-center items-center h-[300px] sm:h-[450px]  overflow-hidden">
                     <img
                     src={imageId}
                     alt=""
                     className="w-[300px] sm:w-[450px] mx-auto spin"
                     />
                    </div>
                    {/* image list section */}
                    <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px]
                    lg:-right-10 bg-white/30 rounded-full shadow-[0px_10px_15px_rgba(0,0,0,0.7)]">
                        {
                          ImageList.map((item)=>(
                            <img
                            key={item.id} src={item.img}
                            className="max-w-[80px] h-[80px] object-contain inline-block
                            hover:scale-150 duration-200"
                            onClick={()=>{
                                setImageId(
                                    item.id === 1 ? BiryaniImg1 : item.id === 2 ?
                                    BurgerImg : Somosa
                                )
                            }}
                            />
                          ))  
                        }
                    </div>

                </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default Hero
