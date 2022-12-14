import Right from "./Assets/Icon/Right";
import Searchs from "./Assets/Icon/Searchs";
import Sidebar from "./Component/Sidebar";
import CompanyLogo from "./Assets/company-logo.png";
import BuildingImage from "./Assets/gedung.jpg";
import Profil from "./Assets/profil.jpeg"
import LogoVisa from "./Assets/logovisa.png"
import Bell from "./Assets/Icon/Bell";
import Edit from "./Assets/Icon/Edit";
import Mail from "./Assets/Icon/Mail";
import Phone from "./Assets/Icon/Phone";
import Web from "./Assets/Icon/Web";
import IconBuilding from "./Assets/Icon/IconBuilding";
import Setting from "./Assets/Icon/Setting";
import Building3 from "./Assets/Icon/Building3";
import Trash from "./Assets/Icon/Trash";
import Share from "./Assets/Icon/Share";

function App() {
  return (
    <div className="flex">
      <div className={'w-14 min-h-screen bg-white border shadow-lg'}>
        <Sidebar/>
      </div>
      <div className="pr-8 pl-8 md:pl-20 py-2">
      <div className="flex justify-between">
        <div className="self-center hidden md:flex">
          <p className="text-sm opacity-25 mr-3">Perusahaan</p>
          <div className="opacity-25 self-center">
            <Right />
          </div>
          <p className="text-sm font-bold ml-3 ">Mitramas Infosys Global</p>
        </div>
        <div className="flex">
          <div className="flex mr-3 opacity-70 self-center cursor-pointer">
            <Searchs/>
          </div>
          <div className="flex mr-3 opacity-70 self-center cursor-pointer">
            <Bell/>
          </div>
          <div className="flex">
            <img src={Profil} alt="profil" className="inline object-cover w-7 h-7 rounded-full mr-2" />
            <p className="font-semibold self-center">John Doe</p>
          </div>
        </div>
      </div>
      <div className="grid md:flex mt-4">
        <div className="bg-white h-full xl:w-1/5 shadow-lg rounded-md grid justify-items-stretch pb-10">
          <div className="bg-building h-36">
            <img src={BuildingImage} alt="building" className="self-center rounded-lg"/>
          </div>
          <div className="bg-white justify-self-center flex px-2 w-32 h-32 -mt-16 rounded-full border-2 border-gray-200">
            <img src={CompanyLogo} alt="logo" className="self-center" />
          </div>
          <div className="grid justify-items-center mt-8">
            <p className="font-bold text-center text-base">Mitramas Infosys Global</p>
            <p className="text-sm opacity-50">Layanan IT</p>
            <div className="mt-4 flex self-center text-green-700 cursor-pointer max-w-fit">
              <Edit/>
              <p className="text-sm font-semibold ml-2">Sunting Profil</p>
            </div>
          </div>
          <div className="px-4 mt-8">
            <p className="text-sm opacity-50 mb-1">Status Perusahaan</p>
            <div className="flex justify-between">
              <p className="text-green-700 font-semibold">
                Aktif
              </p>
              <div>
                <div className="bg-white w-4 h-4 self-center rounded-full" />
              </div>
            </div>
            <p className="text-sm opacity-50 mb-1 mt-3">Singkatan</p>
            <p>MIG</p>
            <p className="text-sm opacity-50 mb-1 mt-3">Alamat Perusahaan</p>
            <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
            <p className="text-sm opacity-50 mb-1 mt-3">Penanggung Jawab (PIC)</p>
            <p>John Doe</p>
            <p className="text-sm opacity-50 mb-1 mt-3">Tanggal PKP</p>
            <p>3 Maret 2021</p>
            <p className="text-sm opacity-50 mb-1 mt-3">E-mail</p>
            <div className="flex text-green-700 ">
              <div className="pt-1">
              <Mail />
              </div>
              <p className="ml-2 underline cursor-pointer">mig@mitrasolusi.group</p>
            </div>
            <p className="text-sm opacity-50 mb-1 mt-3">No. Telp</p>
            <div className="flex text-green-700">
              <div className="pt-1">
              <Phone />
              </div>
              <p className="ml-2">021-5678-1234</p>
            </div>
            <p className="text-sm opacity-50 mb-1 mt-3">Situs Web</p>
            <div className="flex text-green-700">
              <div className="pt-1">
              <Web />
              </div>
              <p className="ml-2 underline cursor-pointer">mitramas.com</p>
            </div>
          </div>
        </div>
        <div className="ml-0 mt-8 md:ml-8 md:mt-0 xl:w-4/5 ">
          <div className="w-full bg-white shadow-lg rounded-md px-4 py-6">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-lg">Lokasi</p>
              <p className="text-sm text-green-700 cursor-pointer">Lihat Semua</p>
            </div>
            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-green-700 rounded-md p-4 flex justify-between text-white">
                <IconBuilding />
                <div>
                  <p className="font-bold text-2xl text-right">20</p>
                  <p className="text-sm opacity-50">Induk</p>
                </div>
              </div>
              <div className="bg-green-600 rounded-md p-4 flex justify-between text-white">
                <Setting />
                <div>
                  <p className="font-bold text-2xl text-right">3</p>
                  <p className="text-sm opacity-50">Sub Lokasi Level 1</p>
                </div>
              </div>
              <div className="bg-green-500 rounded-md p-4 flex justify-between text-white">
                <Building3 />
                <div>
                  <p className="font-bold text-2xl text-right">1</p>
                  <p className="text-sm opacity-50">Sub Lokasi Level 2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-8 h-4/5 grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full lg:w-auto grid grid-rows-2">
              <div className="bg-white shadow-lg rounded-md px-4 py-5">
                <div className="flex justify-between">
                  <p className="font-bold text-lg">Akun Bank</p>
                  <button className="bg-green-700 hover:bg-green-800 rounded-md px-4 py-1 text-white text-sm">+ Tambah Akun Bank</button>
                </div>
                <div className="flex mt-5">
                  <div class="h-24 w-32 p-4 rounded-lg bg-gradient-to-br from-yellow-400 to-lime-600 grid place-content-end">
                    <img src={LogoVisa} alt="visa" className="w-9" />
                  </div>
                  <div className="ml-6 grid content-between">
                    <div className="flex justify-between sm:justify-start">
                      <p className="font-bold">Bank KB Bukopin</p>
                      <div className="flex self-center sm:ml-20 text-green-700 cursor-pointer">
                        <div className="flex pr-3">
                        <Edit />
                        </div>
                        <Trash />
                      </div>
                    </div>
                    <div className="text-sm opacity-70">
                      <p>**** 0876 - Yusron Taufiq</p>
                      <p>IDR</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div class="h-24 w-32 p-4 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-400 grid place-content-end">
                    <img src={LogoVisa} alt="visa" className="w-9" />
                  </div>
                  <div className="ml-6 grid content-between">
                    <div className="flex justify-between sm:justify-start">
                      <p className="font-bold">Bank KB Bukopin</p>
                      <div className="flex self-center sm:ml-20 text-green-700 cursor-pointer">
                      <div className="flex pr-3">
                        <Edit />
                        </div>
                        <Trash />
                      </div>
                    </div>
                    <div className="text-sm opacity-70">
                      <p>**** 5525 - Si Tampan</p>
                      <p>USD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-md px-4 py-5 mt-8">
                <div className="flex justify-between mb-6">
                  <p className="font-bold text-lg">Relasi</p>
                  <p className="text-sm text-green-700 cursor-pointer">Lihat Semua</p>
                </div>
                <div className="flex">
                  <div className="pt-3">
                  <Share />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-xl text-left">20</p>
                    <p className="text-sm opacity-50">Memiliki</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="pt-3">
                  <Share />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-xl text-left">108</p>
                    <p className="text-sm opacity-50">Menggunakan</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="pt-3">
                  <Share />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-xl text-left">67</p>
                    <p className="text-sm opacity-50">Meminjam</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:ml-8 xl:ml-16 lg:mt-0 h-full bg-white shadow-lg rounded-md px-4 py-5">
              <p className="font-bold text-lg mb-8">Aktivitas</p>
              <p>Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
              <p className="text-sm opacity-25 mb-4">Hari ini, 06:00</p>
              <p>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
              <p className="text-sm opacity-25 mb-4">Kemaren, 17:32</p>
              <p>Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</p>
              <p className="text-sm opacity-25 mb-4">Kemaren, 17:32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
