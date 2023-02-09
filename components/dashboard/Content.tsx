const DashBoardContent = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-3/4 p-16 bg-neutral-50">
      {children}
    </div>
  )
}

export default DashBoardContent