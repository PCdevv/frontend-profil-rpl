import Gambar from './asset/group11.png'
const Profil = () => {
    return (
       <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.top4top.io/p_2502kji0f1.png")` }}>
         <div className="flex flex-col w-full">
  <div className="grid h-20 card bg-green opacity-40 rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black">PROFIL</div>
  
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Gambar} className="max-w-sm rounded-lg " />
          <div>
            <h1 className=" text-5xl font-bold text-black underline decoration-green"> APA ITU PPLG?</h1>
            <p className="py-6 text-black">     RPL/PPLG adalah sebuah jurusan yang mempelajari dan mendalami semua cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.</p>
     <p className="text-black"> Intinya RPL/PPLG tidak akan jauh-jauh dari tiga hal yaitu Coding, Desain dan Algoritma yang akan menjadi kunci keberhasilan rekayasa perangkat lunak tersebut.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
 
    );
}

export default Profil;