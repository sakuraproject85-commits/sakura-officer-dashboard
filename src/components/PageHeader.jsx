const PageHeader = ({ title, description, action }) => (
  <div className="flex flex-wrap items-center justify-between gap-4">
    <div>
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </div>
    {action}
  </div>
)

export default PageHeader
