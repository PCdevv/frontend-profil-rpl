import G1 from"./asset/g1.png"
import G2 from"./asset/g2.png"

const Program = () => {
    return   (
      
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.top4top.io/p_2502kji0f1.png")` }}>
      <div className="flex flex-col w-full">
  <div className="grid h-32 bg-green-500 bg-opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
    <h1 className="text-5xl ">
      PROGRAM
    </h1>
    <p className="">
    Berisi riwayat kegiatan yang bersangkutan
    </p>
    <h1 className="mb-2">
    dengan jurusan PPLG
    </h1>
  </div>

        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
{/* kotak*/}
<div className="flex space-x-36">
        <div className="card w-100 bg-green-500 bg-opacity-50 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={G2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">PELATIHAN PEMBUATAN MARKET PLACE</h2>
    <p>Siswa kompetensi keahlian PPLG (Perkembangan Perangkat Lunak Gim) mendapatkan Pelatihan Pembuatan Project Market Pleace dengan Pembicara MR.Jack</p>
    <div className="card-actions">
      <button className="btn bg-white mr-40 w-50 text-xs text-green-500 border-none hover:bg-grey">Baca selengkapnya...</button>
    </div>
  </div>
</div>
{/* kotak */}
<div className="card w-100 bg-green-500 bg-opacity-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={G1} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">KUNJUNGAN BOS BESAR PT.BODHA</h2>
    <p>Siswa kompetensi keahlian PPLG (Perkembangan Perangkat Lunak Gim) mendapatkan pengarahan industri oleh PT Bodha Dharmajaya Aryadhana (BDA)....</p>
    <div className="card-actions">
      <button className="btn bg-white mr-62 w-50 text-xs text-green-500 border-none hover:bg-grey">Baca selengkapnya...</button>
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

export default Program;