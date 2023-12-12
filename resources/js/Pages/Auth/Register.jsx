import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Guest from '@/Layouts/Guest';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <div className="flex">
                <div className="w-full sm:w-1/2 md:w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between">
                    <div>
                        <img
                            src={`/app/Logo Title X.png`}
                            alt=""
                            width="180px"
                        />
                    </div>
                    <div>
                        <img
                            src={`/app/login.svg`}
                            alt=""
                            width="120%"
                            className="mx-auto"
                        />
                    </div>
                    <div>
                        <h6 className="text-xl font-semibold text-slate-700">
                            RANDA
                        </h6>
                        <p className="text-slate-500">
                            Optimizing Business Processes with Point of Sales
                            (POS) Application
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={submit}
                    className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-screen flex flex-col justify-center"
                >
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="username" value="Username" />

                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("username", e.target.value)}
                            required
                        />

                        <InputError message={errors.username} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="address" value="Alamat" />

                        <TextInput
                            id="address"
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="address"
                            onChange={(e) => setData("address", e.target.value)}
                            required
                        />

                        <InputError message={errors.username} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}

Register.layout = (page) => <Guest children={page} />;
