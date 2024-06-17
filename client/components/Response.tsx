
interface ResponseProps {
  response: string
}

const Response = ({ response }: ResponseProps) => {
  const res=(response.slice(7, -3));
  const json_res = JSON.parse(res)
  const summary=json_res.Summary
  const key_pts=json_res['Key Points']
  const conclusion=json_res.Conclusion
  return (
    <section className="bg-[#171717] flex flex-col gap-y-8 rounded-2xl mx-10 my-10 py-10 px-12 w-[92vw]">
      <div className="summary">
        <h2 className="text-2xl font-bold text-[#F9FAFB]">Summary</h2>
        <p className="text-[#F9FAFB] text-justify">{summary}</p>
      </div>
      <div className="key_pts">
        <h2 className="text-2xl font-bold text-[#F9FAFB]">Key Points</h2>
        <ul className="text-[#F9FAFB] list-disc list-inside">
          {key_pts.map((key_pt: string, index: number) => (
            <li key={index}>{key_pt}</li>
          ))}
        </ul>
      </div>
      <div className="conclusion">
        <h2 className="text-2xl font-bold text-[#F9FAFB]">Conclusion</h2>
        <p className="text-[#F9FAFB] text-justify">{conclusion}</p>
      </div>
    </section>
  )
}

export default Response