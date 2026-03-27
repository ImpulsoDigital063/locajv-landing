// Cabeçalho padrão de seção — reutilizado em todas as seções
export default function SectionHeader({
  tag,
  title,
  highlight,
}: {
  tag: string
  title: string
  highlight: string
}) {
  return (
    <div className="text-center mb-14">
      <span className="text-xs font-bold tracking-widest uppercase text-brand-red block mb-3">
        {tag}
      </span>
      <h2 className="font-title text-4xl md:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
        {title}{' '}
        <span className="text-brand-red">{highlight}</span>
      </h2>
    </div>
  )
}
