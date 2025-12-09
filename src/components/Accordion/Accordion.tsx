"use client";
import { useState, useRef, useEffect } from "react";

const Accordion = ({ title, items }: { title: string; items: string[] }) => {
	const [openAccordion, setOpenAccordion] = useState(true);
	const [height, setHeight] = useState("0px");

	const panelRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const el = panelRef.current;
		if (!el) return;
		setHeight(openAccordion ? el.scrollHeight + "px" : "0px");
	}, [openAccordion]);

	const toggle = () => {
		setOpenAccordion(!openAccordion);
	};

	return (
		<div className="w-full border rounded-xl p-3 bg-white shadow-sm">
			{/* Header */}
			<button
				onClick={toggle}
				className="w-full flex justify-between items-center text-gray-800"
			>
				<span className="font-medium">{title}</span>
				<span
					className={`transition-transform duration-300 ${
						openAccordion ? "rotate-180" : "rotate-0"
					}`}
				>
					▼
				</span>
			</button>

			{/* Panel */}
			<div
				ref={panelRef}
				className="transition-all overflow-hidden"
				style={{
					maxHeight: height,
				}}
			>
				<div className="mt-3 flex flex-col gap-2 pr-1">
					{items.map((item, index) => (
						<label key={index} className="flex justify-between items-center">
							<span>{item}</span>
							<input
								type="checkbox"
								className="w-4 h-4 accent-blue-600 cursor-pointer"
							/>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
