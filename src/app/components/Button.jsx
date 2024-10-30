const Button = ({btnText, href, target}) => {
    return (
        <a className="btn buy-btn block border-solid border-white border-4 shadow-md w-[fit-content] h-[fit-content] px-16 py-4 text-center rounded-full text-xl" href={href} target={target}>{btnText}</a>
    )
}
 
export default Button