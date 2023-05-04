import React, { FC } from "react";

type TemperatureBoxProps = {
  name: string;
  value: number;
  symbol: string;
}

export const TemperatureBox: FC<TemperatureBoxProps> = ({name, value, symbol}) => {
  return <div className="temperatureBox">{name}: {value}{symbol}</div>
}