import Link from "next/link";

export const metadata = {
  title: 'About Company',
}

export default function CompanyAbout() {
  return (
    <>
      <div className="company__page">
        <div className="swiper__inner">
          <img
            className="company__img"
            src="/images/company__img.jpg"
            alt="Company Image"
          />
          <div className="swiper__bg"></div>
          <div className="swiper__img-info">
            <h2>KOMPANIYA HAQIDA</h2>
            <Link href={"/contact"}>
              <button className="button type1"></button>
            </Link>
          </div>
        </div>
      </div>
      <div className="company__info">
        <div className="company__history">
          <h2>KOMPANIYA TARIXI</h2>
          <p>
            2019 20- yil 17- martda Andijon shahrida tashkil etilgan. mahsulotga
            talab”. Korxonaning milliy maqsadi ham avtomobilsozlik, ham
            iqtisodiyotning boshqaruv sohalari uchun xalqaro sifat standartlariga
            javob beradi import bosuvchi milliy brend ostida ishlab chiqarish va
            ishlab chiqarishdan iborat.
          </p>
        </div>
      </div>
      <div className="management">
          <h2>BOSHQARUV</h2>
          <div className="management__cards">
            <div className="management__card">
              <img width={150} height={150} src="/images/mdo.webp" alt="" />
              <h4>Axmedov Iskandar Nabievich</h4>
              <p>Bosh direktor orinbosari</p>
            </div>
            <div className="management__card">
              <img width={150} height={150} src="/images/mtd.webp" alt="" />
              <h4>Obidov Hasanjon Gayrat ogli</h4>
              <p>Tijorat direktori</p>
            </div>
            <div className="management__card">
              <img width={150} height={150} src="/images/mbk.webp" alt="" />
              <h4>Obidov Xusanjon Gayrat ogli</h4>
              <p>Bosh kataloglari</p>
            </div>
          </div>
      </div>
    </>
  );
}
