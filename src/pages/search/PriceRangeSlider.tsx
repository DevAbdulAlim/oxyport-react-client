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

    onRangeChange(values);
  };

  const sliderStyle = {
    track: {
      background: getTrackBackground({
        values: sliderValues,
        colors: ["#22c55e", "#14532d", "#22c55e"],
        min: 0,
        max: 1500,
      }),
      height: "20px",
      borderRadius: "5px",
    },
    thumb: {
      height: "30px",
      width: "30px",
      backgroundColor: "#14532d",
      boxShadow: "#14532d",
      borderRadius: "50%",
    },
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2 text-xl font-bold">Price Range</h3>
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
