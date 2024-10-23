import React from 'react'

interface Props {
  progress: number
}

const ProgressDisplay: React.FC<Props> = ({ progress }: Props) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div
          className="bg-red-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
          data-testid="progress"
        ></div>
      </div>
    );
  };
  export default ProgressDisplay;