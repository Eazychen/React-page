import React from "react";

const FeatureSection = ({ featureSectionDatas }) => {
  return (
    <div className="mt-15">
      <div className="mx-56 px-6">
        {featureSectionDatas.map((data, index) => {
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
        <img src="https://picsum.photos/id/208/600/300" alt="" />
      </div>
      <div className={className.serviceParagraph}>
        <h3>{data.title}</h3>
        <p>
          {data.paragraph.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
