interface IButton {
    label: string
    bgColor: string
}
export const Button: React.FC<IButton> = ({ label, bgColor }) => {
    return (
        <div className={`px-7 py-2 rounded-full border cursor-pointer hover:bg-btnHover font-semibold ${bgColor}`}>
            <p>{label}</p>
        </div>
    )
}
