import HeroText from './HeroText.jsx'
import ChosenWatch from './ChosenWatch.jsx'
import Button from './Button.jsx'
import ColorPicker from './ColorPicker.jsx'

const Hero = () =>
{
    return (
        <>
            <section className="flex justify-between items-center hero mt-28" id="hero">
                <HeroText heroHeader="The Perfect Moment" heroDesc="Between Past And Future"/>
                <ChosenWatch />
                <ColorPicker />
            </section>
            <Button btnText="Buy Now" href="#" target="_blank" />
        </>
    )
}

export default Hero