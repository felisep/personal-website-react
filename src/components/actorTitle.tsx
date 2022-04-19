import React, { useState } from 'react';

const ActorTitle = function() {
  
    const ChildComponent = (props: any) => {
        const timer = props
        return (
          <div>
            <h2>{timer.timerLearner}</h2>
          </div>
        );
      };

    const [stateVariable, setStateVariable] = useState(
    "this is the starting value for the variable test"
  );

  return (
    <div>
      <h1>This is a function component view</h1>
      <ChildComponent timerLearner={stateVariable} />
    </div>
  );
};

export default ActorTitle;
