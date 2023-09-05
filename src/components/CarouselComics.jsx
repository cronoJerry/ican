import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function CarouselComics({ data, isLoading }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
	};

	return (
		<div>
			<Slider {...settings}>
				{data?.data.results.map((item, index) => (
					<Link to={`/detail/${item.id}`} key={index}>
						<div>
							<div className='w-40 h-60 overflow-hidden'>
								<img
									className='w-full h-full object-cover object-center'
									src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
									alt='ac'
								/>
							</div>
							<div className=''>{item.title.substr(0, 12)}</div>
						</div>
					</Link>
				))}
			</Slider>
		</div>
	);
}
