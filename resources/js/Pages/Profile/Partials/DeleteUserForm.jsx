import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({ className }) {
    let [isOpen, setIsOpen] = useState(false);

    const [modalUser, setModalUser] = useState("");

    const [modalType, setModalType] = useState("");

    function onCancelModal() {
        setIsOpen(false);
    }

    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    function openModalCategory(type) {
        setIsOpen(true);
        setModalUser("Akun");
        setModalType(type);
    }

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-dark">Hapus Akun</h2>

                <p className="mt-1 text-sm text-dark">
                    Setelah akun Anda dihapus, semua sumber daya dan datanya
                    akan dihapus secara permanen. Sebelum menghapus akun Anda,
                    harap unduh data atau informasi apa pun yang ingin Anda
                    simpan.
                </p>
            </header>

            <DangerButton onClick={() => openModalCategory("delete")}>
                Hapus Akun
            </DangerButton>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size={`1/3`}
                type={modalType}
                title={modalUser}
            >
                <form onSubmit={deleteUser}>
                    <h2 className="text-lg font-medium text-dark">
                        Apakah Anda yakin ingin menghapus akun Anda?
                    </h2>

                    <p className="mt-1 text-sm text-dark">
                        Setelah akun Anda dihapus, semua sumber daya dan datanya
                        akan dihapus secara permanen. Silakan masukkan kata
                        sandi Anda untuk mengonfirmasi bahwa Anda ingin
                        menghapus akun Anda secara permanen.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-full"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={() => onCancelModal()}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ml-3" disabled={processing}>
                            Hapus Akun
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
