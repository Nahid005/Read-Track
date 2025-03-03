import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getDataFromLs} from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';
import ReadBookList from '../ReadBookList/ReadBookLIst';

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
    const books = useLoaderData();

    console.log(readBooks);


    useEffect(()=> {
        const storedData = getDataFromLs();
        const storedDataInt = storedData.map(id => parseInt(id));

        const readBookList = books.filter(book => storedDataInt.includes(book.bookId));

        setReadBooks(readBookList);

    }, [])




    return (
        <div className="">
            <div className="text-center p-8 bg-gray-200 rounded mb-4">
                <h4 className='text-4xl font-bold font-playfair text-gray-700'>Books</h4>
            </div>
            <div className="text-center my-8">
                <select className='bg-[#23BE0A] text-white px-4 py-2 rounded-md' name="sort-by" id="sort-by">
                    <option value="">Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of Pages">Number of Pages</option>
                    <option value="Publisher year">Publisher year</option>
                </select>
            </div>

            <Tabs>
                <TabList> 
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBooks.map(readBook => <ReadBookList key={readBook.bookId} readBook = {readBook}></ReadBookList>)
                    }
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default ListedBooks