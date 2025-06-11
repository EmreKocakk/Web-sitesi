import React, { useEffect } from "react";
import ScrollMagic from "scrollmagic"; 
import { gsap } from "gsap"; 
import "../css/History.css"; 
import antik from "../img/antik.jpg"; 
import bizans from "../img/bizans.jpg";
import osmanli from "../img/osmanli.jpg";
import cumhur from "../img/cumhur.jpg";

function History() {
  
    useEffect(() => {
    const controller = new ScrollMagic.Controller();

    
    document.querySelectorAll(".antik-cag").forEach((elem) => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
      tl.fromTo(elem, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.8,
        reverse: true,
      })
        .on("enter", () => tl.restart())
        .on("leave", () => tl.reverse())
        .addTo(controller);
    });

    
    document.querySelectorAll(".antik-cag2").forEach((elem) => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
      tl.fromTo(elem, { x: "2rem", opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.8,
        reverse: true,
      })
        .on("enter", () => tl.restart())
        .on("leave", () => tl.reverse())
        .addTo(controller);
    });

    return () => controller.destroy();
  }, []);

  return (
    <div className='antik-wrap' id='tarihi'>
            <h1 className='history-h1'>BURSANIN TARİHİ</h1>
            <div className="container">
                <div className='antik-cag'>
                    <h3>ANTİK ÇAG</h3>
                    <div className="history-content ">
                        <img src={antik} />
                        <p>Neredeyse tüm kaynaklar, Yaşlı Plinius'un aktardıklarına atıfla Bursa’nın kurucusu olarak Bithynia Kralı I. Prousias’ı gösterir. Roma Cumhuriyeti ile giriştiği II. Pön Savaşı'ndan yenik çıkan Kartacalı general Hannibal Bithynia kralına sığınmış ve onun da katkısıyla Prusa kenti kurulmuştur.[1] Ancak Hisar içinde 2025 yılında açılması planlanan Arkeopark’ta yapılan kazı çalışmaları sırasında, bu alanda MÖ 1. binyılda yerleşim olduğu ortaya çıkarılmıştır.[2] [not 1] Bu yeni bilgiler ışığında, yerleşimin çok daha önceden kurulduğu; I. Prousias döneminde, yaklaşık MÖ 185’te büyütülerek kent (polis) haline getirildiği ve “Prousa” (Grekçe: Προῦσα; Latince: Prusa) olarak adlandırıldığı söylenebilir. Yaşlı Plinius tarihçi olarak güvenilir bir kaynak sayılmadığı ve Hannibal’in Prusa’ya geldiğini başka hiçbir kaynak doğrulamadığı için bu bilgiye şüpheyle yaklaşılmalıdır. Prusa’nın bulunduğu bölge, MÖ 3. yüzyılın sonlarında Bitinya Krallığı’nın egemenliğine girdi.[4] Bitinya bölgesi adını bu krallıktan almıştır. Son Bitinya Kralı IV. Nikomedes'in MÖ 74 yılında ardıl bırakmadan ölmesiyle Prusa, Roma Cumhuriyeti'nin egemenliğine girmiştir.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='antik-cag antik-cag2'>
                    <h3>ROMA - BİZANS DÖNEMİ</h3>
                    <div className="history-content">

                        <p>MS 562'de Bizans hakimiyeti altındaki şehir, garnizon haline getirildi ve burada imparatorluk muhafızları konuşlandırıldı. Bursa, 6. yüzyılın ortalarından itibaren, ipek tekstil üretiminin ünlü bir merkezi olarak biliniyordu.[5].

                            Bursa, 1204-1261 yılları arasında İznik'e bağlıydı ve genelde kale içinde kalmış olup çok büyüyememiştir.</p>
                        <img src={bizans} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='antik-cag'>
                    <h3>OSMANLI DÖNEMI</h3>
                    <div className="history-content">
                        <img src={osmanli} />
                        <p>Bursa, 1317 yılında Osman Bey tarafından kuşatılmış, uzun süren kuşatmadan sonra 6 Nisan 1326'da Osman Bey'in oğlu Orhan Bey tarafından alınmıştır. Beyliğin başkenti 1335 yılında başkent Bursa'ya taşınmış olup kentte büyük bayındırlık hareketleri yaşanmıştır.

                            Osmanlılar Bursa'yı aldıklarında kent yalnızca hisar içinden oluşmuşken, Orhan Gazi kenti hisarın dışına çıkararak Orhan Gazi Külliyesini kurdurtmuştur. Surlar dışında var olan yerleşmeye yakın, egemen noktalarda cami, hamam, imarethane, darüşşifa ve medrese gibi kamu yapıları inşa edilerek bu külliyelerin çevrelerinde konut alanları yaratılmış ve böylece bir yerleşme geleneği başlamıştır. şehrin ilk resmi Osmanlı darphanesi de bu dönemde kuruldu.[5]

                            Osmanlı'nın 1363 yılında Doğu Trakya'da bulunan Edirne'yi (Adrianople) fethetmesiyle birlikte Edirne yeni başkent yapıldı, ancak Bursa Osmanlı İmparatorluğu'ndaki manevi ve ticari önemini korumayı sürdürdü.[6] Fatih Sultan Mehmed'in İstanbul'u fethetmesinden sonra ise Bursa'nın faal rolü son bulmuş ve yönetim merkezi niteliğini yitirmiştir.

                        </p>
                    </div>
                    <p className='extra'>Osmanlı padişahı I. Bayezid, döneminde 1390-1395 yılları arasında Yıldırım'da bulunan Yıldırım Camii'ni ve 1396-1400 yıllarında Osmangazi'deki Ulu Cami inşa edildi.[7][8] Bayezid'in 1402'de yapılan Ankara Muharebesi'nde Timur'un kuvvetlerine karşı bozguna uğramasının ardından, Timur'un torunu Muhammed Sultan Mirza, şehri yağmalayıp yaktı.[9] Buna rağmen Bursa, 1453'te II. Mehmed'in İstanbul'u fethetmesine kadar olan süre boyunca imparatorluğun en önemli idari ve ticaret merkezi olarak kalmaya devam etti. 1487'de Bursa'nın nüfusu 45.000 idi.[10]

                        Osmanlı döneminde Bursa, soyluların kullandığı ipekli eşyaların başlıca üretim merkezlerinden biriydi. Şehir, yerel ipek üretiminin yanı sıra zaman zaman İran'dan ve hatta Çin'den ham ipek ithal etti ve 17. yüzyıla kadar Osmanlı sarayları için kaftanlar, yastıklar, nakışlar ve diğer ipek ürünlerinin ana üretim merkezi oldu.[11] Bunun yanında Devşirme sistemi Bursa ve çevresinde de uygulamaya koyulmuştu.[12] Bursa, Kanuni Sultan Süleyman (I. Süleyman) döneminde inşa edilen Yeni Kaplıca başta olmak üzere birçok hamamıyla da tanınıyordu.[5]

                        Bursa, 1867'den 1922 yılına kadar Hüdavendigâr Vilayetinin başkenti oldu. Tanzimat sonrası dönemde Hüdavendigâr Vilayeti merkezliği yapan Bursa'ya 1900'lü yılların başında Biga (merkezi Çanakkale), Bilecik, Kütahya, Karesi (Balıkesir), Karahisar (Afyon) sancakları bağlı bulunmaktaydı. Kültürel ve ticari açıdan önemli bir merkez olması sebebiyle buradaki, pek çoğu Ermeni olan tüccarlar büyük bir zenginlik elde etti.[13] Bursa'nın ipek ticareti ve ekonomik tarihine ilişkin en kapsamlı ve etkili çalışma, Osmanlı-Türk tarihçisi Halil İnancık tarafından kaleme alındı.[14]

                        Millî mücadele dönemlerinde çeşitli ayaklanmaların yaşandığı Bursa, 8 Temmuz 1920'de Yunanlarca işgal edilmiş; Başkomutanlık Meydan Muharebesi'nden sonra 11 Eylül 1922'de Türk birliklerince geri alınmıştır.[15]</p>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <div className='antik-cag antik-cag2'>
                    <h3>CUMHURİYET DÖNEMİ</h3>
                    <div className="history-content">

                        <p>Bursa, 1987 yılında çıkarılan 3391 sayılı kanun[16] ile büyükşehir unvanı kazandı. Başlangıçta üç ilçe (Nilüfer, Osmangazi ve Yıldırım) Bursa Büyükşehir Belediyesi'nin sınırları içine alındı. 2004 yılında çıkarılan 5216 sayılı yasa ile büyükşehir belediyesinin sınırları valilik binası merkez kabul edilerek yarıçapı 30 kilometre olan dairenin sınırlarına genişletildi.[17] Bu sınırlar içinde kalan 7 ilçe, büyükşehir ilçe belediyeleri hâline geldi.[17] 2012 yılında çıkarılan 6360 sayılı yasa ile 2014 Türkiye yerel seçimlerinin ardından büyükşehir belediyesinin sınırları il mülki sınırları oldu.[18]

                            21 Ekim 2014 tarihinde, Bursa Valiliği ve Bursa Kültür Tanıtma Birliği tarafından Bursa kent logosu tanıtılmıştır. Logo Bursa şehrinin markalaştırılması amacıyla tasarlanmıştır. Logoda Türk İslam sanatının bilinen motiflerinden olan çintemani desende lale motifi yer almaktadır.[19]</p>
                        <img src={cumhur} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
            </div>

        </div>
  );
}

export default History;
