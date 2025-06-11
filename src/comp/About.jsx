import React, { useEffect } from 'react';
import '../css/About.css'
import iskender from '../img/iskender.jpg'
import inegöKöfte from '../img/inegöl-köfte.jpg'
import kestane from '../img/kestane.jpg'
import ulucami from '../img/ulucami.jpg'
import uludag from '../img/uludag.jpg'
import golyazi from '../img/golyazi.jpg'
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';

function About() {
  
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    
    const fromLeftTimeline = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
    fromLeftTimeline.fromTo(
      ".about-box:not(.about-box2)",
      { x: "-3rem", opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    new ScrollMagic.Scene({
      triggerElement: ".about-container",
      triggerHook: 0.9,
      reverse: true,
    })
      .on("enter", () => {
        fromLeftTimeline.restart();
      })
      .on("leave", () => {
        fromLeftTimeline.reverse();
      })
      .addTo(controller);

    
    const fromRightTimeline = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
    fromRightTimeline.fromTo(
      ".about-box2",
      { x: "3rem", opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    new ScrollMagic.Scene({
      triggerElement: ".about-container",
      triggerHook: 0.9,
      reverse: true,
    })
      .on("enter", () => {
        fromRightTimeline.restart();
      })
      .on("leave", () => {
        fromRightTimeline.reverse();
      })
      .addTo(controller);

    return () => {
      controller.destroy();
    }
  }, []);
    return (
        <div className='about-wrap'>
            <div className="about-container" id='hakkında'>
                <h1>BURSA HAKKINDA</h1>
                <div className='about-box'>
                    <h3>İSKENDER KEBAB</h3>
                    <div className="about-box-text">
                        <img src={iskender}/>
                        <p>Bursa denince akla ilk gelen yemek şüphesiz İskender Kebap'tır. 19. yüzyılın sonlarında Bursa'da İskender Efendi tarafından geliştirilen bu lezzet, döner etinin özel salçalı sosuyla harmanlanmasıyla ortaya çıkar. Altına pide dilimleri serilir, üzerine incecik kesilmiş döner eti konur. Kızgın tereyağı gezdirildikten sonra yoğurt ve domatesle servis edilir. İskender Kebap, Bursa'nın dünyaya açılan mutfak kapısı niteliğindedir.</p>
                    </div>
                    <hr className='about-hr'/>
                </div>
                <div className='about-box about-box2'>
                    <h3>İNEGÖL KÖFTE</h3>
                    <div className="about-box-text">
                        <p>Bursa'nın İnegöl ilçesine özgü olan İnegöl Köfte, diğer köftelerden farklı bir tada ve dokuya sahiptir. 19. yüzyılın sonlarında İnegöllü Balkan göçmenleri tarafından Bursa'ya getirilmiştir. İçerisinde sadece dana ve kuzu kıyması, tuz ve karbonat bulunur; ekmek içi, soğan veya baharat kullanılmaz. Bu sayede etin kendine has lezzeti ön plana çıkar. Genellikle ızgarada pişirilip piyaz veya acı sos ile servis edilen İnegöl Köfte, kendine has formu ve lezzetiyle Bursa mutfağının vazgeçilmezlerindendir.</p>
                        <img src={inegöKöfte}/>
                    </div>
                    <hr className='about-hr'/>
                </div>
                <div className='about-box'>
                    <h3>KESTANE ŞEKERİ</h3>
                    <div className="about-box-text">
                        <img src={kestane}/>
                        <p>Bursa'nın sembollerinden biri olan Kestane Şekeri, şehrin dağlık bölgelerinde yetişen iri kestanelerden yapılır. Kestaneler öncelikle haşlanır, kabukları soyulur ve daha sonra özel bir şerbet içinde uzun süre kaynatılarak şekerle özdeşleşmesi sağlanır. Farklı aromalarda (vanilyalı, kakaolu vb.) ve farklı ambalajlarda bulunabilen kestane şekeri, hem yöresel bir lezzet hem de Bursa'dan alınabilecek popüler bir hediyeliktir.</p>
                    </div>
                    <hr className='about-hr'/>
                </div>
                <div className='about-box about-box2'>
                    <h3>ULU CAMİİ</h3>
                    <div className="about-box-text">
                        <p>Bursa'nın kalbinde yer alan Ulu Cami, Osmanlı mimarisinin en ihtişamlı örneklerinden biridir. Yıldırım Bayezid tarafından yaptırılan ve 1399 yılında tamamlanan cami, 20 kubbesi ve iki minaresiyle dikkat çeker. İç mekanında bulunan hat sanatı örnekleri ve büyük avlusu, ziyaretçilerini büyüler. Şehrin tarihi ve kültürel dokusunu en iyi yansıtan yerlerden biri olan Ulu Cami, aynı zamanda manevi bir atmosfer sunar ve Bursa gezinizin olmazsa olmaz duraklarından biridir.</p>
                        <img src={ulucami}/>
                    </div>
                    <hr className='about-hr'/>
                </div>
                <div className='about-box'>
                    <h3>ULUDAĞ</h3>
                    <div className="about-box-text">
                        <img src={uludag}/>
                        <p>Bursa'nın doğal güzelliklerinin zirvesi olan Uludağ, yıl boyunca ziyaretçi çeken önemli bir merkezdir. Şehrin merkezinden kalkan Bursa Teleferik ile Uludağ'a keyifli bir yolculuk yapabilirsiniz. Dünyanın en uzun teleferik hatlarından biri olan bu teleferikle yukarı çıkarken Bursa'nın muhteşem panoramik manzarasını seyretmek unutulmaz bir deneyim sunar. Uludağ'da kış aylarında kayak ve snowboard yapabilir, diğer mevsimlerde ise doğa yürüyüşleri, piknik ve kamp gibi aktivitelerle vakit geçirebilirsiniz. Temiz havası ve eşsiz manzarasıyla Uludağ, Bursa gezinize doğal bir güzellik katacaktır.</p>
                    </div>
                    <hr className='about-hr'/>
                </div>
                <div className='about-box about-box2'>
                    <h3>GÖLYAZI</h3>
                    <div className="about-box-text">
                        <p>Bursa'nın Nilüfer ilçesine bağlı, Uluabat Gölü kıyısında yer alan Gölyazı, küçük ve şirin bir balıkçı köyüdür. Tarihi Rum evleri, Arnavut kaldırımlı dar sokakları ve göl üzerinde yükselen Ağlayan Çınar ağacı ile adeta bir açık hava müzesi gibidir. Gölyazı'da tekne turu yaparak adaları gezebilir, köyün huzurlu atmosferinde yöresel lezzetlerin tadına bakabilirsiniz. Özellikle gün batımında sunduğu eşsiz manzaralarla fotoğraf tutkunları için de popüler bir destinasyondur. Sakinliği ve doğal güzellikleriyle Gölyazı, Bursa gezinize farklı bir deneyim katacaktır.</p>
                        <img src={golyazi}/>
                    </div>
                    <hr className='about-hr'/>
                </div>
            </div>
        </div>
    )
}

export default About