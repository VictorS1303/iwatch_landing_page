const HeroText = ({heroHeader, heroDesc}) =>
{
    return (
        <div>
            <h1 className="text-6xl font-bold">{heroHeader}</h1>
            <h3 className="text-6xl font-normal">{heroDesc}</h3>
        </div>
    )
}

export default HeroText