const ProblemsSection: React.FC = () => {
    return (
      <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12 bg-white">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-sm font-semibold text-red-500">Problems trying</h3>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-2 leading-snug">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
  
        {/* Right Content */}
        <div className="md:w-1/2 text-gray-600 flex items-center justify-center p-10 md:mt-0 text-sm md:text-base">
         <p>
         Problems trying to resolve the conflict between the two major realms of
         Classical physics: Newtonian mechanics
         </p>
        </div>
      </section>
    );
  };
  
  export default ProblemsSection;
  