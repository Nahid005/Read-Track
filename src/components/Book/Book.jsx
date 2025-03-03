import { GiSelfLove } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book})=> {

    const {bookId, bookName, author, image, tags, rating, category} = book;

    return(
        <Link to={`bookDetails/${bookId}`}>
            <div className="border border-gray-100 rounded p-4 shadow">
                <div className="bg-gray-200 flex justify-center p-4 rounded mb-4">
                    <img className="max-h-60 text-center" src={image} alt={bookName} />
                </div>
                <div className="text-center flex flex-wrap gap-2 grow">
                    {
                        tags.map((tag, index) => <span className="bg-green-100 py-2 px-4 rounded-full font-worksanse font-semibold text-green-400 text-sm" key={index}>{tag}</span>)
                    }
                </div>
                <h4 className="font-playfair font-bold text-2xl text-gray-600 my-4">{bookName}</h4>
                <p className="font-worksanse text-gray-600 text-lg mb-4">By: {author}</p>
                
                <hr className="border-dashed border-gray-200" />

                <div className="mt-4 flex justify-between items-end gap-2 grow">
                    <p>{category}</p>
                    <p className="flex items-center gap-2"><span>{rating}</span> <FaRegStar /></p>
                </div>
            </div>
        </Link>
    )
}

export default Book;