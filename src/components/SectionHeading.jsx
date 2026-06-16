export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
