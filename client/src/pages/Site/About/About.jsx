import React, { useEffect, useState } from 'react'
import '../About/About.scss'
import Loading from '../../../component/Loading/Loading';
const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
   
    <div> 
      {
      loading ? (
      <Loading />
    ) : (
      <div>
      <div className="section">
        <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/movie-bg2-small.jpg" alt="" />
      </div>

      <div className="section1">
        <h1>About us</h1>
        <h3>Park Cinema - 4 meydançadan ibarət ən böyük nüfuzlu kinoteatrlar şəbəkəsidir. Ən yüksək texniki tələblərə cavab verən kinoteatrlar Park Bulvar, MetroPark, Park Zagulba AVM, Bakının yeni simvolu Flame Towers-in yüksək səviyyəli ticarət mərkəzi.</h3>
      <p>
Əfsanəvi komfort və zalların keyfiyyətindən savayı, Park Cinema Azərbaycanda əzəmətli IMAX formatının yeganə nümayəndəsidir. Şəbəkə repertuarına festival filmləri və arthausdan başqa, ən məşhur premyeralar daxildir. Hər il Park Cinema şəbəkəsində kinofestivallar keçirilir, müntəzəm olaraq qala-premyeralar və press-nümayişlər, sadiq tamaşaçılar üçün geniş aksiyalar və filmlərin xeyriyyə nümayişi təşkil olunur. Şəbəkə Facebook və İnstagram sosial şəbəkələrində öz fəallığı,  kontentə və istifadəçilərlə ünsiyyətə yaradıcı yanaşma ilə  məşhurlaşıb və Azərbaycanın ən müzakirə olunan və populyar kinoman qrupu statusunu alıb (Socialbakers*-in məlumatına əsasən). Onu da qeyd edək ki, brend Bakının kübar həyatının çoxsaylı mühüm hadisələrinin tərəfdaşıdır, bu da Park Cinema-nın yüksək statusunun rəmzidir.  </p>
 <p> 
*Socialbakers- sosial şəbəkələrdə ən məşhur hesabat və statistika xidmətidir. Park Cinema səhifəsi istifadəçilərin sorğularının 98%-ni cavablandırdığına görə sertifikat alıb.</p>
 <p>FLAME CINEMA MMC

</p>
<p>AZ1060, Bakı ş-ri, Nizami r-nu AZƏR MANAFOV ev.14, m.54

</p>
<p>AZ1006, Bakı ş-ri, Səbail r-nu, M.Hüseyn küçəsi, 1A

</p>
      </div>


      <div className="section__button">
        <div><button>Park Bulvar</button></div>
     <div><button>Metro Park</button></div>
     <div><button> Alov qüllələri </button></div>
     
     <div><button>Zaqulba</button> </div>
     <div><button>Sahdag</button></div>
     <div><button>Aygun Mall</button></div>
</div>
</div>
    )
    }
    </div>
  )
}

export default About
