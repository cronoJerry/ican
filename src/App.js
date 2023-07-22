import CarouselSlick from "./components/CarouselSlick";
import Contact from "./components/Contact";
import Features from "./components/Features";
import ImageTitle from "./components/ImageTitle";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        {/* 메뉴 */}
        <div className="w-full h-20 flex justify-center border-b border-neutral-300">
          <Menu />
        </div>
        {/* 캐러셀 */}
        <div className="w-full h-[450px] bg-red-500">
          <CarouselSlick />
        </div>
        {/* Features */}
        <div className="w-full flex justify-center">
          <Features />
        </div>
        {/* 이미지 제목 */}
        <div className="w-full flex justify-center">
          <ImageTitle />
        </div>
      </div>
    </div>
  );
}

export default App;
