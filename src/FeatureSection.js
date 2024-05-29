import React from "react";

const FeatureSection = ({ serviceFeatureSectionDatas }) => {
  return (
    <div className="my-24">
      <div className="mx-56 px-6">
        <div className="featuresectiontitle">
          <h3 className="p-3 text-6xl">我們的服務</h3>
        </div>
        {serviceFeatureSectionDatas.map((data, index) => {
          return (
            <SectionComponent
              data={data}
              key={index}
              className={{
                service: "service",
                servicePic: "service-pic",
                serviceParagraph: "service-paragraph",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const SectionComponent = ({ data, className }) => {
  return (
    <div className={className.service}>
      <div className={className.servicePic}>
        <img src={data.imgUrl} alt="" />
      </div>
      <div className={className.serviceParagraph}>
        <h4>{data.title}</h4>
        <p>{data.paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
