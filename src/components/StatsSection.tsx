const StatsSection: React.FC = () => {
    const stats = [
      { value: "15K", label: "Happy Customers" },
      { value: "150K", label: "Monthly Visitors" },
      { value: "15", label: "Countries Worldwide" },
      { value: "100+", label: "Top Partners" },
    ];
  
    return (
      <section className=" py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center mx-4">
              <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-gray-600 mt-2 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  