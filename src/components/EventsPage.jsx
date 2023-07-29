import { useQuery } from "react-query";
import CarouselComics from "./CarouselComics";
import { eventsApiData } from "../api";

export default function EventsPage() {
	const { isLoading, error, data } = useQuery("eventsData", eventsApiData);

	return (
		<div className='w-full flex justify-center'>
			<div className='w-[1024px] bg-white h-[400px] -translate-y-8'>
				<CarouselComics data={data} isLoading={isLoading} />
			</div>
		</div>
	);
}
