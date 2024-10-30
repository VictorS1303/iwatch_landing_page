import Image from "next/image"
import navyWatch from '../../images/watches/navy.png'

const ChosenWatch = () =>
{
    return (
        <Image
            src={navyWatch}
            height={400}
            width={400}
            className="ml-32"
        />
    )
}

export default ChosenWatch