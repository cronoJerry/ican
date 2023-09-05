import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center space-y-8'>
			<h1 className='text-2xl font-semibold'>
				페이지를 찾을 수 없습니다.
			</h1>
			<Link to='/'>
				<button className='border border-neutral-300 px-4 py-2'>
					홈으로 가기
				</button>
			</Link>
		</div>
	);
}
