import { useQuery } from "react-query";
import CarouselComics from "./CarouselComics";
import { comicsApiData } from "../api";

export default function ComicsPage() {
	const { isLoading, error, data } = useQuery("comicsData", comicsApiData);

	return (
		<div className='w-full flex justify-center'>
			<div className='w-[1024px] bg-white h-[400px] -translate-y-8'>
				<CarouselComics data={data} isLoading={isLoading} />
			</div>
		</div>
	);
}
