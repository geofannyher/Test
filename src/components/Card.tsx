import { ICard, TruncateTextFunction } from "../interface/Card-Interface";

export const Card: React.FC<ICard> = ({ author, description, urlToImage, title }) => {
    const truncateText: TruncateTextFunction = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + " ...";
    }
    return (
        <div className="max-w-[250px] min-h-[500px] border-bgBorder max-h-[500px] bg-white border rounded-lg shadow">
            <img className="rounded-t-lg object-cover w-full h-56" src={urlToImage ? urlToImage : `https://placehold.co/400x300`} alt={author} />
            <div className="py-5 px-3 text-textSecond">
                <h5 className="mb-2 text-black font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">{title !== '[Removed]' ? title : 'Title Data Null'}</h5>
                <h5 className="mb-3 font-light overflow-hidden overflow-ellipsis">{truncateText(description !== '[Removed]' ? description : 'description Data Null', 100)}</h5>
                <h5 className="font-semibold text-sm"> {author ? author : 'No Author'}</h5>
                <div className="flex justify-start py-2">
                    <h1 className="text-gray-600 cursor-pointer hover:text-mainBg font-semibold">Learn More</h1>
                </div>
            </div>
        </div>
    )
}
