import React from 'react'
import '../css/Main.css'
import osmangazi from "../img/osmangazi.jpg";
import borhan from "../img/borhan.jpg"
import gemlik from "../img/gemlik.jpg"
import gursu from "../img/gursu.jpg"
import harmancık from "../img/harmancık.jpg"
import inegöl from "../img/inegöl.jpg"
import iznik from "../img/iznik.jpg"
import karacabey from "../img/karacabey.jpg"
import keles from "../img/keles.jpg"
import kestel from "../img/kestel.jpg"
import mudanya from "../img/mudanya.jpg"
import Mustafakemalpasa from "../img/Mustafakemalpasa.jpg"
import nilufer from "../img/nilufer.jpg"
import orhaneli from "../img/orhaneli.jpg"
import orhangazi from "../img/orhangazi.jpg"
import yenisehir from "../img/yenisehir.jpg"
import yıldırım from "../img/yıldırım.jpg"


function Main() {



  return (
    <div className='wrap' id='ilceler'>
      <h1 className='main-h1'>BURSANIN ILCELERI</h1>
      <div className="card-wrap">
        <div className="card">
          <img src={osmangazi} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Osmangazi</h1>
            <p>Osmangazi, Bursa'nın metropol ilçelerinden en büyüğüdür. Bursa'nın tüm merkez ilçelerinin kesiştiği noktadır.</p>
          </div>
        </div>
        <div className="card">
          <img src={yıldırım} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Yıldırım</h1>
            <p>Yıldırım, Bursa'nın merkezinde Osmangazi'den sonra en büyük ve metropol ilçesidir. </p>
          </div>
        </div>
        <div className="card">
          <img src={nilufer} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Nilüfer</h1>
            <p>Nilüfer, Bursa iline bağlı ilçedir. İlçenin adı, Orhan Gazi'nin eşi "Nilüfer Hatun"dan gelmektedir.</p>
          </div>
        </div>
        <div className="card">
          <img src={inegöl} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>İnegöl</h1>
            <p>İnegöl, Bursa iline bağlı ilçedir. Marmara Bölgesi içinde yer almaktadır.</p>
          </div>
        </div>
        <div className="card">
          <img src={gemlik} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Gemlik</h1>
            <p>Gemlik, Marmara Denizi kıyısında bulunan, Bursa'nın bir ilçesi.</p>
          </div>
        </div>
        <div className="card">
          <img src={mudanya} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Mudanya</h1>
            <p>Mudanya, Marmara Denizi kıyısında Bursa iline bağlı 109.964 nüfuslu ilçe.</p>
          </div>
        </div>
        <div className="card">
          <img src={gursu} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Gursu</h1>
            <p>Gürsu; Nilüfer, Osmangazi, Yıldırım ve Kestel ile birlikte Bursa merkezi oluşturur.</p>
          </div>
        </div>
        <div className="card">
          <img src={Mustafakemalpasa} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1 className='ozel'>Mustafakemalpaşa</h1>
            <p>Mustafakemalpaşa veya eski ismiyle Kırmasti,[3] Bursa iline bağlı bir ilçedir.</p>
          </div>
        </div>
        <div className="card">
          <img src={karacabey} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Karacabey</h1>
            <p>Karacabey, eski ismi Mihaliç,[4] Bursa'nın 70 km batısında yer alan Bursa'ya bağlı bir ilçedir.</p>
          </div>
        </div>
        <div className="card">
          <img src={orhangazi} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Orhangazi</h1>
            <p>Orhangazi, Marmara Denizi'nin güneyinde bulunan, İznik Gölü'nün batısında yer alan Bursa ilçesidir.</p>
          </div>
        </div>
        <div className="card">
          <img src={kestel} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Kestel</h1>
            <p>Kestel, Bursa iline bağlı bir ilçedir. Nilüfer, Osmangazi, Yıldırım, Gürsu ile beraber Bursa merkezi oluşturur.</p>
          </div>
        </div>
        <div className="card">
          <img src={yenisehir} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Yenişehir</h1>
            <p>Yenişehir, Bursa ilinin bir ilçesidir. Bursa'nın doğusunda ve Bursa şehir merkezine uzaklığı 52 km'dir.</p>
          </div>
        </div>
        <div className="card">
          <img src={iznik} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>İznik</h1>
            <p>İznik (Grekçe: Νίκαια Níkaia), Türkiye'nin Bursa ilinin bir ilçesi ve ilçenin merkezi olan şehir.</p>
          </div>
        </div>
        <div className="card">
          <img src={orhaneli} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Orhaneli</h1>
            <p>Orhaneli, Bursa iline bağlı bir ilçedir.</p>
          </div>
        </div>
        <div className="card">
          <img src={keles} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Keles</h1>
            <p>Keles, Bursa ilinin, şehir merkezine 61 km uzaklıktaki bir ilçesidir. </p>
          </div>
        </div>
        <div className="card">
          <img src={borhan} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Büyükorhan</h1>
            <p>Büyükorhan, Bursa'nın 17 ilçesinden biri.</p>
          </div>
        </div>
        <div className="card">
          <img src={harmancık} />
          <hr style={{ width: "90%", margin: "auto", marginTop: "10px" }} />
          <div className="card-content">
            <h1>Harmancık</h1>
            <p>Harmancık, Bursa'nın nüfus bakımından en küçük ilçesidir, Uludağ'ın güneyinde yer alır.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main