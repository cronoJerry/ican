import Logo from "../asset/png/logo.png";
import { BsFillSunFill } from "react-icons/bs";

export default function Menu() {
	return (
		<div className='w-[1024px] h-ful flex justify-between items-center'>
			<div className='flex space-x-16 h-full items-center'>
				{/* 로고 */}
				<div>
					<img className='w-10 h-10' src={Logo} alt='logo' />
				</div>
				{/* 메뉴 */}
				<div className='flex space-x-8 text-xl font-semibold'>
					<div>home</div>
					<div>comics</div>
					<div>events</div>
					<div>details</div>
				</div>
			</div>
			{/* 아이콘 */}
			<div>
				<BsFillSunFill size='20' />
			</div>
		</div>
	);
}
