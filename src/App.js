import CarouselSlick from "./components/CarouselSlick";
import ComicsPage from "./components/ComicsPage";
import EventsPage from "./components/EventsPage";
import Features from "./components/Features";
import ImageTitle from "./components/ImageTitle";
import Layout from "./components/Layout";

function App() {
	return (
		<Layout>
			<div className='w-full flex flex-col'>
				{/* 캐러셀 */}
				<div className='w-full h-[450px] bg-red-500'>
					<CarouselSlick />
				</div>
				{/* Features */}
				<div className='w-full flex justify-center'>
					<Features />
				</div>
				{/* 이미지 제목 */}
				<div className='w-full flex justify-center'>
					<ImageTitle
						title='comics'
						description='hello marvel I want to study a lot'
						imgSrc=' https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg'
					/>
				</div>
				{/* carousel */}
				<div className='w-full flex justify-center'>
					<ComicsPage />
				</div>
				{/* image title 2 */}
				<div className='w-full flex justify-center'>
					<ImageTitle
						title='events'
						description='events description'
						imgSrc='https://plus.unsplash.com/premium_photo-1674576340752-9b9578870db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
					/>
				</div>
				{/* events */}

				<div className='w-full flex justify-center'></div>
				<EventsPage />
			</div>
		</Layout>
	);
}

export default App;
