import PPLG from "./asset/PPLG.png"
import FB from "./asset/fb.png"
import TW from "./asset/tw.png"
import IG from "./asset/ig.png"
import YT from "./asset/yt.png"

const Kontak = () => {
    return (
    <div id="kontak">
       <div>
            <div>
            <h1 className="pt-15 text-5xl text-center text-black py-5 font-bold">Kontak Kami</h1>
                <div className="hero min-h-screen bg-green bg-opacity-80">
                <div className="hero min-h-screen">
    
    <div class="flex space-x-80">
    <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={PPLG}/>
      <h1 className="pt-10 text-black font-bold">Alamat:</h1>
      <h1 className="pt1 text-black font-bold">Jl. Ahmad Yani, South Kramat, Magelang Utara</h1>
      <h3 className="pt-5 text-black font-bold">Email:</h3>
      <h3 className="pt-1 text-black font-bold">rpl1smkn2@gmail.com</h3>
      <h4 className="pt-5 text-black font-bold">Telepon:</h4>
      <h4 className="pt-1 text-black font-bold">08XX-XXXXXX</h4>

      <ul className="menu menu-horizontal p-0">
      <div class="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={FB}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={TW}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={IG}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={YT}/>
      </div>
      </ul>
    </div>
</div>

    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-white">
      <div className="card-body">
      <div className="form-control">
          <label className="hero-content font-bold text-3xl text-black text-center label">Pesan
          </label>
      </div>

        <div className="form-control">
          <input type="text" placeholder="Nama" className="bg-grey input input-bordered" />
        </div>

        <div className="form-control">
          <input type="Email" placeholder="Email" className="bg-grey input input-bordered" />
        </div>

        <div className="form-control">
          <input type="text" placeholder="Pesan" className="bg-grey input input-bordered h-40" />
        </div>

        <div className="form-control mt-3 box-border h-10 w-28">
          <div class="absolute bottom-3 right-12 h-16 w-16">
          <button className="btn bg-black">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>         
            </div>
        </div>
    </div>

    );
}

export default Kontak;