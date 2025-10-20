/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import "./css.css";

const Uses = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Tools, technologies, and setup I use to design, develop, and stay productive.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Here’s an overview of my current development environment — the tools I rely on
          every day to write clean code, design responsive interfaces, and stay efficient.
        </p>
      </header>

      <div className="mt-16 sm:mt-20 space-y-20">
        {/* 💻 Workstation */}
        <section
          aria-labelledby="workstation"
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2
              id="workstation"
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              Workstation
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-10">
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Huawei Laptop (Windows)
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    My main device for coding and testing. Fast, reliable, and stable for long development sessions.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Dell 51-inch Screen
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Large display for multitasking, UI design, and debugging. Helps me maintain focus during long projects.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Redragon Mechanical Keyboard & MacBook Mouse
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Responsive keyboard and precise mouse combo that enhance typing speed and workflow efficiency.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Gaming Chair
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Designed for comfort during long coding hours — helps me stay focused and avoid fatigue.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🧑‍💻 Development Tools */}
        <section
          aria-labelledby="development"
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2
              id="development"
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              Development Tools
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-10">
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    VS Code, Node.js, Next.js, MongoDB
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    My primary stack for building full-stack web applications — clean, scalable, and modern.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Postman & API Testing
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Used for testing REST APIs efficiently during backend development and integration.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    npm, TypeScript, Tailwind CSS, Material UI, Bootstrap
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Tools and libraries I use to maintain code quality, styling consistency, and reusable UI components.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    GitHub & Vercel
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Version control, collaboration, and deployment. My projects are managed on GitHub and hosted via Vercel.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🎨 Design Tools */}
        <section
          aria-labelledby="design"
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2
              id="design"
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              Design
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-10">
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Figma, Photoshop, Illustrator
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    I specialize in converting ready-made Figma designs into clean, responsive, and functional interfaces.
                    I also have experience with Photoshop and Illustrator for UI refinement.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ⚙️ Productivity */}
        <section
          aria-labelledby="productivity"
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2
              id="productivity"
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              Productivity
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-10">
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    ChatGPT & VS Code Tools
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    I use AI tools like ChatGPT for problem-solving, optimization, and faster debugging during development.
                  </p>
                </li>
                <li>
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Knowledge of Jira & Slack
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    I understand how enterprise tools like Jira and Slack are used to manage workflow and team collaboration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Uses;
