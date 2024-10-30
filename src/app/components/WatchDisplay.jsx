import Image from "next/image"
import navyWatch from '../../images/watches/navy.png'
import mintWatch from '../../images/watches/mint.png'
import oceanWatch from '../../images/watches/ocean.png'


const displayWatches =
[
    {
        watchContainerClasses: "bg-teal-100 h-[70px] w-[110px] flex justify-center items-center rounded-md",
        watchContainerImage: navyWatch,
        imageHeight: 70,
        imageWidth: 70,
        imageClasses: "flex justify-center transform -translate-y-8",
    },
    {
        watchContainerClasses: "bg-blue-100 h-[70px] w-[110px] flex justify-center items-center rounded-md",
        watchContainerImage: mintWatch,
        imageHeight: 70,
        imageWidth: 70,
        imageClasses: "flex justify-center transform -translate-y-8",
    },
    {
        watchContainerClasses: "bg-teal-100 h-[70px] w-[110px] flex justify-center items-center rounded-md",
        watchContainerImage: oceanWatch,
        imageHeight: 70,
        imageWidth: 70,
        imageClasses: "flex justify-center transform -translate-y-8",
    },
]


const WatchDisplay = () => {
    return (
        <div className="display watch-display navy-watch-display flex items-center mr-80 mt-auto gap-8">
          {displayWatches.map((watch, index) => (
              <div key={index} className={watch.watchContainerClasses}>
                  <Image src={watch.watchContainerImage} height={watch.imageHeight} width={watch.imageWidth} className={watch.imageClasses} />
              </div>
          ))}
        </div>
    );
};
 
export default WatchDisplay