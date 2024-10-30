const colorBtns =
[
    {
        class: "bg-slate-700 h-[40] w-[40] border-white border-2 rounded-full scale-125 cursor-pointer",
        btnBackgroundColor: '#424459',
        btnColorValue: '#424459',
    },
    {
        class: "bg-blue-100 h-[40] w-[40] border-white border-2 rounded-full cursor-pointer",
        btnBackgroundColor: '#58d7c4',
        btnColorValue: '#58d7c4',
    },
    {
        class: "bg-teal-200 h-[40] w-[40] border-white border-2 rounded-full cursor-pointer",
        btnBackgroundColor: '#f2cec6',
        btnColorValue: '#f2cec6',
    },
]

const ColorPicker = () =>
{
    return (
        <div class="color-picker-container h-30 w-30 flex flex-col gap-6">
            {
                colorBtns.map((btn) => (
                    <button
                        class={btn.class}
                        style={{backgroundColor: btn.btnBackgroundColor, color: btn.btnColorValue}}
                    ></button>
                ))
            }
        </div>
    )
}
 
export default ColorPicker