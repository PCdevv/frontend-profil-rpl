import PPLG from "./aset/pplg.png"
import Fb from "./aset/fb.png"
import Tw from "./aset/tw.png"
import Ig from "./aset/ig.png"
import Yt from "./aset/yt.png"


const Contact = () => {
    return (
    <div className="bg-white hero-h-screen bg-cover" style={{backgroundImage: `url("https://i.top4top.io/p_2502kji0f1.png")`}}>
       <div>
            <div>
            <h1 className="pt-15 text-5xl text-center text-black py-5 font-bold">Kontak Kami</h1>
                <div className="hero min-h-screen bg-green-300 bg-opacity-80">
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
      <div class="h-10 w-10 pt-5 mx-0 hover:scale-150">
      <img src={Fb}/>
      </div>
      <div className="h-10 w-10 pt-5 mx-1 hover:scale-150">
      <img src={Tw}/>
      </div>
      <div className="h-9 w-9 pt-6 mx-0 hover:scale-150">
      <img src={Ig}/>
      </div>
      <div className="h-9 w-9 pt-6 mx-2 hover:scale-150">
      <img src={Yt}/>
      </div>
      </ul>
    </div>
</div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <div className="card-body">
      <div className="form-control">
          <label className="hero-content font-bold text-3xl text-black text-center label">Pesan
          </label>
      </div>

        <div className="form-control">
          <input type="text" placeholder="Nama" className="input input-bordered" />
        </div>

        <div className="form-control">
          <input type="Email" placeholder="Email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <input type="text" placeholder="Pesan" className="input input-bordered h-40" />
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

export default Contact;