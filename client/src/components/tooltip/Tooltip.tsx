export const Tooltip = ({ message }: {message: string}) => { 
  return (
    <>
      <div className="tooltip after:content-['']">{ message }</div>
    </>
  )
};