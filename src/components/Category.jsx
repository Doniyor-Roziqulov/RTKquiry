import {
    useCreateUsersMutation,
    useGetUsersQuery,
    useDeleteUsersMutation,
    useUpdateUsersMutation,
} from "../redux/api/category-api";
import "./Create.css";
import deleteimg from "../images/trash3.svg";
import editimg from "../images/trash4.svg";
import menimg from "../images/men.png";
import womenimg from "../images/women.png";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Category = () => {
    const [updateUsersItem, setUpdateUsersItem] = useState(null);
    const { isLoading, data, isSuccess, isError, error } = useGetUsersQuery();
    const [createCategory, { data: createData, isLoading: CreateLoading }] =
        useCreateUsersMutation();
    const [deleteCategory, { data: deleteData, isLoading: deleteLoading }] =
        useDeleteUsersMutation();
    const [updateUsers, { isLoading: updateLoading }] =
        useUpdateUsersMutation();

    const handleCreateBlog = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        createCategory(data)
            .unwrap()
            .then(() => {
                event.target.reset();
            });
    };
    const handleUpdateUsers = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        updateUsers({ id: updateUsersItem.id, body: data })
            .unwrap()
            .then(() => setUpdateUsersItem(null));
    };
    return (
        <div className="pt-5 relative">
            <div className="h-screen px-4 bg-black fixed top-0 pt-[30px]">
                <Link
                    to={"/"}
                    className="text-white text-3xl font-bold mb-16 block pl-6">
                    RTK query
                </Link>
                <form
                    className="flex flex-col w-[300px] gap-y-3"
                    action=""
                    onSubmit={handleCreateBlog}>
                    <h3 className="text-white text-center text-2xl">
                        User create
                    </h3>
                    <input
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        type="text"
                        name="fname"
                        placeholder="First name..."
                        required
                    />
                    <input
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        type="text"
                        name="lname"
                        placeholder="Last name..."
                        required
                    />
                    <input
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        type="text"
                        name="job"
                        placeholder="Job..."
                        required
                    />
                    <select
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        name="gender"
                        required
                        id="">
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        type="number"
                        required
                        name="age"
                        placeholder="Age..."
                    />
                    <input
                        className="border rounded-lg py-2 bg-neutral-100 pl-3"
                        type="text"
                        name="bio"
                        placeholder="Bio..."
                        required
                    />
                    <button className="btn-11">
                        <span>{CreateLoading ? "Loading..." : "+ Create"}</span>
                    </button>
                </form>
            </div>
            {updateUsersItem && (
                <div className="">
                    <div
                        onClick={() => setUpdateUsersItem(null)}
                        className="absolute w-full h-[629px] bg-neutral-300 opacity-70 left-0 top-0"></div>
                    <form
                        className="ani-top flex flex-col w-[300px] absolute top-[30%] right-[30%] gap-y-3 bg-[#00000099] z-20 px-3 py-4 rounded-xl"
                        onSubmit={handleUpdateUsers}
                        action="">
                        <input
                            className="border bg-transparent pl-2 text-white py-1"
                            type="text"
                            defaultValue={updateUsersItem.fname}
                            name="fname"
                            required
                            placeholder="First name"
                        />
                        <input
                            className="border bg-transparent pl-2 text-white py-1"
                            type="text"
                            defaultValue={updateUsersItem.lname}
                            name="lname"
                            required
                            placeholder="Last name"
                        />
                        <input
                            className="border bg-transparent pl-2 text-white py-1"
                            type="text"
                            defaultValue={updateUsersItem.job}
                            name="job"
                            required
                            placeholder="Job"
                        />
                        <select
                            className="border bg-transparent pl-2 text-white py-1"
                            name="gender"
                            required
                            placeholder="Gender"
                            id="">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input
                            required
                            placeholder="Age"
                            className="border bg-transparent pl-2 text-white py-1"
                            type="number"
                            defaultValue={updateUsersItem.age}
                            name="age"
                        />
                        <input
                            required
                            className="border bg-transparent pl-2 text-white py-1"
                            type="text"
                            defaultValue={updateUsersItem.bio}
                            name="bio"
                            placeholder="Bio"
                        />
                        <button
                            disabled={updateLoading}
                            className="border rounded-xl bg-black text-white py-1 hover:bg-white hover:text-black transition-all">
                            {updateLoading ? "Loading..." : "Save"}
                        </button>
                        <button
                            type="button"
                            className="border rounded-xl bg-black text-white py-1 hover:bg-white hover:text-black transition-all"
                            onClick={() => setUpdateUsersItem(null)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
            {isLoading && (
                <div className="flex items-center justify-center absolute right-[600px] top-9">
                    <div className="dot-spinner">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                    </div>
                </div>
            )}
            <div className="flex justify-start gap-5 flex-wrap ml-[360px]">
                {data?.map((category) => (
                    <div
                        key={category.id}
                        className="border rounded-lg px-4 py-5 hover:scale-105 transition-all">
                        <img
                            className="w-52"
                            src={category.gender === "male" ? menimg : womenimg}
                            alt={category.gender}
                        />
                        <h5 className="text-center text-lg font-semibold text-blue-500">
                            {category.fname.charAt(0).toUpperCase() +
                                category.fname.slice(1)}
                        </h5>
                        <p className="text-center text-lg font-semibold text-blue-500">
                            {category.lname.charAt(0).toUpperCase() +
                                category.lname.slice(1)}
                        </p>
                        <p className="flex items-center gap-x-3">
                            <MdOutlineWorkOutline className="text-xl" />
                            {category.job.charAt(0).toUpperCase() +
                                category.job.slice(1)}
                        </p>
                        {/* <p>{category.gender}</p> */}
                        <div className="flex items-center gap-x-2">
                            <strong>{category.age}</strong>
                            <p> years old</p>
                        </div>
                        <p className="italic text-zinc-500">
                            {category.bio.charAt(0).toUpperCase() +
                                category.bio.slice(1)}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                            <button
                                onClick={() => setUpdateUsersItem(category)}
                                className="flex items-center gap-x-2 border py-1 px-2 rounded-lg"
                                title="Edit">
                                <img src={editimg} alt="" />
                                <p>Edit</p>
                            </button>
                            <button
                                className="flex items-center gap-x-2 border hover:bg-black transition-all border-red-500 text-red-500 py-1 px-2 rounded-lg active:opacity-60"
                                title="Delete"
                                onClick={() => deleteCategory(category.id)}>
                                <img src={deleteimg} alt="" />
                                <p>Delete</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
