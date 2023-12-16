import Breadcumbs from "@/Components/Breadcumbs";
import Container from "@/Components/Container";

import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Show({ article }) {
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
                            {article.title}
                        </h4>
                    </div>
                    <div className="w-full flex justify-end">
                        <span className="text-dark/80">
                            {article.created_at}
                        </span>
                    </div>
                </div>

                <div className="w-full">
                    <img
                        src={
                            article.picture
                                ? `/storage/${article.picture}`
                                : "https://flowbite.com/docs/images/blog/image-1.jpg"
                        }
                        className="rounded aspect-video w-full"
                    />
                </div>
                <div className="w-full space-y-8 py-8">
                    <p className="text-dark font-light tracking-wide">
                        {article.description}
                    </p>
                </div>
                <div className="w-full flex items-center py-8 gap-3">
                    <img
                        src="/images/app/hero_home.webp"
                        className="w-16 h-16 rounded-full"
                        alt=""
                    />
                    <div className="flex flex-col text-dark gap-0">
                        <h6 className="text-lg font-medium">
                            {article.user.name}
                        </h6>
                        <p className="font-light text-sm">
                            {article.user.address}
                        </p>
                    </div>
                </div>
            </Container>
            {/* Detail Artikel End */}
        </>
    );
}
Show.layout = (page) => <Home children={page} />;
