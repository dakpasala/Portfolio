import React from 'react';
import { Heading, Text } from 'aceternity-ui';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Heading level={1} size="4xl" className="font-bold">
        Dakshesh Pasala
      </Heading>
      <Text size="lg" className="mt-4 opacity-75">
        A passionate Computer Engineering student with expertise in software development, visualization, and UI/UX design.
      </Text>
    </div>
  );
};

export default HomePage;
