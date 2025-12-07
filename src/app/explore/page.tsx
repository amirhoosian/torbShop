"use client";
import Accordion from "@/components/Accordion/Accordion";
import ExploreFilters from "@/components/ExploreFilters/ExploreFilters";

const Explore = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        <div className="h-full  md:col-span-3">
          <ExploreFilters />
        </div>
        <div className=" h-full  md:col-span-1">
          <div className="space-y-4 w-full">
            <Accordion
              title="دسته بندی"
              items={[
                "ساعت",
                "لپ تاپ",
                "لوازم جانبی",
                "لوازم خانه",
                "موبایل",
                "هدفون",
              ]}
            />

            <Accordion
              title="برند"
              items={[
                "اسنوا",
                "ال جی",
                "برپل",
                "دوو",
                "شیائومی",
                "قدیمی",
                "مهیا",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
