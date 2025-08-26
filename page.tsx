// pages/exercise-guide.tsx
"use client";
import { useState } from 'react';

// Define the types
type Exercise = {
  id: number;
  name: string;
  type: 'Knee' | 'Shoulder' | 'Elbow' | 'Wrist' | 'Back' | 'Neck';
  description: string;
  videoUrl: string;
  sourceUrl: string;
};

const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Wrist-Friendly Shoulder and Arm Strengthening',
    type: 'Shoulder',
    description: 'A guide to strengthen shoulders and arms without straining the wrists.',
    videoUrl: 'https://www.youtube.com/embed/EAdbnfBCylE',
    sourceUrl: 'https://www.youtube.com/watch?v=EAdbnfBCylE',
  },
  {
    id: 2,
    name: 'Neck, Shoulder, Elbow, and Wrist Mobility Drill',
    type: 'Wrist',
    description: 'A quick mobility drill for upper body joints.',
    videoUrl: 'https://www.youtube.com/embed/6trVIzs6Dcw',
    sourceUrl: 'https://www.youtube.com/watch?v=6trVIzs6Dcw',
  },
  {
    id: 3,
    name: 'Knee Stability and Strengthening Exercises',
    type: 'Knee',
    description: 'A guide focused on strengthening knee joints for better stability.',
    videoUrl: 'https://www.youtube.com/embed/mi2fZ-NgSrk',
    sourceUrl: 'https://www.youtube.com/watch?v=mi2fZ-NgSrk',
  },
  {
    id: 4,
    name: 'Elbow Joint Mobility Exercises',
    type: 'Elbow',
    description: 'Exercise series aimed at improving elbow joint flexibility.',
    videoUrl: 'https://www.youtube.com/embed/MpXKUvaqfp0',
    sourceUrl: 'https://www.youtube.com/watch?v=MpXKUvaqfp0',
  },
  {
    id: 5,
    name: 'Back Pain Relief Yoga',
    type: 'Back',
    description: 'A gentle yoga sequence to help relieve back pain.',
    videoUrl: 'https://www.youtube.com/embed/awgYdKeAtq0',
    sourceUrl: 'https://www.youtube.com/watch?v=awgYdKeAtq0',
  },
  {
    id: 6,
    name: 'Neck Stretching for Flexibility',
    type: 'Neck',
    description: 'A set of neck stretches to increase flexibility and reduce tension.',
    videoUrl: 'https://www.youtube.com/embed/B_UQCd_PzN4',
    sourceUrl: 'https://www.youtube.com/watch?v=B_UQCd_PzN4',
  },
  {
    id: 7,
    name: 'Knee Flexion Exercises for Mobility',
    type: 'Knee',
    description: 'Focused on knee flexion exercises for improving joint mobility.',
    videoUrl: 'https://www.youtube.com/embed/uhghy9pFIPY',
    sourceUrl: 'https://www.youtube.com/watch?v=uhghy9pFIPY',
  },
  {
    id: 8,
    name: 'Shoulder and Elbow Mobility Routine',
    type: 'Shoulder',
    description: 'Exercises that improve the mobility of your shoulder and elbow joints.',
    videoUrl: 'https://www.youtube.com/embed/fPaF3oro6hE',
    sourceUrl: 'https://www.youtube.com/watch?v=fPaF3oro6hE',
  },
  {
    id: 9,
    name: 'Yoga for Knee Pain Relief',
    type: 'Knee',
    description: 'A yoga routine designed to reduce knee pain and improve mobility.',
    videoUrl: 'https://www.youtube.com/embed/MAFGO9QK77g',
    sourceUrl: 'https://www.youtube.com/watch?v=MAFGO9QK77g',
  },
  {
    id: 10,
    name: 'Strengthening Exercises for the Elbow',
    type: 'Elbow',
    description: 'Targeted exercises to strengthen the elbow joint and improve function.',
    videoUrl: 'https://www.youtube.com/embed/MAFGO9QK77g',
    sourceUrl: 'https://www.youtube.com/watch?v=MAFGO9QK77g',
  },
];


const AboutPage = () => {
  const [selectedType, setSelectedType] = useState<'All' | 'Knee' | 'Shoulder' | 'Elbow' | 'Wrist' | 'Back' | 'Neck'>('All');

  const filteredExercises = selectedType === 'All'
    ? exercises
    : exercises.filter(exercise => exercise.type === selectedType);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Joint Exercise Guide
      </h1>

      <div className="flex justify-center mb-8">
        {['All', 'Knee', 'Shoulder', 'Elbow', 'Wrist', 'Back', 'Neck'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type as 'All' | 'Knee' | 'Shoulder' | 'Elbow' | 'Wrist' | 'Back' | 'Neck')}
            className={`mx-4 px-6 py-3 text-lg rounded-full transition-all duration-300 transform ${
              selectedType === type
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{exercise.name}</h2>
            <p className="text-gray-600 mb-4">{exercise.description}</p>

            <div className="relative mb-4" style={{ paddingBottom: '56.25%' }}>
  <iframe
    src={exercise.videoUrl}
    title={exercise.name}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-[500px] rounded-lg shadow-md"
  ></iframe>
</div>


            <a
              href={exercise.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
