import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projectsData";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-serif text-gray-400 mb-4">Project not found.</p>
          <button
            onClick={() => navigate("/#projects")}
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Top nav bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm truncate">{project.title}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14">

        {/* Hero */}
        <div className="mb-12">
          {/* Thumbnail */}
          <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] mb-10 border border-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>

          {/* Title + tags + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg shrink-0"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* Body content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left column — Overview + Features */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                {project.overview}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Damage categories (Car Crash only) */}
            {project.categories && (
              <section>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                  Classification Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 text-center shadow-sm"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right column — Tech Stack + GitHub */}
          <div className="space-y-8">

            {/* Tech Stack */}
            {project.techStack && (
              <section>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                  Tech Stack
                </h2>
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <tbody>
                      {project.techStack.map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
                        >
                          <td className="px-4 py-2.5 text-gray-500 font-medium border-r border-gray-100 w-[42%]">
                            {row.component}
                          </td>
                          <td className="px-4 py-2.5 text-gray-800">
                            {row.technology}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* GitHub card */}
            <section>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                Repository
              </h2>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Github className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                  <span className="font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors text-sm">
                    {project.githubLink.replace("https://github.com/", "")}
                  </span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-indigo-400 transition-colors">
                  Open source on GitHub →
                </p>
              </a>
            </section>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </button>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors font-medium text-sm"
          >
            <Github className="w-4 h-4" />
            View Source
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
