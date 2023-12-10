import Breadcumbs from "@/Components/Breadcumbs";
import Container from "@/Components/Container";

import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Rincian Artikel" />

            <Container>
                {/* Breadcumbs Start*/}
                <Breadcumbs
                    url_1={route("home.index")}
                    url_2={route("article.index")}
                    url_3={route("article.show", 1)}
                    text_1="Beranda"
                    text_2="Artikel"
                    text_3="Pisang"
                />
                {/* Breadcumbs End*/}
            </Container>

            {/* Detail Artikel Start */}
            <Container>
                <div className="w-full flex-wrap flex justify-between items-center mb-5 ">
                    <div className="w-full">
                        <h4 className="font-semibold text-secondary text-3xl">
                            Pisang Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam aliquam aspernatur nihil quas repellendus perferendis obcaecati molestiae pariatur, ratione repellat placeat quod consequatur modi architecto deserunt. Reiciendis mollitia non fuga?
                        </h4>
                    </div>
                    <div className="w-full flex justify-end">
                        <span className="text-dark/80">
                            Senin, 20 Februari 2024
                        </span>
                    </div>
                </div>

                <div className="">
                    <img
                        src="/images/app/hero_home.webp"
                        className="rounded aspect-video"
                        alt=""
                    />
                </div>
                <div className="w-full space-y-8 py-8">
                    <p className="text-dark font-light tracking-wide">
                        Pisang adalah nama umum yang diberikan pada tumbuhan
                        terna berukuran besar dengan daun memanjang dan besar
                        yang tumbuh langsung dari bagian tangkai. Batang pisang
                        bersifat lunak karena terbentuk dari lapisan pelepah
                        yang lunak dan panjang. Batang yang agak keras berada di
                        bagian permukaan tanah. Pisang memiliki daun bertangkai
                        yang berpencar dengan bagian batang yang meruncing.
                        Ukuran daun pada tiap spesies pisang juga berbeda-beda.
                        Tangkai pisang menghasilkan bunga dalam jumlah yang
                        banyak. Bagian bunga pada pisang akan membentuk buah
                        yang disebut sisir. Buah pisang berkelompok dalam satu
                        bunga majemuk dengan ukuran yang makin ke bawah makin
                        mengecil.
                    </p>
                    <p className="text-dark font-light tracking-wide">
                        Dalam taksonomi, pisang termasuk dalam genus Musa dan
                        famili Musaceae.[1] Beragam spesies pisang tersebar di
                        kawasan Malesia. Spesies pisang yang paling banyak
                        dibudidayakan di dunia adalah pisang hutan. Jenis pisang
                        hutan dapat tumbuh di hutan, bukit maupun di dataran
                        rendah.[2] Selain itu, pisang juga dapat ditanam bersama
                        dengan tanaman lain seperti jagung dan ketela pohon.[3]
                        Pisang dapat dipanen kapan saja, karena pertumbuhannya
                        yang sesuai dengan segala jenis musim. Kematian pohon
                        pisang hanya terjadi ketika berbuah hanya sekali semasa
                        hidupnya.[2] Buah pisang dapat langsung dimakan atau
                        dimasak terlebih dahulu. Nutrisi di dalam pisang
                        bermanfaat bagi kesehatan tubuh manusia dan dapat pula
                        dibuat sebagai obat tradisional.
                    </p>
                </div>
                <div className="w-full flex items-center py-8 gap-3">
                    <img
                        src="/images/app/hero_home.webp"
                        className="w-16 h-16 rounded-full"
                        alt=""
                    />
                    <div className="flex flex-col text-dark gap-0">
                        <h6 className="text-lg font-medium">Lukman H</h6>
                        <p className="font-light text-sm">Yogyakarta</p>
                    </div>
                </div>
            </Container>
            {/* Detail Artikel End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
