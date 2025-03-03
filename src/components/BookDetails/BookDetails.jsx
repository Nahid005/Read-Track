import { useLoaderData, useParams } from "react-router-dom";
import { setDataToLs } from "../../utility/localStorage";

const BookDetails = ()=> {

    const {bookId}  = useParams();
    const bookDetails = useLoaderData();

    const book = bookDetails.find(data => data.bookId === parseInt(bookId))

    const {bookName, author, category, image, publisher, rating, review, totalPages, yearOfPublishing, tags} = book;

    const handleReadList = (bookId) => {
        setDataToLs(bookId)
    }   


    const handleWishlist = (bookId) => {

        console.log(bookId)
    }


    
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-8 rounded shadow text-center flex items-center justify-center">
                <img className="max-h-[500px]" src={image} alt={bookName} />
            </div>
            <div className="">
                <h4 className="font-bold font-playfair text-4xl text-gray-700 py-4">{bookName}</h4>
                <p className="font-worksanse text-lg pb-4">By: {author}</p>
                <hr className="border-gray-300 border-dashed" />
                <p className="py-4">Category: {category}</p>
                <hr className="border-gray-300 border-dashed" />
                <article className="py-4">
                    <strong>Review:</strong>
                    {review}
                </article>
                <div className="flex flex-wrap gap-2 pb-4">
                    {
                        tags.map((tag, index) => <span className="bg-green-100 px-4 py-2 rounded-full text-green-600 font-worksanse" key={index}>{tag}</span>)
                    }
                </div>
                <hr className="border-gray-300 border-dashed" />
                <ul className="mt-8">
                    <li><span>Number of Pages: </span> <strong>{totalPages}</strong></li>
                    <li><span>Publisher: </span> <strong>{publisher}</strong></li>
                    <li><span>Year of Publishing: </span> <strong>{yearOfPublishing}</strong></li>
                    <li><span>Rating: </span> <strong>{rating}</strong></li>
                </ul>
                <div className="flex flex-wrap gap-4 mt-8">
                    <button onClick={()=> handleReadList(bookId)} className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 px-4 cursor-pointer">Read</button>
                    <button onClick={()=> handleWishlist(bookId)} className="font-normal text-white font-worksanse text-xl bg-[#59C6D2] rounded py-2 px-4 cursor-pointer">Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;