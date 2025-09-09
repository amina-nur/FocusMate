import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function PlantVisualizer({ tasks }) {
  const completedCount = tasks.filter(task => task.completed).length;

  if (completedCount === 0) {
    return <h2>Complete your goals, bloom your plant </h2>;
  }

  return (
    <DotLottieReact
      src="https://lottie.host/6bcc940f-838d-4523-bf99-8fd427ec8c0c/eCivLRowNL.lottie"
      loop
      autoplay
    />
  );
}

export default PlantVisualizer;

