
export const Button: React.FC<IButton> = ({ label, bgColor, border, cls }) => {
    return (
        <div className={`px-6 py-2 flex justify-center items-center ${border} rounded-full ${cls} cursor-pointer hover:bg-btnHover font-semibold ${bgColor}`}>
            <p>{label}</p>
        </div>
    )
}
