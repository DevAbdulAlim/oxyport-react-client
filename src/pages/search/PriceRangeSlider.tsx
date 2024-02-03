import React from "react";
import { Range, getTrackBackground } from "react-range";

interface PriceRangeSliderProps {
  onRangeChange: (values: number[]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  onRangeChange,
}) => {
  const [sliderValues, setSliderValues] = React.useState<number[]>([300, 900]);

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values);
  };

  const handleFinalChange = (values: number[]) => {
    console.log(values);
    // You can call the onRangeChange function here if needed
    onRangeChange(values);
  };

  const sliderStyle = {
    track: {
      background: getTrackBackground({
        values: sliderValues,
        colors: ["lightblue", "blue", "lightblue"],
        min: 0,
        max: 1500,
      }),
      height: "10px",
      borderRadius: "5px",
    },
    thumb: {
      height: "20px",
      width: "20px",
      backgroundColor: "blue",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "50%",
    },
  };

  return (
    <div className="mt-6">
      <Range
        values={sliderValues}
        step={10}
        min={0}
        max={1500}
        onChange={handleSliderChange}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={props.style}
          >
            <div
              ref={props.ref}
              style={{
                ...props.style,
                ...sliderStyle.track,
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              ...sliderStyle.thumb,
            }}
          />
        )}
      />
      <div className="flex justify-between mt-2">
        <span>${sliderValues[0]}</span>
        <span>${sliderValues[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
