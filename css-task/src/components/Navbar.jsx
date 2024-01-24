const Navbar = () => {
  return (
    <nav className="py-6 px-20 text-amber-900 flex items-center justify-between">
      <h2 className="text-[2rem] font-bold">Collers</h2>
      <div className="flex justify-center gap-4 font-medium">
        <button className="py-3 px-2">Products</button>
        <button className="py-3 px-2">Solutions</button>
        <button className="py-3 px-2">Pricing</button>
        <button className="py-3 px-2">Resources</button>
        <button className="py-3 px-2">Log In</button>
        <button className="h-12 px-7 py-3 border-amber-900 border-2 rounded-lg text-base font-medium">Sign up now</button>
      </div>
    </nav>
  )
}
export default Navbar