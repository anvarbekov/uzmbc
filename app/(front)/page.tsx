/* eslint-disable @next/next/no-img-element */
// import data from '@/lib/data'
import CarouselSwiper from "@/components/carousel/CarouselSwiper";
import productService from "@/lib/services/productService";
import { Metadata } from "next";
import Link from "next/link";
import { MdLocalActivity } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiEquinixmetal } from "react-icons/si";
import { SiRuby } from "react-icons/si";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "UZMBC",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Nextjs, Server components, Next auth, daisyui, zustand",
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();
  return (
    <>
      <div className="swiper__container">
        <CarouselSwiper />
      </div>
      <div className="information__main">
        <section className="company">
          <h3>BIZNING ISHLAB CHIQARISH</h3>
          <p>Biz har doim istemolchilar ishonchini oqlash uchun qolimizdan kelganini qilamiz</p>
          <Link className="write__btn text__black" href={"/allProducts"}>
              BARCHA MAHSULOTLAR
          </Link>
        </section>
        <section className="two__section">
            <div className="section__left">
              <h2 className="section__title">YANGI SIFAT <br /> DARAJASI</h2>
              <p className="section__subtitle">
                Biz eng qisqa vaqt ichida sifatli kafolatlaymiz
              </p>
            </div>
            <div className="section__right">
                <img className="person__img" src="/images/person.webp" alt="Person Image" />
            </div>
        </section>
        <section className="company">
          <h3>NIMA UCHUN BIZNI TANLAYSIZ</h3>
          <p>UzAuto Motors, Inish West, OMYA, Evonik Industries AG bizga ishonadi</p>
          <Link className="write__btn text__black" href={"/company"}>
              KOMPANIYA HAQIDA
          </Link>
          <div className="icons__card">
              <div className="icon__card">
                <div className="icon__box">
                  <MdLocalActivity className="icon__card-icon" />
                </div>
                <h4>Mahalliy ishlab chiqarish</h4>
              </div>
              <div className="icon__card">
                <div className="icon__box">
                  <FaEarthAmericas className="icon__card-icon" />
                </div>
                <h4>Mahalliy ishlab chiqarish</h4>
              </div>
              <div className="icon__card">
                <div className="icon__box">
                  <SiEquinixmetal className="icon__card-icon" />
                </div>
                <h4>Mahalliy ishlab chiqarish</h4>
              </div>
              <div className="icon__card">
                <div className="icon__box">
                  <SiRuby className="icon__card-icon" />
                </div>
                <h4>Mahalliy ishlab chiqarish</h4>
              </div>
          </div>
        </section>
        <section className="truck__section">
            <div className="truck__section-left">
                <img className="truck__img" src="/images/truck.webp" alt="" />
            </div>
            <div className="truck__section-right">
                <h3 className="truck__title">ENG QISQA VAQT BERISH MUDDATLARI</h3>
            </div>
        </section>
        <div className="mb-10 text-center">
            <Link className="write__btn text__black" href={"/allProducts"}>
              BARCHA MAHSULOTLAR
            </Link>
        </div>
      </div>
    </>
  );
}
