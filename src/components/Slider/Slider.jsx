
import SliderImages from '/assets/pngwing 1.png'

const Slider = ()=> {



    return (
        <div className="bg-gray-200 rounded p-16 shadow my-4">
            <div className="flex flex-row items-center justify-between">
                <div className="">
                    <h2 className="font-bold text-7xl text-gray-700 font-playfair text-left leading-20">Books to freshen up <br /> your booksshelf</h2>
                    <button type="submit" className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 px-8 cursor-pointer mt-12">View The List</button>
                </div>
                <div className="">
                    <img src={SliderImages} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider;