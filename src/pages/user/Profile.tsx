import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Camera } from "lucide-react";
import Input from "../../components/ui/Input";
import { formatDate } from "../../lib/utils";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import { toast } from "react-toastify";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  bio: string | null;
  phone: string | null;
  birthDate: string | null;
  gender: string | null;
  active: boolean;
  createdAt: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().optional(),
  phone: Yup.string().nullable().optional(),
  birthDate: Yup.date().nullable().optional(),
  gender: Yup.string()
    .oneOf(["male", "female", "other", ""])
    .nullable()
    .optional(),
  bio: Yup.string().nullable().optional(),
});

const ProfilePage: React.FC = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const { data } = await axios.get<{ user: UserProfile }>(
        "/api/user/profile"
      );
      console.log(data.user);
      return data.user;
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: (userData: Partial<UserProfile>) =>
      axios.put("/api/user/profile", userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile. Please try again.");
    },
  });

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      phone: user?.phone || "",
      birthDate: user?.birthDate
        ? new Date(user.birthDate).toISOString().split("T")[0]
        : "",
      gender: user?.gender || "",
      bio: user?.bio || "",
    },
    validationSchema,
    onSubmit: (values) => {
      const updatedValues = {
        ...values,
        birthDate: values.birthDate
          ? new Date(values.birthDate).toISOString()
          : null,
      };
      updateProfileMutation.mutate(updatedValues);
    },
    enableReinitialize: true,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading profile
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100 p-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={user?.avatar || "/placeholder-avatar.png"}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                <Camera size={20} />
              </button>
            </div>
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            <p className="text-gray-600">{user?.role}</p>
            <p className="mt-2 text-sm text-gray-500">
              Member since {formatDate(new Date(user?.createdAt || ""))}
            </p>
          </div>
          <div className="md:w-2/3 p-8">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    {...formik.getFieldProps("name")}
                    className={`w-full ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    {...formik.getFieldProps("phone")}
                    className={`w-full ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="birthDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Birth Date
                  </label>
                  <Input
                    id="birthDate"
                    type="date"
                    {...formik.getFieldProps("birthDate")}
                    className={`w-full ${
                      formik.touched.birthDate && formik.errors.birthDate
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.birthDate && formik.errors.birthDate && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.birthDate}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Gender
                  </label>
                  <Select
                    id="gender"
                    {...formik.getFieldProps("gender")}
                    className={`w-full ${
                      formik.touched.gender && formik.errors.gender
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  {...formik.getFieldProps("bio")}
                  className={`w-full h-32 ${
                    formik.touched.bio && formik.errors.bio
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.bio && formik.errors.bio && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.bio}
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  disabled={updateProfileMutation.isPending || !formik.dirty}
                >
                  {updateProfileMutation.isPending
                    ? "Saving..."
                    : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
