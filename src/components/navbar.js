import PPLG from "./aset/pplg.png"

const Navbar = () => {
    return (
        <div className="navbar bg-white">
  <div className="flex-1">
    <div className="bg-transparent">
    <img src={PPLG}/>
    </div>
  </div>
  <div className="form-control">
  <div className="input-group">
    <input type="text" stroke="bg-green" placeholder="Search…" className="border-solid border-1 border-green-400 bg-white input input-bordered" />
    <button className="border-none btn bg-green-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>
    );
}

export default Navbar;