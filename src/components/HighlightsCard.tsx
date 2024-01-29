export default function HighlightsCard(props: any) {
  return (
    <div className="basis-[32.5%] bg-white p-4 rounded-xl">
      <p className="text-xs text-slate-500 font-bold">{props.title ?? 'No Title'}</p>
      {props.children}
    </div>
  )
}