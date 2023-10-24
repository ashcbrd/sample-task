import BackgroundCircle from "@/components/background-circle";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="relative bg-additional-navyblue h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl flex z-10">
        <img
          src="/sample_image.png"
          alt="sample image"
          className="rounded-[40px] w-[260px] translate-x-36"
        />
        <div className="flex flex-col items-end -translate-x-36">
          <h2 className="text-primary-white text-[40px] font-druk w-[80%] mt-10">
            Turn Your Website Into Your Best Sales Person
          </h2>
          <div className="flex flex-col w-[54%] gap-y-6">
            <p className="font-rubik text-secondary font-[300] mt-2  leading-7">
              Triple your sales with a pixel-perfect website. At SmartSite
              Studio, we don’t just design and write code, we build a
              revenue-driving machine for your business.
            </p>
            <div className="flex gap-x-4">
              <button className="bg-primary-orange text-primary-white font-druk text-[12px] rounded-full tracking-wider py-3 px-8">
                Talk to Us
              </button>
              <button className="text-primary-white border border-primary-blue font-druk text-[12px] rounded-full tracking-wider py-3 px-4">
                See Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackgroundCircle
        className="w-max absolute left-0 -top-1/2 z-0"
        color="#0083FE"
      />
      <BackgroundCircle
        className="w-screen absolute bottom-0 -right-[80%] z-0"
        color="#6D6F84"
      />
    </div>
  );
}
