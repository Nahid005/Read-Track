import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReadBookList = ({readBook}) => {

    const {bookId, bookName, author, image, tags, category, publisher, rating, totalPages, yearOfPublishing} = readBook;
    console.log(readBook)

    return (
        <div className="grid grid-cols-12 gap-4 my-4 p-8 rounded-lg border border-gray-200 ">
            <div className="col-span-4 bg-gray-200 p-4 text-center flex justify-center items-center rounded">
                <img className="max-h-52" src={image} alt={bookName} />
            </div>
            <div className="col-span-8">
                <h4 className="font-playfair font-bold text-2xl text-gray-600 pb-2">{bookName}</h4>
                <p>By: {author}</p>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="mb-0 py-2 flex felx-wrap items-center gap-2">
                        <strong>Tag:</strong>
                        {
                            tags.map((tag, index) => <span key={index}>{tag}</span>)
                        }
                    </p>
                    <p className="flex py-2 flex-wrap items-center gap-2"><CiLocationOn /> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="flex flex-wrap items-center gap-2"><FaUserGroup></FaUserGroup> Publisher: {publisher} </p>
                    <p className="flex flex-wrap items-center gap-2"><RiPagesLine></RiPagesLine> Page: {totalPages}</p>
                </div>
                <hr className="border-dashed border-gray-200 my-4" />
                <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-purple-300 py-2 px-4 rounded-full">Category:{category}</span>
                    <span className="bg-red-300 py-2 px-4 rounded-full">Rating: {rating}</span>
                    <Link to={`/bookDetails/${bookId}`} className="bg-green-600 py-2 px-4 rounded-full text-white">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadBookList;