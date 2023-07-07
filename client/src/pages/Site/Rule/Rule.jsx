import React, { useEffect, useState } from 'react'
import '../Rule/Rule.scss'
import Loading from '../../../component/Loading/Loading';
const Rule = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
     {loading ? (
        <Loading/>
      ) : (
    <div>
      <div className="section">
      <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/movie-bg2-small.jpg" alt="" />
      </div>

<div className="section__text">
  <h1>Kinoteatrlarda reklam - ən effektiv reklam növü kimi.
</h1>
<div className="section__text__image">
  <div className="img">  <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/teklif/teklif.jpg" alt="" />

</div>
<div className="text">
<p>Movie pro kinoteatrlar şəbəkəsi – müasir çox zallı kinoteatrların Azərbaycanda ən iri şəbəkəsidir. Hazırda kinoteatrlarımız Park Bulvar, Metro Park, Zagulba Mall, Flame Towers kimi tanınmış ticarət və əyləncə mərkəzlərində yerləşir. Bundan əlavə, Park Cinema Azərbaycanda açıq səmada hələki yeganə kinoteatr olan Amburan Beach Club idarə edir. 2018-ci ildə isə Masallı, Quba və Mingəçevir kimi regionlarımızda 3 kinoteatrlarımız fəaliyyətə başlamışdır. Bütün bu sadalanan kinoteatrlarda reklamınızın effektiv şəkildə yerləşdirilməsi üçün çoxlu imkanlar mövcuddur.</p></div>
</div>
</div>


<div className="section2__text">
  <div className="textt">
    <h3>Movie pro kinoteatrlarında reklam yerləşdirməyin bir neçə danılmaz üstünlükləri var:
</h3>
<ul>
  <li>Dəqiq hədəfləmə və yüksək səviyyədə əlaqə.
</li>
<li>Əyləncəvi mühitdə reklam emosional səviyyədə qavranılır, beləcə brendin yaddaşlarda qalma imknı artır.
</li>
<li>Lazımı kriteriylara görə kinoteatrın seçimi, üstəgəl video çarxların yerləşdirilməsi üçün düzgün film seçimi reklam olunan məhsulun auditoriyası ilə kinozal publikası arasında mükəmməl vəhdət təşkil edə bilər.
</li>
<li>Təsir gücü və görüntü televeiziya ilə müqayisə ediləcək qədər deyil. Böyük ekranlarda izlənilən parlaq və dinamik reklam çarxı televizya ilə müqayisədə on qat daha çox təsirə malikdir. Reklam çarxının izlənildikdən sonra yaddaşlarda qalma göstəricisi 50-60% və daha artıqdır.
</li>
<li>Kinoteatrlar gənc auditoriya arasında, xüsusilə auditoriyanın maddi cəhətdən daha təminatlı olan hissəsi, marketinq üçün ən yaxşı məkanlardan biridir.
</li>
<li>Komleks reklam imkanı: film öncəsi video çarx, foyedə monitor, posterlər, laytbokslar, flayerlər, biletin arxa üzü, 3D eynəklər, zalın brendləşdirilməsi və s.
</li>
</ul>
</div>
<div className="imagee">
    <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/teklif/teklif-mini.jpg" alt="" />
  </div>
  </div>

  
    </div>
      )}
    </>
  )
}

export default Rule
