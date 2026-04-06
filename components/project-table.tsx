import type { ProjectItem } from "@/content/site-content";

type ProjectTableProps = {
  projects: ProjectItem[];
};

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="overflow-x-auto border border-[var(--outline)] bg-[var(--surface-white)]">
      <table className="min-w-full border-collapse text-left">
        <thead>
          <tr className="bg-[var(--surface-deep)]">
            {["Reference", "Project Title", "Category", "Capacity", "Status"].map((heading) => (
              <th
                key={heading}
                className="px-6 py-5 font-[var(--font-headline)] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--foreground)]"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.reference} className="border-t border-[var(--outline)] hover:bg-[var(--surface-low)]">
              <td className="px-6 py-6 text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(64,72,79,0.9)]">
                {project.reference}
              </td>
              <td className="px-6 py-6 font-[var(--font-headline)] text-lg font-bold uppercase tracking-[-0.03em]">
                {project.title}
              </td>
              <td className="px-6 py-6 text-sm text-[var(--muted)]">{project.category}</td>
              <td className="px-6 py-6 text-sm text-[var(--muted)]">{project.capacity}</td>
              <td className="px-6 py-6">
                <span className="inline-flex bg-[var(--surface-highest)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
