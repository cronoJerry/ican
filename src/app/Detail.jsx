import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { comicsDetailApiData } from "../api";

export default function Detail() {
	const { id } = useParams();
	const { data } = useQuery(["comicsDetail", id], comicsDetailApiData);

	const item = data?.data?.results[0];
	return (
		<Layout>
			<div className='w-full'>
				<div className={`w-full h-[550px] relative`}>
					{/* <img
						className='w-full h-full object-cover object-center'
						src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
						alt='ac'
					/> */}
					<div
						className='absolute w-full h-full '
						style={`background-image: url('')`}
					></div>
					<div className='absolute inset-0 w-full h-full bg-black/70'>
						<div className='absolute inset-0 w-full h-full  flex justify-center'>
							<div className='max-w-5xl w-full h-full flex space-x-8'>
								{/* image */}
								<div className='w-[300px] h-full'>
									<img
										className='w-full h-full object-cover object-center'
										src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
										alt='main_page'
									/>
								</div>
								{/* title */}
								<div className='flex flex-col text-white py-16 space-y-4'>
									<h2 className='font-semibold text-2xl'>
										{item?.title}
									</h2>
									<p className='text-gray-300'>
										{item?.variantDescription}
									</p>
								</div>
								{/* description */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
