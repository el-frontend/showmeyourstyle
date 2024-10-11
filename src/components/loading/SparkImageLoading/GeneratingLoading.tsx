import "./loading.css";

const GeneratingLoading = () => {
  return (
    <div className="flex items-center justify-center text-white bg-white bg-opacity-20 rounded-full w-[150px] absolute left-1/2 right-1/2 translate-x-[-50%] bottom-4 px-4 py-2">
      <span className="text-lg font-normal ">Generating</span>
      <span className="ml-1 inline-flex">
        <span className="dot animate-dot1">.</span>
        <span className="dot animate-dot2">.</span>
        <span className="dot animate-dot3">.</span>
      </span>
    </div>
  );
};

export default GeneratingLoading;
