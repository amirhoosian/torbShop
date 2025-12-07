const AccordionItem = () => {
  return (
    <div className="accordion-item border rounded-lg overflow-hidden">
      <button
        className="accordion-trigger w-full flex justify-between items-center p-4 bg-gray-100 text-left"
        aria-expanded="false"
        aria-controls="panel-1"
        id="btn-1"
      >
        <span>Section 1</span>
        <span className="icon transition-transform">▼</span>
      </button>

      <div
        id="panel-1"
        className="accordion-panel max-h-0 overflow-hidden transition-all duration-300 bg-white"
        role="region"
        aria-labelledby="btn-1"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
