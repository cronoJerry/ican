import Menu from "./Menu";

export default function Layout({ children }) {
	return (
		<div className='w-full'>
			<div className='w-full flex flex-col'>
				{/* 메뉴 */}
				<div className='w-full h-20 flex justify-center border-b border-neutral-300'>
					<Menu />
				</div>
				{children}
			</div>
		</div>
	);
}
