import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { useEffect } from 'react';

function PlantVisualizer({todos}) {
  const [completedCount, setCompletedCount] = useState(0);

  // when todos are finished, update completedCount
  useEffect(() => {
    // Count completed tasks
    const count = todos.filter((task) => task.completed).length;
    setCompletedCount(count);
  }, [todos]);

 if (completedCount === 0) {
    return <h> "Complete your goals, bloom your plant" </h>
 }
    else
    return (
    <DotLottieReact
      src="https://lottie.host/6bcc940f-838d-4523-bf99-8fd427ec8c0c/eCivLRowNL.lottie"
      loop
      autoplay
    />
  );
};


export default PlantVisualizer;
