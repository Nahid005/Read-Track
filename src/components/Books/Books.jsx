import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ()=> {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(()=> {

        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
        })

    }, [])


    return (
        <div className="mt-16">
            {
                loading && <p>Loadding..</p>
            }
            <h4 className="text-center font-bold font-playfair text-4xl text-gray-600">Books</h4>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16 ">
                {
                    books && books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    )
}

export default Books;