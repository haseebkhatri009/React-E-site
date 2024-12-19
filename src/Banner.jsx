import './index.css'

export default function Banner() {
  return (
    <div className="h-12 border border-black bg-black text-white py-2 banner max-w-[1400px] mx-auto">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <span className="ml-2 font-bold underline cursor-pointer hover:text-red-500">
          ShopNow
        </span>
      </marquee>
    </div>
  )
}
