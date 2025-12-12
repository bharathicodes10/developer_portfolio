// pages/codeai.jsx  (or components/ProjectCodeAI.jsx)
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mfccImage from "../public/assets/projects/mfcc.png"; // your spectrogram/MFCC visual

const ieee = () => {
  const heroTech = "Python • TensorFlow (Keras)";

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />

        {/* Hero Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src={mfccImage}
            alt="MFCC spectrogram visualization"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Overlay */}
        <div
          className="absolute left-1/2 top-[70%] z-30 w-full max-w-[1240px] 
                  -translate-x-1/2 -translate-y-1/2 px-4 text-white"
        >
          <h1 className="text-xl md:text-3xl font-semibold leading-tight">
            Early Prediction of COPD
          </h1>
          <p className="mt-2 text-sm md:text-base text-sky-200">
            A Deep Transfer Learning Approach
          </p>

          <p className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm">
            Python • TensorFlow (Keras)
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1240px] mx-auto p-6 md:p-8">
        <article>
          <p className="text-sm text-sky-500 uppercase tracking-wider">
            Project
          </p>
          <h2 className="text-2xl font-bold py-2">Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            Developed a deep transfer learning model for early detection of
            Chronic Obstructive Pulmonary Disease (COPD) using respiratory audio
            recordings. Using MFCC-based preprocessing and CNN-LSTM
            architectures combined with transfer-learning models such as
            Inception, ResNet, and VGGNet, the system learns subtle acoustic
            signatures of impaired lung function. Trained on a diverse dataset
            spanning healthy individuals and multiple pulmonary disorders, the
            model achieved near-perfect classification accuracy, demonstrating
            strong potential for affordable, scalable, AI-driven clinical
            screening. Honored with the Best Project Shield for developing a
            clinically promising, AI-driven COPD screening system.
          </p>

          
          {/* full tech list (kept in content, not hero) */}
          <div className="mt-4 text-sm text-gray-400">
            <strong>Tech Stack:</strong> Python • Librosa (MFCC) • NumPy •
            Pandas • TensorFlow • Keras • Conv1D • MaxPooling1D • Flatten •
            Dense • Dropout • Inception • ResNet • VGGNet • Scikit-learn •
            Matplotlib • Seaborn • Google Colab
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://ieeexplore.ieee.org/abstract/document/10760801"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-sky-600 px-5 py-2 text-white font-medium transition-transform transform hover:scale-[1.03] shadow"
              aria-label="View IEEE research paper"
            >
              View Research Paper
            </a>

            <Link href="/#projects" legacyBehavior>
              <a className="inline-block rounded-lg border border-sky-600 px-5 py-2 text-sky-600 hover:bg-sky-600 hover:text-white transition-colors">
                Back to Projects
              </a>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ieee;
