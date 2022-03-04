const Spinner = () => {
  return(
    <div className="flex">
        <div className="relative">
            <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-bg-2"></div>
            <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-fg-1 border-t-bg-2 shadow-md"></div>
        </div>
    </div>
  );
};

export default Spinner;