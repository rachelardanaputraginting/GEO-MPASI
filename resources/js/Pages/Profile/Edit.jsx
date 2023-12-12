import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import { useState } from "react";
import {
    IconCategory,
    IconLocation,
    IconMail,
    IconPhone,
    IconSquare,
    IconSquareFilled,
} from "@tabler/icons-react";
import { numberFormat } from "@/Libs/Helper";
import ActionLink from "@/Components/ActionLink";
import SecondaryButton from "@/Components/NavButton/SecondaryButton";
import Breadcumbs from "@/Components/Breadcumbs";
import Home from "@/Layouts/Home";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    picture,
    dailySalary,
    total_salary,
}) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // const yearData = fillYearData(dailySalary);

    const [activeTab, setActiveTab] = useState("Information"); // Default active tab
    const tabs = ["Edit", "Account", "Delete", "Information"];
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const onHandleTab = () => {
        setActiveTab("Information");
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Head title="Profile" />
            <Container>
                {/* Breadcumbs Start*/}
                <Breadcumbs
                    url_1={route("home.index")}
                    url_2={route("article.index")}
                    url_3={route("profile.edit")}
                    text_1="Beranda"
                    text_2="Profil"
                    text_3="Informasi Profil"
                />
                {/* Breadcumbs End*/}
            </Container>
            <Container className="pb-0 w-full flex">
                <div className="md:flex w-full mx-auto gap-4">
                    <div className="w-full sm:w-1/3 flex flex-wrap flex-col gap-4 justify-start mb-6">
                        <img
                            // src={
                            //     auth.user.picture
                            //         ? picture
                            //         : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                            // }
                            // alt={auth.user.picture}
                            className="w-[100%] bg-white aspect-square rounded-xl mx-auto"
                        />
                        <div className="px-4">
                            <h3 className="text-2xl font-semibold mt-8 text-slate-700">
                                {auth.user.name}
                            </h3>
                            <p className="text-lg mt-0 text-dark">
                                {/* {auth.user.username} */}
                            </p>
                        </div>
                        <div className="flex px-4 gap-2">
                            <div className="grid grid-cols-3 w-full gap-2">
                                <SecondaryButton
                                    className={`w-full text-secondary ${
                                        activeTab === "Edit"
                                            ? "bg-secondary border-none text-white"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Edit")}
                                >
                                    Edit
                                </SecondaryButton>
                                <SecondaryButton
                                    className={`w-full text-secondary ${
                                        activeTab === "Account"
                                            ? "bg-secondary border-none text-white"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Account")}
                                >
                                    Account
                                </SecondaryButton>
                                {auth.user.status === "employee" ? (
                                    ""
                                ) : (
                                    <SecondaryButton
                                        className={`w-full text-secondary ${
                                            activeTab === "Delete"
                                                ? "bg-secondary border-none text-white"
                                                : ""
                                        }`}
                                        onClick={() => handleTabClick("Delete")}
                                    >
                                        Delete
                                    </SecondaryButton>
                                )}
                            </div>
                        </div>
                        <div className="gap-2 px-4 space-y-2 mt-4">
                            <div className="flex gap-2 items-center">
                                <IconLocation color="gray" size={20} />
                                <p className="text-base mt-0 text-dark">
                                    {/* {auth.user.address} */}
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconMail color="gray" size={20} />
                                <p className="text-base mt-0 text-dark">
                                    {auth.user.email}
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconPhone color="gray" size={20} />
                                <p className="text-base mt-0 text-dark">
                                    {/* {auth.user.number_phone} */}
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IconCategory color="gray" size={20} />
                                <p className="text-base mt-0 text-dark">
                                    {auth.user.status}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 mx-auto items-center">
                        {activeTab === "Edit" && (
                            <div className="p-4 w-full rounded border border-1 border-fifth">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="w-full"
                                    onHandleTab={onHandleTab}
                                    picture={picture}
                                />
                            </div>
                        )}
                        {activeTab === "Account" && (
                            <div className="p-4 w-full rounded border border-1 border-fifth">
                                <UpdatePasswordForm
                                    className="w-full"
                                    onHandleTab={onHandleTab}
                                />
                            </div>
                        )}
                        {/* {auth.user.status == "employee"
                            ? ""
                            : activeTab === "Delete" && (
                                  <div className="p-4 w-full rounded border border-1 border-fifth">
                                      <DeleteUserForm className="w-full" />
                                  </div>
                              )} */}

                        {activeTab === "Information" && (
                            <>
                                <div className="p-4 w-full space-y-8 rounded border border-1 border-fifth">
                                    <div>
                                        <h2 className="text-lg font-semibold text-dark">
                                            Informasi
                                        </h2>
                                        <p className="mt-1  text-dark">
                                            Selamat datang di{" "}
                                            <span className="font-semibold">GEO-MPASI</span>, solusi
                                            inovatif untuk mencegah growth
                                            faltering di Indonesia. Kami adalah
                                            sebuah aplikasi yang didedikasikan
                                            untuk memberikan kontribusi positif
                                            dalam meningkatkan kesehatan dan
                                            pertumbuhan anak-anak di seluruh
                                            negeri. Tujuan kami yang sangat
                                            mulia adalah mencegah growth
                                            faltering, kondisi di mana
                                            pertumbuhan anak terhambat, melalui
                                            pendekatan yang terarah dan berbasis
                                            data.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium text-dark">
                                            Informasi Profil
                                        </h2>
                                        <p className="mt-1 text-dark    ">
                                            Anda sudah bergabung dengan{" "}
                                            <span className="font-semibold">
                                                GEO-MPASI
                                            </span>{" "}
                                            sejak tanggal{" "}
                                            <span className="font-semibold">
                                                {formatDate(
                                                    auth.user.created_at
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

Edit.layout = (page) => <Home children={page} />;
