import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import PrimaryButton from "@/Components/NavButton/PrimaryNavButton";
import Pagination from "@/Components/Pagination";
import Home from "@/Layouts/Home";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({  ...props }) {
    const { data: articles, meta, links } = props.articles;
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        router.get(
            `/article`,
            {
                search: e.target.value,
            },
            {
                preserveState: true,
            }
        );
    };
    return (
        <>
            <Head title="Artikel" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="ARTIKEL"
                        subtitle="Mari bersama-sama mencegah Growth Faltering di Indonesia"
                        text="Indonesia Sehat, Indonesia Hebat Indonesia Kuat"
                        placeholder="Masukkan Judul Artikel"
                        type="search"
                        defaultValue={searchQuery}
                        onChange={handleSearch}
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}

            {/* Artikel Start */}
            <Container>
                <h4 className="font-semibold mb-5 text-secondary text-3xl">
                    Semua Artikel
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {articles.length > 0 ? (
                        <>
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    className="border justify-between flex flex-col hover:scale-[101%] transition-all duration-3s p-[12px] rounded border-fifth"
                                >
                                    <div className="">
                                        <img
                                            src={
                                                article.picture
                                                    ? article.picture
                                                    : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                            }
                                            className="rounded aspect-video"
                                            alt=""
                                        />
                                    </div>
                                    <div className="py-2">
                                        <h5 className="text-2xl py-2 font-semibold text-dark">
                                            {article.title}
                                        </h5>
                                        <p className="text-dark font-light tracking-wide line-clamp-3">
                                            {article.description}
                                        </p>
                                    </div>
                                    <div className="pt-3 pb-1 flex justify-between align-center">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={
                                                    article.user.picture
                                                        ? article.user.picture
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                classNa
                                                className="w-11 h-11 rounded-full"
                                                alt=""
                                            />
                                            <div className="flex flex-col text-dark gap-0">
                                                <h6 className="text-sm font-medium">
                                                    {article.user.name}
                                                </h6>
                                                <p className="font-light text-xs">
                                                    {article.user.address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <Link
                                                href={route(
                                                    "article.show",
                                                    article.slug
                                                )}
                                                type="button"
                                                className="inline-flex items-center justify-center text-center px-4 py-2.5 bg-secondary rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-secondary focus:bg-secondary active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                            >
                                                Rincian
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                {articles.length > 0 && (
                    <div className="flex w-full justify-center mt-6 items-center">
                        <Pagination meta={meta} links={links} />
                    </div>
                )}
            </Container>
            {/* Artikel End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
